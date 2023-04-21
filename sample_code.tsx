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
