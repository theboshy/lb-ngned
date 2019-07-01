# lb-ngned



TODO - descripcion





# Instalacion : 

 # APi 

**{project-dir}./server/**

```console
wanabe@wanabe-corp:~$ sudo npm install

```

  # Front Page 
  
  **{project-dir}./client/**
  
  ```console
wanabe@wanabe-corp:~$ sudo npm install

```

# Mapa de dependencias

[./package.json](https://github.com/theboshy/lb-ngned/blob/master/package.json)

```json
{
  "name": "apiBooks",
  "version": "1.0.0",
  "main": "server/server.js",
  "engines": {
    "node": "6.2.0"
  },
  "scripts": {
    "lint": "eslint .",
    "start": "node .",
    "posttest": "npm run lint"
  },
  "dependencies": {
    "compression": "^1.0.3",
    "cors": "^2.5.2",
    "helmet": "^3.10.0",
    "loopback": "^3.22.0",
    "loopback-boot": "^2.6.5",
    "loopback-component-explorer": "^6.2.0",
    "loopback-connector-mongodb": "^3.8.0",
    "loopback-connector-mysql": "^5.4.1",
    "serve-favicon": "^2.0.1",
    "strong-error-handler": "^3.0.0"
  },
  "devDependencies": {
    "eslint": "^3.17.1",
    "eslint-config-loopback": "^8.0.0"
  },
  "repository": {
    "type": "",
    "url": ""
  },
  "license": "UNLICENSED",
  "description": "apiBooks"
}
```


[./client/package.json](https://github.com/theboshy/lb-ngned/blob/master/client/package.json)
```json
{
  "name": "front",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^6.1.0",
    "@angular/common": "^6.1.0",
    "@angular/compiler": "^6.1.0",
    "@angular/core": "^6.1.0",
    "@angular/forms": "^6.1.10",
    "@angular/http": "^6.1.0",
    "@angular/material": "~8.0.1",
    "@angular/platform-browser": "^6.1.0",
    "@angular/platform-browser-dynamic": "^6.1.0",
    "@angular/router": "^6.1.0",
    "angular-alert-module": "^2.0.3",
    "bootstrap": "^4.1.3",
    "core-js": "^2.5.4",
    "hammerjs": "^2.0.8",
    "jquery": "^3.3.1",
    "ngx-bootstrap": "^3.3.0",
    "ngx-pagination": "^3.2.1",
    "ngx-spinner": "^6.1.2",
    "popper.js": "^1.14.4",
    "rxjs": "~6.2.0",
    "zone.js": "~0.8.26"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.8.0",
    "@angular/cli": "~6.2.2",
    "@angular/compiler-cli": "^6.1.0",
    "@angular/language-service": "^6.1.0",
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.9.4",
    "codelyzer": "~4.3.0",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~3.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    "ts-node": "~7.0.0",
    "tslint": "~5.11.0",
    "typescript": "~2.9.2"
  }
}
```

<h2>Iniciar api (loopback)<h2>


**{project-dir}./server/**


```console
wanabe@wanabe-corp:~$ npm start 
```


<h2>Iniciar front page (angular)</h2>

  **{project-dir}./client/**
  
  
  ```console
wanabe@wanabe-corp:~$ sudo ng serve

```




EXplorar la pagina principal en [localhost:4200/](localhost:4200/)

EXplorar colleccion de Api en [localhost:3000/](localhost:3000/explorer)


