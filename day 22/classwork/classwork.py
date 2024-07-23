
def my_pop(num_list,to_pop):
    for i in range(len(num_list)):
        if i == to_pop:
            del num_list[i]
    return num_list        


print(my_pop([1,2,3,4,5,6], 2))   


def count (list, to_find):
    count = 0
    for i in list:
        if i == to_find:
            count = count + 1
    return count        


print(count([1,2,3,4,5,2], 2))


def find_item (words_list, word_to_find):
    for i in range(len(words_list)):
     if words_list[i] == word_to_find:
        index = i
    return index

print(find_item(["gurami", "luka", "data"], "data"))    

