#შექმენით ფუნქცია რომელიც დაგიბრუნებთ სიის რიცხვთა ჯამს, გამოიყენეთ return

def sum(nums):
    result = 0
    for i in nums:
        result = result + i
    return result

list = [1, 25, 3, 5]
print(sum(list))
       
