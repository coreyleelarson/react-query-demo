import history from 'connect-history-api-fallback';
import express from 'express';

const app = express();

app.get('/api', (request, response) => {
  response.json({ message: 'This worked' });
});

app.use(history());
app.use(express.static('build/client'));

export default app;
