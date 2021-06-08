import fetch from 'node-fetch';
export async function fetchQuote(num = 1) {
  const quote = await fetch(`http://futuramaapi.herokuapp.com/api/quotes/${num}`)
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image

    }));
  return quote;

}

/*
return data.map(quote => {
  return {
    name: quote.expect.any(String),
    text: quote.expect.any(String),
    image: quote.expect.any(String)

  };
});
*/
