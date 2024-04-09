#work 1
# name = input("input your name: ")
# if name == name.lower():
#     print("your name is written in lowercase")
# else:
#     print("your name isnt written in lowercase")    

#work 2
# word = input("please input a aword with all uppercase: ")
# counter = 1

# for i in word:
#     if i == i.lower():
#         word = input("please input a aword with all uppercase: ")
#         counter = counter + 1

# print(counter, "good job")
# 
# work 3 მომხმარებელს შემოატანინეთ სიტყვა. თქვენი დავალებაა,
# რომ ლუწ ინდექსებზე მყოფი ასოები გარდაქმნათ uppercase-ად,
# ხოლო კენტ ინდექსებზე მყოფები lowecase-ად, საბოლოოდ კი დაბეჭდოთ შედეგი.

# word = input("please input a word")
# res = ""

# for i in range(len(word)):
#     if i % 2 == 0:
#         res = res + word[i].upper()
#     else:
#         res = res + word[i].lower()   

# print(res)

#work 4

# name = input("please input your name: ")

# if len(name) > 5:
#     print(name.upper())
# else:
#     print(name.lower())    


#work 5 სიაში შეინახეთ თქვენი სახელი და გვარი. capitalize მეთოდის გამოყენებით მასივის ყველა ელემენტზე
#მოახდინეთ მუშაობა და ბოლოს დაბეჭდეთ უკვე შეცვლილი სია.
# names = ["luka", "gurami", "gio", "mari"]

# for i in range(len(names)):
#     names[i] = names[i].capitalize()

# print(names)          


#work 6 მომხმარებელს შემოატანინეთ სახელი, შემდეგ კი გვარი.
#შეინახეთ ისინი სიაში და წინა დავალების მსგავსად იმუშავეთ ყველა ელემენტზე capitalize მეთოდით.
#თქვენი დავალებაა, რომ გამოიტანოთ მომხმარებლის ინიციალები სთრინგის სახით
#test case: input) "Data", "Tezelashvili" -> output: "D.T"

# firstname = input("Please enter your firstname: ").capitalize()
# lastname = input("Please enter lastname: ").capitalize()

# result = firstname[0] + '.' + lastname[0]

# print(result)

#work 7 მოხმარებელს შემოატანინეთ სიტყვა და საძიებელი ასო. თქვენი დავალებაა,
#რომ სიტყვაში პირველივე შემხვედრი ამ ასოს ინდექსი დაბეჭდოთ, არ არსებობის შემთხვევაში კი უბრალოდ -1.

# def manual_find(collection, find_item):
#     for i in range(len(collection)):
#         if collection[i] == find_item:
#             return i
#     return -1

# print(manual_find([1,2,3,4,5], 2))


#work 10 მომხმარებელს შემოატანინეთ ხუთი სიტყვა და ყველა მათგანი დაამატეთ ერთ სიაში.
#შემდეგ შეეკითხეთ შესაერთებელი მნიშვნელობა, მაგ. "-" / "+" / "^" და ა.შ.
#თქვენი დავალებაა რომ იმუშავოთ სიაზე: მხოლოდ ლუწ ინდექსიან სიტყვებს დაუწეროთ ბოლოში ეს
#დასაკავშირებელი მნიშვნელობა და შემდეგ დაამატოთ საერთო სთრინგში. საბოლოოდ კი უნდა\
#დაბეჭდოთ ეს სთრინგი. Test case: input)
#("python", "html", "css", "js", "git"), "+" -> output) "python+css+git"
        


