def increment_string(s):
    L = []
    Sum = ''
    for i in s:
        try:
            int(i)
        except:
            pass
        else:
            L.append(i)
    for i in L:
        Sum = Sum + i        

    return int(Sum) + 1

print(increment_string("foo001"))

