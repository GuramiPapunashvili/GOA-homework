#homework 1 მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და საცხოვრებელი ადგილი.
#თითოეული მათგანი append-ის გამოყენებით დაამატეთ სიაში.
# slicing-ის გამოყენებით დაბეჭდეთ 1: სახელი, გვარი, 2: გვარი, ასაკი, 
#3: სახელი, გვარი, ასაკი 4: გვარი, ასაკი, საცხოვრებელი ადგილი.

userinfo = []
user_name = input("please input your name: ")
user_surname = input("please input your username: ")
user_age = input("please input your age: ")
user_address = input("please input your address: ")

userinfo.append(user_name)
userinfo.append(user_surname)
userinfo.append(user_age)
userinfo.append(user_address)

print(userinfo[0:2])
print(userinfo[1:3])
print(userinfo[0:3])
print(userinfo[1:4]) #ასევე შეგვიძლია დავწეროთ print(userinfo[1:])

#homework 2 მომხმარებელს შემოატანინეთ უარყოფითი რიცხვი.
#ამ რიცხვიდან 0-მდე არსებული ყველა უარყოფითი რიცხვი დაამატეთ სიაში და საბოლოოდ დაბეჭდეთ სია.

num_list = []

num = int(input("please input a negative number: "))

while num < 0 :
    num_list.append(num)
    num = num + 1

print(num_list)   

#homework 3 ცვლადში შეინახეთ თქვენი სახელი და გვარი. Slicing-ის გამოყენებით ჯერ სახელი, შემდეგ კი გვარი დაბეჭდეთ.

my_info = "Guram Papunashvili"
print(my_info[0:5])
print(my_info[5:])

#homework 4 სიაში შეინახეთ მინიმუმ 5 საყვარელი ფილმი.
#გამოიყენეთ Slicing და  დაბეჭდეთ რამდენიმე კომბინაციით.
#Bonus (არ არის აუცილებელი): იგივე კომბინაციები დაბეჭდეთ უარყოფითი ინდექსების გამოყენებით.

film_list = ["ready,player one", "hunger games", "harry potter", "spider-man", "avengers"]

print(film_list[2:4])
print(film_list[3:4])
print(film_list[0:])
print(film_list[1:3])

#homework 4 bonus:

print(film_list[-3:-1])
print(film_list[-2:-1])
print(film_list[0:])
print(film_list[-4:-2])

#homework 5 მომხმარებელს შემოატანინეთ აკადემიის სახელი.
#თუ ის "G"-თი იწყება, დაუპრინტეთ რომ გოა არის საუკეთესო არჩევანი.
#სხვა შემთხვევაში დაუპრინტეთ, რომ არასწორი გადაწყვეტილება მიიღო.

user_academy = input("please input an academy: ")

if user_academy[0] == "G" or user_academy[0] == "g":
    print("GOA is your best choice")
else:
    print("you made the wrong choice(join GOA the best academy in the world)")    



