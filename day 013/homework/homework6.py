#Write a program that asks the user to enter a number between 1 and 5. If the number is less than 1 or greater than 5, print "Invalid input". If the number is between 1 and 5, print "Valid input".

num = int(input("input a num between 1 and 5: "))

if num < 1 or num > 5:
    print("invalid input")
else:
    print("valid input")    