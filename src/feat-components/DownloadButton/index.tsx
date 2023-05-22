import { Button } from 'wskco';
import React from 'react';
import * as XLSX from 'xlsx';
import { BaseDownloadProps } from './interface';

type NativeDownloadProps = BaseDownloadProps;

export async function downloadFileToLocal(param: BaseDownloadProps) {
  const { fileName, downloadType, content = '', xlsxType } = param;
  const contentType = Object.prototype.toString.call(content)?.slice(8, -1);

  switch (downloadType) {
    case 'xlsx':
      if (contentType === 'String') {
        const workbook = XLSX.read(content, { type: xlsxType });
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
      } else if (contentType === 'Array') {
        // @ts-ignore
        const ws = XLSX.utils.aoa_to_sheet(content);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Excel1');
        /* 保存至文件 */
        XLSX.writeFile(wb, `${fileName}.xlsx`);
      }
      return true;
    case 'cnc':
    case 'nc':
    case 'txt':
    case 'prl':
      // @ts-ignore
      // eslint-disable-next-line no-case-declarations
      let uri;
      if (contentType === 'String') {
        //@ts-ignore
        uri =
          `data:text/${downloadType};charset=utf-8,\ufeff` +
          encodeURIComponent(content as any);
      } else {
        return false;
      }
      // else if (Array.isArray(contentType)) {
      //   //@ts-ignore
      //   uri = `data:text/${downloadType};charset=utf-8,\ufeff` + encodeURIComponent(content?.join('\n'));
      // }
      // if (!uri) return false;
      // @ts-ignore
      // eslint-disable-next-line no-case-declarations
      const link = document.createElement('a');
      link.style.opacity = '0';
      link.href = uri;
      link.download = `${fileName}.${downloadType}`;
      // @ts-ignore
      document.body.appendChild(link);
      link.click();
      // @ts-ignore
      document.body.removeChild(link);
      return true;
    case 'json':
      if (contentType === 'Object') {
        const uri =
          'data:text/csv;charset=utf-8,\ufeff' +
          encodeURIComponent(JSON.stringify(content));
        // @ts-ignore
        const link = document.createElement('a');
        link.style.opacity = '0';
        link.href = uri;
        link.download = `${fileName}.${downloadType}`;
        // @ts-ignore
        document.body.appendChild(link);
        link.click();
        // @ts-ignore
        document.body.removeChild(link);
      } else {
        return false;
      }
      return true;
    default:
      return false;
  }
}

const DownloadButton = (props: NativeDownloadProps) => {
  const {
    downloadType = 'txt', //下载文件的格式
    url,
    fileName,
    contentCallback,
    content = '',
    xlsxType = 'string',
    buttonText = '下载',
    downloadedCallback,
    ...restProps
  } = props;

  const downloadFn: any = async (obj: NativeDownloadProps) => {
    try {
      const { url } = obj;
      if (url) {
        // @ts-ignore
        const res = await fetch(url);
        if (!res?.ok) return false;
        if (contentCallback) {
          obj.content = await contentCallback(res);
          downloadedCallback(await downloadFileToLocal(obj));
        }
        const downloadContent =
          downloadType === 'json' ? await res?.json() : await res?.text();
        obj.content = downloadContent;
        downloadedCallback(await downloadFileToLocal(obj));
      } else {
        if (contentCallback) {
          obj.content = await contentCallback(content);
        }
        downloadedCallback(await downloadFileToLocal(obj));
      }
    } catch {
      return false;
    }
  };

  return (
    <Button
      onClick={() =>
        downloadFn({
          downloadType,
          url,
          fileName,
          contentCallback,
          content,
          xlsxType,
        })
      }
      {...restProps}
    >
      {buttonText}
    </Button>
  );
};

export default DownloadButton;
