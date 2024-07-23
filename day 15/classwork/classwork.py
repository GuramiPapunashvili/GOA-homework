#work 1
# def print_name(name):
#         print("hello " + name)
        

# print_name("Luka")
# print_name("data")
# print_name("gurami")

#word 2

# def add_numbers(num1, num2):
#         print(num1 + num2)

# add_numbers(5, 15)
# add_numbers(17, 72)
# add_numbers(87, 29)

#work 3

# def multiplication_numbers(num1, num2):
#         print(num1 * num2)

# multiplication_numbers(12, 29)
# multiplication_numbers(17, 2)
# multiplication_numbers(9, 15)

#work 1 შექმენით ოთხი მათემატიკური ფუნქცია, თითოეულს გადაეცით ორი არგუმენტი და სახელის შესაბამისად მოახდინეთ მუშაობა.
# ოპერაციები: +, -, *, /

def add_nums(num1, num2):
        print(num1 + num2)

def minus_nums(num1, num2,):
        print(num1 - num2)

def subtract_nums(num1, num2):
        print(num1 / num2)

def multiply_nums(num1, num2):
        print(num1 * num2)

add_nums(5, 6)                                
minus_nums(5, 6)                                
subtract_nums(5, 6)                                
multiply_nums(5, 6) 

#work 2 შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის სიგრძესა და სიმაღლეს, გამოითვლით მის ფართობს

def cube_space(height, width):
        print(height * width)

cube_space(25, 2)        

#work 3 შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის ოთხ გვერდს, გამოითვლით მის პერიმეტრს

def cube_perimeter(side1, side2, side3, side4):
        print(side1 + side2 + side3 + side4)

cube_perimeter(25, 15, 82, 12)

#work 4 შექმენით ფუნქცია, რომელიც მიიღებს არგუმენტად სიას და დაბეჭდეთ სიის რიცხვების ჯამი, არ გამოიყენოთ sum

list = [1, 2, 3, 4, 5]

def list_result():
    result = 0
    for i in list:
                result = result + i
    print(result)

list_result()

#work 5 შექმენით ფუნქცია, რომელიც დაბეჭდავს კონკრეტული სიიდან მინიმალურ და მაქსიმალურ რიცხვებს, არ გამოიყენოთ min და max.
# გამოიყენეთ def, for, if/else, indexing, print 

def min_func(arr):
        min_num = arr[0]
        for i in arr:
         if min_num > i:
                min_num = i
        return min_num

print(min_func([1, 15, 27, 2, 13, 57]))


def max_func(arr):
        max_num = arr[0]
        for i in arr:
         if max_num < i:
                max_num = i
        return max_num

print(max_func([1, 15, 27, 2, 13, 57]))


                              
        


                
        
        
                
        

        