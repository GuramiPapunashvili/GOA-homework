#hello today i was bored so i decided to practice my coding thats why im going to be trying to make a simple log in "mechanism"

#first we want to make simple design telling people what this page is about

print("Welcome, Please Log in")

#after this we will ask the user to enter their username/gmail and password

Uname = input("please input your username")
password = input("please input your password")
Cpassword = input("please confirm your password")

#using if command that i learned with a simple google search we will add some easy details

#  print ("please fill out every form")  #with the code in line 15 and 16 we make sure that the user has filled out every form

if password != Cpassword:
 print("passwords dont match") #with the code in line 18 and 19 we check if the passwords match

#now we confirm if the user is satisfied with their gmail/username and password

answer =input(f"type <yes> if you are satisfied with having {Uname} as your username and {password} as your password?")

#finally if they are satisfied with their answer we congratulate them for logging in

if answer == "yes":
  print("CONGRATULATION ON LOGGING IN")

  #there are stil a lot of flaws in this code but when i learn more stuff and fixes to these issues i will come back to this code k,kk





