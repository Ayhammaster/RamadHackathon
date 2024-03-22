# RamadHackathon - Arabic Textify Plateform

## Plateform Server

This Flask application provides a basic web interface for performing OCR (Optical Character Recognition) on images. It includes an endpoint to upload images and retrieve text extracted from them. Additionally, it has a health check endpoint to verify the application's status.

To start the Flask application, run the following command:

```bash
python run.py
```

Once the application is running, you can interact with it using the following endpoints:

- POST /ocr: Upload an image file and receive text extracted from it.
- GET /health: Check the health status of the application.

### License

This project is licensed under the MIT License. See the LICENSE file for details.