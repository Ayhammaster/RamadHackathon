# FastAPI Application

This is a FastAPI application designed to provide endpoints for user signup, login, and OCR (Optical Character Recognition) functionalities.

## Installation

To install and run this application, follow these steps:

Sure, here are the steps for installation and starting your FastAPI application using a Python script named `run.py`:

1. **Clone Repository**: If you haven't already, clone your repository containing the FastAPI application to your local machine navigate to `server/` in your terminal.

2. **Install Dependencies**: Make sure you have Python installed on your system. Then, install the required dependencies listed in the `requirements.txt` file. You can install them using the following command in your terminal:

    ```
    pip install -r requirements.txt
    ```

4. **Run `run.py` Script**: in the ./server 

6. **Start the Application**: Open your terminal, navigate to the root directory of your FastAPI application, then run the command `cd server/`, and run the following command:

    ```
    python run.py
    ```

    This command will execute the `run.py` script, which in turn will start your FastAPI application using `uvicorn` with auto-reload enabled.

7. **Access the Application**: Once the application is running, you can access it by navigating to `http://127.0.0.1/:8000` in your web browser. You should see the FastAPI documentation page where you can explore and test the available endpoints.

That's it! Your FastAPI application should now be installed and running using the `python run.py` command.

## Usage

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