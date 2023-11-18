from flask import Flask
from flask import request
import time

app = Flask(__name__)

def fatorial(n):
    time.sleep(3)
    f = 1
    for i in range(1, n+1):
        f *= i
    return f

@app.route('/fatorial')
def calcula_fatorial():
    n = request.args.get('n', default=0, type=int)
    return f'Fatorial de {n} = {fatorial(n)}'

app.run(host='localhost', port=3001)