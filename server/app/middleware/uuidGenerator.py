import uuid
import time

def generate_uuid():
    time.sleep(0.1)
    token = str(uuid.uuid4())
    print(token)
    return token

def generate_uuidUser(username):
    return str(uuid.uuid4()) + username