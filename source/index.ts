/* eslint-disable @typescript-eslint/no-var-requires */
import {
  RouterSingleton as RouterSingletonBase,
  BaseController as BaseControllerRest,
  BaseControllerDefault as BaseControllerDefaultRest,
  BaseControllerCreate as BaseControllerCreateRest,
  BaseControllerRead as BaseControllerReadRest,
  BaseControllerUpdate as BaseControllerUpdateRest,
  BaseControllerDelete as BaseControllerDeleteRest,
  BaseControllerConnect as BaseControllerConnectRest,
  BaseControllerHead as BaseControllerHeadRest,
  BaseControllerTrace as BaseControllerTraceRest,
} from 'backapirest';

import {
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

import { request as requestExpress, SimpleApp } from '@backapirest/express';

import dotEnv from 'dotenv';
dotEnv.config();

let framework;

switch (process.env.BACK_API_REST_FRAMEWORK) {
  case 'express':
    framework = require('@backapirest/express');
    break;

  case 'aws':
  case 'aws-lambda':
    framework = require('@backapirest/aws-lambda');
    break;

  case 'gcp':
  case 'gcp-function':
  case 'digital-ocean':
  case 'digital-ocean-function':
  case 'oci':
  case 'oci-function':
  case 'azure':
  case 'azure-function':
  case 'next':
  default:
    framework = require('@backapirest/next');
    break;
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

const BaseController: typeof BaseControllerRest = framework.BaseController;
blindExport('BaseController', BaseController);

const BaseControllerDefault: typeof BaseControllerDefaultRest =
  framework.BaseControllerDefault;
blindExport('BaseControllerDefault', BaseControllerDefault);

const BaseControllerCreate: typeof BaseControllerCreateRest =
  framework.BaseControllerCreate;
blindExport('BaseControllerCreate', BaseControllerCreate);

const BaseControllerRead: typeof BaseControllerReadRest =
  framework.BaseControllerRead;
blindExport('BaseControllerRead', BaseControllerRead);

const BaseControllerUpdate: typeof BaseControllerUpdateRest =
  framework.BaseControllerUpdate;
blindExport('BaseControllerUpdate', BaseControllerUpdate);

const BaseControllerDelete: typeof BaseControllerDeleteRest =
  framework.BaseControllerDelete;
blindExport('BaseControllerDelete', BaseControllerDelete);

const BaseControllerConnect: typeof BaseControllerConnectRest =
  framework.BaseControllerConnect;
blindExport('BaseControllerConnect', BaseControllerConnect);

const BaseControllerHead: typeof BaseControllerHeadRest =
  framework.BaseControllerHead;
blindExport('BaseControllerHead', BaseControllerHead);

const BaseControllerTrace: typeof BaseControllerTraceRest =
  framework.BaseControllerTrace;
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
