#homework number 1 შექმენით სია პროგრამირების ენების შესახებ, შეიტანეთ 5 პროგრამირების ენა. დაპრინტეთ  ჯერ მთლიანი სია, შემდეგ კი ბოლო ელემენტი.

HW_list1 = ["c++", "python", "html", "c#", "Javascript"]

print(HW_list1)
print(HW_list1[4])

#homework number 2 შექმენით სია, სადაც გექნებათ შეტანილი string, integer, float, boolean. საბოლოოდ ყველა ელემენტი ცალ-ცალკე გამოიტანეთ.
HW_list2 = [5, "i am string", 2.5, True]

print(HW_list2[0])
print(HW_list2[1])
print(HW_list2[2])
print(HW_list2[3])

#homework number 3 შექმენით სია, სადაც გექნებათ 0-იდან 20-ის ჩათვლით 4-ის ჯერადები და პრინტით გამოიტანეთ უდიდესი.

HW_list3 = []

for i in range (0,21):
    if i % 4 == 0 and i != 0:
        HW_list3.append(i) #with a help of google i learned that i can use "append command" to add specific numbers to lists

print(max(HW_list3)) 

#homework number 4 შექმენით სია სადაც შეტანილი გექნებათ 30-იდან 50-ის ჩათვლით კენტი რიცხვები. შემდეგ დაპტინტეთ სამი უმცირესი ელემენტის ჯამი.

HW_list4 = []

for y in range(30,51):
    if y % 2 == 1:
        HW_list4.append(y)

HW_list4.sort()

print(HW_list4[0] + HW_list4[1] + HW_list4[2])

#homeowrk number 5 დაპრინტეთ სამის ჯერადები დავალება 4-ის სიიდან.

HW_list5 = []
for x in HW_list4:
    if x % 3 == 0:
        HW_list5.append(x)

print(HW_list5)        
   

   
