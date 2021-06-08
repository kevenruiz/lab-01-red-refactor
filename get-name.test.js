import getName from './get-name.js';
import copyAndPush from './copy-and-push.js';
import capitalizeAndFilter from './search-filter.js';
import { fetchQuote } from './fetch-quote.js';


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
    expect(arr).toEqual([1, 2, 3]);

  });

  test('capitalize and filter by letter F/f', () => {
    const arrayOfStrings = ['Five feet of fury', 'five little feet', 'not this'];
    const filteredArray = capitalizeAndFilter(arrayOfStrings);
    expect(filteredArray).toEqual(['NOT THIS']);

  });



  test('', async () => {

    const expected =
    {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };
    const actual = await fetchQuote();
    expect(expected).toEqual(actual);
  });


});
