## React
- https://react.dev/reference/react/
- [UseEffect](https://react.dev/reference/react/useEffect#useeffect) [migrates](https://react.dev/reference/react/Component#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function) React Component lifecycles


## SASS
### Component styles
Add a <component>.module.scss and import in the component

customDiv.module.scss:
```scss
#domId {
  color: blue;
}

.redText {
  color: red;
}
```

customDiv.js:
```jsx
import styles from './customDiv.module.scss'

function CustomDiv(){
  //...
  return (<div>
    <div id={styles.domId}>this is blue</div>
    <div className={styles.redText}>this is red</div>
  </div>)
}
```


## Webpack
path alias are in [webpack.config.js](./webpack.config.js)`.resolve.alias`. More on this [topic here](https://webpack.js.org/configuration/resolve/#resolvealias)
```js
module.exports = {
  resolve: {
    alias: {
      aliasName: path.resolve(__dirname, 'src/go/somewhere'),
    },
  },
};
```

## TODO
### npm run sass:static
- replace paths to asset folder similar to `%PUBLIC_URL%` in [index.html](./public/index.html)
- change to `npm run prebuild`
