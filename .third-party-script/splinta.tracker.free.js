/*!
 * Splinta.tracker.js
 * Copyright (c) 2018 - 2021 Oparand - CoolCodes
 *
 * @author: Ifeora Okechukwu
 * @vendor: CoolCodes
 * @version: 0.1.6
 */

 /**
  * See: https://github.com/taylorhakes/promise-polyfill/
  */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(global, (global || {}).document) :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory(global, global.document));
}(this, (function (w, d) { 'use strict';
			  
!function(V){
	function j(e){return{}.toString.call(e).toLowerCase()}function q(e,i){return{}.hasOwnProperty.call(e,i)}(function(i,a,t){var n=!1,e=!0,s=i.document,o=s.documentElement,r=s.addEventListener?"addEventListener":"attachEvent",c=s.addEventListener?"removeEventListener":"detachEvent",d=s.addEventListener?"":"on",l=function(e){"readystatechange"==e.type&&"complete"!=s.readyState||(("load"==e.type?i:s)[c](d+e.type,l,!1),!n&&(n=!0)&&a.call(i,e.type||e,t))},b=function(){try{o.doScroll("left")}catch(e){return void setTimeout(b,50)}l("poll")};if("complete"==s.readyState)a.call(i,"lazy",t);else{if(s.createEventObject&&o.doScroll){try{e=!i.frameElement}catch(e){}e&&b()}s[r](d+"DOMContentLoaded",l,!1),s[r](d+"readystatechange",l,!1),i[r](d+"load",l,!1)}}).apply(null,[window,function(){var e,i,a,t,n=this,s=n.document,o=s.documentElement,r="documentMode",c=n.clientInformation||{},d=n.navigator,l=(c.productSub||d.productSub||n.opera&&n.opera.buildNumber(),c.userAgent||d.userAgent),b=(d.appName,c.appVersion||d.appVersion),p=!1,w=!1,u=!1,g=!1,m=!1,v=l.toLowerCase(),k=(n.chrome||"onafterprint"in n||s.readyState)&&"clientInformation"in n,h="orientation"in n&&!("ondeviceorientation"in n),f=/(?:chrome[^ ]+:)? (edg(?:[ea]|ios)?)\/(\d+(\.\d+)?)/.exec(v)||/(webkit)[ \/]([\w.]+)/.exec(v)||/; (flock)\/(\d+(\.\d+)?)/.exec(v)||/; (vivaldi)\/(\d+(\.\d+)?)/.exec(v)||/(opera|opr|opios)(?:.*version)?[ \/]([\w.]+)/.exec(v)||/(?:(msie) |rv)([\w.]+)/.exec(v)||!/compatible/.test(v)&&!/seamonkey/.test(v)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(v)||[],x={isLinux:function(){return 0==d.platform.indexOf("Linux")},isMac:function(){return 0==d.platform.indexOf("Mac")},isSun:function(){return 0==d.platform.indexOf("Sun")},isWinPC:function(){return 0==d.platform.indexOf("Win32")},isWinMobile:function(e){return 0==d.platform.indexOf("Win")&&(0<l.indexOf("Windows Phone")||0<l.indexOf("IEMobile")||0<l.indexOf("WPDesktop"))},isOperaMini:function(e){return"[object operamini]"==j(n.operamini)&&!!(e.className+=" operamini")||0<l.indexOf("Opera Mini")||e&&"OMiniFold"in e.style&&!!(e.className+=" operamini")},isOperaMobile:function(e){return typeof n.operamini===V&&(x.isAndroid(e)||x.isWinMobile(e))&&("Opera Software ASA"===d.vendor||"function"==typeof d.share)&&k&&!(!e||!(e.className+=" operamobile"))},isIOS:function(e){return!x.isWinMobile(e)&&!!d.platform&&!n.MSStream&&/iPad|iPhone|iPod/.test(d.platform)||0<l.indexOf("iPhone;")||0<l.indexOf("iPad;")||0<l.indexOf("iPod;")||0<l.search(/iPhone OS 3_(1|2)_2/)},isAndroid:function(e){return!x.isWinMobile(e)&&this.isLinux()&&0<l.search(/\; Andriod(?:[\d]+\.[\d]+)/)&&-1==l.search(/like/gi)},isBB:function(e){return"blackberry"in n&&-1<l.search(/BlackBerry|\bBB\d+/)},isWebOS:function(e){return"PalmSystem"in n&&-1<l.search(/(Web|HPW)OS/)}},y=s.body||s.getElementsByTagName("body")[0],M=""===d.vendor&&d.oscpu&&!q(d,"oscpu")&&"number"==typeof n.mozInnerScreenX&&("registerContentHandler"in d||"registerProtocolHandler"in d)&&(/Gecko/g.test(l)||void 0!==n.InstallTrigger),O=(/Presto/g.test(l)||"Opera"===d.appName)&&"[object opera]"==j(n.opera)&&"navigationMode"in n.history,A=k&&(s.createEventObject||"webdriver"in d)&&(/Trident/g.test(l)||"string"==typeof d.cpuClass)&&!!n.toStaticHTML,N=k&&("function"==typeof function(e){try{var i=new Blob(["xxxx"],{type:"text/plain"});return e in i&&i[e]}catch(e){return!1}}("msDetachStream")||"function"==typeof n.RTCIceGatherer)&&("msCredentials"in n||"msTemplatePrinter"in n||!!n.StyleMedia)&&""===d.vendor&&"oncompassneedscalibration"in n&&!A,W=(p=k&&!!n.Intl&&!!n.CSS&&(!!d.usb&&"function"==typeof d.usb.getDevices||"function"==typeof n.Credential))&&!!n.Intl.v8BreakIterator&&function(){try{return"http://lab.example.com/"===new window.PasswordCredential({name:"-",iconURL:"http://lab.example.com",password:"-",id:"-"}).iconURL}catch(e){return!1}}();n.webpage={engine:{},old:{},device:{screen:{},os:"",browser_build:""}};var S=n.innerHeight||o.clientHeight||y.clientHeight,I=n.innerWidth||o.clientWidth||y.clientWidth,P=((I/S).toPrecision(2),(n.screen.width/n.screen.height).toPrecision(4)),T=n.screen.colorDepth||n.screen.pixelDepth;n.webpage.device.screen.color_depth=T,e=A||M?"undefined"===n.devicePixelRatio||void 0!==n.getInterface||A?n.devicePixelRatio||n.screen.deviceXDPI/n.screen.logicalXDPI:parseFloat(n.screen.availWidth/I):n.devicePixelRatio,n.pixelDensity=e;var C={isTouchCapable:function(){return"ontouchstart"in n||10===(d.maxTouchPoints||d.msMaxTouchPoints||1)||n.operamini&&n.operamini.features.touch||"onmsgesturechange"in n&&!q(n,"onmsgesturechange")},onDesktop:function(){return~~e<=1&&1024<=n.screen.width&&(n.screen.width<=1920||!this.onTV())&&!this.onTablet(!0)},onTV:function(){return!!this.isTouchCapable()&&(1.5==~~e&&1920<n.screen.width)},onTablet:function(e){return!(!e&&!this.isTouchCapable())&&((l.match(/RIM/i)||l.match(/ipad;/i)||l.match(/nexus (7|10)/i)||l.match(/KFAPWI/i)||l.match(/tablet/i))&&!this.onMobile())},onMobile:function(){return!!this.isTouchCapable()&&(l.match(/[^-]mobi|mobile/i)&&n.screen.width<768&&n.screen.width/e<768)}},L=function(){return 2<=e};switch(P){case"1.706":case"1.708":case"1.707":case"0.5859":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&600<=n.screen.width?(y.className+=0==P.search(/^(?:1\.70(?:[6-8]))$/)?" 1024x600":" 600x1024",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop")):(x.isWinMobile(y)||x.isBB(y)||x.isAndroid(y)||x.isIOS(y)||x.isOperaMini(y)||x.isOperaMobile(y))&&(y.className+=h?90==Math.abs(n.orientation||0)?" 1024x600":" 600x1024":"0.5859"==P?" 600x1024":" 1024x600",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onMobile()&&y.setAttribute("aria-view-mode","mobile"));break;case"0.5634":case"0.5625":case"0.5622":(x.isWinMobile(y)||x.isBB(y)||x.isAndroid(y)||x.isIOS(y)||x.isOperaMini(y)||x.isOperaMobile(y))&&(C.onMobile()&&y.setAttribute("aria-view-mode","mobile"),C.onTablet()&&y.setAttribute("aria-view-mode","tablet"));break;case"0.5993":case"1.669":(x.isWinMobile(y)||x.isBB(y)||x.isAndroid(y)||x.isIOS(y)||x.isOperaMini(y)||x.isOperaMobile(y))&&(y.className+=h?90==Math.abs(n.orientation||0)?" 534x320":" 320x534":"1.669"==P?" 534x320":" 320x534",C.onMobile()&&y.setAttribute("aria-view-mode","mobile"));break;case"1.500":case"0.6667":(x.isWinMobile(y)||x.isBB(y)||x.isAndroid(y)||x.isIOS(y)||x.isOperaMini(y)||x.isOperaMobile(y))&&(y.className+=h?90==Math.abs(n.orientation||0)?" 480x320":" 320x480":"0.6667"==P?" 320x480":" 480x320",C.onMobile()&&y.setAttribute("aria-view-mode","mobile"));break;case"1.333":case"0.7500":case"0.7496":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&768<=n.screen.width?(y.className+="1.333"==P?n.screen.width<=1024?" 1024x768":" 1152x864":n.screen.width<=768?" 768x1024":" 864x1152",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop")):(x.isWinMobile(y)||x.isBB(y)||x.isAndroid(y)||x.isIOS(y)||x.isOperaMini(y)||x.isOperaMobile(y))&&(C.onTablet()&&800<=n.screen.width?(y.className+=h?90==Math.abs(n.orientation)?" 800x600":" 600x800":"1.333"==P?" 800x600":" 600x800",y.setAttribute("aria-view-mode","tablet")):C.onMobile()&&360<=n.screen.width&&(y.className+=h?90==Math.abs(n.orientation||0)?" 480x360 640x480":" 360x480 480x640":"1.333"==P?" 480x360 640x480":" 360x480 480x640",y.setAttribute("aria-view-mode","mobile")));break;case"1.250":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&768<=n.screen.width?(y.className+="1.250"==P?" 1280x1024":" 1024x1280",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop")):(x.isWinMobile(y)||x.isBB(y)||x.isAndriod(y)||x.isOperaMobile(y))&&(C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onMobile()&&y.setAttribute("aria-view-mode","mobile"));break;case"1.779":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&768<=n.screen.width&&(y.className+=" 1366x768",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop"));break;case"1.778":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&768<=n.screen.width?(y.className+=1600!==n.screen.availWidth?" 1920x1080":"1600x900",C.onDesktop()&&y.setAttribute("aria-view-mode","desktop"),C.onTV()&&y.setAttribute("aria-view-mode","tv")):h&&(y.className+=90==Math.abs(n.orientation)?" 640x360":" 1080x1920");break;case"0.6000":case"1.667":!(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&n.screen.width<=768&&(y.className+=" 480x800",C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop"));break;case"1.600":(x.isWinPC(y)||x.isMac(y)||x.isLinux(y))&&768<=n.screen.width&&(1440<n.screen.width&&n.screen.width<=1680&&(y.className+=" 1680x1050"),1280<n.screen.width&&n.screen.width<=1440&&(y.className+=" 1440x900"),n.screen.width<=1280&&(y.className+=" 1280x800"),C.onTablet()&&y.setAttribute("aria-view-mode","tablet"),C.onDesktop()&&y.setAttribute("aria-view-mode","desktop"));break;case"1.805":(x.isWinPC()||x.isMac()||x.isLinux())&&768<=n.screen.width&&(y.className+=" 1386x768",C.onDesktop()&&y.setAttribute("aria-view-mode","desktop"));break;default:C.onDesktop()?(y.setAttribute("aria-view-mode","desktop"),n.webpage.device.type="desktop"):C.onTablet()?(y.setAttribute("aria-view-mode","tablet"),n.webpage.device.type="tablet"):C.onMobile()?(y.setAttribute("aria-view-mode","mobile"),n.webpage.device.type="mobile"):y.setAttribute("aria-view-mode","unknown")}y.setAttribute("aria-last-detected",document.lastModified),y.setAttribute("aria-touch-capable",String(C.isTouchCapable())),n.webpage.device.touch_capable=C.isTouchCapable(),L()?(y.setAttribute("aria-screen-view","retina"),n.webpage.device.screen.type="retina"):(y.setAttribute("aria-screen-view","normal"),n.webpage.device.screen.type="normal"),n.webpage.device.zoom_level=(100*n.pixelDensity).toFixed(),s[r]||O||(w=k&&(!1===s.webkitHidden||s.webkitHidden===V)&&(!!n.chrome.webstore||!!n.chrome.runtime||!!n.crypto)&&/(Chrome|Crios|Crmo|CrOS)/g.test(l)&&-1!==d.vendor.indexOf("Google Inc."),u=-1!==d.vendor.indexOf("Apple Computer, Inc.")&&(/constructor/i.test(n.HTMLElement)||"[object SafariRemoteNotification]"===(!n.safari||void 0!==n.safari&&n.safari.pushNotification).toString())&&("function"==typeof d.share||!d.presentation),g=w&&p&&!!d.presentation&&"function"==typeof d.share&&"function"==typeof d.canShare,m=-1!==d.vendor.indexOf("KDE")&&/Konqueror/g.test(l)&&"KhtmlUserInput"in y.style,-1!=d.vendor.indexOf("Amazon")&&/Silk/gi.test(l),/YAbrowser/gi.test(l));var _,B,E,D,z,F;n.navigator.isSWCapable=function(){return u&&"function"==typeof d.share&&"function"==typeof n.IntersectionObserver&&"function IntersectionObserver() { [native code] }"===String(n.IntersectionObserver)||p&&!O&&!!n.opr&&!!n.opr.addons&&!!n.CSS&&"function"==typeof n.CSS.supports&&"[object CacheStorage]"===String(n.caches)||(g||N)&&"function"==typeof n.PushManager&&"function PushManager() { [native code] }"===String(n.PushManager)||(e=s.createElement("input"),w&&W&&"function"==typeof e.reportValidity&&"function reportValidity() { [native code] }"===String(e.reportValidity))||M&&void 0!==s.charset&&"function"==typeof n.PushManager&&"function PushManager() {\n    [native code]\n}"===String(n.PushManager)||!1;var e},a=f[1]||"unknown",(t=parseFloat(f[2]||"0"))<=9&&"msie"==a&&A&&(y.className+=" oldIE",n.webpage.old.ie=!0),t<=10.6&&"opera"==a&&O&&(y.className+=" oldOpera",n.webpage.old.opera=!0),t<=35&&"mozilla"==a&&M&&(l.match(/firefox/i)&&(y.className+=" oldMoz",n.webpage.old.firefox=!0),l.match(/flock/i)&&(y.className+=" oldFlock",n.webpage.old.flock=!0)),t<=13&&"edge"==a&&N&&(y.className+=" oldEdge",n.webpage.old.edge=!0),t<=40&&"webkit"==a&&!p&&(y.className+=w?" oldChrome":u?" oldSafari":"",u?n.webpage.old.safari=!0:w&&(n.webpage.old.chrome=!0),l.match(/flock/i)&&4<=t&&(y.className+=" oldFlock",n.webpage.old.flock=!0)),x.isIOS(y)?(y.setAttribute("aria-os-data","iOS"),n.webpage.device.os="ios"):x.isAndroid(y)?(y.setAttribute("aria-os-data","Linux Andriod"),n.webpage.device.os="linux andriod"):x.isWinPC(y)?(y.setAttribute("aria-os-data","Windows"),n.webpage.device.os="windows"):x.isBB(y)?(y.setAttribute("aria-os-data","Blackberry"),n.webpage.device.os="blackberry"):x.isWebOS(y)?(y.setAttribute("aria-os-data","Web OS"),n.webpage.device.os="webos"):x.isOperaMini(y)?(y.setAttribute("aria-user-agent","Opera Mini"),n.webpage.device.opera_mini=!0):x.isOperaMobile(y)?(y.setAttribute("aria-user-agent","Opera Mobile"),n.webpage.device.opera_mobile=!0):x.isMac(y)?(y.setAttribute("aria-os-data","Macintosh"),n.webpage.device.os="macintosh"):x.isSun(y)?(y.setAttribute("aria-os-data","Sun"),n.webpage.device.os="sun"):x.isLinux(y)?(y.setAttribute("aria-os-data","Linux"),n.webpage.device.os="linux"):(y.setAttribute("aria-os-data","unknown"),n.webpage.device.os="unknown"),"BackCompat"==s.compatMode?(y.setAttribute("aria-setup-mode","quirks"),y.className+=" quirks",n.webpage.quirks=!0):(y.setAttribute("aria-setup-mode","standards"),y.className+=" standards",n.webpage.standards=!0);try{i=y.getAttribute("aria-view-mode"),n.webpage.device.type=i}catch(e){}if(A){var H=parseInt(l.match(/MSIE\s(([0-9]+)[\.0-9]*)/)[2]),R=((_=new Function("/*@cc_on return @_jscript_version; @*/")())===V&&(_=11),_),X=H===R?" IE"+H:R;if("number"!=typeof X)return void(X=" UA-unknown");switch(X=" IE"+(R=parseInt(X)),R){case 7:window.webpage.engine.version="3.0";break;case 8:window.webpage.engine.version="4.0";break;case 9:case 10:window.webpage.engine.version="5.0";break;case 11:window.webpage.engine.version="7.0"}n.webpage.device.zoom_level=10===R||11===R?(s.documentElement.offsetHeight/n.innerHeight*100+.1).toFixed():(s.frames.screen.deviceXDPI/s.frames.screen.systemXDPI*100+.4999).toFixed(),y.className+=" yes-ms",s[r]&&s[r]===R&&("msInterpolationMode"in y.style||"msLinearGradient"in y.style||n.MSInputMethodContext)?-1==y.className.indexOf(X.substring(1))&&(y.className+=X+" forward-ie"):y.className+=X,y.className+=" trident",n.webpage.engine.trident=!0}else if(N)"edge"==a&&"msWriteProfilerMark"in n&&"onwebkitfullscreenchange"in s&&(y.className+="yes-edgehtml microsoftedge like-gecko like-khtml edgehtml legacy-edge",n.webpage.engine.edgehtml=!0,n.webpage.device.browser_build="edgehtml-edge");else if(g)"edg"!=a&&"edga"!=a&&"edgios"!=a||(y.className+="yes-blink microsoftedge like-gecko like-khtml blink chromium-edge",n.webpage.engine.blink=!0,n.webpage.device.browser_build="blink-edge");else if(M)-1<v.search(/firefox|iceweasel/)?(-1==y.className.indexOf("yes-moz")&&(y.className+=" yes-moz firefox gecko",n.webpage.device.browser_build="gecko-firefox"),"rv"==a&&(C.onTablet()||C.onMobile())&&(y.className+=" firefoxos")):-1<v.search(/seamonkey/)?y.className+=" yes-moz seamonkey gecko":-1<v.search(/flock/)&&(y.className+=" yes-moz flock gecko"),n.webpage.engine.gecko=!0;else if(m)-1<y.className.indexOf("yes-khtml")&&(y.className+=" yes-khtml konqueror khtml like-gecko"),n.webpage.engine.khtml=!0;else if(w&&"function"==typeof n.webkitURL){switch(t){case 1:n.webpage.engine.version="528.00";break;case 2:n.webpage.engine.version="530.00";break;case 3:n.webpage.engine.version="532.00";break;case 4:case 4.1:n.webpage.engine.version="532.50";break;case 5:n.webpage.engine.version="533.00";break;case 6:n.webpage.engine.version="534.30";break;case 7:n.webpage.engine.version="534.70";break;case 8:n.webpage.engine.version="534.10";break;case 9:n.webpage.engine.version="534.13";break;case 10:n.webpage.engine.version="534.16";break;case 11:n.webpage.engine.version="534.24"}W?(-1==y.className.indexOf("yes-blink")&&(y.className+=" yes-blink chrome"),l.match(/vivaldi\/(?:[\d]{1,}\.[\d]{1,})/)&&(y.className+=" yes-blink vivaldi"),-1<l.indexOf("nokia_xl")&&(y.className+=" nokia_xl"),y.className+=" blink like-gecko like-khtml",n.webpage.engine.blink=!0,n.webpage.device.browser_build="blink-chrome"):(-1==y.className.indexOf("yes-webkit")&&(l.match(/ubrowser\/(?:[\d]{1,}\.[\d]{1,})/)&&(y.className+=" yes-webkit ucbrowser"),-1<l.indexOf("nokia_xl")?y.className+=" nokia_xl":y.className+=" yes-webkit chrome"),y.className+=" webkit like-gecko like-khtml",n.webpage.engine.webkit=!0,n.webpage.device.browser_build="webkit-chrome"),n.webpage.device.zoom_level=(n.outerWidth/n.innerWidth*100).toFixed()}else if(-1!=l.indexOf("AppleWebkit")||u)-1==y.className.indexOf("yes-webkit")&&(y.className+=" yes-webkit safari like-gecko webkit like-khtml"),n.webpage.engine.webkit=!0,n.webpage.device.browser_build="webkit-safari",n.webpage.device.zoom_level=(s.documentElement.clientWidth/n.innerWidth*100).toFixed();else if(("supportsCSS"in n||"attachEvent"in s)&&O&&"opera"==a){switch(parseInt(n.opera.version())){case 7:case 8:window.webpage.engine.version="1.0";break;case 9:window.webpage.engine.version="2.0";break;case 10:window.webpage.engine.version="2.2";break;case 11:window.webpage.engine.version="2.7";break;case 12:window.webpage.engine.version="2.9";break;case 13:window.webpage.engine.version="2.13";break;case 14:window.webpage.engine.version="2.15"}-1==y.className.indexOf("yes-opera")&&(y.className+=" yes-opera opera presto"),n.webpage.engine.presto=!0,n.webpage.device.zoom_level=(n.top.outerWidth/n.top.innerWidth*100).toFixed()}else if(n.isOpera15OrLater()&&"opr"==a&&"Google Inc."===d.vendor){switch(-1==y.className.indexOf("yes-blink")&&(y.className+=" yes-blink opera blink like-gecko like-khtml"),n.webpage.engine.blink=!0,n.webpage.engine.x_version="537.36",parseInt(t)){case 15:n.webpage.engine.version="28";break;case 16:n.webpage.engine.version="29";break;case 17:n.webpage.engine.version="30";break;case 18:n.webpage.engine.version="31";break;case 19:n.webpage.engine.version="32";break;case 20:n.webpage.engine.version="33";break;case 21:n.webpage.engine.version="34";break;case 22:n.webpage.engine.version="35";break;case 23:n.webpage.engine.version="36";break;case 24:n.webpage.engine.version="37";break;case 25:n.webpage.engine.version="38"}n.webpage.device.browser_build="blink-opera"}B=n.webpage.engine,E=b,window.navigator.oscpu===V&&(F=-1,D=E.indexOf(" ")+1,z=[""],B.webkit||B.blink||B.edgehtml?(F=E.indexOf(")"),window.navigator.oscpu=E.substring(D+1,F).replace("(","").trim()):B.trident?(z=E.split(";"),window.navigator.oscpu=z[3]):B.gecko||(z=E.split(";"),window.navigator.oscpu=(z[0]||"").substring(D))),window.navigator.language===V&&(window.navigator.language=window.navigator.systemLanguage||window.navigator.userLanguage||window.navigator.browserLanguage),n.navigator.ostitle={"Windows NT 5.1":"Windows XP; Intel - 32 bits","Windows NT 6.1":"Windows 7; Intel - 32 bits","Windows NT 6.1; Win64; x64":"Windows 7; Intel - 64 bits","Windows NT 6.2":"Windows 8; Intel - 32 bits","Windows NT 6.2; Win64; x64":"Windows 8; Intel - 64 bits","Windows NT 10.0":"Windows 10 Pro; Intel - 32 bits","Windows NT 10.0; Win64; x64":"Windows 10 Pro; Intel - 64 bits","Macintosh; Intel Mac OS X 10_13_2":"Macintosh OS X 10; Intel - 64 bits","Linux; Andriod 6.0; Nexus 5 Build/MRA58N":"Linux Android Oreo {6.0}; ARM - 64 bits","Linux; Andriod 4.1.2; Nokia_XL Build/JZO54K":"Linux Android Jelly Bean {4.1}; ARM - 32 bits"}[n.navigator.oscpu]||""},{}])
}();
		      
/**
 * @this {Document.domain}
 * lock API access
 */

// IE 8, very well supported :)
/*Object.defineProperty(d, 'domainMutateCount', {value: 1, writable:false});
Object.defineProperty(d, 'domain', {configurable:false,get:undefined,set:function(domainText){
	if(this.domainMutateCount === 0) this.domain = domainText;
}});*/

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && x.length);
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

if (!('Promise' in globalNS)) {
  globalNS['Promise'] = Promise;
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = finallyConstructor;
}

})));

/*
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function(){function l(){function n(a){return a?"object"===typeof a||"function"===typeof a:!1}var p=null;var g=function(a,b){function f(){}if(!n(a)||!n(b))throw new TypeError("Cannot create proxy with a non-object as target or handler");p=function(){f=function(a){throw new TypeError("Cannot perform '"+a+"' on a proxy that has been revoked");}};var e=b;b={get:null,set:null,apply:null,construct:null};for(var k in e){if(!(k in b))throw new TypeError("Proxy polyfill does not support trap '"+k+"'");b[k]=e[k]}"function"===
typeof e&&(b.apply=e.apply.bind(e));var c=this,g=!1,q=!1;"function"===typeof a?(c=function(){var h=this&&this.constructor===c,d=Array.prototype.slice.call(arguments);f(h?"construct":"apply");return h&&b.construct?b.construct.call(this,a,d):!h&&b.apply?b.apply(a,this,d):h?(d.unshift(a),new (a.bind.apply(a,d))):a.apply(this,d)},g=!0):a instanceof Array&&(c=[],q=!0);var r=b.get?function(a){f("get");return b.get(this,a,c)}:function(a){f("get");return this[a]},v=b.set?function(a,d){f("set");b.set(this,
a,d,c)}:function(a,b){f("set");this[a]=b},t={};Object.getOwnPropertyNames(a).forEach(function(b){if(!((g||q)&&b in c)){var d={enumerable:!!Object.getOwnPropertyDescriptor(a,b).enumerable,get:r.bind(a,b),set:v.bind(a,b)};Object.defineProperty(c,b,d);t[b]=!0}});e=!0;Object.setPrototypeOf?Object.setPrototypeOf(c,Object.getPrototypeOf(a)):c.__proto__?c.__proto__=a.__proto__:e=!1;if(b.get||!e)for(var m in a)t[m]||Object.defineProperty(c,m,{get:r.bind(a,m)});Object.seal(a);Object.seal(c);return c};g.revocable=
function(a,b){return{proxy:new g(a,b),revoke:p}};return g};var u="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!==typeof navigator&&"ReactNative"===navigator.product?global:self;u.Proxy||(u.Proxy=l(),u.Proxy.revocable=u.Proxy.revocable);})()


/*
* Fingerprintjs2 2.1.0 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
(function (name, context, definition) {
  'use strict'
  context[name] = definition() 
})('Fingerprint2', this, function () {
  'use strict'

  /// MurmurHash3 related functions

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Add = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] + n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] + n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] + n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += m[0] + n[0]
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Multiply = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
    var o = [0, 0, 0, 0]
    o[3] += m[3] * n[3]
    o[2] += o[3] >>> 16
    o[3] &= 0xffff
    o[2] += m[2] * n[3]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[2] += m[3] * n[2]
    o[1] += o[2] >>> 16
    o[2] &= 0xffff
    o[1] += m[1] * n[3]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[2] * n[2]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[1] += m[3] * n[1]
    o[0] += o[1] >>> 16
    o[1] &= 0xffff
    o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
    o[0] &= 0xffff
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
  var x64Rotl = function (m, n) {
    n %= 64
    if (n === 32) {
      return [m[1], m[0]]
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
    } else {
      n -= 32
      return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
    }
  }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
  var x64LeftShift = function (m, n) {
    n %= 64
    if (n === 0) {
      return m
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
    } else {
      return [m[1] << (n - 32), 0]
    }
  }
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Xor = function (m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]]
  }
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
  var x64Fmix = function (h) {
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
    h = x64Xor(h, [0, h[0] >>> 1])
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
    h = x64Xor(h, [0, h[0] >>> 1])
    return h
  }

  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
  var x64hash128 = function (key, seed) {
    key = key || ''
    seed = seed || 0
    var remainder = key.length % 16
    var bytes = key.length - remainder
    var h1 = [0, seed]
    var h2 = [0, seed]
    var k1 = [0, 0]
    var k2 = [0, 0]
    var c1 = [0x87c37b91, 0x114253d5]
    var c2 = [0x4cf5ad43, 0x2745937f]
    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
      k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
      k1 = x64Multiply(k1, c1)
      k1 = x64Rotl(k1, 31)
      k1 = x64Multiply(k1, c2)
      h1 = x64Xor(h1, k1)
      h1 = x64Rotl(h1, 27)
      h1 = x64Add(h1, h2)
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
      k2 = x64Multiply(k2, c2)
      k2 = x64Rotl(k2, 33)
      k2 = x64Multiply(k2, c1)
      h2 = x64Xor(h2, k2)
      h2 = x64Rotl(h2, 31)
      h2 = x64Add(h2, h1)
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
    }
    k1 = [0, 0]
    k2 = [0, 0]
    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
      // fallthrough
      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
      // fallthrough
      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
      // fallthrough
      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
      // fallthrough
      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
      // fallthrough
      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
      // fallthrough
      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
        k2 = x64Multiply(k2, c2)
        k2 = x64Rotl(k2, 33)
        k2 = x64Multiply(k2, c1)
        h2 = x64Xor(h2, k2)
      // fallthrough
      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
      // fallthrough
      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
      // fallthrough
      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
      // fallthrough
      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
      // fallthrough
      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
      // fallthrough
      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
      // fallthrough
      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
      // fallthrough
      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i)])
        k1 = x64Multiply(k1, c1)
        k1 = x64Rotl(k1, 31)
        k1 = x64Multiply(k1, c2)
        h1 = x64Xor(h1, k1)
      // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length])
    h2 = x64Xor(h2, [0, key.length])
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    h1 = x64Fmix(h1)
    h2 = x64Fmix(h2)
    h1 = x64Add(h1, h2)
    h2 = x64Add(h2, h1)
    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
  }

  var defaultOptions = {
    preprocessor: null,
    audio: {
      timeout: 1000,
      // On iOS 11, audio context can only be used in response to user interaction.
      // We require users to explicitly enable audio fingerprinting on iOS 11.
      // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      excludeIOS11: true
    },
    fonts: {
      swfContainerId: 'fingerprintjs2',
      swfPath: 'flash/compiled/FontList.swf',
      userDefinedFonts: [],
      extendedJsFonts: false
    },
    screen: {
      // To ensure consistent fingerprints when users rotate their mobile devices
      detectScreenOrientation: true
    },
    plugins: {
      sortPluginsFor: [/palemoon/i],
      excludeIE: false
    },
    extraComponents: [],
    excludes: {
      // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
      'enumerateDevices': true,
      // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
      'pixelRatio': true,
      // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
      'doNotTrack': true,
      // uses js fonts already
      'fontsFlash': true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
  }

  var each = function (obj, iterator) {
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator)
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator(obj[i], i, obj)
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator(obj[key], key, obj)
        }
      }
    }
  }

  var map = function (obj, iterator) {
    var results = []
    // Not using strict equality so that this acts as a
    // shortcut to checking for `null` and `undefined`.
    if (obj == null) {
      return results
    }
    if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
    each(obj, function (value, index, list) {
      results.push(iterator(value, index, list))
    })
    return results
  }

  var extendSoft = function (target, source) {
    if (source == null) { return target }
    var value
    var key
    for (key in source) {
      value = source[key]
      if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
        target[key] = value
      }
    }
    return target
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
  var enumerateDevicesKey = function (done, options) {
    if (!isEnumerateDevicesSupported()) {
      return done(options.NOT_AVAILABLE)
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      done(devices.map(function (device) {
        return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
      }))
    })
      .catch(function (error) {
        done(error)
      })
  }

  var isEnumerateDevicesSupported = function () {
    return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
  }
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
  var audioKey = function (done, options) {
    var audioOptions = options.audio
    if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
      // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      return done(options.EXCLUDED)
    }

    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

    if (AudioContext == null) {
      return done(options.NOT_AVAILABLE)
    }

    var context = new AudioContext(1, 44100, 44100)

    var oscillator = context.createOscillator()
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(10000, context.currentTime)

    var compressor = context.createDynamicsCompressor()
    each([
      ['threshold', -50],
      ['knee', 40],
      ['ratio', 12],
      ['reduction', -20],
      ['attack', 0],
      ['release', 0.25]
    ], function (item) {
      if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
        compressor[item[0]].setValueAtTime(item[1], context.currentTime)
      }
    })

    oscillator.connect(compressor)
    compressor.connect(context.destination)
    oscillator.start(0)
    context.startRendering()

    var audioTimeoutId = setTimeout(function () {
      console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
      context.oncomplete = function () { }
      context = null
      return done('audioTimeout')
    }, audioOptions.timeout)

    context.oncomplete = function (event) {
      var fingerprint
      try {
        clearTimeout(audioTimeoutId)
        fingerprint = event.renderedBuffer.getChannelData(0)
          .slice(4500, 5000)
          .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
          .toString()
        oscillator.disconnect()
        compressor.disconnect()
      } catch (error) {
        done(error)
        return
      }
      done(fingerprint)
    }
  }
  var UserAgent = function (done) {
    done(navigator.userAgent)
  }
  var webdriver = function (done, options) {
    done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
  }
  var languageKey = function (done, options) {
    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
  }
  var colorDepthKey = function (done, options) {
    done(window.screen.colorDepth || options.NOT_AVAILABLE)
  }
  var deviceMemoryKey = function (done, options) {
    done(navigator.deviceMemory || options.NOT_AVAILABLE)
  }
  var pixelRatioKey = function (done, options) {
    done(window.devicePixelRatio || options.NOT_AVAILABLE)
  }
  var screenResolutionKey = function (done, options) {
    done(getScreenResolution(options))
  }
  var getScreenResolution = function (options) {
    var resolution = [window.screen.width, window.screen.height]
    if (options.screen.detectScreenOrientation) {
      resolution.sort().reverse()
    }
    return resolution
  }
  var availableScreenResolutionKey = function (done, options) {
    done(getAvailableScreenResolution(options))
  }
  var getAvailableScreenResolution = function (options) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var available = [window.screen.availHeight, window.screen.availWidth]
      if (options.screen.detectScreenOrientation) {
        available.sort().reverse()
      }
      return available
    }
    // headless browsers
    return options.NOT_AVAILABLE
  }
  var timezoneOffset = function (done) {
    done(new Date().getTimezoneOffset())
  }
  var timezone = function (done, options) {
    if (window.Intl && window.Intl.DateTimeFormat) {
      done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var sessionStorageKey = function (done, options) {
    done(hasSessionStorage(options))
  }
  var localStorageKey = function (done, options) {
    done(hasLocalStorage(options))
  }
  var indexedDbKey = function (done, options) {
    done(hasIndexedDB(options))
  }
  var addBehaviorKey = function (done) {
    // body might not be defined at this point or removed programmatically
    done(!!(document.body && document.body.addBehavior))
  }
  var openDatabaseKey = function (done) {
    done(!!window.openDatabase)
  }
  var cpuClassKey = function (done, options) {
    done(getNavigatorCpuClass(options))
  }
  var platformKey = function (done, options) {
    done(getNavigatorPlatform(options))
  }
  var doNotTrackKey = function (done, options) {
    done(getDoNotTrack(options))
  }
  var canvasKey = function (done, options) {
    if (isCanvasSupported()) {
      done(getCanvasFp(options))
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglKey = function (done, options) {
    if (isWebGlSupported()) {
      done(getWebglFp())
      return
    }
    done(options.NOT_AVAILABLE)
  }
  var webglVendorAndRendererKey = function (done) {
    if (isWebGlSupported()) {
      done(getWebglVendorAndRenderer())
      return
    }
    done()
  }
  var adBlockKey = function (done) {
    done(getAdBlock())
  }
  var hasLiedLanguagesKey = function (done) {
    done(getHasLiedLanguages())
  }
  var hasLiedResolutionKey = function (done) {
    done(getHasLiedResolution())
  }
  var hasLiedOsKey = function (done) {
    done(getHasLiedOs())
  }
  var hasLiedBrowserKey = function (done) {
    done(getHasLiedBrowser())
  }
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
  var flashFontsKey = function (done, options) {
    // we do flash if swfobject is loaded
    if (!hasSwfObjectLoaded()) {
      return done('swf object not loaded')
    }
    if (!hasMinFlashInstalled()) {
      return done('flash not installed')
    }
    if (!options.fonts.swfPath) {
      return done('missing options.fonts.swfPath')
    }
    loadSwfAndDetectFonts(function (fonts) {
      done(fonts)
    }, options)
  }
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
  var jsFontsKey = function (done, options) {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif']

    var fontList = [
      'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
      'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
      'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
      'Geneva', 'Georgia',
      'Helvetica', 'Helvetica Neue',
      'Impact',
      'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
      'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
      'Palatino', 'Palatino Linotype',
      'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
      'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
      'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
    ]

    if (options.fonts.extendedJsFonts) {
      var extendedFontList = [
        'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
        'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
        'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
        'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
        'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
        'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
        'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
        'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
        'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
        'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
        'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
        'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
        'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
        'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
        'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
        'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
        'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
        'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
        'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
        'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
        'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
        'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
        'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
        'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
        'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
        'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
        'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
        'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
        'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
        'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
        'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
      fontList = fontList.concat(extendedFontList)
    }

    fontList = fontList.concat(options.fonts.userDefinedFonts)

    // remove duplicate fonts
    fontList = fontList.filter(function (font, position) {
      return fontList.indexOf(font) === position
    })

    // we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = 'mmmmmmmmmmlli'

    // we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px'

    var h = document.getElementsByTagName('body')[0]

    // div to load spans for the base fonts
    var baseFontsDiv = document.createElement('div')

    // div to load spans for the fonts to detect
    var fontsDiv = document.createElement('div')

    var defaultWidth = {}
    var defaultHeight = {}

    // creates a span where the fonts will be loaded
    var createSpan = function () {
      var s = document.createElement('span')
      /*
       * We need this css as in some weird browser this
       * span elements shows up for a microSec which creates a
       * bad user experience
       */
      s.style.position = 'absolute'
      s.style.left = '-9999px'
      s.style.fontSize = testSize

      // css font reset to reset external styles
      s.style.fontStyle = 'normal'
      s.style.fontWeight = 'normal'
      s.style.letterSpacing = 'normal'
      s.style.lineBreak = 'auto'
      s.style.lineHeight = 'normal'
      s.style.textTransform = 'none'
      s.style.textAlign = 'left'
      s.style.textDecoration = 'none'
      s.style.textShadow = 'none'
      s.style.whiteSpace = 'normal'
      s.style.wordBreak = 'normal'
      s.style.wordSpacing = 'normal'

      s.innerHTML = testString
      return s
    }

    // creates a span and load the font to detect and a base font for fallback
    var createSpanWithFonts = function (fontToDetect, baseFont) {
      var s = createSpan()
      s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
      return s
    }

    // creates spans for the base fonts and adds them to baseFontsDiv
    var initializeBaseFontsSpans = function () {
      var spans = []
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        var s = createSpan()
        s.style.fontFamily = baseFonts[index]
        baseFontsDiv.appendChild(s)
        spans.push(s)
      }
      return spans
    }

    // creates spans for the fonts to detect and adds them to fontsDiv
    var initializeFontsSpans = function () {
      var spans = {}
      for (var i = 0, l = fontList.length; i < l; i++) {
        var fontSpans = []
        for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
          var s = createSpanWithFonts(fontList[i], baseFonts[j])
          fontsDiv.appendChild(s)
          fontSpans.push(s)
        }
        spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
      }
      return spans
    }

    // checks if a font is available
    var isFontAvailable = function (fontSpans) {
      var detected = false
      for (var i = 0; i < baseFonts.length; i++) {
        detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
        if (detected) {
          return detected
        }
      }
      return detected
    }

    // create spans for base fonts
    var baseFontsSpans = initializeBaseFontsSpans()

    // add the spans to the DOM
    h.appendChild(baseFontsDiv)

    // get the default width for the three base fonts
    for (var index = 0, length = baseFonts.length; index < length; index++) {
      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
    }

    // create spans for fonts to detect
    var fontsSpans = initializeFontsSpans()

    // add all the spans to the DOM
    h.appendChild(fontsDiv)

    // check available fonts
    var available = []
    for (var i = 0, l = fontList.length; i < l; i++) {
      if (isFontAvailable(fontsSpans[fontList[i]])) {
        available.push(fontList[i])
      }
    }

    // remove spans from DOM
    h.removeChild(fontsDiv)
    h.removeChild(baseFontsDiv)
    done(available)
  }
  var pluginsComponent = function (done, options) {
    if (isIE()) {
      if (!options.plugins.excludeIE) {
        done(getIEPlugins(options))
      } else {
        done(options.EXCLUDED)
      }
    } else {
      done(getRegularPlugins(options))
    }
  }
  var getRegularPlugins = function (options) {
    if (navigator.plugins == null) {
      return options.NOT_AVAILABLE
    }

    var plugins = []
    // plugins isn't defined in Node envs.
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
      if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
    }

    // sorting plugins only for those user agents, that we know randomize the plugins
    // every time we try to enumerate them
    if (pluginsShouldBeSorted(options)) {
      plugins = plugins.sort(function (a, b) {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0
      })
    }
    return map(plugins, function (p) {
      var mimeTypes = map(p, function (mt) {
        return [mt.type, mt.suffixes]
      })
      return [p.name, p.description, mimeTypes]
    })
  }
  var getIEPlugins = function (options) {
    var result = []
    if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
      var names = [
        'AcroPDF.PDF', // Adobe PDF reader 7+
        'Adodb.Stream',
        'AgControl.AgControl', // Silverlight
        'DevalVRXCtrl.DevalVRXCtrl.1',
        'MacromediaFlashPaper.MacromediaFlashPaper',
        'Msxml2.DOMDocument',
        'Msxml2.XMLHTTP',
        'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
        'QuickTime.QuickTime', // QuickTime
        'QuickTimeCheckObject.QuickTimeCheck.1',
        'RealPlayer',
        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
        'Scripting.Dictionary',
        'SWCtl.SWCtl', // ShockWave player
        'Shell.UIHelper',
        'ShockwaveFlash.ShockwaveFlash', // flash plugin
        'Skype.Detection',
        'TDCCtl.TDCCtl',
        'WMPlayer.OCX', // Windows media player
        'rmocx.RealPlayer G2 Control',
        'rmocx.RealPlayer G2 Control.1'
      ]
      // starting to detect plugins in IE
      result = map(names, function (name) {
        try {
          // eslint-disable-next-line no-new
          new window.ActiveXObject(name)
          return name
        } catch (e) {
          return options.ERROR
        }
      })
    } else {
      result.push(options.NOT_AVAILABLE)
    }
    if (navigator.plugins) {
      result = result.concat(getRegularPlugins(options))
    }
    return result
  }
  var pluginsShouldBeSorted = function (options) {
    var should = false
    for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
      var re = options.plugins.sortPluginsFor[i]
      if (navigator.userAgent.match(re)) {
        should = true
        break
      }
    }
    return should
  }
  var touchSupportKey = function (done) {
    done(getTouchSupport())
  }
  var hardwareConcurrencyKey = function (done, options) {
    done(getHardwareConcurrency(options))
  }
  var hasSessionStorage = function (options) {
    try {
      return !!window.sessionStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }

  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
  var hasLocalStorage = function (options) {
    try {
      return !!window.localStorage
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var hasIndexedDB = function (options) {
    try {
      return !!window.indexedDB
    } catch (e) {
      return options.ERROR // SecurityError when referencing it means it exists
    }
  }
  var getHardwareConcurrency = function (options) {
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency
    }
    return options.NOT_AVAILABLE
  }
  var getNavigatorCpuClass = function (options) {
    return navigator.cpuClass || options.NOT_AVAILABLE
  }
  var getNavigatorPlatform = function (options) {
    if (navigator.platform) {
      return navigator.platform
    } else {
      return options.NOT_AVAILABLE
    }
  }
  var getDoNotTrack = function (options) {
    if (navigator.doNotTrack) {
      return navigator.doNotTrack
    } else if (navigator.msDoNotTrack) {
      return navigator.msDoNotTrack
    } else if (window.doNotTrack) {
      return window.doNotTrack
    } else {
      return options.NOT_AVAILABLE
    }
  }
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property

  var getTouchSupport = function () {
    var maxTouchPoints = 0
    var touchEvent
    if (typeof navigator.maxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.maxTouchPoints
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.msMaxTouchPoints
    }
    try {
      document.createEvent('TouchEvent')
      touchEvent = true
    } catch (_) {
      touchEvent = false
    }
    var touchStart = 'ontouchstart' in window
    return [maxTouchPoints, touchEvent, touchStart]
  }
  // https://www.browserleaks.com/canvas#how-does-it-work

  var getCanvasFp = function (options) {
    var result = []
    // Very simple now, need to make it more complex (geo shapes etc)
    var canvas = document.createElement('canvas')
    canvas.width = 2000
    canvas.height = 200
    canvas.style.display = 'inline'
    var ctx = canvas.getContext('2d')
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    ctx.rect(0, 0, 10, 10)
    ctx.rect(2, 2, 6, 6)
    result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    // https://github.com/Valve/fingerprintjs2/issues/66
    if (options.dontUseFakeFontInCanvas) {
      ctx.font = '11pt Arial'
    } else {
      ctx.font = '11pt no-real-font-123'
    }
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
    ctx.font = '18pt Arial'
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = 'rgb(255,0,255)'
    ctx.beginPath()
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(0,255,255)'
    ctx.beginPath()
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,255,0)'
    ctx.beginPath()
    ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = 'rgb(255,0,255)'
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
    ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
    ctx.fill('evenodd')

    if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
    return result
  }
  var getWebglFp = function () {
    var gl
    var fa2s = function (fa) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.enable(gl.DEPTH_TEST)
      gl.depthFunc(gl.LEQUAL)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      return '[' + fa[0] + ', ' + fa[1] + ']'
    }
    var maxAnisotropy = function (gl) {
      var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
      if (ext) {
        var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        if (anisotropy === 0) {
          anisotropy = 2
        }
        return anisotropy
      } else {
        return null
      }
    }

    gl = getWebglCanvas()
    if (!gl) { return null }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = []
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
    var vertexPosBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
    var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    vertexPosBuffer.itemSize = 3
    vertexPosBuffer.numItems = 3
    var program = gl.createProgram()
    var vshader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vshader, vShaderTemplate)
    gl.compileShader(vshader)
    var fshader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fshader, fShaderTemplate)
    gl.compileShader(fshader)
    gl.attachShader(program, vshader)
    gl.attachShader(program, fshader)
    gl.linkProgram(program)
    gl.useProgram(program)
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
    gl.enableVertexAttribArray(program.vertexPosArray)
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
    gl.uniform2f(program.offsetUniform, 1, 1)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
    try {
      result.push(gl.canvas.toDataURL())
    } catch (e) {
      /* .toDataURL may be absent or broken (blocked by extension) */
    }
    result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
    result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
    result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
    result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
    result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
    result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
    result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
    result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
    result.push('webgl max anisotropy:' + maxAnisotropy(gl))
    result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
    result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
    result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
    result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
    result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
    result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
    result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
    result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
    result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
    result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
    result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
    result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
    result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
    result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
    result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
    result.push('webgl version:' + gl.getParameter(gl.VERSION))

    try {
      // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
      var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (extensionDebugRendererInfo) {
        result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
        result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
      }
    } catch (e) { /* squelch */ }

    if (!gl.getShaderPrecisionFormat) {
      return result
    }

    each(['FLOAT', 'INT'], function (numType) {
      each(['VERTEX', 'FRAGMENT'], function (shader) {
        each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
          each(['precision', 'rangeMin', 'rangeMax'], function (key) {
            var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
            if (key !== 'precision') {
              key = 'precision ' + key
            }
            var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
            result.push(line)
          })
        })
      })
    })
    return result
  }
  var getWebglVendorAndRenderer = function () {
    /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
    try {
      var glContext = getWebglCanvas()
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
    } catch (e) {
      return null
    }
  }
  var getAdBlock = function () {
    var ads = document.createElement('div')
    ads.innerHTML = '&nbsp;'
    ads.className = 'adsbox'
    var result = false
    try {
      // body may not exist, that's why we need try/catch
      document.body.appendChild(ads)
      result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
      document.body.removeChild(ads)
    } catch (e) {
      result = false
    }
    return result
  }
  var getHasLiedLanguages = function () {
    // We check if navigator.language is equal to the first language of navigator.languages
    // navigator.languages is undefined on IE11 (and potentially older IEs)
    if (typeof navigator.languages !== 'undefined') {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2)
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          return true
        }
      } catch (err) {
        return true
      }
    }
    return false
  }
  var getHasLiedResolution = function () {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
  }
  var getHasLiedOs = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var oscpu = navigator.oscpu
    var platform = navigator.platform.toLowerCase()
    var os
    // We extract the OS from the user agent (respect the order of the if else if statement)
    if (userAgent.indexOf('windows phone') >= 0) {
      os = 'Windows Phone'
    } else if (userAgent.indexOf('win') >= 0) {
      os = 'Windows'
    } else if (userAgent.indexOf('android') >= 0) {
      os = 'Android'
    } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) {
      os = 'Linux'
    } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
      os = 'iOS'
    } else if (userAgent.indexOf('mac') >= 0) {
      os = 'Mac'
    } else {
      os = 'Other'
    }
    // We detect if the person uses a mobile device
    var mobileDevice = (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0))

    if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
      return true
    }

    // We compare oscpu with the OS extracted from the UA
    if (typeof oscpu !== 'undefined') {
      oscpu = oscpu.toLowerCase()
      if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true
      } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
        return true
      } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
        return true
      } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
        return true
      }
    }

    // We compare platform with the OS extracted from the UA
    if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
      return true
    } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
      return true
    } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
      return true
    } else {
      var platformIsOther = platform.indexOf('win') < 0 &&
        platform.indexOf('linux') < 0 &&
        platform.indexOf('mac') < 0 &&
        platform.indexOf('iphone') < 0 &&
        platform.indexOf('ipad') < 0
      if (platformIsOther !== (os === 'Other')) {
        return true
      }
    }

    return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
  }
  var getHasLiedBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var productSub = navigator.productSub

    // we extract the browser from the user agent (respect the order of the tests)
    var browser
    if (userAgent.indexOf('firefox') >= 0) {
      browser = 'Firefox'
    } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
      browser = 'Opera'
    } else if (userAgent.indexOf('chrome') >= 0) {
      browser = 'Chrome'
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari'
    } else if (userAgent.indexOf('trident') >= 0) {
      browser = 'Internet Explorer'
    } else {
      browser = 'Other'
    }

    if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
      return true
    }

    // eslint-disable-next-line no-eval
    var tempRes = eval.toString().length
    if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
      return true
    } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
      return true
    } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
      return true
    }

    // We create an error to see how it is handled
    var errFirefox
    try {
      // eslint-disable-next-line no-throw-literal
      throw 'a'
    } catch (err) {
      try {
        err.toSource()
        errFirefox = true
      } catch (errOfErr) {
        errFirefox = false
      }
    }
    return errFirefox && browser !== 'Firefox' && browser !== 'Other'
  }
  var isCanvasSupported = function () {
    var elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  var isWebGlSupported = function () {
    // code taken from Modernizr
    if (!isCanvasSupported()) {
      return false
    }

    var glContext = getWebglCanvas()
    return !!window.WebGLRenderingContext && !!glContext
  }
  var isIE = function () {
    if (navigator.appName === 'Microsoft Internet Explorer') {
      return true
    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
      return true
    }
    return false
  }
  var hasSwfObjectLoaded = function () {
    return typeof window.swfobject !== 'undefined'
  }
  var hasMinFlashInstalled = function () {
    return window.swfobject.hasFlashPlayerVersion('9.0.0')
  }
  var addFlashDivNode = function (options) {
    var node = document.createElement('div')
    node.setAttribute('id', options.fonts.swfContainerId)
    document.body.appendChild(node)
  }
  var loadSwfAndDetectFonts = function (done, options) {
    var hiddenCallback = '___fp_swf_loaded'
    window[hiddenCallback] = function (fonts) {
      done(fonts)
    }
    var id = options.fonts.swfContainerId
    addFlashDivNode()
    var flashvars = { onReady: hiddenCallback }
    var flashparams = { allowScriptAccess: 'always', menu: 'false' }
    window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
  }
  var getWebglCanvas = function () {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */ }
    if (!gl) { gl = null }
    return gl
  }

  var components = [
    { key: 'userAgent', getData: UserAgent },
    { key: 'webdriver', getData: webdriver },
    { key: 'language', getData: languageKey },
    { key: 'colorDepth', getData: colorDepthKey },
    { key: 'deviceMemory', getData: deviceMemoryKey },
    { key: 'pixelRatio', getData: pixelRatioKey },
    { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey },
    { key: 'screenResolution', getData: screenResolutionKey },
    { key: 'availableScreenResolution', getData: availableScreenResolutionKey },
    { key: 'timezoneOffset', getData: timezoneOffset },
    { key: 'timezone', getData: timezone },
    { key: 'sessionStorage', getData: sessionStorageKey },
    { key: 'localStorage', getData: localStorageKey },
    { key: 'indexedDb', getData: indexedDbKey },
    { key: 'addBehavior', getData: addBehaviorKey },
    { key: 'openDatabase', getData: openDatabaseKey },
    { key: 'cpuClass', getData: cpuClassKey },
    { key: 'platform', getData: platformKey },
    { key: 'doNotTrack', getData: doNotTrackKey },
    { key: 'plugins', getData: pluginsComponent },
    { key: 'canvas', getData: canvasKey },
    { key: 'webgl', getData: webglKey },
    { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey },
    { key: 'adBlock', getData: adBlockKey },
    { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey },
    { key: 'hasLiedResolution', getData: hasLiedResolutionKey },
    { key: 'hasLiedOs', getData: hasLiedOsKey },
    { key: 'hasLiedBrowser', getData: hasLiedBrowserKey },
    { key: 'touchSupport', getData: touchSupportKey },
    { key: 'fonts', getData: jsFontsKey, pauseBefore: true },
    { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true },
    { key: 'audio', getData: audioKey },
    { key: 'enumerateDevices', getData: enumerateDevicesKey }
  ]

  var Fingerprint2 = function (options) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
  }

  Fingerprint2.get = function (options, callback) {
    if (!callback) {
      callback = options
      options = {}
    } else if (!options) {
      options = {}
    }
    extendSoft(options, defaultOptions)
    options.components = options.extraComponents.concat(components)

    var keys = {
      data: [],
      addPreprocessedComponent: function (key, value) {
        if (typeof options.preprocessor === 'function') {
          value = options.preprocessor(key, value)
        }
        keys.data.push({ key: key, value: value })
      }
    }

    var i = -1
    var chainComponents = function (alreadyWaited) {
      i += 1
      if (i >= options.components.length) { // on finish
        callback(keys.data)
        return
      }
      var component = options.components[i]

      if (options.excludes[component.key]) {
        chainComponents(false) // skip
        return
      }

      if (!alreadyWaited && component.pauseBefore) {
        i -= 1
        setTimeout(function () {
          chainComponents(true)
        }, 1)
        return
      }

      try {
        component.getData(function (value) {
          keys.addPreprocessedComponent(component.key, value)
          chainComponents(false)
        }, options)
      } catch (error) {
        // main body error
        keys.addPreprocessedComponent(component.key, String(error))
        chainComponents(false)
      }
    }

    chainComponents(false)
  }

  Fingerprint2.getPromise = function (options) {
    return new Promise(function (resolve, reject) {
      Fingerprint2.get(options, resolve)
    })
  }

  Fingerprint2.getV18 = function (options, callback) {
    if (callback == null) {
      callback = options
      options = {}
    }
    return Fingerprint2.get(options, function (components) {
      var newComponents = []
      for (var i = 0; i < components.length; i++) {
        var component = components[i]
        if (component.value === (options.NOT_AVAILABLE || 'not available')) {
          newComponents.push({ key: component.key, value: 'unknown' })
        } else if (component.key === 'plugins') {
          newComponents.push({
            key: 'plugins',
            value: map(component.value, function (p) {
              var mimeTypes = map(p[2], function (mt) {
                if (mt.join) { return mt.join('~') }
                return mt
              }).join(',')
              return [p[0], p[1], mimeTypes].join('::')
            })
          })
        } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
          newComponents.push({ key: component.key, value: component.value.join('~') })
        } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
          if (component.value) {
            newComponents.push({ key: component.key, value: 1 })
          } else {
            // skip
            continue
          }
        } else {
          if (component.value) {
            newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component)
          } else {
            newComponents.push({ key: component.key, value: component.value })
          }
        }
      }
      var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
      callback(murmur, newComponents)
    })
  }

  Fingerprint2.x64hash128 = x64hash128
  Fingerprint2.VERSION = '2.1.0'
  return Fingerprint2
})



