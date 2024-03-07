#homework number 1: we have to check if the number input by the user can divide to 2 and 4 without anything left over

num1 = int(input("please input a number that can be divided by 2 and 4:  "))

if num1 % 2 == 0 and num1 % 4 == 0:
    print("your number is good")
else:
    print("put in another number")    


#homeowrk number 2: we have to make 10 examples using (>   <   >=     <=    ==   !=)
    
num2 = int(input("please input number 2: "))
num3 = int(input("please input number 3: "))

if num2 > num3:
    print("num2 > num3")
elif num2 < num3:
    print("num3 > num2")
elif num2 >= num3:
    print("num 2 is more or equal to num3")
elif num2 <= num3:
    print("num 2 is less or equal to num3")
elif num2 == num3:
    print("num2 equals num3")
elif num2 != num3:
    print("num1 doesnt equal num2")


print (5 > 10) #this should print false
print (10 >= 9) #this should print true
print (5 == 5) #this should print true
print (82 != 82) #this should print false


#homework number 3: we have to make 10 examples about "and"


print (11>10 and 7<10)  #true and true will always print true however true and false will print false
print (10>5 and 5<2) #false
print (10>=5 and 5<=2) #true
print (5==5 and 5!=2) #true
print (27<15 and 17!=16) #false
print (175<174 and 2<=2) #false
print (175>174 and 2<=2) #true
print (175!=12 and 2>2) #false
print (175!=12 and 5>2) #true

if 15 > 20 and 20 > 30:
    print("correct")
else:
    print("inccorect")  









    

    

    

