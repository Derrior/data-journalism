import sys

def delete(arr, idxs):
    new_arr = arr[:idxs[0]]
    for i in range(len(idxs) - 1):
        new_arr += arr[idxs[i] + 1:idxs[i + 1]]
    new_arr += arr[idxs[-1] + 1:]
    return new_arr

def write_list(f, l):
    f.write(','.join(l) + '\n')
input = open(sys.argv[1])
output = open(sys.argv[2], 'w')

header = input.readline().split(',')
row = input.readline().split(',')

delete_columns = []
for i in range(len(row)):
    if (len(row[i].rstrip()) == 0):
        delete_columns.append(i)

write_list(output, delete(header, delete_columns))
write_list(output, delete(row, delete_columns))

while len(row) > 2:
    row = input.readline().split(',')
    write_list(output, delete(row, delete_columns))
output.close()