/**
  Basic Polyfilling / Workarounds
  
  @see: http://engineering.silk.co/post/31921750832/mutation-events-what-happens/
  @see: https://github.com/kronicker/sendbeacon-polyfill/blob/master/sendbeacon.js
  @see: https://gist.github.com/JamesMGreene/fb4a71e060da6e26511d
  @see: https://gist.github.com/RubaXa/...
  
  # [ document.head ]
  # [ document.currentScript ]
  # [ Symbol ]
  # [ window.WeakMap ]
  # [ window.MutationEvent @DOMAttrModified ] { for Old WebKit browsers ]
  # [ window.performace.mark, window.performance.now, window.performance.measure, performance.getEntriesByType, performance.getEntriesByName ]
  # [ window.requestAnimationFrame ]
  # [ window.Event.prototype.preventDefault ]
  # [ window.navigator.sendBeacon ]
  # [ window.MutationObserver ]
  # [ window.setImmediate ]
 */

;(function(w, d, n) {
  "use strict";
	
  w.isTrident_IE = (/*@cc_on!@*/false || d.uniqueID || d.createEventObject) && (w.toStaticHTML || ((d.documentMode >= 9) && ('clientInformation' in w)))

  var attrModifiedMutationEventDoesntWork = function(){
  	var attrModifiedWorks = false;
	  
	var listener = function(){ attrModifiedWorks = true; };
	d.documentElement.addEventListener("DOMAttrModified", listener, false);
	d.documentElement.setAttribute("___TEST___", true);
	d.documentElement.removeAttribute("___TEST___", true);
	d.documentElement.removeEventListener("DOMAttrModified", listener, false);
	
	return attrModifiedWorks === false;
  };
	
  var isBeaconAPISupported = function(){
  	return (n && ('sendBeacon' in n));
  };
	
    var isString = function(val){ return typeof val === 'string'; };
    var isBlob = function(val){ return val instanceof w.Blob; };
    var isObject = function(val){ return val != null && typeof val == 'object'; };
  
	  var hasStack = (function() {
	    var result = false;
	    try {
	      throw new Error();
	    }
	    catch (err) {
	      result = typeof err.stack === "string" && !!err.stack;
	    }
	    return result;
  	})();
	
    if(!(d.head)){
      var _getHead = function(){
        return d.getElementsByTagName('head')[0];
      };
	  
  	  if (d.__defineGetter__) {
      		d.__defineGetter__("head", _getHead);
		      d.__defineSetter__("head", function(){ 
			      throw new Error('Cannot set property'); 
		      })
	    }else{
        Object.defineProperty(d, "head", {
          get: _getHead,
          enumerable: true,
          configurable: false,
          set:function(){ 
            throw new Error('Cannot set property'); 
          }
        });
	    }
    }
	
  if(!(d.currentScript)){

  	// This page's URL
  	var pageUrl = w.location.href;

  	// Live NodeList collection
  	var scripts = d.scripts || d.getElementsByTagName("script");

  	// Get script object based on the `src` URL
  	function getScriptFromUrl(url) {
      if (typeof url === "string" && url) {
        for (var i = 0, len = scripts.length; i < len; i++) {
          if (scripts[i].src === url) {
            return scripts[i];
          }
        }
      }
      //return undefined;
  	}

  	// If there is only a single inline script on the page, return it; otherwise `undefined`
  	function getSoleInlineScript() {
      var script;
      
	    for (var i = 0, len = scripts.length; i < len; i++) {
	      if (!scripts[i].src) {
          if (script) {
            return undefined;
          }
		      script = scripts[i];
	      }
	    }
	    return script;
  	}

  	// Get the currently executing script URL from an Error stack trace
  	function getScriptUrlFromStack(stack, skipStackDepth) {
	    	var url, matches, remainingStack,
        
        ignoreMessage = typeof skipStackDepth === "number";
	    	skipStackDepth = ignoreMessage ? skipStackDepth : (typeof _currentScript.skipStackDepth === "number" ? _currentScript.skipStackDepth : 0);
        
        if (typeof stack === "string" && stack) {
			      if (ignoreMessage) {
				  matches = stack.match(/((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
			      }
			      else {
				matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
				if (!(matches && matches[1])) {
				  matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
				  if (matches && matches[1]) {
				    url = matches[1];
				  }
				}
			      }

			      if (matches && matches[1]) {
				if (skipStackDepth > 0) {
				  remainingStack = stack.slice(stack.indexOf(matches[0]) + matches[0].length);
				  url = getScriptUrlFromStack(remainingStack, (skipStackDepth - 1));
				}
				else {
				  url = matches[1];
				}
			      }
		}
		  
	    	return url;
  	}

  	// Get the currently executing `script` DOM element
  	function _currentScript() {
		    // Yes, this IS actually possible
		    if (scripts.length === 0) {
		      return;  //return undefined;
		    }

		    if (scripts.length === 1) {
		      return scripts[0];
		    }

		    if ("readyState" in scripts[0]) {
		      for (var i = scripts.length; i--; ) {
			if (scripts[i].readyState === "interactive") {
			  return scripts[i];
			}
		      }
		    }

		    if (d.readyState === "loading") {
		      return scripts[scripts.length - 1];
		    }

		    if (hasStack) {
		      try {
			throw new Error();
		      }
		      catch (err) {
			// NOTE: Cannot use `err.sourceURL` or `err.fileName` as they will always be THIS script
			var url = getScriptUrlFromStack(err.stack);
			var script = getScriptFromUrl(url);
			if (!script && url === pageUrl) {
			  script = getSoleInlineScript();
			}
			return script;
		      }
		    }

	    	//return undefined;
  	}

  	// Configuration
  	_currentScript.skipStackDepth = 1;

  	// Add the "private" property for testing, even if the real property can be polyfilled
	d._currentScript = _currentScript;
	  
	if (d.__defineGetter__) {
      		d.__defineGetter__("currentScript", _currentScript);
		d.__defineSetter__("currentScript",function(){ 
			throw new Error('Cannot set property'); 
		})
	}else{
		Object.defineProperty(d, "currentScript", {
			get: _currentScript,
			enumerable: true,
			configurable: false,
			set:function(){ 
				throw new Error('Cannot set property'); 
			}
		});
	}
  }

  if(!w.Symbol){
      /*!
 * Symbol-ES6 v0.1.2
 * ES6 Symbol polyfill in pure ES5.
 *
 * @license Copyright (c) 2017-2018 Rousan Ali, MIT License
 *
 * Codebase: https://github.com/rousan/symbol-es6
 * Date: 28th Jan, 2018
 */

(function (global, factory) {

  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
      // For the environment like NodeJS, CommonJS etc where module or
      // module.exports objects are available
      module.exports = factory(global);
  } else {
      // For browser context, where global object is window
      factory(global);
  }

  /* window is for browser environment and global is for NodeJS environment */
})(typeof window !== "undefined" ? window : global, function (global) {

  "use strict";

  var defineProperty = Object.defineProperty;

  var defineProperties = Object.defineProperties;

  var symbolHiddenCounter = 0;

  var globalSymbolRegistry = [];

  var slice = Array.prototype.slice;

  var ES6 = typeof global.ES6 === "object" ? global.ES6 : (global.ES6 = {});

  var isArray = Array.isArray;

  var objectToString = Object.prototype.toString;

  var push = Array.prototype.push;

  var emptyFunction = function () {};

  var simpleFunction = function (arg) {
      return arg;
  };

  var isCallable = function (fn) {
      return typeof fn === 'function';
  };

  var isConstructor = function (fn) {
      return isCallable(fn);
  };

  var Iterator = function () {};

  var ArrayIterator = function ArrayIterator(array, flag) {
      this._array = array;
      this._flag = flag;
      this._nextIndex = 0;
  };

  var StringIterator = function StringIterator(string, flag) {
      this._string = string;
      this._flag = flag;
      this._nextIndex = 0;
  };

  var isES6Running = function() {
      return false; /* Now 'false' for testing purpose */
  };

  var isObject = function (value) {
      return value !== null && (typeof value === "object" || typeof value === "function");
  };

  var es6FunctionPrototypeHasInstanceSymbol = function (instance) {
      if (typeof this !== "function")
          return false;
      return instance instanceof this;
  };

  var es6InstanceOfOperator = function (object, constructor) {
      if (!isObject(constructor))
          throw new TypeError("Right-hand side of 'instanceof' is not an object");

      var hasInstanceSymbolProp = constructor[Symbol.hasInstance];
      if (typeof hasInstanceSymbolProp === "undefined") {
          return object instanceof constructor;
      } else if(typeof hasInstanceSymbolProp !== "function") {
          throw new TypeError(typeof hasInstanceSymbolProp + " is not a function");
      } else {
          return hasInstanceSymbolProp.call(constructor, object);
      }
  };

  // Generates name for a symbol instance and this name will be used as
  // property key for property symbols internally.
  var generateSymbolName = function (id) {
      return "@@_____" + id + "_____";
  };

  // Generates id for next Symbol instance
  var getNextSymbolId = function () {
      return symbolHiddenCounter++;
  };

  var setupSymbolInternals = function (symbol, desc) {
      defineProperties(symbol, {
          _description: {
              value: desc
          },
          _isSymbol: {
              value: true
          },
          _id: {
              value: getNextSymbolId()
          }
      });
      return symbol;
  };

  var checkSymbolInternals = function (symbol) {
      return symbol._isSymbol === true && typeof symbol._id === "number" && typeof symbol._description === "string";
  };

  var isSymbol = function (symbol) {
      return symbol instanceof Symbol && checkSymbolInternals(symbol);
  };

  var symbolFor = function (key) {
      key = String(key);
      var registryLength = globalSymbolRegistry.length,
          record,
          i = 0;

      for(; i<registryLength; ++i) {
          record = globalSymbolRegistry[i];
          if (record.key === key)
              return record.symbol;
      }

      record = {
          key: key,
          symbol: Symbol(key)
      };
      globalSymbolRegistry.push(record);
      return record.symbol;
  };

  var symbolKeyFor = function (symbol) {
      if (!ES6.isSymbol(symbol))
          throw new TypeError(String(symbol) + " is not a symbol");
      var registryLength = globalSymbolRegistry.length,
          record,
          i = 0;

      for(; i<registryLength; ++i) {
          record = globalSymbolRegistry[i];
          if (record.symbol === symbol)
              return record.key;
      }
  };

  /* It affects array1 and appends array2 at the end of array1 */
  var appendArray = function (array1, array2) {
      // Returns immediately if these are not array or not array-like objects
      if (!(typeof array1.length === "number" && array1.length >= 0 && typeof array2.length === "number" && array2.length >= 0))
          return;
      var length1 = Math.floor(array1.length),
          length2 = Math.floor(array2.length),
          i = 0;

      array1.length = length1 + length2;
      for (; i<length2; ++i)
          if (array2.hasOwnProperty(i))
              array1[length1 + i] = array2[i];
  };

  var es6ObjectPrototypeToString = function toString() {
      if (this === undefined || this === null)
          return objectToString.call(this);
      // Add support for @@toStringTag symbol
      if (typeof this[Symbol.toStringTag] === "string")
          return "[object " + this[Symbol.toStringTag] + "]";
      else
          return objectToString.call(this);
  };

  var es6ArrayPrototypeConcat = function concat() {
      if (this === undefined || this === null)
          throw new TypeError("Array.prototype.concat called on null or undefined");

      // Boxing 'this' value to wrapper object
      var self = Object(this),
          targets = slice.call(arguments),
          outputs = []; // Later it may affected by Symbol

      targets.unshift(self);

      targets.forEach(function (target) {
          // If target is primitive then just push
          if (!isObject(target))
              outputs.push(target);
          // Here Symbol.isConcatSpreadable support is added
          else if (typeof target[Symbol.isConcatSpreadable] !== "undefined") {
              if (target[Symbol.isConcatSpreadable]) {
                  appendArray(outputs, target);
              } else {
                  outputs.push(target);
              }
          } else if (isArray(target)) {
              appendArray(outputs, target);
          } else {
              outputs.push(target);
          }
      });
      return outputs;
  };

  var es6ForOfLoop = function (iterable, callback, thisArg) {
      callback = typeof callback !== "function" ? emptyFunction : callback;
      if (typeof iterable[Symbol.iterator] !== "function")
          throw new TypeError("Iterable[Symbol.iterator] is not a function");
      var iterator = iterable[Symbol.iterator](),
          iterationResult;
      if (typeof iterator.next !== "function")
          throw new TypeError(".iterator.next is not a function");
      while (true) {
          iterationResult = iterator.next();
          if (!isObject(iterationResult))
              throw new TypeError("Iterator result " + iterationResult + " is not an object");
          if (iterationResult.done)
              break;
          callback.call(thisArg, iterationResult.value);
      }
  };

  // Provides simple inheritance functionality
  var simpleInheritance = function (child, parent) {
      if (typeof child !== "function" || typeof parent !== "function")
          throw new TypeError("Child and Parent must be function type");

      child.prototype = Object.create(parent.prototype);
      child.prototype.constructor = child;
  };

  // Behaves as Symbol function in ES6, take description and returns an unique object,
  // but in ES6 this function returns 'symbol' primitive typed value.
  // Its type is 'object' not 'symbol'.
  // There is no wrapping in this case i.e. Object(sym) = sym.
  var Symbol = function Symbol(desc) {
      desc = typeof desc === "undefined" ? "" : String(desc);

      if(this instanceof Symbol)
          throw new TypeError("Symbol is not a constructor");

      return setupSymbolInternals(Object.create(Symbol.prototype), desc);
  };

  defineProperties(Symbol, {

      "for": {
          value: symbolFor,
          writable: true,
          configurable: true
      },

      "keyFor": {
          value: symbolKeyFor,
          writable: true,
          configurable: true
      },

      "hasInstance": {
          value: Symbol("Symbol.hasInstance")
      },

      "isConcatSpreadable": {
          value: Symbol("Symbol.isConcatSpreadable")
      },

      "iterator": {
          value: Symbol("Symbol.iterator")
      },

      "toStringTag": {
          value: Symbol("Symbol.toStringTag")
      }
  });

  // In ES6, this function returns like 'Symbol(<desc>)', but in this case
  // this function returns the symbol's internal name to work properly.
  Symbol.prototype.toString = function () {
      return generateSymbolName(this._id);
  };

  // Returns itself but in ES6 It returns 'symbol' typed value.
  Symbol.prototype.valueOf = function () {
      return this;
  };

  // Make Iterator like iterable
  defineProperty(Iterator.prototype, Symbol.iterator.toString(), {
      value: function () {return this;},
      writable: true,
      configurable: true
  });

  simpleInheritance(ArrayIterator, Iterator);

  simpleInheritance(StringIterator, Iterator);

  defineProperty(ArrayIterator.prototype, Symbol.toStringTag.toString(), {
      value: "Array Iterator",
      configurable: true
  });

  defineProperty(StringIterator.prototype, Symbol.toStringTag.toString(), {
      value: "String Iterator",
      configurable: true
  });

  // This iterator works on any Array or TypedArray or array-like objects
  ArrayIterator.prototype.next = function next() {
      if (!(this instanceof ArrayIterator))
          throw new TypeError("Method Array Iterator.prototype.next called on incompatible receiver " + String(this));

      var self = this,
          nextValue;

      if (self._nextIndex === -1) {
          return {
              done: true,
              value: undefined
          };
      }

      if (!(typeof self._array.length === "number" && self._array.length >= 0)) {
          self._nextIndex = -1;
          return {
              done: true,
              value: undefined
          };
      }

      // _flag = 1 for [index, value]
      // _flag = 2 for [value]
      // _flag = 3 for [index]
      if (self._nextIndex < Math.floor(self._array.length)) {
          if (self._flag === 1)
              nextValue = [self._nextIndex, self._array[self._nextIndex]];
          else if (self._flag === 2)
              nextValue = self._array[self._nextIndex];
          else if (self._flag === 3)
              nextValue = self._nextIndex;
          self._nextIndex++;
          return {
              done: false,
              value: nextValue
          };
      } else {
          self._nextIndex = -1;
          return {
              done: true,
              value: undefined
          };
      }
  };

  StringIterator.prototype.next = function next() {
      if (!(this instanceof StringIterator))
          throw new TypeError("Method String Iterator.prototype.next called on incompatible receiver " + String(this));

      var self = this,
          stringObject = new String(this._string),
          nextValue;

      if (self._nextIndex === -1) {
          return {
              done: true,
              value: undefined
          };
      }

      if (self._nextIndex < stringObject.length) {
          nextValue = stringObject[self._nextIndex];
          self._nextIndex++;
          return {
              done: false,
              value: nextValue
          };
      } else {
          self._nextIndex = -1;
          return {
              done: true,
              value: undefined
          };
      }
  };

  var es6ArrayPrototypeIteratorSymbol = function values() {
      if (this === undefined || this === null)
          throw new TypeError("Cannot convert undefined or null to object");

      var self = Object(this);
      return new ArrayIterator(self, 2);
  };

  var es6StringPrototypeIteratorSymbol = function values() {
      if (this === undefined || this === null)
          throw new TypeError("String.prototype[Symbol.iterator] called on null or undefined");
      return new StringIterator(String(this), 0);
  };

  var es6ArrayPrototypeEntries = function entries() {
      if (this === undefined || this === null)
          throw new TypeError("Cannot convert undefined or null to object");

      var self = Object(this);
      return new ArrayIterator(self, 1);
  };

  var es6ArrayPrototypeKeys = function keys() {
      if (this === undefined || this === null)
          throw new TypeError("Cannot convert undefined or null to object");
      var self = Object(this);
      return new ArrayIterator(self, 3);
  };

  var SpreadOperatorImpl = function (target, thisArg) {
      this._target = target;
      this._values = [];
      this._thisArg = thisArg;
  };
  // All the arguments must be iterable
  SpreadOperatorImpl.prototype.spread = function () {
      var self = this;
      slice.call(arguments).forEach(function (iterable) {
          ES6.forOf(iterable, function (value) {
              self._values.push(value);
          });
      });
      return self;
  };

  SpreadOperatorImpl.prototype.add = function () {
      var self = this;
      slice.call(arguments).forEach(function (value) {
          self._values.push(value);
      });
      return self;
  };

  SpreadOperatorImpl.prototype.call = function (thisArg) {
      if (typeof this._target !== "function")
          throw new TypeError("Target is not a function");
      thisArg = arguments.length <= 0 ? this._thisArg : thisArg;
      return this._target.apply(thisArg, this._values);
  };

  SpreadOperatorImpl.prototype.new = function () {
      if (typeof this._target !== "function")
          throw new TypeError("Target is not a constructor");

      var temp,
          returnValue;
      temp = Object.create(this._target.prototype);
      returnValue = this._target.apply(temp, this._values);
      return isObject(returnValue) ? returnValue : temp;
  };

  // Affects the target array
  SpreadOperatorImpl.prototype.array = function () {
      if (!isArray(this._target))
          throw new TypeError("Target is not a array");
      push.apply(this._target, this._values);
      return this._target;
  };

  // Target must be Array or function
  var es6SpreadOperator = function spreadOperator(target, thisArg) {
      if (!(typeof target === "function" || isArray(target)))
          throw new TypeError("Spread operator only supports on array and function objects at this moment");
      return new SpreadOperatorImpl(target, thisArg);
  };

  var es6ArrayFrom = function from(arrayLike, mapFn, thisArg) {
      var constructor,
          i = 0,
          length,
          outputs;
      // Use the generic constructor
      constructor = !isConstructor(this) ? Array : this;
      if (arrayLike === undefined || arrayLike === null)
          throw new TypeError("Cannot convert undefined or null to object");

      arrayLike = Object(arrayLike);
      if (mapFn === undefined)
          mapFn = simpleFunction;
      else if (!isCallable(mapFn))
          throw new TypeError(mapFn + " is not a function");

      if (typeof arrayLike[Symbol.iterator] === "undefined") {
          if (!(typeof arrayLike.length === "number" && arrayLike.length >= 0)) {
              outputs = new constructor(0);
              outputs.length = 0;
              return outputs;
          }
          length = Math.floor(arrayLike.length);
          outputs = new constructor(length);
          outputs.length = length;
          for(; i < length; ++i)
              outputs[i] = mapFn.call(thisArg, arrayLike[i]);
      } else {
          outputs = new constructor();
          outputs.length = 0;
          ES6.forOf(arrayLike, function (value) {
              outputs.length++;
              outputs[outputs.length - 1] = mapFn.call(thisArg, value);
          });
      }
      return outputs;
  };

  // Export ES6 APIs and add all the patches to support Symbol in ES5
  // If the running environment already supports ES6 then no patches will be applied,
  if (isES6Running())
      return ES6;
  else {

      // Some ES6 APIs can't be implemented in pure ES5, so this 'ES6' object provides
      // some equivalent functionality of these features.
      defineProperties(ES6, {

          // Checks if a JS value is a symbol
          // It can be used as equivalent api in ES6: typeof symbol === 'symbol'
          isSymbol: {
              value: isSymbol,
              writable: true,
              configurable: true
          },

          // Native ES5 'instanceof' operator does not support @@hasInstance symbol,
          // this method provides same functionality of ES6 'instanceof' operator.
          instanceOf: {
              value: es6InstanceOfOperator,
              writable: true,
              configurable: true
          },

          // This method behaves exactly same as ES6 for...of loop.
          forOf: {
              value: es6ForOfLoop,
              writable: true,
              configurable: true
          },

          // This method gives same functionality of the spread operator of ES6
          // It works on only functions and arrays.
          // Limitation: You can't create array like this [...iterable, , , , 33] by this method,
          // to achieve this you have to do like this [...iterable, undefined, undefined, undefined, 33]
          spreadOperator: {
              value: es6SpreadOperator,
              writable: true,
              configurable: true
          }
      });

      defineProperty(global, "Symbol", {
          value: Symbol,
          writable: true,
          configurable: true
      });

      defineProperty(Function.prototype, Symbol.hasInstance.toString(), {
          value: es6FunctionPrototypeHasInstanceSymbol
      });

      defineProperty(Array.prototype, "concat", {
          value: es6ArrayPrototypeConcat,
          writable: true,
          configurable: true
      });

      defineProperty(Object.prototype, "toString", {
          value: es6ObjectPrototypeToString,
          writable: true,
          configurable: true
      });

      defineProperty(Array.prototype, Symbol.iterator.toString(), {
          value: es6ArrayPrototypeIteratorSymbol,
          writable: true,
          configurable: true
      });

      defineProperty(Array, "from", {
          value: es6ArrayFrom,
          writable: true,
          configurable: true
      });

      defineProperty(Array.prototype, "entries", {
          value: es6ArrayPrototypeEntries,
          writable: true,
          configurable: true
      });

      defineProperty(Array.prototype, "keys", {
          value: es6ArrayPrototypeKeys,
          writable: true,
          configurable: true
      });

      defineProperty(String.prototype, Symbol.iterator.toString(), {
          value: es6StringPrototypeIteratorSymbol,
          writable: true,
          configurable: true
      });
  }

  return ES6;
});
  }
	
  if(!(w.WeakMap)){
  	w.WeakMap = (function() {
	    var defineProperty = Object.defineProperty;
	    var counter = (new Date()*1) % 1e9;
	    var WeakMap = function() {
	      this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
	    };
		
	    WeakMap.prototype = {
	      set: function(key, value) {
		var entry = key[this.name];
		if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
		  value: [ key, value ],
		  writable: true
		});
		return this;
	      },
	      get: function(key) {
		var entry;
		return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
	      },
	      "delete": function(key) {
		var entry = key[this.name];
		if (!entry || entry[0] !== key) return false;
		entry[0] = entry[1] = undefined;
		return true;
	      },
	      has: function(key) {
		var entry = key[this.name];
		if (!entry) return false;
		return entry[0] === key;
	      }
	    };

	     return WeakMap;
	})();
  }
	
  if((typeof w.MutationObserver !== "function" ) 
	  && attrModifiedMutationEventDoesntWork()){
      	var originalSetAttrmethod = HTMLElement.prototype.setAttribute;
	var originalremAttrmethod = HTMLElement.prototype.removeAttribute;
	  
	// Make Old Webkit Fire Mutation Event on attribute property setter calls
	
	var __id_setter = Object.prototype.__lookupSetter__.call(HTMLElement.prototype, 'id');
	var __class_setter = Object.prototype.__lookupSetter__.call(HTMLElement.prototype, 'className');
	
	Object.prototype.__defineSetter__.call(HTMLElement.prototype, 'id', function(newVal){
		var that = this;
		var prevVal = that.id;
	  
		w.setTimeout(function(){ // Stop [ DOMSubtreeModified ] event from firing before [ DOMAttrModified ] event
			__id_setter.call(this, newVal);
		},0);
		
		if (newVal != prevVal)
		  {
		    var evt = d.createEvent("MutationEvent");
		    evt.initMutationEvent(
		      "DOMAttrModified",
		      true,
		      false,
		      that,
		      prevVal || "",
		      newVal || "",
		      "id",
		      (prevVal == null) ? evt.ADDITION : evt.MODIFICATION
		    );

		    that.dispatchEvent(evt);
	  	}
	});
	  
	Object.prototype.__defineSetter__.call(HTMLElement.prototype, 'className', function(newVal){
		var that = this;
		var prevVal = that.className;
	  
		w.setTimeout(function(){ // Stop [ DOMSubtreeModified ] event from firing before [ DOMAttrModified ] event
			__class_setter.call(this, newVal);
		},0);
		
		if (newVal != prevVal)
		  {
		    var evt = d.createEvent("MutationEvent");
		    evt.initMutationEvent(
		      "DOMAttrModified",
		      true,
		      false,
		      that,
		      prevVal || "",
		      newVal || "",
		      "id",
		      (prevVal == null) ? evt.ADDITION : evt.MODIFICATION
		    );

		    that.dispatchEvent(evt);
	  	}
	});
	  
	// Old Webkit fix for [ setAttribute ] and [ removeAttribute ]
	HTMLElement.prototype.setAttribute = function(attrName, newVal){
	  var that = this;
	  var prevVal = that.getAttribute(attrName);

	  w.setTimeout(function(){ // Stop [ DOMSubtreeModified ] event from firing before [ DOMAttrModified ] event
		originalSetAttrmethod.call(that, attrName, newVal);
	  },0);

	  newVal = that.getAttribute(attrName);
	  if (newVal != prevVal)
	  {
	    var evt = d.createEvent("MutationEvent");
	    evt.initMutationEvent(
	      "DOMAttrModified",
	      true,
	      false,
	      that,
	      prevVal || "",
	      newVal || "",
	      attrName,
	      (prevVal == null) ? evt.ADDITION : evt.MODIFICATION
	    );
		  
	    that.dispatchEvent(evt);
	  }
	};
	  
	HTMLElement.prototype.removeAttribute = function(attrName){
		
	  var that = this;
	  var prevVal = that.getAttribute(attrName);
	  
	  w.setTimeout(function(){ // Stop [ DOMSubtreeModified ] event from firing before [ DOMAttrModified ] event
		originalremAttrmethod.call(that, attrName);
	  },0);
		
	  var evt = d.createEvent("MutationEvent");
	  evt.initMutationEvent(
	    "DOMAttrModified",
	    true,
	    false,
	    that,
	    prevVal,
	    "",
	    attrName,
	    evt.REMOVAL
	  );
	  this.dispatchEvent(evt);
	};
  }
	
  if (!w.performance) { // IE9 is a major culprit!!
    w.performance = (function(){
	    
	      /**
		* User Timing polyfill (http://www.w3.org/TR/user-timing/)
	 	* @author RubaXa <trash@rubaxa.org>
	 	*/
     
	     var
		  startOffset = Date.now ? Date.now() : +(new Date)
		, performance = w.performance || {}

		, _entries = []
		, _marksIndex = {}

		, _filterEntries = function (key, value){
			var i = 0, n = _entries.length, result = [];
			for( ; i < n; i++ ){
				if( _entries[i][key] == value ){
					result.push(_entries[i]);
				}
			}
			return	result;
		}

		, _clearEntries = function (type, name){
			var i = _entries.length, entry;
			while( i-- ){
				entry = _entries[i];
				if( entry.entryType == type && (name === void 0 || entry.name == name) ){
					_entries.splice(i, 1);
				}
			}
		}
	;


	if( !performance.now ){
		if ( performance.timing && performance.timing.navigationStart ) {
			startOffset = performance.timing.navigationStart || startOffset;
		}
		
		performance.now = performance.webkitNow || performance.mozNow || performance.msNow || function (){
			return (Date.now ? Date.now() : +(new Date)) - startOffset;
		};
	}
	    
	
	if(!w.PerformanceNavigation){

		  function PerformanceNavigation(type, redirectCount){
		     this.type = type;
		     this.redirectCount = redirectCount;

		     this.TYPE_BACK_FORWARD = 2;
		     this.TYPE_NAVIGATE = 0;
		     this.TYPE_RELOAD = 1;
		     this.TYPE_RESERVED = 255;
		  }

		  PerformanceNavigation.prototype.toJSON = function(){
		    return { type: this.type, redirectCount: this.redirectCount };
		  };

	}

	if(!w.performance.navigation){
	  try{
	     w.performance.navigation = new PerformanceNavigation(0, 0);
	     w.performace.navigation.__polyfill = true;
	  }catch(ex){}
	}
	    
	if( !performance.mark ){
		performance.mark = performance.webkitMark || function (name){
			var mark = {
				  name:	name
				, entryType: 'mark'
				, startTime: performance.now()
				, duration: 0
			};
			_entries.push(mark);
			_marksIndex[name] = mark;
		};
	}


	if( !performance.measure ){
		performance.measure = performance.webkitMeasure || function (name, startMark, endMark){
			startMark	= _marksIndex[startMark].startTime;
			endMark		= _marksIndex[endMark].startTime;

			_entries.push({
				  name:	name
				, entryType: 'measure'
				, startTime: startMark
				, duration: endMark - startMark
			});
		};
	}


	if( !performance.getEntriesByType ){
		performance.getEntriesByType = performance.webkitGetEntriesByType || function (type){
			return _filterEntries('entryType', type);
		};
	}


	if( !performance.getEntriesByName ){
		performance.getEntriesByName = performance.webkitGetEntriesByName || function (name){
			return _filterEntries('name', name);
		};
	}


	if( !performance.clearMarks ){
		performance.clearMarks = performance.webkitClearMarks || function (name){
			_clearEntries('mark', name);
		};
	}


	if( !performance.clearMeasures ){
		performance.clearMeasures = performance.webkitClearMeasures || function (name){
			_clearEntries('measure', name);
		};
	}


	return performance;
     
     }());
  }
	
  if (!w.requestAnimationFrame) {
    w.requestAnimationFrame = function() {
      var nativeRaf = w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame;
      return nativeRaf ? function(callback) {
        return nativeRaf(function() {
          callback(w.performance.now());
        });
      } : function(callback) {
        return w.setTimeout(callback, 1e3 / 60);
      };
    }();
  }
  if (!w.cancelAnimationFrame) {
    w.cancelAnimationFrame = function() {
      return w.webkitCancelAnimationFrame || w.mozCancelAnimationFrame || function(id) {
        	w.clearTimeout(id);
      };
    }();
  }
  var workingDefaultPrevented = function() {
    var e = d.createEvent("Event");
    e.initEvent("foo", true, true);
    e.preventDefault();
    return e.defaultPrevented;
  }();
  if (!workingDefaultPrevented) {
    var origPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function() {
      if (!this.cancelable) {
        return;
      }
      origPreventDefault.call(this);
      Object.defineProperty(this, "defaultPrevented", {
        get: function() {
          return true;
        },
        configurable: true
      });
    };
  }
	
  if(typeof n.sendBeacon !== 'function' 
     	&& !isBeaconAPISupported()){
  	var _sendBeacon = (function(url, data){
		
		var event = this.event && this.event.type;
	  	var sync = (event === 'unload' || event === 'beforeunload');

	  	var xhr = ('XMLHttpRequest' in this) 
		? new XMLHttpRequest() 
		: ('XDomainRequest' in this) ? new XDomainRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	  	
		xhr.open('POST', url, !sync);
	  	xhr.withCredentials = true;
	  	xhr.setRequestHeader('Accept', '*/*');
		
		xhr.timeout = 0
		xhr.ontimeout = function(){};

	  	if (isString(data)) {
	    	   xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
		   xhr.responseType = 'text/plain';
	  	} else if (isBlob(data) && data.type) {
		    xhr.setRequestHeader('Content-Type', data.type);
	  	}

	  	try {
		    xhr.send(data);
	  	} catch (error) {
		    return false;
	  	}

		return true;
	}).bind(w);

	if(String(n.constructor).indexOf("Navigator()") + 1){
		n.constructor.prototype.sendBeacon = _sendBeacon;
	}else{
		n.sendBeacon = _sendBeacon;
	}
  }
	
 (function(hasMutationEvent) {
  if (!hasMutationEvent || w.JsMutationObserver) {
    return;
  }

  var registrationsTable = new WeakMap();
  var setImmediate;
  if (w.isTrident_IE) {
    setImmediate = setTimeout;
  } else if (w.setImmediate) {
    setImmediate = w.setImmediate;
  } else {
    var setImmediateQueue = [];
    var sentinel = String(Math.random());
    w.addEventListener("message", function(e) {
      if (e.data === sentinel) {
        var queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(function(func) {
          func();
        });
      }
    });
    setImmediate = function(func) {
      setImmediateQueue.push(func);
      w.postMessage(sentinel, "*");
    };
  }
  var isScheduled = false;
  var scheduledObservers = [];
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }
  function wrapIfNeeded(node) {
    return false; // w.ShadowDOMPolyfill && w.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
  }
  function dispatchCallbacks() {
    isScheduled = false;
    var observers = scheduledObservers;
    scheduledObservers = [];
    observers.sort(function(o1, o2) {
      return o1.uid_ - o2.uid_;
    });
    var anyNonEmpty = false;
    observers.forEach(function(observer) {
      var queue = observer.takeRecords();
      removeTransientObserversFor(observer);
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });
    if (anyNonEmpty) dispatchCallbacks();
  }
  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach(function(node) {
      var registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach(function(registration) {
        if (registration.observer === observer) registration.removeTransientObservers();
      });
    });
  }
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);
      if (registrations) {
        for (var j = 0; j < registrations.length; j++) {
          var registration = registrations[j];
          var options = registration.options;
          if (node !== target && !options.subtree) continue;
          var record = callback(options);
          if (record) registration.enqueue(record);
        }
      }
    }
  }
  var uidCounter = 0;
  function JsMutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
  }
  JsMutationObserver.prototype = {
    observe: function(target, options) {
      target = wrapIfNeeded(target);
      if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
        throw new SyntaxError();
      }
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, registrations = []);
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }
      registration.addListeners();
    },
    disconnect: function() {
      this.nodes_.forEach(function(node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords: function() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function copyMutationRecord(original) {
    var record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  }
  var currentRecord, recordWithOldValue;
  function getRecord(type, target) {
    return currentRecord = new MutationRecord(type, target);
  }
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue) return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }
  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord) return lastRecord;
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
    return null;
  }
  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }
  Registration.prototype = {
    enqueue: function(record) {
      var records = this.observer.records_;
      var length = records.length;
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    },
    addListeners: function() {
      this.addListeners_(this.target);
    },
    addListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
    },
    removeListeners: function() {
      this.removeListeners_(this.target);
    },
    removeListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
    },
    addTransientObserver: function(node) {
      if (node === this.target) return;
      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, registrations = []);
      registrations.push(this);
    },
    removeTransientObservers: function() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function(node) {
        this.removeListeners_(node);
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
    },
    handleEvent: function(e) {
      e.stopImmediatePropagation();
      switch (e.type) {
       case "DOMAttrModified":
        var name = e.attrName;
        var namespace = e.relatedNode.namespaceURI;
        var target = e.target;
        var record = new getRecord("attributes", target);
        record.attributeName = name;
        record.attributeNamespace = namespace;
        var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.attributes) return;
          if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
            return;
          }
          if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMCharacterDataModified":
        var target = e.target;
        var record = getRecord("characterData", target);
        var oldValue = e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.characterData) return;
          if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMNodeRemoved":
        this.addTransientObserver(e.target);

       case "DOMNodeInserted":
        var changedNode = e.target;
        var addedNodes, removedNodes;
        if (e.type === "DOMNodeInserted") {
          addedNodes = [ changedNode ];
          removedNodes = [];
        } else {
          addedNodes = [];
          removedNodes = [ changedNode ];
        }
        var previousSibling = changedNode.previousSibling;
        var nextSibling = changedNode.nextSibling;
        var record = getRecord("childList", e.target.parentNode);
        record.addedNodes = addedNodes;
        record.removedNodes = removedNodes;
        record.previousSibling = previousSibling;
        record.nextSibling = nextSibling;
        forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
          if (!options.childList) return;
          return record;
        });
      }
      clearRecords();
    }
  };
  w.JsMutationObserver = JsMutationObserver;
  if (!w.MutationObserver) {
    w.MutationObserver = JsMutationObserver;
    JsMutationObserver._isPolyfilled = true;
  }
})((typeof this.MutationEvent == "function"));
	
  if(!w.Storage){
	  w.Storage = function () {};
  }
	
  if( !w.Storage.prototype.hasKey ) {
	  w.Storage.prototype.hasKey = function(key){
		return !!this[key];
	  };
  }
	
}(this, this.document, this.navigator));

