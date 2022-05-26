import { useEffect, useState } from 'react';

export default function useStreamsApi(source) {
  const [reader, setReader] = useState(null);
  const [contentLength, setContentLength] = useState(null);

  useEffect(() => {
    fetch(source).then((response) => {
      console.log(source)
      setContentLength(+response.headers.get('Content-Length'));
      setReader(response.body.getReader());
    });
  }, []);

  return [reader, contentLength];
}


