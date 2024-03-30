async function performOCR2(formData, userToken) {
    const url = `https://ramadhackathon-1.onrender.com/ocr/v2?user_token=${encodeURIComponent(userToken)}`;
    const requestOptions = {
      method: 'POST',
      body: formData
    };
  
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'OCR request failed');
      }
      const blob = await response.blob();
      return URL.createObjectURL(blob); 
    } catch (error) {
      console.error('Error performing OCR:', error);
      throw error;
    }
}
  
export { performOCR2 };