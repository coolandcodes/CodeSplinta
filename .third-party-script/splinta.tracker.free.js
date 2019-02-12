/*!
 * Splinta.tracker.js
 * Copyright (c) 2018 - 2019 Oparand - CoolCodes
 *
 * @author: Ifeora Okechukwu
 * @vendor: CoolCodes
 * @version: 0.1.2
 */

/**
  Basic Polyfilling / Workarounds
  
  @see: http://engineering.silk.co/post/31921750832/mutation-events-what-happens/
  @see: https://github.com/kronicker/sendbeacon-polyfill/blob/master/sendbeacon.js
  @see: https://gist.github.com/RubaXa/...
  
  # [ document.currentScript ]
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
	
  if(!(d.currentScript)){
     ;
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
	
  if (!(w.performance && w.performance.now)) { // IE9 is a major culprit!!
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
		performance.now = performance.webkitNow || performance.mozNow || performance.msNow || function (){
			return (Date.now ? Date.now() : +(new Date)) - startOffset;
		};
	}


	if( !performance.mark ){
		performance.mark = performance.webkitMark || function (name){
			var mark = {
				  name:			name
				, entryType:	'mark'
				, startTime:	performance.now()
				, duration:		0
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
				  name:			name
				, entryType:	'measure'
				, startTime:	startMark
				, duration:		endMark - startMark
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
	
 (function(hasMuatationEvent) {
  if (w.JsMutationObserver) {
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
	  w.Storage.prototype.hasKey = function(key){
		return !!this[key];
	  };
  }
	
}(this, this.document, this.navigator));

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
	var $error = originalConsole.error;
	var $log = originalConsole.log;
	
	var __consoleOutputCache = {
		warn:{'1445283629563':""},
		_warn:[],
		error:{},
		_error:[],
		log:{},
		_log:[]
	};
	
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
		
		}
		
		if(n.onLine){
			n.sendBeacon(
				"https://reporting.codesplinta.co/ping?type=console_output", 
				JSON.stringify(__consoleOutputCache)
			);
		}else{
			w.localStorage(
				CONSOLE_CACHE_PERSIST_KEY, 
				JSON.stringify(__consoleOutputCache)
			);
		}
	};
	
	if(!isTrident_IE && w.addEventListener){
	
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

	'use strict'; // @Shim : polyfill CustomEvent for IE 8 - 11

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
			
			w.setTimeout(function(){ // not redirecting to... https://wall.codesplinta.com/0x2335
				var img = new Image();
				img.src = "https://reporting.codesplinta.co/violation?mode=no_redirect&type=devtools_tamper&page_url="
					+ encodeURIComponent(w.location.origin)
					+"&timestamp="
					+ String((new Date()*1))
					+ "&page_title="
					+ d.title
					+ "&mode=browser_shortcut_keypress"
   			}, 1500);
			return false;
  		}
	};
	
	var _consoleMsg = function(e){
		
		
		if(e.detail.open){
			 d.devToolsTamperStart = (new Date()*1);
			 
			w.setTimeout(function(){ // redirecting to... https://wall.codesplinta.com/0x2335
				w.location.assign(
					"https://reporting.codesplinta.co/violation?type=devtools_tamper&page_url="
					+ encodeURIComponent(w.location.origin)
					+"&page_title="
					+ d.title
					+"&timestamp="
					+ String(d.devToolsTamperStart)
					+ "&mode=browser_menu_click"
				);
			}, 1500);
		}else{
			d.devToolsTamperEnd = (new Date()*1);
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
			 * When the [ Console ] isn't open in IE 9, 
			 * the {console} object is "undefined"
			 *
			 * We try to detect Chrome / Firefox / Safari / Edge
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
				    c.log(tag);
				}else{
				    c.log(element);
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

/**
	using the Proxy object to wrap around native DOM APIs and raise events for certain actions
	
	{{ synthetic mutation events & synthetic network request check events }}

	@see: https://www.phpied.com/intercepting-new-image-src-requests/
*/

