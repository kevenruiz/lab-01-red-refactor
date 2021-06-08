import getName from './get-name.js';

describe('get name', () => {
  test('grabs name', () => {
    const data = { name: 'Keven', age: 31 };
    const name = getName(data);
    expect(name).toEqual('Keven');
  });
});
