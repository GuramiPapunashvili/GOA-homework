#Write a program that asks the user to enter a number. If the number is divisible by 3, print "Fizz". If the number is divisible by 5, print "Buzz". If the number is divisible by both 3 and 5, print "FizzBuzz". Otherwise, print the number itself.

num = int(input("input a number: "))

if num % 3 == 0 and num % 5 == 0:
    print("FizzBuzz")
elif num % 3 == 0:
    print("Fizz")
elif num % 5 == 0:
    print("Buzz")        
