# Exercise 1 : Hello World-I Love Python
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

# print("Hello World\n" * 4 + "I love python\n" * 4)

# Exercise 2 : What Is The Season ?
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)


month = input("What is the number of the current month? ")
month = int(month)
if month <= 2 or month == 12:
    print(f"Month number {month} is in winter") 
elif month <= 5:
    print(f"Month number {month} is in spring") 
elif month <= 8:
    print(f"Month number {month} is in summer")
elif month <= 11:
    print(f"Month number {month} is in autumn")
else:
    print("There are only 12 months in a year")  