import pytest
from fastapi.testclient import TestClient
from ..main import app

client = TestClient(app)

@pytest.fixture
def valid_user():
    return {"username": "testuser", "password": "TestPassword123"}

def test_signup_valid(valid_user):
    response = client.post("/signup", json=valid_user)
    assert response.status_code == 400
    assert "Username already exists" in response.json()["detail"]



def test_signup_existing_user(valid_user):
    response = client.post("/signup", json=valid_user)
    assert response.status_code == 400
    assert "username already exists" in response.text.lower()

def test_login(valid_user):
    # First, sign up the user
    client.post("/signup", json=valid_user)
    # Now, attempt to login
    response = client.post("/login", json=valid_user)
    assert response.status_code == 200
    assert response.json() == {"message": "Login successful"}

def test_login_invalid_username(valid_user):
    invalid_user = {"username": "nonexistentuser", "password": "TestPwd123"}
    response = client.post("/login", json=invalid_user)
    assert response.status_code == 401
    assert "invalid username or password" in response.text.lower()

def test_login_invalid_password(valid_user):
    invalid_password = {"username": valid_user["username"], "password": "InvalidPwd123"}
    response = client.post("/login", json=invalid_password)
    assert response.status_code == 401
    assert "invalid username or password" in response.text.lower()
