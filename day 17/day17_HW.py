#work 1 შექმენით ფუნქცია,
#რომელშიც გააერთიანებთ იმ ფუნქციებს რაც დღეს ვისწავლეთ (lower(), upper(), capitalize(), find())

# def all_funcs(string,func,find):
#     res = ""
#     if func == "lower":
#         res = string.lower()
#     elif func == "upper":
#         res = string.upper()
#     elif func == "cap":
#         res = string.capitalize()
#     elif func == "find":
#         res = string.find(find)
#     return res

# print(all_funcs("hello", "cap", ""))

#work 2 შექმენით ფუნქცია რომელსაც გადაეცემა list = ["name1" , "name2" , "name3"....]
#შემდეგ მომხმარებელს კითხეთ რომელი ინდექსის შეცვლა სურს და ამის მიხედვით შეცვალეთ
#ის კონკრეტული ინდექსი თქვენი სასურველი სტრინგით და ბოლოს შეაერთეთ join() ფუნქციის მეშვეობით

# def change_list(arr):
#     res = ""
#     ind = int(input("which index would you like to replace: "))
#     arr[ind] = "replace"
#     return arr

# print(change_list(["hey", "more", "size", "ports"]))

#work 3 დეტალურად, კომენტარის სახით ახსენით split() და join() ფუნქციები,
#შეეცადეთ ახსნათ chad-ურად, წარმოიდგინეთ რომ მეგობარს უხსნით ვინც პროგრამირებაზე არაფერი იცის

#split ფუნქციის გამოყენების დროს ვწერთ სტრინგის სახელს წერტილს შემდეგ
#"split"_ს ბოლოს ვუწერთ ფრჩხილებს შემდგენაირად string.split(" ").
#ფრჩხილებში რასაც ჩავსვავთ ის სტრინგიდან ამოიშლება და ამოშლილი ელემენტის მარცხნივ და მარჯვნივ
#მდებარე სტრინგები ლისტში ჩაისვება მაგ:
# string = "JOIN GOA"
# string = string.split(" ")
# print(string)

#join ფუნქციას ვიყენებთ როდესაც გვინდა რამოდენიმე ელემენტის ერთმანეთთან შეერთება ჯერ ვწერთ სიმბოლოს
#რომლითაც ეს სტრინგები გაერთიანდება შემდეგ ".join(სტრინგის სახელი)" პრჭყალებში რასაც ჩავსვავთ
#ის ჩაისმება შეერთებულ სტრინგებს შორის მაგალითად:
example = ["please", "join", "goa"]
example = " ".join(example)
print(example)


