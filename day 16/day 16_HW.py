#work 1 გადაიმეორეთ ფუნქციები სოლოლეარნის გამოყენებით და გააკეთეთ თქვენი კრეატიულობით 5 ფუნქცია,
#2 ფუნქცია რომელიც არ აბრუნებს მნიშვნელობას და 3 ფუნქცია რომელიც აბრუნებს მნიშვნელობას

# def func1(age):
#     if age >= 18:
#      print("you are an adult")
#     else:
#      print("you are not an adult") 

# print(func1(15))    
   

# def func2(gender, height):
#     your_fact = ""
#     if gender == "female":
#         average = 160
#     elif gender == "male":
#         average = 176
#     if height > average:
#         your_fact = "you are above average"
#     elif height < average:
#         your_fact = "you are below average"
#     else:
#         your_fact = "you are average"
#     return your_fact

# print(func2("male", 177))


# def func3(academy):
#     if academy[0] == "G" or academy[0] == "g":
#      print("pick goa")
#     else:
#      print("wrong choice") 

# print(func3("GOA ACADEMY"))

# def func4(num_list):
#     result = 0
#     for i in num_list:
#         result = result + i
#     return result

# print(func4([15, 5, 23, 7]))

# def func5(string_first):
#     first = string_first[0]
#     return first

# print(func5("Hello"))    


#work 2  შექმენით ფუნქცია რომელიც სიაში ლუწ ინდექსებზე მდგომ რიცხვთა ჯამს დააბრუნებს,
# შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი):  9

# def even_sum(sum_list):
#     res = 0
#     for i in sum_list:
#         if i % 2 == 0:
#             res = res + i
#     return res

# print(even_sum([12, 27, 13, 5, 8]))


#work 3 შექმენით ფუნქცია რომელიც გამოითვლის კენტების და ლუწების ჯამს ცალცალკე,
#დააბრუნეთ სია სადაც იქნება ეს ჯამები ჩასმული,შესატანი მონაცემები [1,2,3,4,5] - გამოსატანი მონაცემები [6, 9]

# def both_sum(list):
#     res_list = []
#     even_res = 0
#     odd_res = 0
#     for i in list:
#         if i % 2 == 0:
#             even_res = even_res + i
#         elif i % 2 != 0:
#             odd_res = odd_res + i
#     res_list.append(even_res)
#     res_list.append(odd_res)
#     return res_list

# print(both_sum([1, 3, 45, 14, 5, 6]))        

#work 4  შექმენით ფუნქცია რომელიც დაგიბრუნებთ სიაში მყოფ ელემენტების რაოდენობას,
#შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი): 5

# def list_len(list):
#     length = len(list)
#     return length

# print(list_len([15, 25, 3, 7, 26]))

#work 5 შექმენით replace ფუნქციის კოპიო

# def replace(string,replaced,replace):
#     new_string = ''
#     for i in string:
#         if i.lower() == replace.lower():
#           new_string += replaced
#         else:
#           new_string += i
#     return new_string       






# print(replace("gurami", "p", "m"))

#work 6 შექმენით join ფუნქციის კოპიო,
#(ვიცი რომ არ იცით მაგრამ დასერჩეთ და ისწავლეთ. შემდეგ გაკვეთილზე აგიხსნით

# def join_copy(list):
#     corrected = ' '
#     for i in list:
#         corrected += i
#     return corrected

# print(join_copy(["goa", "work", "number", "6"], "")) 
     






            
