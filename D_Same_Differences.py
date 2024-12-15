def factorial(n):
    result = 0
    for i in range(2, n + 1):
        result += i-1
    return result
for _ in range(int(input())):
    n = int(input())
    ls = list(map(int, input().split()))
    dc = {}
    for i in range(n):
        ls[i] -= i-1    
    ans = 0
    for i in range(n):
        dc[ls[i]] = dc.get(ls[i], 0) + 1 
    for e,k in dc.items():
        if(k>1):
            ans=factorial(k)
    print(ans)