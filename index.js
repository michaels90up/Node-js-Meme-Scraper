import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// this one works:
// fetch('https://memegen-link-examples-upleveled.netlify.app/')
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch(() => {});

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const fullText = await response.text();
const $ = cheerio.load(fullText);
let div = $('section > div');

let fullArray = [];
div.each(function () {
  fullArray.push($(this).find('img').attr('src'));
});
