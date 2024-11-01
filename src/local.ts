import { serve } from '@hono/node-server';
import app from './app.ts';

const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
