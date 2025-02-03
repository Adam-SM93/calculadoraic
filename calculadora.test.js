const { sumar, restar, multiplicar, dividir, raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Multiplica 2 * 3 y devuelve 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
});

test('Divide 6 / 2 y devuelve 3', () => {
    expect(dividir(6, 2)).toBe(3);
});

test('Raíz cuadrada de 9 y devuelve 3', () => {
    expect(raizCuadrada(9)).toBe(3);
});

test('Raíz cuadrada de 16 y devuelve 4', () => {
    expect(raizCuadrada(16)).toBe(4);
});
