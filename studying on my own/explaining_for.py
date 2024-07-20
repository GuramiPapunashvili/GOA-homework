def order(sentence):
    result = []
    num = 1
    split_sentences = sentence.split(' ')
    for j in range(len(split_sentences), len(split_sentences) + 1):
        while j != len(result):
            for i in split_sentences:
                if str(num) in i:
                    result.append(i)
                    num += 1
                else:
                    continue
    return ' '.join(result)

print(order("is2 Thi1s T4est 3a"))