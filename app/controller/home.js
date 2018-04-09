'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hello, egg.js!'
    }
  async login() {
    this.ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LoginPage</title>
</head>
<body>
    <form action="/login" method="post">
        <input type="hidden" name="_csrf" value="${this.ctx.csrf}">
        <label for="loginname">
            LoginName:
            <input type="text" value="asdfasdf" id="loginname" name="loginname">
        </label>
        <label for="password">
            Password:
            <input type="text" value="asfdfdf" id="password" name="password">
        </label>

        <input type="submit" value="Submit">
    </form>
</body>
</html>`;
  }
}

module.exports = HomeController;
