import os
import pytest
from fastapi.testclient import TestClient
from PIL import Image

from app.main import app

client = TestClient(app)

@pytest.fixture
def valid_image_file():
    # Create a temporary test image file
    with open('test_image.jpg', 'wb') as f:
        image = Image.new("RGB", (100, 100), "white")
        image.save(f, format="JPEG")
    yield 'test_image.jpg'
    # Clean up the temporary test image file
    os.remove('test_image.jpg')

def test_ocr(valid_image_file):
    files = {'file': open(valid_image_file, 'rb')}
    response = client.post("/ocr", files=files)
    assert response.status_code == 200
    assert "extracted_text" in response.json()

def test_ocr2(valid_image_file):
    files = {'file': open(valid_image_file, 'rb')}
    response = client.post("/ocr2", files=files)
    assert response.status_code == 200
    assert response.headers['content-type'] == 'image/jpeg'
    # Optional: Save the received image for manual inspection
    with open('output_image.jpg', 'wb') as f:
        f.write(response.content)
