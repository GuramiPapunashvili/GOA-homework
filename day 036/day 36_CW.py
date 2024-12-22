About_me = {
    "name" : "Gurami",
    "Surname" : "Papunashvili",
    "Age" : 16
}
to_join = About_me.values
values_joined = " ".join([str(i) for i in to_join()])

print(values_joined)