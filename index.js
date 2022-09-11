import * as cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';

// let counter = 1;
// Alternative solution path:
// fetch('https://memegen-link-examples-upleveled.netlify.app/')
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch(() => {});

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const fullText = await response.text();
const $ = cheerio.load(fullText);
const div = $('section > div');

const fullArray = [];

div.each(function () {
  fullArray.push($(this).find('img').attr('src'));
});

const newArray = fullArray.splice(0, 10);
console.log(newArray);

// const getMemes = await fetch(newArray);
//
// function saveImgToFolder(url, path) {
//   const localPath = fs.createWriteStream(path);
//
//   https.get(url, function (response) {
//     response.pipe(localPath);
//     console.log('success');
//   });
// }
// firstTenMemes.forEach((meme) => {
//   saveImgToFolder(meme, `./memes/0${counter}.jpg`);
//   counter++;
// });
