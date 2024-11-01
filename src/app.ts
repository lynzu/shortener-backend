import { Hono } from 'hono';
import 'dotenv/config';

const app = new Hono();

app.get('/', c => {
  return c.json({ status: 'success', message: 'Hi from me' });
});

export default app;
