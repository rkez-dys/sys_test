import React from 'react';

class MyComponent extends React.Component {
  clickEvent = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault(); // デフォルトの動作をキャンセルする
    // HTML のバリデーションを行うコードを記述する
    const form = e.currentTarget.form;
    if (form.checkValidity()) {
      console.log("HTML is valid");
    } else {
      console.log("HTML is invalid");
    }
  }

  render() {
    return (
      <li onClick={(e) => this.clickEvent(e)}>Click me!</li>
    );
  }
}
