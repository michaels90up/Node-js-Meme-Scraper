// import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// // import got from 'got';
// fetch(myUrl)
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch(() => {});

async function needMemes() {
  const requestUrl = 'https://memegen-link-examples-upleveled.netlify.app/';
  const request = new Request(requestUrl);
  const response = await fetch(request);
  const storeString = await response.json();
}
console.log(needMemes());
