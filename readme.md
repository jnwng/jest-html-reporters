### Jest reporter

[![npm](https://img.shields.io/npm/v/jest-html-reporters.svg)](https://www.npmjs.com/package/jest-html-reporters)
[![NPM downloads](http://img.shields.io/npm/dm/jest-html-reporters.svg)](http://npmjs.com/jest-html-reporters)
[![license](https://img.shields.io/npm/l/jest-html-reporters.svg)](https://www.npmjs.com/package/jest-html-reporters)


Jest test results processor for generating a summary in HTML

![example picture](./show.gif)

### Installation

---

```shell
  npm install jest-html-reporters --save-dev
```

### Usage
----
Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.json):
```json
"jest": {
  ...,
  "reporters": [
    "default",
    "jest-html-reporters"
  ],
  ...
}

```
As you run Jest from within the terminal, a file called `jest_html_reporters.html` will be created within your root folder containing information about your tests.

### Available Options
The options below are specific to the reporter.

| Option Name  | Type    | Default                  | Description                                                   |
| :----------- | :------ | :----------------------- | :------------------------------------------------------------ |
| `publicPath` | string  | ''                       | specify the base path                                         |
| `filename`   | string  | jest_html_reporters.html | Filename of saved report <br> *Applies to the generated html* |
| `expand`     | Boolean | false                    | specify whether default expand all data                       |
#### example add config options 
```json
...,
"reporters": [
  "default",
  ["jest-html-reporters", {
    "publicPath": "./html-report",
    "filename": "report.html",
    "expand": true
  }]
]
```
