import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1];

      const data = {
        image_base64: base64Image,
        category: 'eye', // 예: 'eye' 또는 'skin'
        animal: 'cat'    // 예: 'dog' 또는 'cat'
      };

      try {
        console.log("요청 시작");
        const response = await axios.post('http://127.0.0.1:8000/predict', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setResponse(response.data);
        console.log(response.status);
        console.log(response.data);
      } catch (error) {
        console.error("요청 실패:", error);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {response && (
        <div>
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;