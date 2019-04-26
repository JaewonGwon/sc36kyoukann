
def solution():
    input = [[5, 6], [1, 6], [1, 4]]

    x = 0
    y = 0

    for i in range (len(input)-1):
        for j in range (i+1, len(input)):
            if input[i][0] != input[j][0]:
                x = input[i][0]
            if input[i][1] != input[j][1]:
                y = input[i][1]

    
    print(x)
    print(y)

solution()
