'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV2Router = app.router.namespace('/api/v2')
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index); 
  // api 有版本
  apiV2Router.post('/login/register', controller.login.register);
};
