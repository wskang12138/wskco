import { ReactNode } from 'react';
interface contentObject {
    [prop: string]: any;
}

type BaseDownloadProps = {
    /**
     * @description 下载文件的格式
     */
    downloadType: 'txt' | 'xlsx' | 'json' | 'cnc' | 'prl' | 'nc';
    /**
     * @description 下载文件的地址
     */
    url?: string | URL;
    /**
     * @description 下载文件的名称
     */
    fileName: string;
    /**
     * @description 调整文件内容的方法，必须有返回值
     */
    contentCallback?: any;
    /**
     * @description 下载文件的内容
     * @defalut ""
     */
    content?: string | any[][] | contentObject;
    /**
     * @description xlsx的输入类型
     * @default "string"
     */
    xlsxType?: 'base64' | 'binary' | 'string' | 'buffer' | 'array' | 'file';
    /**
     * @description 下载按钮的内容
     * @default "下载"
     */
    buttonText?: ReactNode;
    /**
     * @description 下载之后调用的回调函数
     */
    downloadedCallback?: any;
};
export { BaseDownloadProps } 