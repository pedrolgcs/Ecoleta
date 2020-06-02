import express, { json } from 'express';
import path from 'path';

import routes from './routes';

const app = express();

app.use(routes);
app.use(json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('🚀 server started on port 3333');
});
