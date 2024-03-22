from flask import Flask, jsonify, request, render_template
import easyocr
from PIL import Image
import io

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def ocr():
    extracted_text = None
    if request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        file = request.files['file']

        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Read the image file
        img = Image.open(io.BytesIO(file.read()))

        # Initialize EasyOCR reader with Arabic language
        reader = easyocr.Reader(['ar'])

        # Read text from the image
        result = reader.readtext(img)

        # Extract the text from the result
        extracted_text = ' '.join([entry[1] for entry in result])


    return render_template('index.html', extracted_text=extracted_text)

if __name__ == '__main__':
    app.run(debug=True)
