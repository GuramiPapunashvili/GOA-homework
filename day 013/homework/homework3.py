#Write a program that asks the user to enter a number and then prints whether the number is positive, negative, or zero using an if-else statement.
num = int(input("input a number: "))

if num < 0:
    print("num is negative")
elif num > 0:
    print("num is positive")
else:
    print("num is 0")        