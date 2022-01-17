def enc(s):
    k = 16
    x = s[:k]
    w = len(x) // 3 
    y = s[k:]
    d = x[w:]
    n = len(y) // 2
    m = y[n:]
    return m+y[:n]+d+x[:w]

flag = "cow{xxxxxxxxxxxxxxxxxxxx}"
print(enc(flag))