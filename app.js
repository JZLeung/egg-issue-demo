'use strict';
const LocalStrategy = require('passport-local').Strategy;
console.log('hahahahahha');
module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass',
    passReqToCallback: true,
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    console.log('%s %s get user: %j', req.method, req.url, user);
    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    ctx.logger.debug('passport.verify', user);
    console.log(user);
    if (user.username === 'admin' && user.password === '123') {
      const auth_token = user.username + '$$$$'; // 以后可能会存储更多信息，用 $$$$ 来分隔
      const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true,
      };
      ctx.cookies.set(app.config.auth_cookie_name, auth_token, opts);
      return user;
    }

    return null;

    // return true;
  });
  app.passport.serializeUser(async (ctx, user) => {
    console.log('serializeUser', user);
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    console.log('deserializeUser', user);
    return user;
  });
};

