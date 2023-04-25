// 新規のXMLドキュメントを作成
const xmlDocument = document.implementation.createDocument(null, null, null);

// ルート要素を作成してドキュメントに追加
const rootElement = xmlDocument.createElement("root");
xmlDocument.appendChild(rootElement);

// 子要素を作成してルート要素に追加
const childElement1 = xmlDocument.createElement("child1");
const childText1 = xmlDocument.createTextNode("テキスト1");
childElement1.appendChild(childText1);
rootElement.appendChild(childElement1);

// 別の子要素を作成してルート要素に追加
const childElement2 = xmlDocument.createElement("child2");
const childText2 = xmlDocument.createTextNode("テキスト2");
childElement2.appendChild(childText2);
rootElement.appendChild(childElement2);

// XMLドキュメントを文字列に変換
const xmlString = new XMLSerializer().serializeToString(xmlDocument);

console.log(xmlString);


const ns = 'http://example.com/ns'; // 名前空間URI
const prefix = 'ex'; // 名前空間接頭辞

const element = document.createElementNS(ns, 'foo');
element.setAttributeNS('http://www.w3.org/2000/xmlns/', `xmlns:${prefix}`, ns);
// <foo xmlns:ex="http://example.com/ns" />

const ns1 = 'http://example.com/ns1';
const ns2 = 'http://example.com/ns2';
const prefix1 = 'ex1';
const prefix2 = 'ex2';

const element = document.createElement('foo');
element.setAttributeNS('http://www.w3.org/2000/xmlns/', `xmlns:${prefix1}`, ns1);
element.setAttributeNS('http://www.w3.org/2000/xmlns/', `xmlns:${prefix2}`, ns2);
// <foo xmlns:ex1="http://example.com/ns1" xmlns:ex2="http://example.com/ns2" />

const ns = 'http://example.com/ns'; // 名前空間URI
const prefix = 'ex'; // 名前空間接頭辞

const element = document.createElementNS(ns, `${prefix}:foo`);
const childElement = document.createElementNS(ns, `${prefix}:bar`);
element.appendChild(childElement);

// ns取得方法
const rootElement = document.documentElement; // ルート要素を取得
const fooElement = rootElement.querySelector('ex\\:foo') as Element; // ex:foo要素を取得
const namespaceURI = fooElement.namespaceURI; // 名前空間URIを取得
console.log(namespaceURI); // "http://example.com/ns"が出力される

const rootElement = document.documentElement;
const namespaceURI = rootElement.lookupNamespaceURI('ex');
console.log(namespaceURI); // 'http://example.com/catalog'

const rootElement = document.documentElement;
const namespaceURI = rootElement.getAttribute('ex:xmlns');
console.log(namespaceURI); // 'http://example.com/catalog'


function addIndentationToXml(xmlDoc: Document): void {
  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(xmlDoc);
  const formattedXmlString = formatXml(xmlString);
  const parser = new DOMParser();
  const formattedXmlDoc = parser.parseFromString(formattedXmlString, "text/xml");
  xmlDoc.replaceChild(xmlDoc.importNode(formattedXmlDoc.documentElement, true), xmlDoc.documentElement);
}

function formatXml(xml: string): string {
  const PADDING = " ".repeat(2); // 2 spaces
  const reg = /(>)(<)(\/*)/g;
  let formatted = "";
  let pad = 0;

  xml = xml.replace(reg, "$1\n$2$3");

  xml.split("\n").forEach((node) => {
    let indent = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0;
    } else if (node.match(/^<\/\w/)) {
      if (pad !== 0) {
        pad -= 1;
      }
    } else if (node.match(/^<\w([^>]*[^/])?>.*$/)) {
      indent = 1;
    } else {
      indent = 0;
    }

    const padding = PADDING.repeat(pad);
    formatted += padding + node + "\n";
    pad += indent;
  });

  return formatted.trim();
}



interface MyData {
  id: number;
  name: string;
  age: number;
}

const myDataList: MyData[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 40 },
  { id: 5, name: 'Emily', age: 45 },
  { id: 6, name: 'Frank', age: 50 },
];

const pageSize = 2; // 1ページあたりのデータ数

const getPage = (pageNumber: number, data: MyData[]): MyData[] => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
};

const currentPage = 2; // 現在のページ
const currentData = getPage(currentPage, myDataList); // 現在のページに表示するデータ

console.log(currentData); // [{ id: 3, name: 'Charlie', age: 35 }, { id: 4, name: 'David', age: 40 }]
