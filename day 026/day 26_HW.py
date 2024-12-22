#work 1 მომხმარებელს შემოატანინეთ მისი სახელი, შემდეგ დაბეჭდეთ lower, upper, capitalize ვარიანტებად.

user_name = input("please input your name: ")

print(user_name.upper())
print(user_name.lower())
print(user_name.capitalize())

#work 2 შექმენით ფუნქცია, სახელად find_index, რომელსაც გადაეცემა სთრინგი და საპოვნელი ასო. თქვენი დავალებაა, 
# რომ გადაცემულ სთრინგში არსებული ასოს ინდექსი დააბრუნოთ.

def find_index(string, to_find):
    for i in range (len(string)):
        if string[i] == to_find:
            res = i
    return res

print(find_index("Gurami", "a"))        


#work 3 def keyword'ის გამოყენებით შექმენით len()'ის მსგავსი ფუნქცია ( ფუნქცია რომელიც გამოიტანს რამდენი ელემენტია list'ში)

def keyword(list):
    res = 0
    for i in list:
            res = res + 1
    return res        

print(keyword(["Gurami", "GOA", ""]))


#work 4 გატესტეთ insert, pop, len, append და ახსენით თქვენი სიტყვებით თუ რას აკეთებს.

arr = ["GOA", "work", "4"]

arr.append("Appended") #using the .append function we can add an element that we put in () to a list 

arr.insert(1, "Hello") #using insert function we can add an element to a list in a specific index by first putting the index and then the element we want to add in (),
#unlike with .append in which we couldnt control the index it would go to

arr.pop(1) #using the pop function we can remove a certain element from a list by putting the elements index in ()

lenght = len(arr) #using the len function we can find out how many elements there are in the list


print(arr)
