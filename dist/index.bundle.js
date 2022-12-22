/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entryRedactor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		// trim whitespace for custom property (issue gh-4926)
		if ( isCustomProp ) {

			// rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" );
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!*****************************************************************!*\
  !*** ./src/components sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content_selector/content_selector_dragNdrop.js": "./src/components/content_selector/content_selector_dragNdrop.js",
	"./content_selector/content_selector_settings.js": "./src/components/content_selector/content_selector_settings.js",
	"./global/Sortable.js": "./src/components/global/Sortable.js",
	"./global/global.js": "./src/components/global/global.js",
	"./main_selector/main_selector_dragNdrop.js": "./src/components/main_selector/main_selector_dragNdrop.js",
	"./main_selector/main_selector_settings.js": "./src/components/main_selector/main_selector_settings.js",
	"./modules/button/buttonModule.js": "./src/components/modules/button/buttonModule.js",
	"./modules/button/buttonSettings.js": "./src/components/modules/button/buttonSettings.js",
	"./modules/form/formModule.js": "./src/components/modules/form/formModule.js",
	"./modules/form/formSettings.js": "./src/components/modules/form/formSettings.js",
	"./modules/form/inputsSettings.js": "./src/components/modules/form/inputsSettings.js",
	"./modules/form/sumbitSettings.js": "./src/components/modules/form/sumbitSettings.js",
	"./modules/image/imageModule.js": "./src/components/modules/image/imageModule.js",
	"./modules/image/imageSettings.js": "./src/components/modules/image/imageSettings.js",
	"./modules/line/lineModule.js": "./src/components/modules/line/lineModule.js",
	"./modules/line/lineSettings.js": "./src/components/modules/line/lineSettings.js",
	"./modules/list/listModule.js": "./src/components/modules/list/listModule.js",
	"./modules/list/listSettings.js": "./src/components/modules/list/listSettings.js",
	"./modules/modules.js": "./src/components/modules/modules.js",
	"./modules/subscribe/subscribeDelivery.js": "./src/components/modules/subscribe/subscribeDelivery.js",
	"./modules/subscribe/subscribeInputsSettings.js": "./src/components/modules/subscribe/subscribeInputsSettings.js",
	"./modules/subscribe/subscribeModule.js": "./src/components/modules/subscribe/subscribeModule.js",
	"./modules/subscribe/subscribeSettings.js": "./src/components/modules/subscribe/subscribeSettings.js",
	"./modules/subscribe/subscribeSumbitSettings.js": "./src/components/modules/subscribe/subscribeSumbitSettings.js",
	"./modules/text/textModule.js": "./src/components/modules/text/textModule.js",
	"./modules/text/textSettings.js": "./src/components/modules/text/textSettings.js",
	"./modules/video/videoModule.js": "./src/components/modules/video/videoModule.js",
	"./modules/video/videoSettings.js": "./src/components/modules/video/videoSettings.js",
	"./page/page.js": "./src/components/page/page.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./src/components/content_selector/content_selector.css":
/*!**************************************************************!*\
  !*** ./src/components/content_selector/content_selector.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/content_selector/content_selector_dragNdrop.js":
/*!***********************************************************************!*\
  !*** ./src/components/content_selector/content_selector_dragNdrop.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _content_selector_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content_selector.css */ "./src/components/content_selector/content_selector.css");
/* harmony import */ var _content_selector_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_selector_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/Sortable.js */ "./src/components/global/Sortable.js");



(function () {
  'use strict';

  var content, style;
  _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create(contentSelector, {
    group: {
      name: 'content-selector',
      pull: 'clone'
    },
    sort: true,
    animation: 150,
    ghostClass: 'green-background-class',
    filter: '.resizer, .handle, .block-resizer',
    onStart: function onStart(evt) {
      $('.handle').css('display', 'none');
      $('.main-selector').each(function (ind, el) {
        $(el).find('> .content:not(:last)').addClass('border-hover');
      });
      $('.content-selector').each(function (ind, el) {
        $(el).find('> .content:not(:last)').addClass('border-hover-content');
      });
      $('.content-block-settings').css('display', 'none');
    },
    onEnd: function onEnd(e) {
      /*Разместить*/
      $('.border-hover').removeClass('border-hover');
      $('.border-hover-content').removeClass('border-hover-content');
      $('.handle').css('display', 'block');
      if (e.target != e.to) {
        switch (e.item.id) {
          case 'content-selector-1':
            {
              var selector1 = '<div id="content_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="col-md-12 content-selector">' + '<div class="content-block-settings"> ' + '<div class="copy-content">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> ' + '<div class="remove-content">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="add-content-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-content-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div>' + '<div class="settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-12 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector1);
              var id = $(selector1).find('.content').attr('id');

              //Драг н дроп из контентового блока
              _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + id + "").get(0), {
                group: {
                  name: 'content-selector',
                  put: 'content-selector'
                },
                sort: true,
                animation: 150,
                ghostClass: 'green-background-class',
                filter: '.resizer, .handle, .block-resizer',
                onChoose: function onChoose(e) {
                  if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                    var textBlockElem = document.getElementById($(e.item).attr('id'));
                    var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                    var textElem = textBlockElem.getElementsByClassName('text')[0];
                    content = iframe.contentWindow.document.body.innerHTML;
                    var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                    styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                    styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                    styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                    styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                    style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                  }
                },
                onStart: function onStart(evt) {
                  $('.handle').css('display', 'none');
                  $('.main-selector').each(function (ind, el) {
                    $(el).find('> .content:not(:last)').addClass('border-hover');
                  });
                  $('.content-selector').each(function (ind, el) {
                    $(el).find('> .content:not(:last)').addClass('border-hover-content');
                  });
                },
                onEnd: function onEnd(evt) {
                  $('.handle').css('display', 'block');
                  $('.border-hover-content').removeClass('border-hover-content');
                  $('.border-hover').removeClass('border-hover');
                  if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                    var textBlockElem = document.getElementById($(evt.item).attr('id'));
                    var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                    var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                    init(iframe, content, style);
                    textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                    iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                    addFunctionalityToIframe($(evt.item).attr('id'));
                  }
                  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                }
              });
              break;
            }
          case 'content-selector-2':
            {
              var selector2 = '<div id="content_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="col-md-12 content-selector">' + '<div class="content-block-settings"> ' + '<div class="copy-content">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> ' + '<div class="remove-content">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="add-content-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-content-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div>' + '<div class="settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-6 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div>' + '<div class="col-md-6 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div>' + '</div>';
              $(e.item).replaceWith(selector2);
              $(selector2).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  filter: '.resizer, .handle, .block-resizer',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover-content').removeClass('border-hover-content');
                    $('.border-hover').removeClass('border-hover');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
          case 'content-selector-3':
            {
              var selector3 = '<div id="content_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="col-md-12 content-selector">' + '<div class="content-block-settings"> ' + '<div class="copy-content">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> ' + '<div class="remove-content">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="add-content-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-content-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div>' + '<div class="settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div>' + '<div class="col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div> ' + '<div class="col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div>' + '</div>';
              $(e.item).replaceWith(selector3);
              $(selector3).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  filter: '.resizer, .handle, .block-resizer',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover-content').removeClass('border-hover-content');
                    $('.border-hover').removeClass('border-hover');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
          case 'content-selector-4':
            {
              var selector4 = '<div id="content_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="col-md-12 content-selector">' + '<div class="content-block-settings"> ' + '<div class="copy-content">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> ' + '<div class="remove-content">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="add-content-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-content-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div>' + '<div class="settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div>' + '<div class="col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div>' + '<div class="col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div>' + '</div> ' + '<div class="col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div>' + '</div>';
              $(e.item).replaceWith(selector4);
              $(selector4).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  filter: '.resizer, .handle, .block-resizer',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover-content').removeClass('border-hover-content');
                    $('.border-hover').removeClass('border-hover');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
      }
      $('.handle').resizer();
      $('.resizer').resizer_s();
      $('.block-resizer').block_resizer();
      $('.content-block-settings').css('display', 'flex');
    }
  });
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/content_selector/content_selector_settings.js":
/*!**********************************************************************!*\
  !*** ./src/components/content_selector/content_selector_settings.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/image/imageModule.js */ "./src/components/modules/image/imageModule.js");
/* harmony import */ var _modules_line_lineModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/line/lineModule.js */ "./src/components/modules/line/lineModule.js");
/* harmony import */ var _modules_list_listModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/list/listModule.js */ "./src/components/modules/list/listModule.js");
/* harmony import */ var _modules_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/form/formModule.js */ "./src/components/modules/form/formModule.js");
/* harmony import */ var _modules_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/subscribe/subscribeModule.js */ "./src/components/modules/subscribe/subscribeModule.js");
/* harmony import */ var _modules_text_textModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/text/textModule.js */ "./src/components/modules/text/textModule.js");
/* harmony import */ var _modules_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/button/buttonModule.js */ "./src/components/modules/button/buttonModule.js");








$('#mainArea').on('click', '.remove-content', function () {
  $(this).parents('.content-selector').first().remove();
});
$('#mainArea').on('click', '.copy-content', function () {
  var $copyElement = $(this).parents('.content-selector').first().clone();
  $($copyElement).find('.content').each(function () {
    $(this).attr('id', Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.imageBlock').each(function () {
    $(this).attr('id', 'image' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.videoBlock').each(function () {
    $(this).attr('id', 'video' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.textBlock').each(function () {
    $(this).attr('id', 'text' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.buttonBlock').each(function () {
    $(this).attr('id', 'button' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.formBlock').each(function () {
    $(this).attr('id', 'form' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    $(this).attr('id', 'subscribe' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.listBlock').each(function () {
    $(this).attr('id', 'list' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.lineBlock').each(function () {
    $(this).attr('id', 'line' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $(this).parents('.content-selector').first().after($copyElement);
  $($copyElement).find('.imageBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToElement"])(cloneId);
  });
  $($copyElement).find('.videoBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToElement"])(cloneId);
  });
  $($copyElement).find('.textBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_text_textModule_js__WEBPACK_IMPORTED_MODULE_6__["addFunctionalityToTextElement"])(cloneId);
  });
  $($copyElement).find('.buttonBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_7__["addFunctionalityToButtonElement"])(cloneId);
  });
  $($copyElement).find('.formBlock').each(function () {
    var cloneId = $(this).attr('id');
    var formId = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
    document.getElementById(cloneId).getElementsByTagName('form')[0].id = formId;
    var inputs = document.getElementById(formId).getElementsByClassName('payInput');
    Sortable.create($("#" + formId + "").get(0), {
      animation: 150,
      swapThreshold: 1,
      emptyInsertThreshold: 1,
      ghostClass: 'blue-background-class',
      onStart: function onStart(e) {
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].onblur = function () {
            return false;
          };
        }
      },
      onEnd: function onEnd(e) {
        var _loop = function _loop(i) {
          inputs[i].blur();
          inputs[i].onblur = function () {
            inputs[i].placeholder = inputs[i].value;
            inputs[i].value = '';
          };
        };
        for (var i = 0; i < inputs.length; i++) {
          _loop(i);
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    });
    Object(_modules_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__["addFunctionalityToFormElement"])(cloneId);
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    var cloneId = $(this).attr('id');
    addDragAndDropToForm(cloneId);
    Object(_modules_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__["addFunctionalityToSubscribeElement"])(cloneId);
  });
  $($copyElement).find('.listBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_list_listModule_js__WEBPACK_IMPORTED_MODULE_3__["addFunctionalityToListElement"])(cloneId);
  });
  $($copyElement).find('.lineBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_line_lineModule_js__WEBPACK_IMPORTED_MODULE_2__["addFunctionalityToLineElement"])(cloneId);
  });
  $($copyElement).find('.content').each(function () {
    Sortable.create($('#' + $(this).attr('id') + '').get(0), {
      group: 'content-selector',
      put: 'content-selector',
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onEnd: function onEnd(evt) {
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    });
  });
  $('.handle').resizer();
  $('.resizer').resizer_s();
  $('.block-resizer').block_resizer();
});
$('#mainArea').on('click', '.add-content-block', function () {
  var $this = this;
  var maxIndex;
  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');
  if (cols.length == 12) return;
  var $colSizes = [];
  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');
    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i)) $colSizes.push(parseInt(el.split('-')[2]));
    });
  });
  maxIndex = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["indexOfMax"])($colSizes);
  var maxValueSection = $($this).parents('.content-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(maxValueSection).removeClass(el);
      $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
    }
  });
  addContentSelectorSection($this);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.remove-content-block', function () {
  var $this = $(this);
  var cols = $(this).parents('.content-selector').find('>[class*="col-"]');
  if (cols.length == 1) return;
  removeContentSelectorSection($this);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#content-block-border-style-value').off();
  $('#content-block-border-left-style-value').off();
  $('#content-block-border-right-style-value').off();
  $('#content-block-border-top-style-value').off();
  $('#content-block-border-bottom-style-value').off();
  $('#content-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.content-block-settings').parent();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#content-block-timeout-hour-value').val(h);
    $('#content-block-timeout-minute-value').val(m);
    $('#content-block-timeout-second-value').val(s);
    $('#content-block-display-none-value').prop('checked', true);
  } else {
    $('#content-block-timeout-hour-value').val(0);
    $('#content-block-timeout-minute-value').val(0);
    $('#content-block-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#test').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  /*Инициализация инпутов*/
  $('#content-block-width-value').val($(ths).width());
  $('#content-block-width-value-range').val($(ths).width());
  $('#content-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#content-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));
  $('#content-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#content-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));
  $('#content-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#content-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));
  $('#content-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#content-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));
  $('#content-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#content-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));
  $('#content-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#content-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));
  $('#content-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#content-block-opacity-value-range').val($(ths).css('opacity') * 100);
  $('#content-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#content-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));
  $('#content-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#content-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#content-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#content-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#content-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#content-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#content-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#content-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));
  var videolnk = String($(ths).find('.background-video iframe').attr('src')).split('?')[0];
  if (videolnk != "undefined") {
    $('#content-block-videolink').val(videolnk);
  } else {
    $('#content-block-videolink').val('');
  }

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('content-block-display-none-value').checked = true;
  } else {
    document.getElementById('content-block-display-none-value').checked = false;
  }
  $('#content-block-display-none-value, #content-block-timeout-hour-value, #content-block-timeout-hour-value-range, #content-block-timeout-minute-value, #content-block-timeout-minute-value-range, #content-block-timeout-second-value, #content-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#content-block-timeout-hour-value').val() * 3600;
    var minute = $('#content-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#content-block-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('content-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "content-block-timeout-hour-value") {
      $('#content-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-hour-value-range") {
      $('#content-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value") {
      $('#content-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-minute-value-range") {
      $('#content-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value") {
      $('#content-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "content-block-timeout-second-value-range") {
      $('#content-block-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/
  /*Изменение ширины основного селектора*/
  $('#content-block-width-value, #content-block-width-value-range').on('input', function () {
    var contentBlockId = $(ths).attr('id');
    var contentBlockElem = document.getElementById(contentBlockId);
    var cssClassContentArray = contentBlockElem.getElementsByClassName('content');
    var img = {};
    var imgWidth = 0;
    var wrapperWidth = 0;
    for (var i = 0; i < cssClassContentArray.length; i++) {
      if (cssClassContentArray[i].getElementsByClassName('img')[0]) {
        img = cssClassContentArray[i].getElementsByClassName('img')[0];
        imgWidth = parseFloat(getComputedStyle(img).width);
        wrapperWidth = parseFloat(getComputedStyle(cssClassContentArray[i]).width);
        if (wrapperWidth <= imgWidth + 40) {
          img.style.width = '100%';
        }
      }
    }
    $(ths).width($(this).val());
    if ($(this).attr('id') == "content-block-width-value") {
      $('#content-block-width-value-range').val($(this).val());
    } else {
      $('#content-block-width-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-margin-top-value, #content-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');
    if ($(this).attr('id') == "content-block-margin-top-value") {
      $('#content-block-margin-top-value-range').val($(this).val());
    } else {
      $('#content-block-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-margin-bottom-value, #content-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "content-block-margin-bottom-value") {
      $('#content-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-padding-top-value, #content-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-top-value") {
      $('#content-block-padding-top-value-range').val($(this).val());
    } else {
      $('#content-block-padding-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-padding-bottom-value, #content-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-bottom-value") {
      $('#content-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#content-block-padding-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-padding-left-value, #content-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-left-value") {
      $('#content-block-padding-left-value-range').val($(this).val());
    } else {
      $('#content-block-padding-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-padding-right-value, #content-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-padding-right-value") {
      $('#content-block-padding-right-value-range').val($(this).val());
    } else {
      $('#content-block-padding-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-opacity-value, #content-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);
    if ($(this).attr('id') == "content-block-opacity-value") {
      $('#content-block-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для всех границ блока*/
  $('#content-block-border-thickness-value, #content-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-thickness-value") {
      $('#content-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-radius-value, #content-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-radius-value") {
      $('#content-block-border-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#content-block-border-left-thickness-value, #content-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-left-thickness-value") {
      $('#content-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-left-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#content-block-border-top-thickness-value, #content-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-thickness-value") {
      $('#content-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-top-left-radius-value, #content-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-left-radius-value") {
      $('#content-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-left-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-top-right-radius-value, #content-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-top-right-radius-value") {
      $('#content-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-top-right-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#content-block-border-right-thickness-value, #content-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-right-thickness-value") {
      $('#content-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-right-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#content-block-border-bottom-thickness-value, #content-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-thickness-value") {
      $('#content-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-bottom-left-radius-value, #content-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-left-radius-value") {
      $('#content-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-left-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-bottom-right-radius-value, #content-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "content-block-border-bottom-right-radius-value") {
      $('#content-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#content-block-border-bottom-right-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  $('#content-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders':
        {
          $('#content-block-all-border-settings').show();
          $('#content-block-each-border-settings').hide();
          break;
        }
      case 'eachborders':
        {
          $('#content-block-all-border-settings').hide();
          $('#content-block-each-border-settings').show();
          break;
        }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color':
        {
          $('.content-block-background-color-settings').show();
          $('.content-block-background-gradient-settings').hide();
          $('.content-block-background-image-settings').hide();
          break;
        }
      case 'gradient':
        {
          $('.content-block-background-color-settings').hide();
          $('.content-block-background-gradient-settings').show();
          $('.content-block-background-image-settings').hide();
          break;
        }
      case 'bgimage':
        {
          $('.content-block-background-color-settings').hide();
          $('.content-block-background-gradient-settings').hide();
          $('.content-block-background-image-settings').show();
          break;
        }
    }
  });

  /*Посмотреть, хз че это вообще такое и что оно тут делает???????????*/

  $('#content-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#content-block-gradient-angle').val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#content-block-gradient-color-1').val() + ', ' + $('#content-block-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-content-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-content-color').val(), opacity / 100);
    $(ths).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-content-color').on('change', function () {
    var opacity = $('#content-block-content-color-opacity').val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity / 100);
    $(ths).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#content-block-background-image-file').files[0];
    var token = $('input[name=_token][type=hidden]').val();
    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());
    $.ajax({
      url: '/editor/saveimage',
      method: 'post',
      data: form_data,
      contentType: false,
      processData: false,
      success: function success(e) {
        $(ths).css('background-image', 'url(' + e.link + ')');
      }
    });
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки теней*/

  $('#content-block-shadow-horizontal-value, #content-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-horizontal-value") {
      $('#content-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-vertical-value, #content-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-vertical-value") {
      $('#content-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-blur-value, #content-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-blur-value") {
      $('#content-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-spread-value, #content-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-spread-value") {
      $('#content-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-opacity-value, #content-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "content-block-shadow-opacity-value") {
      $('#content-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#content-block-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-color-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $('#content-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-shadow-inset-value').on('change', function () {
    var hv = $('#content-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#content-block-shadow-vertical-value').val() + 'px';
    var blr = $('#content-block-shadow-blur-value').val() + 'px';
    var sprd = $('#content-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#content-block-shadow-color-value').val(), $('#content-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#content-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#content-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#content-block-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#content-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/

  //Конец блока
});

function addContentSelectorSection($this) {
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-md-1" id="' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.content-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      filter: '.resizer, .handle, .block-resizer',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function onStart(evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function onEnd(evt) {
        $('.handle').css('display', 'block');
        $('.border-hover-content').removeClass('border-hover-content');
        $('.border-hover').removeClass('border-hover');
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    });
  });
}
function removeContentSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.content-selector').find('>[class*="col-"]').last();
  $($(lastElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $delta = el.split('-')[2];
    }
  });
  var prevElement = lastElement.prev();
  lastElement.remove();
  $(prevElement).find('.handle').remove();
  $($(prevElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $(prevElement).removeClass(el);
      $(prevElement).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) + parseInt($delta)));
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/global/Sortable.js":
/*!*******************************************!*\
  !*** ./src/components/global/Sortable.js ***!
  \*******************************************/
/*! exports provided: Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**!
 * Sortable
 * @author    RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

var sortableWithCorrects;
(function sortableModule(factory) {
  "use strict";

  if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    define(factory);
  } else if ( true && typeof module.exports != "undefined") {
    module.exports = factory();
  } else {
    /* jshint sub:true */
    window["Sortable"] = factory();
  }
})(function sortableFactory() {
  "use strict";

  if (typeof window === "undefined" || !window.document) {
    return function sortableError() {
      throw new Error("Sortable.js requires a window with a document");
    };
  }
  var dragEl,
    parentEl,
    ghostEl,
    cloneEl,
    rootEl,
    nextEl,
    lastDownEl,
    pageY = 0,
    pageInfoDrag = 0,
    scrollEl,
    scrollParentEl,
    scrollCustomFn,
    lastEl,
    lastCSS,
    lastParentCSS,
    oldIndex,
    newIndex,
    activeGroup,
    putSortable,
    autoScroll = {},
    tapEvt,
    touchEvt,
    moved,
    /** @const */
    R_SPACE = /\s+/g,
    R_FLOAT = /left|right|inline/,
    expando = 'Sortable' + new Date().getTime(),
    win = window,
    document = win.document,
    parseInt = win.parseInt,
    setTimeout = win.setTimeout,
    $ = win.jQuery || win.Zepto,
    Polymer = win.Polymer,
    captureMode = false,
    passiveMode = false,
    supportDraggable = ('draggable' in document.createElement('div')),
    supportCssPointerEvents = function (el) {
      // false when IE11
      if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
        return false;
      }
      el = document.createElement('x');
      el.style.cssText = 'pointer-events:auto';
      return el.style.pointerEvents === 'auto';
    }(),
    _silent = false,
    abs = Math.abs,
    min = Math.min,
    savedInputChecked = [],
    touchDragOverListeners = [],
    _autoScroll = _throttle(function ( /**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
      // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
      if (rootEl && options.scroll) {
        var _this = rootEl[expando],
          el,
          rect,
          sens = options.scrollSensitivity,
          speed = options.scrollSpeed,
          x = evt.clientX,
          y = evt.clientY,
          winWidth = window.innerWidth,
          winHeight = window.innerHeight,
          vx,
          vy,
          scrollOffsetX,
          scrollOffsetY;

        // Delect scrollEl
        if (scrollParentEl !== rootEl) {
          scrollEl = options.scroll;
          scrollParentEl = rootEl;
          scrollCustomFn = options.scrollFn;
          if (scrollEl === true) {
            scrollEl = rootEl;
            do {
              if (scrollEl.offsetWidth < scrollEl.scrollWidth || scrollEl.offsetHeight < scrollEl.scrollHeight) {
                break;
              }
              /* jshint boss:true */
            } while (scrollEl = scrollEl.parentNode);
          }
        }
        if (scrollEl) {
          el = scrollEl;
          rect = scrollEl.getBoundingClientRect();
          vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
          vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
        }
        if (!(vx || vy)) {
          vx = (winWidth - x <= sens) - (x <= sens);
          vy = (winHeight - y <= sens) - (y <= sens);

          /* jshint expr:true */
          (vx || vy) && (el = win);
        }
        if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
          autoScroll.el = el;
          autoScroll.vx = vx;
          autoScroll.vy = vy;
          clearInterval(autoScroll.pid);
          if (el) {
            autoScroll.pid = setInterval(function () {
              scrollOffsetY = vy ? vy * speed : 0;
              scrollOffsetX = vx ? vx * speed : 0;
              if ('function' === typeof scrollCustomFn) {
                return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
              }
              if (el === win) {
                win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
              } else {
                el.scrollTop += scrollOffsetY;
                el.scrollLeft += scrollOffsetX;
              }
            }, 24);
          }
        }
      }
    }, 30),
    _prepareGroup = function _prepareGroup(options) {
      function toFn(value, pull) {
        if (value === void 0 || value === true) {
          value = group.name;
        }
        if (typeof value === 'function') {
          return value;
        } else {
          return function (to, from) {
            var fromGroup = from.options.group.name;
            return pull ? value : value && (value.join ? value.indexOf(fromGroup) > -1 : fromGroup == value);
          };
        }
      }
      var group = {};
      var originalGroup = options.group;
      if (!originalGroup || _typeof(originalGroup) != 'object') {
        originalGroup = {
          name: originalGroup
        };
      }
      group.name = originalGroup.name;
      group.checkPull = toFn(originalGroup.pull, true);
      group.checkPut = toFn(originalGroup.put);
      group.revertClone = originalGroup.revertClone;
      options.group = group;
    };

  // Detect support a passive mode
  try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function get() {
        // `false`, because everything starts to work incorrectly and instead of d'n'd,
        // begins the page has scrolled.
        passiveMode = false;
        captureMode = {
          capture: false,
          passive: passiveMode
        };
      }
    }));
  } catch (err) {}

  /**
   * @class  Sortable
   * @param  {HTMLElement}  el
   * @param  {Object}       [options]
   */
  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
    }
    this.el = el; // root element
    this.options = options = _extend({}, options);

    // Export instance
    el[expando] = this;

    // Default options
    var defaults = {
      group: Math.random(),
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      ignore: 'a, img',
      filter: null,
      preventOnFilter: true,
      animation: 0,
      setData: function setData(dataTransfer, dragEl) {
        dataTransfer.setData('Text', dragEl.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: 'data-id',
      delay: 0,
      forceFallback: false,
      fallbackClass: 'sortable-fallback',
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false
    };

    // Set default options
    for (var name in defaults) {
      !(name in options) && (options[name] = defaults[name]);
    }
    _prepareGroup(options);

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;

    // Bind events
    _on(el, 'mousedown', this._onTapStart);
    _on(el, 'touchstart', this._onTapStart);

    /*Вот эту строчку я заккоментировал из-за конфликта моего ресайзера и драг энд дропа*/
    //options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      _on(el, 'dragover', this);
      _on(el, 'dragenter', this);
    }
    touchDragOverListeners.push(this._onDragOver);

    // Restore sorting
    options.store && this.sort(options.store.get(this));
  }
  Sortable.prototype = /** @lends Sortable.prototype */{
    constructor: Sortable,
    _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
      var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0],
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && evt.path && evt.path[0] || target,
        filter = options.filter,
        startIndex;
      _saveInputCheckedState(el);

      // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
      if (dragEl) {
        //return;
      }
      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return; // only left button or enabled
      }

      // cancel dnd if original target is content editable
      if (originalTarget.isContentEditable) {
        return;
      }
      target = _closest(target, options.draggable, el);
      if (!target) {
        return;
      }
      if (lastDownEl === target) {
        // Ignoring duplicate `down`
        return;
      }

      // Get the index of the dragged element within its parent
      startIndex = _index(target, options.draggable);

      // Check filter
      if (typeof filter === 'function') {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
          preventOnFilter && evt.preventDefault();
          return; // cancel dnd
        }
      } else if (filter) {
        filter = filter.split(',').some(function (criteria) {
          criteria = _closest(originalTarget, criteria.trim(), el);
          if (criteria) {
            _dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
            return true;
          }
        });
        if (filter) {
          preventOnFilter && evt.preventDefault();
          return; // cancel dnd
        }
      }

      if (options.handle && !_closest(originalTarget, options.handle, el)) {
        return;
      }

      // Prepare `dragstart`
      this._prepareDragStart(evt, touch, target, startIndex);
    },
    _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
      var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;
      if (target && !dragEl && target.parentNode === el) {
        tapEvt = evt;
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        oldIndex = startIndex;
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style['will-change'] = 'all';
        dragStartFn = function dragStartFn() {
          // Delayed drag has been triggered
          // we can re-enable the events: touchmove/mousemove
          _this._disableDelayedDrag();

          // Make the element draggable
          dragEl.draggable = _this.nativeDraggable;

          // Chosen item
          _toggleClass(dragEl, options.chosenClass, true);

          // Bind the events: dragstart/dragend
          _this._triggerDragStart(evt, touch);

          // Drag start event
          _dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);
        };

        // Disable "draggable"
        options.ignore.split(',').forEach(function (criteria) {
          _find(dragEl, criteria.trim(), _disableDraggable);
        });
        _on(ownerDocument, 'mouseup', _this._onDrop);
        _on(ownerDocument, 'touchend', _this._onDrop);
        _on(ownerDocument, 'touchcancel', _this._onDrop);
        _on(ownerDocument, 'selectstart', _this);
        options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);
        if (options.delay) {
          // If the user moves the pointer or let go the click or touch
          // before the delay has been reached:
          // disable the delayed drag
          _on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          _on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          _on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
          _on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
          _on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
          options.supportPointer && _on(ownerDocument, 'pointermove', _this._disableDelayedDrag);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      var ownerDocument = this.el.ownerDocument;
      clearTimeout(this._dragStartTimer);
      _off(ownerDocument, 'mouseup', this._disableDelayedDrag);
      _off(ownerDocument, 'touchend', this._disableDelayedDrag);
      _off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
      _off(ownerDocument, 'mousemove', this._disableDelayedDrag);
      _off(ownerDocument, 'touchmove', this._disableDelayedDrag);
      _off(ownerDocument, 'pointermove', this._disableDelayedDrag);
    },
    _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
      touch = touch || (evt.pointerType == 'touch' ? evt : null);
      if (touch) {
        // Touch device support
        tapEvt = {
          target: dragEl,
          clientX: touch.clientX,
          clientY: touch.clientY
        };
        this._onDragStart(tapEvt, 'touch');
      } else if (!this.nativeDraggable) {
        this._onDragStart(tapEvt, true);
      } else {
        _on(dragEl, 'dragend', this);
        _on(rootEl, 'dragstart', this._onDragStart);
      }
      try {
        if (document.selection) {
          // Timeout neccessary for IE9
          _nextTick(function () {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {}
    },
    _dragStarted: function _dragStarted() {
      if (rootEl && dragEl) {
        var options = this.options;

        // Apply effect
        _toggleClass(dragEl, options.ghostClass, true);
        _toggleClass(dragEl, options.dragClass, false);
        Sortable.active = this;

        // Drag start event
        _dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver() {
      if (touchEvt) {
        if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
          return;
        }
        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;
        if (!supportCssPointerEvents) {
          _css(ghostEl, 'display', 'none');
        }
        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;
        var i = touchDragOverListeners.length;
        if (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          parent = target;
        }
        if (parent) {
          do {
            if (parent[expando]) {
              while (i--) {
                touchDragOverListeners[i]({
                  clientX: touchEvt.clientX,
                  clientY: touchEvt.clientY,
                  target: target,
                  rootEl: parent
                });
              }
              break;
            }
            target = parent; // store last element
          }
          /* jshint boss:true */ while (parent = parent.parentNode);
        }
        if (!supportCssPointerEvents) {
          _css(ghostEl, 'display', '');
        }
      }
    },
    _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
      if (tapEvt) {
        var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          dx = touch.clientX - tapEvt.clientX + fallbackOffset.x,
          dy = touch.clientY - tapEvt.clientY + fallbackOffset.y,
          translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

        // only set the status to dragging, when we are actually dragging
        if (!Sortable.active) {
          if (fallbackTolerance && min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }
          this._dragStarted();
        }

        // as well as creating the ghost element on the document body
        this._appendGhost();
        moved = true;
        touchEvt = touch;
        _css(ghostEl, 'webkitTransform', translate3d);
        _css(ghostEl, 'mozTransform', translate3d);
        _css(ghostEl, 'msTransform', translate3d);
        _css(ghostEl, 'transform', translate3d);
        evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      if (!ghostEl) {
        var rect = dragEl.getBoundingClientRect(),
          css = _css(dragEl),
          options = this.options,
          ghostRect;
        ghostEl = dragEl.cloneNode(true);
        _toggleClass(ghostEl, options.ghostClass, false);
        _toggleClass(ghostEl, options.fallbackClass, true);
        _toggleClass(ghostEl, options.dragClass, true);
        _css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
        _css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
        _css(ghostEl, 'width', rect.width);
        _css(ghostEl, 'height', rect.height);
        _css(ghostEl, 'opacity', '0.8');
        _css(ghostEl, 'position', 'fixed');
        _css(ghostEl, 'zIndex', '100000');
        _css(ghostEl, 'pointerEvents', 'none');
        options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

        // Fixing dimensions.
        ghostRect = ghostEl.getBoundingClientRect();
        _css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
        _css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
      }
    },
    _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/useFallback) {
      var _this = this;
      var dataTransfer = evt.dataTransfer;
      var options = _this.options;
      _this._offUpEvents();
      if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
        cloneEl = _clone(dragEl);
        cloneEl.draggable = false;
        cloneEl.style['will-change'] = '';
        _css(cloneEl, 'display', 'none');
        _toggleClass(cloneEl, _this.options.chosenClass, false);

        // #1143: IFrame support workaround
        _this._cloneId = _nextTick(function () {
          rootEl.insertBefore(cloneEl, dragEl);
          _dispatchEvent(_this, rootEl, 'clone', dragEl);
        });
      }
      _toggleClass(dragEl, options.dragClass, true);
      if (useFallback) {
        if (useFallback === 'touch') {
          // Bind touch events
          _on(document, 'touchmove', _this._onTouchMove);
          _on(document, 'touchend', _this._onDrop);
          _on(document, 'touchcancel', _this._onDrop);
          if (options.supportPointer) {
            _on(document, 'pointermove', _this._onTouchMove);
            _on(document, 'pointerup', _this._onDrop);
          }
        } else {
          // Old brwoser
          _on(document, 'mousemove', _this._onTouchMove);
          _on(document, 'mouseup', _this._onDrop);
        }
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        if (dataTransfer) {
          dataTransfer.effectAllowed = 'move';
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }
        _on(document, 'drop', _this);

        // #1143: Бывает элемент с IFrame внутри блокирует `drop`,
        // поэтому если вызвался `mouseover`, значит надо отменять весь d'n'd.
        // Breaking Chrome 62+
        // _on(document, 'mouseover', _this);

        _this._dragStartId = _nextTick(_this._dragStarted);
      }
    },
    _onDragOver: function _onDragOver( /**Event*/evt) {
      //Исчезновение всего, чтобы перетягивать основные селекторы
      //jQuery('.content').css('display', 'none');

      var el = this.el,
        target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        isMovingBetweenSortable = false,
        canSort = options.sort;
      if (evt.preventDefault !== void 0) {
        evt.preventDefault();
        !options.dragoverBubble && evt.stopPropagation();
      }
      if (dragEl.animated) {
        return;
      }
      moved = true;
      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
      : putSortable === this || (activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt)) && (evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
      ) {
        // Smart auto-scrolling
        _autoScroll(evt, options, this.el);
        if (_silent) {
          return;
        }
        target = _closest(evt.target, options.draggable, el);
        dragRect = dragEl.getBoundingClientRect();
        if (putSortable !== this) {
          putSortable = this;
          isMovingBetweenSortable = true;
        }
        if (revert) {
          _cloneHide(activeSortable, true);
          parentEl = rootEl; // actualization

          if (cloneEl || nextEl) {
            rootEl.insertBefore(dragEl, cloneEl || nextEl);
          } else if (!canSort) {
            rootEl.appendChild(dragEl);
          }
          return;
        }
        if (el.children.length === 0 || el.children[0] === ghostEl || el === evt.target && _ghostIsLast(el, evt)) {
          //assign target only if condition is true
          if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
            target = el.lastElementChild;
          }
          if (target) {
            if (target.animated) {
              return;
            }
            targetRect = target.getBoundingClientRect();
          }
          _cloneHide(activeSortable, isOwner);
          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
            if (!dragEl.contains(el)) {
              el.appendChild(dragEl);
              parentEl = el; // actualization
            }

            this._animate(dragRect, dragEl);
            target && this._animate(targetRect, target);
          }
        } else if (target && !target.animated && target !== dragEl && target.parentNode[expando] !== void 0) {
          if (lastEl !== target) {
            lastEl = target;
            lastCSS = _css(target);
            lastParentCSS = _css(target.parentNode);
          }
          targetRect = target.getBoundingClientRect();
          var width = targetRect.right - targetRect.left,
            height = targetRect.bottom - targetRect.top,
            floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display) || lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0,
            isWide = target.offsetWidth > dragEl.offsetWidth,
            isLong = target.offsetHeight > dragEl.offsetHeight,
            halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
            nextSibling = target.nextElementSibling,
            after = false;
          if (floating) {
            var elTop = dragEl.offsetTop,
              tgTop = target.offsetTop;
            if (elTop === tgTop) {
              after = target.previousElementSibling === dragEl && !isWide || halfway && isWide;
            } else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
              after = (evt.clientY - targetRect.top) / height > 0.5;
            } else {
              after = tgTop > elTop;
            }
          } else if (!isMovingBetweenSortable) {
            //after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
            if (pageY) {
              if (evt.pageY > pageY) {
                after = nextSibling !== dragEl && isLong || halfway && isLong;
              } else if (evt.pageY < pageY) {
                after = nextSibling !== dragEl && !isLong || halfway && !isLong;
              } else {
                after = nextSibling !== dragEl && !isLong || halfway && isLong;
              }
            }
            pageY = evt.pageY;
          }
          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }
            _silent = true;
            setTimeout(_unsilent, 30);
            _cloneHide(activeSortable, isOwner);
            if (!dragEl.contains(el)) {
              if (after && !nextSibling) {
                el.appendChild(dragEl);
              } else {
                target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
              }
            }
            parentEl = dragEl.parentNode; // actualization

            this._animate(dragRect, dragEl);
            this._animate(targetRect, target);
          }
        }
      }
    },
    _animate: function _animate(prevRect, target) {
      var ms = this.options.animation;
      if (ms) {
        var currentRect = target.getBoundingClientRect();
        if (prevRect.nodeType === 1) {
          prevRect = prevRect.getBoundingClientRect();
        }
        _css(target, 'transition', 'none');
        _css(target, 'transform', 'translate3d(' + (prevRect.left - currentRect.left) + 'px,' + (prevRect.top - currentRect.top) + 'px,0)');
        target.offsetWidth; // repaint

        _css(target, 'transition', 'all ' + ms + 'ms');
        _css(target, 'transform', 'translate3d(0,0,0)');
        clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          _css(target, 'transition', '');
          _css(target, 'transform', '');
          target.animated = false;
        }, ms);
      }
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;
      _off(document, 'touchmove', this._onTouchMove);
      _off(document, 'pointermove', this._onTouchMove);
      _off(ownerDocument, 'mouseup', this._onDrop);
      _off(ownerDocument, 'touchend', this._onDrop);
      _off(ownerDocument, 'pointerup', this._onDrop);
      _off(ownerDocument, 'touchcancel', this._onDrop);
      _off(ownerDocument, 'pointercancel', this._onDrop);
      _off(ownerDocument, 'selectstart', this);

      //jQuery('.content').css('display', 'block');
    },

    _onDrop: function _onDrop( /**Event*/evt) {
      var el = this.el,
        options = this.options;
      clearInterval(this._loopId);
      clearInterval(autoScroll.pid);
      clearTimeout(this._dragStartTimer);
      _cancelNextTick(this._cloneId);
      _cancelNextTick(this._dragStartId);

      // Unbind events
      _off(document, 'mouseover', this);
      _off(document, 'mousemove', this._onTouchMove);
      if (this.nativeDraggable) {
        _off(document, 'drop', this);
        _off(el, 'dragstart', this._onDragStart);
      }
      this._offUpEvents();
      if (evt) {
        if (moved) {
          evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }
        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
        if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
          // Remove clone
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }
        if (dragEl) {
          if (this.nativeDraggable) {
            _off(dragEl, 'dragend', this);
          }
          _disableDraggable(dragEl);
          dragEl.style['will-change'] = '';

          // Remove class's
          _toggleClass(dragEl, this.options.ghostClass, false);
          _toggleClass(dragEl, this.options.chosenClass, false);

          // Drag stop event
          _dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex);
          if (rootEl !== parentEl) {
            newIndex = _index(dragEl, options.draggable);
            if (newIndex >= 0) {
              // Add event
              _dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex);

              // Remove event
              _dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex);

              // drag from one list and drop into another
              _dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
              _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
            }
          } else {
            if (dragEl.nextSibling !== nextEl) {
              // Get the index of the dragged element within its parent
              newIndex = _index(dragEl, options.draggable);
              if (newIndex >= 0) {
                // drag & drop within the same list
                _dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex);
                _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
              }
            }
          }
          if (Sortable.active) {
            /* jshint eqnull:true */
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
            }
            _dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex);

            // Save sorting
            this.save();
          }
        }
      }
      this._nulling();
    },
    _nulling: function _nulling() {
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = scrollEl = scrollParentEl = tapEvt = touchEvt = moved = newIndex = lastEl = lastCSS = putSortable = activeGroup = Sortable.active = null;
      savedInputChecked.forEach(function (el) {
        el.checked = true;
      });
      savedInputChecked.length = 0;
    },
    handleEvent: function handleEvent( /**Event*/evt) {
      switch (evt.type) {
        case 'drop':
        case 'dragend':
          this._onDrop(evt);
          break;
        case 'dragover':
        case 'dragenter':
          if (dragEl) {
            this._onDragOver(evt);
            _globalDragOver(evt);
          }
          break;
        case 'mouseover':
          this._onDrop(evt);
          break;
        case 'selectstart':
          evt.preventDefault();
          break;
      }
    },
    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;
      for (; i < n; i++) {
        el = children[i];
        if (_closest(el, options.draggable, this.el)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }
      return order;
    },
    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort(order) {
      var items = {},
        rootEl = this.el;
      this.toArray().forEach(function (id, i) {
        var el = rootEl.children[i];
        if (_closest(el, this.options.draggable, rootEl)) {
          items[id] = el;
        }
      }, this);
      order.forEach(function (id) {
        if (items[id]) {
          rootEl.removeChild(items[id]);
          rootEl.appendChild(items[id]);
        }
      });
    },
    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set(this);
    },
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest(el, selector) {
      return _closest(el, selector || this.options.draggable, this.el);
    },
    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;
      if (value === void 0) {
        return options[name];
      } else {
        options[name] = value;
        if (name === 'group') {
          _prepareGroup(options);
        }
      }
    },
    /**
     * Destroy
     */
    destroy: function destroy() {
      var el = this.el;
      el[expando] = null;
      _off(el, 'mousedown', this._onTapStart);
      _off(el, 'touchstart', this._onTapStart);
      _off(el, 'pointerdown', this._onTapStart);
      if (this.nativeDraggable) {
        _off(el, 'dragover', this);
        _off(el, 'dragenter', this);
      }

      // Remove draggable attributes
      Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
        el.removeAttribute('draggable');
      });
      touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);
      this._onDrop();
      this.el = el = null;
    }
  };
  function _cloneHide(sortable, state) {
    if (sortable.lastPullMode !== 'clone') {
      state = true;
    }
    if (cloneEl && cloneEl.state !== state) {
      _css(cloneEl, 'display', state ? 'none' : '');
      if (!state) {
        if (cloneEl.state) {
          if (sortable.options.group.revertClone) {
            rootEl.insertBefore(cloneEl, nextEl);
            sortable._animate(dragEl, cloneEl);
          } else {
            rootEl.insertBefore(cloneEl, dragEl);
          }
        }
      }
      cloneEl.state = state;
    }
  }
  function _closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
    if (el) {
      ctx = ctx || document;
      do {
        if (selector === '>*' && el.parentNode === ctx || _matches(el, selector)) {
          return el;
        }
        /* jshint boss:true */
      } while (el = _getParentOrHost(el));
    }
    return null;
  }
  function _getParentOrHost(el) {
    var parent = el.host;
    return parent && parent.nodeType ? parent : el.parentNode;
  }
  function _globalDragOver( /**Event*/evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = 'move';
    }
    evt.preventDefault();
  }
  function _on(el, event, fn) {
    el.addEventListener(event, fn, captureMode);
  }
  function _off(el, event, fn) {
    el.removeEventListener(event, fn, captureMode);
  }
  function _toggleClass(el, name, state) {
    if (el) {
      if (el.classList) {
        el.classList[state ? 'add' : 'remove'](name);
      } else {
        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
      }
    }
  }
  function _css(el, prop, val) {
    var style = el && el.style;
    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, '');
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }
        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style)) {
          prop = '-webkit-' + prop;
        }
        style[prop] = val + (typeof val === 'string' ? '' : 'px');
      }
    }
  }
  function _find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;
      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }
      return list;
    }
    return [];
  }
  function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex) {
    sortable = sortable || rootEl[expando];
    var evt = document.createEvent('Event'),
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
    evt.initEvent(name, true, true);
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = startIndex;
    evt.newIndex = newIndex;
    rootEl.dispatchEvent(evt);
    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }
  function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
    var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal;
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || toEl.getBoundingClientRect();
    evt.willInsertAfter = willInsertAfter;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvt);
    }
    return retVal;
  }
  function _disableDraggable(el) {
    el.draggable = false;
  }
  function _unsilent() {
    _silent = false;
  }

  /** @returns {HTMLElement|false} */
  function _ghostIsLast(el, evt) {
    var lastEl = el.lastElementChild,
      rect = lastEl.getBoundingClientRect();

    // 5 — min delta
    // abs — нельзя добавлять, а то глюки при наведении сверху
    return evt.clientY - (rect.top + rect.height) > 5 || evt.clientX - (rect.left + rect.width) > 5;
  }

  /**
   * Generate id
   * @param   {HTMLElement} el
   * @returns {String}
   * @private
   */
  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;
    while (i--) {
      sum += str.charCodeAt(i);
    }
    return sum.toString(36);
  }

  /**
   * Returns the index of an element within its parent for a selected set of
   * elements
   * @param  {HTMLElement} el
   * @param  {selector} selector
   * @return {number}
   */
  function _index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) {
      return -1;
    }
    while (el && (el = el.previousElementSibling)) {
      if (el.nodeName.toUpperCase() !== 'TEMPLATE' && (selector === '>*' || _matches(el, selector))) {
        index++;
      }
    }
    return index;
  }
  function _matches( /**HTMLElement*/el, /**String*/selector) {
    if (el) {
      selector = selector.split('.');
      var tag = selector.shift().toUpperCase(),
        re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');
      return (tag === '' || el.nodeName.toUpperCase() == tag) && (!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length);
    }
    return false;
  }
  function _throttle(callback, ms) {
    var args, _this;
    return function () {
      if (args === void 0) {
        args = arguments;
        _this = this;
        setTimeout(function () {
          if (args.length === 1) {
            callback.call(_this, args[0]);
          } else {
            callback.apply(_this, args);
          }
          args = void 0;
        }, ms);
      }
    };
  }
  function _extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }
    return dst;
  }
  function _clone(el) {
    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }
  function _saveInputCheckedState(root) {
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }
  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }
  function _cancelNextTick(id) {
    return clearTimeout(id);
  }

  // Fixed #973:
  _on(document, 'touchmove', function (evt) {
    if (Sortable.active) {
      evt.preventDefault();
    }
  });

  // Export utils
  Sortable.utils = {
    on: _on,
    off: _off,
    css: _css,
    find: _find,
    is: function is(el, selector) {
      return !!_closest(el, selector, el);
    },
    extend: _extend,
    throttle: _throttle,
    closest: _closest,
    toggleClass: _toggleClass,
    clone: _clone,
    index: _index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick
  };

  /**
   * Create sortable instance
   * @param {HTMLElement}  el
   * @param {Object}      [options]
   */
  Sortable.create = function (el, options) {
    return new Sortable(el, options);
  };

  // Export
  Sortable.version = '1.7.0';
  sortableWithCorrects = Sortable;
  return Sortable;
});
var Sortable = sortableWithCorrects;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/global/global.js":
/*!*****************************************!*\
  !*** ./src/components/global/global.js ***!
  \*****************************************/
