import {
  BaseController as BaseControllerNext,
  BaseControllerDefault as BaseControllerDefaultNext,
  BaseControllerDelete as BaseControllerDeleteNext,
  BaseControllerRead as BaseControllerReadNext,
  BaseControllerCreate as BaseControllerCreateNext,
  BaseControllerUpdate as BaseControllerUpdateNext,
  BaseControllerConnect as BaseControllerConnectNext,
  BaseControllerHead as BaseControllerHeadNext,
  BaseControllerTrace as BaseControllerTraceNext,
  RouterSingleton as RouterSingletonNext,
  Mixin,
  RouterCreator,
  request as requestNext,
  baseRouter,
  controller,
  createRoutes,
  requestAllow,
  stepIndex,
  timer,
} from '@backapirest/next';

import {
  SimpleApp,
  BaseController as BaseControllerExpress,
  BaseControllerDefault as BaseControllerDefaultExpress,
  BaseControllerDelete as BaseControllerDeleteExpress,
  BaseControllerRead as BaseControllerReadExpress,
  BaseControllerCreate as BaseControllerCreateExpress,
  BaseControllerUpdate as BaseControllerUpdateExpress,
  BaseControllerConnect as BaseControllerConnectExpress,
  BaseControllerHead as BaseControllerHeadExpress,
  BaseControllerTrace as BaseControllerTraceExpress,
  RouterSingleton as RouterSingletonExpress,
  request as requestExpress,
} from '@backapirest/express';

import dotEnv from 'dotenv';
dotEnv.config();

const isExpress = process.env.BACK_API_REST_FRAMEWORK === 'express';

const dExport = (name: string, get: () => any) => {
  Object.defineProperty(exports, name, {
    enumerable: true,
    get: get,
  });
};

export {
  SimpleApp,
  Mixin,
  RouterCreator,
  requestAllow,
  stepIndex,
  timer,
  baseRouter,
  controller,
  createRoutes,
};

exports.request = isExpress ? requestExpress : requestNext;

dExport('BaseController', () => {
  return isExpress ? BaseControllerExpress : BaseControllerNext;
});

dExport('BaseControllerDefault', () => {
  return isExpress ? BaseControllerDefaultExpress : BaseControllerDefaultNext;
});

dExport('BaseControllerDelete', () => {
  return isExpress ? BaseControllerDeleteExpress : BaseControllerDeleteNext;
});

dExport('BaseControllerRead', () => {
  return isExpress ? BaseControllerReadExpress : BaseControllerReadNext;
});

dExport('BaseControllerCreate', () => {
  return isExpress ? BaseControllerCreateExpress : BaseControllerCreateNext;
});

dExport('BaseControllerUpdate', () => {
  return isExpress ? BaseControllerUpdateExpress : BaseControllerUpdateNext;
});

dExport('BaseControllerConnect', () => {
  return isExpress ? BaseControllerConnectExpress : BaseControllerConnectNext;
});

dExport('BaseControllerHead', () => {
  return isExpress ? BaseControllerHeadExpress : BaseControllerHeadNext;
});

dExport('BaseControllerTrace', () => {
  return isExpress ? BaseControllerTraceExpress : BaseControllerTraceNext;
});

dExport('RouterSingleton', () => {
  return isExpress ? RouterSingletonExpress : RouterSingletonNext;
});
