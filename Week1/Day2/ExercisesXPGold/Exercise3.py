""" Exercise 3: Check The Index
Using this variable
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
Ask a user for their name, if their name is in the names list print out 
the index of the first occurence of the name.
Example: if input is 'Cortana' we should be printing the index 1 """

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Please enter your name: ")
if user_name in user_name:
    print(names.index(user_name))