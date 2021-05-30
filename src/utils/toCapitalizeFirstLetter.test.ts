import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку и возвращать строку, начинающуюся с заглавной буквы', () => {
    const result = toCapitalizeFirstLetter('test');

    expect(result).toEqual('Test');
  });

  test('Должна принимать и возвращать пустую строку', () => {
    const result = toCapitalizeFirstLetter('');

    expect(result).toEqual('');
  });

  test('Должна принимать строку и возвращать строку, где все буквы, кроме первой, строчные', () => {
    const result = toCapitalizeFirstLetter('some String');

    expect(result).toEqual('Some string');
  });
});
