from fastapi import APIRouter, File, UploadFile
from fastapi.responses import StreamingResponse
import easyocr
from PIL import Image
import io
from pydantic import BaseModel
import cv2
from ArabicOcr import arabicocr
from typing import List
import os
from datetime import datetime

router = APIRouter()

class OCRResult(BaseModel):
    words: List[str]
    output_image: bytes

@router.post("/ocr")
async def ocr(file: UploadFile = File(...)):
    extracted_text = None

    # Read the image file
    contents = await file.read()
    img = Image.open(io.BytesIO(contents))

    # Initialize EasyOCR reader with Arabic language
    reader = easyocr.Reader(['ar'])

    # Read text from the image
    result = reader.readtext(img)

    # Extract the text from the result
    extracted_text = ' '.join([entry[1] for entry in result])

    return {"extracted_text": extracted_text}


@router.post("/ocr2", response_model=OCRResult)
async def ocr_flow(file: UploadFile = File(...)):
    # Save the uploaded image temporarily
    with open('uploaded_image.jpg', 'wb') as buffer:
        buffer.write(await file.read())

    # Generate a timestamp for the operation
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")

    # Create the 'outputs' directory if it doesn't exist
    os.makedirs("outputs", exist_ok=True)

    # Perform OCR on the uploaded image
    output_image_name = f"{timestamp}.jpg"
    output_image_path = os.path.join("outputs", output_image_name)
    results = arabicocr.arabic_ocr('uploaded_image.jpg', output_image_path)
    words = [result[1] for result in results]

    # Write words to file.txt
    with open(os.path.join("outputs", f"{timestamp}.txt"), 'w', encoding='utf-8') as myfile:
        myfile.write(str(words))

    # Check if the file was created successfully
    if os.path.exists(output_image_path):
        print(f"Output image '{output_image_path}' created successfully.")
    else:
        print(f"Failed to create output image '{output_image_path}'.")

    # Read the output image as binary data
    with open(output_image_path, 'rb') as img_file:
        output_image = img_file.read()

    # Return the response with binary data
    return StreamingResponse(io.BytesIO(output_image), media_type="image/jpeg")