;(function(w){

  var $proxyHandler = {
      get:function(target, name, receiver){
          if(typeof target[name] !== 'function'){
              switch(name){
                  case 'config':
                      return target['getConfig']();
                  break;
                  case 'typeForms':
                      return target['getTypeForms']();
                  break;
                  case 'registerPolicySanitizer':
                      return target['setPolicyRegistration'].bind(target);
                  break;
              }
          }
      },
      set:function(target, name, value, receiver){
          if(typeof target[name] !== 'function'){
              switch(name){
                case 'config':
                  target['setConfig'](value || {});
                break;
              }
          }
      }
  };
  var $registrations = {
      html:{},
      url:{}
  };
  
  function BaseTrustedType(baseDefaults){
  
      var _confset = false
      var _config = Object.assign({}, {throwErrors:true, reportViolation: false}, baseDefaults.baseConfig);
      var _typeForms = baseDefaults.typeForms
  
      this.baseDefaults = baseDefaults
  
      this.getTypeForms = function(){
          return _typeForms;
      };
  
      this.setTypeForms = function(){
          _typeForms = this.typeForms.concat([].slice.call(arguments));
      };
  
      this.getConfig = function(){
          return _config
      };

      this.setConfig = function(newConfig){
        if(_confset === false){
          _config = Object.assign({}, this.config, newConfig);
          _confset = true;
        }else{
          throw new TrustedTypesError("Operation not allowed")
        }
      };
  
      this.setPolicyRegistration = function(policyName, policyHook){
          if(typeof policyHook !== 'function' 
              || typeof policyName !== 'string'){
                  return false;
          }
          
          if(!!$registrations[this.type][policyName]){
            throw new TrustedTypesError("Operation not allowed")
          }else{
            $registrations[this.type][policyName] = {
                trustedType:this, // this.typeForms, this.config, this.type
                sanitizerFn:policyHook(this)
            }
          }
      };
  
      /*this.destroyPolicy = function(){
          $registrations[this.type] = {}
      };*/
  
      return new Proxy(this, $proxyHandler)
  }
  
  BaseTrustedType.prototype.addTypeForm = function(){
      this.setTypeForms.apply(
          this,
          [].slice.call(arguments)
      );
  };
  
  
  function HTMLTrustedWebType(baseDefaults) {
  
      baseDefaults.baseConfig = {blockIncludes:true}
  
      BaseTrustedType.call(this, baseDefaults)
  
      this.type = 'html'
  
      return (this instanceof HTMLTrustedWebType ? this : new HTMLTrustedWebType(baseDefaults))
  }
  
  HTMLTrustedWebType.prototype = Object.create(BaseTrustedType.prototype)
  
  function URLTrustedWebType(baseDefaults){
  
      baseDefaults.baseConfig = {blockNavigation:true}
  
      BaseTrustedType.apply(this, baseDefaults)
  
      this.type = 'url'
  
      return (this instanceof URLTrustedWebType ? this : new URLTrustedWebType(baseDefaults))
  }
  
  URLTrustedWebType.prototype = Object.create(BaseTrustedType.prototype)
  
  w.TrustedWebTypes = {
      createTypesForm:function(){
  	throw new Error('Illegal Invocation: Cannot call `typeForms` factory');
      },
      get htmlRegistrations (){
          return $registrations['html'];
      },
      get urlRegistrations (){
          return $registrations['url'];
      },
      get typeforms(){
          return {html:[w.String], url:[w.String, w.URL]};
      },
      get URL(){
          return new URLTrustedWebType({typeForms:this.typeforms['url']})
      },
      get HTML(){
          return new HTMLTrustedWebType({typeForms:this.typeforms['html']})
      }
  };
  
  w.TrustedWebTypesError = function(message){
      this.name = 'TrustedWebTypesError'
      Error.apply(this, message);
  
      return this;
  };
  
  w.TrustedWebTypesError.prototype = Object.create(Error.prototype);
  
  }(this));