/*! exports provided: makePreview, setYoutubeBackgroundVideo, setAnotherBackgroundVideo, hexToRGB, getRandom, indexOfMax, showHideSettings, closeRightPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePreview", function() { return makePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setYoutubeBackgroundVideo", function() { return setYoutubeBackgroundVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnotherBackgroundVideo", function() { return setAnotherBackgroundVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOfMax", function() { return indexOfMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHideSettings", function() { return showHideSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeRightPanel", function() { return closeRightPanel; });
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
function setYoutubeBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove();

  //var teta = 'https://www.youtube.com/embed/5tvGJsen9mo?controls=0&autoplay=1&mute=1&loop=1';

  var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];
  console.log(p);
  link = 'https://www.youtube.com/embed/' + link + p;
  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';
  $('#backgroundVideo').append(videoblock);
}
function setAnotherBackgroundVideo(link, params) {
  $('#backgroundVideo > *').remove();
  //var videoblock = '<video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>';
  var videoblock = '<div class="video-background">\
                             <div class="video-foreground">\
                             <video width="100%" height="100%" autoplay muted loop src="' + link + '"></video>\
                             </div>\
                          </div>';
  $('#backgroundVideo').append(videoblock);
}

/*Перевод hex в RGB (где-то точно используется, уже не помню)*/
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
function makePreview() {
  var mainAreaElem = document.getElementById('mainArea');
  var mainAreaElemCopy = document.getElementById('hiddenDiv');
  var mainSelectorElem = document.getElementsByClassName('main-selector');
  var contentSelectorElem = document.getElementsByClassName('content-selector');
  var imageElem = document.getElementsByClassName('imageBlock');
  var textElem = document.getElementsByClassName('textBlock');
  var buttonElem = document.getElementsByClassName('buttonBlock');
  var videoElem = document.getElementsByClassName('videoBlock');
  var formElem = document.getElementsByClassName('formBlock');
  var subscribeElem = document.getElementsByClassName('subscribeBlock');
  var listElem = document.getElementsByClassName('listBlock');
  var lineElem = document.getElementsByClassName('lineBlock');
  var background = document.getElementById('backgroundVideo');
  var jsScripts = mainAreaElem.getElementsByClassName('code');
  var digitalHtml = '';
  var digitalCss = '';
  var digitalJs = '';
  var stringToDevare = '';
  var createStyle = function createStyle(id, elClass, styles) {
    var el = elClass == 0 ? document.getElementById(id) : document.getElementById(id).getElementsByClassName(elClass)[0];
    var result = '';
    var styleToUpperCase = '';
    for (var i = 0; i < styles.length; i++) {
      styleToUpperCase = replaceDef(styles[i]);
      result += styles[i] + ':' + getComputedStyle(el)[styleToUpperCase] + ';';
    }
    if (elClass != 0) {
      digitalCss += "#".concat(id, " .").concat(elClass, " {").concat(result, "}");
    } else {
      digitalCss += "#".concat(id, " {").concat(result, "}");
    }
  };
  var deleteDeliveryCode = function deleteDeliveryCode() {
    mainAreaElemCopy.innerHTML = mainAreaElem.outerHTML;
    var ElsToDelete = mainAreaElemCopy.getElementsByClassName('deliveryCode');
    for (var i = 0; i < ElsToDelete.length;) {
      if (ElsToDelete[i]) {
        ElsToDelete[i].remove();
      } else {
        i++;
      }
    }
    return mainAreaElemCopy.innerHTML;
  };
  var stringToDelete = '';
  digitalHtml = background.outerHTML;
  digitalHtml += deleteDeliveryCode();
  mainAreaElemCopy.innerHTML = '';
  digitalHtml = deleteTeg(digitalHtml, 'div class="handle', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'span class="glyphicon', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="copy"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="add-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="main-block-settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="copy-content"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-content"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="add-content-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="remove-content-block"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="block-settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="block-resizer"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizer"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerY"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerXY', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerX"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'span class="under"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'span class="through"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="text-editor-panel"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'iframe class="textIframe"', 'iframe');
  digitalHtml = deleteTeg(digitalHtml, 'div class="text-editor"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings text_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="resizerTextXY"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings button_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'span class="code"', 'span');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings form_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings subscribe_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="deliveryCode"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings list_settings"', 'div');
  digitalHtml = deleteTeg(digitalHtml, 'div class="image_settings line_settings"', 'div');
  stringToDelete = new RegExp(' style="display: none;"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<input class="imgProportion"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' border: 2px solid transparent;', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp(' border: 2px solid rgb\\(105, 133, 212\\);', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('<div class="imageWrapper videoWrapper"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '<div class="imageWrapper videoWrapper">');
  stringToDelete = new RegExp('<img class="videoimg img"[^>]*>', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  stringToDelete = new RegExp('delay', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, 'autoplay=1');
  stringToDelete = new RegExp(' autocomplete="off"', 'gi');
  digitalHtml = digitalHtml.replace(stringToDelete, '');
  for (var i = 0; i < mainSelectorElem.length; i++) {
    createStyle(mainSelectorElem[i].id, 'content', ['min-height']);
  }
  for (var _i = 0; _i < contentSelectorElem.length; _i++) {
    createStyle(contentSelectorElem[_i].id, 0, ['height']);
  }
  for (var _i2 = 0; _i2 < imageElem.length; _i2++) {
    createStyle(imageElem[_i2].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }
  for (var _i3 = 0; _i3 < textElem.length; _i3++) {
    createStyle(textElem[_i3].id, 0, ['display', 'justify-content', 'flex-wrap']);
    createStyle(textElem[_i3].id, 'text', ['font-family', 'color', 'text-shadow']);
  }
  for (var _i4 = 0; _i4 < buttonElem.length; _i4++) {
    createStyle(buttonElem[_i4].id, 0, ['width']);
  }
  for (var _i5 = 0; _i5 < videoElem.length; _i5++) {
    createStyle(videoElem[_i5].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(videoElem[_i5].id, 'imageWrapper', ['width', 'height']);
  }
  for (var _i6 = 0; _i6 < formElem.length; _i6++) {
    createStyle(formElem[_i6].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }
  for (var _i7 = 0; _i7 < subscribeElem.length; _i7++) {
    createStyle(subscribeElem[_i7].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
  }
  for (var _i8 = 0; _i8 < listElem.length; _i8++) {
    createStyle(listElem[_i8].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(listElem[_i8].id, 'listWrapper', ['width', 'height']);
  }
  for (var _i9 = 0; _i9 < lineElem.length; _i9++) {
    createStyle(lineElem[_i9].id, 0, ['width', 'display', 'justify-content', 'flex-wrap', 'margin-top', 'margin-bottom']);
    createStyle(lineElem[_i9].id, 'lineWrapper', ['width', 'height']);
  }
  for (var _i10 = 0; _i10 < jsScripts.length; _i10++) {
    digitalJs += jsScripts[_i10].innerHTML + ':';
  }
  digitalCss += mediaStyle.innerHTML;
  localStorage.digitalHtml = digitalHtml;
  localStorage.digitalCss = digitalCss;
  localStorage.digitalJs = digitalJs;
}
function replaceDef(string) {
  while (string.indexOf('-') != -1) {
    string = string.replaceAt(string.indexOf('-') + 1, string[string.indexOf('-') + 1].toUpperCase());
    string = string.replace('-', '');
  }
  return string;
}
function deleteTeg(content, reOpen, reCloze) {
  var teg = new RegExp('<' + reOpen + '[^<]*</' + reCloze + '>', 'gi');
  content = content.replace(teg, '');
  return content;
}
function getRandom() {
  var d1 = Math.floor(Math.random() * 100000);
  var d2 = Math.floor(Math.random() * 100000);
  var d3 = Math.floor(Math.random() * 100000);
  return d1 + "" + d2 + "" + d3;
}
function getRandomColor() {
  var colorR = Math.floor(Math.random() * 256);
  var colorG = Math.floor(Math.random() * 256);
  var colorB = Math.floor(Math.random() * 256);
  return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}
function animateCSS(element, animationName, callback) {
  var node = document.querySelector(element);
  node.classList.add('animated', animationName);
  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') callback();
  }
  node.addEventListener('animationend', handleAnimationEnd);
}
function indexOfMax(mas) {
  if (mas.length === 0) {
    return -1;
  }
  var max = mas[0];
  var maxIndex = 0;
  for (var i = 1; i < mas.length; i++) {
    if (mas[i] > max) {
      maxIndex = i;
      max = mas[i];
    }
  }
  return maxIndex;
}
function showHideSettings(elId, indicatorId) {
  var el = document.getElementById(elId);
  var indicator = document.getElementById(indicatorId);
  var rectangle = indicator.getElementsByTagName('span')[0];
  if (getComputedStyle(el).display == 'none') {
    rectangle.className = 'glyphicon glyphicon-triangle-bottom';
  } else {
    rectangle.className = 'glyphicon glyphicon-triangle-top';
  }
  indicator.onclick = function () {
    if (getComputedStyle(el).display == 'none') {
      el.style.display = 'block';
      rectangle.className = 'glyphicon glyphicon-triangle-top';
    } else {
      el.style.display = 'none';
      rectangle.className = 'glyphicon glyphicon-triangle-bottom';
    }
  };
}
function closeRightPanel() {
  var rightSidebarEl = document.getElementById('rightSidebar');
  if (event.clientX < rightSidebarEl.getBoundingClientRect().left && event.clientX != 0) {
    $('#rightSidebar').css({
      right: '-400px',
      transition: '0.4s all ease-in'
    }).removeClass('activated');
    document.removeEventListener('mousedown', closeRightPanel);
  }
  return false;
}
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/main_selector/main_selector.css":
/*!********************************************************!*\
  !*** ./src/components/main_selector/main_selector.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/main_selector/main_selector_dragNdrop.js":
/*!*****************************************************************!*\
  !*** ./src/components/main_selector/main_selector_dragNdrop.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _main_selector_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_selector.css */ "./src/components/main_selector/main_selector.css");
/* harmony import */ var _main_selector_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_selector_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/Sortable.js */ "./src/components/global/Sortable.js");



(function () {
  'use strict';

  var content, style;
  _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create(mainSelector, {
    group: {
      name: 'main-selector',
      pull: 'clone'
    },
    filter: '.resizer, .handle, .block-resizer, .textBlock',
    sort: true,
    animation: 150,
    ghostClass: 'green-background-class',
    onStart: function onStart(e) {
      $('#left-sidebar').hide();
      $('.block-settings').css('display', 'none');
    },
    onEnd: function onEnd(e) {
      $('#left-sidebar').show();
      if (e.target != e.to) {
        switch (e.item.id) {
          case 'main-selector-1':
            {
              var selector1 = '<div id="main_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-12 col-md-12 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div>' + '</div>';
              $(e.item).replaceWith(selector1);

              //драг н дроп из основного
              var id = $(selector1).find('.content').attr('id');
              _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + id + "").get(0), {
                group: {
                  name: 'content-selector',
                  put: 'content-selector'
                },
                filter: '.resizer, .handle, .block-resizer',
                sort: true,
                animation: 150,
                ghostClass: 'green-background-class',
                onChoose: function onChoose(e) {
                  if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                    var textBlockElem = document.getElementById($(e.item).attr('id'));
                    var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                    var textElem = textBlockElem.getElementsByClassName('text')[0];
                    content = iframe.contentWindow.document.body.innerHTML;
                    var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                    styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                    styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                    styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                    styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                    style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                  }
                },
                onStart: function onStart(evt) {
                  $('.handle').css('display', 'none');
                  $('.main-selector').each(function (ind, el) {
                    $(el).find('> .content:not(:last)').addClass('border-hover');
                  });
                  $('.content-selector').each(function (ind, el) {
                    $(el).find('> .content:not(:last)').addClass('border-hover-content');
                  });
                },
                onEnd: function onEnd(evt) {
                  $('.handle').css('display', 'block');
                  $('.border-hover').removeClass('border-hover');
                  $('.border-hover-content').removeClass('border-hover-content');
                  if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                    var textBlockElem = document.getElementById($(evt.item).attr('id'));
                    var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                    var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                    textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                    init(iframe, content, style);
                    iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                    addFunctionalityToIframe($(evt.item).attr('id'));
                  }
                  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                }
              });
              break;
            }
          case 'main-selector-2':
            {
              var selector2 = '<div id="main_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-6 col-md-6 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<div class="handle"></div> ' + '</div>' + '<div class="col-xs-12 col-sm-6 col-md-6 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '"></div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector2);
              $(selector2).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  filter: '.resizer, .handle, .block-resizer',
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover').removeClass('border-hover');
                    $('.border-hover-content').removeClass('border-hover-content');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
          case 'main-selector-3':
            {
              var selector3 = '<div id="main_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-xs-12 col-sm-4 col-md-4 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '</div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector3);
              $(selector3).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  filter: '.resizer, .handle, .block-resizer',
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover').removeClass('border-hover');
                    $('.border-hover-content').removeClass('border-hover-content');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
          case 'main-selector-4':
            {
              var selector4 = '<div id="main_selector' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" class="row main-selector">' + '<div class="block-settings">' + '<div class="copy">' + '<span class="glyphicon glyphicon-duplicate"></span>' + '</div> <div class="remove">' + '<span class="glyphicon glyphicon-remove"></span>' + '</div><div class="add-block">' + '<span class="glyphicon glyphicon-plus"></span>' + '</div>' + '<div class="remove-block">' + '<span class="glyphicon glyphicon-minus"></span>' + '</div><div class="main-block-settings">' + '<span class="glyphicon glyphicon-cog"></span>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '<div class="handle"></div></div>' + '<div class="col-xs-12 col-sm-3 col-md-3 content" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '" style="min-height:80px;">' + '</div>' + '<div class="block-resizer"></div>' + '<div class="resizer"></div> ' + '</div>';
              $(e.item).replaceWith(selector4);
              $(selector4).find('.content').each(function () {
                _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create($("#" + $(this).attr('id') + "").get(0), {
                  group: {
                    name: 'content-selector',
                    put: 'content-selector'
                  },
                  filter: '.resizer, .handle, .block-resizer',
                  sort: true,
                  animation: 150,
                  ghostClass: 'green-background-class',
                  onChoose: function onChoose(e) {
                    if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(e.item).attr('id'));
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      var textElem = textBlockElem.getElementsByClassName('text')[0];
                      content = iframe.contentWindow.document.body.innerHTML;
                      var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
                      styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
                      styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
                      styleElem += 'color:' + getComputedStyle(textElem).color + ';';
                      styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
                      style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
                    }
                  },
                  onStart: function onStart(evt) {
                    $('.handle').css('display', 'none');
                    $('.main-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover');
                    });
                    $('.content-selector').each(function (ind, el) {
                      $(el).find('> .content:not(:last)').addClass('border-hover-content');
                    });
                  },
                  onEnd: function onEnd(evt) {
                    $('.handle').css('display', 'block');
                    $('.border-hover').removeClass('border-hover');
                    $('.border-hover-content').removeClass('border-hover-content');
                    if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
                      var textBlockElem = document.getElementById($(evt.item).attr('id'));
                      var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
                      var iframe = textBlockElem.getElementsByTagName('iframe')[0];
                      init(iframe, content, style);
                      textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
                      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
                      addFunctionalityToIframe($(evt.item).attr('id'));
                    }
                    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
                  }
                });
              });
              break;
            }
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
      }
      $('.handle').resizer();
      $('.resizer').resizer_s();
      $('.block-resizer').block_resizer();
      $('.block-settings').css('display', 'flex');
    }
  });
  $.fn.block_resizer = function () {
    var offset;
    var relativeX;
    var currHandle;
    var text_editor_id;
    $(this).on('mousedown', function (e) {
      currHandle = $(this);
      text_editor_id = $(e.target).parents('.text-editor-module').children('.text-editor').find('iframe').attr('id');
      var text_editor_height = $(e.target).parents('.text-editor-module').height();
      $(e.target).parents('.text-editor-module').css('height', text_editor_height + 8);
      $('#' + text_editor_id + '').hide();
      $('html').on('mousemove', function (e) {
        offset = currHandle.parent().offset();
        relativeX = e.pageX - offset.left;
        var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right')) + parseInt(currHandle.parent().css('border-right-width')) + parseInt(currHandle.parent().css('border-left-width'));
        var delta = currHandle.parent().width() + teta - relativeX;
        var deltaPercentage = delta / currHandle.parent().width() * 100;
        if (deltaPercentage > 3 && currHandle.parent().width() > 100) {
          currHandle.parent().css('width', currHandle.parent().width() - 50 + teta + 'px');
        } else if (deltaPercentage < -3 && currHandle.parent().width() > 100) {
          currHandle.parent().css('width', currHandle.parent().width() + 50 + teta + 'px');
        }
      });
    });
    $('html').on('mouseup', function () {
      $('.container').off('mousemove');
      $('#' + text_editor_id + '').show();
      if ($(currHandle).parent().hasClass('main-selector')) {
        $('#main-block-width-value').val($(currHandle).parent().width());
        $('#main-block-width-value-range').val($(currHandle).parent().width());
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
      }
    });
  };
  $('.block-resizer').block_resizer();
  $.fn.resizer_s = function () {
    var offset;
    var relativeX;
    var currHandle2;
    $(this).on('mousedown', function () {
      currHandle2 = $(this);
      var parentEl = document.getElementById(currHandle2.parent()[0].id);
      var parentContents = parentEl.getElementsByClassName('content');
      $('html').on('mousemove', function (e) {
        var total = parseFloat(currHandle2.parent().children('.content').css('padding-bottom'));
        var paddings = parseFloat($(parentEl).css('padding-top')) + parseFloat($(parentEl).css('padding-bottom')) + parseFloat($(parentEl).css('border-top-width')) + parseFloat($(parentEl).css('border-bottom-width'));
        var height = parseInt(getComputedStyle(parentContents[0]).height);
        var topPosition = currHandle2.parent().children('.content').offset();
        var innerHeight = currHandle2.parent().children('.content').height();
        var delta = e.pageY - total - topPosition.top - innerHeight;
        if (delta > 40) {
          //currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings + 40 + 'px');
          for (var i = 0; i < parentContents.length; i++) {
            parentContents[i].style.minHeight = height + paddings + 20 + 'px';
          }
        } else if (delta < -40 && parseInt(getComputedStyle(parentContents[0]).minHeight) > 88) {
          //currHandle2.parent().css('min-height', currHandle2.parent().height() + paddings - 40 + 'px');
          for (var _i = 0; _i < parentContents.length; _i++) {
            parentContents[_i].style.minHeight = height + paddings - 20 + 'px';
          }
        }
      });
    });
    $('html').on('mouseup', function () {
      $('html').off('mousemove');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
  };
  $.fn.resizer = function () {
    var offset;
    var relativeX;
    var currHandle;
    $(this).on('mousedown', function (e) {
      currHandle = $(this);
      $('#mainArea').on('mousemove', function (e) {
        offset = currHandle.parent().offset();
        relativeX = e.pageX - offset.left;
        var dim_curr = currHandle.parent().attr('class');
        var dim_curr = dim_curr.split(' ');
        var dim_next = currHandle.parent().next().attr('class');
        var dim_next = dim_next.split(' ');
        var dimCurrNum, dimNextNum;
        for (var i = 0; i < dim_curr.length; i++) {
          if (dim_curr[i].includes('col-md-')) {
            dimCurrNum = dim_curr[i].split('-')[2];
          }
        }
        for (var i = 0; i < dim_next.length; i++) {
          if (dim_next[i].includes('col-md-')) {
            dimNextNum = dim_next[i].split('-')[2];
          }
        }
        var teta = parseInt(currHandle.parent().css('padding-left')) + parseInt(currHandle.parent().css('padding-right'));
        var delta = currHandle.parent().width() + teta - relativeX - $('.handle').width() / 2;
        var deltaPercentage = delta / currHandle.parent().parent().width() * 100;
        if (deltaPercentage > 7 && currHandle.parent().width() > 100) {
          currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
          currHandle.parent().addClass('col-md-' + (dimCurrNum - 1) + '');
          currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
          currHandle.parent().next().addClass('col-md-' + (parseInt(dimNextNum) + 1) + '');
        } else if (deltaPercentage < -7 && currHandle.parent().next().width() > 100) {
          currHandle.parent().removeClass('col-md-' + dimCurrNum + '');
          currHandle.parent().addClass('col-md-' + (parseInt(dimCurrNum) + 1) + '');
          currHandle.parent().next().removeClass('col-md-' + dimNextNum + '');
          currHandle.parent().next().addClass('col-md-' + (parseInt(dimNextNum) - 1) + '');
        }
      });
    });
    $('html').on('mouseup', function () {
      $('#mainArea').off('mousemove');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
  };
  $('.handle').resizer();
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/main_selector/main_selector_settings.js":
/*!****************************************************************!*\
  !*** ./src/components/main_selector/main_selector_settings.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/image/imageModule.js */ "./src/components/modules/image/imageModule.js");
/* harmony import */ var _modules_line_lineModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/line/lineModule.js */ "./src/components/modules/line/lineModule.js");
/* harmony import */ var _modules_list_listModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/list/listModule.js */ "./src/components/modules/list/listModule.js");
/* harmony import */ var _modules_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/form/formModule.js */ "./src/components/modules/form/formModule.js");
/* harmony import */ var _modules_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/subscribe/subscribeModule.js */ "./src/components/modules/subscribe/subscribeModule.js");
/* harmony import */ var _modules_text_textModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/text/textModule.js */ "./src/components/modules/text/textModule.js");
/* harmony import */ var _modules_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/button/buttonModule.js */ "./src/components/modules/button/buttonModule.js");








