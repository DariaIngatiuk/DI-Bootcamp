import psycopg2
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()
DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

# DB connection
connetion = psycopg2.connect(database = DB_NAME,
                             user = DB_USER,
                             password = DB_PASSWORD,
                             host = DB_HOST,
                             port = DB_PORT)

cursor = connetion.cursor()

# API connection
countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

# file_name = 'first_country.json'
# with open(file_name, 'w') as file:
#         json.dump(data[0], file, indent=2)    
for i in range(10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace('\'','') 
    flag_code = data[i]['flag']
    subregion = data[i]['region']
    population = data[i]['population']


    query = f'''INSERT INTO random_countries 
    (name, capital, flag_code, subregion, population) 
    VALUES ('{name}', '{capital}', '{flag_code}', '{subregion}', '{population}')'''
    cursor.execute(query)
    connetion.commit()

print("Successfully added nto DB")