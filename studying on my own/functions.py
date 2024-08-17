def valid_phone_number(phone_number):
    digit = '123456790-'
    split1 = phone_number.split(' ')
    if len(split1) != 2:
        return False
    for x in split1[0]:
        if len(split1[0]) != 5 or x.isalpha() or '(' not in split1[0] or ')' not in split1[0] or x == '-':
            return False
    for i in split1[1]:
        if len(split1[1]) != 8 or i.isalpha() or i == ' ' or i not in digit:
            return False
    return True


print(valid_phone_number('(123) 456-7890'))
