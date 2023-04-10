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

<li onClick={(e) => clickEvent(e)} style={{ display: 'list-item' } />

const liClickEvent = () => {
  if (buttonRef.current) {
    buttonRef.current.click();
  }
};

 <button type="submit" ref={buttonRef} style={{ display: "none" }} />
 <li onClick={liClickEvent}>Click me</li>
