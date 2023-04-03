import { DownloadButton } from 'wskco';
import React from 'react';

// 换行符处换行
const str = `test txt1
test txttest txttest txt2
test txttest txttest txttest txt3
test txttest txttest txt4
test txttest txttest txt5
test txttest txttest txt6
test txttest txttest txt7
`;

const demo5 = () => {
  return (
    <DownloadButton
      buttonText="下载cnc文件"
      type="primary"
      downloadType="cnc"
      content={str}
      fileName={`test_txt_${new Date().toLocaleString()}`}
    />
  );
};

export default demo5;