;(function (w, d, n, c, l, h) {
	
// https://reporting.codesplinta.co/events?for=load&type=ui-event
// https://reporting.codesplinta.co/events?for=unload&type=ui-event

var _hiddenDocSupported = ('hidden' in d || 'mozHidden' in d || 'msHidden' in d || 'webkitHidden' in d);
	
var getPageEventId = function () {
   return (Math.floor(Math.random() * 10000000000)).toString(16).substring(0, 8);
}

var getPageState = function () {
  var hidden = _hiddenDocSupported && (d.hidden || d.mozHidden || d.msHidden || d.webkitHidden);
  if (hidden || d.visibilityState === 'hidden') {
    return 'hidden';
  }
  if (d.hasFocus() || d.activeElement !== null) {
    return 'active';
  }
	
  return 'visible';
};
	
var perf = w.performance;
var jsHeapUsed = perf.memory && perf.memory.usedJSHeapSize;
var jsHeapTotal = perf.memory && perf.memory.totalJSHeapSize;
	
Object.defineProperty(d, 'referredFrom', {
	writable: false,
	value: function(){ 
		return w.CODE_SPLINTA.formTracked('last_loaded_url');
	}
});
	
/** 
 * The code below was culled from: https://www.honeycomb.io/blog/instrumenting-browser-page-loads-at-honeycomb/
 * and was adapted and modified to CODE SPLINTA
 */

var pageLoadEvent = function(pageEventName, browserFingerPrint, pageLastNav) {
  var nt = perf.timing;
  var xt = perf.navigation;
	
  var event = {
    type: pageEventName,
    page_event_id: getPageEventId(),
    agent_fp: browserFingerPrint,
    page_state: getPageState(),
    page_prior_nav: d.referrer || d.referredFrom,
    page_last_nav: pageLastNav,
    page_nav_type: xt.type == 0 ? 'browser_reload' : (xt.type === 2 ? 'browser_back_forward' : 'browser_relocate'),
    // Network status
    network_status: n.onLine,
    // User agent Data. We can parse the user agent into device, os name, os version,
    // browser name, browser engine, and browser version fields if we want to later.
    browser_ua_data: w.webpage,
    // Current window size & screen size stats
    // We use a derived column in Honeycomb to also be able to query window
    // total pixels and the ratio of window size to screen size. That way we
    // can understand whether users are making their window as large as they can
    // to try to fit CodeSplinta content on screen, or whether they find a smaller
    // window size more comfortable.
    //
    // Capture how large the user has made their current window
    viewport_height: w.innerHeight,
    viewport_width: w.innerWidth,
    viewport_scroll_y: w.pageYOffset,
    viewport_scroll_x: w.pageXOffset,
    // Capture how large the user's entire screen is
    screen_height: w.screen && w.screen.height || w.outerHeight,
    screen_width: w.screen && w.screen.width || w.outerWidth,
    // Chrome-only (for now) information on internet connection type (4g, wifi, etc.)
    // https://developers.google.com/web/updates/2017/10/nic62
    connection_type: n.connection && n.connection.type,
    connection_type_effective: n.connection && n.connection.effectiveType,
    connection_rtt: n.connection && n.connection.rtt,
    // Navigation (page load) timings, transformed from timestamps into deltas
    timing_unload_ms: nt.unloadEventEnd - nt.navigationStart - 3600,
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
  // First paint data via PerformancePaintTiming (Chrome only for now)
  var hasPerfTimeline = !!perf.getEntriesByType;
	
  if (hasPerfTimeline) {
    // Chrome Only (non-standard) - @TODO: polyfill for other browsers	    
    var paints = perf.getEntriesByType("paint") || [];
    // Loop through array of two PerformancePaintTimings and send both
    paints.forEach(function(paint) {
      if (paint.name === "first-paint") {
        event.timing_ms_first_paint = paint.startTime;
      } else if (paint.name === "first-contentful-paint") {
        event.timing_first_contentful_paint_ms = paint.startTime;
      }
    });
  }
	
  // Memory Info (Chrome) — also send this on unload so we can compare heap size
  // and understand how much memory we're using as the user interacts with the page
  
  if (perf.memory) {
	var memoryInfo = {};
    
	memoryInfo.js_heap_size_total_b = jsHeapTotal;
    	memoryInfo.js_heap_size_used_b = jsHeapUsed;
	  
	event.memoryInfo = memoryInfo;
  }
	
  // Redirect count (inconsistent browser support)
  // Find out if the user was redirected on their way to landing on this page,
  // so we can have visibility into whether redirects are slowing down the experience
  event.redirect_count = perf.navigation.redirectCount;
  
  // ResourceTiming stats
  // We don't care about getting stats for every single static asset, but we do
  // care about the overall count (e.g. which pages could be slow because they
  // make a million asset requests?) and the sizes of key files (are we sending
  // our users massive js files that could slow down their experience? should we
  // be code-splitting for more manageable file sizes?).
  if (hasPerfTimeline) {
    var resources = perf.getEntriesByType(
      "resource",
    );
	  
    event.resource_count = resources.length;
    // Loop through resources looking for ones that match tracked asset names
    resources.forEach(function(resource) {
      var resourceNames = resource.name.split("/");
      var resourceName = resourceNames[resourceNames.length - 1];
	    
      if (
        (resourceName.startsWith("main.") || resourceName.startsWith("main-"))  &&
        ((resourceName.search(/\.(?:(?:[0-9a-f]+\.)chunk\.)?js$/) || resourceName.search(/-(?:[0-9a-f]+)\.js$/)) !== -1)
      ) {
        // // Don't put chars like . and / in the key name
        var name = !!(resourceName.indexOf('chunk') + 1) ? "main_chunk_js" : "main_js";
        event['resource_' + name + '_encoded_size_kb'] = resource.encodedBodySize;
        event['resource_' + name + '_decoded_size_kb'] = resource.decodedBodySize;
        event['resource_' + name + '_timing_duration_ms'] =
          resource.responseEnd - resource.startTime;
      } else if (
        (resourceName.startsWith("main.") || resourceName.startsWith("main-")) &&
        ((resourceName.search(/\.(?:(?:[0-9a-f]+\.)chunk\.)?css$/) || resourceName.search(/-(?:[0-9a-f]+)\.css$/)) !== -1)
      ) {
        // // Don't put chars like . and / in the key name
        var name = !!(resourceName.indexOf('chunk') + 1) ? "main_chunk_css" : "main_css";
        event['resource_' + name + '_encoded_size_kb'] = resource.encodedBodySize;
        event['resource_' + name + '_decoded_size_kb'] = resource.decodedBodySize;
        event['resource_' + name + '_timing_duration_ms'] =
          resource.responseEnd - resource.startTime;
      }
    });
  }
	
  return event;
};

var browserFingerPrintOptions = {
        excludes: {
        plugins: true,
        localStorage: true,
        adBlock: true,
        screenResolution: true,
        availableScreenResolution: true,
        enumerateDevices: true,
        pixelRatio: true,
        doNotTrack: true,
	touchSupport: true,
	canvas: true
    },
    preprocessor: (key, value) => {
       if (key === 'userAgent') {
          return n.userAgent;
       }
       return value;
    }
};

var $onLoad = w.onload;
// Send this wide event we've constructed after the page has fully loaded
w.onload = function (e) {
  // Wait a tick so this all runs after any onload handlers
  w.setTimeout(function() {
	if (l.protocol.indexOf('https') !== 0) { 
   		return false;
   	}
	  
	w.CODE_SPLINTA.track('last_loaded_url', d.URL);
	  
        Fingerprint2.getPromise(browserFingerPrintOptions).then(function (components) {
 		w.CODE_SPLINTA.browser_fp = String(
			Fingerprint2.x64hash128(
				components.map(
					function(component) { return component.value; }
				).join(''), 
				31
			)
		);
		
		var loadEvent = pageLoadEvent(
			'load', 
			w.CODE_SPLINTA.browser_fp,
			d.URL
		);

		// add all tracked data for the current page view session
  		loadEvent.extras = JSON.parse(w.name || '{}');
  		w.name = "";
		
       		// Sends the event to our servers for forwarding 
		// on to https://reporting.codesplinta.co/events
    		return w.CODE_SPLINTA.ping(
			loadEvent
		);
        });
  }, 500);
	
  if (typeof $onLoad === 'function' && typeof e.trigger === 'undefined') {
      $onLoad(e);
  }
});	
	
// Capture a _count_ of errors that occurred while interacting with this page.
// We use an error monitoring service (TrackJS) as the source of truth for
// information about errors, but this lets us cross-reference and ask questions
// like, "are we ever failing to report errors to TrackJS?" and "was this user's
// experience on this page potentially impacted by JS errors?"
var $oldOnError = w.onerror;
var errorCount = 0;
w.onerror = function (errorMsg) {
  var args = [].slice.call(arguments);

  if (errorMsg.indexOf('Script error.') > -1) {
    // we must not record the usual cryptic 'script errors'
    return;
  }
  // call any previously defined onError handlers
  if ( typeof $oldOnError === 'function' ) {
     $oldOnError.apply(this, args);
  }
	
  errorCount++;
};

/** 
 * The code below was culled from: https://www.honeycomb.io/blog/instrumenting-browser-page-loads-at-honeycomb/
 * and was adapted and modified to CODE SPLINTA
 */

// Returns a wide event of perf/client stats to send to CodeSplinta
var pageActivityEvent = function(pageEventName, browserFingerPrint, pageLastNav, activityName, eventMetaData) {
  // Capture how long the user kept this window or tab open for
  var openDuration =
    ((Date.now ? Date.now() : +(new Date)) - perf.timing.connectStart) / 1000;
	
  var event = {
    type: pageEventName,
    page_event_id: getPageEventId(),
    activity_name: activityName,
    agent_fp: browserFingerPrint,
    page_state: getPageState(),
    page_prior_nav: d.URL,
    page_last_nav: pageLastNav,
    // Chrome-only (for now) information on internet connection type (4g, wifi, etc.)
    // https://developers.google.com/web/updates/2017/10/nic62
    connection_type: n.connection && n.connection.type,
    connection_type_effective: n.connection && n.connection.effectiveType,
    connection_rtt: n.connection && n.connection.rtt,
    online: n.onLine,
    timestamp: (Date.now ? Date.now() : +(new Date))
  };
	
  // Memory Info (Chrome) — also send this on load so we can compare heap size
  // and understand how much memory we're using as the user interacts with the page.

  if (perf.memory) {
	  
    var memoryInfo = {};
	  
    memoryInfo.js_heap_size_used_start_b = jsHeapUsed;
    memoryInfo.js_heap_size_total_b = perf.memory.totalJSHeapSize;
    memoryInfo.js_heap_size_used_b = perf.memory.usedJSHeapSize;
    memoryInfo.js_heap_change_b = perf.memory.usedJSHeapSize - jsHeapUsed;

    event.memoryInfo = memoryInfo;
  }
	
  if( pageEventName === 'unload' ) {
  	event.user_timing_window_open_duration_s = openDuration;
	event.error_count = errorCount;
  }
	
  event.metadata = eventMetaData || null;
	
  return event;
};
	
var Page = {
   isMobile: function(){
   	return (n.userAgent.match(/[^-]mobi|mobile/i) && (w.screen.width < 768) && (w.screen.width / w.pixelDensity) < 768);
   },
   isTablet: function(){
   	return false;
   },
   isDesktop: function(){
      	return (((~~w.pixelDensity) <= 1) && (w.screen.width >= 1024 && (w.screen.width <= 1920 || !this.isTV())) && !(this.isTablet()));
   },
   isTV: function() {
	return ((~~w.pixelDensity) == 1.5) && (w.screen.width > 1920);
   },
   isTouchCapable: function(){
	return ('ontouchstart' in w)  || ((n.maxTouchPoints || n.msMaxTouchPoints || 1) === 10) || (w.operamini && w.operamini.features.touch) || ('onmsgesturechange' in w);
   }
}
	
var delay = function (timeout) {
    var now, until = (
	 (typeof timeout === 'number') && !Number.isNaN(timeout)
	) ? +(new Date) + timeout
	  : 0;

     // lock browser until delay period is met
     if (until) {
	do {
	     now = new Date();
	} while (now.getTime() < until);
     }

     return true;
};

var getNavDirection = function (navStack, lastLoadedURL) {
    // One of backward (-1), reload (0), inload (-9) and forward (1)
    var direction = -9;
    // The current URL on browser page
    var docURL = d.location.href;
    // temporary "auxillary" stack object to aid page nav logic
    var auxStack = [];
    // Take note of the intial state of the "navigation" stack
    var wasNavStackEmpty = navStack.length === 0;
	
    if(!wasNavStackEmpty) {
	    auxStack.push(
		navStack.pop()
	    );
    } else {
    	auxStack.push(docURL);
    }
	
    // Check top of the "navigation" stack
    if (docURL === navStack[navStack.length - 1]) {
    	direction = -1; // Back
    } else {
	// Check top of the "auxillary" stack
     	if (lastLoadedURL === auxStack[auxStack.length -1]) {
		if (lastLoadedURL === docURL) {
          		if (wasNavStackEmpty) {
				direction = -9; // InLoad
			} else {
				direction = 0; // Reload
			}
		} else {
	    		direction = 1; // Forward
		}
	}
    }
	
    if (direction !== -1) {
    	if(auxStack.length){
		navStack.push(
			auxStack.pop()
	    	);
	}

	auxStack = null;
	    
	navStack.push(docURL);
    } 
    
    // return the direction of navigation
    return direction;
}

if (typeof w.History === 'function') {
	w.History.prototype.spaNavigationStack = [];
	
	var __replaceState = w.History.prototype.replaceState;
	
	w.History.prototype.replaceState = function() {
	   var args = [].slice.call(arguments);
		
	   // more code here...
		
	   return __replaceState.apply(this, args);
	};
	
	var __pushState = w.History.prototype.pushState;

	w.History.prototype.pushState = function() {
	    var args = [].slice.call(arguments);
	    var url = arguments[2];
	    var newURL = ((url.indexOf('http') === 0 ? url : w.location.origin + url) || '').toString();
	    var oldURL = d.URL;
	    var isProperNav = oldURL !== newURL;

	    if(perf.navigation.__polyfill){
	       if(perf.navigation.type === perf.navigation.TYPE_BACK_FORWARD) {	    
	       	   perf.navigation.type = isProperNav 
				? perf.navigation.TYPE_NAVIGATE 
		   		: perf.navigation.TYPE_RELOAD;
	 	}
	    }

	    if(isProperNav){
		w.CODE_SPLINTA.track('last_loaded_url', newURL);
	       	w.onbeforeunload({
		  srcDocument: d, 
		  currentTarget: w,
		  type: 'beforeunload', 
		  trigger: 'spa-nav', 
		  context: {
		  	oldURL: oldURL, 
		  	newURL: newURL
		  }
	       });
	    }
		
	    w.setTimeout(function(){ 
		    w.onpageshow({ 
			    presisted: false, 
			    trigger: 'pushState' 
		    }); 
	    }, 0); 

	    return __pushState.apply(this, args);
	};
}
	
w.onpageshow = function(e) {
   	w.CODE_SPLINTA.track('page_cached', e.persisted);
	
	if(typeof e.trigger !== 'undefined'){
		w.onload({
			trigger: e.trigger,
			type: 'load'
		});
	}
};
	
w.onhashchange = function (e){
   var isProperNav = e.oldURL !== e.newURL;

   if(perf.navigation.__polyfill){
	perf.navigation.type = isProperNav 
		? perf.navigation.TYPE_NAVIGATE 
		: perf.navigation.TYPE_RELOAD;
   }
	
   w.CODE_SPLINTA.track('last_loaded_url', e.newURL);

   w.onbeforeunload({ 
	srcDocument: d, 
	currentTarget: w, 
	type: "beforeunload", 
	trigger: e.type, 
	context: {
	   target: e.target.target,
	   oldURL: e.oldURL, 
	   newURL: e.newURL 
	} 
   });
}

w.onpopstate = function(e) {
  var navDirection = getNavDirection(
  	w.history.spaNavigationStack || [],
	w.CODE_SPLINTA.fromTracked('last_loaded_url')
  );
	
  w.CODE_SPLINTA.track('page_nav_direction', navDirection);

  w.setTimeout(function(){ 
	w.onpageshow({ presisted: false, trigger: 'popState' }); 
  }, 0); 
	
  if(w.performace.navigation.__polyfill){
       w.performance.navigation.type = 2;
  }
};
	
function throttle(fn, delay, limitDelay, getLastMarkVar) {
  var timeout = null;
  var isRunning = false;
  var lastRan = 0;
  var lastMarkVariable = getLastMarkVar();

  return function throttledFn() {
    w.clearTimeout(timeout);
    var ctx = this;
    var args = Array.prototype.slice.call(arguments);

    timeout = w.setTimeout(function callThrottledFn() {
      if (!isRunning) {
        if ((Date.now() - lastRan) >= limitDelay) {
           isRunning = true;
           fn.apply(ctx, args.concat([lastMarkVariable]));
	   lastMarkVariable = getLastMarkVar();
           lastRan = Date.now();
        }
        isRunning = false;
      }
    }, delay);
  }
};	
	
var onScrollThrottled = throttle(function(e, initialPageOffsetY){
   var lastActivatedNode = (e.explicitOriginalTarget // old/new Firefox
				|| (e.srcDocument && e.srcDocument.activeElement) // old Chrome/Safari
					|| (e.currentTarget && e.currentTarget.document.activeElement) 
				 		|| d.activeElement || { href: '' }); // Cross-Browser
	
   var lastNav = getPageState() !== 'active' ? d.URL : lastActivatedNode.href || w.CODE_SPLINTA.fromTracked('last_loaded_url');
   var currentPageOffsetY = w.scrollY || w.pageYOffset;

   // while there is still room to scroll the page	
   if (d.body.clientHeight > w.innerHeight) {
     // and... the scrollbar of the page hasn't reached the end
     if ((w.innerHeight + currentPageOffsetY) < d.body.scrollHeight) {
        w.CODE_SPLINTA.track(
			'ui-event',
			pageActivityEvent(
				'activity', 
				w.CODE_SPLINTA.browser_fp,
				lastNav,
				'doc_scroll',
				{last_scroll_pos: initialPageOffsetY, curr_scroll_pos: currentPageOffsetY}
			),
			true
	);
     }
   }
}, 300, 2100, function() { return (w.scrollY || w.pageYOffset); });

w.onscroll = d.onmousewheel = onScrollThrottled;
	
var onPointerPressed = function (e) {
	var lastActivatedNode = (e.explicitOriginalTarget // old/new Firefox
				|| (e.srcDocument && e.srcDocument.activeElement) // old Chrome/Safari
					|| (e.currentTarget && e.currentTarget.document.activeElement) 
				 		|| d.activeElement || {href: ''}); // Cross-Browser
	var srcElement = e.target;
	var compStyle = w.getComputedStyle(srcElement);
	var boundingRect = srcElement.getBoundingClientRect();
	var rect = {
	   left: boundingRect.x + compStyle.getPropertyValue('padding-left'),
	   top: boundingRect.y + compStyle.getPropertyValue('padding-top'),
	   width: boundingRect.width - (compStyle.getPropertyValue('padding-left') + compStyle.getPropertyValue('padding-right')),
	   height: boundingRect.height - (compStyle.getPropertyValue('padding-top') + compStyle.getPropertyValue('padding-bottom'))
	};
   	var lastNav = getPageState() !== 'active' ? d.URL : lastActivatedNode.href || w.CODE_SPLINTA.fromTracked('last_loaded_url');
	
	var action = "clicking";

	  switch(e.pointerType) {
	    case "mouse":
	      action = "clicking";
	      break;
	    case "pen":
	      action = "tapping";
	      break;
	    case "touch":
	      action = "touching";
	      break;
	    default:
	      action = "interacting with";
	      break;
	  }
	
	w.CODE_SPLINTA.track(
			'ui-event',
			pageActivityEvent(
				'activity', 
				w.CODE_SPLINTA.browser_fp,
				lastNav,
				'doc_click',
				{ page_user_action_elem_rectarea: rect, page_user_action_elem_idclass: srcElement.id + srcElement.className, page_user_action: action }
			),
			true
	);
	
	if(srcElement.tagName === 'A'){
			
	       var oldURL = d.URL;
	       var newURL = srcElement.href;
	       var isProperNav = oldURL !== newURL;

	       if(perf.navigation.__polyfill){
		  perf.navigation.type = isProperNav ? 0 : 1;
	       }
		
	       w.CODE_SPLINTA.track('last_loaded_url', newURL);
		
	      if(isProperNav 
		   	&& newURL.indexOf('#') > -1){
		   // Allow the 'hashchange' event to deal with triggering
		   // the 'onbeforeunload' event by returning control here
		   return; 
		}

	       w.onbeforeunload({ 
		   srcDocument: d, 
		   currentTarget: w,
		   type: 'beforeunload', 
		   trigger: e.type, 
		   context: {
			target: e.target.target,
			download: e.target.download,
			actio: action,
		   	oldURL: oldURL, 
		   	newURL: newURL
		   }
	       }); 
       } 
	
       // e.preventDefault()
};
	
if (Page.isTouchCapable() || !Page.isDesktop()) {
  if (Page.isMobile() || Page.isTablet()) {
	d.onpointerdown = onPointerPressed;
  } else {
	if (typeof w.msCrypto !== 'undefined' || typeof ({}) !== 'undefined') {
	  w.onmspointerdown = onPointerPressed;
	} else {
	  w.onpointerdown = onPointerPressed;
	}
  	// d.onclick = onPointerPressed;
  }
} else {
  d.onclick = onPointerPressed;
}
	
w.onresize = throttle(function (e) {
	var lastActivatedNode = (e.explicitOriginalTarget // old/new Firefox
				|| (e.srcDocument && e.srcDocument.activeElement) // old Chrome/Safari
					|| (e.currentTarget && e.currentTarget.document.activeElement) 
				 		|| d.activeElement || { href: '' }); // Cross-Browser
	
   	var lastNav = getPageState() !== 'active' ? d.URL : lastActivatedNode.href || w.CODE_SPLINTA.fromTracked('last_loaded_url');
	
	return w.CODE_SPLINTA.track(
			'ui-event',
			pageActivityEvent(
				'activity', 
				w.CODE_SPLINTA.browser_fp,
				lastNav,
				'win_resize'
			),
		        true
	);
}, 300, 2100, function(){ return { width: w.outerWidth, height: w.outerHeight }; });

d.addEventListener("visibilitychange", function (e) {
   var lastActivatedNode = (e.explicitOriginalTarget // old/new Firefox
				|| (e.srcDocument && e.srcDocument.activeElement) // old Chrome/Safari
					|| (e.currentTarget && e.currentTarget.document.activeElement) 
			    			|| d.activeElement || { href: '' }); // Cross-Browser
	
   var lastNav = getPageState() !== 'active' ? d.URL : lastActivatedNode.href ||  w.CODE_SPLINTA.fromTracked('last_loaded_url');
  
   return w.CODE_SPLINTA.track(
	'ui-event',
	pageActivityEvent(
		'activity',
		w.CODE_SPLINTA.browser_fp,
		lastNav,
		'doc_visibility',
		{page_state: getPageState()}
	),
	true
  );
});
	

var $onUnload = w.onunload;
var $onBeforeUnload = w.onbeforeunload;

w.onbeforeunload = function (e) {
  var lastActivatedNode = (e.explicitOriginalTarget // old/new Firefox
				|| (e.srcDocument && e.srcDocument.activeElement) // old Chrome/Safari
					|| (e.currentTarget && e.currentTarget.document.activeElement)
			  			|| d.activeElement || {}); // Cross-Browser
	
  var isLogoutNav = lastActivatedNode.href === w.CODE_SPLINTA.href.logout;
  var isHomeNav = lastActivatedNode.href === w.CODE_SPLINTA.href.home;
  var isLoginNav = lastActivatedNode.href === w.CODE_SPLINTA.href.login;
  var isDownload = ('download' in lastActivatedNode);	
	
  lastNav = e.context ? e.context.newURL : lastActivatedNode.href;

	
  if( typeof $onBeforeUnload === 'function' && typeof e.trigger === 'undefined' ){
      $onBeforeUnload(e);
  }

  //c.log('CS:> before; unloading page');

  return (isLogoutNav || isLoginNav || isHomeNav || !isDownload) 
	  ? (typeof e.trigger !== 'undefined'  
	     ? w.onunload({ trigger: "fake_beforeunload", context: { lastNav: lastNav } }) 
	     : true) : undefined; 
}
	
	
var onUnload = function (e) {
	
   if (l.protocol.indexOf('https') !== 0) { 
   	return false;
   }
	
   var _delayUnloadUntilFinish = 3600; // 3.6 secs
	
  // Safri 13+ doesn't fire unload event proper when navigating away from
  // a page. So we use pagehide event as fallback and flag the callback.
  if (typeof w.safari !== 'undefined' && w.safari.pushNotification ) {
	if(!onUnload._called){
	    onUnload._called = true;
	} else {
	    return;
	}
  }

  if( typeof $onUnload === 'function' && typeof e.trigger === 'undefined'){
      $onUnload(e);
  }

  // c.log('CS:> unloading page');

  if( getPageState() !== 'visible' ) {
	return;
  }
	
  var activityEvent = pageActivityEvent(
	'unload',
	w.CODE_SPLINTA.browser_fp,
	e.context ? e.context.lastNav : '',
	'page_change'
  );
	
  // add all tracked data for the current page view session
  activityEvent.extras = JSON.parse(w.name || '{}');
  w.name = "";
	
  w.CODE_SPLINTA.ping(
	activityEvent
  );

  if (typeof e.trigger === 'undefined') {
     // Force the browser to wait for the async task above finsh up
     delay(
 	_delayUnloadUntilFinish
     );
  }
};


 w.onpagehide = onUnload;
 w.onunload = onUnload

	
// Operas' proprietary property to force the browser to always retrieve the page from the server or the cache
// intelligently (Default : 'automatic' | 'fast' )
try{
   if(w.history){
	if( typeof ( w.opera ) !== 'undefined' ){
		w.opera.setOverrideHistoryNavigationMode( 'compatible' );
		w.history.navigationMode = 'compatible';
	}
   }
}catch(ex){ }

	
}(this, this.document, this.navigator, this.console, this.location, this.history));

