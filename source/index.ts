/* eslint-disable @typescript-eslint/no-var-requires */
import Next, {
  Mixin,
  RouterCreator,
  baseRouter,
  controller,
  createRoutes,
  requestAllow,
  stepIndex,
  timer,
} from '@backapirest/next';

import Express, { SimpleApp } from '@backapirest/express';

import dotEnv from 'dotenv';
dotEnv.config();

const isExpress = process.env.BACK_API_REST_FRAMEWORK === 'express';

let framework;
if (isExpress) {
  framework = require('@backapirest/next');
} else {
  framework = require('@backapirest/express');
}

const request: typeof Next.request | typeof Express.request = framework.request;
const getExports = (toExport) => ({
  enumerable: true,
  get: () => {
    return toExport;
  },
});

const RouterSingleton: {
  enumerable: boolean;
  get: () => Next.RouterSingleton | Express.RouterSingleton;
} = getExports(framework.RouterSingleton);

const BaseController: {
  enumerable: boolean;
  get: () => Next.BaseController | Express.BaseController;
} = getExports(framework.BaseController);

const BaseControllerDefault: {
  enumerable: boolean;
  get: () => Next.BaseControllerDefault | Express.BaseControllerDefault;
} = getExports(framework.BaseControllerDefault);

const BaseControllerCreate: {
  enumerable: boolean;
  get: () => Next.BaseControllerCreate | Express.BaseControllerCreate;
} = getExports(framework.BaseControllerCreate);

const BaseControllerRead: {
  enumerable: boolean;
  get: () => Next.BaseControllerRead | Express.BaseControllerRead;
} = getExports(framework.BaseControllerRead);

const BaseControllerUpdate: {
  enumerable: boolean;
  get: () => Next.BaseControllerUpdate | Express.BaseControllerUpdate;
} = getExports(framework.BaseControllerUpdate);

const BaseControllerDelete: {
  enumerable: boolean;
  get: () => Next.BaseControllerDelete | Express.BaseControllerDelete;
} = getExports(framework.BaseControllerDelete);

const BaseControllerConnect: {
  enumerable: boolean;
  get: () => Next.BaseControllerConnect | Express.BaseControllerConnect;
} = getExports(framework.BaseControllerConnect);

const BaseControllerHead: {
  enumerable: boolean;
  get: () => Next.BaseControllerHead | Express.BaseControllerHead;
} = getExports(framework.BaseControllerHead);

const BaseControllerTrace: {
  enumerable: boolean;
  get: () => Next.BaseControllerTrace | Express.BaseControllerTrace;
} = getExports(framework.BaseControllerTrace);

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
