export default function useXMLExtractor(bufferedXMLData, elementName) {
  let elementCollection = [];
  let stringifiedXML = '';

  if (bufferedXMLData.byteLength) {
    const xmlStr = new window.DOMParser().parseFromString(
      new TextDecoder('utf-8').decode(bufferedXMLData),
      'text/xml',
    );
    const elementCollection = xmlStr.getElementsByTagName(elementName);
    const stringifiedXML = new TextDecoder('utf-8').decode(bufferedXMLData);
    return [elementCollection, stringifiedXML];
  } else {
    return [elementCollection, stringifiedXML];
  }
}
