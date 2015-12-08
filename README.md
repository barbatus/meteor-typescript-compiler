# Meteor Typescript Compiler

## Introduction

TypeScript is a statically typed superset of JavaScript that compiles to plain vanilla JavaScript. The language comes with many additions such as classes, scoping, modules and interfaces. See [http://www.typescriptlang.org](http://www.typescriptlang.org) for more information.

With this meteor plugin, TypeScript files (ending is .ts) are automatically compiled to JavaScript as you start the meteor server.

## What's included?

* Transparent compilation of Typescript assets on the Meteor platform.
* Libraries such as **meteor.d.ts** or **node.d.ts** are not bundled with the project, please grab them from [https://github.com/meteor-typescript/meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs).
* Sample demos built around Meteor+TypeScript can be found in the **samples** folder.

## Install

This version of the module supports Meteor 1.2.x and forward.

* From your Meteor project, type `meteor add meteortypescript:compiler`.
* Add a `.tsconfig` at the top of your project (see below).
* Create a /typings/meteor/ folder at the root of your project, add **meteor.d.ts** ([https://github.com/meteor-typescript/meteor-typescript-libs](https://github.com/meteor-typescript/meteor-typescript-libs)) or any other ts description files you may be interested in.

That's it! From now on, all `*.ts` files are dynamically compiled into Javascript (client and server).

* Refer to the following [coding guidelines](https://github.com/meteor-typescript/meteor-typescript-libs#usage-collections) for more details about how to use Meteor and Typescript together.
* When working with an IDE such as WebStorm, be sure to disable typescript generation.

## .tsconfig

With a few exceptions, the options in this file are the same as the tsc command line parameters (https://github.com/Microsoft/TypeScript/wiki/Compiler-Options).

For instance:

```json
 {
    "target": "es5",
    "sourceMap": true,
    "noImplicitAny": true,
    "jsx": "preserve"
 }
 ```

The package extends usage with the following additions:

* **noResolve**: true | false - When set to true referencedFiles array will be always empty.
* **alwaysThrow**: true | false - When set, tells the compiler to throw exceptions whenever syntactic or semantic ("module not found", for example) error occurs. The default behavior is to throw on syntactic errors.
* **useCache**: true | false - When set, enables caching of generated files.

The options which are not considered are declaration, project, watch (file changes watch is expected to done via Meteor plugins), inlineSourceMap, inlineSources, outDir, outFile, rootDir, sourceRoot.


## Credits

* A TypeScript compiler that used in this package provided by [ts-compilers](https://github.com/barbatus/ts-compilers) package.

## Updates
* **Nov 1st 2015** - Compiler module changed to support Meteor 1.2.x
* **Jul 8 2015** - fixed an issue on Windows where zzz.ts-compiler.ts would try and make itself on the C:\ drive if your project was located in My Documents. - Jacob Foster
* **Jul 8 2015** - fixed an issue where tsc could not be found on Windows (must install TypeScript for Visual Studio) - Jacob Foster
* **Feb 22 2015** - support for source maps. comments are now removed from generated files.
* **Feb 17 2015** - typescrypt-compiler v2, batch compilation using tsc - code merged from meteor-tsc, thanks to jason parekh.
* **Oct 26 2014** - Upgraded package to latest atmosphere, fixed issues with caching.
* **March 2014** - meteortypescript organization is now live. please join and contribute.
* **May 6 2014** - switched internal compiler to ts-compiler, full support for ts 1.0.
