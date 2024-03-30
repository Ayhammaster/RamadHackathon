# Ramadan Hackathon Project for Suhur Squad Team (Torjoman Plateform)
> [Final Video on Google Drive](https://drive.google.com/file/d/1OL63Qy9pk9w5zgtf3nb6e-JdgTckFDW6/view?usp=sharing)

[![Torjoman Final Video](https://images.unsplash.com/photo-1622137879013-beaca5144a4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)](https://drive.google.com/file/d/1OL63Qy9pk9w5zgtf3nb6e-JdgTckFDW6/view?usp=sharing)

## Internal AI Process for Optical Character Recognition (OCR) in Torjoman Platform

#### Overview

The internal AI process for Optical Character Recognition (OCR) is a sophisticated system designed to extract text from images with high accuracy. Leveraging state-of-the-art deep learning techniques, the AI model undergoes several stages of processing to detect and recognize text within uploaded images. Below is an overview of the internal AI process:

#### 1. Image Preprocessing

Before text extraction begins, the uploaded image undergoes preprocessing to enhance its quality and prepare it for analysis. This preprocessing may involve operations such as:

- **Normalization**: Adjusting brightness, contrast, and color balance to improve image quality and readability.
- **Noise Reduction**: Filtering out noise and artifacts to improve the clarity of text regions.
- **Rotation Correction**: Automatically detecting and correcting image orientation to ensure proper alignment for text recognition.

#### 2. Text Detection

Once the image is preprocessed, the AI model employs advanced techniques to detect regions containing text. This involves analyzing pixel patterns, shapes, and textures to identify potential text areas within the image. Key steps in text detection include:

- **Feature Extraction**: Extracting relevant features from the image using convolutional neural networks (CNNs) or similar architectures.
- **Bounding Box Generation**: Drawing bounding boxes around detected text regions to delineate their boundaries for further processing.

#### 3. Text Recognition

With text regions identified, the AI model proceeds to recognize the actual characters and words within these regions. This recognition process involves mapping image features to corresponding textual representations. Key aspects of text recognition include:

- **Character Segmentation**: Separating individual characters within text regions for recognition, especially in handwritten or cursive text.
- **Sequence Modeling**: Employing recurrent neural networks (RNNs) or attention mechanisms to model the sequential nature of text and decipher complex patterns.
- **Language Modeling**: Incorporating language models to improve recognition accuracy by leveraging contextual information and linguistic constraints.

#### 4. Post-Processing

After text recognition, the extracted text undergoes post-processing steps to refine the results and improve their quality. Post-processing techniques may include:

- **Spell Checking**: Correcting spelling errors and inconsistencies in the recognized text using dictionaries or language models.
- **Text Alignment**: Aligning recognized text with the original image to ensure spatial coherence and accuracy.
- **Confidence Filtering**: Filtering out low-confidence predictions to enhance the overall reliability of the extracted text.

#### 5. Output Generation

Finally, the recognized text is compiled into a structured output format for presentation or further processing. This output may include:

- **Plain Text**: A simple text representation of the extracted content.
- **Structured Data**: Extracted text organized into tables, forms, or other structured formats.
- **Visual Overlays**: Annotated images with overlaid text boxes or highlights to visualize the extracted content.

#### Performance Optimization and Model Updates

The internal AI process for OCR undergoes continual optimization and refinement to enhance performance and accuracy. This may involve:

- **Model Fine-Tuning**: Periodically updating and fine-tuning the AI model with additional training data to improve its ability to handle diverse text patterns and contexts.
- **Algorithmic Improvements**: Iteratively refining algorithms and methodologies based on empirical performance metrics and user feedback.
- **Hardware Acceleration**: Leveraging hardware accelerators such as GPUs or TPUs to speed up computation and enable real-time or near-real-time processing for large volumes of images.

---

## FastAPI Application

This is a FastAPI application designed to provide endpoints for user signup, login, and OCR (Optical Character Recognition) functionalities.

### Installation

To install and run this application, follow these steps:

1. **Clone Repository**: If you haven't already, clone your repository containing the FastAPI application in the server branch to your local machine 
```bash
    git clone https://github.com/Ayhammaster/RamadHackathon.git
    git branch --track origin server
```
then, navigate to `server/` in your terminal.

2. **Install Dependencies**: Make sure you have Python installed on your system. Then, install the required dependencies listed in the `requirements.txt` file. You can install them using the following command in your terminal:

    ```
    pip install -r requirements.txt
    ```

3. **Run `run.py` Script**: in the ./server 
 Open your terminal, navigate to the root directory of your FastAPI application, then run the command `cd server/`, and run the following command:

    ```
    python run.py
    ```

    This command will execute the `run.py` script, which in turn will start your FastAPI application using `uvicorn` with auto-reload enabled.

    You might need to remover the host inside the `uvicorn` function in `run.py`, it's there for deployment issues.

4. **Access the Application**: Once the application is running, you can access it by navigating to `http://127.0.0.1/:8000` in your web browser. You should see the FastAPI documentation page where you can explore and test the available endpoints.

That's it! Your FastAPI application should now be installed and running using the `python run.py` command.

### Usage

Once the application is running, you can interact with it using the following endpoints:

### Signup

- **Endpoint:** `/signup`
- **Method:** POST
- **Description:** Allows users to sign up with a username, email, and password.
- **Request Body:**
  ```json
  {
      "username": "string",
      "email": "string",
      "password": "string"
  }
  ```
- **Responses:**
  - `200`: Successful response.
  - `422`: Validation error.

### Login

- **Endpoint:** `/login`
- **Method:** POST
- **Description:** Allows users to log in with their username and password.
- **Request Body:**
  ```json
  {
      "username": "string",
      "password": "string"
  }
  ```
- **Responses:**
  - `200`: Successful response.
  - `422`: Validation error.

### OCR (Optical Character Recognition)

#### OCR Version 1

- **Endpoint:** `/ocr/v1`
- **Method:** POST
- **Description:** Performs OCR on an image file.
- **Query Parameter:** `user_token` (User token for validation)
- **Request Body:** Multipart Form Data
  - `file`: Image file to perform OCR on.
- **Responses:**
  - `200`: Successful response.
  - `422`: Validation error.

#### OCR Version 2 (Flow)

- **Endpoint:** `/ocr/v2`
- **Method:** POST
- **Description:** Performs OCR on an image file with flow.
- **Query Parameter:** `user_token` (User token for validation)
- **Request Body:** Multipart Form Data
  - `file`: Image file to perform OCR on.
- **Responses:**
  - `200`: Successful response.
  - `422`: Validation error.

#### OCR Version 3 (Image)

- **Endpoint:** `/ocr/v3`
- **Method:** POST
- **Description:** Performs OCR on an image file.
- **Query Parameter:** `user_token` (User token for validation)
- **Request Body:** Multipart Form Data
  - `file`: Image file to perform OCR on.
- **Responses:**
  - `200`: Successful response.
  - `422`: Validation error.

### Database User: SQLite3

**Database**: The application uses SQLite as the database, which is included by default in Python. No additional setup is required for the database as SQLite creates a file-based database. The database file will be created automatically when the application runs for the first time.

---

## Torjoman Client Side Documentation

#### Installation

1. **Clone Repository**: Clone the repository `client branch` containing the React client side to your local machine.
``` bash
    git clone https://github.com/Ayhammaster/RamadHackathon.git
    git branch --track origin client
```

2. **Install Dependencies**: Navigate to the root directory of your React client side in the terminal then to the `client/` folder and run the following command to install the dependencies listed in the `package.json` file:

    ``` bash
    npm install
    ```

#### Usage

1. **Development Mode**: To run the client side in development mode, use the following command:

    ``` bash
    npm run dev
    ```

    This command starts the development server using Vite and allows you to view the client side in your browser. Changes to the code will trigger hot module replacement for instant updates.

2. **Build**: To build the client side for production, use the following command:

    ```bash
    npm run build
    ```

    This command generates a production-ready build of your client side in the `dist` directory. The output will be optimized for performance and ready to be deployed to a web server.

3. **Linting**: To lint your code using ESLint, use the following command:

    ```bash
    npm run lint
    ```

    This command checks your JavaScript and JSX files for syntax and style errors. It ensures that your code follows the defined coding standards and best practices.

4. **Preview**: To preview the production build locally, use the following command:

    ```bash
    npm run preview
    ```

    This command serves the production build of your client side on a local server for previewing. It simulates how the client side will look and behave when deployed to a production environment.

#### Routes

The React client side uses React Router for routing. Here are the routes defined in the `App.jsx` file:

- `/`: Home page with header, hero section, form component, and footer.
- `/about-us`: About us page.
- `/chatting`: Contact page for chatting.
- `/signup`: Signup page.
- `/login`: Login page.
- `/reset-password`: Password reset page.
- `/docs`: API documentation page using Swagger UI.
- `/privacy-policy`: Privacy policy page.
- `/terms-and-conditions`: Terms and conditions page.
- `/intellectual-property`: Intellectual property page.
- `/pop`: Popup page.
- `*`: NotFound page for handling 404 errors.
- `/500`: InternalServerError page for handling 500 errors.

These routes are managed using React Router's `BrowserRouter` and `Routes` components, and each route is associated with its respective component for rendering. The client side is structured to provide a seamless user experience with clear navigation paths and error handling.