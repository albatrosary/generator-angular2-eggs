[![NPM version](http://img.shields.io/npm/v/generator-angular2-eggs.svg?style=flat-square)](https://npmjs.org/package/generator-angular2-eggs) [![Build Status](https://secure.travis-ci.org/albatrosary/generator-angular2-eggs.svg?branch=master)](http://travis-ci.org/albatrosary/generator-angular2-eggs) [![Coverage Status](https://coveralls.io/repos/albatrosary/generator-angular2-eggs/badge.png?branch=master)](https://coveralls.io/r/albatrosary/generator-angular2-eggs?branch=master) [![Dependency Status](https://david-dm.org/albatrosary/generator-angular2-eggs.svg)](https://david-dm.org/albatrosary/generator-angular2-eggs) [![devDependency Status](https://david-dm.org/albatrosary/generator-angular2-eggs/dev-status.svg)](https://david-dm.org/albatrosary/generator-angular2-eggs#info=devDependencies) [![peerDependency Status](https://david-dm.org/albatrosary/generator-angular2-eggs/peer-status.svg)](https://david-dm.org/albatrosary/generator-angular2-eggs#info=peerDependencies)

# Angular2, Component Router, Bootstrap v4-alpha and TingoDB(like MongoDB) App Generator 

This generator are using Angular2, Angular Component Router, Bootstrap v4(alpha) and Express on Node.js. Instead of MongoDB, it will use the lighter [TingoDB](http://www.tingodb.com/).  

Angular we have emphasized the development life cycle. It supports the next thing for that.

* Unit Test
* End-to-End Test
* Documentation
* Coverage
* Metric

## Usage

Install: `npm install -g generator-angular2-eggs`

Make a new directory and `cd` into it:
```
mkdir [app-name] && cd $_
```
This [app-name] is used as ng-app="[app-name]"

Run `yo angular2-eggs`:
```
yo angular2-eggs
```

## Generators

Available generators:

- yo angular2-eggs:components [name]
- yo angular2-eggs:service [name]
- yo angular2-eggs:resource [name]
- yo angular2-eggs:server [name]
 
## Notes

`yo angular2-eggs:components [name]` command creates a file as follows:

```bash
app/components/[name]/[name].html
app/components/[name]/[name].ts
test/components/[name]/[name].spec.ts
```

When `name` is `appName`:

```bash
app/components/appname/appname.html
app/components/appname/appname.ts
test/components/appname/appname.spec.ts
```

Component name is `appName`. So CustomTag name is `app-name`

### Components

Generates an Angular2 Components, as the Angular Module name is Sample.

Example:

```
yo angular2-eggs:components mycomponents
```

## License

[MIT License](http://opensource.org/licenses/MIT)