/**

: CSP response headers to set when using CodeSplinta

Report-To: { "group": "csp-endpoint-wizard",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://reporting.codesplinta.co/violations?for=wizard&type=csp" }
             ] },
           { "group": "csp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://reporting.codesplinta.co/violations?type=csp" }
             ] },
           { "group": "hpkp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://reporting.codesplinta.co/violations?type=hpkp" }
             ] }

Content-Security-Policy-Report-Only: default-src 'none'; form-action 'none'; frame-ancestors 'none'; report-uri https://reporting.codesplinta.co/violations?for=wizard&type=csp&rate_limit=true; report-to csp-endpoint-wizard

Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https: 'nonce-abcdefg'; script-src 'self' 'unsafe-inline' https: blob: 'nonce-abcdefg' 'strict-dynamic'; object-src 'none'; base-uri 'none'; media-src mediastream:; sandbox allow-orientation-lock allow-forms allow-scripts; report-uri https://reporting.codesplinta.co/violations?type=csp; report-to csp-endpoint
X-Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https: 'nonce-abcdefg'; script-src 'self' 'unsafe-inline' https: blob: 'nonce-abcdefg' 'strict-dynamic'; object-src 'none'; base-uri 'none'; media-src mediastream:; sandbox allow-orientation-lock allow-forms allow-scripts; report-uri https://reporting.codesplinta.co/violations?type=csp; report-to csp-endpoint
X-Webkit-CSP: default-src 'self'; style-src 'self' 'unsafe-inline' https: 'nonce-abcdefg'; script-src 'self' 'unsafe-inline' https: blob: 'nonce-abcdefg' 'strict-dynamic'; object-src 'none'; base-uri 'none'; media-src mediastream:; sandbox allow-orientation-lock allow-forms allow-scripts; report-uri https://reporting.codesplinta.co/violations?type=csp; report-to csp-endpoint

*/

