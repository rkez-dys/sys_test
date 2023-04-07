const uploadFile = async (file: File) => {
    const headers = {
      'Content-Type': file.type,
      'Content-Disposition': `attachment; filename="${file.name}"`
    };
  
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: file,
      headers: headers
    });
  
    const data = await response.json();
    return data;
  };