import React, { useState } from 'react';
import { WatermarkProps } from './interface';

const Watermark: React.FC<WatermarkProps> = ({
  url,
  className,
  textAlign = 'end',
  textBaseline = 'alphabetic',
  font = '14px Microsoft Yahei',
  fillStyle = '#bdbdbd',
  content = '@Watermark',
  cb = (base64Url: string) => {},
  right = 10,
  bottom = 10,
}) => {
  if (!url) return null;

  const [imageSrc, setImageSrc] = useState('');

  const image = new Image();
  image.src = url;
  image.crossOrigin = 'anonymous';
  image.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(image, 0, 0);
      ctx.textAlign = textAlign;
      ctx.textBaseline = textBaseline;
      ctx.font = font;
      ctx.fillStyle = fillStyle;
      ctx.fillText(content, image.width - right, image.height - bottom);
    }

    const base64Url = canvas.toDataURL('image/webp');
    cb && cb(base64Url);
    setImageSrc(base64Url);
  };

  return <img src={imageSrc} className={className} />;
};

export default Watermark;