$('#mainArea').on('click', '.remove', function () {
  $(this).parents('.main-selector').first().remove();
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.copy', function () {
  var $copyElement = $(this).parents('.main-selector').clone();
  $($copyElement).find('.content').each(function () {
    $(this).attr('id', Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.imageBlock').each(function () {
    $(this).attr('id', 'image' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.videoBlock').each(function () {
    $(this).attr('id', 'video' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.textBlock').each(function () {
    $(this).attr('id', 'text' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.buttonBlock').each(function () {
    $(this).attr('id', 'button' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.formBlock').each(function () {
    $(this).attr('id', 'form' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    $(this).attr('id', 'subscribe' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.listBlock').each(function () {
    $(this).attr('id', 'list' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $($copyElement).find('.lineBlock').each(function () {
    $(this).attr('id', 'line' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])());
  });
  $(this).parents('.main-selector').first().after($copyElement);
  $($copyElement).find('.imageBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToElement"])(cloneId);
  });
  $($copyElement).find('.videoBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_image_imageModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToElement"])(cloneId);
  });
  $($copyElement).find('.textBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_text_textModule_js__WEBPACK_IMPORTED_MODULE_6__["addFunctionalityToTextElement"])(cloneId);
  });
  $($copyElement).find('.buttonBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_7__["addFunctionalityToButtonElement"])(cloneId);
  });
  $($copyElement).find('.formBlock').each(function () {
    var cloneId = $(this).attr('id');
    var formId = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
    document.getElementById(cloneId).getElementsByTagName('form')[0].id = formId;
    var inputs = document.getElementById(formId).getElementsByClassName('payInput');
    Sortable.create($("#" + formId + "").get(0), {
      animation: 150,
      swapThreshold: 1,
      emptyInsertThreshold: 1,
      ghostClass: 'blue-background-class',
      onStart: function onStart(e) {
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].onblur = function () {
            return false;
          };
        }
      },
      onEnd: function onEnd(e) {
        var _loop = function _loop(i) {
          inputs[i].blur();
          inputs[i].onblur = function () {
            inputs[i].placeholder = inputs[i].value;
            inputs[i].value = '';
          };
        };
        for (var i = 0; i < inputs.length; i++) {
          _loop(i);
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    });
    Object(_modules_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__["addFunctionalityToFormElement"])(cloneId);
  });
  $($copyElement).find('.subscribeBlock').each(function () {
    var cloneId = $(this).attr('id');
    addDragAndDropToForm(cloneId);
    Object(_modules_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__["addFunctionalityToSubscribeElement"])(cloneId);
  });
  $($copyElement).find('.listBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_list_listModule_js__WEBPACK_IMPORTED_MODULE_3__["addFunctionalityToListElement"])(cloneId);
  });
  $($copyElement).find('.lineBlock').each(function () {
    var cloneId = $(this).attr('id');
    Object(_modules_line_lineModule_js__WEBPACK_IMPORTED_MODULE_2__["addFunctionalityToLineElement"])(cloneId);
  });
  $($copyElement).find('.content').each(function () {
    Sortable.create($('#' + $(this).attr('id') + '').get(0), {
      group: 'content-selector',
      put: 'content-selector',
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function onStart(evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function onEnd(evt) {
        $('.handle').css('display', 'block');
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    });
  });
  $('.handle').resizer();
  $('.resizer').resizer_s();
  $('.block-resizer').block_resizer();
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.add-block', function () {
  var $this = this;
  var maxIndex;
  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');
  if (cols.length == 12) return;
  var $colSizes = [];
  $(cols).each(function (ind, el) {
    var classes = $(this).attr('class').split(' ');
    $(classes).each(function (ind, el) {
      if (el.match(/col-[a-z]+-[0-9]+/i)) {
        $colSizes.push(parseInt(el.split('-')[2]));
      }
    });
  });
  maxIndex = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["indexOfMax"])($colSizes);
  var maxValueSection = $($this).parents('.main-selector').find('>[class*="col-"]:nth(' + maxIndex + ')');
  $(maxValueSection.attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      if (el.split('-')[1] != 'xs') {
        $(maxValueSection).removeClass(el);
        $(maxValueSection).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) - 1));
      }
    }
  });
  addMainSelectorSection($this);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.remove-block', function () {
  var $this = $(this);
  var cols = $(this).parents('.main-selector').find('>[class*="col-"]');
  if (cols.length == 1) return;
  removeMainSelectorSection($this);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
$('#mainArea').on('click', '.main-block-settings', function (event) {
  //Очистка от старых событий изменения значений (при первом клике на настройки, вызывается один раз, при втором уже два).
  //Поправлено!!!
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#main-block-border-style-value').off();
  $('#main-block-border-left-style-value').off();
  $('#main-block-border-right-style-value').off();
  $('#main-block-border-top-style-value').off();
  $('#main-block-border-bottom-style-value').off();
  $('#main-block-animation-type-value').off();
  var ths = null;
  ths = $(this).parents('.block-settings').parent();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#main-block-timeout-hour-value').val(h);
    $('#main-block-timeout-minute-value').val(m);
    $('#main-block-timeout-second-value').val(s);
    $('#main-block-display-none-value').prop('checked', true);
  } else {
    $('#main-block-timeout-hour-value').val(0);
    $('#main-block-timeout-minute-value').val(0);
    $('#main-block-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#main-block-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  /*Инициализация инпутов*/
  $('#main-block-width-value').val($(ths).width());
  $('#main-block-width-value-range').val($(ths).width());
  $('#main-block-margin-top-value').val(parseInt($(ths).css('margin-top')));
  $('#main-block-margin-top-value-range').val(parseInt($(ths).css('margin-top')));
  $('#main-block-margin-bottom-value').val(parseInt($(ths).css('margin-bottom')));
  $('#main-block-margin-bottom-value-range').val(parseInt($(ths).css('margin-bottom')));
  $('#main-block-padding-top-value').val(parseInt($(ths).css('padding-top')));
  $('#main-block-padding-top-value-range').val(parseInt($(ths).css('padding-top')));
  $('#main-block-padding-bottom-value').val(parseInt($(ths).css('padding-bottom')));
  $('#main-block-padding-bottom-value-range').val(parseInt($(ths).css('padding-bottom')));
  $('#main-block-padding-left-value').val(parseInt($(ths).css('padding-left')));
  $('#main-block-padding-left-value-range').val(parseInt($(ths).css('padding-left')));
  $('#main-block-padding-right-value').val(parseInt($(ths).css('padding-right')));
  $('#main-block-padding-right-value-range').val(parseInt($(ths).css('padding-right')));
  $('#main-block-opacity-value').val($(ths).css('opacity') * 100);
  $('#main-block-opacity-value-range').val($(ths).css('opacity') * 100);
  $('#main-block-border-thickness-value').val(parseInt($(ths).css('border-width')));
  $('#main-block-border-thickness-value-range').val(parseInt($(ths).css('border-width')));
  $('#main-block-border-left-thickness-value').val(parseInt($(ths).css('border-left-width')));
  $('#main-block-border-left-thickness-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#main-block-border-top-thickness-value').val(parseInt($(ths).css('border-top-width')));
  $('#main-block-border-top-thickness-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#main-block-border-right-thickness-value').val(parseInt($(ths).css('border-right-width')));
  $('#main-block-border-right-thickness-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#main-block-border-bottom-thickness-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#main-block-border-bottom-thickness-value-range').val(parseInt($(ths).css('border-bottom-width')));
  var videolnk = String($(ths).find('.background-video iframe').attr('src')).split('?')[0];
  if (videolnk != "undefined") {
    $('#main-block-videolink').val(videolnk);
  } else {
    $('#main-block-videolink').val('');
  }

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('main-block-display-none-value').checked = true;
  } else {
    document.getElementById('main-block-display-none-value').checked = false;
  }
  $('#main-block-display-none-value, #main-block-timeout-hour-value, #main-block-timeout-hour-value-range, #main-block-timeout-minute-value, #main-block-timeout-minute-value-range, #main-block-timeout-second-value, #main-block-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#main-block-timeout-hour-value').val() * 3600;
    var minute = $('#main-block-timeout-minute-value').val() * 60;
    var second = parseInt($('#main-block-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('main-block-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "main-block-timeout-hour-value") {
      $('#main-block-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-hour-value-range") {
      $('#main-block-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value") {
      $('#main-block-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-minute-value-range") {
      $('#main-block-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value") {
      $('#main-block-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "main-block-timeout-second-value-range") {
      $('#main-block-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/

  /*Динамические настройки для основного блока*/
  /*Изменение ширины основного селектора*/
  $('#main-block-width-value, #main-block-width-value-range').on('input', function () {
    $(ths).width($(this).val());
    if ($(this).attr('id') == "main-block-width-value") {
      $('#main-block-width-value-range').val($(this).val());
    } else {
      $('#main-block-width-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-margin-top-value, #main-block-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    //$(ths).css('cssText', 'margin-top:'+$(this).val()+'px !important');
    if ($(this).attr('id') == "main-block-margin-top-value") {
      $('#main-block-margin-top-value-range').val($(this).val());
    } else {
      $('#main-block-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-margin-bottom-value, #main-block-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "main-block-margin-bottom-value") {
      $('#main-block-margin-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-padding-top-value, #main-block-padding-top-value-range').on('input', function () {
    $(ths).css('padding-top', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-top-value") {
      $('#main-block-padding-top-value-range').val($(this).val());
    } else {
      $('#main-block-padding-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-padding-bottom-value, #main-block-padding-bottom-value-range').on('input', function () {
    $(ths).css('padding-bottom', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-bottom-value") {
      $('#main-block-padding-bottom-value-range').val($(this).val());
    } else {
      $('#main-block-padding-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-padding-left-value, #main-block-padding-left-value-range').on('input', function () {
    $(ths).css('padding-left', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-left-value") {
      $('#main-block-padding-left-value-range').val($(this).val());
    } else {
      $('#main-block-padding-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-padding-right-value, #main-block-padding-right-value-range').on('input', function () {
    $(ths).css('padding-right', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-padding-right-value") {
      $('#main-block-padding-right-value-range').val($(this).val());
    } else {
      $('#main-block-padding-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-opacity-value, #main-block-opacity-value-range').on('input', function () {
    $(ths).css('opacity', $(this).val() / 100);
    if ($(this).attr('id') == "main-block-opacity-value") {
      $('#main-block-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для всех границ блока*/
  $('#main-block-border-thickness-value, #main-block-border-thickness-value-range').on('input', function () {
    $(ths).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-thickness-value") {
      $('#main-block-border-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-radius-value, #main-block-border-radius-value-range').on('input', function () {
    $(ths).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-radius-value") {
      $('#main-block-border-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-style-value').on('change', function () {
    $(ths).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-color-value').on('change', function () {
    $(ths).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/

  $('#main-block-border-left-thickness-value, #main-block-border-left-thickness-value-range').on('input', function () {
    $(ths).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-left-thickness-value") {
      $('#main-block-border-left-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-left-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-left-style-value').on('change', function () {
    $(ths).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-left-color-value').on('change', function () {
    $(ths).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для верхней границы блока*/

  $('#main-block-border-top-thickness-value, #main-block-border-top-thickness-value-range').on('input', function () {
    $(ths).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-thickness-value") {
      $('#main-block-border-top-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-top-left-radius-value, #main-block-border-top-left-radius-value-range').on('input', function () {
    $(ths).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-left-radius-value") {
      $('#main-block-border-top-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-left-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-top-right-radius-value, #main-block-border-top-right-radius-value-range').on('input', function () {
    $(ths).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-top-right-radius-value") {
      $('#main-block-border-top-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-top-right-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-top-style-value').on('change', function () {
    $(ths).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-top-color-value').on('change', function () {
    $(ths).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/

  $('#main-block-border-right-thickness-value, #main-block-border-right-thickness-value-range').on('input', function () {
    $(ths).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-right-thickness-value") {
      $('#main-block-border-right-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-right-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-right-style-value').on('change', function () {
    $(ths).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-right-color-value').on('change', function () {
    $(ths).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/

  $('#main-block-border-bottom-thickness-value, #main-block-border-bottom-thickness-value-range').on('input', function () {
    $(ths).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-thickness-value") {
      $('#main-block-border-bottom-thickness-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-thickness-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-bottom-left-radius-value, #main-block-border-bottom-left-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-left-radius-value") {
      $('#main-block-border-bottom-left-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-left-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-bottom-right-radius-value, #main-block-border-bottom-right-radius-value-range').on('input', function () {
    $(ths).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "main-block-border-bottom-right-radius-value") {
      $('#main-block-border-bottom-right-radius-value-range').val($(this).val());
    } else {
      $('#main-block-border-bottom-right-radius-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-bottom-style-value').on('change', function () {
    $(ths).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-border-bottom-color-value').on('change', function () {
    $(ths).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  $('#main-block-border-settings-choice input').on('change', function () {
    switch ($(this).val()) {
      case 'allborders':
        {
          $('#main-block-all-border-settings').show();
          $('#main-block-each-border-settings').hide();
          break;
        }
      case 'eachborders':
        {
          $('#main-block-all-border-settings').hide();
          $('#main-block-each-border-settings').show();
          break;
        }
    }
  });
  $('#main-block-background-types input').on('change', function () {
    switch ($(this).val()) {
      case 'color':
        {
          $('.main-block-background-color-settings').show();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }
      case 'gradient':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').show();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }
      case 'bgimage':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').show();
          $('.main-block-background-vide-settings').hide();
          $(ths).find('.background-video').remove();
          break;
        }
      case 'video':
        {
          $('.main-block-background-color-settings').hide();
          $('.main-block-background-gradient-settings').hide();
          $('.main-block-background-image-settings').hide();
          $('.main-block-background-video-settings').show();
        }
    }
  });
  $('#main-block-background-color input#main-block-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity);
    $(ths).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-gradient-color-1').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-gradient-color-2').on('change', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($('#main-block-gradient-angle').val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $(this).val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-gradient-angle').on('input', function () {
    $(ths).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#main-block-gradient-color-1').val() + ', ' + $('#main-block-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-main-color').val(), opacity / 100);
    $(ths).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-file').on('change', function () {
    var file = document.querySelector('input#main-block-background-image-file').files[0];
    var token = $('input[name=_token][type=hidden]').val();
    var form_data = new FormData();
    form_data.append('image', file);
    form_data.append('_token', token);
    form_data.append('id', $('input[name=template_id]').val());
    $.ajax({
      url: "/client/funnel/saveimage",
      method: 'post',
      data: form_data,
      contentType: false,
      processData: false,
      success: function success(e) {
        $(ths).css('background-image', 'url(' + e.link + ')');
      }
    });
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-size').on('change', function () {
    $(ths).css('background-size', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-attachment').on('change', function () {
    $(ths).css('background-attachment', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-blend-mode').on('change', function () {
    $(ths).css('background-blend-mode', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-repeat-x').on('change', function () {
    $(ths).css('background-repeat-x', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-repeat-y').on('change', function () {
    $(ths).css('background-repeat-y', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-background-image-color').on('change', function () {
    $(ths).css('background-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  function setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock) {
    console.log(bgVideoBlock);
    $(bgVideoBlock).find(' > *').remove();
    var p = "?autoplay=1&controls=0&loop=" + params['loop'] + "&mute=" + params['mute'];
    link = 'https://www.youtube.com/embed/' + link + p;
    var videoblock = '<div class="video-background-main-block">\
                             <div class="video-foreground-main-block">\
                                    <iframe width="560" height="315" src="' + link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                             </div>\
                          </div>';
    $(bgVideoBlock).append(videoblock);
  }
  $('#main-block-videolink, #main-block-video_loop, #main-block-video_unmute').on('change', function () {
    var bgVideoBlock = null;
    if ($(ths).find('> *').is('.background-video') == false) {
      $(ths).append('<div class="background-video"></div>');
      bgVideoBlock = $(ths).find('> .background-video').first();
    } else {
      bgVideoBlock = $(ths).find('> .background-video').first();
    }
    if ($('#main-block-videolink').val().indexOf(".mp4") != -1 || $('#main-block-videolink').val().indexOf(".avi") != -1) {
      setAnotherMainBlockBackgroundVideo($(this).val());
    } else if ($('#main-block-videolink').val().indexOf("youtube.com") != -1 || $('#main-block-videolink').val().indexOf("youtu.be") != -1) {
      var link;
      if ($('#main-block-videolink').val().indexOf("watch?v=") != -1) {
        link = $('#main-block-videolink').val().split("watch?v=")[1];
      } else if ($('#main-block-videolink').val().indexOf("embed") != -1) {
        link = $('#main-block-videolink').val().split("embed/")[1];
      } else {
        link = $('#main-block-videolink').val().split("youtu.be/")[1];
      }
      var params = [];
      params['loop'] = $('#main-block-video_loop:checked').val() == '1' ? 1 : 0;
      params['mute'] = $('#main-block-video_unmute:checked').val() == '1' ? 0 : 1;
      setYoutubeMainBlockBackgroundVideo(link, params, bgVideoBlock);
    } else {
      $('#backgroundVideo > *').remove();
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки теней*/

  $('#main-block-shadow-horizontal-value, #main-block-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-horizontal-value") {
      $('#main-block-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-vertical-value, #main-block-shadow-vertical-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-vertical-value") {
      $('#main-block-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-blur-value, #main-block-shadow-blur-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-blur-value") {
      $('#main-block-shadow-blur-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-spread-value, #main-block-shadow-spread-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-spread-value") {
      $('#main-block-shadow-spread-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-opacity-value, #main-block-shadow-opacity-value-range').on('input', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    if ($(this).attr('id') == "main-block-shadow-opacity-value") {
      $('#main-block-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#main-block-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-color-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $('#main-block-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-shadow-inset-value').on('change', function () {
    var hv = $('#main-block-shadow-horizontal-value').val() + 'px';
    var vv = $('#main-block-shadow-vertical-value').val() + 'px';
    var blr = $('#main-block-shadow-blur-value').val() + 'px';
    var sprd = $('#main-block-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#main-block-shadow-color-value').val(), $('#main-block-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    $(ths).css('box-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#main-block-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(ths).css('animation-name', $(this).val());
      $(ths).css('animation-delay', $('#main-block-animation-delay-value').val() + 's');
      $(ths).css('animation-duration', $('#main-block-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-animation-delay-value').on('change', function () {
    $(ths).css('animation-delay', $(this).val() + 's');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#main-block-animation-duration-value').on('change', function () {
    $(ths).css('animation-duration', $(this).val() + 's');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/

  //Конец блока
});

function addMainSelectorSection($this) {
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
  var contentsLength = $($this).parents('.main-selector')[0].getElementsByClassName('content').length;
  $(lastElement).append('<div class="handle"></div>');
  $(lastElement).after('<div class="content col-xs-12 col-sm-1 col-md-1" id="content' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])() + '"></div>');
  $($(lastElement).find('.handle')).resizer();
  $($this).parents('.main-selector').find('.content').each(function () {
    Sortable.create($("#" + $(this).attr('id') + "").get(0), {
      group: {
        name: 'content-selector',
        put: 'content-selector'
      },
      filter: '.resizer, .handle, .block-resizer',
      sort: true,
      animation: 150,
      ghostClass: 'green-background-class',
      onChoose: function onChoose(e) {
        if ($(e.item).attr('class') == 'textBlock sortable-chosen' && e.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(e.item).attr('id'));
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          var textElem = textBlockElem.getElementsByClassName('text')[0];
          content = iframe.contentWindow.document.body.innerHTML;
          var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
          styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
          styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
          styleElem += 'color:' + getComputedStyle(textElem).color + ';';
          styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
          style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
        }
      },
      onStart: function onStart(evt) {
        $('.handle').css('display', 'none');
        $('.main-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover');
        });
        $('.content-selector').each(function (ind, el) {
          $(el).find('> .content:not(:last)').addClass('border-hover-content');
        });
      },
      onEnd: function onEnd(evt) {
        $('.handle').css('display', 'block');
        $('.border-hover').removeClass('border-hover');
        $('.border-hover-content').removeClass('border-hover-content');
        if ($(evt.item).attr('class') == 'textBlock' && evt.item.getElementsByTagName('iframe')[0]) {
          var textBlockElem = document.getElementById($(evt.item).attr('id'));
          var textEditorPanel = textBlockElem.getElementsByClassName('text-editor-panel')[0];
          var iframe = textBlockElem.getElementsByTagName('iframe')[0];
          init(iframe, content, style);
          textEditorPanel.style.width = textBlockElem.getBoundingClientRect().width - 2 + 'px';
          iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
          addFunctionalityToIframe($(evt.item).attr('id'));
        }
      }
    });
  });
}
function removeMainSelectorSection($this) {
  var $delta = 0;
  var lastElement = $($this).parents('.main-selector').find('>[class*="col-"]').last();
  $($(lastElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      $delta = el.split('-')[2];
    }
  });
  var prevElement = lastElement.prev();
  lastElement.remove();
  $(prevElement).find('.handle').remove();
  $($(prevElement).attr('class').split(' ')).each(function (ind, el) {
    if (el.match(/col-[a-z]+-[0-9]+/i)) {
      if (el.split('-')[1] != 'xs') {
        $(prevElement).removeClass(el);
        $(prevElement).addClass('col-' + el.split('-')[1] + '-' + (parseInt(el.split('-')[2]) + parseInt($delta)));
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/button/button.css":
/*!**************************************************!*\
  !*** ./src/components/modules/button/button.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/button/buttonModule.js":
/*!*******************************************************!*\
  !*** ./src/components/modules/button/buttonModule.js ***!
  \*******************************************************/
/*! exports provided: dragButton, addFunctionalityToButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragButton", function() { return dragButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToButtonElement", function() { return addFunctionalityToButtonElement; });
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./src/components/modules/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragButton(e) {
  var buttonBlockId = 'button' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + buttonBlockId + '" class="buttonBlock">' + '<div class="buttonWrapper" style="width: 600px;">' + '<div class="image_settings button_settings">' + '<span class="glyphicon glyphicon-cog buttonSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyButton"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="button"><div>КЛИКНИТЕ, ЧТОБЫ ПРОДОЛЖИТЬ!</div></div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToButtonElement(buttonBlockId);
}
function addFunctionalityToButtonElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('buttonWrapper')[0];
  var textSettings = imgBlockElem.getElementsByClassName('textSet')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var textCopy = imgBlockElem.getElementsByClassName('copyText')[0];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var textElem = imgBlockElem.getElementsByClassName('button')[0];

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    imgWrapperElem.style.border = '2px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeXY = function resizeXY() {
    if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
      imgWrapperElem.style.width = imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      imgWrapperElem.style.width = event.clientX - imgWrapperElem.getBoundingClientRect().left + 'px';
    }
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
      imgWrapperElem.style.width = imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      imgWrapperElem.style.width = event.clientX - imgWrapperElem.getBoundingClientRect().left + 'px';
    }
  };
  var finishResizeX = function finishResizeX() {
    if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  var finishResizeXY = function finishResizeXY() {
    if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeXY);
    document.removeEventListener('mouseup', finishResizeXY);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Обработчики событий
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', finishResizeXY);
    return false;
  };
  arrowLeftElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'start';
    imgBlockElem.style["-ms-flex-pack"] = 'start';
    imgBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'center';
    imgBlockElem.style["-ms-flex-pack"] = 'center';
    imgBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'end';
    imgBlockElem.style["-ms-flex-pack"] = 'end';
    imgBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(imgBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/button/buttonSettings.js":
/*!*********************************************************!*\
  !*** ./src/components/modules/button/buttonSettings.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _buttonModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonModule.js */ "./src/components/modules/button/buttonModule.js");


(function () {
  'use strict';

  $('#mainArea').on('click', '.copyButton', function () {
    var buttonBlockId = $(this).parents('.buttonBlock').attr('id');
    var buttonBlockElem = document.getElementById(buttonBlockId);
    var clonId = 'button' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
    $(buttonBlockElem).clone(true).attr('id', clonId).insertAfter(buttonBlockElem);
    Object(_buttonModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToButtonElement"])(clonId);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  var ths = null;
  var buttonBlockElem = null;
  var buttonWrapperElem = null;
  var buttonElem = null;
  var editor = null;
  $('#mainArea').on('click', '.buttonSet', function (e) {
    ths = $(this).parents('.buttonBlock');
    buttonBlockElem = document.getElementById(ths.attr('id'));
    buttonWrapperElem = buttonBlockElem.getElementsByClassName('buttonWrapper')[0];
    buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
    editor = buttonElem.getElementsByTagName('div')[0];

    //Появление правой панели, инициализация инпутов.
    $('#rightSidebar > div:not(#settings-mn) input').off('input');
    $('#rightSidebar > div:not(#settings-mn) input').off();
    $('#button-border-style').off();
    $('#button-border-left-style').off();
    $('#button-border-right-style').off();
    $('#button-border-top-style-value').off();
    $('#button-border-bottom-style').off();
    $('#button-animation-type-value').off();
    if (document.getElementById('script-' + ths.attr('id'))) {
      var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
      var h = Math.floor(time / 3600);
      var m = Math.floor((time - 3600 * h) / 60);
      var s = time - (3600 * h + 60 * m);
      $('#button-timeout-hour-value').val(h);
      $('#button-timeout-minute-value').val(m);
      $('#button-timeout-second-value').val(s);
      $('#button-display-none-value').prop('checked', true);
    } else {
      $('#button-timeout-hour-value').val(0);
      $('#button-timeout-minute-value').val(0);
      $('#button-timeout-second-value').val(0);
    }
    $('#rightSidebar > div').hide();
    $('#settings-mn').hide();
    $('#main-block-settings').hide();
    $('#content-block-settings').hide();
    $('#image-settings').hide();
    $('#video-settings').hide();
    $('#text-settings').hide();
    $('#form-settings').hide();
    $('#subscribe-settings').hide();
    $('#line-settings').hide();
    $('#list-settings').hide();
    $('#button-settings').show();
    $('#rightSidebar').css({
      right: '0px',
      transition: '0.4s all ease-in'
    }).addClass('activated');

    // Закрыть панель

    document.addEventListener('mousedown', _global_global_js__WEBPACK_IMPORTED_MODULE_0__["closeRightPanel"]);

    //Настройки отступов

    $('#button-margin-top-value').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-top-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginTop));
    $('#button-margin-right-value').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-right-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginRight));
    $('#button-margin-bottom-value').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-bottom-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginBottom));
    $('#button-margin-left-value').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));
    $('#button-margin-left-value-range').val(parseInt(getComputedStyle(buttonBlockElem).marginLeft));
    $('#button-margin-top-value, #button-margin-top-value-range').on('input', function () {
      $(ths).css('margin-top', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-top:' + val + 'px !important;';
      });
      if ($(this).attr('id') == "button-margin-top-value") {
        $('#button-margin-top-value-range').val($(this).val());
      } else {
        $('#button-margin-top-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-margin-right-value, #button-margin-right-value-range').on('input', function () {
      $(ths).css('margin-right', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-right:' + val + 'px !important;';
      });
      if ($(this).attr('id') == "button-margin-right-value") {
        $('#button-margin-right-value-range').val($(this).val());
      } else {
        $('#button-margin-right-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-margin-bottom-value, #button-margin-bottom-value-range').on('input', function () {
      $(ths).css('margin-bottom', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-bottom:' + val + 'px !important;';
      });
      if ($(this).attr('id') == "button-margin-bottom-value") {
        $('#button-margin-bottom-value-range').val($(this).val());
      } else {
        $('#button-margin-bottom-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-margin-left-value, #button-margin-left-value-range').on('input', function () {
      $(ths).css('margin-left', '');
      var val = $(this).val();
      $(ths).attr('style', function (i, s) {
        return (s || '') + 'margin-left:' + val + 'px !important;';
      });
      if ($(this).attr('id') == "button-margin-left-value") {
        $('#button-margin-left-value-range').val($(this).val());
      } else {
        $('#button-margin-left-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    //Вертикальное выравнивание
    if (getComputedStyle(buttonBlockElem).marginTop == 'auto') {
      buttonMarginBottom.checked = true;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginBottom == 'auto') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = true;
      buttonMarginCenter.checked = false;
    } else if (getComputedStyle(buttonBlockElem).marginTop == '0px' && getComputedStyle(buttonBlockElem).marginBottom == '0px') {
      buttonMarginBottom.checked = false;
      buttonMarginTop.checked = false;
      buttonMarginCenter.checked = true;
    }
    buttonMarginTop.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = 'auto';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    buttonMarginCenter.onclick = function () {
      buttonBlockElem.style.marginTop = '0px';
      buttonBlockElem.style.marginBottom = '0px';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    buttonMarginBottom.onclick = function () {
      buttonBlockElem.style.marginTop = 'auto';
      buttonBlockElem.style.marginBottom = '0px';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };

    //Выбор шрифта
    buttonFontFamilySelect.value = getComputedStyle(buttonElem).fontFamily;
    buttonFontFamilySelect.onchange = function () {
      buttonElem.style.fontFamily = buttonFontFamilySelect.value;
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    if (getComputedStyle(buttonElem).fontWeight == '900') {
      buttonBold.checked = true;
    } else {
      buttonBold.checked = false;
    }
    buttonBold.onclick = function () {
      if (buttonBold.checked) {
        buttonElem.style.fontWeight = '900';
      } else {
        buttonElem.style.fontWeight = 'normal';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };

    //Размер шрифта  
    $('#button-font-size-value').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value-range').val(parseInt(getComputedStyle(buttonElem).fontSize));
    $('#button-font-size-value, #button-font-size-value-range').on('input', function () {
      $(buttonElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "button-font-size-value") {
        $('#button-font-size-value-range').val($(this).val());
      } else {
        $('#button-font-size-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    //Межстрочный интервал
    $('#button-line-height-value').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value-range').val(parseInt(getComputedStyle(buttonElem).lineHeight));
    $('#button-line-height-value, #button-line-height-value-range').on('input', function () {
      $(buttonElem).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "button-line-height-value") {
        $('#button-line-height-value-range').val($(this).val());
      } else {
        $('#button-line-height-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    //Редактирование

    buttonEditor.onclick = function () {
      buttonWrapperElem.innerHTML = deleteLink(buttonWrapperElem);
      Object(_buttonModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToButtonElement"])($(ths).attr('id'));
      buttonElem = buttonWrapperElem.getElementsByClassName('button')[0];
      editor = buttonElem.getElementsByTagName('div')[0];
      editor.contentEditable = true;
      editor.focus();
      editor.onblur = function () {
        if (linkIndicator.innerHTML != 'отсутствует') {
          if (buttonTarget.checked == true) {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_blank">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          } else {
            buttonElem.outerHTML = '<a href="' + linkIndicator.innerHTML + '" target="_self">' + buttonElem.outerHTML + '</a>';
            buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
            editor = buttonElem.getElementsByTagName('div')[0];
          }
        }
        editor.contentEditable = false;
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      };
    };

    //Превращение в ссылку
    if (buttonWrapperElem.getElementsByTagName('a')[0]) {
      linkIndicator.innerHTML = buttonWrapperElem.getElementsByTagName('a')[0].href;
    }
    if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonWrapperElem.getElementsByTagName('a')[0].target == '_blank') {
      buttonTarget.checked = true;
    } else {
      buttonTarget.checked = false;
    }
    buttonTarget.onclick = function () {
      if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == true) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_blank';
      } else if (buttonWrapperElem.getElementsByTagName('a')[0] && buttonTarget.checked == false) {
        buttonWrapperElem.getElementsByTagName('a')[0].target = '_self';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    buttonUrlExec.onclick = function () {
      if (buttonUrl.value != '') {
        if (buttonTarget.checked == true) {
          var button = deleteLink(buttonWrapperElem);
          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_blank">' + button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        } else {
          var _button = deleteLink(buttonWrapperElem);
          buttonElem.outerHTML = '<a href="' + buttonUrl.value + '" target="_self">' + _button + '</a>';
          linkIndicator.innerHTML = buttonUrl.value;
          buttonUrl.value = '';
          buttonElem = buttonBlockElem.getElementsByClassName('button')[0];
          editor = buttonElem.getElementsByTagName('div')[0];
        }
      } else {
        alert('Вы не ввели адрес ссылки');
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };

    //Цвет текста
    $('#button-color-value').on('change', function () {
      $(buttonElem).css('color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    //Цвет кнопки

    buttonBackgroundRadioColor.onclick = function () {
      buttonBackgroundGradient.style.display = 'none';
      buttonBackgroundColor.style.display = 'block';
    };
    buttonBackgroundRadioGradient.onclick = function () {
      buttonBackgroundColor.style.display = 'none';
      buttonBackgroundGradient.style.display = 'block';
    };
    $('#button-main-color').on('change', function () {
      var opacity = $('#page-main-color-opacity').val() / 100;
      var color = hexToRGB($(this).val(), opacity);
      $(buttonElem).css('background', color);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-gradient-color-1').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#button-gradient-color-2').val() + ')');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-gradient-color-2').on('change', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($('#button-gradient-angle').val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $(this).val() + ')');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-gradient-angle').on('input', function () {
      $(buttonElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#button-gradient-color-1').val() + ', ' + $('#button-gradient-color-2').val() + ')');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-main-color-opacity').on('input', function () {
      var opacity = $(this).val();
      var color = hexToRGB($('#button-main-color').val(), opacity / 100);
      $(buttonElem).css('background', color);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Настройки тени текста*/
    document.getElementById('buttonTextShadowRadioOn').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'block';
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    document.getElementById('buttonTextShadowRadioOff').onclick = function () {
      document.getElementById('button-text-shadow').style.display = 'none';
      $(buttonElem).css('text-shadow', 'none');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    $('#button-text-shadow-horizontal-value, #button-text-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-horizontal-value") {
        $('#button-text-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-horizontal-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-text-shadow-vertical-value, #button-text-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-vertical-value") {
        $('#button-text-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-vertical-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-text-shadow-blur-value, #button-text-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-blur-value") {
        $('#button-text-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-blur-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-text-shadow-opacity-value, #button-text-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($('#button-text-shadow-color-value').val(), $(this).val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      if ($(this).attr('id') == "button-text-shadow-opacity-value") {
        $('#button-text-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-text-shadow-opacity-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-text-shadow-color-value').on('change', function () {
      var hv = $('#button-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-text-shadow-vertical-value').val() + 'px';
      var blr = $('#button-text-shadow-blur-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      $(buttonElem).css('text-shadow', prpts);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    /*Конец настроек тени текста*/

    //Настройки всех границ изображения

    buttonBorderRadioEvery.onclick = function () {
      buttonBorderAll.style.display = 'none';
      buttonBorderEvery.style.display = 'block';
    };
    buttonBorderRadioAll.onclick = function () {
      buttonBorderAll.style.display = 'block';
      buttonBorderEvery.style.display = 'none';
    };
    $('#button-border-value').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-value-range').val(parseInt($(buttonElem).css('border-width')));
    $('#button-border-radius').val(parseInt($(buttonElem).css('border-radius')));
    $('#button-border-radius-range').val(parseInt($(buttonElem).css('border-radius')));
    $('#button-border-value, #button-border-value-range').on('input', function () {
      $(buttonElem).css('border-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-value") {
        $('#button-border-value-range').val($(this).val());
      } else {
        $('#button-border-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-radius, #button-border-radius-range').on('input', function () {
      $(buttonElem).css('border-radius', $(this).val() + 'px');
      $(buttonElem).css('border-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-radius") {
        $('#button-border-radius-range').val($(this).val());
      } else {
        $('#button-border-radius').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-style').on('change', function () {
      $(buttonElem).css('border-style', $(this).find('option:selected').val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-color-value').on('change', function () {
      $(buttonElem).css('border-color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Настройки для верхней границы блока*/

    $('#button-border-top-value').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-top-value-range').val(parseInt($(buttonElem).css('border-top-width')));
    $('#button-border-left-top-radius').val(parseInt($(buttonElem).css('border-top-left-radius')));
    $('#button-border-left-top-radius-range').val(parseInt($(buttonElem).css('border-top-left-radius')));
    $('#button-border-top-value, #button-border-top-value-range').on('input', function () {
      $(buttonElem).css('border-top-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-top-value") {
        $('#button-border-top-value-range').val($(this).val());
      } else {
        $('#button-border-top-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-left-top-radius, #button-border-left-top-radius-range').on('input', function () {
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-left-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-left-top-radius") {
        $('#button-border-left-top-radius-range').val($(this).val());
      } else {
        $('#button-border-left-top-radius').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-top-style-value').on('change', function () {
      $(buttonElem).css('border-top-style', $(this).find('option:selected').val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-top-color').on('change', function () {
      $(buttonElem).css('border-top-color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец блока*/

    /*Настройки для правой границы блока*/
    $('#button-border-right-value').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-value-range').val(parseInt($(buttonElem).css('border-right-width')));
    $('#button-border-right-radius').val(parseInt($(buttonElem).css('border-top-right-radius')));
    $('#button-border-right-radius-range').val(parseInt($(buttonElem).css('border-top-right-radius')));
    $('#button-border-right-value, #button-border-right-value-range').on('input', function () {
      $(buttonElem).css('border-right-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-right-value") {
        $('#button-border-right-value-range').val($(this).val());
      } else {
        $('#button-border-right-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-right-radius, #button-border-right-radius-range').on('input', function () {
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-top-right-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-right-radius") {
        $('#button-border-right-radius-range').val($(this).val());
      } else {
        $('#button-border-right-radiuse').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-right-style').on('change', function () {
      $(buttonElem).css('border-right-style', $(this).find('option:selected').val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-right-color').on('change', function () {
      $(buttonElem).css('border-right-color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец блока*/

    /*Настройки для нижней границы блока*/
    $('#button-border-bottom-value').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-value-range').val(parseInt($(buttonElem).css('border-bottom-width')));
    $('#button-border-bottom-right-radius').val(parseInt($(buttonElem).css('border-bottom-right-radius')));
    $('#button-border-bottom-right-radius-range').val(parseInt($(buttonElem).css('border-bottom-right-radius')));
    $('#button-border-bottom-value, #button-border-bottom-value-range').on('input', function () {
      $(buttonElem).css('border-bottom-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-value") {
        $('#button-border-bottom-value-range').val($(this).val());
      } else {
        $('#button-border-bottom-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-bottom-right-radius, #button-border-bottom-right-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-right-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-right-radius") {
        $('#button-border-bottom-right-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-right-radius').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-bottom-style').on('change', function () {
      $(buttonElem).css('border-bottom-style', $(this).find('option:selected').val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-bottom-color').on('change', function () {
      $(buttonElem).css('border-bottom-color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец блока*/

    /*Настройки для левой границы блока*/
    $('#button-border-left-value').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-left-value-range').val(parseInt($(buttonElem).css('border-left-width')));
    $('#button-border-bottom-left-radius').val(parseInt($(buttonElem).css('border-bottom-left-radius')));
    $('#button-border-bottom-left-radius-range').val(parseInt($(buttonElem).css('border-bottom-left-radius')));
    $('#button-border-left-value, #button-border-left-value-range').on('input', function () {
      $(buttonElem).css('border-left-width', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-left-value") {
        $('#button-border-left-value-range').val($(this).val());
      } else {
        $('#button-border-left-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-bottom-left-radius, #button-border-bottom-left-radius-range').on('input', function () {
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');
      $(buttonElem).css('border-bottom-left-radius', $(this).val() + 'px');
      if ($(this).attr('id') == "button-border-bottom-left-radius") {
        $('#button-border-bottom-left-radius-range').val($(this).val());
      } else {
        $('#button-border-bottom-left-radius').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-left-style').on('change', function () {
      $(buttonElem).css('border-left-style', $(this).find('option:selected').val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-border-left-color').on('change', function () {
      $(buttonElem).css('border-left-color', $(this).val());
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец блока*/

    /*Настройки теней*/
    document.getElementById('buttonShadowRadioOn').onclick = function () {
      document.getElementById('button-shadow').style.display = 'block';
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    document.getElementById('buttonShadowRadioOff').onclick = function () {
      document.getElementById('button-shadow').style.display = 'none';
      $(buttonElem).css('box-shadow', 'none');
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
    $('#button-shadow-horizontal-value, #button-shadow-horizontal-value-range').on('input', function () {
      var hv = $(this).val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-horizontal-value") {
        $('#button-shadow-horizontal-value-range').val($(this).val());
      } else {
        $('#button-shadow-horizontal-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-vertical-value, #button-shadow-vertical-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $(this).val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-vertical-value") {
        $('#button-shadow-vertical-value-range').val($(this).val());
      } else {
        $('#button-shadow-vertical-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-blur-value, #button-shadow-blur-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $(this).val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-blur-value") {
        $('#button-shadow-blur-value-range').val($(this).val());
      } else {
        $('#button-shadow-blur-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-spread-value, #button-shadow-spread-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $(this).val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-spread-value") {
        $('#button-shadow-spread-value-range').val($(this).val());
      } else {
        $('#button-shadow-spread-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-opacity-value, #button-shadow-opacity-value-range').on('input', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $(this).val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      if ($(this).attr('id') == "button-shadow-opacity-value") {
        $('#button-shadow-opacity-value-range').val($(this).val());
      } else {
        $('#button-shadow-opacity-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-color-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($(this).val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $('#button-shadow-inset-value').prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-shadow-inset-value').on('change', function () {
      var hv = $('#button-shadow-horizontal-value').val() + 'px';
      var vv = $('#button-shadow-vertical-value').val() + 'px';
      var blr = $('#button-shadow-blur-value').val() + 'px';
      var sprd = $('#button-shadow-spread-value').val() + 'px';
      var clr = hexToRGB($('#button-shadow-color-value').val(), $('#button-shadow-opacity-value').val() / 100);
      var inset = $(this).prop('checked') == true ? "inset" : "";
      var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
      $(buttonElem).css('box-shadow', prpts);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    /*Конец настроек теней*/

    //Высота кнопки
    if (getComputedStyle(buttonWrapperElem).height == 'auto') {
      autoHeight.checked = true;
    } else {
      autoHeight.checked = false;
    }
    $('#button-height-value').val(parseInt($(buttonWrapperElem).css('height')));
    $('#button-height-value-range').val(parseInt($(buttonWrapperElem).css('height')));
    autoHeight.onclick = function () {
      if (autoHeight.checked == true) {
        buttonWrapperElem.style.height = 'auto';
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    };
    $('#button-height-value, #button-height-value-range').on('input', function () {
      if (autoHeight.checked == false) {
        $(buttonWrapperElem).css('height', $(this).val() + 'px');
        if ($(this).attr('id') == "button-height-value") {
          $('#button-height-value-range').val($(this).val());
        } else {
          $('#button-height-value').val($(this).val());
        }
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    //Ширина кнопки
    if (getComputedStyle(buttonWrapperElem).width == '100%') {
      autoWidth.checked = true;
    } else {
      autoWidth.checked = false;
    }
    $('#button-width-value').val(parseInt($(buttonWrapperElem).css('width')));
    $('#button-width-value-range').val(parseInt($(buttonWrapperElem).css('width')));
    autoWidth.onclick = function () {
      if (autoWidth.checked == true) {
        buttonWrapperElem.style.width = '100%';
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    };
    $('#button-width-value, #button-width-value-range').on('input', function () {
      if (autoWidth.checked == false) {
        $(buttonWrapperElem).css('width', $(this).val() + 'px');
        if ($(this).attr('id') == "button-width-value") {
          $('#button-width-value-range').val($(this).val());
        } else {
          $('#button-width-value').val($(this).val());
        }
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Настройка анимации*/

    $('#button-animation-type-value').on('change', function () {
      if ($(this) != "none") {
        $(buttonElem).css('animation-name', $(this).val());
        $(buttonElem).css('animation-delay', $('#button-animation-delay-value').val() + 's');
        $(buttonElem).css('animation-duration', $('#button-animation-duration-value').val() + 's');
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-animation-delay-value, #button-animation-delay-value-range').on('input', function () {
      $(buttonElem).css('animation-delay', $(this).val() + 's');
      if ($(this).attr('id') == "button-animation-delay-value") {
        $('#button-animation-delay-value-range').val($(this).val());
      } else {
        $('#button-animation-delay-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });
    $('#button-animation-duration-value, #button-animation-duration-value-range').on('input', function () {
      $(buttonElem).css('animation-duration', $(this).val() + 's');
      if ($(this).attr('id') == "button-animation-duration-value") {
        $('#button-animation-duration-value-range').val($(this).val());
      } else {
        $('#button-animation-duration-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец настроек анимации*/
    /*Блок таймаута*/

    /*----------------!!!СДЕЛАТЬ!!!-----------------*/

    if (document.getElementById('script-' + ths.attr('id'))) {
      document.getElementById('button-display-none-value').checked = true;
    } else {
      document.getElementById('button-display-none-value').checked = false;
    }
    $('#button-display-none-value, #button-timeout-hour-value, #button-timeout-hour-value-range, #button-timeout-minute-value, #button-timeout-minute-value-range, #button-timeout-second-value, #button-timeout-second-value-range').on('input', function () {
      var id = ths.attr('id');
      var hours = $('#button-timeout-hour-value').val() * 3600;
      var minute = $('#button-timeout-minute-value').val() * 60;
      var second = parseInt($('#button-timeout-second-value').val());
      var time = hours + minute + second;
      time = time * 1000;
      if (document.getElementById('button-display-none-value').checked == true) {
        $('#script-' + id).remove();
        $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
      } else {
        $('#script-' + id).remove();
      }
      if ($(this).attr('id') == "button-timeout-hour-value") {
        $('#button-timeout-hour-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-hour-value-range") {
        $('#button-timeout-hour-value').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-minute-value") {
        $('#button-timeout-minute-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-minute-value-range") {
        $('#button-timeout-minute-value').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-second-value") {
        $('#button-timeout-second-value-range').val($(this).val());
      } else if ($(this).attr('id') == "button-timeout-second-value-range") {
        $('#button-timeout-second-value').val($(this).val());
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    });

    /*Конец блока таймаута*/
  });
})();

function deleteLink(el) {
  var content = el.innerHTML;
  var reOpen = new RegExp('<a[^>]*>', 'gi');
  var reClose = new RegExp('</a[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
}

/*Перевод hex в RGB (где-то точно используется, уже не помню)*/
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/form/form.css":
/*!**********************************************!*\
  !*** ./src/components/modules/form/form.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/form/formModule.js":
/*!***************************************************!*\
  !*** ./src/components/modules/form/formModule.js ***!
  \***************************************************/
/*! exports provided: dragForm, addDragAndDropToForm, addFunctionalityToFormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragForm", function() { return dragForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDragAndDropToForm", function() { return addDragAndDropToForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToFormElement", function() { return addFunctionalityToFormElement; });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/components/modules/form/form.css");
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragForm(e) {
  var formBlockId = 'form' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + formBlockId + '" class="formBlock">' + '<div class="formWrapper" style="width: 354px;">' + '<div class="image_settings form_settings">' + '<span class="glyphicon glyphicon glyphicon-move"></span>' + '<span class="glyphicon glyphicon-cog formSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyForm"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="form">' + '<form method="POST" enctype="multipart/form-data">' + '<input class="inputFunnelId" type="hidden" name="funnel_id" />' + '<input class="inputFunnelStepId" type="hidden" name="funnel_step_id" />' + '<input class="payInput name" name="name" type="text" placeholder="Ваше имя">' + '<input class="payInput email" name="email" type="email" placeholder="Ваш емейл">' + '<input class="paySubmit" type="submit" value="Оформить заказ">' + '</form>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  var formBlockEl = document.getElementById(formBlockId);
  var inputFunnelIdEl = formBlockEl.getElementsByClassName('inputFunnelId')[0];
  var inputFunnelStepId = formBlockEl.getElementsByClassName('inputFunnelStepId')[0];
  var serverInputFunnelIdEl = document.getElementById('serverInputFunnelId');
  var serverInputFunnelStepIdEl = document.getElementById('serverInputFunnelStepId');
  inputFunnelIdEl.value = serverInputFunnelIdEl.value;
  inputFunnelStepId.value = serverInputFunnelStepIdEl.value;
  addDragAndDropToForm(formBlockId);
  addFunctionalityToFormElement(formBlockId);
}
function addDragAndDropToForm(id) {
  var formBlockElem = document.getElementById(id);
  var currentForm = formBlockElem.getElementsByTagName('form')[0];
  var inputs = document.getElementById(id).getElementsByClassName('payInput');
  var formId = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  currentForm.id = formId;
  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    draggable: ".payInput",
    onEnd: function onEnd(e) {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].blur();
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    }
  });
}
function addFunctionalityToFormElement(id) {
  var formBlockElem = document.getElementById(id);
  var formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  var formElem = formBlockElem.getElementsByClassName('form')[0];
  var imgSettings = formBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = formBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = formBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = formBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = formBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = formBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = formBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = formBlockElem.getElementsByClassName('glyphicon')[4];
  var imgCopyElem = formBlockElem.getElementsByClassName('glyphicon')[5];
  var imgDeleteElem = formBlockElem.getElementsByClassName('glyphicon')[6];
  var formSubmitElem = formBlockElem.getElementsByClassName('paySubmit')[0];
  var formInputs = formBlockElem.getElementsByClassName('payInput');

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    formWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    formWrapperElem.style.border = '2px solid transparent';
    resizerY_Elem.style.visibility = 'hidden';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeY = function resizeY() {
    formWrapperElem.style.height = event.clientY - formElem.getBoundingClientRect().top + 'px';
  };
  var resizeXY = function resizeXY() {
    if (getComputedStyle(formBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(formBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(formBlockElem).justifyContent == 'flex-end') {
      formWrapperElem.style.width = formElem.getBoundingClientRect().left + formElem.getBoundingClientRect().width - event.clientX + 'px';
      formWrapperElem.style.height = event.clientY - formElem.getBoundingClientRect().top + 'px';
    } else {
      formWrapperElem.style.width = event.clientX - formElem.getBoundingClientRect().left + 'px';
      formWrapperElem.style.height = event.clientY - formElem.getBoundingClientRect().top + 'px';
    }
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(formBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(formBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(formBlockElem).justifyContent == 'flex-end') {
      formWrapperElem.style.width = formElem.getBoundingClientRect().left + formElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      formWrapperElem.style.width = event.clientX - formElem.getBoundingClientRect().left + 'px';
    }
  };

  //Обработчики событий
  formWrapperElem.addEventListener('mouseover', imgHover);
  formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerY_Elem.addEventListener('mouseover', imgHover);
  resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (event.clientX < formWrapperElem.getBoundingClientRect().left || event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width || event.clientY < formWrapperElem.getBoundingClientRect().top || event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < formWrapperElem.getBoundingClientRect().left || event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width || event.clientY < formWrapperElem.getBoundingClientRect().top || event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerY_Elem.onmousedown = function () {
    formWrapperElem.removeEventListener('mouseover', imgHover);
    formWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < formWrapperElem.getBoundingClientRect().left || event.clientX > formWrapperElem.getBoundingClientRect().left + formWrapperElem.getBoundingClientRect().width || event.clientY < formWrapperElem.getBoundingClientRect().top || event.clientY > formWrapperElem.getBoundingClientRect().top + formWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      formWrapperElem.addEventListener('mouseover', imgHover);
      formWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeY);
      formWrapperElem.style.width = getComputedStyle(formWrapperElem).width;
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  var _loop = function _loop(i) {
    formInputs[i].onblur = function () {
      formInputs[i].placeholder = formInputs[i].value;
      formInputs[i].value = '';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    };
  };
  for (var i = 0; i < formInputs.length; i++) {
    _loop(i);
  }
  formSubmitElem.onclick = function () {
    formSubmitElem.type = 'text';
    formSubmitElem.focus();
    formSubmitElem.onblur = function () {
      formSubmitElem.type = 'submit';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    };
    return false;
  };
  arrowLeftElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'start';
    formBlockElem.style["-ms-flex-pack"] = 'start';
    formBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'center';
    formBlockElem.style["-ms-flex-pack"] = 'center';
    formBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    formBlockElem.style["-webkit-box-pack"] = 'end';
    formBlockElem.style["-ms-flex-pack"] = 'end';
    formBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(formBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/form/formSettings.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/form/formSettings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _inputsSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsSettings.js */ "./src/components/modules/form/inputsSettings.js");
/* harmony import */ var _sumbitSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sumbitSettings.js */ "./src/components/modules/form/sumbitSettings.js");
/* harmony import */ var _formModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formModule.js */ "./src/components/modules/form/formModule.js");




$('#mainArea').on('click', '.copyForm', function () {
  var formBlockId = $(this).parents('.formBlock').attr('id');
  var formBlockElem = document.getElementById(formBlockId);
  var clonId = 'form' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(formBlockElem).clone(true).attr('id', clonId).insertAfter(formBlockElem);
  var formId = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  document.getElementById(clonId).getElementsByTagName('form')[0].id = formId;
  var inputs = document.getElementById(formId).getElementsByClassName('payInput');
  Sortable.create($("#" + formId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    onStart: function onStart(e) {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function () {
          return false;
        };
      }
    },
    onEnd: function onEnd(e) {
      var _loop = function _loop(i) {
        inputs[i].blur();
        inputs[i].onblur = function () {
          inputs[i].placeholder = inputs[i].value;
          inputs[i].value = '';
        };
      };
      for (var i = 0; i < inputs.length; i++) {
        _loop(i);
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  });
  Object(_formModule_js__WEBPACK_IMPORTED_MODULE_3__["addFunctionalityToFormElement"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
var formBlockElem = null;
var formWrapperElem = null;
var currentForm = null;
var formSubmitElem = null;
var formInputs = null;
var allInputs = null;
$('#mainArea').on('click', '.formSet', function (e) {
  ths = $(this).parents('.formBlock');
  formBlockElem = document.getElementById(ths.attr('id'));
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#form-border-style').off();
  $('#form-border-left-style').off();
  $('#form-border-right-style').off();
  $('#form-border-top-style-value').off();
  $('#form-border-bottom-style').off();
  $('#form-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#form-timeout-hour-value').val(h);
    $('#form-timeout-minute-value').val(m);
    $('#form-timeout-second-value').val(s);
    $('#form-display-none-value').prop('checked', true);
  } else {
    $('#form-timeout-hour-value').val(0);
    $('#form-timeout-minute-value').val(0);
    $('#form-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#form-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  //Настройки отступов формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formMarginEvery', 'formMarginGroupIndicator');
  $('#form-margin-top-value').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-top-value-range').val(parseInt(getComputedStyle(formBlockElem).marginTop));
  $('#form-margin-right-value').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-right-value-range').val(parseInt(getComputedStyle(formBlockElem).marginRight));
  $('#form-margin-bottom-value').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-bottom-value-range').val(parseInt(getComputedStyle(formBlockElem).marginBottom));
  $('#form-margin-left-value').val(parseInt(getComputedStyle(formBlockElem).marginLeft));
  $('#form-margin-left-value-range').val(parseInt(getComputedStyle(formBlockElem).marginLeft));
  $('#form-margin-top-value, #form-margin-top-value-range').on('input', function () {
    $(formBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "form-margin-top-value") {
      $('#form-margin-top-value-range').val($(this).val());
    } else {
      $('#form-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-margin-right-value, #form-margin-right-value-range').on('input', function () {
    $(formBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "form-margin-right-value") {
      $('#form-margin-right-value-range').val($(this).val());
    } else {
      $('#form-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-margin-bottom-value, #form-margin-bottom-value-range').on('input', function () {
    $(formBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "form-margin-bottom-value") {
      $('#form-margin-bottom-value-range').val($(this).val());
    } else {
      $('#form-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-margin-left-value, #form-margin-left-value-range').on('input', function () {
    $(formBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(formBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "form-margin-left-value") {
      $('#form-margin-left-value-range').val($(this).val());
    } else {
      $('#form-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Вертикальное выравнивание формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-vertical-settings', 'formVerticalIndicator');
  if (getComputedStyle(formBlockElem).marginTop == 'auto') {
    formMarginBottom.checked = true;
    formMarginTop.checked = false;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginBottom == 'auto') {
    formMarginBottom.checked = false;
    formMarginTop.checked = true;
    formMarginCenter.checked = false;
  } else if (getComputedStyle(formBlockElem).marginTop == '0px' && getComputedStyle(formBlockElem).marginBottom == '0px') {
    formMarginBottom.checked = false;
    formMarginTop.checked = false;
    formMarginCenter.checked = true;
  }
  formMarginTop.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  formMarginCenter.onclick = function () {
    formBlockElem.style.marginTop = '0px';
    formBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  formMarginBottom.onclick = function () {
    formBlockElem.style.marginTop = 'auto';
    formBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  /*Настройки тени текста*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-text-shadow-settings', 'formTextShadowIndicator');
  document.getElementById('formTextShadowRadioOn').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'block';
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('formTextShadowRadioOff').onclick = function () {
    document.getElementById('form-text-shadow').style.display = 'none';
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', 'none');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#form-text-shadow-horizontal-value, #form-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-horizontal-value") {
      $('#form-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-text-shadow-vertical-value, #form-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-vertical-value") {
      $('#form-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-text-shadow-blur-value, #form-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-blur-value") {
      $('#form-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-text-shadow-opacity-value, #form-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "form-text-shadow-opacity-value") {
      $('#form-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-text-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-text-shadow-color-value').on('change', function () {
    var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-text-shadow-vertical-value').val() + 'px';
    var blr = $('#form-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#form-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('text-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  /*Конец настроек тени текста*/

  /*Настройки теней*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-shadow-settings', 'formShadowIndicator');
  document.getElementById('formShadowRadioOn').onclick = function () {
    document.getElementById('form-shadow').style.display = 'block';
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('formShadowRadioOff').onclick = function () {
    document.getElementById('form-shadow').style.display = 'none';
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#form-shadow-horizontal-value, #form-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-horizontal-value") {
      $('#form-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#form-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-vertical-value, #form-shadow-vertical-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-vertical-value") {
      $('#form-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#form-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-blur-value, #form-shadow-blur-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-blur-value") {
      $('#form-shadow-blur-value-range').val($(this).val());
    } else {
      $('#form-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-spread-value, #form-shadow-spread-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-spread-value") {
      $('#form-shadow-spread-value-range').val($(this).val());
    } else {
      $('#form-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-opacity-value, #form-shadow-opacity-value-range').on('input', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "form-shadow-opacity-value") {
      $('#form-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#form-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-color-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $('#form-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-shadow-inset-value').on('change', function () {
    var hv = $('#form-shadow-horizontal-value').val() + 'px';
    var vv = $('#form-shadow-vertical-value').val() + 'px';
    var blr = $('#form-shadow-blur-value').val() + 'px';
    var sprd = $('#form-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-shadow-color-value').val(), $('#form-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  /*Конец настроек теней*/

  Object(_inputsSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])($(ths).attr('id'));
  Object(_sumbitSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"])($(ths).attr('id'));

  /*Настройка анимации*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-animation', 'formAnimationIndicator');
  $('#form-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentForm).css('animation-name', $(this).val());
      $(currentForm).css('animation-delay', $('#form-animation-delay-value').val() + 's');
      $(currentForm).css('animation-duration', $('#form-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-animation-delay-value, #form-animation-delay-value-range').on('input', function () {
    $(currentForm).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "form-animation-delay-value") {
      $('#form-animation-delay-value-range').val($(this).val());
    } else {
      $('#form-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#form-animation-duration-value, #form-animation-duration-value-range').on('input', function () {
    $(currentForm).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "form-animation-duration-value") {
      $('#form-animation-duration-value-range').val($(this).val());
    } else {
      $('#form-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/
  /*Блок таймаута*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-timeout-settings', 'formTimeoutIndicator');

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('form-display-none-value').checked = true;
  } else {
    document.getElementById('form-display-none-value').checked = false;
  }
  $('#form-display-none-value, #form-timeout-hour-value, #form-timeout-hour-value-range, #form-timeout-minute-value, #form-timeout-minute-value-range, #form-timeout-second-value, #form-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#form-timeout-hour-value').val() * 3600;
    var minute = $('#form-timeout-minute-value').val() * 60;
    var second = parseInt($('#form-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('form-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "form-timeout-hour-value") {
      $('#form-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-hour-value-range") {
      $('#form-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value") {
      $('#form-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-minute-value-range") {
      $('#form-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value") {
      $('#form-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "form-timeout-second-value-range") {
      $('#form-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/form/inputsSettings.js":
/*!*******************************************************!*\
  !*** ./src/components/modules/form/inputsSettings.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _formModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formModule.js */ "./src/components/modules/form/formModule.js");


var formBlockElem = null;
var formWrapperElem = null;
var currentForm = null;
var formSubmitElem = null;
var formInputs = null;
var allInputs = null;
function includeInputsSettings(id) {
  'use strict';

  formBlockElem = document.getElementById(id);
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-inputs-settings', 'formInputsIndicator');

  //Добавление поля

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-add-delete-settings', 'formAddDeleteIndicator');
  inputerAdd.value = '';
  function showOptionsForAdd() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];
    inputerAdd.innerHTML = '<option value=""></option>';
    if (!currentForm.getElementsByClassName('name')[0]) {
      inputerAdd.innerHTML += '<option value="name">Имя</option>';
    }
    if (!currentForm.getElementsByClassName('email')[0]) {
      inputerAdd.innerHTML += '<option value="email">Email</option>';
    }
    if (!currentForm.getElementsByClassName('tel')[0]) {
      inputerAdd.innerHTML += '<option value="tel">Телефон</option>';
    }
  }
  showOptionsForAdd();
  inputerAdd.onchange = function () {
    var i = inputerAdd.selectedIndex;
    var formInput = document.createElement('input');
    if (inputerAdd.value == 'tel') {
      formInput.className = 'payInput tel';
      formInput.name = 'tel';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;
      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
        //        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
        //          formInput.style.width = getComputedStyle(formInputs[0]).width;
        //        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }
      if (formTextShadowRadioOn.checked == true) {
        var hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        var vv = $('#form-text-shadow-vertical-value').val() + 'px';
        var blr = $('#form-text-shadow-blur-value').val() + 'px';
        var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        var prpts = hv + " " + vv + " " + blr + " " + clr;
        formInput.style.textShadow = prpts;
      }
      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_formModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToFormElement"])(id);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    } else if (inputerAdd.value == 'name') {
      formInput.className = 'payInput name';
      formInput.name = 'name';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;
      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
        //        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
        //          formInput.style.width = getComputedStyle(formInputs[0]).width;
        //        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }
      if (formTextShadowRadioOn.checked == true) {
        var _hv = $('#form-text-shadow-horizontal-value').val() + 'px';
        var _vv = $('#form-text-shadow-vertical-value').val() + 'px';
        var _blr = $('#form-text-shadow-blur-value').val() + 'px';
        var _clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        var _prpts = _hv + " " + _vv + " " + _blr + " " + _clr;
        formInput.style.textShadow = _prpts;
      }
      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_formModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToFormElement"])(id);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
    if (inputerAdd.value == 'email') {
      formInput.className = 'payInput email';
      formInput.name = 'email';
      formInput.type = inputerAdd.value;
      formInput.placeholder = inputerAdd.options[i].innerHTML;
      if (formInputBold.checked == true) {
        formInput.style.fontWeight = '900';
      } else {
        formInput.style.fontWeight = 'normal';
      }
      formInput.style.fontFamily = formInputFontFamilySelect.value;
      formInput.style.fontSize = $('#formInput-font-size-value').val() + 'px';
      if (formInputs[0]) {
        //        if (parseFloat(getComputedStyle(formInputs[0]).width) != parseFloat(getComputedStyle(formWrapperElem).width) - 2) {
        //          formInput.style.width = getComputedStyle(formInputs[0]).width;
        //        }
        formInput.style.color = getComputedStyle(formInputs[0]).color;
        formInput.style.background = getComputedStyle(formInputs[0]).background;
        formInput.style.borderTopWidth = getComputedStyle(formInputs[0]).borderTopWidth;
        formInput.style.borderTopLeftRadius = getComputedStyle(formInputs[0]).borderTopLeftRadius;
        formInput.style.borderTopStyle = getComputedStyle(formInputs[0]).borderTopStyle;
        formInput.style.borderTopColor = getComputedStyle(formInputs[0]).borderTopColor;
        formInput.style.borderRightWidth = getComputedStyle(formInputs[0]).borderRightWidth;
        formInput.style.borderTopRightRadius = getComputedStyle(formInputs[0]).borderTopRightRadius;
        formInput.style.borderRightStyle = getComputedStyle(formInputs[0]).borderRightStyle;
        formInput.style.borderRightColor = getComputedStyle(formInputs[0]).borderRightColor;
        formInput.style.borderBottomWidth = getComputedStyle(formInputs[0]).borderBottomWidth;
        formInput.style.borderBottomRightRadius = getComputedStyle(formInputs[0]).borderBottomRightRadius;
        formInput.style.borderBottomStyle = getComputedStyle(formInputs[0]).borderBottomStyle;
        formInput.style.borderBottomColor = getComputedStyle(formInputs[0]).borderBottomColor;
        formInput.style.borderLeftWidth = getComputedStyle(formInputs[0]).borderLeftWidth;
        formInput.style.borderBottomLeftRadius = getComputedStyle(formInputs[0]).borderBottomLeftRadius;
        formInput.style.borderLeftStyle = getComputedStyle(formInputs[0]).borderLeftStyle;
        formInput.style.borderLeftColor = getComputedStyle(formInputs[0]).borderLeftColor;
      }
      if (formInputAutoHeight.checked == true) {
        formInput.style.height = 'auto';
      } else {
        formInput.style.height = $('#formInput-height-value').val() + 'px';
      }
      if (formTextShadowRadioOn.checked == true) {
        var _hv2 = $('#form-text-shadow-horizontal-value').val() + 'px';
        var _vv2 = $('#form-text-shadow-vertical-value').val() + 'px';
        var _blr2 = $('#form-text-shadow-blur-value').val() + 'px';
        var _clr2 = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#form-text-shadow-color-value').val(), $('#form-text-shadow-opacity-value').val() / 100);
        var _prpts2 = _hv2 + " " + _vv2 + " " + _blr2 + " " + _clr2;
        formInput.style.textShadow = _prpts2;
      }
      $(formInput).insertBefore(formSubmitElem);
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_formModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToFormElement"])(id);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };

  //Удаление поля

  inputerDelete.value = '';
  function showOptionsForDelete() {
    currentForm = formBlockElem.getElementsByTagName('form')[0];
    inputerDelete.innerHTML = '<option value=""></option>';
    if (currentForm.getElementsByClassName('name')[0]) {
      inputerDelete.innerHTML += '<option value="name">Имя</option>';
    }
    if (currentForm.getElementsByClassName('email')[0]) {
      inputerDelete.innerHTML += '<option value="email">Email</option>';
    }
    if (currentForm.getElementsByClassName('tel')[0]) {
      inputerDelete.innerHTML += '<option value="tel">Телефон</option>';
    }
  }
  showOptionsForDelete();
  function deleteInput(el, inputClass) {
    var stringToDelete = new RegExp('<input class="payInput ' + inputClass + '"[^>]*>', 'gi');
    el.innerHTML = el.innerHTML.replace(stringToDelete, '');
  }
  inputerDelete.onchange = function () {
    if (inputerDelete.value == 'tel') {
      deleteInput(currentForm, 'tel');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    } else if (inputerDelete.value == 'name') {
      console.log('hi');
      deleteInput(currentForm, 'name');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    } else if (inputerDelete.value == 'email') {
      deleteInput(currentForm, 'email');
      showOptionsForAdd();
      showOptionsForDelete();
      currentForm = formBlockElem.getElementsByTagName('form')[0];
      formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };

  //Выбор шрифта полей
  formInputFontFamilySelect.value = getComputedStyle(formInputs[0]).fontFamily;
  formInputFontFamilySelect.onchange = function () {
    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].style.fontFamily = formInputFontFamilySelect.value;
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  if (getComputedStyle(formInputs[0]).fontWeight == '900') {
    formInputBold.checked = true;
  } else {
    formInputBold.checked = false;
  }
  formInputBold.onclick = function () {
    if (formInputBold.checked) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.fontWeight = '900';
      }
    } else {
      for (var _i = 0; _i < formInputs.length; _i++) {
        formInputs[_i].style.fontWeight = 'normal';
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-inputs-font-settings', 'formInputsFontIndicator');
  $('#formInput-font-size-value').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value-range').val(parseInt(getComputedStyle(formInputs[0]).fontSize));
  $('#formInput-font-size-value, #formInput-font-size-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('font-size', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-font-size-value") {
      $('#formInput-font-size-value-range').val($(this).val());
    } else {
      $('#formInput-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет текста у полей
  $('#formInput-color-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formInput-background-types', 'formInputsBackgroundIndicator');
  formInputBackgroundRadioColor.onclick = function () {
    formInputBackgroundGradient.style.display = 'none';
    formInputBackgroundColor.style.display = 'block';
  };
  formInputBackgroundRadioGradient.onclick = function () {
    formInputBackgroundColor.style.display = 'none';
    formInputBackgroundGradient.style.display = 'block';
  };
  $('#formInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity);
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-gradient-color-1').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-gradient-color-2').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($('#formInput-gradient-angle').val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-gradient-angle').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formInput-gradient-color-1').val() + ', ' + $('#formInput-gradient-color-2').val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#formInput-main-color').val(), opacity / 100);
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('background', color);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Высота полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formInput-height', 'formInputsSizeIndicator');
  if (getComputedStyle(formInputs[0]).height == 'auto') {
    formInputAutoHeight.checked = true;
  } else {
    formInputAutoHeight.checked = false;
  }
  $('#formInput-height-value').val(parseInt($(formInputs[0]).css('height')));
  $('#formInput-height-value-range').val(parseInt($(formInputs[0]).css('height')));
  formInputAutoHeight.onclick = function () {
    if (formInputAutoHeight.checked == true) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.height = 'auto';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#formInput-height-value, #formInput-height-value-range').on('input', function () {
    if (formInputAutoHeight.checked == false) {
      for (var i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('height', $(this).val() + 'px');
      }
      if ($(this).attr('id') == "formInput-height-value") {
        $('#formInput-height-value-range').val($(this).val());
      } else {
        $('#formInput-height-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Ширина полей
  if (getComputedStyle(formInputs[0]).width == '100%') {
    formInputAutoWidth.checked = true;
  } else {
    formInputAutoWidth.checked = false;
  }
  $('#formInput-width-value').val(parseInt($(formInputs[0]).css('width')));
  $('#formInput-width-value-range').val(parseInt($(formInputs[0]).css('width')));
  formInputAutoWidth.onclick = function () {
    if (formInputAutoWidth.checked == true) {
      for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].style.width = '100%';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#formInput-width-value, #formInput-width-value-range').on('input', function () {
    if (formInputAutoWidth.checked == false) {
      for (var i = 0; i < formInputs.length; i++) {
        $(formInputs[i]).css('width', $(this).val() + 'px');
      }
      if ($(this).attr('id') == "formInput-width-value") {
        $('#formInput-width-value-range').val($(this).val());
      } else {
        $('#formInput-width-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-inputs-border-settings', 'formInputsBorderIndicator');
  formInputBorderRadioEvery.onclick = function () {
    formInputBorderAll.style.display = 'none';
    formInputBorderEvery.style.display = 'block';
  };
  formInputBorderRadioAll.onclick = function () {
    formInputBorderAll.style.display = 'block';
    formInputBorderEvery.style.display = 'none';
  };
  $('#formInput-border-value').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-value-range').val(parseInt($(formInputs[0]).css('border-width')));
  $('#formInput-border-radius').val(parseInt($(formInputs[0]).css('border-radius')));
  $('#formInput-border-radius-range').val(parseInt($(formInputs[0]).css('border-radius')));
  $('#formInput-border-value, #formInput-border-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-value") {
      $('#formInput-border-value-range').val($(this).val());
    } else {
      $('#formInput-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-radius, #formInput-border-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-radius") {
      $('#formInput-border-radius-range').val($(this).val());
    } else {
      $('#formInput-border-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-color-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы полей*/

  $('#formInput-border-top-value').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-top-value-range').val(parseInt($(formInputs[0]).css('border-top-width')));
  $('#formInput-border-left-top-radius').val(parseInt($(formInputs[0]).css('border-top-left-radius')));
  $('#formInput-border-left-top-radius-range').val(parseInt($(formInputs[0]).css('border-top-left-radius')));
  $('#formInput-border-top-value, #formInput-border-top-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-top-value") {
      $('#formInput-border-top-value-range').val($(this).val());
    } else {
      $('#formInput-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-left-top-radius, #formInput-border-left-top-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-left-top-radius") {
      $('#formInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formInput-border-left-top-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-top-style-value').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-top-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы полей*/
  $('#formInput-border-right-value').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-value-range').val(parseInt($(formInputs[0]).css('border-right-width')));
  $('#formInput-border-right-radius').val(parseInt($(formInputs[0]).css('border-top-right-radius')));
  $('#formInput-border-right-radius-range').val(parseInt($(formInputs[0]).css('border-top-right-radius')));
  $('#formInput-border-right-value, #formInput-border-right-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-right-value") {
      $('#formInput-border-right-value-range').val($(this).val());
    } else {
      $('#formInput-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-right-radius, #formInput-border-right-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-right-radius") {
      $('#formInput-border-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-right-radiuse').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-right-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-right-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-right-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы полей*/
  $('#formInput-border-bottom-value').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-value-range').val(parseInt($(formInputs[0]).css('border-bottom-width')));
  $('#formInput-border-bottom-right-radius').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));
  $('#formInput-border-bottom-right-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-right-radius')));
  $('#formInput-border-bottom-value, #formInput-border-bottom-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-value") {
      $('#formInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-bottom-right-radius, #formInput-border-bottom-right-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-right-radius") {
      $('#formInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-right-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-bottom-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-bottom-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы полей*/
  $('#formInput-border-left-value').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-left-value-range').val(parseInt($(formInputs[0]).css('border-left-width')));
  $('#formInput-border-bottom-left-radius').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));
  $('#formInput-border-bottom-left-radius-range').val(parseInt($(formInputs[0]).css('border-bottom-left-radius')));
  $('#formInput-border-left-value, #formInput-border-left-value-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-left-value") {
      $('#formInput-border-left-value-range').val($(this).val());
    } else {
      $('#formInput-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-bottom-left-radius, #formInput-border-bottom-left-radius-range').on('input', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "formInput-border-bottom-left-radius") {
      $('#formInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formInput-border-bottom-left-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-left-style').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formInput-border-left-color').on('change', function () {
    for (var i = 0; i < formInputs.length; i++) {
      $(formInputs[i]).css('border-left-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
}
/* harmony default export */ __webpack_exports__["default"] = (includeInputsSettings);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/form/sumbitSettings.js":
/*!*******************************************************!*\
  !*** ./src/components/modules/form/sumbitSettings.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");

var formBlockElem = null;
var formWrapperElem = null;
var currentForm = null;
var formSubmitElem = null;
var formInputs = null;
var allInputs = null;
function includeSubmitSettings(id) {
  'use strict';

  formBlockElem = document.getElementById(id);
  formWrapperElem = formBlockElem.getElementsByClassName('formWrapper')[0];
  currentForm = formBlockElem.getElementsByTagName('form')[0];
  formSubmitElem = currentForm.getElementsByClassName('paySubmit')[0];
  formInputs = currentForm.getElementsByClassName('payInput');
  allInputs = currentForm.getElementsByTagName('input');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-submit-settings', 'formSubmitIndicator');

  //Настройки отступов у submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formSubmitMarginEvery', 'formSubmitMarginIndicator');
  $('#formSubmit-margin-top-value').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-top-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginTop));
  $('#formSubmit-margin-right-value').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-right-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginRight));
  $('#formSubmit-margin-bottom-value').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginBottom));
  $('#formSubmit-margin-left-value').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));
  $('#formSubmit-margin-left-value-range').val(parseInt(getComputedStyle(formSubmitElem).marginLeft));
  $('#formSubmit-margin-top-value, #formSubmit-margin-top-value-range').on('input', function () {
    $(formSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "formSubmit-margin-top-value") {
      $('#formSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-margin-right-value, #formSubmit-margin-right-value-range').on('input', function () {
    $(formSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "formSubmit-margin-right-value") {
      $('#formSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-margin-bottom-value, #formSubmit-margin-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "formSubmit-margin-bottom-value") {
      $('#formSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-margin-left-value, #formSubmit-margin-left-value-range').on('input', function () {
    $(formSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(formSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "formSubmit-margin-left-value") {
      $('#formSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Выбор шрифта

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-submit-font-settings', 'formSubmitFontIndicator');
  formSubmitFontFamilySelect.value = getComputedStyle(formSubmitElem).fontFamily;
  formSubmitFontFamilySelect.onchange = function () {
    formSubmitElem.style.fontFamily = formSubmitFontFamilySelect.value;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  if (getComputedStyle(formSubmitElem).fontWeight == '900') {
    formSubmitBold.checked = true;
  } else {
    formSubmitBold.checked = false;
  }
  formSubmitBold.onclick = function () {
    if (formSubmitBold.checked) {
      formSubmitElem.style.fontWeight = '900';
    } else {
      formSubmitElem.style.fontWeight = 'normal';
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта submit
  $('#formSubmit-font-size-value').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value-range').val(parseInt(getComputedStyle(formSubmitElem).fontSize));
  $('#formSubmit-font-size-value, #formSubmit-font-size-value-range').on('input', function () {
    $(formSubmitElem).css('font-size', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-font-size-value") {
      $('#formSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#formSubmit-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет текста у submit
  $('#formSubmit-color-value').on('change', function () {
    $(formSubmitElem).css('color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formSubmit-background-types', 'formSubmitBackgroundIndicator');
  formSubmitBackgroundRadioColor.onclick = function () {
    formSubmitBackgroundGradient.style.display = 'none';
    formSubmitBackgroundColor.style.display = 'block';
  };
  formSubmitBackgroundRadioGradient.onclick = function () {
    formSubmitBackgroundColor.style.display = 'none';
    formSubmitBackgroundGradient.style.display = 'block';
  };
  $('#formSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity);
    $(formSubmitElem).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-gradient-color-1').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-gradient-color-2').on('change', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($('#formSubmit-gradient-angle').val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-gradient-angle').on('input', function () {
    $(formSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#formSubmit-gradient-color-1').val() + ', ' + $('#formSubmit-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#formSubmit-main-color').val(), opacity / 100);
    $(formSubmitElem).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Высота кнопки

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('formSubmit-height', 'formSubmitSizeIndicator');
  if (getComputedStyle(formSubmitElem).height == 'auto') {
    formSubmitAutoHeight.checked = true;
  } else {
    formSubmitAutoHeight.checked = false;
  }
  $('#formSubmit-height-value').val(parseInt($(formSubmitElem).css('height')));
  $('#formSubmit-height-value-range').val(parseInt($(formSubmitElem).css('height')));
  formSubmitAutoHeight.onclick = function () {
    if (formSubmitAutoHeight.checked == true) {
      formSubmitElem.style.height = 'auto';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#formSubmit-height-value, #formSubmit-height-value-range').on('input', function () {
    if (formSubmitAutoHeight.checked == false) {
      $(formSubmitElem).css('height', $(this).val() + 'px');
      if ($(this).attr('id') == "formSubmit-height-value") {
        $('#formSubmit-height-value-range').val($(this).val());
      } else {
        $('#formSubmit-height-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Ширина кнопки
  if (getComputedStyle(formSubmitElem).width == '100%') {
    formSubmitAutoWidth.checked = true;
  } else {
    formSubmitAutoWidth.checked = false;
  }
  $('#formSubmit-width-value').val(parseInt($(formSubmitElem).css('width')));
  $('#formSubmit-width-value-range').val(parseInt($(formSubmitElem).css('width')));
  formSubmitAutoWidth.onclick = function () {
    if (formSubmitAutoWidth.checked == true) {
      formSubmitElem.style.width = '100%';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#formSubmit-width-value, #formSubmit-width-value-range').on('input', function () {
    if (formSubmitAutoWidth.checked == false) {
      $(formSubmitElem).css('width', $(this).val() + 'px');
      if ($(this).attr('id') == "formSubmit-width-value") {
        $('#formSubmit-width-value-range').val($(this).val());
      } else {
        $('#formSubmit-width-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('form-show-submit-border-settings', 'formSubmitBorderIndicator');
  formSubmitBorderRadioEvery.onclick = function () {
    formSubmitBorderAll.style.display = 'none';
    formSubmitBorderEvery.style.display = 'block';
  };
  formSubmitBorderRadioAll.onclick = function () {
    formSubmitBorderAll.style.display = 'block';
    formSubmitBorderEvery.style.display = 'none';
  };
  $('#formSubmit-border-value').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-value-range').val(parseInt($(formSubmitElem).css('border-width')));
  $('#formSubmit-border-radius').val(parseInt($(formSubmitElem).css('border-radius')));
  $('#formSubmit-border-radius-range').val(parseInt($(formSubmitElem).css('border-radius')));
  $('#formSubmit-border-value, #formSubmit-border-value-range').on('input', function () {
    $(formSubmitElem).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-value") {
      $('#formSubmit-border-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-radius, #formSubmit-border-radius-range').on('input', function () {
    $(formSubmitElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-radius") {
      $('#formSubmit-border-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-style').on('change', function () {
    $(formSubmitElem).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-color-value').on('change', function () {
    $(formSubmitElem).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы submit*/

  $('#formSubmit-border-top-value').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-top-value-range').val(parseInt($(formSubmitElem).css('border-top-width')));
  $('#formSubmit-border-left-top-radius').val(parseInt($(formSubmitElem).css('border-top-left-radius')));
  $('#formSubmit-border-left-top-radius-range').val(parseInt($(formSubmitElem).css('border-top-left-radius')));
  $('#formSubmit-border-top-value, #formSubmit-border-top-value-range').on('input', function () {
    $(formSubmitElem).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-top-value") {
      $('#formSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-left-top-radius, #formSubmit-border-left-top-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-left-top-radius") {
      $('#formSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-top-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-top-style-value').on('change', function () {
    $(formSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-top-color').on('change', function () {
    $(formSubmitElem).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы submit*/
  $('#formSubmit-border-right-value').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-value-range').val(parseInt($(formSubmitElem).css('border-right-width')));
  $('#formSubmit-border-right-radius').val(parseInt($(formSubmitElem).css('border-top-right-radius')));
  $('#formSubmit-border-right-radius-range').val(parseInt($(formSubmitElem).css('border-top-right-radius')));
  $('#formSubmit-border-right-value, #formSubmit-border-right-value-range').on('input', function () {
    $(formSubmitElem).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-right-value") {
      $('#formSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-right-radius, #formSubmit-border-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-right-radius") {
      $('#formSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-right-radiuse').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-right-style').on('change', function () {
    $(formSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-right-color').on('change', function () {
    $(formSubmitElem).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы submit*/
  $('#formSubmit-border-bottom-value').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-value-range').val(parseInt($(formSubmitElem).css('border-bottom-width')));
  $('#formSubmit-border-bottom-right-radius').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));
  $('#formSubmit-border-bottom-right-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-right-radius')));
  $('#formSubmit-border-bottom-value, #formSubmit-border-bottom-value-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-value") {
      $('#formSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-bottom-right-radius, #formSubmit-border-bottom-right-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-right-radius") {
      $('#formSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-right-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-bottom-style').on('change', function () {
    $(formSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-bottom-color').on('change', function () {
    $(formSubmitElem).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы submit*/
  $('#formSubmit-border-left-value').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-left-value-range').val(parseInt($(formSubmitElem).css('border-left-width')));
  $('#formSubmit-border-bottom-left-radius').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));
  $('#formSubmit-border-bottom-left-radius-range').val(parseInt($(formSubmitElem).css('border-bottom-left-radius')));
  $('#formSubmit-border-left-value, #formSubmit-border-left-value-range').on('input', function () {
    $(formSubmitElem).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-left-value") {
      $('#formSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#formSubmit-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-bottom-left-radius, #formSubmit-border-bottom-left-radius-range').on('input', function () {
    $(formSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "formSubmit-border-bottom-left-radius") {
      $('#formSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#formSubmit-border-bottom-left-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-left-style').on('change', function () {
    $(formSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#formSubmit-border-left-color').on('change', function () {
    $(formSubmitElem).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
}
/* harmony default export */ __webpack_exports__["default"] = (includeSubmitSettings);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/image/image.css":
/*!************************************************!*\
  !*** ./src/components/modules/image/image.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/image/imageModule.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/image/imageModule.js ***!
  \*****************************************************/
/*! exports provided: dragImage, addFunctionalityToElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragImage", function() { return dragImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToElement", function() { return addFunctionalityToElement; });
/* harmony import */ var _image_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.css */ "./src/components/modules/image/image.css");
/* harmony import */ var _image_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_image_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragImage(e) {
  var imgBlockId = 'image' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var imgModule = '<div id="' + imgBlockId + '" class="imageBlock">' + '<div class="imageWrapper" style="width: 350px;"><div class="image_settings">' + '<span class="glyphicon glyphicon-cog imgSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyImg"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="border" id="' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<img class="img" src="https://avatars.mds.yandex.net/get-pdb/38069/9013e3ba-b082-46eb-9873-512724423a84/s1200?webp=false" alt="image">' + '<input class="imgProportion" type="hidden" value="1">' + '</div>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(imgModule);
  addFunctionalityToElement(imgBlockId);
}
function addFunctionalityToElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgSettings = imgBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var borderElem = imgBlockElem.getElementsByClassName('border')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = imgBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var proportionCoefHeight = 0;
  var proportionCoefWidth = 0;
  proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
  proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
  imgElem.onload = function () {
    proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
    proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    imgWrapperElem.style.border = '2px solid transparent';
    resizerY_Elem.style.visibility = 'hidden';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeY = function resizeY() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';
        ;
      } else {
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';
      }
    } else {
      imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      imgWrapperElem.style.maxHeight = '10000px';
    }
  };
  var resizeXY = function resizeXY() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      }
    }
  };
  var resizeX = function resizeX() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      }
    }
  };

  //Обработчики событий
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerY_Elem.addEventListener('mouseover', imgHover);
  resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerY_Elem.onmousedown = function () {
    var checkBox = +proportion.value;
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeY);
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      if (checkBox) {
        imgWrapperElem.style.height = 'auto';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  arrowLeftElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'start';
    imgBlockElem.style["-ms-flex-pack"] = 'start';
    imgBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'center';
    imgBlockElem.style["-ms-flex-pack"] = 'center';
    imgBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'end';
    imgBlockElem.style["-ms-flex-pack"] = 'end';
    imgBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(imgBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/image/imageSettings.js":
/*!*******************************************************!*\
  !*** ./src/components/modules/image/imageSettings.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _imageModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageModule.js */ "./src/components/modules/image/imageModule.js");


$('#mainArea').on('click', '.copyImg', function () {
  var imgBlockId = $(this).parents('.imageBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'image' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);
  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerY = clone.getElementsByClassName('resizerY')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];
  Object(_imageModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToElement"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
$('#mainArea').on('click', '.imgSet', function (e) {
  var imgWrapper = null;
  ths = $(this).parents('.imageBlock');
  var content = document.getElementById($(this).parents('.content').attr('id'));
  var imgBlockElem = document.getElementById(ths.attr('id'));
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var imgWrapper = imgBlockElem.getElementsByClassName('border')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#img-border-style').off();
  $('#img-border-left-style').off();
  $('#img-border-right-style').off();
  $('#img-border-top-style-value').off();
  $('#img-border-bottom-style').off();
  $('#img-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#img-timeout-hour-value').val(h);
    $('#img-timeout-minute-value').val(m);
    $('#img-timeout-second-value').val(s);
    $('#img-display-none-value').prop('checked', true);
  } else {
    $('#img-timeout-hour-value').val(0);
    $('#img-timeout-minute-value').val(0);
    $('#img-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#image-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
  (function () {
    document.getElementById('paddingRadioEvery').onclick = function () {
      document.getElementById('paddingAll').style.display = 'none';
      document.getElementById('paddingEvery').style.display = 'block';
    };
    document.getElementById('paddingRadioAll').onclick = function () {
      document.getElementById('paddingAll').style.display = 'block';
      document.getElementById('paddingEvery').style.display = 'none';
    };
    document.getElementById('imgBorderRadioEvery').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'none';
      document.getElementById('imgBorderEvery').style.display = 'block';
    };
    document.getElementById('imgBorderRadioAll').onclick = function () {
      document.getElementById('imgBorderAll').style.display = 'block';
      document.getElementById('imgBorderEvery').style.display = 'none';
    };
  })();

  //Изменение src картинок
  pictureSrc.value = imgElem.src;
  changeSrc(ths.attr('id'));

  //Настройки пропорции
  if (proportion.value == "0" && proportionID.checked) {
    proportionID.checked = false;
  } else if (proportion.value == "1" && !proportionID.checked) {
    proportionID.checked = true;
  }
  proportionID.onclick = function () {
    if (proportionID.checked) {
      proportion.value = "1";
    } else {
      proportion.value = "0";
    }
  };
  //Вертикальное выравнивание
  if (getComputedStyle(imgBlockElem).marginTop == 'auto') {
    imgMarginBottom.checked = true;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginBottom == 'auto') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = true;
    imgMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginTop == '0px' && getComputedStyle(imgBlockElem).marginBottom == '0px') {
    imgMarginBottom.checked = false;
    imgMarginTop.checked = false;
    imgMarginCenter.checked = true;
  }
  imgMarginTop.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  imgMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  imgMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Настройки отступов

  $('#img-padding-value').val(parseInt($(imgWrapper).css('padding')));
  $('#img-padding-value-range').val(parseInt($(imgWrapper).css('padding')));
  $('#img-margin-top-value').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-top-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#img-margin-right-value').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-right-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#img-margin-bottom-value').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-bottom-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#img-margin-left-value').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#img-margin-left-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#img-padding-top-value').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-top-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingTop));
  $('#img-padding-right-value').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-right-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingRight));
  $('#img-padding-bottom-value').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-bottom-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingBottom));
  $('#img-padding-left-value').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-padding-left-value-range').val(parseInt(getComputedStyle(imgWrapper).paddingLeft));
  $('#img-margin-top-value, #img-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-margin-top-value") {
      $('#img-margin-top-value-range').val($(this).val());
    } else {
      $('#img-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-margin-right-value, #img-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-margin-right-value") {
      $('#img-margin-right-value-range').val($(this).val());
    } else {
      $('#img-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-margin-bottom-value, #img-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-margin-bottom-value") {
      $('#img-margin-bottom-value-range').val($(this).val());
    } else {
      $('#img-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-margin-left-value, #img-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-margin-left-value") {
      $('#img-margin-left-value-range').val($(this).val());
    } else {
      $('#img-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-padding-value, #img-padding-value-range').on('input', function () {
    $(imgWrapper).css('padding', $(this).val() + 'px');
    if ($(this).attr('id') == "img-padding-value") {
      $('#img-padding-value-range').val($(this).val());
    } else {
      $('#img-padding-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-padding-top-value, #img-padding-top-value-range').on('input', function () {
    $(imgWrapper).css('padding-top', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-padding-top-value") {
      $('#img-padding-top-value-range').val($(this).val());
    } else {
      $('#img-padding-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-padding-right-value, #img-padding-right-value-range').on('input', function () {
    $(imgWrapper).css('padding-right', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-padding-right-value") {
      $('#img-padding-right-value-range').val($(this).val());
    } else {
      $('#img-padding-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-padding-bottom-value, #img-padding-bottom-value-range').on('input', function () {
    $(imgWrapper).css('padding-bottom', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-padding-bottom-value") {
      $('#img-padding-bottom-value-range').val($(this).val());
    } else {
      $('#img-padding-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-padding-left-value, #img-padding-left-value-range').on('input', function () {
    $(imgWrapper).css('padding-left', '');
    var val = $(this).val();
    $(imgWrapper).attr('style', function (i, s) {
      return (s || '') + 'padding-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "img-padding-left-value") {
      $('#img-padding-left-value-range').val($(this).val());
    } else {
      $('#img-padding-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ изображения
  $('#img-border-value').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-value-range').val(parseInt($(imgWrapper).css('border-width')));
  $('#img-border-radius').val(parseInt($(imgWrapper).css('border-radius')));
  $('#img-border-radius-range').val(parseInt($(imgWrapper).css('border-radius')));
  $('#img-border-value, #img-border-value-range').on('input', function () {
    $(imgWrapper).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-value") {
      $('#img-border-value-range').val($(this).val());
    } else {
      $('#img-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-radius, #img-border-radius-range').on('input', function () {
    $(imgWrapper).css('border-radius', $(this).val() + 'px');
    $(imgElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-radius") {
      $('#img-border-radius-range').val($(this).val());
    } else {
      $('#img-border-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-style').on('change', function () {
    $(imgWrapper).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#border-color-value').on('change', function () {
    $(imgWrapper).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы блока*/

  $('#img-border-top-value').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-top-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#img-border-left-top-radius').val(parseInt($(ths).css('border-top-left-radius')));
  $('#img-border-left-top-radius-range').val(parseInt($(ths).css('border-top-left-radius')));
  $('#img-border-top-value, #img-border-top-value-range').on('input', function () {
    $(imgWrapper).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-top-value") {
      $('#img-border-top-value-range').val($(this).val());
    } else {
      $('#img-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-left-top-radius, #img-border-left-top-radius-range').on('input', function () {
    $(imgElem).css('border-top-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-left-top-radius") {
      $('#img-border-left-top-radius-range').val($(this).val());
    } else {
      $('#img-border-left-top-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-top-style-value').on('change', function () {
    $(imgWrapper).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-top-color').on('change', function () {
    $(imgWrapper).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/
  $('#img-border-right-value').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#img-border-right-radius').val(parseInt($(ths).css('border-top-right-radius')));
  $('#img-border-right-radius-range').val(parseInt($(ths).css('border-top-right-radius')));
  $('#img-border-right-value, #img-border-right-value-range').on('input', function () {
    $(imgWrapper).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-right-value") {
      $('#img-border-right-value-range').val($(this).val());
    } else {
      $('#img-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-right-radius, #img-border-right-radius-range').on('input', function () {
    $(imgElem).css('border-top-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-right-radius") {
      $('#img-border-right-radius-range').val($(this).val());
    } else {
      $('#img-border-right-radiuse').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-right-style').on('change', function () {
    $(imgWrapper).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-right-color').on('change', function () {
    $(imgWrapper).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/
  $('#img-border-bottom-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-value-range').val(parseInt($(ths).css('border-bottom-width')));
  $('#img-border-bottom-right-radius').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#img-border-bottom-right-radius-range').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#img-border-bottom-value, #img-border-bottom-value-range').on('input', function () {
    $(imgWrapper).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-value") {
      $('#img-border-bottom-value-range').val($(this).val());
    } else {
      $('#img-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-bottom-right-radius, #img-border-bottom-right-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-right-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-right-radius") {
      $('#img-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-right-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-bottom-style').on('change', function () {
    $(imgWrapper).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-bottom-color').on('change', function () {
    $(imgWrapper).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/
  $('#img-border-left-value').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-left-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#img-border-bottom-left-radius').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#img-border-bottom-left-radius-range').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#img-border-left-value, #img-border-left-value-range').on('input', function () {
    $(imgWrapper).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-left-value") {
      $('#img-border-left-value-range').val($(this).val());
    } else {
      $('#img-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-bottom-left-radius, #img-border-bottom-left-radius-range').on('input', function () {
    $(imgElem).css('border-bottom-left-radius', $(this).val() + 'px');
    $(imgWrapper).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "img-border-bottom-left-radius") {
      $('#img-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#img-border-bottom-left-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-left-style').on('change', function () {
    $(imgWrapper).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-border-left-color').on('change', function () {
    $(imgWrapper).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки теней*/
  document.getElementById('imgShadowRadioOn').onclick = function () {
    document.getElementById('img-shadow').style.display = 'block';
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('imgShadowRadioOff').onclick = function () {
    document.getElementById('img-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#img-shadow-horizontal-value, #img-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-horizontal-value") {
      $('#img-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#img-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-vertical-value, #img-shadow-vertical-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-vertical-value") {
      $('#img-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#img-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-blur-value, #img-shadow-blur-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-blur-value") {
      $('#img-shadow-blur-value-range').val($(this).val());
    } else {
      $('#img-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-spread-value, #img-shadow-spread-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-spread-value") {
      $('#img-shadow-spread-value-range').val($(this).val());
    } else {
      $('#img-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-opacity-value, #img-shadow-opacity-value-range').on('input', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "img-shadow-opacity-value") {
      $('#img-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#img-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-color-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $('#img-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-shadow-inset-value').on('change', function () {
    var hv = $('#img-shadow-horizontal-value').val() + 'px';
    var vv = $('#img-shadow-vertical-value').val() + 'px';
    var blr = $('#img-shadow-blur-value').val() + 'px';
    var sprd = $('#img-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#img-shadow-color-value').val(), $('#img-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#img-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#img-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(imgElem).css('animation-name', $(this).val());
      $(imgElem).css('animation-delay', $('#img-animation-delay-value').val() + 's');
      $(imgElem).css('animation-duration', $('#img-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-animation-delay-value, #img-animation-delay-value-range').on('input', function () {
    $(imgElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "img-animation-delay-value") {
      $('#img-animation-delay-value-range').val($(this).val());
    } else {
      $('#img-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#img-animation-duration-value, #img-animation-duration-value-range').on('input', function () {
    $(imgElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "img-animation-duration-value") {
      $('#img-animation-duration-value-range').val($(this).val());
    } else {
      $('#img-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('img-display-none-value').checked = true;
  } else {
    document.getElementById('img-display-none-value').checked = false;
  }
  $('#img-display-none-value, #img-timeout-hour-value, #img-timeout-hour-value-range, #img-timeout-minute-value, #img-timeout-minute-value-range, #img-timeout-second-value, #img-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#img-timeout-hour-value').val() * 3600;
    var minute = $('#img-timeout-minute-value').val() * 60;
    var second = parseInt($('#img-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('img-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "img-timeout-hour-value") {
      $('#img-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-hour-value-range") {
      $('#img-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value") {
      $('#img-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-minute-value-range") {
      $('#img-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value") {
      $('#img-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "img-timeout-second-value-range") {
      $('#img-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/
});

function changeSrc(id) {
  'use strict';

  var chosenElement = document.getElementById(id);
  var chosenImgWrapper = chosenElement.getElementsByClassName('imageWrapper')[0];
  var chosenImg = chosenElement.getElementsByClassName('img')[0];
  var pictures = pictureSrc.getElementsByClassName('pictures');
  var proportion = chosenElement.getElementsByClassName('imgProportion')[0];
  pictureSrc.onchange = function () {
    chosenImg.src = pictureSrc.value;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
}

/*Перевод hex в RGB (где-то точно используется, уже не помню)*/
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/line/line.css":
/*!**********************************************!*\
  !*** ./src/components/modules/line/line.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/line/lineModule.js":
/*!***************************************************!*\
  !*** ./src/components/modules/line/lineModule.js ***!
  \***************************************************/
/*! exports provided: dragLine, addFunctionalityToLineElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragLine", function() { return dragLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToLineElement", function() { return addFunctionalityToLineElement; });
/* harmony import */ var _line_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line.css */ "./src/components/modules/line/line.css");
/* harmony import */ var _line_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_line_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragLine(e) {
  var lineBlockId = 'line' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + lineBlockId + '" class="lineBlock">' + '<div class="lineWrapper" style="width: 300px;">' + '<div class="image_settings line_settings">' + '<span class="glyphicon glyphicon glyphicon-move"></span>' + '<span class="glyphicon glyphicon-cog lineSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyLine"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="resizerX"></div>' + '<hr class="line">' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToLineElement(lineBlockId);
}
function addFunctionalityToLineElement(id) {
  var lineBlockElem = document.getElementById(id);
  var lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  var lineSettings = lineBlockElem.getElementsByClassName('image_settings')[0];
  var resizerX_Elem = lineBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = lineBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = lineBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = lineBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = lineBlockElem.getElementsByClassName('glyphicon')[4];
  var lineCopyElem = lineBlockElem.getElementsByClassName('glyphicon')[5];
  var lineDeleteElem = lineBlockElem.getElementsByClassName('glyphicon')[6];
  var lineElem = lineBlockElem.getElementsByClassName('line')[0];

  //Сохранение анонимных функций в переменных (для removeEventlinener)
  var imgHover = function imgHover() {
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(lineBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(lineBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(lineBlockElem).justifyContent == 'flex-end') {
      lineWrapperElem.style.width = lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      lineWrapperElem.style.width = event.clientX - lineWrapperElem.getBoundingClientRect().left + 'px';
    }
  };
  var finishResizeX = function finishResizeX() {
    if (event.clientX < lineWrapperElem.getBoundingClientRect().left || event.clientX > lineWrapperElem.getBoundingClientRect().left + lineWrapperElem.getBoundingClientRect().width || event.clientY < lineWrapperElem.getBoundingClientRect().top || event.clientY > lineWrapperElem.getBoundingClientRect().top + lineWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    lineWrapperElem.addEventListener('mouseover', imgHover);
    lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Обработчики событий
  lineWrapperElem.addEventListener('mouseover', imgHover);
  lineWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    lineWrapperElem.removeEventListener('mouseover', imgHover);
    lineWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };
  arrowLeftElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'start';
    lineBlockElem.style["-ms-flex-pack"] = 'start';
    lineBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'center';
    lineBlockElem.style["-ms-flex-pack"] = 'center';
    lineBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    lineBlockElem.style["-webkit-box-pack"] = 'end';
    lineBlockElem.style["-ms-flex-pack"] = 'end';
    lineBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  lineDeleteElem.onclick = function () {
    lineBlockElem.remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/line/lineSettings.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/line/lineSettings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _lineModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineModule.js */ "./src/components/modules/line/lineModule.js");


$('#mainArea').on('click', '.copyLine', function () {
  var lineBlockId = $(this).parents('.lineBlock').attr('id');
  var lineBlockElem = document.getElementById(lineBlockId);
  var clonId = 'line' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(lineBlockElem).clone(true).attr('id', clonId).insertAfter(lineBlockElem);
  Object(_lineModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToLineElement"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
var lineBlockElem = null;
var lineEl = null;
$('#mainArea').on('click', '.lineSet', function (e) {
  ths = $(this).parents('.lineBlock');
  lineBlockElem = document.getElementById(ths.attr('id'));
  var lineWrapperElem = lineBlockElem.getElementsByClassName('lineWrapper')[0];
  var lineImages = document.getElementById('lineIcons').getElementsByClassName('lineIconImg');
  var lineOrImgLineEl = document.getElementById('lineOrImgLine');
  if (lineBlockElem.getElementsByClassName('line')[0]) {
    lineEl = lineWrapperElem.getElementsByClassName('line')[0];
  } else {
    lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
  }

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#line-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#line-timeout-hour-value').val(h);
    $('#line-timeout-minute-value').val(m);
    $('#line-timeout-second-value').val(s);
    $('#line-display-none-value').prop('checked', true);
  } else {
    $('#line-timeout-hour-value').val(0);
    $('#line-timeout-minute-value').val(0);
    $('#line-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#list-settings').hide();
  $('#line-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', _global_global_js__WEBPACK_IMPORTED_MODULE_0__["closeRightPanel"]);

  //Настройки отступов формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('lineMargins', 'lineMarginsIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('lineMarginEvery', 'lineMarginGroupIndicator');
  $('#line-margin-top-value').val(parseInt(getComputedStyle(lineBlockElem).marginTop));
  $('#line-margin-top-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginTop));
  $('#line-margin-right-value').val(parseInt(getComputedStyle(lineBlockElem).marginRight));
  $('#line-margin-right-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginRight));
  $('#line-margin-bottom-value').val(parseInt(getComputedStyle(lineBlockElem).marginBottom));
  $('#line-margin-bottom-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginBottom));
  $('#line-margin-left-value').val(parseInt(getComputedStyle(lineBlockElem).marginLeft));
  $('#line-margin-left-value-range').val(parseInt(getComputedStyle(lineBlockElem).marginLeft));
  $('#line-margin-top-value, #line-margin-top-value-range').on('input', function () {
    $(lineBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "line-margin-top-value") {
      $('#line-margin-top-value-range').val($(this).val());
    } else {
      $('#line-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#line-margin-right-value, #line-margin-right-value-range').on('input', function () {
    $(lineBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "line-margin-right-value") {
      $('#line-margin-right-value-range').val($(this).val());
    } else {
      $('#line-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#line-margin-bottom-value, #line-margin-bottom-value-range').on('input', function () {
    $(lineBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "line-margin-bottom-value") {
      $('#line-margin-bottom-value-range').val($(this).val());
    } else {
      $('#line-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#line-margin-left-value, #line-margin-left-value-range').on('input', function () {
    $(lineBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(lineBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "line-margin-left-value") {
      $('#line-margin-left-value-range').val($(this).val());
    } else {
      $('#line-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Вертикальное выравнивание формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-show-vertical-settings', 'lineVerticalIndicator');
  if (getComputedStyle(lineBlockElem).marginTop == 'auto') {
    lineMarginBottom.checked = true;
    lineMarginTop.checked = false;
    lineMarginCenter.checked = false;
  } else if (getComputedStyle(lineBlockElem).marginBottom == 'auto') {
    lineMarginBottom.checked = false;
    lineMarginTop.checked = true;
    lineMarginCenter.checked = false;
  } else if (getComputedStyle(lineBlockElem).marginTop == '0px' && getComputedStyle(lineBlockElem).marginBottom == '0px') {
    lineMarginBottom.checked = false;
    lineMarginTop.checked = false;
    lineMarginCenter.checked = true;
  }
  lineMarginTop.onclick = function () {
    lineBlockElem.style.marginTop = '0px';
    lineBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  lineMarginCenter.onclick = function () {
    lineBlockElem.style.marginTop = '0px';
    lineBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  lineMarginBottom.onclick = function () {
    lineBlockElem.style.marginTop = 'auto';
    lineBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Выбор линии

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('lineSettings', 'lineSettingsIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-choose-settings', 'lineChooseIndicator');
  if (lineWrapperElem.getElementsByClassName('lineImg')[0]) {
    lineSettingsUnderMenuIndicator.style.display = 'none';
    document.getElementById('line-settings-under-menu').style.display = 'none';
    lineOrImgLineEl.value = 'img';
    lineIcons.style.display = 'block';
  } else {
    lineIcons.style.display = 'none';
    lineSettingsUnderMenuIndicator.style.display = 'flex';
    lineOrImgLineEl.value = 'line';
  }
  lineOrImgLineEl.onchange = function () {
    if (lineOrImgLineEl.value == 'img') {
      lineSettingsUnderMenuIndicator.style.display = 'none';
      document.getElementById('line-settings-under-menu').style.display = 'none';
      lineIcons.style.display = 'block';
      if (lineWrapperElem.getElementsByClassName('line')[0]) {
        var lineImgEl = document.createElement('img');
        lineImgEl.className = 'lineImg';
        lineImgEl.src = lineImages[0].src;
        lineEl.remove();
        lineWrapperElem.append(lineImgEl);
        lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    } else {
      lineSettingsUnderMenuIndicator.style.display = 'flex';
      document.getElementById('line-settings-under-menu').style.display = 'block';
      lineIcons.style.display = 'none';
      if (lineWrapperElem.getElementsByClassName('lineImg')[0]) {
        var line = document.createElement('hr');
        line.className = 'line';
        lineEl.remove();
        lineWrapperElem.append(line);
        lineEl = lineWrapperElem.getElementsByClassName('line')[0];
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      }
    }
  };
  var _loop = function _loop(i) {
    lineImages[i].onclick = function () {
      if (lineWrapperElem.getElementsByClassName('line')[0]) {
        var lineImgEl = document.createElement('img');
        lineImgEl.className = 'lineImg';
        lineImgEl.src = lineImages[i].src;
        lineEl.remove();
        lineWrapperElem.append(lineImgEl);
        lineEl = lineWrapperElem.getElementsByClassName('lineImg')[0];
      } else {
        lineEl.src = lineImages[i].src;
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
  };
  for (var i = 0; i < lineImages.length; i++) {
    _loop(i);
  }

  // Стиль линии

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-settings-under-menu', 'lineSettingsUnderMenuIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-style-settings', 'lineStyleIndicator');
  $('#line-style').val($(lineEl).css('border-bottom-style'));
  $('#line-style').on('change', function () {
    $(lineEl).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  // Толщина линии

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-height-settings', 'lineHeightIndicator');
  $('#line-height-value').val(parseInt($(lineEl).css('border-bottom-width')));
  $('#line-height-value-range').val(parseInt($(lineEl).css('border-bottom-width')));
  $('#line-height-value, #line-height-value-range').on('input', function () {
    $(lineEl).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "line-height-value") {
      $('#line-height-value-range').val($(this).val());
    } else {
      $('#line-height-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  // Выбор цвета

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('line-color-settings', 'lineColorIndicator');
  $('#line-color').on('change', function () {
    $(lineEl).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Анимация

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-line-animation-settings', 'lineAnimationIndicator');
  $('#line-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(lineBlockElem).css('animation-name', $(this).val());
      $(lineBlockElem).css('animation-delay', $('#line-animation-delay-value').val() + 's');
      $(lineBlockElem).css('animation-duration', $('#line-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#line-animation-delay-value, #line-animation-delay-value-range').on('input', function () {
    $(lineBlockElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "line-animation-delay-value") {
      $('#line-animation-delay-value-range').val($(this).val());
    } else {
      $('#line-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#line-animation-duration-value, #line-animation-duration-value-range').on('input', function () {
    $(lineBlockElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "line-animation-duration-value") {
      $('#line-animation-duration-value-range').val($(this).val());
    } else {
      $('#line-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Скрытие блока

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-line-timeout-settings', 'lineTimeoutIndicator');
  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('line-display-none-value').checked = true;
  } else {
    document.getElementById('line-display-none-value').checked = false;
  }
  $('#line-display-none-value, #line-timeout-hour-value, #line-timeout-hour-value-range, #line-timeout-minute-value, #line-timeout-minute-value-range, #line-timeout-second-value, #line-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#line-timeout-hour-value').val() * 3600;
    var minute = $('#line-timeout-minute-value').val() * 60;
    var second = parseInt($('#line-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('line-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "line-timeout-hour-value") {
      $('#line-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-hour-value-range") {
      $('#line-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-minute-value") {
      $('#line-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-minute-value-range") {
      $('#line-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-second-value") {
      $('#line-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "line-timeout-second-value-range") {
      $('#line-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/list/list.css":
/*!**********************************************!*\
  !*** ./src/components/modules/list/list.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/list/listModule.js":
/*!***************************************************!*\
  !*** ./src/components/modules/list/listModule.js ***!
  \***************************************************/
/*! exports provided: dragList, addFunctionalityToListElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragList", function() { return dragList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToListElement", function() { return addFunctionalityToListElement; });
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.css */ "./src/components/modules/list/list.css");
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_list_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragList(e) {
  var listBlockId = 'list' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + listBlockId + '" class="listBlock">' + '<div class="listWrapper" style="width: 300px;">' + '<div class="image_settings list_settings">' + '<span class="glyphicon glyphicon-cog listSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyList"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<ul class="list">' + '<li>Первое преимущество</li>' + '<li>Второе преимущество</li>' + '<li>Третье преимущество</li>' + '</ul>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToListElement(listBlockId);
}
function addFunctionalityToListElement(id) {
  var listBlockElem = document.getElementById(id);
  var listWrapperElem = listBlockElem.getElementsByClassName('listWrapper')[0];
  var listSettings = listBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = listBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = listBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = listBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = listBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = listBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = listBlockElem.getElementsByClassName('glyphicon')[3];
  var listCopyElem = listBlockElem.getElementsByClassName('glyphicon')[4];
  var listDeleteElem = listBlockElem.getElementsByClassName('glyphicon')[5];
  var listSettings = listBlockElem.getElementsByClassName('textSet')[0];
  var listCopy = listBlockElem.getElementsByClassName('listText')[0];
  var listElem = listBlockElem.getElementsByClassName('list')[0];

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    listWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    listWrapperElem.style.border = '2px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeXY = function resizeXY() {
    if (getComputedStyle(listBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(listBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(listBlockElem).justifyContent == 'flex-end') {
      listWrapperElem.style.width = listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      listWrapperElem.style.width = event.clientX - listWrapperElem.getBoundingClientRect().left + 'px';
    }
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(listBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(listBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(listBlockElem).justifyContent == 'flex-end') {
      listWrapperElem.style.width = listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      listWrapperElem.style.width = event.clientX - listWrapperElem.getBoundingClientRect().left + 'px';
    }
  };
  var finishResizeX = function finishResizeX() {
    if (event.clientX < listWrapperElem.getBoundingClientRect().left || event.clientX > listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width || event.clientY < listWrapperElem.getBoundingClientRect().top || event.clientY > listWrapperElem.getBoundingClientRect().top + listWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    listWrapperElem.addEventListener('mouseover', imgHover);
    listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  var finishResizeXY = function finishResizeXY() {
    if (event.clientX < listWrapperElem.getBoundingClientRect().left || event.clientX > listWrapperElem.getBoundingClientRect().left + listWrapperElem.getBoundingClientRect().width || event.clientY < listWrapperElem.getBoundingClientRect().top || event.clientY > listWrapperElem.getBoundingClientRect().top + listWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    listWrapperElem.addEventListener('mouseover', imgHover);
    listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeXY);
    document.removeEventListener('mouseup', finishResizeXY);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Обработчики событий
  //  $('#mainArea').on('mousedown', '.copy', function () {
  //    destroy();
  //  });
  //  $('#mainArea').on('mousedown', '.copy-content', function () {
  //    destroy();
  //  });
  //  savePage.onmousedown = function() {
  //    destroy();
  //  }
  listWrapperElem.addEventListener('mouseover', imgHover);
  listWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    listWrapperElem.removeEventListener('mouseover', imgHover);
    listWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    listWrapperElem.removeEventListener('mouseover', imgHover);
    listWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', finishResizeXY);
    return false;
  };
  arrowLeftElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'start';
    listBlockElem.style["-ms-flex-pack"] = 'start';
    listBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'center';
    listBlockElem.style["-ms-flex-pack"] = 'center';
    listBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    listBlockElem.style["-webkit-box-pack"] = 'end';
    listBlockElem.style["-ms-flex-pack"] = 'end';
    listBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  listDeleteElem.onclick = function () {
    listBlockElem.remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/list/listSettings.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/list/listSettings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _listModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listModule.js */ "./src/components/modules/list/listModule.js");


$('#mainArea').on('click', '.copyList', function () {
  var listBlockId = $(this).parents('.listBlock').attr('id');
  var listBlockElem = document.getElementById(listBlockId);
  var clonId = 'list' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(listBlockElem).clone(true).attr('id', clonId).insertAfter(listBlockElem);
  Object(_listModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToListElement"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
var listBlockElem = null;
var listWrapperElem = null;
var listEl = null;
var listItems = null;
$('#mainArea').on('click', '.listSet', function (e) {
  ths = $(this).parents('.listBlock');
  listBlockElem = document.getElementById($(ths).attr('id'));
  listWrapperElem = listBlockElem.getElementsByClassName('listWrapper')[0];
  listEl = listBlockElem.getElementsByClassName('list')[0];
  var addListItemEl = document.getElementById('addListItem');
  var listImages = document.getElementById('list-icon-style-settings').getElementsByTagName('img');
  listItems = listEl.getElementsByTagName('li');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#list-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#list-timeout-hour-value').val(h);
    $('#list-timeout-minute-value').val(m);
    $('#list-timeout-second-value').val(s);
    $('#list-display-none-value').prop('checked', true);
  } else {
    $('#list-timeout-hour-value').val(0);
    $('#list-timeout-minute-value').val(0);
    $('#list-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', _global_global_js__WEBPACK_IMPORTED_MODULE_0__["closeRightPanel"]);

  //Настройки отступов формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('margins', 'marginsIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('listMarginEvery', 'listMarginGroupIndicator');
  $('#list-margin-top-value').val(parseInt(getComputedStyle(listBlockElem).marginTop));
  $('#list-margin-top-value-range').val(parseInt(getComputedStyle(listBlockElem).marginTop));
  $('#list-margin-right-value').val(parseInt(getComputedStyle(listBlockElem).marginRight));
  $('#list-margin-right-value-range').val(parseInt(getComputedStyle(listBlockElem).marginRight));
  $('#list-margin-bottom-value').val(parseInt(getComputedStyle(listBlockElem).marginBottom));
  $('#list-margin-bottom-value-range').val(parseInt(getComputedStyle(listBlockElem).marginBottom));
  $('#list-margin-left-value').val(parseInt(getComputedStyle(listBlockElem).marginLeft));
  $('#list-margin-left-value-range').val(parseInt(getComputedStyle(listBlockElem).marginLeft));
  $('#list-margin-top-value, #list-margin-top-value-range').on('input', function () {
    $(listBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "list-margin-top-value") {
      $('#list-margin-top-value-range').val($(this).val());
    } else {
      $('#list-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-margin-right-value, #list-margin-right-value-range').on('input', function () {
    $(listBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "list-margin-right-value") {
      $('#list-margin-right-value-range').val($(this).val());
    } else {
      $('#list-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-margin-bottom-value, #list-margin-bottom-value-range').on('input', function () {
    $(listBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "list-margin-bottom-value") {
      $('#list-margin-bottom-value-range').val($(this).val());
    } else {
      $('#list-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-margin-left-value, #list-margin-left-value-range').on('input', function () {
    $(listBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(listBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "list-margin-left-value") {
      $('#list-margin-left-value-range').val($(this).val());
    } else {
      $('#list-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Вертикальное выравнивание формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-show-vertical-settings', 'listVerticalIndicator');
  if (getComputedStyle(listBlockElem).marginTop == 'auto') {
    listMarginBottom.checked = true;
    listMarginTop.checked = false;
    listMarginCenter.checked = false;
  } else if (getComputedStyle(listBlockElem).marginBottom == 'auto') {
    listMarginBottom.checked = false;
    listMarginTop.checked = true;
    listMarginCenter.checked = false;
  } else if (getComputedStyle(listBlockElem).marginTop == '0px' && getComputedStyle(listBlockElem).marginBottom == '0px') {
    listMarginBottom.checked = false;
    listMarginTop.checked = false;
    listMarginCenter.checked = true;
  }
  listMarginTop.onclick = function () {
    listBlockElem.style.marginTop = '0px';
    listBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  listMarginCenter.onclick = function () {
    listBlockElem.style.marginTop = '0px';
    listBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  listMarginBottom.onclick = function () {
    listBlockElem.style.marginTop = 'auto';
    listBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Выбор иконки

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('listSettings', 'listSettingsIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-icon-style-settings', 'listIconStyleIndicator');
  var _loop = function _loop(i) {
    listImages[i].onclick = function () {
      for (var j = 0; j < listItems.length; j++) {
        listItems[j].style.backgroundImage = 'url("' + listImages[i].src + '")';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    };
  };
  for (var i = 0; i < listImages.length; i++) {
    _loop(i);
  }

  //Добавление строки

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-add-string-settings', 'listAddStringIndicator');
  function changeListValues(liItems) {
    var liValuesWrapper = document.getElementById('liItems');
    liValuesWrapper.innerHTML = '';
    var _loop2 = function _loop2(_i) {
      var div = document.createElement('div');
      var span = document.createElement('span');
      var listValue = document.createElement('input');
      listValue.type = 'text';
      listValue.value = liItems[_i].innerHTML;
      span.innerHTML = 'X';
      liValuesWrapper.append(div);
      div.append(listValue);
      div.append(span);
      listValue.oninput = function () {
        liItems[_i].innerHTML = listValue.value;
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      };
      span.onclick = function () {
        liItems[_i].remove();
        changeListValues(liItems);
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
      };
    };
    for (var _i = 0; _i < liItems.length; _i++) {
      _loop2(_i);
    }
  }
  changeListValues(listItems);
  addListItemEl.onclick = function () {
    var newLi = document.createElement('li');
    newLi.innerHTML = 'Описание';
    listEl.append(newLi);
    changeListValues(listItems);
    listEl = listBlockElem.getElementsByClassName('list')[0];
    listItems = listEl.getElementsByTagName('li');
    for (var _i2 = 0; _i2 < listItems.length; _i2++) {
      if (_i2 < listItems.length - 1) {
        $(listItems[_i2]).css('margin-bottom', $('#list-space-value').val() + 'px');
      }
    }
    if (listItems[0]) {
      newLi.style.backgroundImage = listItems[0].style.backgroundImage;
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Отступ между строк

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-list-space-settings', 'listSpaceIndicator');
  $('#list-space-value').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value-range').val(parseInt(getComputedStyle(listItems[0]).marginBottom));
  $('#list-space-value, #list-space-value-range').on('input', function () {
    for (var _i3 = 0; _i3 < listItems.length; _i3++) {
      if (_i3 < listItems.length - 1) {
        $(listItems[_i3]).css('margin-bottom', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
    }
    if ($(this).attr('id') == "list-space-value") {
      $('#list-space-value-range').val($(this).val());
    } else {
      $('#list-space-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Выбор шрифта

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-font-settings', 'listFontIndicator');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-font-family-settings', 'listFontFamilyIndicator');
  listFontFamilySelect.value = getComputedStyle(listEl).fontFamily;
  listFontFamilySelect.onchange = function () {
    listEl.style.fontFamily = listFontFamilySelect.value;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  if (getComputedStyle(listEl).fontWeight == '900') {
    listBold.checked = true;
  } else {
    listBold.checked = false;
  }
  listBold.onclick = function () {
    if (listBold.checked) {
      listEl.style.fontWeight = '900';
    } else {
      listEl.style.fontWeight = 'normal';
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-font-size-settings', 'listFontSizeIndicator');
  $('#list-font-size-value').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value-range').val(parseInt(getComputedStyle(listEl).fontSize));
  $('#list-font-size-value, #list-font-size-value-range').on('input', function () {
    $(listEl).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "list-font-size-value") {
      $('#list-font-size-value-range').val($(this).val());
    } else {
      $('#list-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Межстрочный интервал

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-line-height-settings', 'listLineHeightIndicator');
  $('#list-line-height-value').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value-range').val(parseInt(getComputedStyle(listEl).lineHeight));
  $('#list-line-height-value, #list-line-height-value-range').on('input', function () {
    $(listEl).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "list-line-height-value") {
      $('#list-line-height-value-range').val($(this).val());
    } else {
      $('#list-line-height-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Выбор цвета

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('list-font-color-settings', 'listFontColorIndicator');
  $('#list-color-value').on('change', function () {
    $(listEl).css('color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Тени шрифта

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-list-text-shadow-settings', 'listTextShadowIndicator');
  document.getElementById('listTextShadowRadioOn').onclick = function () {
    document.getElementById('list-text-shadow').style.display = 'block';
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('listTextShadowRadioOff').onclick = function () {
    document.getElementById('list-text-shadow').style.display = 'none';
    $(listEl).css('text-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#list-text-shadow-horizontal-value, #list-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    if ($(this).attr('id') == "list-text-shadow-horizontal-value") {
      $('#list-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-text-shadow-vertical-value, #list-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    if ($(this).attr('id') == "list-text-shadow-vertical-value") {
      $('#list-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-text-shadow-blur-value, #list-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#list-text-shadow-color-value').val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    if ($(this).attr('id') == "list-text-shadow-blur-value") {
      $('#list-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-text-shadow-opacity-value, #list-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#list-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    if ($(this).attr('id') == "list-text-shadow-opacity-value") {
      $('#list-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#list-text-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-text-shadow-color-value').on('change', function () {
    var hv = $('#list-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#list-text-shadow-vertical-value').val() + 'px';
    var blr = $('#list-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#list-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(listEl).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  /*Конец настроек тени submit*/

  //Анимация

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-list-animation-settings', 'listAnimationIndicator');
  $('#list-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(listBlockElem).css('animation-name', $(this).val());
      $(listBlockElem).css('animation-delay', $('#list-animation-delay-value').val() + 's');
      $(listBlockElem).css('animation-duration', $('#list-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-animation-delay-value, #list-animation-delay-value-range').on('input', function () {
    $(listBlockElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "list-animation-delay-value") {
      $('#list-animation-delay-value-range').val($(this).val());
    } else {
      $('#list-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#list-animation-duration-value, #list-animation-duration-value-range').on('input', function () {
    $(listBlockElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "list-animation-duration-value") {
      $('#list-animation-duration-value-range').val($(this).val());
    } else {
      $('#list-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Скрытие блока

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-list-timeout-settings', 'listTimeoutIndicator');
  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('list-display-none-value').checked = true;
  } else {
    document.getElementById('list-display-none-value').checked = false;
  }
  $('#list-display-none-value, #list-timeout-hour-value, #list-timeout-hour-value-range, #list-timeout-minute-value, #list-timeout-minute-value-range, #list-timeout-second-value, #list-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#list-timeout-hour-value').val() * 3600;
    var minute = $('#list-timeout-minute-value').val() * 60;
    var second = parseInt($('#list-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('list-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "list-timeout-hour-value") {
      $('#list-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-hour-value-range") {
      $('#list-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-minute-value") {
      $('#list-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-minute-value-range") {
      $('#list-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-second-value") {
      $('#list-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "list-timeout-second-value-range") {
      $('#list-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/modules.js":
/*!*******************************************!*\
  !*** ./src/components/modules/modules.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _image_imageModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/imageModule.js */ "./src/components/modules/image/imageModule.js");
/* harmony import */ var _video_videoModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video/videoModule.js */ "./src/components/modules/video/videoModule.js");
/* harmony import */ var _text_textModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/textModule.js */ "./src/components/modules/text/textModule.js");
/* harmony import */ var _button_buttonModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/buttonModule.js */ "./src/components/modules/button/buttonModule.js");
/* harmony import */ var _form_formModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/formModule.js */ "./src/components/modules/form/formModule.js");
/* harmony import */ var _subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe/subscribeModule.js */ "./src/components/modules/subscribe/subscribeModule.js");
/* harmony import */ var _list_listModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/listModule.js */ "./src/components/modules/list/listModule.js");
/* harmony import */ var _line_lineModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line/lineModule.js */ "./src/components/modules/line/lineModule.js");
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");










//Драг н дроп модулей
Sortable.create(Modules, {
  group: {
    name: 'content-selector',
    pull: 'clone',
    put: false
  },
  sort: false,
  animation: 150,
  emptyInsertThreshold: 1,
  ghostClass: 'green-background-class',
  onStart: function onStart(e) {
    var el = Modules;
    $('.handle').css('display', 'none');
    $('.main-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover');
    });
    $('.content-selector').each(function (ind, el) {
      $(el).find('> .content:not(:last)').addClass('border-hover-content');
    });
    $('.block-settings').css('display', 'none');
  },
  onEnd: function onEnd(e) {
    /*Разместить*/
    $('.border-hover').removeClass('border-hover');
    $('.border-hover-content').removeClass('border-hover-content');
    $('.handle').css('display', 'block');
    if (e.target != e.to) {
      switch (e.item.id) {
        case 'image':
          Object(_image_imageModule_js__WEBPACK_IMPORTED_MODULE_0__["dragImage"])(e);
          break;
        case 'video':
          Object(_video_videoModule_js__WEBPACK_IMPORTED_MODULE_1__["dragVideo"])(e);
          break;
        case 'text':
          Object(_text_textModule_js__WEBPACK_IMPORTED_MODULE_2__["dragText"])(e);
          break;
        case 'button':
          Object(_button_buttonModule_js__WEBPACK_IMPORTED_MODULE_3__["dragButton"])(e);
          break;
        case 'payForm':
          Object(_form_formModule_js__WEBPACK_IMPORTED_MODULE_4__["dragForm"])(e);
          break;
        case 'subscribeForm':
          Object(_subscribe_subscribeModule_js__WEBPACK_IMPORTED_MODULE_5__["dragSubscribe"])(e);
          break;
        case 'list':
          Object(_list_listModule_js__WEBPACK_IMPORTED_MODULE_6__["dragList"])(e);
          break;
        case 'line':
          Object(_line_lineModule_js__WEBPACK_IMPORTED_MODULE_7__["dragLine"])(e);
          break;
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_8__["makePreview"])();
    }
    $('.handle').resizer();
    $('.resizer').resizer_s();
    $('.block-resizer').block_resizer();
    $('.block-settings').css('display', 'flex');
    $('.content-block-settings').css('display', 'flex');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/subscribe/subscribe.css":
/*!********************************************************!*\
  !*** ./src/components/modules/subscribe/subscribe.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/subscribe/subscribeDelivery.js":
/*!***************************************************************!*\
  !*** ./src/components/modules/subscribe/subscribeDelivery.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeInputsSettings.js */ "./src/components/modules/subscribe/subscribeInputsSettings.js");
/* harmony import */ var _subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeSumbitSettings.js */ "./src/components/modules/subscribe/subscribeSumbitSettings.js");
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _subscribeModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeModule.js */ "./src/components/modules/subscribe/subscribeModule.js");




var subscribeBlockElem = null;
var subscribeWrapperElem = null;
var formCodeWrapperElem = null;
var currentSubscribe = null;
var subscribeSubmitElem = null;
var subscribeInputs = null;
var allInputs = null;
var deliveryCodeEl = null;
function includeSubscribeDelivery(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  var extraFieldCounter = 1;
  deliveryCodeEl = subscribeBlockElem.getElementsByClassName('deliveryCode')[0];
  var inputsInfoEl = document.getElementById('inputsInfo');
  var extraFields = inputsInfoEl.getElementsByClassName('extraField');
  var deliveryCodeAreaEl = document.getElementById('deliveryCodeArea');
  var selectInputsNames = document.getElementsByClassName('fieldNameSelect'),
    nameFieldEl = document.getElementById('nameField'),
    emailFieldEl = document.getElementById('emailField');

  // Вывод действующей рассылки в настройках

  function showDelivery() {
    extraFieldCounter = 1;
    deliveryCodeAreaEl.value = deliveryCodeEl.innerHTML;
    for (var i = 0; i < selectInputsNames.length; i++) {
      selectInputsNames[i].innerHTML = '';
    }
    for (var _i = 0; _i < extraFields.length;) {
      if (extraFields[_i]) {
        extraFields[_i].remove();
        inputsInfoEl = document.getElementById('inputsInfo');
        extraFields = inputsInfoEl.getElementsByClassName('extraField');
      } else {
        _i++;
      }
    }
    for (var _i2 = 0; _i2 < allInputs.length; _i2++) {
      if (allInputs[_i2].className == 'subscribeInput extra') {
        (function () {
          var extraFieldEl = document.createElement('div');
          extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' + '<div class="submitValue">' + '<input class="fieldPlaceholder" type="text" value="' + allInputs[_i2].placeholder + '"><span class="deleteField">X</span>' + '</div><br><br>' + '<select class="fieldNameSelect"></select><br>' + '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' + '</div>';
          inputsInfoEl.append(extraFieldEl);
          var deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];
          deleteFieldEl.onclick = function () {
            extraFieldEl.remove();
          };
          changeInputsInfo();
          extraFieldEl.getElementsByClassName('fieldNameSelect')[0].value = allInputs[_i2].name;
          if (allInputs[_i2].required == true) {
            extraFieldEl.getElementsByClassName('extraFieldRequired')[0].checked = true;
          }
          extraFieldCounter++;
        })();
      } else if (allInputs[_i2].className == 'subscribeInput name') {
        nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[_i2].placeholder;
        if (allInputs[_i2].required == true) {
          nameRequire.checked = true;
        }
      } else if (allInputs[_i2].className == 'subscribeInput email') {
        emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value = allInputs[_i2].placeholder;
      }
    }
    formAction.value = '';
    changeInputsInfo();
  }
  showDelivery();

  //Ввод рассылки

  deliveryCodeAreaEl.oninput = changeInputsInfo;
  nameDisabled.onclick = function () {
    if (nameDisabled.checked == true) {
      nameInfo.style.display = 'none';
    } else {
      nameInfo.style.display = 'block';
    }
  };

  // Вставка рассылки

  deliveryCodeExec.onclick = function () {
    var inputStyles = [];
    var submitStyles = [];
    var deliveryForm = document.createElement('form'),
      inputs = deliveryCodeEl.getElementsByTagName('input'),
      extraFields = document.getElementsByClassName('extraField');
    var deliveryInputName = null,
      deliveryInputEmail = null,
      deliverySubmit = null,
      hiddenInputs = null;
    if (subscribeInputs[0]) {
      if (parseFloat(getComputedStyle(subscribeInputs[0]).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
        inputStyles.push(parseFloat(getComputedStyle(subscribeInputs[0]).width) / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem');
      } else {
        inputStyles.push('100%');
      }
      inputStyles.push(getComputedStyle(subscribeInputs[0]).color, subscribeInputs[0].style.background, getComputedStyle(subscribeInputs[0]).borderTopWidth, getComputedStyle(subscribeInputs[0]).borderTopLeftRadius, getComputedStyle(subscribeInputs[0]).borderTopStyle, getComputedStyle(subscribeInputs[0]).borderTopColor, getComputedStyle(subscribeInputs[0]).borderRightWidth, getComputedStyle(subscribeInputs[0]).borderTopRightRadius, getComputedStyle(subscribeInputs[0]).borderRightStyle, getComputedStyle(subscribeInputs[0]).borderRightColor, getComputedStyle(subscribeInputs[0]).borderBottomWidth, getComputedStyle(subscribeInputs[0]).borderBottomRightRadius, getComputedStyle(subscribeInputs[0]).borderBottomStyle, getComputedStyle(subscribeInputs[0]).borderBottomColor, getComputedStyle(subscribeInputs[0]).borderLeftWidth, getComputedStyle(subscribeInputs[0]).borderBottomLeftRadius, getComputedStyle(subscribeInputs[0]).borderLeftStyle, getComputedStyle(subscribeInputs[0]).borderLeftColor);
    }
    if (parseFloat(getComputedStyle(subscribeSubmitElem).width) != parseFloat(getComputedStyle(subscribeWrapperElem).width) - 2) {
      submitStyles.push(parseFloat(getComputedStyle(subscribeSubmitElem).width) / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem');
    } else {
      submitStyles.push('100%');
    }
    submitStyles.push(getComputedStyle(subscribeSubmitElem).color, subscribeSubmitElem.style.background, getComputedStyle(subscribeSubmitElem).borderTopWidth, getComputedStyle(subscribeSubmitElem).borderTopLeftRadius, getComputedStyle(subscribeSubmitElem).borderTopStyle, getComputedStyle(subscribeSubmitElem).borderTopColor, getComputedStyle(subscribeSubmitElem).borderRightWidth, getComputedStyle(subscribeSubmitElem).borderTopRightRadius, getComputedStyle(subscribeSubmitElem).borderRightStyle, getComputedStyle(subscribeSubmitElem).borderRightColor, getComputedStyle(subscribeSubmitElem).borderBottomWidth, getComputedStyle(subscribeSubmitElem).borderBottomRightRadius, getComputedStyle(subscribeSubmitElem).borderBottomStyle, getComputedStyle(subscribeSubmitElem).borderBottomColor, getComputedStyle(subscribeSubmitElem).borderLeftWidth, getComputedStyle(subscribeSubmitElem).borderBottomLeftRadius, getComputedStyle(subscribeSubmitElem).borderLeftStyle, getComputedStyle(subscribeSubmitElem).borderLeftColor);
    deliveryForm.className = 'subscribeForm delivery';
    deliveryForm.enctype = 'multipart/form-data';
    deliveryForm.action = formAction.value;
    deliveryForm.method = formMethod.value;
    formCodeWrapperElem.innerHTML = '';
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'hidden') {
        deliveryForm.innerHTML += inputs[i].outerHTML;
      }
    }
    formCodeWrapperElem.append(deliveryForm);
    if (nameDisabled.checked == false) {
      deliveryInputName = document.createElement('input');
      deliveryInputName.className = 'subscribeInput name';
      deliveryInputName.name = deliveryFieldName.value;
      deliveryInputName.type = 'text';
      deliveryInputName.placeholder = nameFieldEl.getElementsByClassName('fieldPlaceholder')[0].value;
      if (nameRequire.checked == true) {
        deliveryInputName.required = true;
      }
      deliveryForm.append(deliveryInputName);
    }
    deliveryInputEmail = document.createElement('input');
    deliveryInputEmail.className = 'subscribeInput email';
    deliveryInputEmail.name = deliveryFieldEmail.value;
    deliveryInputEmail.type = 'email';
    deliveryInputEmail.placeholder = emailFieldEl.getElementsByClassName('fieldPlaceholder')[0].value;
    deliveryInputEmail.required = true;
    deliveryForm.append(deliveryInputEmail);
    for (var _i3 = 0; _i3 < extraFields.length; _i3++) {
      var input = document.createElement('input'),
        extraFieldRequired = extraFields[_i3].getElementsByClassName('extraFieldRequired')[0].checked;
      input.className = 'subscribeInput extra';
      input.type = 'text';
      input.name = extraFields[_i3].getElementsByClassName('fieldNameSelect')[0].value;
      input.placeholder = extraFields[_i3].getElementsByClassName('fieldPlaceholder')[0].value;
      if (extraFieldRequired) {
        input.required = true;
      }
      deliveryForm.append(input);
    }
    deliverySubmit = document.createElement('button');
    deliverySubmit.className = 'subscribeSubmit';
    deliverySubmit.type = 'submit';
    deliverySubmit.innerHTML = submitEditor.value;
    deliveryForm.append(deliverySubmit);
    deliverySubmit.onclick = function () {
      return false;
    };
    currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
    allInputs = currentSubscribe.getElementsByTagName('input');
    subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
    subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
    rememberStyle(allInputs, subscribeSubmitElem, submitStyles, inputStyles);
    Object(_subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    Object(_subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
    Object(_subscribeModule_js__WEBPACK_IMPORTED_MODULE_3__["addDragAndDropToSubscribeForm"])(id);
    Object(_subscribeModule_js__WEBPACK_IMPORTED_MODULE_3__["addFunctionalityToSubscribeElement"])(id);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_2__["makePreview"])();
  };

  // Добавление поля

  newField.onclick = function () {
    var extraFieldEl = document.createElement('div');
    extraFields = inputsInfoEl.getElementsByClassName('extraField');
    extraFieldCounter = extraFields.length + 1;
    extraFieldEl.innerHTML = '<div class="extraField"><br>ДОПОЛНИТЕЛЬНОЕ ПОЛЕ ' + extraFieldCounter + '<br>' + '<div class="submitValue">' + '<input class="fieldPlaceholder" type="text" placeholder="Введите текст поля"><span class="deleteField">X</span>' + '</div><br><br>' + '<select class="fieldNameSelect"></select><br>' + '<input class="extraFieldRequired" type="checkbox">&nbsp; required<br><br>' + '</div>';
    inputsInfoEl.append(extraFieldEl);
    var deleteFieldEl = extraFieldEl.getElementsByClassName('deleteField')[0];
    deleteFieldEl.onclick = function () {
      extraFieldEl.remove();
    };
    changeInputsInfo();
    extraFieldCounter++;
  };

  //Очистка поля от рассылки

  deliveryCodeReset.onclick = function () {
    deliveryCodeAreaEl.value = '';
  };
  function changeInputsInfo() {
    var selectValues = [];
    deliveryCodeEl.innerHTML = deliveryCodeArea.value;
    if (deliveryCodeEl.getElementsByTagName('form')[0]) {
      var deliveryForm = deliveryCodeEl.getElementsByTagName('form')[0],
        deliveryInputs = deliveryForm.getElementsByTagName('input');
      for (var i = 0; i < selectInputsNames.length; i++) {
        selectValues.push(selectInputsNames[i].value);
        selectInputsNames[i].innerHTML = '';
      }
      for (var _i4 = 0; _i4 < deliveryInputs.length; _i4++) {
        if (deliveryInputs[_i4].name && deliveryInputs[_i4].type != 'submit') {
          for (var j = 0; j < selectInputsNames.length; j++) {
            selectInputsNames[j].innerHTML += '<option value="' + deliveryInputs[_i4].name + '">' + deliveryInputs[_i4].name + '</option>';
            if (selectValues[j] != '') {
              selectInputsNames[j].value = selectValues[j];
            }
          }
        }
      }
      for (var _i5 = 0; _i5 < deliveryInputs.length; _i5++) {
        if (deliveryInputs[_i5].name.indexOf('name') != -1) {
          deliveryFieldName.value = deliveryInputs[_i5].name;
        } else if (deliveryInputs[_i5].name.indexOf('email') != -1) {
          deliveryFieldEmail.value = deliveryInputs[_i5].name;
        }
      }
      formMethod.value = deliveryForm.method;
      formAction.value = deliveryForm.action;
    }
  }
  function rememberStyle(inputs, submit, submitStyles, inputStyles) {
    submit.style = '';
    if (subscribeSubmitBold.checked == true) {
      submit.style.fontWeight = '900';
    } else {
      submit.style.fontWeight = 'normal';
    }
    submit.style.fontFamily = subscribeSubmitFontFamilySelect.value;
    submit.style.fontSize = $('#subscribeSubmit-font-size-value').val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem';
    submit.style.color = submitStyles[1];
    submit.style.background = submitStyles[2];
    submit.style.borderTopWidth = submitStyles[3];
    submit.style.borderTopLeftRadius = submitStyles[4];
    submit.style.borderTopStyle = submitStyles[5];
    submit.style.borderTopColor = submitStyles[6];
    submit.style.borderRightWidth = submitStyles[7];
    submit.style.borderTopRightRadius = submitStyles[8];
    submit.style.borderRightStyle = submitStyles[9];
    submit.style.borderRightColor = submitStyles[10];
    submit.style.borderBottomWidth = submitStyles[11];
    submit.style.borderBottomRightRadius = submitStyles[12];
    submit.style.borderBottomStyle = submitStyles[13];
    submit.style.borderBottomColor = submitStyles[14];
    submit.style.borderLeftWidth = submitStyles[15];
    submit.style.borderBottomLeftRadius = submitStyles[16];
    submit.style.borderLeftStyle = submitStyles[17];
    submit.style.borderLeftColor = submitStyles[18];
    if (subscribeInputAutoHeight.checked == true) {
      submit.style.height = 'auto';
    } else {
      submit.style.height = $('#subscribeSubmit-height-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
    }
    if (subscribeSubmitTextShadowRadioOn.checked == true) {
      var hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
      var vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
      var blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
      var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_2__["hexToRGB"])($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
      var prpts = hv + " " + vv + " " + blr + " " + clr;
      submit.style.textShadow = prpts;
    }
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type != 'submit' && inputs[i].type != 'hidden') {
        inputs[i].style = '';
        if (subscribeInputBold.checked == true) {
          inputs[i].style.fontWeight = '900';
        } else {
          inputs[i].style.fontWeight = 'normal';
        }
        inputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
        inputs[i].style.fontSize = $('#subscribeInput-font-size-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
        if (inputStyles != '') {
          inputs[i].style.color = inputStyles[1];
          inputs[i].style.background = inputStyles[2];
          inputs[i].style.borderTopWidth = inputStyles[3];
          inputs[i].style.borderTopLeftRadius = inputStyles[4];
          inputs[i].style.borderTopStyle = inputStyles[5];
          inputs[i].style.borderTopColor = inputStyles[6];
          inputs[i].style.borderRightWidth = inputStyles[7];
          inputs[i].style.borderTopRightRadius = inputStyles[8];
          inputs[i].style.borderRightStyle = inputStyles[9];
          inputs[i].style.borderRightColor = inputStyles[10];
          inputs[i].style.borderBottomWidth = inputStyles[11];
          inputs[i].style.borderBottomRightRadius = inputStyles[12];
          inputs[i].style.borderBottomStyle = inputStyles[13];
          inputs[i].style.borderBottomColor = inputStyles[14];
          inputs[i].style.borderLeftWidth = inputStyles[15];
          inputs[i].style.borderBottomLeftRadius = inputStyles[16];
          inputs[i].style.borderLeftStyle = inputStyles[17];
          inputs[i].style.borderLeftColor = inputStyles[18];
        }
        if (subscribeInputAutoHeight.checked == true) {
          inputs[i].style.height = 'auto';
        } else {
          inputs[i].style.height = $('#subscribeInput-height-value').val() / parseFloat(getComputedStyle(document.documentElement).fontSize) + 'rem';
        }
        if (subscribeInputTextShadowRadioOn.checked == true) {
          var _hv = $('#subscribe-text-shadow-horizontal-value').val() + 'px';
          var _vv = $('#subscribe-text-shadow-vertical-value').val() + 'px';
          var _blr = $('#subscribe-text-shadow-blur-value').val() + 'px';
          var _clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_2__["hexToRGB"])($('#subscribe-text-shadow-color-value').val(), $('#subscribe-text-shadow-opacity-value').val() / 100);
          var _prpts = _hv + " " + _vv + " " + _blr + " " + _clr;
          inputs[i].style.textShadow = _prpts;
        }
      }
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeDelivery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/subscribe/subscribeInputsSettings.js":
/*!*********************************************************************!*\
  !*** ./src/components/modules/subscribe/subscribeInputsSettings.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");

var subscribeBlockElem = null;
var subscribeWrapperElem = null;
var currentSubscribe = null;
var subscribeSubmitElem = null;
var subscribeInputs = null;
var allInputs = null;
function includeSubscribeInputsSettings(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-inputs-settings', 'subscribeInputsIndicator');

  // Расстояние между полями

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('show-subscribe-input-space-settings', 'subscribeInputSpaceIndicator');
  $('#subscribe-input-space-value').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).marginBottom));
  $('#subscribe-input-space-value, #subscribe-input-space-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('margin-bottom', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    }
    if ($(this).attr('id') == "subscribe-input-space-value") {
      $('#subscribe-input-space-value-range').val($(this).val());
    } else {
      $('#subscribe-input-space-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки тени submit*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeInput-text-shadow-settings', 'subscribeInputTextShadowIndicator');
  document.getElementById('subscribeInputTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'block';
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('subscribeInputTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribeInput-text-shadow').style.display = 'none';
    $(subscribeInputElem).css('text-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#subscribeInput-text-shadow-horizontal-value, #subscribeInput-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-horizontal-value") {
      $('#subscribeInput-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-text-shadow-vertical-value, #subscribeInput-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-vertical-value") {
      $('#subscribeInput-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-text-shadow-blur-value, #subscribeInput-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-text-shadow-color-value').val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-blur-value") {
      $('#subscribeInput-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-text-shadow-opacity-value, #subscribeInput-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribeInput-text-shadow-opacity-value") {
      $('#subscribeInput-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribeInput-text-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribeInput-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribeInput-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribeInput-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#subscribeInput-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('text-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  /*Конец настроек тени submit*/

  //Выбор шрифта полей
  subscribeInputFontFamilySelect.value = getComputedStyle(subscribeInputs[0]).fontFamily;
  subscribeInputFontFamilySelect.onchange = function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      subscribeInputs[i].style.fontFamily = subscribeInputFontFamilySelect.value;
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  if (getComputedStyle(subscribeInputs[0]).fontWeight == '900') {
    subscribeInputBold.checked = true;
  } else {
    subscribeInputBold.checked = false;
  }
  subscribeInputBold.onclick = function () {
    if (subscribeInputBold.checked) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.fontWeight = '900';
      }
    } else {
      for (var _i = 0; _i < subscribeInputs.length; _i++) {
        subscribeInputs[_i].style.fontWeight = 'normal';
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-show-inputs-font-settings', 'subscribeInputsFontIndicator');
  $('#subscribeInput-font-size-value').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value-range').val(parseInt(getComputedStyle(subscribeInputs[0]).fontSize));
  $('#subscribeInput-font-size-value, #subscribeInput-font-size-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    }
    if ($(this).attr('id') == "subscribeInput-font-size-value") {
      $('#subscribeInput-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeInput-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет текста у полей
  $('#subscribeInput-color-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeInput-background-types', 'subscribeInputsBackgroundIndicator');
  subscribeInputBackgroundRadioColor.onclick = function () {
    subscribeInputBackgroundGradient.style.display = 'none';
    subscribeInputBackgroundColor.style.display = 'block';
  };
  subscribeInputBackgroundRadioGradient.onclick = function () {
    subscribeInputBackgroundColor.style.display = 'none';
    subscribeInputBackgroundGradient.style.display = 'block';
  };
  $('#subscribeInput-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity);
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-gradient-color-1').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-gradient-color-2').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($('#subscribeInput-gradient-angle').val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $(this).val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-gradient-angle').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeInput-gradient-color-1').val() + ', ' + $('#subscribeInput-gradient-color-2').val() + ')');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeInput-main-color').val(), opacity / 100);
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('background', color);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Высота полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeInput-height', 'subscribeInputsSizeIndicator');
  if (getComputedStyle(subscribeInputs[0]).height == 'auto') {
    subscribeInputAutoHeight.checked = true;
  } else {
    subscribeInputAutoHeight.checked = false;
  }
  $('#subscribeInput-height-value').val(parseInt($(subscribeInputs[0]).css('height')));
  $('#subscribeInput-height-value-range').val(parseInt($(subscribeInputs[0]).css('height')));
  subscribeInputAutoHeight.onclick = function () {
    if (subscribeInputAutoHeight.checked == true) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.height = 'auto';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#subscribeInput-height-value, #subscribeInput-height-value-range').on('input', function () {
    if (subscribeInputAutoHeight.checked == false) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
      if ($(this).attr('id') == "subscribeInput-height-value") {
        $('#subscribeInput-height-value-range').val($(this).val());
      } else {
        $('#subscribeInput-height-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Ширина полей
  if (getComputedStyle(subscribeInputs[0]).width == '100%') {
    subscribeInputAutoWidth.checked = true;
  } else {
    subscribeInputAutoWidth.checked = false;
  }
  $('#subscribeInput-width-value').val(parseInt($(subscribeInputs[0]).css('width')));
  $('#subscribeInput-width-value-range').val(parseInt($(subscribeInputs[0]).css('width')));
  subscribeInputAutoWidth.onclick = function () {
    if (subscribeInputAutoWidth.checked == true) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        subscribeInputs[i].style.width = '100%';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#subscribeInput-width-value, #subscribeInput-width-value-range').on('input', function () {
    if (subscribeInputAutoWidth.checked == false) {
      for (var i = 0; i < subscribeInputs.length; i++) {
        $(subscribeInputs[i]).css('width', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      }
      if ($(this).attr('id') == "subscribeInput-width-value") {
        $('#subscribeInput-width-value-range').val($(this).val());
      } else {
        $('#subscribeInput-width-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ полей

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-show-inputs-border-settings', 'subscribeInputsBorderIndicator');
  subscribeInputBorderRadioEvery.onclick = function () {
    subscribeInputBorderAll.style.display = 'none';
    subscribeInputBorderEvery.style.display = 'block';
  };
  subscribeInputBorderRadioAll.onclick = function () {
    subscribeInputBorderAll.style.display = 'block';
    subscribeInputBorderEvery.style.display = 'none';
  };
  $('#subscribeInput-border-value').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-value-range').val(parseInt($(subscribeInputs[0]).css('border-width')));
  $('#subscribeInput-border-radius').val(parseInt($(subscribeInputs[0]).css('border-radius')));
  $('#subscribeInput-border-radius-range').val(parseInt($(subscribeInputs[0]).css('border-radius')));
  $('#subscribeInput-border-value, #subscribeInput-border-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-value") {
      $('#subscribeInput-border-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-radius, #subscribeInput-border-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-radius") {
      $('#subscribeInput-border-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-color-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы полей*/

  $('#subscribeInput-border-top-value').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-top-value-range').val(parseInt($(subscribeInputs[0]).css('border-top-width')));
  $('#subscribeInput-border-left-top-radius').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));
  $('#subscribeInput-border-left-top-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-left-radius')));
  $('#subscribeInput-border-top-value, #subscribeInput-border-top-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-top-value") {
      $('#subscribeInput-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-left-top-radius, #subscribeInput-border-left-top-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-left-top-radius") {
      $('#subscribeInput-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-top-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-top-style-value').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-top-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы полей*/
  $('#subscribeInput-border-right-value').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-value-range').val(parseInt($(subscribeInputs[0]).css('border-right-width')));
  $('#subscribeInput-border-right-radius').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));
  $('#subscribeInput-border-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-top-right-radius')));
  $('#subscribeInput-border-right-value, #subscribeInput-border-right-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-right-value") {
      $('#subscribeInput-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-right-radius, #subscribeInput-border-right-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-top-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-right-radius") {
      $('#subscribeInput-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-right-radiuse').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-right-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-right-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-right-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы полей*/
  $('#subscribeInput-border-bottom-value').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-value-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-width')));
  $('#subscribeInput-border-bottom-right-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));
  $('#subscribeInput-border-bottom-right-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-right-radius')));
  $('#subscribeInput-border-bottom-value, #subscribeInput-border-bottom-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-value") {
      $('#subscribeInput-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-bottom-right-radius, #subscribeInput-border-bottom-right-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-right-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-right-radius") {
      $('#subscribeInput-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-right-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-bottom-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-bottom-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы полей*/
  $('#subscribeInput-border-left-value').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-left-value-range').val(parseInt($(subscribeInputs[0]).css('border-left-width')));
  $('#subscribeInput-border-bottom-left-radius').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));
  $('#subscribeInput-border-bottom-left-radius-range').val(parseInt($(subscribeInputs[0]).css('border-bottom-left-radius')));
  $('#subscribeInput-border-left-value, #subscribeInput-border-left-value-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-width', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-left-value") {
      $('#subscribeInput-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeInput-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-bottom-left-radius, #subscribeInput-border-bottom-left-radius-range').on('input', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-bottom-left-radius', $(this).val() + 'px');
    }
    if ($(this).attr('id') == "subscribeInput-border-bottom-left-radius") {
      $('#subscribeInput-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeInput-border-bottom-left-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-left-style').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-style', $(this).find('option:selected').val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeInput-border-left-color').on('change', function () {
    for (var i = 0; i < subscribeInputs.length; i++) {
      $(subscribeInputs[i]).css('border-left-color', $(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
}
/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeInputsSettings);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/subscribe/subscribeModule.js":
/*!*************************************************************!*\
  !*** ./src/components/modules/subscribe/subscribeModule.js ***!
  \*************************************************************/
/*! exports provided: dragSubscribe, addDragAndDropToSubscribeForm, addFunctionalityToSubscribeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragSubscribe", function() { return dragSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDragAndDropToSubscribeForm", function() { return addDragAndDropToSubscribeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToSubscribeElement", function() { return addFunctionalityToSubscribeElement; });
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.css */ "./src/components/modules/subscribe/subscribe.css");
/* harmony import */ var _subscribe_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subscribe_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragSubscribe(e) {
  var subscribeBlockId = 'subscribe' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + subscribeBlockId + '" class="subscribeBlock">' + '<div class="subscribeWrapper" style="width: 300px;">' + '<div class="image_settings subscribe_settings">' + '<span class="glyphicon glyphicon glyphicon-move"></span>' + '<span class="glyphicon glyphicon-cog subscribeSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copySubscribe"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="subscribe">' + '<div class="formCodeWrapper">' + '<form class="subscribeForm" method="POST" enctype="multipart/form-data">' + '<input autocomplete="off" class="subscribeInput name" name="name" type="text" placeholder="Ваше имя">' + '<input autocomplete="off" class="subscribeInput email" name="email" type="email" placeholder="Ваш емейл">' + '<div class="submitWrapper">' + '<button class="subscribeSubmit" type="submit">ПОДПИСАТЬСЯ</button>' + '</div>' + '</form>' + '</div>' + '<div class="deliveryCode"></div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addDragAndDropToSubscribeForm(subscribeBlockId);
  addFunctionalityToSubscribeElement(subscribeBlockId);
}
function addDragAndDropToSubscribeForm(id) {
  var subscribeBlockElem = document.getElementById(id);
  var currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  var inputs = document.getElementById(id).getElementsByClassName('subscribeInput');
  var subscribeId = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  currentSubscribe.id = subscribeId;
  Sortable.create($("#" + subscribeId + "").get(0), {
    animation: 150,
    swapThreshold: 1,
    emptyInsertThreshold: 1,
    ghostClass: 'blue-background-class',
    draggable: ".subscribeInput",
    onEnd: function onEnd(e) {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].blur();
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    }
  });
}
function addFunctionalityToSubscribeElement(id) {
  var subscribeBlockElem = document.getElementById(id);
  var subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  var subscribeElem = subscribeBlockElem.getElementsByClassName('subscribe')[0];
  var imgSettings = subscribeBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = subscribeBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = subscribeBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = subscribeBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowLeftElem = subscribeBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowCenterElem = subscribeBlockElem.getElementsByClassName('glyphicon')[3];
  var arrowRightElem = subscribeBlockElem.getElementsByClassName('glyphicon')[4];
  var imgCopyElem = subscribeBlockElem.getElementsByClassName('glyphicon')[5];
  var imgDeleteElem = subscribeBlockElem.getElementsByClassName('glyphicon')[6];
  var subscribeSubmitElem = subscribeBlockElem.getElementsByClassName('subscribeSubmit')[0];
  var subscribeInputs = subscribeBlockElem.getElementsByClassName('subscribeInput');

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    subscribeWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    subscribeWrapperElem.style.border = '2px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeXY = function resizeXY() {
    if (getComputedStyle(subscribeBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(subscribeBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(subscribeBlockElem).justifyContent == 'flex-end') {
      subscribeWrapperElem.style.width = subscribeElem.getBoundingClientRect().left + subscribeElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      subscribeWrapperElem.style.width = event.clientX - subscribeElem.getBoundingClientRect().left + 'px';
    }
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(subscribeBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(subscribeBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(subscribeBlockElem).justifyContent == 'flex-end') {
      subscribeWrapperElem.style.width = subscribeElem.getBoundingClientRect().left + subscribeElem.getBoundingClientRect().width - event.clientX + 'px';
    } else {
      subscribeWrapperElem.style.width = event.clientX - subscribeElem.getBoundingClientRect().left + 'px';
    }
  };

  //Обработчики событий
  subscribeWrapperElem.addEventListener('mouseover', imgHover);
  subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    subscribeWrapperElem.removeEventListener('mouseover', imgHover);
    subscribeWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (event.clientX < subscribeWrapperElem.getBoundingClientRect().left || event.clientX > subscribeWrapperElem.getBoundingClientRect().left + subscribeWrapperElem.getBoundingClientRect().width || event.clientY < subscribeWrapperElem.getBoundingClientRect().top || event.clientY > subscribeWrapperElem.getBoundingClientRect().top + subscribeWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      subscribeWrapperElem.addEventListener('mouseover', imgHover);
      subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    subscribeWrapperElem.removeEventListener('mouseover', imgHover);
    subscribeWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < subscribeWrapperElem.getBoundingClientRect().left || event.clientX > subscribeWrapperElem.getBoundingClientRect().left + subscribeWrapperElem.getBoundingClientRect().width || event.clientY < subscribeWrapperElem.getBoundingClientRect().top || event.clientY > subscribeWrapperElem.getBoundingClientRect().top + subscribeWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      subscribeWrapperElem.addEventListener('mouseover', imgHover);
      subscribeWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  for (var i = 0; i < subscribeInputs.length; i++) {
    subscribeInputs[i].onfocus = function (e) {
      return false;
    };
    subscribeInputs[i].onkeydown = function (e) {
      return false;
    };
  }
  subscribeSubmitElem.onclick = function () {
    return false;
  };
  arrowLeftElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'start';
    subscribeBlockElem.style["-ms-flex-pack"] = 'start';
    subscribeBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'center';
    subscribeBlockElem.style["-ms-flex-pack"] = 'center';
    subscribeBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    subscribeBlockElem.style["-webkit-box-pack"] = 'end';
    subscribeBlockElem.style["-ms-flex-pack"] = 'end';
    subscribeBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(subscribeBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/subscribe/subscribeSettings.js":
/*!***************************************************************!*\
  !*** ./src/components/modules/subscribe/subscribeSettings.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeInputsSettings.js */ "./src/components/modules/subscribe/subscribeInputsSettings.js");
/* harmony import */ var _subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeSumbitSettings.js */ "./src/components/modules/subscribe/subscribeSumbitSettings.js");
/* harmony import */ var _subscribeDelivery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeDelivery.js */ "./src/components/modules/subscribe/subscribeDelivery.js");
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _subscribeModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribeModule.js */ "./src/components/modules/subscribe/subscribeModule.js");





$('#mainArea').on('click', '.copySubscribe', function () {
  var subscribeBlockId = $(this).parents('.subscribeBlock').attr('id');
  var subscribeBlockElem = document.getElementById(subscribeBlockId);
  var clonId = 'subscribe' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["getRandom"])();
  $(subscribeBlockElem).clone(true).attr('id', clonId).insertAfter(subscribeBlockElem);
  Object(_subscribeModule_js__WEBPACK_IMPORTED_MODULE_4__["addFunctionalityToSubscribeElement"])(clonId);
  Object(_subscribeModule_js__WEBPACK_IMPORTED_MODULE_4__["addDragAndDropToSubscribeForm"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
});
var ths = null;
var subscribeBlockElem = null;
var subscribeWrapperElem = null;
var formCodeWrapperElem = null;
var currentSubscribe = null;
var subscribeSubmitElem = null;
var subscribeInputs = null;
var allInputs = null;
$('#mainArea').on('click', '.subscribeSet', function (e) {
  ths = $(this).parents('.subscribeBlock');
  subscribeBlockElem = document.getElementById($(ths).attr('id'));
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  formCodeWrapperElem = subscribeBlockElem.getElementsByClassName('formCodeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subscribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  var testSubscribeElem = document.getElementById('testSubscribe');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#subscribe-border-style').off();
  $('#subscribe-border-left-style').off();
  $('#subscribe-border-right-style').off();
  $('#subscribe-border-top-style-value').off();
  $('#subscribe-border-bottom-style').off();
  $('#subscribe-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#subscribe-timeout-hour-value').val(h);
    $('#subscribe-timeout-minute-value').val(m);
    $('#subscribe-timeout-second-value').val(s);
    $('#subscribe-display-none-value').prop('checked', true);
  } else {
    $('#subscribe-timeout-hour-value').val(0);
    $('#subscribe-timeout-minute-value').val(0);
    $('#subscribe-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#list-settings').hide();
  $('#line-settings').hide();
  $('#subscribe-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  // Закрыть панель

  document.addEventListener('mousedown', _global_global_js__WEBPACK_IMPORTED_MODULE_3__["closeRightPanel"]);

  //Вставка кода

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('show-subscribe-code-settings', 'subscribeCodeIndicator');
  Object(_subscribeDelivery_js__WEBPACK_IMPORTED_MODULE_2__["default"])(subscribeBlockElem.id);

  //Настройки отступов формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('subscribeMarginEvery', 'subscribeMarginGroupIndicator');
  $('#subscribe-margin-top-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-top-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginTop));
  $('#subscribe-margin-right-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-right-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginRight));
  $('#subscribe-margin-bottom-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginBottom));
  $('#subscribe-margin-left-value').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));
  $('#subscribe-margin-left-value-range').val(parseInt(getComputedStyle(subscribeBlockElem).marginLeft));
  $('#subscribe-margin-top-value, #subscribe-margin-top-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribe-margin-top-value") {
      $('#subscribe-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-margin-right-value, #subscribe-margin-right-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribe-margin-right-value") {
      $('#subscribe-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-margin-bottom-value, #subscribe-margin-bottom-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribe-margin-bottom-value") {
      $('#subscribe-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-margin-left-value, #subscribe-margin-left-value-range').on('input', function () {
    $(subscribeBlockElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeBlockElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribe-margin-left-value") {
      $('#subscribe-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribe-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });

  //Вертикальное выравнивание формы

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('subscribe-show-vertical-settings', 'subscribeVerticalIndicator');
  if (getComputedStyle(subscribeBlockElem).marginTop == 'auto') {
    subscribeMarginBottom.checked = true;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginBottom == 'auto') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = true;
    subscribeMarginCenter.checked = false;
  } else if (getComputedStyle(subscribeBlockElem).marginTop == '0px' && getComputedStyle(subscribeBlockElem).marginBottom == '0px') {
    subscribeMarginBottom.checked = false;
    subscribeMarginTop.checked = false;
    subscribeMarginCenter.checked = true;
  }
  subscribeMarginTop.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  };
  subscribeMarginCenter.onclick = function () {
    subscribeBlockElem.style.marginTop = '0px';
    subscribeBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  };
  subscribeMarginBottom.onclick = function () {
    subscribeBlockElem.style.marginTop = 'auto';
    subscribeBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  };

  /*Настройки теней*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('subscribe-shadow-settings', 'subscribeShadowIndicator');
  document.getElementById('subscribeShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'block';
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  };
  document.getElementById('subscribeShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-shadow').style.display = 'none';
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', 'none');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  };
  $('#subscribe-shadow-horizontal-value, #subscribe-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-horizontal-value") {
      $('#subscribe-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-vertical-value, #subscribe-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-vertical-value") {
      $('#subscribe-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-blur-value, #subscribe-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-blur-value") {
      $('#subscribe-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-spread-value, #subscribe-shadow-spread-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-spread-value") {
      $('#subscribe-shadow-spread-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-opacity-value, #subscribe-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "subscribe-shadow-opacity-value") {
      $('#subscribe-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($(this).val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $('#subscribe-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-shadow-inset-value').on('change', function () {
    var hv = $('#subscribe-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-shadow-blur-value').val() + 'px';
    var sprd = $('#subscribe-shadow-spread-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"])($('#subscribe-shadow-color-value').val(), $('#subscribe-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    for (var i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  /*Конец настроек теней*/

  Object(_subscribeInputsSettings_js__WEBPACK_IMPORTED_MODULE_0__["default"])($(ths).attr('id'));
  Object(_subscribeSumbitSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"])($(ths).attr('id'));

  /*Настройка анимации*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('subscribe-animation', 'subscribeAnimationIndicator');
  $('#subscribe-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(currentSubscribe).css('animation-name', $(this).val());
      $(currentSubscribe).css('animation-delay', $('#subscribe-animation-delay-value').val() + 's');
      $(currentSubscribe).css('animation-duration', $('#subscribe-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-animation-delay-value, #subscribe-animation-delay-value-range').on('input', function () {
    $(currentSubscribe).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "subscribe-animation-delay-value") {
      $('#subscribe-animation-delay-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });
  $('#subscribe-animation-duration-value, #subscribe-animation-duration-value-range').on('input', function () {
    $(currentSubscribe).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "subscribe-animation-duration-value") {
      $('#subscribe-animation-duration-value-range').val($(this).val());
    } else {
      $('#subscribe-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });

  /*Конец настроек анимации*/
  /*Блок таймаута*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["showHideSettings"])('subscribe-show-timeout-settings', 'subscribeTimeoutIndicator');

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('subscribe-display-none-value').checked = true;
  } else {
    document.getElementById('subscribe-display-none-value').checked = false;
  }
  $('#subscribe-display-none-value, #subscribe-timeout-hour-value, #subscribe-timeout-hour-value-range, #subscribe-timeout-minute-value, #subscribe-timeout-minute-value-range, #subscribe-timeout-second-value, #subscribe-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#subscribe-timeout-hour-value').val() * 3600;
    var minute = $('#subscribe-timeout-minute-value').val() * 60;
    var second = parseInt($('#subscribe-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('subscribe-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" class="code" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "subscribe-timeout-hour-value") {
      $('#subscribe-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-hour-value-range") {
      $('#subscribe-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value") {
      $('#subscribe-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-minute-value-range") {
      $('#subscribe-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value") {
      $('#subscribe-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "subscribe-timeout-second-value-range") {
      $('#subscribe-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_3__["makePreview"])();
  });

  /*Конец блока таймаута*/
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/subscribe/subscribeSumbitSettings.js":
/*!*********************************************************************!*\
  !*** ./src/components/modules/subscribe/subscribeSumbitSettings.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");

var subscribeBlockElem = null;
var subscribeWrapperElem = null;
var currentSubscribe = null;
var subscribeSubmitElem = null;
var subscribeInputs = null;
var allInputs = null;
var submitWrapperEl = null;
function includeSubscribeSubmitSettings(id) {
  'use strict';

  subscribeBlockElem = document.getElementById(id);
  subscribeWrapperElem = subscribeBlockElem.getElementsByClassName('subscribeWrapper')[0];
  currentSubscribe = subscribeBlockElem.getElementsByTagName('form')[0];
  subscribeSubmitElem = currentSubscribe.getElementsByClassName('subscribeSubmit')[0];
  subscribeInputs = currentSubscribe.getElementsByClassName('subsribeInput');
  allInputs = currentSubscribe.getElementsByTagName('input');
  submitWrapperEl = currentSubscribe.getElementsByClassName('submitWrapper')[0];
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-submit-settings', 'subscribeSubmitIndicator');

  //Редактирование текста кнопки

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-submit-editor-settings', 'subscribeSubmitEditorIndicator');
  submitEditor.value = subscribeSubmitElem.innerHTML;
  submitEditor.oninput = function () {
    subscribeSubmitElem.innerHTML = submitEditor.value;
    subscribeSubmitElem.style.height = 'auto';
  };

  /*Настройки тени submit*/

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-submit-text-shadow-settings', 'subscribeSubmitTextShadowIndicator');
  document.getElementById('subscribeSubmitTextShadowRadioOn').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'block';
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('subscribeSubmitTextShadowRadioOff').onclick = function () {
    document.getElementById('subscribe-submit-text-shadow').style.display = 'none';
    $(subscribeSubmitElem).css('text-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#subscribe-submit-text-shadow-horizontal-value, #subscribe-submit-text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-horizontal-value") {
      $('#subscribe-submit-text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribe-submit-text-shadow-vertical-value, #subscribe-submit-text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-vertical-value") {
      $('#subscribe-submit-text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribe-submit-text-shadow-blur-value, #subscribe-submit-text-shadow-blur-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribe-submit-text-shadow-color-value').val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    //    for (let i = 0; i < allInputs.length; i++) {
    //      $(subscribeSubmitElem).css('text-shadow', prpts);
    //    }
    if ($(this).attr('id') == "subscribe-submit-text-shadow-blur-value") {
      $('#subscribe-submit-text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribe-submit-text-shadow-opacity-value, #subscribe-submit-text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribe-submit-text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "subscribe-submit-text-shadow-opacity-value") {
      $('#subscribe-submit-text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#subscribe-submit-text-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribe-submit-text-shadow-color-value').on('change', function () {
    var hv = $('#subscribe-submit-text-shadow-horizontal-value').val() + 'px';
    var vv = $('#subscribe-submit-text-shadow-vertical-value').val() + 'px';
    var blr = $('#subscribe-submit-text-shadow-blur-value').val() + 'px';
    var clr = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), $('#subscribe-submit-text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(subscribeSubmitElem).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  /*Конец настроек тени submit*/

  //Настройки отступов у submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeSubmitMarginEvery', 'subscribeSubmitMarginIndicator');
  $('#subscribeSubmit-margin-top-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-top-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginTop));
  $('#subscribeSubmit-margin-right-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-right-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginRight));
  $('#subscribeSubmit-margin-bottom-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-bottom-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginBottom));
  $('#subscribeSubmit-margin-left-value').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));
  $('#subscribeSubmit-margin-left-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).marginLeft));
  $('#subscribeSubmit-margin-top-value, #subscribeSubmit-margin-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-top', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-top-value") {
      $('#subscribeSubmit-margin-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-margin-right-value, #subscribeSubmit-margin-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-right', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-right-value") {
      $('#subscribeSubmit-margin-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-margin-bottom-value, #subscribeSubmit-margin-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-bottom', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-bottom-value") {
      $('#subscribeSubmit-margin-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-margin-left-value, #subscribeSubmit-margin-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('margin-left', '');
    var val = $(this).val();
    $(subscribeSubmitElem).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "subscribeSubmit-margin-left-value") {
      $('#subscribeSubmit-margin-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Выбор шрифта

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-show-submit-font-settings', 'subscribeSubmitFontIndicator');
  subscribeSubmitFontFamilySelect.value = getComputedStyle(subscribeSubmitElem).fontFamily;
  subscribeSubmitFontFamilySelect.onchange = function () {
    subscribeSubmitElem.style.fontFamily = subscribeSubmitFontFamilySelect.value;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  if (getComputedStyle(subscribeSubmitElem).fontWeight == '900') {
    subscribeSubmitBold.checked = true;
  } else {
    subscribeSubmitBold.checked = false;
  }
  subscribeSubmitBold.onclick = function () {
    if (subscribeSubmitBold.checked) {
      subscribeSubmitElem.style.fontWeight = '900';
    } else {
      subscribeSubmitElem.style.fontWeight = 'normal';
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта submit
  $('#subscribeSubmit-font-size-value').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value-range').val(parseInt(getComputedStyle(subscribeSubmitElem).fontSize));
  $('#subscribeSubmit-font-size-value, #subscribeSubmit-font-size-value-range').on('input', function () {
    $(subscribeSubmitElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    if ($(this).attr('id') == "subscribeSubmit-font-size-value") {
      $('#subscribeSubmit-font-size-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет текста у submit
  $('#subscribeSubmit-color-value').on('change', function () {
    $(subscribeSubmitElem).css('color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeSubmit-background-types', 'subscribeSubmitBackgroundIndicator');
  subscribeSubmitBackgroundRadioColor.onclick = function () {
    subscribeSubmitBackgroundGradient.style.display = 'none';
    subscribeSubmitBackgroundColor.style.display = 'block';
  };
  subscribeSubmitBackgroundRadioGradient.onclick = function () {
    subscribeSubmitBackgroundColor.style.display = 'none';
    subscribeSubmitBackgroundGradient.style.display = 'block';
  };
  $('#subscribeSubmit-main-color').on('change', function () {
    var opacity = $('#page-main-color-opacity').val() / 100;
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($(this).val(), opacity);
    $(subscribeSubmitElem).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-gradient-color-1').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-gradient-color-2').on('change', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($('#subscribeSubmit-gradient-angle').val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $(this).val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-gradient-angle').on('input', function () {
    $(subscribeSubmitElem).css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#subscribeSubmit-gradient-color-1').val() + ', ' + $('#subscribeSubmit-gradient-color-2').val() + ')');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-main-color-opacity').on('input', function () {
    var opacity = $(this).val();
    var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])($('#subscribeSubmit-main-color').val(), opacity / 100);
    $(subscribeSubmitElem).css('background', color);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Высота кнопки

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribeSubmit-height', 'subscribeSubmitSizeIndicator');
  if (subscribeSubmitElem.style.height == 'auto' || subscribeSubmitElem.style.height == '') {
    subscribeSubmitAutoHeight.checked = true;
  } else {
    subscribeSubmitAutoHeight.checked = false;
  }
  $('#subscribeSubmit-height-value').val(parseInt($(subscribeSubmitElem).css('height')));
  $('#subscribeSubmit-height-value-range').val(parseInt($(subscribeSubmitElem).css('height')));
  subscribeSubmitAutoHeight.onclick = function () {
    if (subscribeSubmitAutoHeight.checked == true) {
      subscribeSubmitElem.style.height = 'auto';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#subscribeSubmit-height-value, #subscribeSubmit-height-value-range').on('input', function () {
    if (subscribeSubmitAutoHeight.checked == false) {
      $(subscribeSubmitElem).css('height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "subscribeSubmit-height-value") {
        $('#subscribeSubmit-height-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-height-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Ширина кнопки
  if (getComputedStyle(subscribeSubmitElem).width == '100%') {
    subscribeSubmitAutoWidth.checked = true;
  } else {
    subscribeSubmitAutoWidth.checked = false;
  }
  $('#subscribeSubmit-width-value').val(parseInt($(subscribeSubmitElem).css('width')));
  $('#subscribeSubmit-width-value-range').val(parseInt($(subscribeSubmitElem).css('width')));
  subscribeSubmitAutoWidth.onclick = function () {
    if (subscribeSubmitAutoWidth.checked == true) {
      subscribeSubmitElem.style.width = '100%';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
  };
  $('#subscribeSubmit-width-value, #subscribeSubmit-width-value-range').on('input', function () {
    if (subscribeSubmitAutoWidth.checked == false) {
      $(subscribeSubmitElem).css('width', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
      if ($(this).attr('id') == "subscribeSubmit-width-value") {
        $('#subscribeSubmit-width-value-range').val($(this).val());
      } else {
        $('#subscribeSubmit-width-value').val($(this).val());
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ submit

  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["showHideSettings"])('subscribe-show-submit-border-settings', 'subscribeSubmitBorderIndicator');
  subscribeSubmitBorderRadioEvery.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'none';
    subscribeSubmitBorderEvery.style.display = 'block';
  };
  subscribeSubmitBorderRadioAll.onclick = function () {
    subscribeSubmitBorderAll.style.display = 'block';
    subscribeSubmitBorderEvery.style.display = 'none';
  };
  $('#subscribeSubmit-border-value').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-value-range').val(parseInt($(subscribeSubmitElem).css('border-width')));
  $('#subscribeSubmit-border-radius').val(parseInt($(subscribeSubmitElem).css('border-radius')));
  $('#subscribeSubmit-border-radius-range').val(parseInt($(subscribeSubmitElem).css('border-radius')));
  $('#subscribeSubmit-border-value, #subscribeSubmit-border-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-value") {
      $('#subscribeSubmit-border-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-radius, #subscribeSubmit-border-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-radius") {
      $('#subscribeSubmit-border-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-style').on('change', function () {
    $(subscribeSubmitElem).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-color-value').on('change', function () {
    $(subscribeSubmitElem).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы submit*/

  $('#subscribeSubmit-border-top-value').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-top-value-range').val(parseInt($(subscribeSubmitElem).css('border-top-width')));
  $('#subscribeSubmit-border-left-top-radius').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));
  $('#subscribeSubmit-border-left-top-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-left-radius')));
  $('#subscribeSubmit-border-top-value, #subscribeSubmit-border-top-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-top-value") {
      $('#subscribeSubmit-border-top-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-left-top-radius, #subscribeSubmit-border-left-top-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-left-top-radius") {
      $('#subscribeSubmit-border-left-top-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-top-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-top-style-value').on('change', function () {
    $(subscribeSubmitElem).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-top-color').on('change', function () {
    $(subscribeSubmitElem).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы submit*/
  $('#subscribeSubmit-border-right-value').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-value-range').val(parseInt($(subscribeSubmitElem).css('border-right-width')));
  $('#subscribeSubmit-border-right-radius').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));
  $('#subscribeSubmit-border-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-top-right-radius')));
  $('#subscribeSubmit-border-right-value, #subscribeSubmit-border-right-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-right-value") {
      $('#subscribeSubmit-border-right-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-right-radius, #subscribeSubmit-border-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-top-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-right-radius") {
      $('#subscribeSubmit-border-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-right-radiuse').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-right-style').on('change', function () {
    $(subscribeSubmitElem).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-right-color').on('change', function () {
    $(subscribeSubmitElem).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы submit*/
  $('#subscribeSubmit-border-bottom-value').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-value-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-width')));
  $('#subscribeSubmit-border-bottom-right-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));
  $('#subscribeSubmit-border-bottom-right-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-right-radius')));
  $('#subscribeSubmit-border-bottom-value, #subscribeSubmit-border-bottom-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-value") {
      $('#subscribeSubmit-border-bottom-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-bottom-right-radius, #subscribeSubmit-border-bottom-right-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-right-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-right-radius") {
      $('#subscribeSubmit-border-bottom-right-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-right-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-bottom-style').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-bottom-color').on('change', function () {
    $(subscribeSubmitElem).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы submit*/
  $('#subscribeSubmit-border-left-value').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-left-value-range').val(parseInt($(subscribeSubmitElem).css('border-left-width')));
  $('#subscribeSubmit-border-bottom-left-radius').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));
  $('#subscribeSubmit-border-bottom-left-radius-range').val(parseInt($(subscribeSubmitElem).css('border-bottom-left-radius')));
  $('#subscribeSubmit-border-left-value, #subscribeSubmit-border-left-value-range').on('input', function () {
    $(subscribeSubmitElem).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-left-value") {
      $('#subscribeSubmit-border-left-value-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-bottom-left-radius, #subscribeSubmit-border-bottom-left-radius-range').on('input', function () {
    $(subscribeSubmitElem).css('border-bottom-left-radius', $(this).val() + 'px');
    if ($(this).attr('id') == "subscribeSubmit-border-bottom-left-radius") {
      $('#subscribeSubmit-border-bottom-left-radius-range').val($(this).val());
    } else {
      $('#subscribeSubmit-border-bottom-left-radius').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-left-style').on('change', function () {
    $(subscribeSubmitElem).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#subscribeSubmit-border-left-color').on('change', function () {
    $(subscribeSubmitElem).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
}
/* harmony default export */ __webpack_exports__["default"] = (includeSubscribeSubmitSettings);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/text/text.css":
/*!**********************************************!*\
  !*** ./src/components/modules/text/text.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/text/textModule.js":
/*!***************************************************!*\
  !*** ./src/components/modules/text/textModule.js ***!
  \***************************************************/
/*! exports provided: dragText, addFunctionalityToTextElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragText", function() { return dragText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToTextElement", function() { return addFunctionalityToTextElement; });
/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.css */ "./src/components/modules/text/text.css");
/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragText(e) {
  var textBlockId = 'text' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var module = '<div id="' + textBlockId + '" class="textBlock">' + '<div class="textWrapper" style="width: 100%;">' + '<div class="image_settings text_settings">' + '<span class="glyphicon glyphicon-cog textSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyText"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="text-editor">' + '<div class="text-editor-panel">' + '<span class="glyphicon glyphicon-bold bold" title="Полужирный"></span>' + '<span class="glyphicon glyphicon-italic ital" title="Курсив"></span>' + '<span class="under" title="Подчеркнутый">U</span>' + '<span class="through" title="Зачёркнутый">S</span>' + '<span class="glyphicon glyphicon-link textLink" title="Вставить ссылку"></span>' + '<span class="glyphicon glyphicon-align-left left" title="Выровнять по левому краю"></span>' + '<span class="glyphicon glyphicon-align-center center" title="Выровнять по центру"></span>' + '<span class="glyphicon glyphicon-align-justify justify" title="Выровнять текст по ширине"></span>' + '<span class="glyphicon glyphicon-align-right right" title="Выровнять по правому краю"></span>' + '</div>' + '</div>' + '<div class="text">Text example<br>Пример текста</div>' + '<div class="resizerTextXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(module);
  addFunctionalityToTextElement(textBlockId);
}
function init(iframe, content, style) {
  var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
  var iWin = isGecko ? iframe.contentWindow : iframe.window;
  var iDoc = isGecko ? iframe.contentDocument : iframe.document;
  var iHTML;
  iHTML = "<html><head>";
  iHTML = '<link href="https://fonts.googleapis.com/css?family=Montserrat:900|Roboto:900|Tangerine&amp;display=swap" rel="stylesheet">';
  iHTML += "<style>";
  iHTML += 'html{font-size: 10px;} h1{font-size: 3.2rem; font-weight: normal;} h2{font-size: 2.4rem; font-weight: normal;} h3{font-size: 2rem; font-weight: normal;} h4{font-size: 1.6rem; font-weight: normal;} h5{font-size: 1.3rem; font-weight: normal;} h6{font-size: 1.1rem; font-weight: normal;}';
  iHTML += style;
  iHTML += "</style></head>";
  iHTML += "<body>";
  iHTML += content;
  iHTML += "</body>";
  iHTML += "</html>";
  iDoc.open();
  iDoc.write(iHTML);
  iDoc.close();
  if (!iDoc.designMode) alert("Визуальный режим редактирования не поддерживается Вашим браузером");else iDoc.designMode = isGecko ? "on" : "On";
}
function addFunctionalityToIframe(id) {
  var textBlockElem = document.getElementById(id);
  var textElem = textBlockElem.getElementsByClassName('text')[0];
  var iframe = textBlockElem.getElementsByTagName('iframe')[0].contentWindow;
  var bold = textBlockElem.getElementsByClassName('bold')[0];
  var ital = textBlockElem.getElementsByClassName('ital')[0];
  var under = textBlockElem.getElementsByClassName('under')[0];
  var through = textBlockElem.getElementsByClassName('through')[0];
  var left = textBlockElem.getElementsByClassName('left')[0];
  var right = textBlockElem.getElementsByClassName('right')[0];
  var justify = textBlockElem.getElementsByClassName('justify')[0];
  var center = textBlockElem.getElementsByClassName('center')[0];
  var textLink = textBlockElem.getElementsByClassName('textLink')[0];
  bold.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("bold", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  ital.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("italic", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  under.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("underline", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  through.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("strikeThrough", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  textLink.onclick = function () {
    var name = prompt('Название', '');
    var url = prompt('Адрес', '');
    iframe.document.execCommand("insertHTML", false, '<a href="' + url + '">' + name + '</a>');
    iframe.document.execCommand("insertText", false, " ");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  left.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyLeft", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  right.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyRight", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  justify.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyFull", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  center.onclick = function () {
    iframe.focus();
    iframe.document.execCommand("justifyCenter", null, "");
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}
function addFunctionalityToTextElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('textWrapper')[0];
  var imgSettings = imgBlockElem.getElementsByClassName('image_settings')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerTextXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = imgBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var textSettings = imgBlockElem.getElementsByClassName('textSet')[0];
  var textCopy = imgBlockElem.getElementsByClassName('copyText')[0];
  var iframe = null;
  var textElem = imgBlockElem.getElementsByClassName('text')[0];
  var textEditor = imgBlockElem.getElementsByClassName('text-editor')[0];
  var textEditorPanel = imgBlockElem.getElementsByClassName('text-editor-panel')[0];
  var rightSidebarEl = document.getElementById('rightSidebar');
  var addRedactor = function addRedactor() {
    var iframeElem = document.createElement('iframe');
    iframeElem.className = 'textIframe';
    var styleElem = 'font-size:' + getComputedStyle(textElem).fontSize + ';';
    styleElem += 'font-family:' + getComputedStyle(textElem).fontFamily + ';';
    styleElem += 'font-weight:' + getComputedStyle(textElem).fontWeight + ';';
    styleElem += 'line-height:' + getComputedStyle(textElem).lineHeight + ';';
    styleElem += 'color:' + getComputedStyle(textElem).color + ';';
    styleElem += 'text-shadow:' + getComputedStyle(textElem).textShadow + ';';
    var style = 'body {overflow-wrap: break-word; display: block; margin: 0; padding: 0;' + styleElem + '}';
    iframeElem.width = '100%';
    iframeElem.height = textElem.getBoundingClientRect().height + 'px';
    iframeElem.frameborder = '0px';
    iframeElem.scrolling = 'no';
    textElem.style.display = 'none';
    textEditor.style.display = 'block';
    $(iframeElem).insertAfter(textEditorPanel);
    init(iframeElem, textElem.innerHTML, style);
    addFunctionalityToIframe(id);
    iframe = iframeElem;
    iframe.contentWindow.document.body.onkeydown = function (e) {
      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    };
    iframe.contentWindow.document.body.onkeyup = function (e) {
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    };
    document.addEventListener('mousedown', deleteRedactor);
    window.addEventListener('scroll', redactorScroll);
    textElem.removeEventListener('click', addRedactor);
  };
  var redactorScroll = function redactorScroll() {
    var textEditorPanel = imgBlockElem.getElementsByClassName('text-editor-panel')[0];
    var imgWrapperElem = imgBlockElem.getElementsByClassName('textWrapper')[0];
    var parent = document.getElementById($(imgBlockElem).attr('id'));
    if (parent.getBoundingClientRect().top <= 0 && textEditorPanel.getBoundingClientRect().top + textEditorPanel.getBoundingClientRect().height < parent.getBoundingClientRect().top + parent.getBoundingClientRect().height) {
      textEditorPanel.style.visibility = 'visible';
      textEditorPanel.style.width = imgWrapperElem.getBoundingClientRect().width - 2 + 'px';
      textEditorPanel.style.position = 'fixed';
      textEditorPanel.style.top = '0';
      imgWrapperElem.style.paddingTop = getComputedStyle(textEditorPanel).height;
    } else if (parent.getBoundingClientRect().top <= 0 && textEditorPanel.getBoundingClientRect().top + textEditorPanel.getBoundingClientRect().height >= parent.getBoundingClientRect().top + parent.getBoundingClientRect().height) {
      imgWrapperElem.style.paddingTop = getComputedStyle(textEditorPanel).height;
      textEditorPanel.style.visibility = 'hidden';
    } else if (parent.getBoundingClientRect().top > 0) {
      textEditorPanel.style.visibility = 'visible';
      textEditorPanel.style.width = '100%';
      textEditorPanel.style.position = 'relative';
      textEditorPanel.style.top = "0";
      imgWrapperElem.style.paddingTop = '0';
    }
  };
  var deleteRedactor = function deleteRedactor() {
    if (imgWrapperElem.getElementsByTagName('iframe')[0]) {
      iframe = imgWrapperElem.getElementsByTagName('iframe')[0];
      var mainArea = document.getElementById('mainArea');
      var iframeBody = iframe.contentWindow.document.body;
      var iframes = document.getElementsByClassName('textIframe');
      if ((event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top - 25 || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) && event.clientX < rightSidebarEl.getBoundingClientRect().left && event.clientX != 0) {
        textElem.innerHTML = iframeBody.innerHTML;
        for (var i = 0; i < iframes.length; i++) {
          $(iframes[i]).remove();
        }
        textEditor.style.display = 'none';
        textElem.style.display = 'block';
        iframe = null;
        $('#rightSidebar').css({
          right: '-400px',
          transition: '0.4s all ease-in'
        }).removeClass('activated');
        $('#rightSidebar > div').hide();
        textElem.addEventListener('click', addRedactor);
        document.removeEventListener('mousedown', deleteRedactor);
        window.removeEventListener('scroll', redactorScroll);
        $(textElem).css('position', 'relative').css('z-index', '0').css('top', '0');
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    return false;
  };
  textElem.addEventListener('click', addRedactor);
  var destroy = function destroy() {
    if (imgWrapperElem.getElementsByTagName('iframe')[0]) {
      iframe = imgWrapperElem.getElementsByTagName('iframe')[0];
      var mainArea = document.getElementById('mainArea');
      var iframeBody = iframe.contentWindow.document.body;
      var iframes = document.getElementsByClassName('textIframe');
      textElem.innerHTML = iframeBody.innerHTML;
      for (var i = 0; i < iframes.length; i++) {
        $(iframes[i]).remove();
      }
      textEditor.style.display = 'none';
      textElem.style.display = 'block';
      iframe = null;
      $('#rightSidebar').css({
        right: '-400px',
        transition: '0.4s all ease-in'
      }).removeClass('activated');
      $('#rightSidebar > div').hide();
      textElem.addEventListener('click', addRedactor);
      document.removeEventListener('mousedown', deleteRedactor);
      window.removeEventListener('scroll', redactorScroll);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    return false;
  };

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    imgWrapperElem.style.border = '2px solid transparent';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeXY = function resizeXY() {
    if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
      imgWrapperElem.style.width = imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
      textEditorPanel.style.width = imgWrapperElem.getBoundingClientRect().width - 2 + 'px';
    } else {
      imgWrapperElem.style.width = event.clientX - imgWrapperElem.getBoundingClientRect().left + 'px';
      textEditorPanel.style.width = imgWrapperElem.getBoundingClientRect().width - 2 + 'px';
    }
  };
  var resizeX = function resizeX() {
    if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
      imgWrapperElem.style.width = imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width - event.clientX + 'px';
      textEditorPanel.style.width = imgWrapperElem.getBoundingClientRect().width - 2 + 'px';
    } else {
      imgWrapperElem.style.width = event.clientX - imgWrapperElem.getBoundingClientRect().left + 'px';
      textEditorPanel.style.width = imgWrapperElem.getBoundingClientRect().width - 2 + 'px';
    }
  };
  var finishResizeX = function finishResizeX() {
    if (iframe) {
      iframe.style.display = 'block';
      iframe.height = iframe.contentWindow.document.body.getBoundingClientRect().height + 'px';
      textElem.style.display = 'none';
    }
    if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeX);
    document.removeEventListener('mouseup', finishResizeX);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  var finishResizeXY = function finishResizeXY() {
    if (iframe) {
      iframe.style.display = 'block';
      iframe.height = textElem.getBoundingClientRect().height + 'px';
      textElem.style.display = 'none';
    }
    if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
      imgChangeBorderToZero();
    }
    imgWrapperElem.addEventListener('mouseover', imgHover);
    imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.addEventListener('mouseover', imgHover);
    resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.addEventListener('mouseover', imgHover);
    resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
    document.removeEventListener('mousemove', resizeXY);
    document.removeEventListener('mouseup', finishResizeXY);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Обработчики событий
  $('#mainArea').on('mousedown', '.copy', function () {
    destroy();
  });
  $('#mainArea').on('mousedown', '.copy-content', function () {
    destroy();
  });
  //  savePage.onmousedown = function() {
  //    destroy();
  //  }
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    if (iframe) {
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      iframe.style.display = 'none';
      textElem.style.display = 'block';
    }
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', finishResizeX);
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    if (iframe) {
      textElem.innerHTML = iframe.contentWindow.document.body.innerHTML;
      iframe.style.display = 'none';
      textElem.style.display = 'block';
    }
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', finishResizeXY);
    return false;
  };
  textSettings.onmousedown = function () {
    if (!imgWrapperElem.getElementsByTagName('iframe')[0]) {
      addRedactor();
    }
    return false;
  };
  textCopy.onmousedown = function () {
    destroy();
  };
  arrowLeftElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'start';
    imgBlockElem.style["-ms-flex-pack"] = 'start';
    imgBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'center';
    imgBlockElem.style["-ms-flex-pack"] = 'center';
    imgBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'end';
    imgBlockElem.style["-ms-flex-pack"] = 'end';
    imgBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(imgBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/text/textSettings.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/text/textSettings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _textModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textModule.js */ "./src/components/modules/text/textModule.js");


$('#mainArea').on('click', '.copyText', function () {
  var imgBlockId = $(this).parents('.textBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'text' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);
  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];
  Object(_textModule_js__WEBPACK_IMPORTED_MODULE_1__["addFunctionalityToTextElement"])(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
var imgWrapperElem = null;
var textElem = null;
var textWrapperElem = null;
var iframe = null;
var ifr = null;
var redactorEditor = null;
$('#mainArea').on('click', '.textSet', function (e) {
  ths = $(this).parents('.textBlock');
  imgWrapperElem = document.getElementById(ths.attr('id'));
  textWrapperElem = imgWrapperElem.getElementsByClassName('textWrapper')[0];
  var textEditor = imgWrapperElem.getElementsByClassName('text-editor')[0];
  var ifr = imgWrapperElem.getElementsByTagName('iframe')[0];
  iframe = imgWrapperElem.getElementsByTagName('iframe')[0].contentWindow;
  var textEditorPanel = imgWrapperElem.getElementsByClassName('text-editor-panel')[0];
  if (textWrapperElem.getElementsByClassName('header')[0]) {
    textElem = textWrapperElem.getElementsByClassName('header')[0];
    redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
  } else {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;
  }
  $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight);

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#text-border-style').off();
  $('#text-border-left-style').off();
  $('#text-border-right-style').off();
  $('#text-border-top-style-value').off();
  $('#text-border-bottom-style').off();
  $('#text-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#text-timeout-hour-value').val(h);
    $('#text-timeout-minute-value').val(m);
    $('#text-timeout-second-value').val(s);
    $('#text-display-none-value').prop('checked', true);
  } else {
    $('#text-timeout-hour-value').val(0);
    $('#text-timeout-minute-value').val(0);
    $('#text-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#text-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');

  //Заголовки
  (function () {
    'use strict';

    var redactor = iframe.document.body.innerHTML;
    for (var i = 1; i <= 6; i++) {
      if (redactor.includes('<h' + i)) {
        headers.value = i;
        return;
      } else {
        headers.value = '0';
      }
    }
  })();
  headers.onchange = function () {
    textElem = textWrapperElem.getElementsByClassName('text')[0];
    redactorEditor = iframe.document.body;
    if (+headers.value > 0) {
      iframe.document.body.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(iframe.document.body.innerHTML) + '</h' + headers.value + '>';
      textElem.innerHTML = '<h' + headers.value + ' class="header">' + deleteHeader(textElem.innerHTML) + '</h' + headers.value + '>';
      textElem = textWrapperElem.getElementsByClassName('header')[0];
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      redactorEditor = iframe.document.body.getElementsByClassName('header')[0];
      textElem.style.lineHeight = getComputedStyle(redactorEditor).lineHeight;
    } else {
      iframe.document.body.innerHTML = deleteHeader(iframe.document.body.innerHTML);
      textElem.innerHTML = deleteHeader(textElem.innerHTML);
      $(textElem).css('line-height', getComputedStyle(redactorEditor).lineHeight);
      $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
      $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
      $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
    }
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Выбор шрифта
  fontFamilySelect.value = getComputedStyle(iframe.document.body).fontFamily;
  fontFamilySelect.onchange = function () {
    redactorEditor.style.fontFamily = fontFamilySelect.value;
    textElem.style.fontFamily = fontFamilySelect.value;
    textElem = imgWrapperElem.getElementsByClassName('text')[0];
    textElem.style.fontFamily = fontFamilySelect.value;
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    textElem.innerHTML = iframe.document.body.innerHTML;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Размер шрифта  
  $('#text-font-size-value').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value-range').val(parseInt(getComputedStyle(redactorEditor).fontSize));
  $('#text-font-size-value, #text-font-size-value-range').on('input', function () {
    $(redactorEditor).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    $(textElem).css('font-size', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem').css('line-height', parseInt(getComputedStyle(redactorEditor).lineHeight) / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    if ($(this).attr('id') == "text-font-size-value") {
      $('#text-font-size-value-range').val($(this).val());
    } else {
      $('#text-font-size-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Межстрочный интервал

  $('#text-line-height-value').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value-range').val(parseInt(getComputedStyle(redactorEditor).lineHeight));
  $('#text-line-height-value, #text-line-height-value-range').on('input', function () {
    $(redactorEditor).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    $(textElem).css('line-height', $(this).val() / parseInt(getComputedStyle(document.documentElement).fontSize) + 'rem');
    ifr.height = iframe.document.body.getBoundingClientRect().height + 'px';
    if ($(this).attr('id') == "text-line-height-value") {
      $('#text-line-height-value-range').val($(this).val());
    } else {
      $('#text-line-height-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Цвет текста
  $('#text-color-value').on('change', function () {
    $(redactorEditor).css('color', $(this).val());
    $(textElem).css('color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Заливка текста
  $('#text-backcolor-value').on('change', function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    var target = redactorEditor;
    var rng = document.createRange();
    var nodes = redactorEditor.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpan);
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
    }
    textElem.innerHTML = deleteSpan(textElem);
    var target = textElem;
    var rng = document.createRange();
    var nodes = textElem.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType == 3) {
        rng.selectNode(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      } else if (nodes[i].nodeName != "BR") {
        rng.selectNodeContents(nodes[i]);
        var highlightSpanForText = document.createElement('span');
        highlightSpanForText.style.backgroundColor = $(this).val();
        rng.surroundContents(highlightSpanForText);
      }
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  var resetBackcolor = document.getElementById('text-backcolor-value-reset');
  resetBackcolor.onclick = function () {
    redactorEditor.innerHTML = deleteSpan(redactorEditor);
    textElem.innerHTML = deleteSpan(textElem);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //Вертикальное выравнивание
  if (getComputedStyle(imgWrapperElem).marginTop == 'auto') {
    textMarginBottom.checked = true;
    textMarginTop.checked = false;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginBottom == 'auto') {
    textMarginBottom.checked = false;
    textMarginTop.checked = true;
    textMarginCenter.checked = false;
  } else if (getComputedStyle(imgWrapperElem).marginTop == '0px' && getComputedStyle(imgWrapperElem).marginBottom == '0px') {
    textMarginBottom.checked = false;
    textMarginTop.checked = false;
    textMarginCenter.checked = true;
  }
  textMarginTop.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  textMarginCenter.onclick = function () {
    imgWrapperElem.style.marginTop = '0px';
    imgWrapperElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  textMarginBottom.onclick = function () {
    imgWrapperElem.style.marginTop = 'auto';
    imgWrapperElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  };

  //Настройки отступов

  $('#text-padding-value').val(parseInt($(textElem).css('padding')));
  $('#text-padding-value-range').val(parseInt($(textElem).css('padding')));
  $('#text-margin-top-value').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-top-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginTop));
  $('#text-margin-right-value').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-right-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginRight));
  $('#text-margin-bottom-value').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-bottom-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginBottom));
  $('#text-margin-left-value').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));
  $('#text-margin-left-value-range').val(parseInt(getComputedStyle(imgWrapperElem).marginLeft));
  $('#text-margin-value, #text-margin-value-range').on('input', function () {
    $(ths).css('margin', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "text-margin-value") {
      $('#text-margin-value-range').val($(this).val());
    } else {
      $('#text-margin-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-margin-top-value, #text-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "text-margin-top-value") {
      $('#text-margin-top-value-range').val($(this).val());
    } else {
      $('#text-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-margin-right-value, #text-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "text-margin-right-value") {
      $('#text-margin-right-value-range').val($(this).val());
    } else {
      $('#text-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-margin-bottom-value, #text-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "text-margin-bottom-value") {
      $('#text-margin-bottom-value-range').val($(this).val());
    } else {
      $('#text-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-margin-left-value, #text-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "text-margin-left-value") {
      $('#text-margin-left-value-range').val($(this).val());
    } else {
      $('#text-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки теней*/
  document.getElementById('textShadowRadioOn').onclick = function () {
    document.getElementById('text-shadow').style.display = 'block';
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('textShadowRadioOff').onclick = function () {
    document.getElementById('text-shadow').style.display = 'none';
    $(iframe.document.body).css('text-shadow', 'none');
    $(textElem).css('text-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#text-shadow-horizontal-value, #text-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-horizontal-value") {
      $('#text-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#text-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-shadow-vertical-value, #text-shadow-vertical-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-vertical-value") {
      $('#text-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#text-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-shadow-blur-value, #text-shadow-blur-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-blur-value") {
      $('#text-shadow-blur-value-range').val($(this).val());
    } else {
      $('#text-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-shadow-opacity-value, #text-shadow-opacity-value-range').on('input', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($('#text-shadow-color-value').val(), $(this).val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    if ($(this).attr('id') == "text-shadow-opacity-value") {
      $('#text-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#text-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-shadow-color-value').on('change', function () {
    var hv = $('#text-shadow-horizontal-value').val() + 'px';
    var vv = $('#text-shadow-vertical-value').val() + 'px';
    var blr = $('#text-shadow-blur-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#text-shadow-opacity-value').val() / 100);
    var prpts = hv + " " + vv + " " + blr + " " + clr;
    $(iframe.document.body).css('text-shadow', prpts);
    $(textElem).css('text-shadow', prpts);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#text-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(textElem).css('animation-name', $(this).val());
      $(textElem).css('animation-delay', $('#text-animation-delay-value').val() + 's');
      $(textElem).css('animation-duration', $('#text-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-animation-delay-value, #text-animation-delay-value-range').on('input', function () {
    $(textElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "text-animation-delay-value") {
      $('#text-animation-delay-value-range').val($(this).val());
    } else {
      $('#text-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#text-animation-duration-value, #text-animation-duration-value-range').on('input', function () {
    $(textElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "text-animation-duration-value") {
      $('#text-animation-duration-value-range').val($(this).val());
    } else {
      $('#text-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    document.getElementById('text-display-none-value').checked = true;
  } else {
    document.getElementById('text-display-none-value').checked = false;
  }
  $('#text-display-none-value, #text-timeout-hour-value, #text-timeout-hour-value-range, #text-timeout-minute-value, #text-timeout-minute-value-range, #text-timeout-second-value, #text-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#text-timeout-hour-value').val() * 3600;
    var minute = $('#text-timeout-minute-value').val() * 60;
    var second = parseInt($('#text-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (document.getElementById('text-display-none-value').checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "text-timeout-hour-value") {
      $('#text-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-hour-value-range") {
      $('#text-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value") {
      $('#text-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-minute-value-range") {
      $('#text-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value") {
      $('#text-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "text-timeout-second-value-range") {
      $('#text-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/
});

function deleteHeader(el) {
  var content = el;
  for (var i = 1; i <= 6; i++) {
    var tagName = 'h' + i;
    var reOpen = new RegExp('<' + tagName + '[^>]*>', 'gi');
    var reClose = new RegExp('</' + tagName + '[^>]*>', 'gi');
    content = content.replace(reOpen, "");
    content = content.replace(reClose, "");
  }
  return content;
}
function deleteSpan(el) {
  var content = el.innerHTML;
  var reOpen = new RegExp('<span[^>]*>', 'gi');
  var reClose = new RegExp('</span[^>]*>', 'gi');
  content = content.replace(reOpen, "");
  content = content.replace(reClose, "");
  return content;
}
function changeFontFamily(id) {
  'use strict';

  var chosenElement = document.getElementById(id);
  var chosenText = chosenElement.getElementsByClassName('text')[0];
  fontFamilySelect.onchange = function () {
    chosenText.style.fontFamily = fontFamilySelect.value;
  };
}

/*Перевод hex в RGB (где-то точно используется, уже не помню)*/
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/video/images/video.png":
/*!*******************************************************!*\
  !*** ./src/components/modules/video/images/video.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video.png";

/***/ }),

/***/ "./src/components/modules/video/video.css":
/*!************************************************!*\
  !*** ./src/components/modules/video/video.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modules/video/videoModule.js":
/*!*****************************************************!*\
  !*** ./src/components/modules/video/videoModule.js ***!
  \*****************************************************/
/*! exports provided: dragVideo, addFunctionalityToElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragVideo", function() { return dragVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctionalityToElement", function() { return addFunctionalityToElement; });
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.css */ "./src/components/modules/video/video.css");
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");


function dragVideo(e) {
  var videoBlockId = 'video' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])();
  var videoModule = '<div id="' + videoBlockId + '" class="videoBlock">' + '<div class="imageWrapper videoWrapper" style="width: 600px;">' + '<div class="image_settings">' + '<span class="glyphicon glyphicon-cog videoSet"></span>' + '<span class="glyphicon glyphicon-arrow-left"></span>' + '<span class="glyphicon glyphicon-align-center"></span>' + '<span class="glyphicon glyphicon-arrow-right"></span>' + '<span class="glyphicon glyphicon-duplicate copyVideo"></span>' + '<span class="glyphicon glyphicon-remove"></span>' + '</div>' + '<div class="border" id="' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["getRandom"])() + '">' + '<img class="videoimg img" src="' + __webpack_require__(/*! ./images/video.png */ "./src/components/modules/video/images/video.png") + '" alt="image">' + '<input class="imgProportion" type="hidden" value="1">' + '<div class="iframeWrapper">' + '<iframe class="video" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + '<img class="noVideo" src="' + __webpack_require__(/*! ./images/video.png */ "./src/components/modules/video/images/video.png") + '" alt="video">' + '</div>' + '<div class="resizerY"></div>' + '<div class="resizerXY"></div>' + '<div class="resizerX"></div>' + '</div>' + '</div>';
  $(e.item).replaceWith(videoModule);
  addFunctionalityToElement(videoBlockId);
}
function addFunctionalityToElement(id) {
  var imgBlockElem = document.getElementById(id);
  var imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  var imgElem = imgBlockElem.getElementsByClassName('img')[0];
  var imgSettings = imgBlockElem.getElementsByClassName('image_settings')[0];
  var resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  var resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];
  var resizerX_Elem = imgBlockElem.getElementsByClassName('resizerX')[0];
  var borderElem = imgBlockElem.getElementsByClassName('border')[0];
  var proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  var blockSettingsElem = imgBlockElem.getElementsByClassName('glyphicon')[0];
  var arrowLeftElem = imgBlockElem.getElementsByClassName('glyphicon')[1];
  var arrowCenterElem = imgBlockElem.getElementsByClassName('glyphicon')[2];
  var arrowRightElem = imgBlockElem.getElementsByClassName('glyphicon')[3];
  var imgCopyElem = imgBlockElem.getElementsByClassName('glyphicon')[4];
  var imgDeleteElem = imgBlockElem.getElementsByClassName('glyphicon')[5];
  var proportionCoefHeight = 0;
  var proportionCoefWidth = 0;
  proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
  proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
  imgElem.onload = function () {
    proportionCoefHeight = parseFloat(getComputedStyle(imgWrapperElem).height) / parseFloat(getComputedStyle(imgWrapperElem).width);
    proportionCoefWidth = parseFloat(getComputedStyle(imgWrapperElem).width) / parseFloat(getComputedStyle(imgWrapperElem).height);
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };

  //Сохранение анонимных функций в переменных (для removeEventListner)
  var imgHover = function imgHover() {
    imgWrapperElem.style.border = '2px solid rgb(105, 133, 212)';
    resizerY_Elem.style.visibility = 'visible';
    resizerXY_Elem.style.visibility = 'visible';
    resizerX_Elem.style.visibility = 'visible';
  };
  var imgChangeBorderToZero = function imgChangeBorderToZero() {
    imgWrapperElem.style.border = '2px solid transparent';
    resizerY_Elem.style.visibility = 'hidden';
    resizerXY_Elem.style.visibility = 'hidden';
    resizerX_Elem.style.visibility = 'hidden';
  };
  var resizeY = function resizeY() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';
        ;
      } else {
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.width = (event.clientY - imgElem.getBoundingClientRect().top) * proportionCoefWidth + 'px';
        imgWrapperElem.style.maxHeight = parseFloat(getComputedStyle(imgBlockElem).width) * proportionCoefHeight + 'px';
      }
    } else {
      imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      imgWrapperElem.style.maxHeight = '10000px';
    }
  };
  var resizeXY = function resizeXY() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = event.clientY - imgElem.getBoundingClientRect().top + 'px';
        imgWrapperElem.style.maxHeight = '10000px';
      }
    }
  };
  var resizeX = function resizeX() {
    var checkBox = +proportion.value;
    if (checkBox) {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = 'auto';
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = 'auto';
      }
    } else {
      if (getComputedStyle(imgBlockElem)["-webkit-box-pack"] == 'end' || getComputedStyle(imgBlockElem)["-ms-flex-pack"] == 'end' || getComputedStyle(imgBlockElem).justifyContent == 'flex-end') {
        imgWrapperElem.style.width = imgElem.getBoundingClientRect().left + imgElem.getBoundingClientRect().width - event.clientX + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      } else {
        imgWrapperElem.style.width = event.clientX - imgElem.getBoundingClientRect().left + 'px';
        imgWrapperElem.style.height = getComputedStyle(imgWrapperElem).height;
      }
    }
  };

  //Обработчики событий
  imgWrapperElem.addEventListener('mouseover', imgHover);
  imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerY_Elem.addEventListener('mouseover', imgHover);
  resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerXY_Elem.addEventListener('mouseover', imgHover);
  resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.addEventListener('mouseover', imgHover);
  resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
  resizerX_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeX);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeX);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerXY_Elem.onmousedown = function () {
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeXY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeXY);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  resizerY_Elem.onmousedown = function () {
    var checkBox = +proportion.value;
    imgWrapperElem.removeEventListener('mouseover', imgHover);
    imgWrapperElem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerY_Elem.removeEventListener('mouseover', imgHover);
    resizerY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerXY_Elem.removeEventListener('mouseover', imgHover);
    resizerXY_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    resizerX_Elem.removeEventListener('mouseover', imgHover);
    resizerX_Elem.removeEventListener('mouseout', imgChangeBorderToZero);
    imgHover();
    document.addEventListener('mousemove', resizeY);
    document.addEventListener('mouseup', function () {
      if (event.clientX < imgWrapperElem.getBoundingClientRect().left || event.clientX > imgWrapperElem.getBoundingClientRect().left + imgWrapperElem.getBoundingClientRect().width || event.clientY < imgWrapperElem.getBoundingClientRect().top || event.clientY > imgWrapperElem.getBoundingClientRect().top + imgWrapperElem.getBoundingClientRect().height) {
        imgChangeBorderToZero();
      }
      imgWrapperElem.addEventListener('mouseover', imgHover);
      imgWrapperElem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerY_Elem.addEventListener('mouseover', imgHover);
      resizerY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerXY_Elem.addEventListener('mouseover', imgHover);
      resizerXY_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      resizerX_Elem.addEventListener('mouseover', imgHover);
      resizerX_Elem.addEventListener('mouseout', imgChangeBorderToZero);
      document.removeEventListener('mousemove', resizeY);
      imgWrapperElem.style.width = getComputedStyle(imgWrapperElem).width;
      if (checkBox) {
        imgWrapperElem.style.height = 'auto';
      }
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    });
    return false;
  };
  arrowLeftElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'start';
    imgBlockElem.style["-ms-flex-pack"] = 'start';
    imgBlockElem.style.justifyContent = 'flex-start';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowCenterElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'center';
    imgBlockElem.style["-ms-flex-pack"] = 'center';
    imgBlockElem.style.justifyContent = 'center';
    resizerX_Elem.style.left = '100%';
    resizerXY_Elem.style.left = '100%';
    resizerX_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.marginLeft = '-1.1rem';
    resizerXY_Elem.style.cursor = 'nw-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  arrowRightElem.onclick = function () {
    imgBlockElem.style["-webkit-box-pack"] = 'end';
    imgBlockElem.style["-ms-flex-pack"] = 'end';
    imgBlockElem.style.justifyContent = 'flex-end';
    resizerX_Elem.style.left = '0';
    resizerXY_Elem.style.left = '0';
    resizerX_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.marginLeft = '0';
    resizerXY_Elem.style.cursor = 'ne-resize';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
  imgDeleteElem.onclick = function () {
    $(imgBlockElem).remove();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/modules/video/videoSettings.js":
/*!*******************************************************!*\
  !*** ./src/components/modules/video/videoSettings.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _videoModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoModule.js */ "./src/components/modules/video/videoModule.js");


$('#mainArea').on('click', '.copyVideo', function () {
  var imgBlockId = $(this).parents('.videoBlock').attr('id');
  var imgBlockElem = document.getElementById(imgBlockId);
  var clonId = 'video' + Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["getRandom"])();
  $(imgBlockElem).clone(true).attr('id', clonId).css('height', 'auto').insertAfter(imgBlockElem);
  var clone = document.getElementById(clonId);
  var clonedImg = clone.getElementsByClassName('img')[0];
  var imgWrapper = clone.getElementsByClassName('imageWrapper')[0];
  var cloneResizerY = clone.getElementsByClassName('resizerY')[0];
  var cloneResizerXY = clone.getElementsByClassName('resizerXY')[0];
  var cloneResizerX = clone.getElementsByClassName('resizerX')[0];
  addFunctionalityToElement(clonId);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
});
var ths = null;
var videoPlayerSrc = null;
var content = null;
var imgBlockElem = null;
var imgElem = null;
var imgWrapperElem = null;
var proportion = null;
var imgWrapper = null;
var resizerY_Elem = null;
var resizerXY_Elem = null;
var iframe = null;
var iframeWrapper = null;
var timoutCheckBox = null;
$('#mainArea').on('click', '.videoSet', function (e) {
  ths = $(this).parents('.videoBlock');
  content = document.getElementById($(this).parents('.content').attr('id'));
  imgBlockElem = document.getElementById(ths.attr('id'));
  imgElem = imgBlockElem.getElementsByClassName('img')[0];
  imgWrapperElem = imgBlockElem.getElementsByClassName('imageWrapper')[0];
  proportion = imgBlockElem.getElementsByClassName('imgProportion')[0];
  imgWrapper = imgBlockElem.getElementsByClassName('border')[0];
  resizerY_Elem = imgBlockElem.getElementsByClassName('resizerY')[0];
  resizerXY_Elem = imgBlockElem.getElementsByClassName('resizerXY')[0];
  iframeWrapper = imgBlockElem.getElementsByClassName('iframeWrapper')[0];
  iframe = imgBlockElem.getElementsByTagName('iframe')[0];
  timoutCheckBox = document.getElementById('video-display-none-value');

  //Появление правой панели, инициализация инпутов.
  $('#rightSidebar > div:not(#settings-mn) input').off('input');
  $('#rightSidebar > div:not(#settings-mn) input').off();
  $('#video-border-style').off();
  $('#video-border-left-style').off();
  $('#video-border-right-style').off();
  $('#video-border-top-style-value').off();
  $('#video-border-bottom-style').off();
  $('#video-animation-type-value').off();
  if (document.getElementById('script-' + ths.attr('id'))) {
    var time = parseInt(document.getElementById('script-' + ths.attr('id')).innerHTML.split(',')[1]) / 1000;
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - 3600 * h) / 60);
    var s = time - (3600 * h + 60 * m);
    $('#video-timeout-hour-value').val(h);
    $('#video-timeout-minute-value').val(m);
    $('#video-timeout-second-value').val(s);
    $('#video-display-none-value').prop('checked', true);
  } else {
    $('#video-timeout-hour-value').val(0);
    $('#video-timeout-minute-value').val(0);
    $('#video-timeout-second-value').val(0);
  }
  $('#rightSidebar > div').hide();
  $('#settings-mn').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#video-settings').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
  (function () {
    document.getElementById('videoBorderRadioEvery').onclick = function () {
      document.getElementById('videoBorderAll').style.display = 'none';
      document.getElementById('videoBorderEvery').style.display = 'block';
    };
    document.getElementById('videoBorderRadioAll').onclick = function () {
      document.getElementById('videoBorderAll').style.display = 'block';
      document.getElementById('videoBorderEvery').style.display = 'none';
    };
  })();

  // Вставка ссылки или кода видео EMBED
  function changeVideoSrc() {
    if (videoSrc.value == "youtube") {
      youtube.style.display = 'block';
      vimeo.style.display = 'none';
      embedCode.style.display = 'none';
      videoAutoplay.style.display = 'block';
      videoControls.style.display = 'block';
      if (imgWrapperElem.getElementsByClassName('video')[0]) {
        videoPlayerSrc = imgWrapperElem.getElementsByTagName('iframe')[0].src;
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('embed/', 'watch?v=');
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&mute=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&muted=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?controls=0', '');
        videoPlayerSrc = videoPlayerSrc.replace('&controls=0', '');
        videoIndicator.innerHTML = videoPlayerSrc;
      }
    } else if (videoSrc.value == "vimeo") {
      youtube.style.display = 'none';
      vimeo.style.display = 'block';
      embedCode.style.display = 'none';
      videoAutoplay.style.display = 'block';
      videoControls.style.display = 'block';
      if (imgWrapperElem.getElementsByClassName('video')[0]) {
        videoPlayerSrc = imgWrapperElem.getElementsByTagName('iframe')[0].src;
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('player.vimeo.com/video', 'vimeo.com');
        videoPlayerSrc = videoPlayerSrc == '' ? 'Отсутствует' : videoPlayerSrc.replace('embed/', 'watch?v=');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&mute=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?delay&muted=1', '');
        videoPlayerSrc = videoPlayerSrc.replace('?controls=0', '');
        videoPlayerSrc = videoPlayerSrc.replace('&controls=0', '');
        videoIndicator.innerHTML = videoPlayerSrc;
      }
    } else if (videoSrc.value == "embed") {
      youtube.style.display = 'none';
      vimeo.style.display = 'none';
      embedCode.style.display = 'block';
      videoAutoplay.style.display = 'none';
      videoControls.style.display = 'none';
      if (embedArea.value != '') {
        videoIndicator.innerHTML = 'Embed code';
      } else {
        videoIndicator.innerHTML = 'Отсутствует';
      }
    }
  }
  changeVideoSrc();
  videoSrc.onchange = function () {
    changeVideoSrc();
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };

  //автопроигрывание

  if (imgWrapperElem.getElementsByClassName('video')[0] && iframe.src != '' && iframe.src.indexOf('delay') != -1) {
    videoAutoplayCheckBox.checked = true;
  } else {
    videoAutoplayCheckBox.checked = false;
  }
  videoAutoplayCheckBox.onclick = function () {
    var src;
    switch (videoSrc.value) {
      case 'youtube':
        if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoAutoplayCheckBox.checked == true && iframe.src.indexOf('delay') == -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1' : videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoAutoplayCheckBox.checked == false && iframe.src.indexOf('delay') != -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('watch?v=', 'embed/') : videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?controls=0';
          iframe.src = src;
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
      case 'vimeo':
        if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoAutoplayCheckBox.checked == true && iframe.src.indexOf('delay') == -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1' : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoAutoplayCheckBox.checked == false && iframe.src.indexOf('delay') != -1) {
          src = iframe.src.indexOf('controls') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0';
          iframe.src = src;
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
    }
  };

  //Скрыть панель управления

  if (imgWrapperElem.getElementsByTagName('iframe')[0] && iframe.src != '' && iframe.src.indexOf('controls') != -1) {
    videoControlsCheckBox.checked = true;
  } else {
    videoControlsCheckBox.checked = false;
  }
  videoControlsCheckBox.onclick = function () {
    var src;
    switch (videoSrc.value) {
      case 'youtube':
        if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoControlsCheckBox.checked == true && iframe.src.indexOf('controls') == -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?controls=0' : videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && youtubeInput.value == '' && videoControlsCheckBox.checked == false && iframe.src.indexOf('controls') != -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('watch?v=', 'embed/') : videoIndicator.innerHTML.replace('watch?v=', 'embed/') + '?delay&mute=1';
          iframe.src = src;
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
      case 'vimeo':
        if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoControlsCheckBox.checked == true && iframe.src.indexOf('controls') == -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0' : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          iframe.src = src;
        } else if (videoIndicator.innerHTML != 'Отсутствует' && vimeoInput.value == '' && videoControlsCheckBox.checked == false && iframe.src.indexOf('controls') != -1) {
          src = iframe.src.indexOf('delay') == -1 ? videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') : videoIndicator.innerHTML.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1';
          iframe.src = src;
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
    }
  };
  videoUrlExec.onclick = function () {
    var src = '';
    var stringToDelete = '';
    switch (videoSrc.value) {
      case 'youtube':
        if (!imgWrapperElem.getElementsByClassName('video')[0]) {
          iframeWrapper.innerHTML = '<iframe class="video" frameborder="0" width="100%" height="100%"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
          iframe = iframeWrapper.getElementsByTagName('iframe')[0];
        }
        if (youtubeInput.value != '') {
          src = youtubeInput.value;
          if (!videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/');
          } else if (videoAutoplayCheckBox.checked && videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/') + '?delay&mute=1&controls=0';
          } else if (videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('watch?v=', 'embed/') + '?delay&mute=1';
          } else {
            src = src.replace('watch?v=', 'embed/') + '?controls=0';
          }
          iframe.src = src;
          youtubeInput.value = '';
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
          iframe = imgBlockElem.getElementsByTagName('iframe')[0];
        } else {
          alert('Вы не ввели ссылку на видео!');
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
      case 'vimeo':
        if (!imgWrapperElem.getElementsByClassName('video')[0]) {
          iframeWrapper.innerHTML = '<iframe class="video" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
        if (vimeoInput.value != '') {
          src = vimeoInput.value;
          if (!videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video');
          } else if (videoAutoplayCheckBox.checked && videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1&controls=0';
          } else if (videoAutoplayCheckBox.checked && !videoControlsCheckBox.checked) {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?delay&muted=1';
          } else {
            src = src.replace('vimeo.com', 'player.vimeo.com/video') + '?controls=0';
          }
          iframe.src = src;
          vimeoInput.value = '';
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
        } else {
          alert('Вы не ввели ссылку на видео!');
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
      case 'embed':
        if (embedArea.value != '') {
          iframeWrapper.innerHTML = embedArea.value;
          changeVideoSrc();
          stringToDelete = new RegExp('<img class="noVideo"[^>]*>', 'gi');
          iframeWrapper.innerHTML = iframeWrapper.innerHTML.replace(stringToDelete, '');
        } else {
          alert('Вы не ввели код плеера!');
        }
        Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
        break;
    }
  };

  //Вертикальное выравнивание
  if (getComputedStyle(imgBlockElem).marginTop == 'auto') {
    videoMarginBottom.checked = true;
    videoMarginTop.checked = false;
    videoMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginBottom == 'auto') {
    videoMarginBottom.checked = false;
    videoMarginTop.checked = true;
    videoMarginCenter.checked = false;
  } else if (getComputedStyle(imgBlockElem).marginTop == '0px' && getComputedStyle(imgBlockElem).marginBottom == '0px') {
    videoMarginBottom.checked = false;
    videoMarginTop.checked = false;
    videoMarginCenter.checked = true;
  }
  videoMarginTop.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = 'auto';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  videoMarginCenter.onclick = function () {
    imgBlockElem.style.marginTop = '0px';
    imgBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '100%';
    //    resizerY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.top = '100%';
    //    resizerXY_Elem.style.left = '100%';
    //    resizerXY_Elem.style.marginTop = '-1rem';
    //    resizerXY_Elem.style.marginLeft = '-1rem';
  };

  videoMarginBottom.onclick = function () {
    imgBlockElem.style.marginTop = 'auto';
    imgBlockElem.style.marginBottom = '0px';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();

    //    resizerY_Elem.style.top = '0';
    //    resizerY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.top = '0';
    //    resizerXY_Elem.style.left = '0';
    //    resizerXY_Elem.style.marginTop = '0';
    //    resizerXY_Elem.style.marginLeft = '0';
  };

  //Настройки отступов

  $('#video-margin-top-value').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#video-margin-top-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginTop));
  $('#video-margin-right-value').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#video-margin-right-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginRight));
  $('#video-margin-bottom-value').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#video-margin-bottom-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginBottom));
  $('#video-margin-left-value').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#video-margin-left-value-range').val(parseInt(getComputedStyle(imgBlockElem).marginLeft));
  $('#video-margin-top-value, #video-margin-top-value-range').on('input', function () {
    $(ths).css('margin-top', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-top:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "video-margin-top-value") {
      $('#video-margin-top-value-range').val($(this).val());
    } else {
      $('#video-margin-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-margin-right-value, #video-margin-right-value-range').on('input', function () {
    $(ths).css('margin-right', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-right:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "video-margin-right-value") {
      $('#video-margin-right-value-range').val($(this).val());
    } else {
      $('#video-margin-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-margin-bottom-value, #video-margin-bottom-value-range').on('input', function () {
    $(ths).css('margin-bottom', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-bottom:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "video-margin-bottom-value") {
      $('#video-margin-bottom-value-range').val($(this).val());
    } else {
      $('#video-margin-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-margin-left-value, #video-margin-left-value-range').on('input', function () {
    $(ths).css('margin-left', '');
    var val = $(this).val();
    $(ths).attr('style', function (i, s) {
      return (s || '') + 'margin-left:' + val + 'px !important;';
    });
    if ($(this).attr('id') == "video-margin-left-value") {
      $('#video-margin-left-value-range').val($(this).val());
    } else {
      $('#video-margin-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  //Настройки всех границ изображения
  $('#video-border-value').val(parseInt($(imgWrapper).css('border-width')));
  $('#video-border-value-range').val(parseInt($(imgWrapper).css('border-width')));
  $('#video-border-radius').val(parseInt($(imgWrapper).css('border-radius')));
  $('#video-border-radius-range').val(parseInt($(imgWrapper).css('border-radius')));
  $('#video-border-value, #video-border-value-range').on('input', function () {
    $(imgWrapper).css('border-width', $(this).val() + 'px');
    if ($(this).attr('id') == "video-border-value") {
      $('#video-border-value-range').val($(this).val());
    } else {
      $('#video-border-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-style').on('change', function () {
    $(imgWrapper).css('border-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-color-value').on('change', function () {
    $(imgWrapper).css('border-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Настройки для верхней границы блока*/

  $('#video-border-top-value').val(parseInt($(ths).css('border-top-width')));
  $('#video-border-top-value-range').val(parseInt($(ths).css('border-top-width')));
  $('#video-border-left-top-radius').val(parseInt($(ths).css('border-top-left-radius')));
  $('#video-border-left-top-radius-range').val(parseInt($(ths).css('border-top-left-radius')));
  $('#video-border-top-value, #video-border-top-value-range').on('input', function () {
    $(imgWrapper).css('border-top-width', $(this).val() + 'px');
    if ($(this).attr('id') == "video-border-top-value") {
      $('#video-border-top-value-range').val($(this).val());
    } else {
      $('#video-border-top-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-top-style-value').on('change', function () {
    $(imgWrapper).css('border-top-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-top-color').on('change', function () {
    $(imgWrapper).css('border-top-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для правой границы блока*/
  $('#video-border-right-value').val(parseInt($(ths).css('border-right-width')));
  $('#video-border-right-value-range').val(parseInt($(ths).css('border-right-width')));
  $('#video-border-right-radius').val(parseInt($(ths).css('border-top-right-radius')));
  $('#video-border-right-radius-range').val(parseInt($(ths).css('border-top-right-radius')));
  $('#video-border-right-value, #video-border-right-value-range').on('input', function () {
    $(imgWrapper).css('border-right-width', $(this).val() + 'px');
    if ($(this).attr('id') == "video-border-right-value") {
      $('#video-border-right-value-range').val($(this).val());
    } else {
      $('#video-border-right-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-right-style').on('change', function () {
    $(imgWrapper).css('border-right-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-right-color').on('change', function () {
    $(imgWrapper).css('border-right-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для нижней границы блока*/
  $('#video-border-bottom-value').val(parseInt($(ths).css('border-bottom-width')));
  $('#video-border-bottom-value-range').val(parseInt($(ths).css('border-bottom-width')));
  $('#video-border-bottom-right-radius').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#video-border-bottom-right-radius-range').val(parseInt($(ths).css('border-bottom-right-radius')));
  $('#video-border-bottom-value, #video-border-bottom-value-range').on('input', function () {
    $(imgWrapper).css('border-bottom-width', $(this).val() + 'px');
    if ($(this).attr('id') == "video-border-bottom-value") {
      $('#video-border-bottom-value-range').val($(this).val());
    } else {
      $('#video-border-bottom-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-bottom-style').on('change', function () {
    $(imgWrapper).css('border-bottom-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-bottom-color').on('change', function () {
    $(imgWrapper).css('border-bottom-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки для левой границы блока*/
  $('#video-border-left-value').val(parseInt($(ths).css('border-left-width')));
  $('#video-border-left-value-range').val(parseInt($(ths).css('border-left-width')));
  $('#video-border-bottom-left-radius').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#video-border-bottom-left-radius-range').val(parseInt($(ths).css('border-bottom-left-radius')));
  $('#video-border-left-value, #video-border-left-value-range').on('input', function () {
    $(imgWrapper).css('border-left-width', $(this).val() + 'px');
    if ($(this).attr('id') == "video-border-left-value") {
      $('#video-border-left-value-range').val($(this).val());
    } else {
      $('#video-border-left-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-left-style').on('change', function () {
    $(imgWrapper).css('border-left-style', $(this).find('option:selected').val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-border-left-color').on('change', function () {
    $(imgWrapper).css('border-left-color', $(this).val());
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока*/

  /*Настройки теней*/
  document.getElementById('videoShadowRadioOn').onclick = function () {
    document.getElementById('video-shadow').style.display = 'block';
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  document.getElementById('videoShadowRadioOff').onclick = function () {
    document.getElementById('video-shadow').style.display = 'none';
    $(imgWrapper).css('box-shadow', 'none');
    $(imgElem).css('box-shadow', 'none');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  };
  $('#video-shadow-horizontal-value, #video-shadow-horizontal-value-range').on('input', function () {
    var hv = $(this).val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "video-shadow-horizontal-value") {
      $('#video-shadow-horizontal-value-range').val($(this).val());
    } else {
      $('#video-shadow-horizontal-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-vertical-value, #video-shadow-vertical-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $(this).val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "video-shadow-vertical-value") {
      $('#video-shadow-vertical-value-range').val($(this).val());
    } else {
      $('#video-shadow-vertical-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-blur-value, #video-shadow-blur-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $(this).val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "video-shadow-blur-value") {
      $('#video-shadow-blur-value-range').val($(this).val());
    } else {
      $('#video-shadow-blur-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-spread-value, #video-shadow-spread-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $(this).val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "video-shadow-spread-value") {
      $('#video-shadow-spread-value-range').val($(this).val());
    } else {
      $('#video-shadow-spread-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-opacity-value, #video-shadow-opacity-value-range').on('input', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $(this).val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    if ($(this).attr('id') == "video-shadow-opacity-value") {
      $('#video-shadow-opacity-value-range').val($(this).val());
    } else {
      $('#video-shadow-opacity-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-color-value').on('change', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($(this).val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $('#video-shadow-inset-value').prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-shadow-inset-value').on('change', function () {
    var hv = $('#video-shadow-horizontal-value').val() + 'px';
    var vv = $('#video-shadow-vertical-value').val() + 'px';
    var blr = $('#video-shadow-blur-value').val() + 'px';
    var sprd = $('#video-shadow-spread-value').val() + 'px';
    var clr = hexToRGB($('#video-shadow-color-value').val(), $('#video-shadow-opacity-value').val() / 100);
    var inset = $(this).prop('checked') == true ? "inset" : "";
    var prpts = hv + " " + vv + " " + blr + " " + sprd + " " + clr + " " + inset;
    if ($('#video-shadow-inset-value').prop('checked') == true) {
      $(imgWrapper).css('box-shadow', prpts);
    } else {
      $(imgElem).css('box-shadow', prpts);
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек теней*/

  /*Настройка анимации*/

  $('#video-animation-type-value').on('change', function () {
    if ($(this) != "none") {
      $(imgElem).css('animation-name', $(this).val());
      $(imgElem).css('animation-delay', $('#video-animation-delay-value').val() + 's');
      $(imgElem).css('animation-duration', $('#video-animation-duration-value').val() + 's');
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-animation-delay-value, #video-animation-delay-value-range').on('input', function () {
    $(imgElem).css('animation-delay', $(this).val() + 's');
    if ($(this).attr('id') == "video-animation-delay-value") {
      $('#video-animation-delay-value-range').val($(this).val());
    } else {
      $('#video-animation-delay-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });
  $('#video-animation-duration-value, #video-animation-duration-value-range').on('input', function () {
    $(imgElem).css('animation-duration', $(this).val() + 's');
    if ($(this).attr('id') == "video-animation-duration-value") {
      $('#video-animation-duration-value-range').val($(this).val());
    } else {
      $('#video-animation-duration-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец настроек анимации*/

  /*Блок таймаута*/

  /*----------------!!!СДЕЛАТЬ!!!-----------------*/

  if (document.getElementById('script-' + ths.attr('id'))) {
    timoutCheckBox.checked = true;
  } else {
    timoutCheckBox.checked = false;
  }
  $('#video-display-none-value, #video-timeout-hour-value, #video-timeout-hour-value-range, #video-timeout-minute-value, #video-timeout-minute-value-range, #video-timeout-second-value, #video-timeout-second-value-range').on('input', function () {
    var id = ths.attr('id');
    var hours = $('#video-timeout-hour-value').val() * 3600;
    var minute = $('#video-timeout-minute-value').val() * 60;
    var second = parseInt($('#video-timeout-second-value').val());
    var time = hours + minute + second;
    time = time * 1000;
    if (timoutCheckBox.checked == true) {
      $('#script-' + id).remove();
      $('#mainArea').append('<span class="code" id="script-' + id + '" style="display: none;">' + [id, time] + '</span>');
    } else {
      $('#script-' + id).remove();
    }
    if ($(this).attr('id') == "video-timeout-hour-value") {
      $('#video-timeout-hour-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-hour-value-range") {
      $('#video-timeout-hour-value').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-minute-value") {
      $('#video-timeout-minute-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-minute-value-range") {
      $('#video-timeout-minute-value').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-second-value") {
      $('#video-timeout-second-value-range').val($(this).val());
    } else if ($(this).attr('id') == "video-timeout-second-value-range") {
      $('#video-timeout-second-value').val($(this).val());
    }
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_0__["makePreview"])();
  });

  /*Конец блока таймаута*/
});

/*Перевод hex в RGB (где-то точно используется, уже не помню)*/
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else if (alpha == 0) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
function deleteTeg(content, reOpen, reCloze) {
  var teg = new RegExp('<' + reOpen + '[^<]*</' + reCloze + '>', 'gi');
  content = content.replace(teg, '');
  return content;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/page/page.css":
/*!**************************************!*\
  !*** ./src/components/page/page.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/page/page.js":
/*!*************************************!*\
  !*** ./src/components/page/page.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.css */ "./src/components/page/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.js */ "./src/components/global/global.js");
/* harmony import */ var _global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/Sortable.js */ "./src/components/global/Sortable.js");



previewDigital.onclick = function () {
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
};
_global_Sortable_js__WEBPACK_IMPORTED_MODULE_2__["Sortable"].create(mainArea, {
  group: {
    name: 'main',
    put: 'main-selector'
  },
  draggable: '.main-selector',
  filter: '.resizer, .handle, .block-resizer',
  ghostClass: 'main-selector-ghostClass',
  onStart: function onStart(evt) {
    jQuery('.content').css('display', 'none');
    $('.block-settings').css('display', 'none');
    $(evt.item).css('opacity', '0.3');
  },
  onEnd: function onEnd(evt) {
    jQuery('.content').css('display', 'flex');
    $('.block-settings').css('display', 'flex');
    ;
    $(evt.item).css('opacity', '1');
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  }
});

//<!--Пункты меню с выбором селекторов-->
$('#leftSidebar .main-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#mainSelector').slideDown();
});
$('#leftSidebar .content-selectors').on('click', function () {
  $('#elements').slideUp();
  $('#contentSelector').slideDown();
});
$('#leftSidebar .modules').on('click', function () {
  $('#elements').slideUp();
  $('#Modules').slideDown();
});
$('#leftSidebar .ls-back-btn').on('click', function () {
  $(this).parent().slideUp();
  $('#elements').slideDown();
});

/*Появление и скрытие левой панели*/
$('#leftSidebar .hide-panel span').on('click', function () {
  if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-left')) {
    $('#leftSidebar .ls-center-area').hide();
    $('#leftSidebar').css({
      width: '45px',
      transition: '1s all ease'
    });
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-left').addClass('glyphicon-arrow-right');
  } else if ($('#leftSidebar .hide-panel span').hasClass('glyphicon-arrow-right')) {
    $('#leftSidebar').css('width', '300px');
    $('#leftSidebar .ls-center-area').show();
    $('#leftSidebar .hide-panel span').removeClass('glyphicon-arrow-right').addClass('glyphicon-arrow-left');
  }
});
$('#leftSidebar .main-settings span').on('click', function () {
  $('#rightSidebar > div').hide();
  $('#main-block-settings').hide();
  $('#content-block-settings').hide();
  $('#image-settings').hide();
  $('#video-settings').hide();
  $('#text-settings').hide();
  $('#button-settings').hide();
  $('#form-settings').hide();
  $('#subscribe-settings').hide();
  $('#line-settings').hide();
  $('#list-settings').hide();
  $('#settings-mn').show();
  $('#rightSidebar').css({
    right: '0px',
    transition: '0.4s all ease-in'
  }).addClass('activated');
});

//Ширина страницы

(function makeFullScreen() {
  var mainAreaEl = document.getElementById('mainArea');
  document.getElementById('page-width-input').value = parseInt(getComputedStyle(mainAreaEl).width);
  mediaStyle.innerHTML = '#mainArea {width: ' + getComputedStyle(mainAreaEl).width + ';}';
  mediaStyle.innerHTML += '@media screen and (max-width: ' + getComputedStyle(mainAreaEl).width + ') {#mainArea {width: auto;}}';
  if (getComputedStyle(mainAreaEl).width == 'auto') {
    pageFullScreen.checked = true;
  } else {
    pageFullScreen.checked = false;
  }
  pageFullScreen.onclick = function () {
    if (pageFullScreen.checked == true) {
      mediaStyle.innerHTML = '#mainArea {width: auto;}';
      document.getElementById('page-width-input').value = '';
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    } else {
      mediaStyle.innerHTML = '#mainArea {width: ' + getComputedStyle(mainAreaEl).width + ';}';
      mediaStyle.innerHTML += '@media screen and (max-width: ' + getComputedStyle(mainAreaEl).width + ') {#mainArea {width: auto;}}';
      document.getElementById('page-width-input').value = parseInt(getComputedStyle(mainAreaEl).width);
      Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
    }
  };
})();
$('#page-width-input').on('input', function () {
  if (pageFullScreen.checked == false) {
    mediaStyle.innerHTML = '#mainArea {width: ' + $(this).val() + 'px' + ';}';
    mediaStyle.innerHTML += '@media screen and (max-width: ' + $(this).val() + 'px' + ') {#mainArea {width: auto;}}';
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
  }
});
$('#rightSidebar .close-rs').on('click', function () {
  $('#rightSidebar').css({
    right: '-400px',
    transition: '0.4s all ease-in'
  }).removeClass('activated');
  $('#rightSidebar > div').hide();
});
$('#videolink, #video_loop, #video_unmute').on('change', function () {
  if ($('#videolink').val().indexOf(".mp4") != -1 || $('#videolink').val().indexOf(".avi") != -1) {
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["setAnotherBackgroundVideo"])($(this).val());
  } else if ($('#videolink').val().indexOf("youtube.com") != -1 || $('#videolink').val().indexOf("youtu.be") != -1) {
    var link;
    if ($('#videolink').val().indexOf("watch?v=") != -1) {
      link = $('#videolink').val().split("watch?v=")[1];
    } else if ($('#videolink').val().indexOf("embed") != -1) {
      link = $('#videolink').val().split("embed/")[1];
    } else {
      link = $('#videolink').val().split("youtu.be/")[1];
    }
    var params = [];
    params['loop'] = $('#video_loop:checked').val() == '1' ? 1 : 0;
    params['mute'] = $('#video_unmute:checked').val() == '1' ? 0 : 1;
    Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["setYoutubeBackgroundVideo"])(link, params);
  } else {
    $('#backgroundVideo > *').remove();
  }
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-color input').on('change', function () {
  var opacity = $('#page-main-color-opacity').val() / 100;
  var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"])($(this).val(), opacity);
  $('#mainArea').css('background', color);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-meta-description input').on('input', function () {
  $('meta[name=description]').attr('content', $(this).val());
});
$('#page-meta-keywords input').on('input', function () {
  $('meta[name=keywords]').attr('content', $(this).val());
});
$('#page-title input').on('input', function () {
  $('title').text($(this).val());
});
$('#gradient-color-1').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $(this).val() + ', ' + $('#gradient-color-2').val() + ')');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#gradient-color-2').on('change', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($('#gradient-angle').val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $(this).val() + ')');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#gradient-angle').on('input', function () {
  $('#mainArea').css('background', 'linear-gradient(' + parseInt($(this).val()) + 'deg, ' + $('#gradient-color-1').val() + ', ' + $('#gradient-color-2').val() + ')');
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-main-color-opacity').on('input', function () {
  var opacity = $(this).val();
  var color = Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"])($('#page-main-color').val(), opacity / 100);
  $('#mainArea').css('background', color);
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-file').on('change', function () {
  var file = document.querySelector('input#page-background-image-file').files[0];
  var token = $('input[name=_token][type=hidden]').val();
  var form_data = new FormData();
  form_data.append('image', file);
  form_data.append('_token', token);
  form_data.append('id', $('input[name=template_id]').val());
  $.ajax({
    url: "/client/funnel/saveimage",
    method: 'post',
    data: form_data,
    contentType: false,
    processData: false,
    success: function success(e) {
      $('#mainArea').css('background-image', 'url(' + e.link + ')');
    }
  });
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-size').on('change', function () {
  $('#mainArea').css('background-size', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-attachment').on('change', function () {
  $('#mainArea').css('background-attachment', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-blend-mode').on('change', function () {
  $('#mainArea').css('background-blend-mode', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-repeat-x').on('change', function () {
  $('#mainArea').css('background-repeat-x', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-repeat-y').on('change', function () {
  $('#mainArea').css('background-repeat-y', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-image-color').on('change', function () {
  $('#mainArea').css('background-color', $(this).val());
  Object(_global_global_js__WEBPACK_IMPORTED_MODULE_1__["makePreview"])();
});
$('#page-background-types input').on('change', function () {
  switch ($(this).val()) {
    case 'color':
      {
        $('.page-background-color-settings').show();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').hide();
        $('.page-background-vide-settings').hide();
        break;
      }
    case 'gradient':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').show();
        $('.page-background-image-settings').hide();
        $('.page-background-vide-settings').hide();
        break;
      }
    case 'bgimage':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').show();
        $('.page-background-vide-settings').hide();
        break;
      }
    case 'video':
      {
        $('.page-background-color-settings').hide();
        $('.page-background-gradient-settings').hide();
        $('.page-background-image-settings').hide();
        $('.page-background-video-settings').show();
      }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/entryRedactor.js":
/*!******************************!*\
  !*** ./src/entryRedactor.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/global.css */ "./src/theme/global.css");
/* harmony import */ var _theme_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_global_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/fonts.css */ "./src/fonts/fonts.css");
/* harmony import */ var _fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__);


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

//requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(tsx?)$/));  // pattern to take each .ts files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
//requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(tsx?)$/));

requireAll(__webpack_require__("./src/components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$")); // pattern to take each .ts files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(__webpack_require__("./src/pages/index sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$"));

/***/ }),

/***/ "./src/fonts/fonts.css":
/*!*****************************!*\
  !*** ./src/fonts/fonts.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!******************************************************************!*\
  !*** ./src/pages/index sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./src/pages/index/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/pages/index sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/theme/global.css":
/*!******************************!*\
  !*** ./src/theme/global.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });