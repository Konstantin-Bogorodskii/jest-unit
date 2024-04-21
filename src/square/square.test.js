const square = require('./square');

describe('square', () => {
	// Перед каждым тестом
	beforeEach(() => {
		// Например на каждый тест мы добавляем какое-то значение в БД,
		// после этого в afterEach мы можем удалять это значение из БД
	});
	// Один раз перед всеми тестами
	beforeAll(() => {});
	// После каждого теста
	afterEach(() => {
		jest.clearAllMocks();
	});
	// Один раз после всех тестов
	afterAll(() => {});

	test('Корректное значение', () => {
		// expect(square(2)).toBe(4);
		// expect(square(2)).toBeLessThan(5);
		// expect(square(2)).toBeGreaterThan(3);

		// НЕ равно undefined
		// expect(square(2)).not.toBeUndefined();

		// следит сколько раз был вызван метод pow из модуля Math
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	});

	test('Корректное значение', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	});
});