;(function(w, d, n, c){

	var R_ATTR_NAME = 'data-reporting-endpoint';
	var K_ATTR_NAME = 'data-public-key';
	var E_ATTR_NAME = 'data-env';
	var S_ATTR_NAME = 'data-scan-markup';
	var N_ATTR_NAME = 'nonce';

	var R_ATTR_VALUE = 'https://reporting.codesplinta.co';
	var K_ATTR_VALUE = '';
	var E_ATTR_VALUE = 'development';
	var S_ATTR_VALUE = 'false';
	var N_ATTR_VALUE = '';
	
  var metaTag = d.createElement('meta');

  var parseCSPDirectives = function(cspDirectives){
    var _cspDirectives = cspDirectives.split(';')
    var parsed = {}

    while(_cspDirectives.length){
      var directive = _cspDirectives.shift()
      var sentinel_point = directive.trim().indexOf(' ') + 1
      var title = directive.substr(0, sentinel_point).trim()

      parsed[title] = directive.substr(sentinel_point).trim()
      
    }

    return parsed;
  }
	
	/**
		Custom CodeSPlinta <meta> tag:
		
		<meta name="X-CodeSplinta-CSP-Directives" content="..." extras="..."> 
	*/
  
  var xdMetaTag = d.getElementsByName('X-CodeSplinta-CSP-Directives')[0]
	var cspDirectives = xdMetaTag.getAttribute('content')
  var extras = xdMetaTag.getAttribute('extras')

	if (d.currentScript){

	    if(d.currentScript.hasAttribute(R_ATTR_NAME)) {
		    R_ATTR_VALUE = d.currentScript.getAttribute(R_ATTR_NAME);
      }
      
      if(d.currentScript.hasAttribute(N_ATTR_NAME)) {
        N_ATTR_VALUE = d.currentScript.getAttribute(N_ATTR_NAME);
      }

	    if(!R_ATTR_VALUE && 
		    d.currentScript.hasAttribute(K_ATTR_NAME)) {
		    K_ATTR_VALUE = d.currentScript.getAttribute(K_ATTR_NAME);
	    }
		
      	    if(d.currentScript.hasAttribute(R_ATTR_NAME)) {
		    E_ATTR_VALUE = d.currentScript.getAttribute(E_ATTR_NAME);
	    }
		
	    if(d.currentScript.hasAttribute(R_ATTR_NAME)) {
		    S_ATTR_VALUE = d.currentScript.getAttribute(S_ATTR_NAME);
	    }
	}
	
	w.CODE_SPLINTA = {
		'reporting-endpoint': R_ATTR_VALUE, 
		'public-key': K_ATTR_VALUE,
		'env': E_ATTR_VALUE,
    		'scan-markup': S_ATTR_VALUE,
    		'directives': parseCSPDirectives(cspDirectives),
		'href': {
		   login: '',
		   logout: '',
		   home: ''
		},
		fromTracked: function(name){
		   	var data = w.name;
			
			if (data === ''){
			   data = '{}';
			}
			
		 	var _data = JSON.parse(data);

                       return _data[name];
		},
		track: function(name, value, asArray) {
			var data = w.name;
			
			if (data === ''){
			   data = '{}';
			}
			
		 	var _data = JSON.parse(data);

			if( !asArray ) {
                        	_data[name] = value;
			} else {
			   if(!_data[name]) {
			   	_data[name] = [value];
			   } else {
			   	_data[name].push(value);
			   }
			}
			
			w.name = JSON.stringify(_data);
		},
  		ping: function(payload) {
		    return (
		      n.sendBeacon(
			      this['reporting-endpoint'] + "/events?type=ui-event&for=" + payload.type, 
			      JSON.stringify(payload),
		      )
		      .catch(c.error)
		    );
  		},
  	};
	
	d.addEventListener('DOMContentLoaded', function () {
	    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
	    metaTag.setAttribute('content', "script-src 'self' 'unsafe-eval' 'unsafe-redirect' https: blob: 'nonce-"+N_ATTR_VALUE+"' 'strict-dynamic';" + cspDirectives);
	    d.head.insertBefore(metaTag, xdMetaTag);
	});
	
}(this, this.document, this.navigator, this.console || {error: function(){ }}));

							
							
 /**
  * Detect Incognito Mode
  * 
  * See: 
  */

 (function (global, factory){
  (factory(global))
}(this, (function (win) { 'use strict';

function retry(isDone, next) {
var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
var id = win.setInterval(
   function() {
       if (isDone()) {
           win.clearInterval(id);
           next(is_timeout);
       }
       if (current_trial++ > max_retry) {
           win.clearInterval(id);
           is_timeout = true;
           next(is_timeout);
       }
   },
   interval
  );
}

function isIE10OrLater(user_agent) {
var ua = user_agent.toLowerCase();

if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
   return false;
}

var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
if (match && parseInt(match[1], 10) >= 10) {
   return true;
}

return (!win.indexedDB && (win.PointerEvent || win.MSPointerEvent));
}

function isSafari11OrLater(user_agent){
var ua = user_agent.toLowerCase();

if(ua.indexOf('applewebkit') === -1) {
 return false
}

var match = /version\/([0-9\._]+).*safari/.exec(ua);
 
if(match && parseInt(match[1], 10) >= 11){
 return true
}

return (typeof win.safari !== 'undefined' || win.navigator.vendor ==  "Apple Computer, Inc.")
}

function detectPrivateMode(callback) {
var is_private;
	
if (win.webkitRequestFileSystem 
     && (((!!win.navigator.usb) && (typeof win.navigator.usb.getDevices === 'function')) || (true))) {
   win.webkitRequestFileSystem(
       win.TEMPORARY, 1,
       function() {
           is_private = false;
       },
       function(e) {
           is_private = true;
       }
   );
} else if (win.indexedDB && (/Firefox/.test(win.navigator.userAgent) && 'MozAppearance' in document.documentElement.style)) {
   var db;
   try {
       db = win.indexedDB.open('test');
   } catch(e) {
       is_private = true;
   }

   if (typeof is_private === 'undefined') {
       retry(
           function isDone() {
               return db.readyState === 'done' ? true : false;
           },
           function next(is_timeout) {
               if (!is_timeout) {
                   is_private = db.result ? false : true;
               }
           }
       );
   }
} else if (isIE10OrLater(win.navigator.userAgent)) {
   is_private = false;
   try {
       if (!win.indexedDB) {
           is_private = true;
       }                 
   } catch (e) {
       is_private = true;
   }
} else if (win.localStorage 
           && (/Safari/.test(win.navigator.userAgent) && /constructor/i.test(win.HTMLElement))) {
   
 if(isSafari11OrLater(win.navigator.userAgent)) {
   try {
       win.openDatabase(null, null, null, null);
   } catch (e) {
       is_private = true
   }
 }else {
   try {
       win.localStorage.setItem('test', 1);
   } catch(e) {
       is_private = win.navigator.cookieEnabled;
   }

   if (typeof is_private === 'undefined') {
       is_private = false;
       win.localStorage.removeItem('test');
   }
 }
}

retry(
   function isDone() {
       return typeof is_private !== 'undefined' ? true : false;
   },
   function next(is_timeout) {
       callback(is_private);
   }
);
}


return detectPrivateMode(function(isPrivate) {
 win.CODE_SPLINTA['browser_incognito'] = isPrivate
})

}))));

