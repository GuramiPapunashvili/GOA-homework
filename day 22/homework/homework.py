def manual_pop(num_list,to_pop = 5):
    for i in range(len(num_list)):
        if i == to_pop:
            del num_list[i]
    return num_list        


print(manual_pop([1,2,3,4,5,6], 2)) 
def manual_count (list, to_find = 10 // 5):
    count = 0
    for i in list:
        if i == to_find:
            count = count + 1
    return count        


print(manual_count([1,2,3,4,5,2], 2))

def manual_min (comp_list = [1,2,3,4,5,6,7,8,9,10]):
    min = comp_list[0]
    for i in comp_list:
        if i < min:
            min = i
    return min

print(manual_min([2, 15, -2, 23, 0]))   

def manual_max (comp_list = [1,2,3,4,5,6,7,8,9,10]):
    max = comp_list[0]
    for i in comp_list:
        if i > max:
            max = i
    return max  

print(manual_max([2,15,7,1,-2,35]))      

