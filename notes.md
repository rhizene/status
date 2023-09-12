## WebPack
https://webpack.js.org/guides/getting-started

## SASS
### with WebPack
Add `sass-loader` package and provide sass entry file in webpack config
### Component styles
Add a <component>.module.scss and import in the component

customDiv.module.scss:
```scss
.redText {
  color: red;
}
```

customDiv.js:
```jsx
import styles from './customDiv.module.scss'

function CustomDiv(){
  //...
  return (
    <div className={styles.redText}>this is red</div>
  )
}

```


## Takeaways:
- Load sass with [sass-loader for webpack](https://webpack.js.org/loaders/sass-loader/)
- Webpack 5+ : Adding a separate entry for the scss, and the properties `type: 'asset/resource'` `generator` in webpack's module.rules for scss [creates a separate file for the compiled stylesheet](https://webpack.js.org/guides/asset-modules/).
- [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) provides a devServer option in webpack.config for launching a dev server with the command `webpack serve`
  - `port` port to listen to, default 8080
  - `open` automatically opens project in a browser at specified port
  - `client > overlay` displays build errors as an overlay in the browser
- Use `@use` instead of sass' `@import` as per [doc warning](https://sass-lang.com/documentation/at-rules/use), not to be confused with css' own `@import` which remains the same (ex. importing remote fonts)
- For handling the js and scss files, webpack has the entry points `App.js` and `App.scss`. For the images, adding the line `require.context('path/to/asset/folder', true);` to the entry js file will process all the `type: 'asset/resource'` in that folder.