/**
 Redirect [ Console ] output to a remote server when the 
 current viewed web-page is about to be hidden / navigated 
 from.

 
 */

;(function(w, d, n){
	
	var CONSOLE_CACHE_PERSIST_KEY = '___<<<w53gyswnjsuua5a7jm>>__@';
	
	var originalConsole = w.console || null;
	
	if(w.isTrident_IE && originalConsole === null) return;
	
	var $warn = originalConsole.warn;
        var $log = originalConsole.log;
  
        if($log.toString() !== "function log() { [native code] }"){
             ;
        }

        if($warn.toString() !== "function warn() { [native code] }"){
             ;
        }
	
	var __consoleOutputCache = {
		warn:{},
		log:{},
        };

  var warn = function warn(){
    var data = [].slice.call(arguments)
    var timestamp = Date.now()
    __consoleOutputCache.warn[String(timestamp)] = String(data)
    
    return $warn.apply(originalConsole, data)
  }

  Object.defineProperty(warn, 'toString', {

  });

  originalConsole.warn = warn
  
  var log = function log(){
    var data = [].slice.call(arguments)
    var timestamp = Date.now()
    __consoleOutputCache.log[String(timestamp)] = String(data)
    
    return $log.apply(originalConsole, data)
  }

  Object.defineProperty(log, 'toString', {
    configurable:true,
    enumerable:false,
    writable:true,
    value:function(){
       return "function log() { [native code] }"
    }
  });

  originalConsole.log = log
	
	var _consoleOutputCacheCallback = function(event){
		
		if(event.readyState){
			;
		}
		
		if(w.localStorage.hasKey(
			CONSOLE_CACHE_PERSIST_KEY)){
			__consoleOutputCache = JSON.parse(
				w.localStorage.getItem(
					CONSOLE_CACHE_PERSIST_KEY
				)
			);
		}
	};
	
	var _consoleOutputPush = function(event){
		
		if(event.persisted){
      ;
		}
		
		if(n.onLine){
			w.CODE_SPLINTA.ping(
				w.CODE_SPLINTA['reporting-endpoint'] + "/events?type=console_output&for=", 
				JSON.stringify(__consoleOutputCache)
			);
		}else{
			w.localStorage(
				CONSOLE_CACHE_PERSIST_KEY, 
				JSON.stringify(__consoleOutputCache)
			);
		}
	};
	
	if(!w.isTrident_IE && w.addEventListener){
		w.addEventListener('pageshow', _consoleOutputCacheCallback, false);
		w.addEventListener('pagehide', _consoleOutputPush, false);
	}else {
		d.onreadystatechange = 	_consoleOutputCacheCallback;	   
	}
}(this, this.document, this.navigator));

/**
    Though IE 9 to IE 11 supports the CustomEvent constructor, IE throws an error {Object doesn't support this action} 
    whenever it's used. This weird behaviour is fixed below
    
    @see: https://stackoverflow.com/questions/14358599/object-doesnt-support-this-action-ie9-with-customevent-initialization
*/

;(function (w, d) {

	  'use strict'; // @Shim : hotfix/polyfill `CustomEvent()` for IE 8 - 11

    function CEvent ( event, params ) {
		   
        var t, evt;
        params = params || { bubbles: false, cancelable: false, detail: null };
          
        try{
            evt = d.createEvent( 'CustomEvent' );
            evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        }catch(e){
            evt = d.createEventObject(w.event);
          
            evt.cancelBubble = !params.bubbles;
            evt.returnValue = !params.cancelable;
          
            if(typeof params.detail === "object"){	
              evt.detail = params.detail;
            }	
        }
          
        return evt;
    };
	
	  try {
	    var ce = new w.CustomEvent('test');
	  } catch(e) {

	      CEvent.prototype = Object.create(((w.Event && w.Event.prototype) || {}));
	      w.CustomEvent = null;
	      w.CustomEvent = CEvent;
	  }
})(this, this.document);



/**
 * Detect when devtools is open
 * 
 * @written_by: https://github.com/sindresorhus/
 * @project: https://github.com/sindresorhus/devtools-detect
 * Copyright 2017 Sindre Sorhus
 *
 * MIT License
 *
 * @modified_by: https://github.com/isocroft/
 *
 * @see: http://adamschwartz.co/chrome-inspector-detector/chrome.inspector-detector.js
 */

