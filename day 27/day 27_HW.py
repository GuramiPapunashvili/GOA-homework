#work 1 შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების კოლექცია. თქვენ უნდა განიხილოთ მთლიანი კოლექცია: თუ რიცხვი იქნება მთელი - გაამრავლეთ ორზე,
# ხოლო თუ რიცხვი იქნება ათწილადი - გაამრავლეთ ოთხზე. ყველა რიცხვი დაამატეთ ახალ სიაში და დააბრუნეთ ეს სია.

def int_and_float(num_list):
    comp_list = []
    for i in num_list:
        if i % 1 == 0:
            comp_list.append(i * 2)
        elif i % 1 != 0:
            comp_list.append(i * 4)    
    return comp_list

print(int_and_float([1, 1.5, 2, 2.5]))      


#work 2 შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. ლუწ ინდექსებზე მყოფი სახელები გადაიყვანეთ uppercase-ში, ხოლო კენტ ინდექსებზე მყოფნი კი lowercase-ში.

def odd_and_even(string_list):
    final_list = []
    for i in range(len(string_list)):
        if i % 2 == 0:
            final_list.append(string_list[i].upper())
        elif i % 2 != 0:
            final_list.append(string_list[i].lower())    
    return final_list

print(odd_and_even(["Gurami", "GioRgi", "MARiami"]))        

#work 3 შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი დიდი წინადადება.
# ამ წინადადებაში, ყველა სიტყვა დაიწყეთ დიდი ასოთი და დააბრუნეთ წინადადება ამ სახით.

def capitalize(big_string):
    upper_words = []
    words = big_string.split()
    for i in words:
        to_Trasnfer = i[0].upper() + i[1:]
        upper_words.append(to_Trasnfer)
    done_sentence = ' '.join(upper_words)  
    return done_sentence  


print(capitalize("hello this is goa"))    


#work 4 გაკვეთილზე განხილული manual_pop ისევ განიხილეთ, დაამატეთ კომენტარები და ბოლოს შექმენით ნახატი. კოდი: 

def manual_pop(collection, remove_index):  #first we define a function  called manual_pop and give it two arguments
    if remove_index >= len(collection):    #then we make sure that the index were trying to remove is in the range of the list
        return "Index out of range"        #if it isnt in the range we simply tell the users that the index is out of range
    
    result = []  #here we create a new list where we will place every element other than the one we remove                          

    for index in range(len(collection)):  #since the pop function needs index we use for index in range which will go over every index from 0 to however many indexes there are in the list(in this case 1)
        if index != remove_index:  #then we put every index that isnt the one were trying to remove in the new list we created on the 48th line
            result.append(collection[index])

    return result #and finally we return the completed list

print(manual_pop(["Luka", "lile"], 1))


#work 5 შექმენით ფუნქცია, რომელსაც გადაეცემა სია. თქვენი დავალებაა, რომ ამ სიიდან მოაშოროთ დუპლიკატები
#  (ისეთი ელემენტები, რომლებიც სიაში ერთზე მეტჯერ გვხვდება) და დააბრუნოთ განახლებული სია.

def remove_duplicates(num_list):
    unique_numbers = []
    for i in num_list:
        if i not in unique_numbers:
            unique_numbers.append(i)
    return unique_numbers

print(remove_duplicates([1,1,1,2,3,4,5,6,6,22]))

#work 6 შექმენით ფუნქცია, რომელსაც გადაეცემა სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიაში არსებული დუპლიკატები.

def return_duplicates(num_list):
    duplicated = []
    for i in num_list[::]:
        if num_list.count(i) > 1:
            duplicated.append(i)
    return duplicated            


    

print(return_duplicates([1, 1, 1, 2, 3, 4, 4, 5, 6]))





#work 7  შექმენით ფუნქცია, რომელსაც გადაეცემა კოლექცია და საძიებელი სიტყვა. 
#თქვენი დავალებაა, რომ დააბრუნოთ თუ რამდენჯერ გვხვდება საძიებელი სიტყვა კოლექციაში.

def search_word(words, search):
    count = 0
    for i in words:
        if i == search:
           count = count + 1
    return count

print(search_word([1,1,1,2,3,4], 1))    

#work 8 შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. თქვენი დავალებაა, დააბრუნოთ ახალი სია, სადაც არ იქნება ლუწი რიცხვები.

def odd_only(num_list):
    odds = []
    for i in num_list:
        if i % 2 != 0:
            odds.append(i)
    return odds

print(odd_only([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  

#work 9 შექმენით ფუნქცია, რომელსაც გადაეცემა ორი სია. თქვენი დავალებაა, გააერთიანოთ ეს ორი სია და დააბრუნოთ ერთი დიდი სიის სახით.

def combine_lists(list1,list2):
    combined_list = list1 + list2 
    #another way to do this but it is much longer and uses 2 for loops so i just did the simple version
    # combined_list = []
    # for i in list1:
    #     combined_list.append(i)
    # for i in list2:
    #     combined_list.append(i)    
    return combined_list

print(combine_lists([1, 5, 8], [2,3,4]))

#work 10 შექმენით ფუნქცია, რომელსაც გადაეცემა კოლექცია. თქვენი დავალებაა, დააბრუნოთ ახალი კოლექცია,
#  სადაც გვექნება ისეთი ელემენტები, რომლებიც საწყის კოლექციაში მარტო ერთჯერ გვხვდება.

def remove_duplicates(num_list):
    seen = []
    unique_numbers = []
    for i in num_list[::]:
        if i in num_list and i not in seen:
            seen.append(i)
            num_list.remove(i)
    for i in seen:
        if i in seen and i not in num_list:
            unique_numbers.append(i)        
    return unique_numbers
    

print(remove_duplicates([1, 1, 1, 2, 3, 4, 4, 5, 6]))





    