import React, { useState } from 'react';
import './ocrForm.css';
import Loader from './loading';
const ImageForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summarize, setSummarize] = useState(false);
  const [response, setResponse] = useState(null);
  const [imageData, setImageData] = useState('');
  const [loading, setLoading] = useState(false); 


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSummarizeChange = (e) => {
    setSummarize(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('token', '1f51363c-081a-4e45-beca-ffc3c83e6340');

    try {
      setLoading(true); // Set loading to true when submitting the form

      const response = await fetch('http://127.0.0.1:8000/ocr/v3', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        const words = data.words;
        setResponse(words);
        setImageData(data.image);
      } else {
        console.error('Failed to fetch');
      }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setLoading(false); // Set loading to false after receiving the response or encountering an error
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
      {loading &&   <Loader />   }
      {response && (
        <div className="response">
     
          <div className="responseimg">
          <img src={`data:image/jpeg;base64,${imageData}`} alt="Uploaded Image" />
             </div>

             <div className="txt" >    
                {response.map((word, index) => (
        <div key={index}>{word}</div>
               ))}
           </div>
        
        </div>
           )}


    </div>
  );
};

export default ImageForm;