#homework 1 შექმენით სია სადაც გადასცემთ 10 ინტეგერს, შემდეგ გადაუარეთ ამ სიას და თითოეული მათგანი გაამრავლეთ/გაყეთ/დაუმატეთ/გამოაკელით ერთმანეთს.

int_list = [1,2,3,4,5,6,7,8,9,10]

for i in int_list:
    print(i * i)
    print(i / i)
    print(i + i)
    print(i - i)

#homework 2 შექმენით სია, სადაც გამოიტანთ სათითაოდ მნიშვნელობებს და ასევე ჩაანაცვლებთ სხვა მნიშვნელობებით.    
    
list2 = ["item_1", 2.5, False, 210]    

list2[2] = True
list2[1] = 1.2
list2[0] = "item_0"
list2[3] = 120

print(list2)

#homework 3 შექმენით სია და მომხმარებელს აარჩევინეთ სასურველი მნიშვნელობა.

vending_machine = ["crisp", "coke", "cookie", "fanta"]

user_choice = int(input("please choose your item")) 

print(vending_machine[user_choice])
