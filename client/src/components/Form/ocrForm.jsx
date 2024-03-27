import React, { useState } from 'react';
import './ocrForm.css';

const ImageForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summarize, setSummarize] = useState(false);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSummarizeChange = (e) => {
    setSummarize(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('summarize', summarize);

    try {
      const response = await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data);
      } else {
        console.error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h3>اضف صورة لاستخراج النصوص منها</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" className="fileInput" />
        <label className="checkboxLabel">
          تلخيص:
          <input type="checkbox" checked={summarize} onChange={handleSummarizeChange} className="checkbox" />
        </label>
        <div className="submitDiv">
          <button type="submit" className="submitButton">استخرج</button>
        </div>
      </form>
      {response && (
        <div className="response">
          <div>    <p>{JSON.stringify(response)}</p> </div>
          <div>    <p>{JSON.stringify(response)}</p> </div>
        </div>
      )}
    </div>
  );
};

export default ImageForm;