const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
const average = sum / numbers.length;

console.log(average); // 結果は3

const originalArray: string[] = ['A', '', 'B', '', 'C'];
const newArray: string[] = originalArray.filter((value: string) => value !== '');

 {newData.list[0].aaa.map((_, index) => {
          return (
            <tr key={index}>
              {newData.list.map((v, i) => {
                return (
                  <React.Fragment key={i}>
                    <td>{v.aaa[index]}</td>
                    <td>{v.bbb[index]}</td>
                  </React.Fragment>
                );
              })}
            </tr>
          );
        })}
