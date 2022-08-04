const axios = require('axios');
let mammoth = require('mammoth');

const getData = async () => {
  const wordData = await axios.get(
    'https://t4597045.p.clickup-attachments.com/t4597045/aa7a74fc-77eb-44c1-936b-cb0b55d7ed87/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%20Microsoft%20Word.docx',
    {
      responseType: 'stream',
    },
  );
  const stream = wordData.data;
  let bufs = [];
  let buf = null;
  stream
    .on('data', (chunk) => {
      bufs.push(chunk);
      buf = Buffer.concat(bufs);
    })
    .on('end', () => {
      mammoth.convertToHtml({ buffer: buf }).then((result) => {
        const html = result.value;
        console.log(html);
      });
    });
};

getData();

