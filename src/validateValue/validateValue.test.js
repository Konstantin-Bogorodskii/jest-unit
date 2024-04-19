const validateValue = require('./validateValue');

// для одного тест кейса
// test('Валидация значения', () => {
// 	expect(validateValue(50)).toBe(true);
// });

// для нескольких тест кейсов
describe('validateValue', () => {
	test('Корректное значение', () => {
		expect(validateValue(50)).toBe(true);
	});

	test('Меньше корректного', () => {
		expect(validateValue(-30)).toBe(false);
	});

	test('Больше корректного', () => {
		expect(validateValue(110)).toBe(false);
	});

	test('Пограничное значение снизу', () => {
		expect(validateValue(0)).toBe(true);
	});

	test('Пограничное значение сверху', () => {
		expect(validateValue(100)).toBe(true);
	});
});
