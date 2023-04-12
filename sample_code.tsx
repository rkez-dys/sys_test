import React, { useState, useRef } from "react";

const Test = () => {
  const [data, setData] = useState<string>('');
  const textRef = useRef<HTMLInputElement>(null);

  const handleDataChange = () => {
    setData(textRef.current?.value ?? '');
  }

  return (
    <div>
      <input type="text" ref={textRef} onChange={handleDataChange} />
    </div>
  );
};

export default Test;
