""" Exercise 3: Zara
Here is some information about a brand.
name: Zara 
creation_date: 1975 
creator_name: Amancio Ortega Gaona 
type_of_clothes: men, women, children, home 
international_competitors: Gap, H&M, Benetton 
number_stores: 7000 
major_color: 
    France: blue, 
    Spain: red, 
    US: pink, green
2. Create a dictionary called brand which value is the information from part one 
(turn the info into keys and values).
The values type_of_clothes and international_competitors should be a list. 
The value of major_color should be a dictionary.
3. Change the number of stores to 2.
4. Print a sentence that explains who Zaras clients are.
5. Add a key called country_creation with a value of Spain.
6. Check if the key international_competitors is in the dictionary. 
If it is, add the store Desigual.
7. Delete the information about the date of creation.
8. Print the last international competitor.
9. Print the major clothes colors in the US.
10. Print the amount of key value pairs (ie. length of the dictionary).
11. Print the keys of the dictionary.
12. Create another dictionary called more_on_zara with the following details:
creation_date: 1975 
number_stores: 10 000
13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
14. Print the value of the key number_stores. What just happened ? """

brand = {"name" : "Zara", 
        "creation_date" : "1975",
        "creator_name" : "Amancio Ortega Gaona",
        "type_of_clothes" : ["men", "women", "children", "home"],
        "international_competitors": ["Gap", "H&M", "Benetton"], 
        "number_stores": 7000,
        "major_color" : 
                {"France" : "blue", 
                "Spain" : "red", 
                "US" : ["pink", "green"]
                }
        }

# 3. Change the number of stores to 2.
brand["number_stores"] = 2

# 4. Print a sentence that explains who Zaras clients are.
print(f"Zara's clients are: {brand['type_of_clothes']}")

# 5. Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"

# 6. Check if the key international_competitors is in the dictionary. 
# If it is, add the store Desigual.
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 7. Delete the information about the date of creation.
del brand["creation_date"]

# 8. Print the last international competitor.
list_international_competitors = brand["international_competitors"]
print(f"Last international competitor: {list_international_competitors[-1]}")

# 9. Print the major clothes colors in the US.
list_major_colors = brand["major_color"]
print(f"the major clothes colors in the US: {list_major_colors["US"]}")

# 10. Print the amount of key value pairs (ie. length of the dictionary).
print(f"The amount of key value pairs: {len(brand)}")

# 11. Print the keys of the dictionary.
print(brand.keys())

# 12. Create another dictionary called more_on_zara with the following details:
# creation_date: 1975 
# number_stores: 10 000
more_on_zara = {
    "creation_date" : "1975", 
    "number_stores" : 10000
}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

# 14. Print the value of the key number_stores. What just happened ? 
print(brand["number_stores"])

# print(brand)

