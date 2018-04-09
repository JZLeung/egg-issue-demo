'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  });

  router.post('/login', localStrategy);
};
