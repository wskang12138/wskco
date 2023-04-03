const http = require('http');
const path = require('path');
const fse = require('fs-extra');
const multiparty = require('multiparty');

const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, 'data');

fse.emptyDir(UPLOAD_DIR);

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

server.on('request', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.status = 200;
    res.end();
    return;
  }

  const multipart = new multiparty.Form();
  multipart.parse(req, async (err, fields, files) => {
    if (err) return;
    const [chunk] = files.chunk;
    const [hash] = fields.hash;
    // const [filename] = fields.filename;
    await fse.move(chunk.path, `${UPLOAD_DIR}/${hash}`);

    const delay = Math.round(Math.random() * 5000);
    await sleep(delay);

    res.end(
      JSON.stringify({
        code: 200,
        message: `successful receive: ${hash}`
      })
    );
  });
});

server.listen(3001, () => console.log('server start: 3001'));
