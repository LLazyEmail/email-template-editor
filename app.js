const { getFullHtml } = require("./getFullHtml");

const regexp = /{{[A-Za-z]{0,}}}/g;

const result = getFullHtml().match(regexp);
console.log("result", result);
