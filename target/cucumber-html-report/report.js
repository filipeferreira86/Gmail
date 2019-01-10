$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/featureGmail.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Permitir login no email",
  "description": "",
  "id": "permitir-login-no-email",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 196836,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Fazer login com sucesso",
  "description": "",
  "id": "permitir-login-no-email;fazer-login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 6,
  "name": "que estou na pagina \"https://accounts.google.com/signin/v2/identifier?continue\u003dhttps%3A%2F%2Fmail.google.com%2Fmail%2F\u0026service\u003dmail\u0026sacu\u003d1\u0026rip\u003d1\u0026flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "eu informar \"teste.email.gx2@gmail.com\" no campo \"identifier\" #name",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "cliar no botão \"identifierNext\" #id",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "informar \"gx2@7242\" no campo \"password\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "cliar no botão \"passwordNext\" #id",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "deve logar no Gmail apresentando mensagem \"mensagem\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/signin/v2/identifier?continue\u003dhttps%3A%2F%2Fmail.google.com%2Fmail%2F\u0026service\u003dmail\u0026sacu\u003d1\u0026rip\u003d1\u0026flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin",
      "offset": 21
    }
  ],
  "location": "Steps.que_estou_na_pagina(String)"
});
formatter.result({
  "duration": 16397550247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste.email.gx2@gmail.com",
      "offset": 13
    },
    {
      "val": "identifier",
      "offset": 50
    }
  ],
  "location": "Steps.eu_informar_no_campo_name(String,String)"
});
formatter.result({
  "duration": 149630464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "identifierNext",
      "offset": 16
    }
  ],
  "location": "Steps.cliar_no_botão_id(String)"
});
formatter.result({
  "duration": 248487536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gx2@7242",
      "offset": 10
    },
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "Steps.informar_no_campo(String,String)"
});
formatter.result({
  "duration": 66931560,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: *[name\u003d\u0027password\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GX2-13\u0027, ip: \u0027192.168.0.205\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 64.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 12808, moz:profile: C:\\Users\\filipe.jesus\\AppDa..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a11b64fe-094b-48cb-86f1-028500f5f852\n*** Element info: {Using\u003dname, value\u003dpassword}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Elementos.CampoEntrada.achaComName(CampoEntrada.java:21)\r\n\tat Steps.Steps.informar_no_campo(Steps.java:54)\r\n\tat ✽.E informar \"gx2@7242\" no campo \"password\"(src/test/resources/features/featureGmail.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwordNext",
      "offset": 16
    }
  ],
  "location": "Steps.cliar_no_botão_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mensagem",
      "offset": 43
    }
  ],
  "location": "Steps.deve_logar_no_Gmail_apresentando_mensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1940363594,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Fazer login com falha",
  "description": "",
  "id": "permitir-login-no-email;fazer-login-com-falha",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "que estou na pagina \"https://accounts.google.com/signin/v2/identifier?continue\u003dhttps%3A%2F%2Fmail.google.com%2Fmail%2F\u0026service\u003dmail\u0026sacu\u003d1\u0026rip\u003d1\u0026flowName\u003dGlifWebSignIn\u0026flowEntry\u003dServiceLogin\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "cliar no botão \"identifierNext\" #id",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "eu informar \u003clogin\u003e no campo \"login\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "cliar no botão \"passwordNext\" #id",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informar \u003csenha\u003e no campo \"password\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "não deve logar no Gmail apresentando mensagem \"mensagem\"",
  "rows": [
    {
      "cells": [
        "login",
        "senha"
      ],
      "line": 20
    },
    {
      "cells": [
        "teste.email1.gx2@gmail.com",
        "gx2@7242"
      ],
      "line": 21
    },
    {
      "cells": [
        "teste.email.gx2@gmail.com",
        "gx2@724222"
      ],
      "line": 22
    },
    {
      "cells": [
        "teste.email1.gx2@gmail.com",
        "gx2@724"
      ],
      "line": 23
    }
  ],
  "keyword": "Então "
});
});