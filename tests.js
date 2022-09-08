//import got from 'got';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const myUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

// fetch(myUrl)
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch(() => {});

// got(myUrl)
//   .then((response) => {
//     const fullString = cheerio.load(response.body);
//     fullString('src').each((i, link) => {
//       const imageUrls = link.attribs.src;
//       console.log(imageUrls);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
