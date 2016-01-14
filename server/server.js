import express from 'express';
import httpProxy from 'http-proxy';
import bundle from './bundle';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './../app/store/configureStore';
import routes from './../app/routes';

const isDeveloping = process.env.NODE_ENV !== 'production';

const app = express();
const proxy = httpProxy.createProxyServer();

app.use(express.static(__dirname + '/../public'));

app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

if (isDeveloping) {
  bundle();

  app.all('/static/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(
        <Provider store={configureStore()} >
          <RoutingContext { ...props } />
        </Provider>
      );
      res.render('index', {markup});
    } else {
      res.sendStatus(404);
    }
  });
});

proxy.on('error', () => {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