;(function (w, d) {
	
    var NativeImage, NativeOpen, NativeCreateElement, NativeEventSource;
	
    (function() {
  
	  /**
	   * @see: https://stackoverflow.com/questions/39560085/change-innerhtml-set-on-the-fly
	   *
	   * We wish to "spy" on [ value ], [ innerHTML ] and [ innerText ] and sanitize against
	   * suspicious XSS-potential strings.
	   *
	   * So, we rely on a clear trickery to extract the property descriptor and resuse it as
	   * below to redefine the property descriptor
	   */
	  var originalDesc_innerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
	  var originalDesc_innerText = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
  	  var originalDesc_Input_value = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
	  var originalDesc_Textarea_value = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value");

	  if(typeof originalDesc_Input_value == "undefined"){
	     ; // use "__lookupSetter__" & "__defineSetter__" as Chrome doesn't let you access property descriptors
     	  }else{
	    
	Object.defineProperty(HTMLInputElement.prototype, "value", {
		 configurable:originalDesc_Input_value.configurable,
		 enumerable:originalDesc_Input_value.enumerable,
		 get:originalDesc_Input_value.get,
		 set:function value(_value){
      			
			var new_value = purify(_value)
			
			if(w.console){
				w.console.log({
					target_api:'value',
					dom_tag_name:'<'+this.nodeName+'>',
					old_value:value, 
					new_value:new_value, 
					action:'set', 
					timestamp:(new Date).getTime()
				});
			}

      			return originalDesc_Input_value.set.call(this, new_value);     
		}
	});
	  }
    	Object.defineProperty(HTMLTextAreaElement.prototype, "value", {
		 configurable:originalDesc_Textarea_value.configurable,
		 enumerable:originalDesc_Textarea_value.enumerable,
		 get:originalDesc_Textarea_value.get,
		 set:function value(_value){
      			
			var new_value = purify(_value)
			
			if(w.console){
				w.console.log({
					target_api:'value',
					dom_tag_name:'<'+this.nodeName+'>',
					old_value:value, 
					new_value:new_value, 
					action:'set', 
					timestamp:(new Date).getTime()
				});
			}

      			return originalDesc_Textarea_value.set.call(this, new_value);     
		}
	})
	  
    	Object.defineProperty(Element.prototype, 'innerHTML', {
		configurable:originalDesc_innerHTML.configurable,
		enumerable:originalDesc_innerHTML.enumerable,
		get:originalDesc_innerHTML.get,
	    	set: function innerHTML(value) {
			// spy on it !
			var new_value = purify(value);

			if(w.console){
				w.console.log({
					target_api:'innerHTML',
					dom_tag_name:'<'+this.nodeName+'>',
					old_value:value, 
					new_value:new_value, 
					action:'set', 
					timestamp:(new Date).getTime()
				});
			}

			// Call the original setter
			return originalDesc_innerHTML.set.call(this, new_value);
	    	}
	  });
	    
	  Object.defineProperty(Element.prototype, 'innerText', {
	  	configurable:originalDesc_innerText.configurable,
		enumerable:originalDesc_innerText.enumerable,
		get:originalDesc_innerText.get,
	    	set: function innerText(value) {
			// spy on it !
			var new_value = purify(value);

			if(w.console){
				w.console.log({
					target_api:'innerText',
					dom_tag_name:'<'+this.nodeName+'>',
					old_value:value, 
					new_value:new_value, 
					action:'set', 
					timestamp:(new Date).getTime()
				});
			}

			// Call the original setter
			return originalDesc_innerText.set.call(this, new_value);
	    	}
	  });

	  function purify(value) {
	  	
	    	return DOMPurify.sanitize(String(value), {
		     USE_PROFILES: {svg: true, svgFilters: true, html: true},
		     ADD_TAGS: ['trix-editor'], // Basecamp's Trix Editor
		     ADD_ATTR: ['nonce'], // for Content-Security-Policy internal <script> / <style> tags
                     KEEP_CONTENT:false,
		     IN_PLACE:true,
		     ALLOW_DATA_ATTR:true,
		     FORBID_ATTR:['ping'], // <a ping="http://example.com"></a>
		     SAFE_FOR_JQUERY:true
	     	});
	  }
                        
    })();


    var createImage = function () {
        var image = new NativeImage(), event; 

        var _image = Object.defineProperty(this, 'src', {
            set: function (srcAttr) {

		event = new w.CustomEvent('beforerequest', {
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
					     ADD_TAGS: ['v-cloak', 'v-bind', 'v-on']
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
		
		node = DOMPurify.sanitize(node.valueOf(), {
			IN_PLACE: true     
	     	});
		
		return NativeAppendChild.apply(this, [node.valueOf()]); 
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
		
		node = DOMPurify.sanitize(node.valueOf(), {
			IN_PLACE: true     
	     	});
		
		return NativeRemoveChild.apply(this, [node.valueOf()]); 
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
		
		newChild = DOMPurify.sanitize(newChild.valueOf(), {
			IN_PLACE: true     
	     	});
		
		return NativeReplaceChild.apply(this, [newChild.valueOf(), oldChild.valueOf()]); 
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
		
		newNode = DOMPurify.sanitize(newNode.valueOf(), {
			IN_PLACE: true     
	     	});
		
		return NativeInsertBefore.apply(this, [newNode.valueOf(), refNode.valueOf()]); 
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


/**
 * DOMPurify
 * Copyright 2015 Mario Heiderich
 *
 * DOMPurify is free software; you can redistribute it and/or modify it under the terms of either:
 *
 * @version: 1.0.8
 *
 */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DOMPurify = factory());
}(this, (function () { 'use strict';

var html = ['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];

// SVG
var svg = ['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern'];

var svgFilters = ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence'];

var mathMl = ['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmuliscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mpspace', 'msqrt', 'mystyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover'];

var text = ['#text'];

var html$1 = ['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns'];

var svg$1 = ['accent-height', 'accumulate', 'additivive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan'];

var mathMl$1 = ['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'];

var xml = ['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink'];

/* Add properties to a lookup table */
function addToSet(set, array) {
  var l = array.length;
  while (l--) {
    if (typeof array[l] === 'string') {
      array[l] = array[l].toLowerCase();
    }
    set[array[l]] = true;
  }
  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};
  var property = void 0;
  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}

var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm; // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;
var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/; // eslint-disable-line no-useless-escape
var ARIA_ATTR = /^aria-[\-\w]+$/; // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i; // eslint-disable-line no-useless-escape
var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // eslint-disable-line no-control-regex

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '1.0.8';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false;
  var removeTitle = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;
  var importNode = originalDocument.importNode;


  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  var IN_PLACE = false;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    /* Shield configuration object from tampering */
    if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }
    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (Object && 'freeze' in Object) {
      Object.freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (err) {
      node.outerHTML = '';
    }
  };

  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      DOMPurify.removed.push({
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (err) {
      DOMPurify.removed.push({
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
  };

  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var leadingWhitespace = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = dirty.match(/^[\s]+/);
      leadingWhitespace = matches && matches[0];
      if (leadingWhitespace) {
        dirty = dirty.slice(leadingWhitespace.length);
      }
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (err) {}
    }

    /* Remove title to fix a mXSS bug in older MS Edge */
    if (removeTitle) {
      addToSet(FORBID_TAGS, ['title']);
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      var _doc = doc,
          body = _doc.body;

      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = dirty;
    }

    if (leadingWhitespace) {
      doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  //
  // MS Edge, in older versions, is affected by an mXSS behavior. The second
  // check tests for the behavior and fixes it if necessary.
  if (DOMPurify.isSupported) {
    (function () {
      try {
        var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (err) {}
    })();
    (function () {
      try {
        var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
        if (doc.querySelector('title').innerHTML.match(/<\/title/)) {
          removeTitle = true;
        }
      } catch (err) {}
    })();
  }

  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }
    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function') {
      return true;
    }
    return false;
  };

  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
        } catch (err) {}
      }
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      if (currentNode.innerHTML) {
        currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
      } else {
        currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
      }
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR$$1, ' ');
      content = content.replace(ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Sanitize attribute content to be template-safe */
    if (SAFE_FOR_TEMPLATES) {
      value = value.replace(MUSTACHE_EXPR$$1, ' ');
      value = value.replace(ERB_EXPR$$1, ' ');
    }

    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
      // This attribute is safe
    } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
      // This attribute is safe
      /* Otherwise, check the name is permitted */
    } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) {
      // This attribute is safe
      /* Check no script, data or unknown possibly unsafe URI
        unless we know URI values are safe for that attribute */
    } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Keep image data URIs alive if src/xlink:href is allowed */
      /* Further prevent gadget XSS for dynamically built script tags */
    } else if ((lcName === 'src' || lcName === 'xlink:href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) {
      // This attribute is safe
      /* Allow unknown protocols: This provides support for links that
        are handled by protocol handlers which may be unknown ahead of
        time, e.g. fb:, spotify: */
    } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Check for binary attributes */
      // eslint-disable-next-line no-negated-condition
    } else if (!value) {
      // Binary attributes are safe at this point
      /* Anything else, presume unsafe, do not add it back */
    } else {
      return false;
    }
    return true;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} node to sanitize
   */
  // eslint-disable-next-line complexity
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;

      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = Array.prototype.slice.apply(attributes);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }
        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Is `value` valid for this attribute? */
      var lcTag = currentNode.nodeName.toLowerCase();
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }
        DOMPurify.removed.pop();
      } catch (err) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw new TypeError('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }
        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (IN_PLACE) {
      /* No special handling necessary for in-place sanitization */
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
        return dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : '';
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }
    var lcTag = tag.toLowerCase();
    var lcName = attr.toLowerCase();
    return _isValidAttribute(lcTag, lcName, value);
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));
 
