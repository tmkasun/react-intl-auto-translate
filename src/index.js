#!/usr/bin/env node
// Imports the Google Cloud client library
const { Translate } = require("@google-cloud/translate");
const _cliProgress = require("cli-progress");
const fs = require("fs");
// create a new progress bar instance and use shades_classic theme
const progressBar = new _cliProgress.Bar(
  {},
  _cliProgress.Presets.shades_classic
);

function addNoTranslate(sourceString) {
  return sourceString
    .replace("{", '<span class="notranslate">')
    .replace("}", "</span>");
}

function removeNoTranslate(sourceString) {
  return sourceString
    .replace('<span class="notranslate">', "{")
    .replace("</span>", "}");
}

async function main(args) {
  const [sourceFile, targetLanguageCode='si', keyFilename] = args;
  let translateOptions;
  if (!keyFilename) {
    translateOptions = {
      key: Buffer.from(
        "QUl6YVN5QW9mcnlzSzJxeDVkZnlBZnRSNk15RXhwZ0xlVy1rNzlB",
        "base64"
      ).toLocaleString()
    };
  } else {
    translateOptions = { keyFilename };
  }
  // Instantiates a client
  console.log("Instantiating Google client");
  const translate = new Translate(translateOptions);

  let rawData = fs.readFileSync(sourceFile);
  let jsonData = JSON.parse(rawData);

  const translatedObject = {};
  let numberOfKeys = 0;
  console.log("Translating ...");
  progressBar.start(Object.keys(jsonData).length, 0);
  for (const [key, value] of Object.entries(jsonData)) {
    const [translation] = await translate.translate(
      addNoTranslate(value),
      targetLanguageCode
    );
    translatedObject[key] = removeNoTranslate(translation);
    numberOfKeys++;
    progressBar.update(numberOfKeys);
  }
  progressBar.stop();
  console.log(`${numberOfKeys} keys translated successfully!`);
  const targetFile = targetLanguageCode + ".json";
  console.log(`Writing ${targetFile} . . .`);

  fs.writeFileSync(targetFile, JSON.stringify(translatedObject, null, 4));
}

const args = process.argv.slice(2);
main(args).catch(console.error);
