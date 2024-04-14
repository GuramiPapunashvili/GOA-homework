#classwork 2 მომხმარებელს გადმოეცემა სია რომელშიც იქნება რიცხვები შემდეგ
#ჩვენ უნდა დავაბრუნოთ ახალი სია მაგრამ ამ სიაში უნდა იყოს მხოლოდ ლუწი რიცხვები

# all_numbers = [15, 27, 82, 12, 7, 23, 18]
# even_list = []
# odd_list = []

# for i in all_numbers:
#     if i % 2 == 0:
#         even_list.append(i)
#     elif i % 2 != ):
#         odd.list.append(i)

# print(even_list) 

#classwork 2 შექმენით სია და იმავე სიაში ამოშალეთ ყველა კენტი რიცხვი

num_list = [25, 15, 17, 82, 92, 13, 23]

for index in range(len(num_list) - 1):
    if num_list[index] % 2 != 0:
        num_list.append(index)   

print(num_list)        