<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Referers</h3>
<p align="center">Decorator based validation for request referers.</p>
<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Introduction

NestJS Referers is a simple package that implements decorator based validation for the referer header of incoming HTTP requests.
The adopted syntax for specifying allowed URL's was based on [Algolia's](https://www.algolia.com/doc/guides/security/api-keys/in-depth/api-key-restrictions/))** example.

A few examples:
- https://algolia.com/* will restrict access to all referers starting with https://algolia.com
- *.algolia.com will restrict access to all referers ending with .algolia.com
- If you want to allow access for the full domain algolia.com, you can use *algolia.com/*


### Installation

```bash
npm i nestjs-referers --save
```

### Examples



### Installation for Development

1. Clone the repo
2. Run npm/yarn install

```bash
cd nestjs-referers
npm install
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

All contributions are welcome! Check out [Contributing](CONTRIBUTING.md).

## Author

**Ricardo Ferreira da Silva (Check out my [Website](https://ricardoferreirasilva.pt))**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.