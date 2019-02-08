# splinta.tracker

________________________________________________________________________________________________

## Overview

A tracking library that raises network events when suspicious activity are made on web apps with the intent of detecting in-progress or attempted XSS exploit.

## Motivation

**Content Security Policy** (CSP) is already very mature and here to stay and a lot of product and development teams are using it to mitigate XSS attacks an alien HTTP requests from the front-end. However, attckers have figured out very nice ways of circumventing CSP.
For instance, a simple &lt;meta&gt; tag can be used to override policy directives from a CSP HTTP Header sent from the server. Also,
**browser extension** can start causing all manner of [policy violation errors to be reported](https://stackoverflow.com/questions/32336860/why-would-i-get-a-csp-violation-for-the-blocked-uri-about) to be repoted albiet unexpectedly. The side-effect can pile up pretty fast and begin to inflict pain in the development process.

So, having worked with CSP directives (in sizeable manner of mixes) myself, i began to try to figure out a way to do more things in a way that side-steps all the unintended side effects.

## Perks

- Consistently report **Content Security Policy** (CSP) violations
- JavaScript errors reported
- Intercept DOM manipulation activities - `appendChild()` , `removeChild()`, `replaceChild()`, `innerHTML`, `innerText`, `value`
- Detect DevTools tampering
- Clean/Sanitize `innerHTML`, `value` textual entries

This library makes use of [DOMPurify](https://www.github.com/cure53/DOMPurify/) internally to clean out calls to `innerHTML`, `innerText`, `appendChild()`, `replaceChild()`, `removeChild()`, `insertBefore()`, `value`

## Getting Started

```js

const includesDomain(refDomain, whiteList){
	if(whiteList.indexOf(refDomain) + 1){
		return true;
	}
	
	return false;
}

document.addEventListener('beforerequest', (e) => {
    let white_list = ['https://reporting.codesplinta.co', 'https://platform.twitter.com', 'https://fonts.googleapis.com', 'https://www.youtube.com'];
    
    if(! includesDomain(e.detail.endpoint, white_list)){ 
        e.preventDefault(); // causes an error to be thrown
    };
});

document.addEventListener('devtoolschange', (e) => {
		console.log('is DevTools open ?', e.detail.open);
		console.log('DevTools orientation: ', e.detail.orientation);
});
```

## License

MIT

## Browser Support

This library ustilizes 2 vital ES6 entities - `Proxy` and `Symbol`

- Internet Explorer 9+
- Edge 16+
- Firefox 14+
- Chrome 12+
- Safari 7+
- Opera 15+

> TLDR; For older Safari, Chrome, Firefox, Opera, IE browsers that don't support the [Proxy Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/), you can polyfill/shim using [Chrome's Proxy polyfill library](https://github.com/GoogleChrome/proxy-polyfill/) for `new Proxy({}, {});` and [Lebedev Konstantin's Performace API polyfill script](https://gist.github.com/RubaXa/8662836) as well as [Rousan Ali's Symbol polyfill library](https://github.com/rousan/symbol-es6/) if you ever need it.
