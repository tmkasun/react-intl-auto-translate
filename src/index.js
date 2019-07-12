#!/usr/bin/env node
// Require the module and instantiate instance
var TJO = require("translate-json-object")();
const fs = require("fs");

let [command, script, source, locale, apiKey] = process.argv;

if(!source) {
  const errorMessage = "Require a source language file!";
  console.error(errorMessage);
  throw new Error(errorMessage);
}
  locale = locale || "si";

console.log("Initializing google translator...")
TJO.init({
  googleApiKey: apiKey || "AIzaSyB6kvTc-VTltJgoLEUEb_lWGH27ujX-P88"
});

console.log("Reading source language file...")
let rawData = fs.readFileSync(source);
let jsonData = JSON.parse(rawData);

console.log("Translating ...")

TJO.translate(jsonData, locale)
  .then(function(data) {
    console.log("Translation completed!")
    const target = locale + ".json";
    console.log("Writing target file " + target);
    fs.writeFileSync(target, JSON.stringify(data, null, 4));
  })
  .catch(function(err) {
    console.log("error ", err);
  });
