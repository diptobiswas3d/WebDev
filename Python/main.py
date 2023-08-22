# print("Hello World")

# """
# This is a
# multi-line
# comment
# """

# {

# }

# # Variables
# num = 10 # int
# decimal = 5.5 # float
# string_1 = "This is a string" # string
# bool_1 = True # bool

# # print(num)
# # print(decimal)
# # print(string_1)
# # print(bool_1)

# print(type(num))
# print(type(decimal))
# print(type(string_1))
# print(type(bool_1))

# Operators
# a = 5 + 3
# b = 5 - 3
# c = 5 * 3
# d = 7 / 3
# e = 5 % 3
# f = 5 ** 3
# g = 7 // 3

# print(a)
# print(b)
# print(c)
# print(d)
# print(e)
# print(f)
# print(g)

# a = 5 == 5
# b = 5 != 5
# c = 5 > 5
# d = 5 < 5
# e = 5 >= 5
# f = 5 <= 5


# print(a)
# print(b)
# print(c)
# print(d)
# print(e)
# print(f)

# a = (5 == 5) and (5 == 3)
# b = True or False
# c = not True

# print(a)
# print(b)
# print(c)

# a = 5 in [1,2,3,4,5]
# b = 6 not in [1,2,3,4,5]

# print(a)
# print(b)

# # Data Structures
# list_1 = [1,1,2,3,4,5]
# tuple_1 = (1,1,2,3,4,5)
# set_1 = {1,1,2,3,4,5}

# # print(list_1)
# # print(tuple_1)
# # print(set_1)

# dict_1 = {"name": "Gary Oak", "role": "Pkmn intern", "Pkmn": "Eevee", "Age": 25}

# # print(dict_1)
# # print(type(dict_1))
# print(dict_1.keys())
# print(dict_1.values())

# # Control Structures

# x = 5

# # if x < 10:
# #     print("x is small. x =", x)
# # elif x < 20:
# #     print("x is medium. x =", x)
# # elif x < 30:
# #     print("x is more than medium. x =", x)
# # else:
# #     print("x is big. x =", x)

# result = "Big" if x > 30 else "More than medium" if x > 20 else "Medium" if x > 10 else "Small"

# print(result)

# Loops
list_1 = [3, 5.5, "Dr. Stone", False, [2, "Vinland Saga"]]

# for item in list_1:
#     print(item)

# for num in range(5,20,3):
#     print(num)

# x = 20

# while x > 10:
#     print(x)
#     x -= 1
#     if x == 15:
#         break

# Functions
def greet(a,b):
    return f"Hello {a} and {b}"

greeting = greet("Gon", "Prof Oak")

print(greeting)