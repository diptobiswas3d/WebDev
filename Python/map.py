def square_a_num(num):
    return num * num


result = square_a_num(6)

print(result)


# def check_a_list(func, nums):
#     sq_nums = []
#     for num in nums:
#         sq_nums.append(func(num))
#     return sq_nums


nums = [1, 3, 5, 7, 9, 11]

# sq_nums = check_a_list(square_a_num, nums)

# print(sq_nums)

sq_nums_map = map(square_a_num, nums)

print(list(sq_nums_map))
