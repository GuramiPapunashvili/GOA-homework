#work 1 გადმოგეცემათ რიცხვებით სავსე სია და თქვენ უნდა დააბრუნოთ ამ სიის ელემენტების საშუალო არითმეტიკული

# list = [1,2,3,4,5]
# res = 0

# for i in list:
#     res = res + i

# final_res = res / len(list)

# print(final_res)    

#work 2 გადმოგეცემათ სია რომელშიც იქნება დადებითი და უარყოფითი რიცხვებიც,
#თქვენ უნდა დააბრუნოთ ორი სია სადაც გაფილტრური იქნება უარყოფითი რიცხვები ცალკე და დადებითი რიცხვები ცალკე

full_list = [12,13,-12,-2,15,-72]
positive_list = []
negaitve_list = []

for i in full_list:
    if i >= 0:
        positive_list.append(i)
    if i < 0:
        negaitve_list.append(i)

print(negaitve_list)            
print(positive_list)            

