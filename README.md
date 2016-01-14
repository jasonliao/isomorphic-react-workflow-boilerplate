# Isomorphic React Workflow Boilerplate

## Contains

- **React** handles our views
- **Redux** manages the data flow and state
- **React-Router** keeps UI in sync with the URL
- **Express** accepts app's request and render React's components
- **EJS** works with Express
- **Babel & Webpack** compile and bundle all our files
- **React-Hot-Loader** helps us developing faster and more convenience

## Setup

```bash
$ git clone git@github.com:L-movingon/isomorphic-react-workflow-boilerplate.git

$ cd isomorphic-react-workflow-boilerplate && npm install
```

## Usage

```bash
$ npm start
```

Hit [localhost:3000](http://localhost:3000) and it's time to create your own awesome app right now!

## Note

- Modify webpack-dev-server port

    You need to  modify **three files** if you want to modify `webpack-dev-server` port
    
    ```javascript
    // server/bundle.js line-30
    
    bundler.listen(8080, 'localhost', ...);
    ```
    
    ```javascript
    // server/server.js line-26
    
    target: 'http://localhost:8080'
    ```
    
    ```javascript
    // webpack.config.js line line-5
    
    'webpack-dev-server/client?http://localhost:8080',
    ```

- Import CSS files
    
    You can't import `.css` files in components because babel tries to parse the CSS files even though css and style loaders are defined in the `webpack.config.js`. Check this [issue](https://github.com/webpack/webpack/issues/1754) out 
    **or import `.css` files in `app/client.js` , that will be fine**

- API request

    You can use [isomorphic fetch](https://github.com/matthew-andrews/isomorphic-fetch) in [Async Actions](http://rackt.org/redux/docs/advanced/AsyncActions.html) to make your request and put all request handle code like `app.all('/api/', router)` **before** `app.get('*')`

## Bugs & Contribute

Welcome all [Issues](https://github.com/L-movingon/isomorphic-react-workflow-boilerplate/issues) and [Pull requests](https://github.com/L-movingon/isomorphic-react-workflow-boilerplate/pulls) :)

## App with This Boilerplate

[Educational CMS](https://github.com/DrakeLeung/educationalCMS) - [Drake Leung](https://github.com/DrakeLeung) (especially thanks to this guy)

## License

MIT
