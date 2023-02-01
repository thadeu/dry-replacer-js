# dry-replacer-js

🐍 A simple and lightweight library to replace variables in the JSON template  

[![ci](https://github.com/thadeu/dry-replacer-js/actions/workflows/ci.yml/badge.svg)](https://github.com/thadeu/dry-replacer-js/actions/workflows/ci.yml)
[![Npm package version](https://badgen.net/npm/v/@thadeu/dry-replacer-js)](https://www.npmjs.com/package/@thadeu/dry-replacer-js)

## Install

Install via yarn or npm

```bash
$ yarn add dry-replacer-js
```

or

```bash
$ npm i dry-replacer-js
```

## Usage

```js
import dryreplacer from 'dry-replacer-js'
```

Image that your json to be this.

```js
const data = {
  id: 1,
  name: 'test',
  accepted: true,
  obj: {
    id: 1,
    name: 'obj',
    list: ['a', 'b', 'c'],
  },
  list: ['a', 'b', 'c'],
  listobjs: [
    {
      id: 1,
      name: 'obj1',
      list: ['a', 'b', 'c'],
    },
    {
      id: 2,
      name: 'obj2',
      list: ['d', 'e', 'f'],
    },
    {
      id: 3,
      name: 'obj3',
      list: ['g', 'h', 'i'],
    },
  ],
  complex: [
    {
      id: 1,
      obj: {
        id: 999,
        name: 'complex',
      },
    },
  ],
}
```

So, you create a template and `try` replace variables to final data.

For simple example with fixed value.

```js
let template = {
  code: 'fixedvalue',
}

const replacer = new dryreplacer(data)
let result = replacer.try(JSON.stringify(template, null, 4))
```

Others examples.

```js
let template = {
  name: '{{name}}',
}

const replacer = new dryreplacer(data)
let result = replacer.try(JSON.stringify(template, null, 4))
```

You can also pass get [iteratee](https://lodash.com/docs/4.17.15#get) path to variable, for example.

```js
let template = {
  id: '{{obj.id}}',
  name: '{{obj.name}}',
  list: '{{obj.list}}',
}

const replacer = new dryreplacer(data)
let result = replacer.try(JSON.stringify(template, null, 4))
```

Use imagination to create a bunch of variables.

```js
let template = {
  id: '{{obj.id}}',
  name: '{{obj.name}}',
  url: 'https://test.com/{{obj.id}}?name={{obj.name}}&accepted={{accepted}}',
}

const replacer = new dryreplacer(data)
let result = replacer.try(JSON.stringify(template, null, 4))
```

# Contributing

Once you've made your great commits (include tests, please):

1. Fork this repository
2. Create a topic branch - `git checkout -b my_branch`
3. Push to your branch - `git push origin my_branch`
4. Create a pull request

That's it!

Please respect the indentation rules and code style. And use 2 spaces, not tabs. And don't touch the version thing or distribution files; this will be made when a new version is going to be released.

# MIT License

Copyright (c) 2023 Thadeu Esteves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.