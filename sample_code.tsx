const convertToFullWidth = (str: string): string => {
    return str.replace(/[!-~]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) + 0xfee0);
    });
  };  
