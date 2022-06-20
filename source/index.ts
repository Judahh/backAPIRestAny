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

const request = isExpress ? requestExpress : requestNext;
const BaseController = isExpress ? BaseControllerExpress : BaseControllerNext;
const BaseControllerDefault = isExpress
  ? BaseControllerDefaultExpress
  : BaseControllerDefaultNext;
const BaseControllerDelete = isExpress
  ? BaseControllerDeleteExpress
  : BaseControllerDeleteNext;
const BaseControllerRead = isExpress
  ? BaseControllerReadExpress
  : BaseControllerReadNext;
const BaseControllerCreate = isExpress
  ? BaseControllerCreateExpress
  : BaseControllerCreateNext;
const BaseControllerUpdate = isExpress
  ? BaseControllerUpdateExpress
  : BaseControllerUpdateNext;
const BaseControllerConnect = isExpress
  ? BaseControllerConnectExpress
  : BaseControllerConnectNext;
const BaseControllerHead = isExpress
  ? BaseControllerHeadExpress
  : BaseControllerHeadNext;
const BaseControllerTrace = isExpress
  ? BaseControllerTraceExpress
  : BaseControllerTraceNext;
const RouterSingleton = isExpress
  ? RouterSingletonExpress
  : RouterSingletonNext;

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
