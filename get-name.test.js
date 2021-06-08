import getName from './get-name.js';
import copyAndPush from './copy-and-push.js';
import capitalizeAndFilter from './search-filter.js';


describe('get name', () => {
  test('grabs name', () => {
    const data = { name: 'Keven', age: 31 };
    const name = getName(data);
    expect(name).toEqual('Keven');
  });
  test('copyAndPush function', () => {
    const arr = [1, 2, 3];
    const newArr = copyAndPush(arr, 4);
    expect(newArr).toEqual([1, 2, 3, 4]);

  });
  test('making sure the original array doesnt change', () => {
    const arr = [1, 2, 3];

    expect(arr).toEqual([1, 2, 3]);

  });

  test('capitalize and filter by letter F/f', () => {
    const arrayOfStrings = ['Five feet of fury', 'five little feet', 'NOT THIS'];
    const filteredArray = capitalizeAndFilter(arrayOfStrings);
    expect(filteredArray).toEqual(['NOT THIS']);

  });
});
