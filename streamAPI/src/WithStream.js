import React, {useEffect, useState} from "react";
import useStreamApi from "./custom-hooks/useStreamApi";

export default function WithStream({children}) {
    const [reader, contentLength] = useStreamApi('https://raw.githubusercontent.com/GreenBuildingXML/Sample_gbXML_Files/master/ConferenceCenter%20(Older).xml')
    const [fetchedPercentage, setFetchedPercentage] = useState(0);
    const [processedPercentage, setProcessedPercentage] = useState(0);
    const [bufferedResult, setBufferedResult] = useState(null);

    useEffect(() => reader && (async () => {
            const chunks = [];
            const chunkedResult = new Uint8Array(4326791);
            let receivedLength = 0;
            let position = 0;

            while (true) {
                const {done, value} = await reader.read();

                if (done) {
                    break;
                }

                chunks.push(value);
                receivedLength += value.length;

                const percent = receivedLength / contentLength * 100
                setFetchedPercentage(percent > 100 ? 100 : percent)
            }

            for (let chunk of chunks) {
                chunkedResult.set(chunk, position);
                position += chunk.length;
                setProcessedPercentage(position / receivedLength * 100)
            }

            setBufferedResult(chunkedResult);
        })(), [reader])

    return (<>
            {React.cloneElement(children[0], {fetchedPercentage, processedPercentage})}
            {bufferedResult && React.cloneElement(children[1], {data: bufferedResult})}
        </>);
}
