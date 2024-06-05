array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    if value_to_find in array_to_search_through:
        return array_to_search_through.index(value_to_find)


def global_linear_search(value_to_find, array_to_search_through):
    answer = []

    for i in range(len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            answer.append(i)
    return answer