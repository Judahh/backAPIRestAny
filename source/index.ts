import * as next from '@backapirest/next';

import * as express from '@backapirest/express';

export const anyT =
  process.env.BACK_API_REST_FRAMEWORK === 'express' ? express : next;
