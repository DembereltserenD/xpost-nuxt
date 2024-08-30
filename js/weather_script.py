import os
import requests
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# Get the API key from the environment variable
api_key = os.getenv('c797565cc05a410181b180628243008')

# Use the API key in your request
url = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q=Ulaanbaatar"

response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print(f"Current temperature in Ulaanbaatar: {data['current']['temp_c']}°C")
    print(f"Condition: {data['current']['condition']['text']}")
else:
    print(f"Error: {response.status_code}, {response.text}")