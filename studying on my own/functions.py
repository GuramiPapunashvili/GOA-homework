def variance(numbers):
    mean = sum(numbers) // 4
    result = 0
    for i in numbers:
        result += (i - mean) ** 2
    return result / 4

print(variance([1, 2, 2, 3]))    