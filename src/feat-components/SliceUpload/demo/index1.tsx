import React from 'react';
import { SliceUpload } from 'wskco';

export default () => {
  // 这里用的是本地起的 node 服务
  const requestUpload = (data: Document | XMLHttpRequestBodyInit | null | undefined) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('post', 'http://localhost:3001');
      xhr.send(data);
      xhr.onload = (e) => {
        resolve((e.target as XMLHttpRequest).response);
      };
    });
  };

  // 并发上传，数量默认为 4
  const concurrentUpload = async (taskList: string | any[], limit = 4) => {
    const ret = [];
    const executing:any = [];

    for (const t of taskList) {
      const p = Promise.resolve().then(t);
      ret.push(p);
      if (limit < taskList.length) {
        const e:any = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= limit) {
          await Promise.race(executing);
        }
      }
    }

    return Promise.all(ret);
  };

  const handleChange = async (data: { chunkList: any; }) => {
    console.log('handleChange: ', data);
    const { chunkList } = data;
    const res = await concurrentUpload(
      chunkList.map(
        ({ formData }:any ) =>
          () =>
            requestUpload(formData)
      )
    );
    console.log(res);
  };
//size 不能为0
  return <SliceUpload onChange={handleChange}  />;
};