;(function (w, d, n, c) {
	
	'use strict';
	
	var tag = /./;
	var element = new Image();
	
	var devtools = {
		open: false, // by default devtools is always closed
		orientation: null,
		lastDetected:0
	};
	var threshold = 160;
	var emitEvent = function (state, orientation, event) { 
		if(!event){
			event = new w.CustomEvent('devtoolschange', {
				detail: {
					open: state,
					orientation: orientation
				}
			});
		}
		d.dispatchEvent(event);
	};
	
	if(typeof element.__defineGetter__ === "function"){
		element.__defineGetter__("id", function() {
			if(!devtools.open){
				devtools.open = true;
				emitEvent(devtools.open, devtools.orientation);
			}
		});
	}
	
	var now = (new Date()*1);
	var lock = now;
	
	var lastPreviouslyDetected = devtools.lastDetected;
    
	var isBrowserZoomActiveOrDevToolsUndocked = function(){
		return false;
	};
	
	var hookKeyDownEvent = d.addEventListener || d.attachEvent;
		
	var hookDevToolsMaskEvent = w.addEventListener || w.attachEvent;
	
	var _cancelMouseRightClick = function(e){
		if(e.button == 2){
			return false;
		}
	};
    
	var _blockShortcutKeysForDevTools = function(e) {
  		if (e.keyCode == 123 
		    || ((n.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.shiftKey && (e.keyCode == 117 || e.keyCode == 85 || e.keyCode == 67 || e.keyCode == 69 || e.keyCode == 115 || e.keyCode == 83 || e.keyCode == 81 || e.keyCode == 105 || e.keyCode == 73 || e.keyCode == 110 || e.keyCode == 78 || e.keyCode == 112 || e.keyCode == 80 || e.keyCode == 106 || e.keyCode == 74 || e.keyCode == 75)) 
		    	|| (e.shiftKey && (e.keyCode == 113 || e.keyCode == 118 || e.keyCode == 119 || e.keyCode == 120 || e.keyCode == 116))) {
    			e.preventDefault();
			
			c && c.log("%ctrying to tamper with devtools!!","background: black; color: #00ff00; font-size: x-large;");
			
			w.setTimeout(function(){ 
				// not redirecting to... https://wall.codesplinta.com/0x2335
          			w.CODE_SPLINTA.ping(
					    w.CODE_SPLINTA['reporting-endpoint'] + "/violations?mode=no_redirect&type=devtools_tamper&page_url="
					    + encodeURIComponent(d.URL)
					    + "&mode=browser_shortcut_keypress"
					    + "&for=",
					  JSON.stringify({
					     timestamp: +(new Date),
					     page_title: d.title,
					     browser_fp: w.CODE_SPLINTA['browser_fp']
					  })
				)
			}, 1500);
				
			return false;
		}
	};
	
	var _consoleMsg = function(e){
		
		
		if(e.detail.open){
			 d.devToolsTamperStart = +(new Date);
			 
			w.setTimeout(function(){ // redirecting to... https://wall.codesplinta.com/0x2335
				w.CODE_SPLINTA.ping(
				    w.CODE_SPLINTA['reporting-endpoint']
				    + "/violations?type=devtools_tamper&page_url="
				    + encodeURIComponent(d.URL)
				    + "&mode=browser_menu_click"
				    + "&for=",
				    JSON.stringify({
					timestamp: d.devToolsTamperStart,
					page_title: d.title,
					browser_fp: w.CODE_SPLINTA['browser_fp']
				    })
				);
			}, 1500);
		}else{
			d.devToolsTamperEnd = +(new Date);
		}
		
	};
	
	/*w.oncontextmenu = function () {
	
   		return true;
	};*/

	setInterval(function () {
		
		  var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		  var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		  var orientation = widthThreshold ? 'vertical' : 'horizontal';
    		
    		if (isBrowserZoomActiveOrDevToolsUndocked()){
			
          		var minimalUserResponseInMiliseconds = 40; // 100
          		var before = new Date().getTime(); 
			       debugger; 
          		var after = new Date().getTime(); 
          		if (after - before >= minimalUserResponseInMiliseconds) { 
			     if(!devtools.open){
					emitEvent(true, orientation);
                 			devtools.open = true;
				    	devtools.orientation = orientation;
			  	}
          		}else{ 
                  			if(devtools.open){
                      				emitEvent(false, null);
					  	devtools.open = false;
					    	devtools.orientation = null;
                  			}
          		} 
          
     		} else {
			
			/**
			 * @see: https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open
			 *
			 * We need to spy on the active user facing the browser and detect whenever they try to access
			 * the [ Console ] section of the browser devtools. In addtion to the SO answer, we had to come
			 * up with some timing "trickery" to detect when the active user closes the browser devtools
			 *
			 * @see: https://stackoverflow.com/questions/42193700/detect-when-inspect-element-is-open
			 *
			 * :)
			 */
			
			/**
			 * When the [ Console ] isn't open in IE 9+, 
			 * the {console} object is "undefined"
			 *
			 * Also, we try to detect Chrome / Firefox / Safari / Edge
			 *
			 */ 
			if(((w.console && w.console.log)
			  && !!(w.chrome || n.getVRDisplays || d.security))){
				
				if(w.console.firebug){
					if(!devtools.open){
						devtools.open = true;
						emitEvent(devtools.open, devtools.orientation);
					}
					return;
				}
				
				var diff = now - lock;
				lock = (new Date()*1);
				
				tag.toString = function() {
					now = (new Date()*1);
    					diff = now - lock;
					
					if(!devtools.open){
						devtools.open = true;
						emitEvent(devtools.open, devtools.orientation);
					}
				};
				
				if(diff < 0){
					if(devtools.open){
						devtools.open = false;
						emitEvent(devtools.open, devtools.orientation);
					}
				}
				
				if(n.appName == "Netscape"
				  && (!!n.oscpu)
				  && (Object.hasOwnProperty.call(n, 'oscpu') === false)){
				    c.log(tag); // Firefox
				}else{
				    c.log(element); // Chrome / Safari / Edge
				}
				
				if(c.clear){
					c.clear();
				}
			}else{
				
				if(!devtools.open){
					if(devtools.lastDetected === lastPreviouslyDetected){
						devtools.lastDetected = (new Date()*1);
					}
				}

				if (!(heightThreshold && widthThreshold) &&
					((w.chrome && w.chrome.console) 
					 || (w.Firebug && w.Firebug.chrome && w.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {

					if (!devtools.open || devtools.orientation !== orientation) {
						emitEvent(true, orientation);
						devtools.open = true;
						devtools.orientation = orientation;
					}
				} else {
					if (lastPreviouslyDetected !== devtools.lastDetected) {
						if(devtools.open){
							emitEvent(false, null);
							lastPreviouslyDetected = devtools.lastDetected;
							devtools.open = false;
							devtools.orientation = null;
						}
					}

				}
			}
    		}
	}, 850);
	
	hookKeyDownEvent.apply(d, [ (w.toStaticHTML ? 'onkeydown' : 'keydown'), _blockShortcutKeysForDevTools]);
		
	hookDevToolsMaskEvent.apply(w, [ (w.toStaticHTML ? 'ondevtoolschange' : 'devtoolschange'),  _consoleMsg]);
	
	hookDevToolsMaskEvent.apply(d, [ (w.toStaticHTML ? 'onmousedown' : 'mousedown'), _cancelMouseRightClick]);

	w.devtools = devtools;
	
})(this, this.document, this.navigator, this.console);

/**
	using the Proxy object to wrap around native DOM APIs and raise events for certain actions
	
	{{ synthetic mutation events & synthetic network request check events }}

	@see: https://www.phpied.com/intercepting-new-image-src-requests/
*/

;(function (w, d) {
	
    var NativeImage, NativeDocWrite, NativeParseFromString, NativeDocWriteLn, NativeAdjacentHTML, NativeAdjacentElement, NativeOpen, NativeCreateElement, NativeEventSource;
	
    (function() {

    /** 
     * 
     * We wish to modify security chokepoints for certain DOM object methods that take in {DOMString | HTMLString}
     * 
     * [ insertAdjacentHTML ]
     * [ write ]
     * [ writeln ]
     * [ parseFromString ]
     */

    NativeAdjacentHTML = Element.prototype.insertAdjacentHTML
    NativeDocWrite = Document.prototype.write
    NativeDocWriteLn = Document.prototype.writeln
    NativeParseFromString = DOMParser.prototype.parseFromString
    // Element.prototype.insertAdjacentElement

    Element.prototype.insertAdjacentHTML = function (position, text){
      
      var new_text = purify(text)

      if(w.console){
        w.console.log({
          target_api:'insertAdjacentHTML',
          dom_tag_name:'<'+this.nodeName+'>',
          old_value:text, 
          new_value:new_text,
          santize_removed:getItemsRemovedUponSanitization(), 
          action:'', 
          timestamp:(new Date).getTime()
        });
      }

      return NativeAdjacentHTML.apply(this, [position, new_text])
    };

    Document.prototype.write = function (text){
      
      var new_text = purify(text)

      if(w.console){
        w.console.log({
          target_api:'write',
          dom_tag_name:'<#document>',
          old_value:text, 
          new_value:new_text,
          santize_removed:getItemsRemovedUponSanitization(), 
          action:'', 
          timestamp:(new Date).getTime()
        });
      }

      return NativeDocWrite.apply(this, [new_text])
    };

    Document.prototype.writeln = function (text){
      
      var new_text = purify(text)

      if(w.console){
        w.console.log({
          target_api:'writeLn',
          dom_tag_name:'<#document>',
          old_value:text, 
          new_value:new_text,
          santize_removed:getItemsRemovedUponSanitization(), 
          action:'', 
          timestamp:(new Date).getTime()
        });
      }

      return NativeDocWriteLn.apply(this, [new_text])
    };
  
	  /**
	   * @see: https://stackoverflow.com/questions/39560085/change-innerhtml-set-on-the-fly
	   *
	   * We wish to "spy" on [ value ], [ innerHTML ] and [ innerText ] and sanitize against
	   * suspicious XSS-potential strings.
	   *
	   * So, we rely on a clear trickery to extract the property descriptor(s) and resuse it as
	   * below to redefine the property descriptor
	   */
	  var originalDesc_innerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
	  var originalDesc_innerText = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
    	  var originalDesc_Input_value = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
	  var originalDesc_Textarea_value = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value");
	    
    // style-src
	  var originalDesc_styleSrc = Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href')
	  // script-src
	  var originalDesc_scriptSrc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src')
	  // media-src
	  var originalDesc_mediaSrc = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'src')
	  // form-action
	  var originalDesc_formAction = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'action')
	  // frame-src | child-src
	  var originalDesc_frameSrc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src')
  
    if(typeof originalDesc_styleSrc != "undefined"){
      Object.defineProperty(HTMLLinkElement.prototype, "src", {
        configurable:originalDesc_styleSrc.configurable,
        enumerable:originalDesc_styleSrc.enumerable,
        get:originalDesc_styleSrc.get,
        set:function src(_src){
 
         var currentDirective = w.CODE_SPLINTA['directives']['style-src']
         var directiveUnits = currentDirective.split(' ')
         
         var ruleSetsDefaults = {
            enforceHTTPS:false,
            propagateNonceOrHash:false,
            enforceBlob:false,
            enforceMediaStream:false,
            enforceFileSystem:false,
            enablesSelf:false,
            hostsMap:[]
         };

         var ruleSets = {

         }

         var mark = directiveUnits.length

         while(--mark){
            var unit = directiveUnits[mark]
            switch(unit){
              case "https:":
                ruleSets.enforceHTTPS = true
              break;
              case "filesystem:":
                ruleSets.enforceFileSystem = true
              break;
              case "strict-dynamic":
                ruleSets.propagateNonceOrHash = true
              break;
              case "mediastream:":
                ;
              break;
              case "blob:":
                ruleSets.enforceBlob = true
              break;
              case "'self'":
                ruleSets.enablesSelf = true
              break;
              case "'unsafe-inline'":
                ;
              break;
              case "'unsafe-eval'":
                ;
              break;
            }
         }

         Object.assign({}, ruleSetsDefaults, ruleSets)

         return originalDesc_styleSrc.set.call(this, _src);     
       }
     });
		  
    }

    if(typeof originalDesc_scriptSrc != "undefined"){
      Object.defineProperty(HTMLScriptElement.prototype, "src", {
        configurable:originalDesc_scriptSrc.configurable,
        enumerable:originalDesc_scriptSrc.enumerable,
        get:originalDesc_scriptSrc.get,
        set:function src(_src){
          
         var currentDirective = w.CODE_SPLINTA['directives']['script-src']
 
         return originalDesc_scriptSrc.set.call(this, _src);     
       }
     });
		  
    }


    if(typeof originalDesc_mediaSrc != "undefined"){
      Object.defineProperty(HTMLMediaElement.prototype, "src", {
        configurable:originalDesc_mediaSrc.configurable,
        enumerable:originalDesc_mediaSrc.enumerable,
        get:originalDesc_mediaSrc.get,
        set:function src(_src){
 
         var currentDirective = w.CODE_SPLINTA['directives']['media-src']
        }
      })
    }

    if(typeof originalDesc_formAction != "undefined"){
      Object.defineProperty(HTMLFormElement.prototype, "src", {
        configurable:originalDesc_formAction.configurable,
        enumerable:originalDesc_formAction.enumerable,
        get:originalDesc_formAction.get,
        set:function src(_src){
 
         var currentDirective = w.CODE_SPLINTA['directives']['form-action']
        }
      })
    }

    if(typeof originalDesc_frameSrc != "undefined"){
      Object.defineProperty(HTMLIFrameElement.prototype, "src", {
        configurable:originalDesc_frameSrc.configurable,
        enumerable:originalDesc_frameSrc.enumerable,
        get:originalDesc_frameSrc.get,
        set:function src(_src){
 
         var currentDirective = w.CODE_SPLINTA['directives']['frame-src'] || w.CODE_SPLINTA['directives']['child-src']
          
         return originalDesc_frameSrc.set.call(this, _src);     
       }
     });
    }

	  if(typeof originalDesc_Input_value == "undefined"){
	    // use "__lookupSetter__" & "__defineSetter__" as Chrome/Safari doesn't let you access property descriptors
	  	originalDesc_Input_value = {set:Object.prototype.__lookupSetter__.call(HTMLInputElement.prototype, "value")}
		
	  	Object.prototype.__defineSetter__.call(HTMLInputElement.prototype, "value", function value(_value){

				var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(_value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'value'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized', {
		target_api:'value',
		dom_tag: this.outerHTML,
		old_value:value, 
		new_value:new_value,
		/*removed_elems:getItemsRemovedUponSanitization(),*/ 
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				return originalDesc_Input_value.set.call(this, new_value);     
		});
		  
     	  }else{
	    
		Object.defineProperty(HTMLInputElement.prototype, "value", {
			 configurable:originalDesc_Input_value.configurable,
			 enumerable:originalDesc_Input_value.enumerable,
			 get:originalDesc_Input_value.get,
			 set:function value(_value){

				var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(_value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'value'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized', {
		target_api:'value',
		dom_tag: this.outerHTML,
		old_value:old_value, 
		new_value:new_value,
		/*removed_elems:getItemsRemovedUponSanitization(),*/
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				return originalDesc_Input_value.set.call(this, new_value);     
			}
		});
	  }
	    
	  if(typeof originalDesc_Textarea_value == "undefined"){
	     	// use "__lookupSetter__" & "__defineSetter__" as Chrome/Safari doesn't let you access property descriptors
	  	
	  	originalDesc_Textarea_value = {set:Object.prototype.__lookupSetter__.call(HTMLTextAreaElement.prototype, "value")}
		
	  	Object.prototype.__defineSetter__.call(HTMLTextAreaElement.prototype, "value", function value(_value){

	var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(_value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'value'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized', {
		target_api:'value',
		dom_tag: this.outerHTML,
		old_value:old_value, 
		new_value:new_value,
		/*removed_elems:getItemsRemovedUponSanitization(),*/
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				return originalDesc_Textarea_value.set.call(this, new_value);     
		});
	  }else{
		Object.defineProperty(HTMLTextAreaElement.prototype, "value", {
			 configurable:originalDesc_Textarea_value.configurable,
			 enumerable:originalDesc_Textarea_value.enumerable,
			 get:originalDesc_Textarea_value.get,
			 set:function value(_value){

	var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(_value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'value'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized', {
		target_api:'value',
		dom_tag: this.outerHTML,
		old_value:old_value, 
		new_value:new_value,
		/*removed_elem:getItemsRemovedUponSanitization(),*/
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				return originalDesc_Textarea_value.set.call(this, new_value);     
			}
		})
	  }
	  
    	  if(typeof originalDesc_innerHTML == "undefined"){
	     	// use "__lookupSetter__" & "__defineSetter__" as Chrome/Safari doesn't let you access property descriptors
	  	
	  	originalDesc_innerHTML = {set:Object.prototype.__lookupSetter__.call(HTMLElement.prototype, "innerHTML")}
		
	  	Object.prototype.__defineSetter__.call(HTMLElement.prototype, "innerHTML", function value(value){

        var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'innerHTML'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized', {
		target_api:'value',
		dom_tag: this.outerHTML,
		old_value:old_value, 
		new_value:new_value,
		/*removed_elems:getItemsRemovedUponSanitization(),*/
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				return originalDesc_innerHTML.set.call(this, new_value);     
		});
     	  }else{
		Object.defineProperty(Element.prototype, 'innerHTML', {
			configurable:originalDesc_innerHTML.configurable,
			enumerable:originalDesc_innerHTML.enumerable,
			get:originalDesc_innerHTML.get,
			set: function innerHTML(value) {

				var trusted_types = w.CODE_SPLINTA.directives['trusted-types'] || [];
        var registration = {trustedtype:{config:{},type:null},sanitizerFn:function(val){ return val; }} 
        
        if(typeof trusted_types === 'string'){
          trusted_types = trusted_types.split(' ');
        }

        if(trusted_types.length >= 1){
          registration = w.TrustedTypes.htmlRegistrations[trusted_types[0]];
        }

        var old_value = String(value);
        var new_value = registration.sanitizerFn(old_value)

        if(registration.trustedType.config.throwErrors){
          if(old_value.length !== new_value.length){
            throw w.TrustedTypesError("'"+ typeof old_value +"' TrustedTypes form violates requirements for property 'innerHTML'")
          }
        }

	w.CODE_SPLINTA.track('dom_sanitized',{
		target_api:'innerHTML',
		dom_tag: this.outerHTML,
		old_value:old_value, 
		new_value:new_value, 
		/*removed_elems:getItemsRemovedUponSanitization(),*/
		action:'set', 
		timestamp:(new Date).getTime()
	}, true);
        
        if(registration.trustedType.config.blockIncludes){
          return old_value;
        }

				// Call the original setter
				return originalDesc_innerHTML.set.call(this, new_value);
			}
		  });
	 }
	  
    	 if(typeof originalDesc_innerText == "undefined"){
		// use "__lookupSetter__" & "__defineSetter__" as Chrome/Safari doesn't let you access property descriptors
	  	
	  	originalDesc_innerText = {set:Object.prototype.__lookupSetter__.call(HTMLElement.prototype, "innerText")}
		
	  	Object.prototype.__defineSetter__.call(HTMLElement.prototype, "innerText", function value(value){

				var new_value = purify(value)

					w.CODE_SPLINTA.track('dom_sanitized', {
						target_api:'value',
						dom_tag: this.outerHTML,
						old_value: '', 
            					new_value:new_value, 
            					/*removed_elems:getItemsRemovedUponSanitization(),*/
						action:'set', 
						timestamp:(new Date).getTime()
					}, true);

				return originalDesc_innerText.set.call(this, new_value);     
		});
	 }else{
		  Object.defineProperty(Element.prototype, 'innerText', {
			configurable:originalDesc_innerText.configurable,
			enumerable:originalDesc_innerText.enumerable,
			get:originalDesc_innerText.get,
			set: function innerText(value) {
				
				var new_value = purify(value);

					w.CODE_SPLINTA.track('dom_sanitized', {
						target_api: 'innerText',
						dom_tag: this.outerHTML,
						old_value: '', 
						new_value:new_value, 
						/*removed_elems:getItemsRemovedUponSanitization(),*/
						action:'set', 
						timestamp:(new Date).getTime()
					});

				// Call the original setter
				return originalDesc_innerText.set.call(this, new_value);
			}
		  });
	 }
    
    function getItemsRemovedUponSanitization(DOMPurify){

        return DOMPurify.removed.length ? DOMPurify.removed.map(
            function(item) { 
                if(item.element !== null){
                    return item.element.outerHTML
                }
            
                if(item.attribute !== null){
                  return item.attribute.name + "=" + item.attribute.value
                }
            }
        ) : []
      
    }
                        
    })();


    var createImage = function () {
        var image = new NativeImage(); 

        var _image = Object.defineProperty(this, 'src', {
            set: function (srcAttr) {

                var event = new w.CustomEvent('beforerequest', {
                  detail: {
                    endpoint: srcAttr.toString().indexOf('http') == 0 ? w.location.origin + "/" + srcAttr : srcAttr.toString(),
                    method:"GET"
                  },
                  bubbles: false,
                  cancelable: true
                });

                var cancelled = !d.dispatchEvent(event);
            
                if(cancelled){
                  throw new Error("Suspicious Activity: " + event.detail.endpoint + " request, as ["+ event.detail.method+"]");
                }

                image.src = srcAttr.toString();
            },
            get: function () {
                return image.src;
            }
        });
   
        var _proxy = new Proxy(_image, {
           get:function(target, prop){
                var _member = target[prop];

                if(typeof _member == 'function'){
                  _member = _member.bind(target);
                }

                return _member;
           },
           set:function(target, prop, value){
		if (prop === 'src') {
                    target[prop] = value;
    	        }
		   
    		return image[prop] = value;
           }
        });

	      _proxy[Symbol.toStringTag] = image.constructor.name; //'HTMLImageElement';

        return _proxy;

    };

    var createElement = function(name){

       		var element = NativeCreateElement.apply(this, [name]), _proxy, event;
	    
		_proxy = new Proxy(element, {
			get:function(target, prop){
				var _member = target[prop];

				if(typeof _member == 'function'){
		 			_member = _member.bind(target);
				}

				return _member;
			},
			set:function(target, prop, value){
				var _value =  value;
				
				if(('innerHTML' === prop) 
   					|| ('innerText' === prop)){
				     _value = DOMPurify.sanitize(_value.toString(), {
					     USE_PROFILES: {svg: true, svgFilters: true},
					     IN_PLACE: true
				     });
			   	}
				
				else if(('value' === prop)){
				   ;
			   	}
				
				if(('src' in target) 
   					|| ('ping' in target)){
					if(prop === 'src' 
					   	|| prop === 'ping'){
						event = new w.CustomEvent('beforerequest', {
							detail: {
								endpoint: _value.toString().indexOf('http') == 0 ? w.location.origin + "/" + _value : _value.toString(),
								method:prop === 'ping' ? "POST" : "GET"
							},
							bubbles: false,
							cancelable: true
						});

						var cancelled = !d.dispatchEvent(event);

						if(cancelled){
							throw new Error("Suspicious Activity: " + event.detail.endpoint + " request, as ["+ event.detail.method+"]");
						}

					}
				}
				
				return target[prop] = _value.toString();
			}
		});
           
		_proxy[Symbol.toStringTag] = element.constructor.name;
	    
	return _proxy;
    };
	
    var newSourceStream = function(url){
	    
	    // {url} can be a string and can also be an instance of URL [ new URL() ]
	    // So, {url.toString()} is always safe!!
	    
	    var event = new w.CustomEvent('beforerequest', {
			detail: {
				endpoint: url.toString().indexOf('http') == 0 ? w.location.origin + "/" + url : url.toString(),
				method:"GET"
			},
			bubbles: false,
			cancelable: true
		});
	    
	    var cancelled = !d.dispatchEvent(event);
		    
		if(cancelled){
			throw new Error("Suspicious Activity: " + event.detail.endpoint + " request, as ["+ event.detail.method+"]");
		}
	    
	    var _args = ([]).slice.call(arguments), _proxy = new Proxy(this, {
	    	construct:function(target, args, newTarget){
			args = args || _args;
			
			return (args.length)
				? (args[1] !== undefined
				   ? new target(args[0], args[1])
				   : new target(args[0]))
			   	: new target();
		}
	    });
	    
	    _proxy[Symbol.toStringTag] = this.name;
	    
	    return _proxy;
    };

    var noop = function(){};

    if (/^(?:undefined|function)$/.test(typeof w.Image)) {
        NativeImage = w.Image || noop.bind(null);

        var FakeImage = function () {

            return createImage.apply(this, ([]).slice.call(arguments));
        };

	/**
	 * !! CAUTION !!
	 * 
	 * IE8 not supported! (IE8 `Object.defineProperty` works only on DOM elements)
	 */

  Object.defineProperty(FakeImage, 'name', {
  		enumerable: false,
  		configurable: false,
  		writable: false,
  		value: 'Image'
	});

	
        Object.defineProperty(FakeImage, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeImage.toString();
  		}
	});

	if ('toSource' in NativeImage) { // Firefox extra ##
  		Object.defineProperty(FakeImage, 'toSource', {
    			enumerable: false,
    			configurable: false,
    			writable: true,
    			value: function() {
      				return NativeImage.toSource();
    			}
  		});
	} 

	FakeImage.prototype[Symbol.toStringTag] = NativeImage.prototype.toString();

        w.Image = FakeImage;      
    }

    if(/^(?:undefined|function)$/.test(typeof d.createElement)){
	    
	NativeCreateElement = d.createElement;

        var FakeCreateElement = function(name){

            return createElement.apply(this, ([]).slice.call(arguments));
        };

	Object.defineProperty(FakeCreateElement, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeCreateElement.toString();
  		}
	});

      	d.createElement = FakeCreateElement;

    }

    if(/^function$/.test(typeof w.XMLHttpRequest)){

	NativeOpen = XMLHttpRequest.prototype.open;

	w.XMLHttpRequest.prototype.open = function(method, url, async, user, password){

		var event = new w.CustomEvent('beforerequest', {
			detail: {
				endpoint: url.toString().indexOf('http') == 0 ? w.location.origin + "/" + url : url.toString(),
				method:method
			},
			bubbles: false,
			cancelable: true
		});

		var cancelled = !d.dispatchEvent(event);
		    
	        if(cancelled){
			throw new Error("Suspicious Activity: " + event.detail.endpoint + " request, as ["+ event.detail.method+"]");
		}
		
		return NativeOpen.apply(this, ([]).slice.call(arguments));
 	};
    }
	
	if(/^function$/.test(typeof w.EventSource)){
		
		NativeEventSource = w.EventSource;
		
		w.EventSource = function(){
			
			return newSourceStream.apply(NativeEventSource, ([]).slice.call(arguments));
		};
	}
	
	  // #appendChild()
    var NativeAppendChild = Element.prototype.appendChild;
	
	  var FakeAppendChild = function(node){ 
		
		event = new w.CustomEvent('MutatedDOM', {
			detail: {
				node: node,
				action: "appended",
				target: this
			},
			bubbles: false,
			cancelable: true
		});

		var cancelled = !d.dispatchEvent(event);

		if(cancelled){
			throw new Error("Suspicious Activity: " + event.detail.node + " was ["+ event.detail.action+"] in an untrustworthy manner");
		}
		
		node = new DOMParser().parseFromString(DOMPurify.sanitize(node.valueOf(), {
			IN_PLACE: true     
    		}), "text/html");
		
		return NativeAppendChild.apply(this, [node.body.valueOf()]); 
	};
	
	Object.defineProperty(FakeAppendChild, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeAppendChild.toString();
  		}
	});
	
	Element.prototype.appendChild = FakeAppendChild;
	
	// #removeChild()
    	var NativeRemoveChild = Element.prototype.removeChild;
	
	var FakeRemoveChild = function(node){ 
		
		event = new w.CustomEvent('MutatedDOM', {
			detail: {
				node: node,
				action: "removed",
				target: this
			},
			bubbles: false,
			cancelable: true
		});

		var cancelled = !d.dispatchEvent(event);

		if(cancelled){
			throw new Error("Suspicious Activity: " + event.detail.node + " was ["+ event.detail.action+"] in an untrustworthy manner");
		}
		
		node = new DOMParser().parseFromString(DOMPurify.sanitize(node.valueOf(), {
			IN_PLACE: true     
    		}), "text/html");
		
		return NativeRemoveChild.apply(this, [node.body.valueOf()]); 
	};
	
	Object.defineProperty(FakeRemoveChild, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeRemoveChild.toString();
  		}
	});
	
	Element.prototype.removeChild = FakeRemoveChild;
	
	
	// #replaceChild()
	var NativeReplaceChild = Element.prototype.replaceChild;
	
	var FakeReplaceChild = function(newChild, oldChild){ 
		
		newChild = new DOMParser().parseFromString(DOMPurify.sanitize(newChild.valueOf(), {
			IN_PLACE: true     
	     	}), "text/html");
		
		return NativeReplaceChild.apply(this, [newChild.body.valueOf(), oldChild.valueOf()]); 
	};
	
	Object.defineProperty(FakeReplaceChild, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeReplaceChild.toString();
  		}
	});
	
	Element.prototype.replaceChild = FakeReplaceChild;
	
	// #insertBefore
	var NativeInsertBefore = Element.prototype.replaceChild;
	
	var FakeInsertBefore = function(newNode, refNode){ 

		newNode = new DOMParser().parseFromString(DOMPurify.sanitize(newNode.valueOf(), {
			IN_PLACE: true     
    		}), "text/html");
		
		return NativeInsertBefore.apply(this, [newNode.body.valueOf(), refNode.valueOf()]); 
	};
	
	Object.defineProperty(FakeInsertBefore, 'toString', {
  		enumerable: true,
  		configurable: false,
  		writable: true,
  		value: function() {
    			return NativeInsertBefore.toString();
  		}
	});
	
	Element.prototype.replaceChild = FakeInsertBefore;

}(this, this.document));
