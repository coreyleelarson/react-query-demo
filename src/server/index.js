import bodyParser from 'body-parser';
import history from 'connect-history-api-fallback';
import express from 'express';
import api from './api';

const app = express();
app.use(bodyParser.json());

app.use('/api', api);

app.use(history());
app.use(express.static('build/client'));

export default app;
