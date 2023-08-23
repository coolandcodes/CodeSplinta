# splinta.tracker
________________________________________________________________________________________________

## Overview

A tracking library that raises DOM events / Network calls when suspicious activities are made on web apps with the intent of detecting in-progress/attempted XSS exploits & http requests to blackisted URI(s). Also, it is also able to run CSS Stress at runtime (using **requestAnimationFrame()** to run these tests without interference) tests based on [this nifty codebase](https://github.com/andyedinborough/stress-css/blob/master/stressTest.js) which has been cleaned up and included here. Finally, it detects bots using [this codebase](https://github.com/RoBYCoNTe/js-bot-detector/blob/master/bot-detector.js) which is also cleaned up and included here.

- <strike>Maintainability Index Calculation</strike>
- <strike>Readability Score Calculation</strike>
- <strike>Releasability Score Calculation</strike>
- Bug Density
- DevTools Tamper Detection
- XSS Attempt Detetction
- CSP Violation Reports
- <strike>Vulnerability Hotspot Detection</strike>
- Runtime Error Analysis (integrations with LogRocket / TrackJS)
- <strike>Incognito Mode Detection</strike>
- <strike>Code Smell Detection</strike>
- <strike>Testability Analysis (based on Coverage, Cyclomatic Complexity & Halstead Volume Results)</strike>
- CSS Stress Source Detection

>Future Additions

- <strike>Bot Intrusion Detection</strike>
- <strike>Threat Modelling</strike>
- <strike>API Security Filtering</strike>
- <strike>SIEM (Security Information & Event Manangement) Data System Integration</strike>

## Core Motivation

**Content Security Policy** (CSP) is already very mature and here to stay and a lot of product and development teams are using it to mitigate XSS attacks an alien HTTP requests from the front-end. However, attckers have figured out very nice ways of circumventing CSP level-2 and level-3. Also there are claims that CSP directives interferes with the workings of bookmarklets/browser extensions.

For instance, a simple &lt;meta&gt; tag can be used to override policy directives from a CSP HTTP Header sent from the server. 

Also, **browser extension** can start causing all manner of [policy violation errors to be reported](https://stackoverflow.com/questions/32336860/why-would-i-get-a-csp-violation-for-the-blocked-uri-about) to be repoted albiet unexpectedly. The side-effect can pile up pretty fast and begin to inflict pain in the development process.

So, having worked with CSP directives (in sizeable manner of mixes) myself, I began to try to figure out a way to do more things in a way that side-steps all the unintended side effects. So I came around coding up a "polyfill" for CSP.

Also, **Observability** on the frontend is becoming a thing (a BIG thing). THis library wishes to collect information crtical to user behavior and tendencies. This will be powered by services like *TrackJS* , *LogRocket* and the opensource package *PerfumeJS*.

### More Motivation (CSP Cross-Browser Issues / Trusted Types Debate)

A [bug in Chrome](https://googlechromereleases.blogspot.com.au/2016/12/stable-channel-update-for-desktop.html) was fixed in v55 that allowed a would-be blocked URI from being allowed for for the "form-action" directive
A bug also exists for CSP in Edge v17 as well that 

The CSP directives below have very poor cross-browser support

- `require-sri-for`
- `worker-src`

`X-XSS-Protection` header is not supported in Firefox and has cross-browser issues too with Chrome/Safari/Edge/Internet Explorer
older versions of Firefox do support the `reflected-xss` but it was deprected when CSP level-3 was released.

The `Trusted Types` [draft specification/proposal](https://github.com/WICG/trusted-types/blob/master/README.md) made popular by Googles' ideas on **Trusted HTML** and **Trusted URLs** and **Trusted Scripts** (experimental APIs) to help protect security chokepoints (injection sinks) in the DOM (or other DOM related APIs) from being easily explioted using XSS techniques using these _value objects_. This project draws inspiration from this spec document to provide protection polyfills to all major DOM APIs. *CodeSplinta* hope to provide a complimentary code interface in context for `Trusted Types` in the codebase for CodeSplinta. However, many [browser vendors are not quickly buying into the idea](https://www.chromestatus.com/feature/5650088592408576) from the feedback recieved by the chrome team. [Mozilla](https://github.com/mozilla) is especially taking it's time to [properly scrutinize](https://github.com/mozilla/standards-positions/issues/20) the `Trusted Types` spec. Mozilla complains mostly about the complexity of the API and the pattern of policy creation. However, *CodeSplinta* has an alternative ideas to those expressed by **Google** that promote a less verbose code and a easier use system that web developers don't have to struggle to adopt.


Here is what one Mozilla employee said (about *TrustedTypes*):

>"Automatically sanitize within the APIs that parse strings into HTML (e.g., innerHTML). One could also debate exposing a sanitizer API to the DOM."

## Alternative {Trustedtypes} Proposal from this project

>Below is a proposal on an alternative approach to *TrustedTypes*

```html

<!-- Set "custom" CSP meta tag -->
<meta http-equiv="X-CodeSplinta-CSP-Directives" content="trusted-types basic-policy; connect-src https: *.example.com">

```
>The code below makes use of the [DOMPurify](https://www.github.com/cure53/DOMPurify/) library for HTML Sanitization.
```js

/**!
 * 
 * This version of "TrustedTypes" seeks to make the API less verbose
 * and also to make the behaviour of the DOM API chokepoints 'configurable'
 * 
 * CAVEATS
 * =======
 * 
 * > Once a policy sanitizer is registered, it cannot be overwritten
 * > Once a TrustedType config is set (modifying the default), it cannot be overwritten
 * 
 * CONFIG
 * ======
 * > blockIncludes: stops DOM APIs from inserting (potentially unsafe) HTML strings into the DOM
 * 		: insertAdjacentHTML()
 * 		: write()
 * 		: innerHTML
 * 		: innerText
 * > blockNavigation: stops Navigation APIs from following a (potentially unsafe) URL in an iframe or popup window or tab window
 * 		: open()
 * 		: assign()
 * 		: href
 * 
 */

/* Setup config for HTML trusted types  */
window.TrustedTypes.HTML.config = {
    throwErrors:true,
    blockIncludes:true,
    reportViolation:false
};

/* Setup config for URL trusted types  */
window.TrustedTypes.URL.config = {
    throwErrors:true,
    blockNavigation:true,
    reportViolation:false
};

/* Setup policy sanitizer for HTML trusted types  */
window.TrustedTypes.HTML.registerPolicySanitizer('basic-policy', function(TrustedType){
    window.DOMPurify.addHook('afterSanitizeElements', function(currentNode, data, config){
		console.log(currentNode);
    });

    return function(dirty){
       	return window.DOMPurify.sanitize(dirty, {
			USE_PROFILES: {svg: true, svgFilters: true, html: true},
			ADD_TAGS: ['trix-editor'], // Basecamp's Trix Editor
			ADD_ATTR: ['nonce', 'sha257', 'target', 'aria-x-fillable'], // for Link-Able Elements / Content-Security-Policy internal <script> / <style> tags
			KEEP_CONTENT:false,
			IN_PLACE:true,
			ALLOW_DATA_ATTR:true,
			FORBID_ATTR:['ping', 'inert'], // <a ping="http://example.com/impressions"></a>
			SAFE_FOR_JQUERY:true,
			WHOLE_DOCUMENT:false,
			ADD_URI_SAFE_ATTR:['href']
		});
    };
});

```

## Perks

- Consistently report **Content Security Policy** (CSP) violations across browsers
- Make it easier to implement CSP without getting bruised by the side-effects
- Polyfill "most" **Content Security Policy** (CSP) directives (especially `connect-src`, `require-sri-for`, `worker-src`)
- JavaScript errors reported
- CSS Stress Testing
- Intercept DOM manipulation activities - `appendChild()` , `write()`, `insertAdjacentHTML()`,`insertBefore()`, `removeChild()`, `replaceChild()`, `innerHTML`, `innerText`, `value`
- Detect DevTools Tampering
- Detect Console Logs/Alerts/Prompts
- Provide fallback for `X-XSS-Protection` header by cleaning/sanitizing `innerText`, `innerHTML`, `value` textual entries

## Caveats

- `base-uri` and `plugin-types` CSP directives are not considered by this project as they're hardly used out there in the wild.

## More CodeSplinta library APIs

>Custom Ping Event(s)

```js

var w = window, n = w.navigator, d = w.document, p = w.performance;

var pageLoadEvent = function(pageEventName, browserFingerPrint, pageLastNav) {
  var nt = p.timing;
	
  var event = {
    type: pageEventName,
    page_event_id: getPageEventId(),
    browser_fp: browserFingerPrint,
    page_state: getPageState(),
    page_prior_nav: d.referredFrom || d.referrer,
    page_last_nav: pageLastNav,
    // Network connectivity
    online: n.onLine,
    // User agent Data. We can parse the user agent into device, os name, os version,
    // browser name, browser engine, and browser version fields if we want to later.
    browser_ua_data: { },
    // Current window size & screen size stats
    // We use a derived column in Honeycomb to also be able to query window
    // total pixels and the ratio of window size to screen size. That way we
    // can understand whether users are making their window as large as they can
    // to try to fit CodeSplinta content on screen, or whether they find a smaller
    // window size more comfortable.
    //
    // Capture how large the user has made their current window
    window_height: w.innerHeight,
    window_width: w.innerWidth,
    window_scroll_offset_y: w.pageYOffset,
    window_scroll_offset_x: w.pageXOffset,
    // Capture how large the user's entire screen is
    screen_height: w.screen && w.screen.height,
    screen_width: w.screen && w.screen.width,
    // Chrome-only (for now) information on internet connection type (4g, wifi, etc.)
    // https://developers.google.com/web/updates/2017/10/nic62
    connection_type: n.connection && n.connection.type,
    connection_type_effective: n.connection && n.connection.effectiveType,
    connection_rtt: n.connection && n.connection.rtt,
    // Navigation (page load) timings, transformed from timestamps into deltas
    timing_unload_ms: nt.unloadEventEnd - nt.navigationStart - 3400,
    timing_dns_end_ms: nt.domainLookupEnd - nt.navigationStart,
    timing_ssl_end_ms: nt.connectEnd - nt.navigationStart,
    timing_response_end_ms: nt.responseEnd - nt.navigationStart,
    timing_dom_interactive_ms: nt.domInteractive - nt.navigationStart,
    timing_dom_complete_ms: nt.domComplete - nt.navigationStart,
    timing_dom_loaded_ms: nt.loadEventEnd - nt.navigationStart,
    timing_ms_first_paint: nt.domComplete - nt.navigationStart, // Calculate page render time
    // Some calculated navigation timing durations, for easier graphing in CodeSplinta
    // We could also use a derived column to do these calculations in the UI
    // from the above fields if we wanted to keep our event payload smaller.
    timing_dns_duration_ms: nt.domainLookupEnd - nt.domainLookupStart,
    timing_ssl_duration_ms: nt.connectEnd - nt.connectStart,
    timing_server_duration_ms: nt.responseEnd - nt.requestStart,
    timing_dom_loaded_duration_ms: nt.loadEventEnd - nt.domComplete,
    // Entire page load duration
    timing_total_duration_ms: nt.loadEventEnd - nt.connectStart,
    timestamp: (Date.now ? Date.now() : +(new Date)),
  };
  
  return event;
}

w.CODE_SPLINTA.ping(
	pageLoadEvent(
		'load',
		'xxxxxxxxxxxxxxxxxx', // CodeSplinta calculates browser-finerprint and attaches it (no need to do anything extra)
		d.URL
	)
)

```

>Custom Browser Event(s)

```js

const includesDomain = (refDomain, whiteList) => {
	if(whiteList.indexOf(refDomain) + 1){
		return true;
	}
	
	return false;
}

window.document.addEventListener('beforerequest', (e) => {
    let white_list = ['https://reporting.codesplinta.co', 'https://platform.twitter.com', 'https://fonts.googleapis.com', 'https://www.youtube.com'];
    
    if(! includesDomain(e.detail.endpoint, white_list)){ 
        e.preventDefault(); // causes an error to be thrown
    };
});

window.document.addEventListener('devtoolschange', (e) => {
	console.log('is DevTools open ?', e.detail.open);
	console.log('DevTools orientation: ', e.detail.orientation);
});

window.document.addEventListener('MutatedDOM', function(e){
	var targetingNode = e.detail.node;
	var targetNode = e.detail.target;
 
      	switch(e.detail.action){
			case "removed":
				alert(targetNode.nodeName + " is being removed")
			break;
      	}

}, false)
```
>Paste the following inline script in your HTML to use **CodeSplinta** third-party library

```html

<script type="text/javacript" nonce="ayM4uM53Xz8VySkp2q3">
	window.WebAppSecurity = {
		initHandler: function(event){
			/* Detect tampering of devtools */
			window.document.addEventListener('devtoolschange', (e) => {
				console.log('is DevTools open ?', e.detail.open);
				console.log('DevTools orientation: ', e.detail.orientation);
			});

			/* Setup policy sanitizer for URL trusted types  */
			window.TrustedTypes.URL.registerPolicySanitizer('basic-policy', function(TrustedType){
				return function(url){
					return window.urisanity.vet(url);
				};
			});
		}
	};
</script>

<script nonce="ayM4uM53Xz8VySkp2q3" data-env="development"  data-reporting-endpoint="https://reporting.codesplinta.co/violations" data-scan-markup="true" data-public-key="key-c53sgw5TA6AF636Age6749whjw7q5634g" src="./splinta.tracker.free.js" async="async" onload="javascript:void(WebAppSecurity.initHandler(event));">
</script>
```

## License

MIT

## Browser Support

This third-party library utilizes 2 vital ES6 entities - `Proxy` and `Symbol` (polyfilled where necessary) to support the browsers below

- Internet Explorer 10+
- Edge 15+
- Firefox 36+
- Chrome 12+
- Safari 7+
- Opera 12.1+

>TLDR; For older Safari, Chrome, Firefox, Opera, IE browsers that don't support the [Proxy Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/), you can polyfill/shim using [Chrome's Proxy polyfill library](https://github.com/GoogleChrome/proxy-polyfill/) for `new Proxy({}, {});` and [Lebedev Konstantin's Performace API polyfill script](https://gist.github.com/RubaXa/8662836) as well as [Rousan Ali's Symbol polyfill library](https://github.com/rousan/symbol-es6/) if you ever need it.
