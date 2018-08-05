# Laravel Echo UMD

Laravel Echo as a UMD package. Needed this for use in an ES5 project.

## Installing

```
npm i --save laravel-echo-umd
```
## Usage

Include the `node_modules/laravel-echo-umd/dist/echo.js` file in your app however you want, and `Echo` will be available globally.

You can use it like

```javascript
window.echo = new Echo(config);

// later on...
echo
  .channel('orders')
  .listen('OrderShipped', function (e) {
    console.log(e.order.name);
  });
```
