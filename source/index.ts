import * as next from '@backapirest/next';

import * as express from '@backapirest/express';

const anyT = process.env.BACK_API_REST_FRAMEWORK === 'express' ? express : next;
const request = anyT.request;
const SimpleApp = (anyT as any).SimpleApp as express.SimpleApp;
const BaseController = anyT.BaseController;
const BaseControllerDefault = anyT.BaseControllerDefault;
const BaseControllerDelete = anyT.BaseControllerDelete;
const BaseControllerRead = anyT.BaseControllerRead;
const BaseControllerCreate = anyT.BaseControllerCreate;
const BaseControllerUpdate = anyT.BaseControllerUpdate;
const BaseControllerConnect = anyT.BaseControllerConnect;
const BaseControllerHead = anyT.BaseControllerHead;
const BaseControllerTrace = anyT.BaseControllerTrace;
const RouterSingleton = anyT.RouterSingleton;
const RouterCreator = (anyT as any).RouterCreator as next.RouterCreator;
const Mixin = anyT.Mixin;
const baseRouter = (anyT as any).baseRouter as typeof next.baseRouter;
const controller = (anyT as any).controller as typeof next.controller;
const createRoutes = (anyT as any).createRoutes as typeof next.createRoutes;
const requestAllow = (anyT as any).requestAllow as typeof next.requestAllow;
const stepIndex = (anyT as any).stepIndex as typeof next.stepIndex;
const timer = (anyT as any).timer as typeof next.timer;

export {
  SimpleApp,
  BaseController,
  BaseControllerDefault,
  BaseControllerDelete,
  BaseControllerRead,
  BaseControllerCreate,
  BaseControllerUpdate,
  BaseControllerConnect,
  BaseControllerHead,
  BaseControllerTrace,
  RouterSingleton,
  Mixin,
  RouterCreator,
  request,
  baseRouter,
  controller,
  createRoutes,
  requestAllow,
  stepIndex,
  timer,
};
