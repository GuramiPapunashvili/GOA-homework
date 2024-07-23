num1 = int(input("put in num1  "))
mark = input("put in the mark  ")
num2 = int(input("put in num2  ")) 

if mark == "+" :
 print (num1 + num2)
if mark == "-" :
  print (num1 - num2)
if mark == "*" :
  print (num1 * num2)
if mark == "/" and mark != "0":
 print (num1 / num2)
elif num1 == "0" or num2 == "0":
  print ("cant divide by 0")
if mark == "?<>" and num1 > num2:
  print("num1 > num2")
else: print("num2 > num1")   





 

  
