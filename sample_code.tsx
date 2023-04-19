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
