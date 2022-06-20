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

const RouterSingleton: Next.RouterSingleton | Express.RouterSingleton =
  framework.BaseController;

const BaseController: Next.BaseController | Express.BaseController =
  framework.BaseController;
const BaseControllerDefault:
  | Next.BaseControllerDefault
  | Express.BaseControllerDefault = framework.BaseControllerDefault;
const BaseControllerCreate:
  | Next.BaseControllerCreate
  | Express.BaseControllerCreate = framework.BaseControllerCreate;
const BaseControllerRead: Next.BaseControllerRead | Express.BaseControllerRead =
  framework.BaseControllerRead;
const BaseControllerUpdate:
  | Next.BaseControllerUpdate
  | Express.BaseControllerUpdate = framework.BaseControllerUpdate;
const BaseControllerDelete:
  | Next.BaseControllerDelete
  | Express.BaseControllerDelete = framework.BaseControllerDelete;
const BaseControllerConnect:
  | Next.BaseControllerConnect
  | Express.BaseControllerConnect = framework.BaseControllerConnect;
const BaseControllerHead: Next.BaseControllerHead | Express.BaseControllerHead =
  framework.BaseControllerHead;
const BaseControllerTrace:
  | Next.BaseControllerTrace
  | Express.BaseControllerTrace = framework.BaseControllerTrace;

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
