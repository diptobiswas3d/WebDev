def is_even(num):
    return num % 2 == 0


# print(is_even(4))
# print(is_even(5))

# is_num_even = lambda x: x % 2 == 0

# print((lambda x: x % 2 == 0)(4))
# print((lambda x: x % 2 == 0)(5))


nums = [1, 44, 67, 100, 545, 1002]


def check_list(func, nums):
    even_in_list = []
    for num in nums:
        if func(num):
            even_in_list.append(num)
    return even_in_list


print(check_list(lambda x: x % 3 == 0, nums))
