// import * as cheerio from 'cheerio';
// import fs from 'fs';
// import got from 'got';
import fetch from 'node-fetch';

const myUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

fetch(myUrl)
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch(() => {});
