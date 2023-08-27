def square_a_list(func, nums):
    sq_nums = []
    for num in nums:
        sq_nums.append(func(num))
    return sq_nums


def square_a_num(num):
    return num * num


res = square_a_num(5)

print(res)

nums = [1, 2, 3, 4, 5, 6]

sq_nums = square_a_list(square_a_num, nums)

print(sq_nums)

sq_nums_map = map(square_a_num, nums)

print(list(sq_nums_map))
