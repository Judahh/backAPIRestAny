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
exports.BaseController = isExpress ? BaseControllerExpress : BaseControllerNext;
exports.BaseControllerDefault = isExpress
  ? BaseControllerDefaultExpress
  : BaseControllerDefaultNext;
exports.BaseControllerDelete = isExpress
  ? BaseControllerDeleteExpress
  : BaseControllerDeleteNext;
exports.BaseControllerRead = isExpress
  ? BaseControllerReadExpress
  : BaseControllerReadNext;
exports.BaseControllerCreate = isExpress
  ? BaseControllerCreateExpress
  : BaseControllerCreateNext;
exports.BaseControllerUpdate = isExpress
  ? BaseControllerUpdateExpress
  : BaseControllerUpdateNext;
exports.BaseControllerConnect = isExpress
  ? BaseControllerConnectExpress
  : BaseControllerConnectNext;
exports.BaseControllerHead = isExpress
  ? BaseControllerHeadExpress
  : BaseControllerHeadNext;
exports.BaseControllerTrace = isExpress
  ? BaseControllerTraceExpress
  : BaseControllerTraceNext;
exports.RouterSingleton = isExpress
  ? RouterSingletonExpress
  : RouterSingletonNext;
