#work 1 შექმენით ფუნქცია, რომელსაც გადასცემთ თქვენ სახელს და გვარს. გამოიყენეთ split,
#indexing და დაბეჭდეთ თქვენი ინიციალები. test case: input) David Tezelashvili -> output) D.T

def initials(name, surname):
    your_initials = name[0] + "." + surname[0]
    return your_initials

print(initials("Guram", "Papunashvili"))

#work 2 შექმენით ფუნქცია, რომელსაც გადასცემთ სიას.
#თქვენი დავალებაა, რომ დაბეჭდოთ ამ სიის საშუალო არითმეტიკული (ჯამი / სიგრძე)

def average_num(nums):
    sum = 0
    for i in nums:
        sum = sum + i    
        result = sum / i
    return result

print(average_num([12, 3, 5, 4]))

#work 3 შექმენით ფუნქცია,რომელსაც გადასცემთ სიტყვას და შემოწმდება არის თუ არა ის პალინდრომი
#(პალინდრომია სიტყვა, თუ მისი შებრუნებულიც იგივე გამოდის, მაგ: level)

def check_palindrome(word):
    new_word = word[::-1]
    if word == new_word:
        print("your word is a palindrome")
    else:
        print("your word is not palindrome")

check_palindrome("level")

#work 4 შექმენით ფუნქცია, რომელსაც გადასცემთ სთრინგს.
#თქვენი დავალებაა, რომ ამ სთრინგს მოაშოროთ ყველა სფეისი - space და დაბეჭდოთ ამ სახით
#test case: input) "     Goal-   Oriented   Academy    " -> output) "Goal-OrientedAcademy"

def remove_spaces(spaced_word):
    fixed_word = spaced_word.replace(" ", "")
    return fixed_word

print(remove_spaces("GOA     IS      THE    BEST"))

#work 5 შექმენით ფუნქცია, რომელსაც გადასცემთ სიას.
#ამ სიაში უნდა გქონდეთ როგორც დადებითი, ასევე უარყოფითი რიცხვები.
#თქვენი დავალებაა, რომ გამოიტანოთ უარყოფითი
#რიცხვების რაოდენობა და დადებითი რიცხვების ჯამი (გამოიყენეთ for ციკლი ორივეზე)

def neg_and_pos(num_list):
    pos_res = 0
    neg_amount = 0
    for i in num_list:
        if i < 0:
            neg_amount = neg_amount + 1
        elif i > 0:
            pos_res = pos_res + i
    return neg_amount, pos_res        


        
print(neg_and_pos([15, -3, 23, -1, -27, 2]))        





       
           
    
        
