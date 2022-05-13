import useXMLExtractor from "./custom-hooks/useXMLExtractor";

export default function DataConsumer({data}) {
    const [elementCollection, stringifiedXML] = useXMLExtractor(data, 'Coordinate');
    console.log(elementCollection)
    return <></>
}