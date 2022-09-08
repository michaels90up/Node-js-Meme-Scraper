import cheerio from 'cheerio';
import fetch from 'node-fetch';

const allImagesArray = [];

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch(() => {});
