import {useEffect, useState} from "react";

export default function useStreamApi(source) {
    const [reader, setReader] = useState(null);
    const [contentLength, setContentLength] = useState(null);

    useEffect(() => {
        fetch(source).then((response) => {
            setContentLength(+response.headers.get('Content-Length'));
            setReader(response.body.getReader());
        });
    }, [])

    return [reader, contentLength];
}
