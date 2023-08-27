cube_a_num = lambda x: x % 2 == 0

print(cube_a_num(3))

print((lambda x: x % 2 == 0)(4))

nums = [1, 44, 67, 100, 543, 1002]


def is_even(num):
    return num % 2 == 0


print(is_even(5))


def check_list(func, nums):
    even_in_list = []
    for num in nums:
        if is_even(num):
            even_in_list.append(num)
    return even_in_list


print(check_list(is_even, nums))


# def square_a_list(func, nums):
#     sq_nums = []
#     for num in nums:
#         sq_nums.append(func(num))
#     return sq_nums


# def square_a_num(num):
#     return num * num


# res = square_a_num(5)

# print(res)

# nums = [1, 2, 3, 4, 5, 6]

# sq_nums = square_a_list(square_a_num, nums)

# print(sq_nums)

# sq_nums_map = map(square_a_num, nums)

# print(list(sq_nums_map))
