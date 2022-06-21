/* eslint-disable @typescript-eslint/no-var-requires */
import { RouterSingleton as RouterSingletonBase } from 'backapirest';

import {
  BaseController as BaseControllerNext,
  BaseControllerDefault as BaseControllerDefaultNext,
  BaseControllerCreate as BaseControllerCreateNext,
  BaseControllerRead as BaseControllerReadNext,
  BaseControllerUpdate as BaseControllerUpdateNext,
  BaseControllerDelete as BaseControllerDeleteNext,
  BaseControllerConnect as BaseControllerConnectNext,
  BaseControllerHead as BaseControllerHeadNext,
  BaseControllerTrace as BaseControllerTraceNext,
  request as requestNext,
  Mixin,
  RouterCreator,
  baseRouter,
  controller,
  createRoutes,
  requestAllow,
  stepIndex,
  timer,
} from '@backapirest/next';

import {
  BaseController as BaseControllerExpress,
  BaseControllerDefault as BaseControllerDefaultExpress,
  BaseControllerCreate as BaseControllerCreateExpress,
  BaseControllerRead as BaseControllerReadExpress,
  BaseControllerUpdate as BaseControllerUpdateExpress,
  BaseControllerDelete as BaseControllerDeleteExpress,
  BaseControllerConnect as BaseControllerConnectExpress,
  BaseControllerHead as BaseControllerHeadExpress,
  BaseControllerTrace as BaseControllerTraceExpress,
  request as requestExpress,
  SimpleApp,
} from '@backapirest/express';

import dotEnv from 'dotenv';
dotEnv.config();

const isExpress = process.env.BACK_API_REST_FRAMEWORK === 'express';

let framework;
if (isExpress) {
  framework = require('@backapirest/next');
} else {
  framework = require('@backapirest/express');
}

const request: typeof requestNext | typeof requestExpress = framework.request;
const getExports = (toExport) => ({
  enumerable: true,
  get: () => {
    return toExport;
  },
});
const blindExport = (name, toExport) =>
  Object.defineProperty(exports, name, getExports(toExport));

const RouterSingleton: typeof RouterSingletonBase = framework.RouterSingleton;

blindExport('RouterSingleton', RouterSingleton);

const BaseController: typeof BaseControllerNext | typeof BaseControllerExpress =
  framework.BaseController;
blindExport('BaseController', BaseController);

const BaseControllerDefault:
  | typeof BaseControllerDefaultNext
  | typeof BaseControllerDefaultExpress = framework.BaseControllerDefault;
blindExport('BaseControllerDefault', BaseControllerDefault);

const BaseControllerCreate:
  | typeof BaseControllerCreateNext
  | typeof BaseControllerCreateExpress = framework.BaseControllerCreate;
blindExport('BaseControllerCreate', BaseControllerCreate);

const BaseControllerRead:
  | typeof BaseControllerReadNext
  | typeof BaseControllerReadExpress = framework.BaseControllerRead;
blindExport('BaseControllerRead', BaseControllerRead);

const BaseControllerUpdate:
  | typeof BaseControllerUpdateNext
  | typeof BaseControllerUpdateExpress = framework.BaseControllerUpdate;
blindExport('BaseControllerUpdate', BaseControllerUpdate);

const BaseControllerDelete:
  | typeof BaseControllerDeleteNext
  | typeof BaseControllerDeleteExpress = framework.BaseControllerDelete;
blindExport('BaseControllerDelete', BaseControllerDelete);

const BaseControllerConnect:
  | typeof BaseControllerConnectNext
  | typeof BaseControllerConnectExpress = framework.BaseControllerConnect;
blindExport('BaseControllerConnect', BaseControllerConnect);

const BaseControllerHead:
  | typeof BaseControllerHeadNext
  | typeof BaseControllerHeadExpress = framework.BaseControllerHead;
blindExport('BaseControllerHead', BaseControllerHead);

const BaseControllerTrace:
  | typeof BaseControllerTraceNext
  | typeof BaseControllerTraceExpress = framework.BaseControllerTrace;
blindExport('BaseControllerTrace', BaseControllerTrace);

export {
  RouterSingleton,
  BaseController,
  BaseControllerDefault,
  BaseControllerDelete,
  BaseControllerRead,
  BaseControllerCreate,
  BaseControllerUpdate,
  BaseControllerConnect,
  BaseControllerHead,
  BaseControllerTrace,
  SimpleApp,
  Mixin,
  RouterCreator,
  request,
  requestAllow,
  stepIndex,
  timer,
  baseRouter,
  controller,
  createRoutes,
};
