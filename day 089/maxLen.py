def longest_length():
    end = "ase"
    longest = ""
    text = input()
    while text != end:   
        if len(longest) < len(text):
            longest = text
        text = input()
    return f"Longest text: {text} Length: {len(text)}"