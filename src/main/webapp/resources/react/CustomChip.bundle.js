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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ChipsSrc/CustomChip.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/bowser/src/bowser.js":
/*!********************************************!*\
  !*** ../node_modules/bowser/src/bowser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) __webpack_require__(/*! !webpack amd define */ "../node_modules/webpack/buildin/amd-define.js")(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),

/***/ "../node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "../node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!**************************************************************!*\
  !*** ../node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/exenv/index.js":
/*!**************************************!*\
  !*** ../node_modules/exenv/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "../node_modules/hyphenate-style-name/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/hyphenate-style-name/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/createPrefixer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPrefixer;

var _getBrowserInformation = __webpack_require__(/*! ../utils/getBrowserInformation */ "../node_modules/inline-style-prefixer/utils/getBrowserInformation.js");

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = __webpack_require__(/*! ../utils/getPrefixedKeyframes */ "../node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js");

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "../node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "../node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "../node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "../node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
     * Instantiante a new prefixer
     * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
     * @param {string} keepUnprefixed - keeps unprefixed properties and values
     */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
       * Returns a prefixed version of the style object using all vendor prefixes
       * @param {Object} styles - Style object that gets prefixed properties added
       * @returns {Object} - Style object with prefixed properties and values
       */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
/*!*********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/calc.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js":
/*!**************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/cursor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/cursor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/filter.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/filter.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
/*!*********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/flex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
/*!**************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};

var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
/*!***************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
/*!*************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/gradient.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(value.replace(values, function (grad) {
      return cssPrefix + grad;
    }), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js":
/*!*************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/position.js":
/*!*************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/position.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/sizing.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true

  // TODO: chrome & opera support it
};function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
/*!***************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/dynamic/plugins/transition.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "../node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    // memoize the prefix array for later use
    if (!requiresPrefixDashCased) {
      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateProperty2.default)(prop);
      });
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    requiresPrefixDashCased.forEach(function (prop) {
      multipleValues.forEach(function (val, index) {
        if (val.indexOf(prop) > -1 && prop !== 'order') {
          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
        }
      });
    });

    return multipleValues.join(',');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/createPrefixer.js":
/*!**********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/createPrefixer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ../utils/prefixProperty */ "../node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "../node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "../node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "../node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/calc.js":
/*!********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/calc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!*************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!**********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!**********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/*!*************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/flexboxIE.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!**************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/position.js":
/*!************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!**********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!**************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "../node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "../node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/addNewValuesOnly.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
/*!****************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/getBrowserInformation.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowserInformation;

var _bowser = __webpack_require__(/*! bowser */ "../node_modules/bowser/src/bowser.js");

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  if (browserInfo.yandexbrowser) {
    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
  }

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
/*!***************************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
/*!***********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/getPrefixedValue.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/isObject.js":
/*!***************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/isObject.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!*********************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "../node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!******************************************************************!*\
  !*** ../node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/radium/es/append-important-to-each-value.js":
/*!*******************************************************************!*\
  !*** ../node_modules/radium/es/append-important-to-each-value.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendImportantToEachValue; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "../node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-object */ "../node_modules/radium/es/map-object.js");



function appendImportantToEachValue(style) {
  return Object(_map_object__WEBPACK_IMPORTED_MODULE_1__["default"])(style, function (result, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, style[key]) + ' !important';
  });
}

/***/ }),

/***/ "../node_modules/radium/es/append-px-if-needed.js":
/*!********************************************************!*\
  !*** ../node_modules/radium/es/append-px-if-needed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendPxIfNeeded; });


// Copied from https://github.com/facebook/react/blob/
// 102cd291899f9942a76c40a0e78920a6fe544dc1/
// src/renderers/dom/shared/CSSProperty.js
var isUnitlessNumber = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

function appendPxIfNeeded(propertyName, value) {
  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
  return needsPxSuffix ? value + 'px' : value;
}

/***/ }),

/***/ "../node_modules/radium/es/camel-case-props-to-dash-case.js":
/*!******************************************************************!*\
  !*** ../node_modules/radium/es/camel-case-props-to-dash-case.js ***!
  \******************************************************************/
/*! exports provided: camelCaseToDashCase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseToDashCase", function() { return camelCaseToDashCase; });
var _camelCaseRegex = /([a-z])?([A-Z])/g;

var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
  return (p1 || '') + '-' + p2.toLowerCase();
};

var camelCaseToDashCase = function camelCaseToDashCase(s) {
  return s.replace(_camelCaseRegex, _camelCaseReplacer);
};

var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
  // Since prefix is expected to work on inline style objects, we must
  // translate the keys to dash case for rendering to CSS.
  return Object.keys(prefixedStyle).reduce(function (result, key) {
    var dashCaseKey = camelCaseToDashCase(key);

    // Fix IE vendor prefix
    if (/^ms-/.test(dashCaseKey)) {
      dashCaseKey = '-' + dashCaseKey;
    }

    result[dashCaseKey] = prefixedStyle[key];
    return result;
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (camelCasePropsToDashCase);

/***/ }),

/***/ "../node_modules/radium/es/clean-state-key.js":
/*!****************************************************!*\
  !*** ../node_modules/radium/es/clean-state-key.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* flow */

var cleanStateKey = function cleanStateKey(key) {
  return key === null || typeof key === 'undefined' ? 'main' : key.toString();
};

/* harmony default export */ __webpack_exports__["default"] = (cleanStateKey);

/***/ }),

/***/ "../node_modules/radium/es/components/style-root.js":
/*!**********************************************************!*\
  !*** ../node_modules/radium/es/components/style-root.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enhancer */ "../node_modules/radium/es/enhancer.js");
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style-keeper */ "../node_modules/radium/es/style-keeper.js");
/* harmony import */ var _style_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-sheet */ "../node_modules/radium/es/components/style-sheet.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function _getStyleKeeper(instance) {
  if (!instance._radiumStyleKeeper) {
    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
    instance._radiumStyleKeeper = new _style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"](userAgent);
  }

  return instance._radiumStyleKeeper;
}

var StyleRoot = function (_PureComponent) {
  _inherits(StyleRoot, _PureComponent);

  function StyleRoot() {
    _classCallCheck(this, StyleRoot);

    var _this = _possibleConstructorReturn(this, (StyleRoot.__proto__ || Object.getPrototypeOf(StyleRoot)).apply(this, arguments));

    _getStyleKeeper(_this);
    return _this;
  }

  _createClass(StyleRoot, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { _radiumStyleKeeper: _getStyleKeeper(this) };
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      // Pass down all props except config to the rendered div.
      var _props = this.props,
          radiumConfig = _props.radiumConfig,
          otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
      /* eslint-enable no-unused-vars */

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        otherProps,
        this.props.children,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_sheet__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      );
    }
  }]);

  return StyleRoot;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

StyleRoot.contextTypes = {
  _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"])
};

StyleRoot.childContextTypes = {
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"])
};

StyleRoot = Object(_enhancer__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleRoot);

/* harmony default export */ __webpack_exports__["default"] = (StyleRoot);

/***/ }),

/***/ "../node_modules/radium/es/components/style-sheet.js":
/*!***********************************************************!*\
  !*** ../node_modules/radium/es/components/style-sheet.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleSheet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-keeper */ "../node_modules/radium/es/style-keeper.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StyleSheet = (_temp = _class = function (_Component) {
  _inherits(StyleSheet, _Component);

  function StyleSheet() {
    _classCallCheck(this, StyleSheet);

    var _this = _possibleConstructorReturn(this, (StyleSheet.__proto__ || Object.getPrototypeOf(StyleSheet)).apply(this, arguments));

    _this._onChange = function () {
      var nextCSS = _this.context._radiumStyleKeeper.getCSS();

      if (nextCSS !== _this._css) {
        if (_this._root) {
          _this._root.innerHTML = nextCSS;
        } else {
          throw new Error('No root style object found, even after StyleSheet mount.');
        }
        _this._css = nextCSS;
      }
    };

    _this._css = _this.context._radiumStyleKeeper.getCSS();
    return _this;
  }

  _createClass(StyleSheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
      this._onChange();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._subscription) {
        this._subscription.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('style', {
        dangerouslySetInnerHTML: { __html: this._css },
        ref: function ref(c) {
          _this2._root = c;
        }
      });
    }
  }]);

  return StyleSheet;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.contextTypes = {
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
}, _temp);


/***/ }),

/***/ "../node_modules/radium/es/components/style.js":
/*!*****************************************************!*\
  !*** ../node_modules/radium/es/components/style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-rule-set-to-string */ "../node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Style = (_temp = _class = function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).apply(this, arguments));
  }

  _createClass(Style, [{
    key: '_buildStyles',
    value: function _buildStyles(styles) {
      var _this2 = this;

      var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

      var scopeSelector = this.props.scopeSelector;

      var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
        if (_typeof(styles[selector]) !== 'object') {
          accumulator[selector] = styles[selector];
        }

        return accumulator;
      }, {});
      var rootStyles = Object.keys(rootRules).length ? Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(scopeSelector || '', rootRules, userAgent) : '';

      return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
        var rules = styles[selector];

        if (selector === 'mediaQueries') {
          accumulator += _this2._buildMediaQueryString(rules);
        } else if (_typeof(styles[selector]) === 'object') {
          var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
            return scopeSelector + ' ' + part.trim();
          }).join(',') : selector;

          accumulator += Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(completeSelector, rules, userAgent);
        }

        return accumulator;
      }, '');
    }
  }, {
    key: '_buildMediaQueryString',
    value: function _buildMediaQueryString(stylesByMediaQuery) {
      var _this3 = this;

      var mediaQueryString = '';

      Object.keys(stylesByMediaQuery).forEach(function (query) {
        mediaQueryString += '@media ' + query + '{' + _this3._buildStyles(stylesByMediaQuery[query]) + '}';
      });

      return mediaQueryString;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.rules) {
        return null;
      }

      var styles = this._buildStyles(this.props.rules);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
    }
  }]);

  return Style;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]), _class.propTypes = {
  radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  rules: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  scopeSelector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
}, _class.contextTypes = {
  _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}, _class.defaultProps = {
  scopeSelector: ''
}, _temp);


/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "../node_modules/radium/es/css-rule-set-to-string.js":
/*!***********************************************************!*\
  !*** ../node_modules/radium/es/css-rule-set-to-string.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cssRuleSetToString; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "../node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "../node_modules/radium/es/camel-case-props-to-dash-case.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-object */ "../node_modules/radium/es/map-object.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefixer */ "../node_modules/radium/es/prefixer.js");





function createMarkupForStyles(style) {
  return Object.keys(style).map(function (property) {
    return property + ': ' + style[property] + ';';
  }).join('\n');
}

function cssRuleSetToString(selector, rules, userAgent) {
  if (!rules) {
    return '';
  }

  var rulesWithPx = Object(_map_object__WEBPACK_IMPORTED_MODULE_2__["default"])(rules, function (value, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, value);
  });
  var prefixedRules = Object(_prefixer__WEBPACK_IMPORTED_MODULE_3__["getPrefixedStyle"])(rulesWithPx, userAgent);
  var cssPrefixedRules = Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__["default"])(prefixedRules);
  var serializedRules = createMarkupForStyles(cssPrefixedRules);
  return selector + '{' + serializedRules + '}';
}

/***/ }),

/***/ "../node_modules/radium/es/enhancer.js":
/*!*********************************************!*\
  !*** ../node_modules/radium/es/enhancer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return enhanceWithRadium; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-keeper */ "../node_modules/radium/es/style-keeper.js");
/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-styles */ "../node_modules/radium/es/resolve-styles.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-radium-style-state */ "../node_modules/radium/es/get-radium-style-state.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

var RADIUM_PROTO = void 0;
var RADIUM_METHODS = void 0;

function copyProperties(source, target) {
  Object.getOwnPropertyNames(source).forEach(function (key) {
    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
      var descriptor = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, descriptor);
    }
  });
}

// Handle scenarios of:
// - Inherit from `React.Component` in any fashion
//   See: https://github.com/FormidableLabs/radium/issues/738
// - There's an explicit `render` field defined
function isStateless(component) {
  var proto = component.prototype || {};

  return !component.isReactComponent && !proto.isReactComponent && !component.render && !proto.render;
}

// Check if value is a real ES class in Native / Node code.
// See: https://stackoverflow.com/a/30760236
function isNativeClass(component) {
  return typeof component === 'function' && /^\s*class\s+/.test(component.toString());
}

// Handle es7 arrow functions on React class method names by detecting
// and transfering the instance method to original class prototype.
// (Using a copy of the class).
// See: https://github.com/FormidableLabs/radium/issues/738
function copyArrowFuncs(enhancedSelf, ComposedComponent) {
  RADIUM_METHODS.forEach(function (name) {
    var thisDesc = Object.getOwnPropertyDescriptor(enhancedSelf, name);
    var thisMethod = (thisDesc || {}).value;
    // Only care if have instance method.
    if (!thisMethod) {
      return;
    }
    var radiumDesc = Object.getOwnPropertyDescriptor(RADIUM_PROTO, name);
    var radiumProtoMethod = (radiumDesc || {}).value;
    var superProtoMethod = ComposedComponent.prototype[name];
    // Allow transfer when:
    // 1. have an instance method
    // 2. the super class prototype doesn't have any method
    // 3. it is not already the radium prototype's
    if (!superProtoMethod && thisMethod !== radiumProtoMethod) {
      // Transfer dynamic render component to Component prototype (copy).
      Object.defineProperty(ComposedComponent.prototype, name, thisDesc);
      // Remove instance property, leaving us to have a contrived
      // inheritance chain of (1) radium, (2) superclass.
      delete enhancedSelf[name];
    }
  });
}

function createEnhancedComponent(origComponent, ComposedComponent, config) {
  var _class, _temp;

  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
    _inherits(RadiumEnhancer, _ComposedComponent);

    function RadiumEnhancer() {
      _classCallCheck(this, RadiumEnhancer);

      var _this = _possibleConstructorReturn(this, (RadiumEnhancer.__proto__ || Object.getPrototypeOf(RadiumEnhancer)).apply(this, arguments));

      _this.state = _this.state || {};
      _this.state._radiumStyleState = {};
      _this._radiumIsMounted = true;

      var self = _this;

      // Handle es7 arrow functions on React class method
      copyArrowFuncs(self, ComposedComponent);
      return _this;
    }

    _createClass(RadiumEnhancer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (_get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this)) {
          _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this).call(this);
        }

        this._radiumIsMounted = false;

        if (this._radiumMouseUpListener) {
          this._radiumMouseUpListener.remove();
        }

        if (this._radiumMediaQueryListenersByQuery) {
          Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
            this._radiumMediaQueryListenersByQuery[query].remove();
          }, this);
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        var superChildContext = _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'getChildContext', this) ? _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'getChildContext', this).call(this) : {};

        if (!this.props.radiumConfig) {
          return superChildContext;
        }

        var newContext = _extends({}, superChildContext);

        if (this.props.radiumConfig) {
          newContext._radiumConfig = this.props.radiumConfig;
        }

        return newContext;
      }
    }, {
      key: 'render',
      value: function render() {
        var renderedElement = _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'render', this).call(this);
        var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

        if (config && currentConfig !== config) {
          currentConfig = _extends({}, config, currentConfig);
        }

        // do the style and interaction work

        var _resolveStyles = Object(_resolve_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(this, renderedElement, currentConfig),
            extraStateKeyMap = _resolveStyles.extraStateKeyMap,
            element = _resolveStyles.element;

        this._extraRadiumStateKeys = Object.keys(extraStateKeyMap);

        return element;
      }

      /* eslint-disable react/no-did-update-set-state, no-unused-vars */

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (_get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentDidUpdate', this)) {
          _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState, snapshot);
        }

        if (this._extraRadiumStateKeys.length > 0) {
          var trimmedRadiumState = this._extraRadiumStateKeys.reduce(function (state, key) {
            var extraStateKey = state[key],
                remainingState = _objectWithoutProperties(state, [key]);

            return remainingState;
          }, Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__["default"])(this));

          this._lastRadiumState = trimmedRadiumState;
          this.setState({ _radiumStyleState: trimmedRadiumState });
        }
      }
      /* eslint-enable react/no-did-update-set-state, no-unused-vars */

    }]);

    return RadiumEnhancer;
  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

  // Lazy infer the method names of the Enhancer.

  RADIUM_PROTO = RadiumEnhancer.prototype;
  RADIUM_METHODS = Object.getOwnPropertyNames(RADIUM_PROTO).filter(function (n) {
    return n !== 'constructor' && typeof RADIUM_PROTO[n] === 'function';
  });

  // Class inheritance uses Object.create and because of __proto__ issues
  // with IE <10 any static properties of the superclass aren't inherited and
  // so need to be manually populated.
  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
  copyProperties(origComponent, RadiumEnhancer);

  if (true) {
    // This also fixes React Hot Loader by exposing the original components top
    // level prototype methods on the Radium enhanced prototype as discussed in
    // https://github.com/FormidableLabs/radium/issues/219.
    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
  }

  // add Radium propTypes to enhanced component's propTypes
  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
    });
  }

  // copy display name to enhanced component
  RadiumEnhancer.displayName = origComponent.displayName || origComponent.name || 'Component';

  // handle context
  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
    _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
  });

  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
    _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
  });

  return RadiumEnhancer;
}

function createComposedFromStatelessFunc(ComposedComponent, component) {
  ComposedComponent = function (_Component) {
    _inherits(ComposedComponent, _Component);

    function ComposedComponent() {
      _classCallCheck(this, ComposedComponent);

      return _possibleConstructorReturn(this, (ComposedComponent.__proto__ || Object.getPrototypeOf(ComposedComponent)).apply(this, arguments));
    }

    _createClass(ComposedComponent, [{
      key: 'render',
      value: function render() {
        return component(this.props, this.context);
      }
    }]);

    return ComposedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
  ComposedComponent.displayName = component.displayName || component.name;
  return ComposedComponent;
}

function createComposedFromNativeClass(ComposedComponent) {
  ComposedComponent = function (OrigComponent) {
    function NewComponent() {
      // Use Reflect.construct to simulate 'new'
      var obj = Reflect.construct(OrigComponent, arguments, this.constructor);
      return obj;
    }
    // $FlowFixMe
    Reflect.setPrototypeOf(NewComponent.prototype, OrigComponent.prototype);
    // $FlowFixMe
    Reflect.setPrototypeOf(NewComponent, OrigComponent);
    return NewComponent;
  }(ComposedComponent);
  return ComposedComponent;
}

function enhanceWithRadium(configOrComposedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof configOrComposedComponent !== 'function') {
    return createFactoryFromConfig(config, configOrComposedComponent);
  }

  var origComponent = configOrComposedComponent;
  var _ComposedComponent2 = origComponent;

  // Radium is transpiled in npm, so it isn't really using es6 classes at
  // runtime.  However, the user of Radium might be.  In this case we have
  // to maintain forward compatibility with native es classes.
  if (isNativeClass(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromNativeClass(_ComposedComponent2);
  }

  // Handle stateless components
  if (isStateless(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromStatelessFunc(_ComposedComponent2, origComponent);
  }

  // Shallow copy composed if still original (we may mutate later).
  if (_ComposedComponent2 === origComponent) {
    _ComposedComponent2 = function (_ComposedComponent3) {
      _inherits(ComposedComponent, _ComposedComponent3);

      function ComposedComponent() {
        _classCallCheck(this, ComposedComponent);

        return _possibleConstructorReturn(this, (ComposedComponent.__proto__ || Object.getPrototypeOf(ComposedComponent)).apply(this, arguments));
      }

      return ComposedComponent;
    }(_ComposedComponent2);
  }

  return createEnhancedComponent(origComponent, _ComposedComponent2, config);
}

function createFactoryFromConfig(config, configOrComposedComponent) {
  var newConfig = _extends({}, config, configOrComposedComponent);
  return function (configOrComponent) {
    return enhanceWithRadium(configOrComponent, newConfig);
  };
}

/***/ }),

/***/ "../node_modules/radium/es/get-radium-style-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/radium/es/get-radium-style-state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRadiumStyleState = function getRadiumStyleState(component) {
  return component._lastRadiumState || component.state && component.state._radiumStyleState || {};
};

/* harmony default export */ __webpack_exports__["default"] = (getRadiumStyleState);

/***/ }),

/***/ "../node_modules/radium/es/get-state-key.js":
/*!**************************************************!*\
  !*** ../node_modules/radium/es/get-state-key.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getStateKey = function getStateKey(renderedElement) {
  return typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
};

/* harmony default export */ __webpack_exports__["default"] = (getStateKey);

/***/ }),

/***/ "../node_modules/radium/es/get-state.js":
/*!**********************************************!*\
  !*** ../node_modules/radium/es/get-state.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-state-key */ "../node_modules/radium/es/clean-state-key.js");


var getState = function getState(state, elementKey, value) {
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_0__["default"])(elementKey);

  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
};

/* harmony default export */ __webpack_exports__["default"] = (getState);

/***/ }),

/***/ "../node_modules/radium/es/hash.js":
/*!*****************************************!*\
  !*** ../node_modules/radium/es/hash.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });


// a simple djb2 hash based on hash-string:
// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
// returns a hex-encoded hash
function hash(text) {
  if (!text) {
    return '';
  }

  var hashValue = 5381;
  var index = text.length - 1;

  while (index) {
    hashValue = hashValue * 33 ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}

/***/ }),

/***/ "../node_modules/radium/es/index.js":
/*!******************************************!*\
  !*** ../node_modules/radium/es/index.js ***!
  \******************************************/
/*! exports provided: default, Plugins, Style, StyleRoot, getState, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enhancer */ "../node_modules/radium/es/enhancer.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "../node_modules/radium/es/plugins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style */ "../node_modules/radium/es/components/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _components_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_style_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style-root */ "../node_modules/radium/es/components/style-root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-state */ "../node_modules/radium/es/get-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _get_state__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframes */ "../node_modules/radium/es/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-styles */ "../node_modules/radium/es/resolve-styles.js");








function Radium(ComposedComponent) {
  return Object(_enhancer__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposedComponent);
}

// Legacy object support.
//
// Normally it would be disfavored to attach these to the `Radium` object
// because it defeats tree-shaking, using instead the ESM exports. But,
// the `Radium` `Enhancer` uses **all** of these, so there's no extra "cost"
// to them being explicitly on the `Radium` object.
Radium.Plugins = _plugins__WEBPACK_IMPORTED_MODULE_1__["default"];
Radium.Style = _components_style__WEBPACK_IMPORTED_MODULE_2__["default"];
Radium.StyleRoot = _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"];
Radium.getState = _get_state__WEBPACK_IMPORTED_MODULE_4__["default"];
Radium.keyframes = _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"];

if (true) {
  Radium.TestMode = {
    clearState: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__clearStateForTests,
    disable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, false),
    enable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, true)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Radium);

// ESM re-exports


/***/ }),

/***/ "../node_modules/radium/es/keyframes.js":
/*!**********************************************!*\
  !*** ../node_modules/radium/es/keyframes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframes; });
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-rule-set-to-string */ "../node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash */ "../node_modules/radium/es/hash.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefixer */ "../node_modules/radium/es/prefixer.js");




function keyframes(keyframeRules, name) {
  return {
    __radiumKeyframes: true,
    __process: function __process(userAgent) {
      var keyframesPrefixed = Object(_prefixer__WEBPACK_IMPORTED_MODULE_2__["getPrefixedKeyframes"])(userAgent);
      var rules = Object.keys(keyframeRules).map(function (percentage) {
        return Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(percentage, keyframeRules[percentage], userAgent);
      }).join('\n');
      var animationName = (name ? name + '-' : '') + 'radium-animation-' + Object(_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(rules);
      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
      return { css: css, animationName: animationName };
    }
  };
}

/***/ }),

/***/ "../node_modules/radium/es/map-object.js":
/*!***********************************************!*\
  !*** ../node_modules/radium/es/map-object.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
function mapObject(object, mapper) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapper(object[key], key);
    return result;
  }, {});
}

/***/ }),

/***/ "../node_modules/radium/es/merge-styles.js":
/*!*************************************************!*\
  !*** ../node_modules/radium/es/merge-styles.js ***!
  \*************************************************/
/*! exports provided: isNestedStyle, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNestedStyle", function() { return isNestedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNestedStyle(value) {
  // Don't merge objects overriding toString, since they should be converted
  // to string values.
  return value && value.constructor === Object && value.toString === Object.prototype.toString;
}

// Merge style objects. Deep merge plain object values.
function mergeStyles(styles) {
  var result = {};

  styles.forEach(function (style) {
    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
      return;
    }

    if (Array.isArray(style)) {
      style = mergeStyles(style);
    }

    Object.keys(style).forEach(function (key) {
      // Simple case, nothing nested
      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
        result[key] = style[key];
        return;
      }

      // If nested media, don't merge the nested styles, append a space to the
      // end (benign when converted to CSS). This way we don't end up merging
      // media queries that appear later in the chain with those that appear
      // earlier.
      if (key.indexOf('@media') === 0) {
        var newKey = key;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          newKey += ' ';
          if (!result[newKey]) {
            result[newKey] = style[key];
            return;
          }
        }
      }

      // Merge all other nested styles recursively
      result[key] = mergeStyles([result[key], style[key]]);
    });
  });

  return result;
}

/***/ }),

/***/ "../node_modules/radium/es/plugins/check-props-plugin.js":
/*!***************************************************************!*\
  !*** ../node_modules/radium/es/plugins/check-props-plugin.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkProps = function checkProps() {};

if (true) {
  // Warn if you use longhand and shorthand properties in the same style
  // object.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

  var shorthandPropertyExpansions = {
    background: ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
    border: ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
    borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
    borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
    font: ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
    listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
  };

  _checkProps = function checkProps(config) {
    var componentName = config.componentName,
        style = config.style;

    if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
      return;
    }

    var styleKeys = Object.keys(style);
    styleKeys.forEach(function (styleKey) {
      if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
        return styleKeys.indexOf(sp) !== -1;
      })) {
        if (true) {
          /* eslint-disable no-console */
          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
          /* eslint-enable no-console */
        }
      }
    });

    styleKeys.forEach(function (k) {
      return _checkProps(_extends({}, config, { style: style[k] }));
    });
    return;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_checkProps);

/***/ }),

/***/ "../node_modules/radium/es/plugins/index.js":
/*!**************************************************!*\
  !*** ../node_modules/radium/es/plugins/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-props-plugin */ "../node_modules/radium/es/plugins/check-props-plugin.js");
/* harmony import */ var _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyframes-plugin */ "../node_modules/radium/es/plugins/keyframes-plugin.js");
/* harmony import */ var _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-style-array-plugin */ "../node_modules/radium/es/plugins/merge-style-array-plugin.js");
/* harmony import */ var _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-plugin */ "../node_modules/radium/es/plugins/prefix-plugin.js");
/* harmony import */ var _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-nested-styles-plugin */ "../node_modules/radium/es/plugins/remove-nested-styles-plugin.js");
/* harmony import */ var _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-interaction-styles-plugin */ "../node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js");
/* harmony import */ var _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-media-queries-plugin */ "../node_modules/radium/es/plugins/resolve-media-queries-plugin.js");
/* harmony import */ var _visited_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visited-plugin */ "../node_modules/radium/es/plugins/visited-plugin.js");



/* eslint-disable block-scoped-const */









/* harmony default export */ __webpack_exports__["default"] = ({
  checkProps: _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__["default"],
  keyframes: _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__["default"],
  mergeStyleArray: _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__["default"],
  prefix: _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeNestedStyles: _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__["default"],
  resolveInteractionStyles: _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolveMediaQueries: _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__["default"],
  visited: _visited_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "../node_modules/radium/es/plugins/keyframes-plugin.js":
/*!*************************************************************!*\
  !*** ../node_modules/radium/es/plugins/keyframes-plugin.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframesPlugin; });
function keyframesPlugin(_ref // eslint-disable-line no-shadow
) {
  var addCSS = _ref.addCSS,
      config = _ref.config,
      style = _ref.style;

  var processKeyframeStyle = function processKeyframeStyle(value) {
    var keyframesValue = value;

    var _keyframesValue$__pro = keyframesValue.__process(config.userAgent),
        animationName = _keyframesValue$__pro.animationName,
        css = _keyframesValue$__pro.css;

    addCSS(css);
    return animationName;
  };

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    var isKeyframeArray = Array.isArray(value);

    if (key === 'animationName' && value && (value.__radiumKeyframes || isKeyframeArray)) {
      if (isKeyframeArray) {
        value = value.map(processKeyframeStyle).join(', ');
      } else {
        value = processKeyframeStyle(value);
      }
    }

    newStyleInProgress[key] = value;
    return newStyleInProgress;
  }, {});
  return { style: newStyle };
}

/***/ }),

/***/ "../node_modules/radium/es/plugins/merge-style-array-plugin.js":
/*!*********************************************************************!*\
  !*** ../node_modules/radium/es/plugins/merge-style-array-plugin.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
  var style = _ref.style,
      mergeStyles = _ref.mergeStyles;

  // eslint-disable-line no-shadow
  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
  return { style: newStyle };
};

/* harmony default export */ __webpack_exports__["default"] = (mergeStyleArrayPlugin);

/***/ }),

/***/ "../node_modules/radium/es/plugins/mouse-up-listener.js":
/*!**************************************************************!*\
  !*** ../node_modules/radium/es/plugins/mouse-up-listener.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _callbacks = [];
var _mouseUpListenerIsActive = false;

function _handleMouseUp() {
  _callbacks.forEach(function (callback) {
    callback();
  });
}

var subscribe = function subscribe(callback) {
  if (_callbacks.indexOf(callback) === -1) {
    _callbacks.push(callback);
  }

  if (!_mouseUpListenerIsActive) {
    window.addEventListener('mouseup', _handleMouseUp);
    _mouseUpListenerIsActive = true;
  }

  return {
    remove: function remove() {
      var index = _callbacks.indexOf(callback);
      _callbacks.splice(index, 1);

      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
        window.removeEventListener('mouseup', _handleMouseUp);
        _mouseUpListenerIsActive = false;
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe: subscribe,
  __triggerForTests: _handleMouseUp
});

/***/ }),

/***/ "../node_modules/radium/es/plugins/prefix-plugin.js":
/*!**********************************************************!*\
  !*** ../node_modules/radium/es/plugins/prefix-plugin.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixPlugin; });
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefixer */ "../node_modules/radium/es/prefixer.js");




function prefixPlugin(_ref // eslint-disable-line no-shadow
) {
  var config = _ref.config,
      style = _ref.style;

  var newStyle = Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["getPrefixedStyle"])(style, config.userAgent);
  return { style: newStyle };
}

/***/ }),

/***/ "../node_modules/radium/es/plugins/remove-nested-styles-plugin.js":
/*!************************************************************************!*\
  !*** ../node_modules/radium/es/plugins/remove-nested-styles-plugin.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeNestedStyles; });


function removeNestedStyles(_ref) {
  var isNestedStyle = _ref.isNestedStyle,
      style = _ref.style;

  // eslint-disable-line no-shadow
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (!isNestedStyle(value)) {
      newStyleInProgress[key] = value;
    }
    return newStyleInProgress;
  }, {});

  return {
    style: newStyle
  };
}

/***/ }),

/***/ "../node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js":
/*!******************************************************************************!*\
  !*** ../node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-up-listener */ "../node_modules/radium/es/plugins/mouse-up-listener.js");




var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
};

var resolveInteractionStyles = function resolveInteractionStyles(config) {
  var ExecutionEnvironment = config.ExecutionEnvironment,
      getComponentField = config.getComponentField,
      getState = config.getState,
      mergeStyles = config.mergeStyles,
      props = config.props,
      setState = config.setState,
      style = config.style;


  var newComponentFields = {};
  var newProps = {};

  // Only add handlers if necessary
  if (style[':hover']) {
    // Always call the existing handler if one is already defined.
    // This code, and the very similar ones below, could be abstracted a bit
    // more, but it hurts readability IMO.
    var existingOnMouseEnter = props.onMouseEnter;
    newProps.onMouseEnter = function (e) {
      existingOnMouseEnter && existingOnMouseEnter(e);
      setState(':hover', true);
    };

    var existingOnMouseLeave = props.onMouseLeave;
    newProps.onMouseLeave = function (e) {
      existingOnMouseLeave && existingOnMouseLeave(e);
      setState(':hover', false);
    };
  }

  if (style[':active']) {
    var existingOnMouseDown = props.onMouseDown;
    newProps.onMouseDown = function (e) {
      existingOnMouseDown && existingOnMouseDown(e);
      newComponentFields._lastMouseDown = Date.now();
      setState(':active', 'viamousedown');
    };

    var existingOnKeyDown = props.onKeyDown;
    newProps.onKeyDown = function (e) {
      existingOnKeyDown && existingOnKeyDown(e);
      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', 'viakeydown');
      }
    };

    var existingOnKeyUp = props.onKeyUp;
    newProps.onKeyUp = function (e) {
      existingOnKeyUp && existingOnKeyUp(e);
      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', false);
      }
    };
  }

  if (style[':focus']) {
    var existingOnFocus = props.onFocus;
    newProps.onFocus = function (e) {
      existingOnFocus && existingOnFocus(e);
      setState(':focus', true);
    };

    var existingOnBlur = props.onBlur;
    newProps.onBlur = function (e) {
      existingOnBlur && existingOnBlur(e);
      setState(':focus', false);
    };
  }

  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
    newComponentFields._radiumMouseUpListener = _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
        if (getState(':active', key) === 'viamousedown') {
          setState(':active', false, key);
        }
      });
    });
  }

  // Merge the styles in the order they were defined
  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
    return _isInteractiveStyleField(name) && getState(name);
  }).map(function (name) {
    return style[name];
  });

  var newStyle = mergeStyles([style].concat(interactionStyles));

  // Remove interactive styles
  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
      styleWithoutInteractions[name] = newStyle[name];
    }
    return styleWithoutInteractions;
  }, {});

  return {
    componentFields: newComponentFields,
    props: newProps,
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resolveInteractionStyles);

/***/ }),

/***/ "../node_modules/radium/es/plugins/resolve-media-queries-plugin.js":
/*!*************************************************************************!*\
  !*** ../node_modules/radium/es/plugins/resolve-media-queries-plugin.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveMediaQueries; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _windowMatchMedia = void 0;
function _getWindowMatchMedia(ExecutionEnvironment) {
  if (_windowMatchMedia === undefined) {
    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
      return window.matchMedia(mediaQueryString);
    } || null;
  }
  return _windowMatchMedia;
}

function _filterObject(obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(obj[key], key);
  }).reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function _removeMediaQueries(style) {
  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
    if (key.indexOf('@media') !== 0) {
      styleWithoutMedia[key] = style[key];
    }
    return styleWithoutMedia;
  }, {});
}

function _topLevelRulesToCSS(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      isNestedStyle = _ref.isNestedStyle,
      style = _ref.style,
      userAgent = _ref.userAgent;

  var className = '';
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
      return !isNestedStyle(value);
    }));

    if (!Object.keys(topLevelRules).length) {
      return;
    }

    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

    // CSS classes cannot start with a number
    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

    addCSS(css);

    className += (className ? ' ' : '') + mediaQueryClassName;
  });
  return className;
}

function _subscribeToMediaQuery(_ref2) {
  var listener = _ref2.listener,
      listenersByQuery = _ref2.listenersByQuery,
      matchMedia = _ref2.matchMedia,
      mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery,
      query = _ref2.query;

  query = query.replace('@media ', '');

  var mql = mediaQueryListsByQuery[query];
  if (!mql && matchMedia) {
    mediaQueryListsByQuery[query] = mql = matchMedia(query);
  }

  if (!listenersByQuery || !listenersByQuery[query]) {
    mql.addListener(listener);

    listenersByQuery[query] = {
      remove: function remove() {
        mql.removeListener(listener);
      }
    };
  }
  return mql;
}

function resolveMediaQueries(_ref3) {
  var ExecutionEnvironment = _ref3.ExecutionEnvironment,
      addCSS = _ref3.addCSS,
      appendImportantToEachValue = _ref3.appendImportantToEachValue,
      config = _ref3.config,
      cssRuleSetToString = _ref3.cssRuleSetToString,
      getComponentField = _ref3.getComponentField,
      getGlobalState = _ref3.getGlobalState,
      hash = _ref3.hash,
      isNestedStyle = _ref3.isNestedStyle,
      mergeStyles = _ref3.mergeStyles,
      props = _ref3.props,
      setState = _ref3.setState,
      style = _ref3.style;

  // eslint-disable-line no-shadow
  var newStyle = _removeMediaQueries(style);
  var mediaQueryClassNames = _topLevelRulesToCSS({
    addCSS: addCSS,
    appendImportantToEachValue: appendImportantToEachValue,
    cssRuleSetToString: cssRuleSetToString,
    hash: hash,
    isNestedStyle: isNestedStyle,
    style: style,
    userAgent: config.userAgent
  });

  var newProps = mediaQueryClassNames ? {
    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
  } : null;

  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

  if (!matchMedia) {
    return {
      props: newProps,
      style: newStyle
    };
  }

  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var nestedRules = _filterObject(style[query], isNestedStyle);

    if (!Object.keys(nestedRules).length) {
      return;
    }

    var mql = _subscribeToMediaQuery({
      listener: function listener() {
        return setState(query, mql.matches, '_all');
      },
      listenersByQuery: listenersByQuery,
      matchMedia: matchMedia,
      mediaQueryListsByQuery: mediaQueryListsByQuery,
      query: query
    });

    // Apply media query states
    if (mql.matches) {
      newStyle = mergeStyles([newStyle, nestedRules]);
    }
  });

  return {
    componentFields: {
      _radiumMediaQueryListenersByQuery: listenersByQuery
    },
    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
    props: newProps,
    style: newStyle
  };
}

/***/ }),

/***/ "../node_modules/radium/es/plugins/visited-plugin.js":
/*!***********************************************************!*\
  !*** ../node_modules/radium/es/plugins/visited-plugin.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return visited; });


function visited(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      config = _ref.config,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      props = _ref.props,
      style = _ref.style;

  // eslint-disable-line no-shadow
  var className = props.className;

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (key === ':visited') {
      value = appendImportantToEachValue(value);
      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
      var visitedClassName = 'rad-' + hash(ruleCSS);
      var css = '.' + visitedClassName + ':visited' + ruleCSS;

      addCSS(css);
      className = (className ? className + ' ' : '') + visitedClassName;
    } else {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});

  return {
    props: className === props.className ? null : { className: className },
    style: newStyle
  };
}

/***/ }),

/***/ "../node_modules/radium/es/prefix-data/dynamic.js":
/*!********************************************************!*\
  !*** ../node_modules/radium/es/prefix-data/dynamic.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/calc */ "../node_modules/inline-style-prefixer/dynamic/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/crossFade */ "../node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/cursor */ "../node_modules/inline-style-prefixer/dynamic/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/filter */ "../node_modules/inline-style-prefixer/dynamic/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flex */ "../node_modules/inline-style-prefixer/dynamic/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxIE */ "../node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxOld */ "../node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/gradient */ "../node_modules/inline-style-prefixer/dynamic/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/imageSet */ "../node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/position */ "../node_modules/inline-style-prefixer/dynamic/plugins/position.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/sizing */ "../node_modules/inline-style-prefixer/dynamic/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/transition */ "../node_modules/inline-style-prefixer/dynamic/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);













/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    chrome: {
      transform: 35,
      transformOrigin: 35,
      transformOriginX: 35,
      transformOriginY: 35,
      backfaceVisibility: 35,
      perspective: 35,
      perspectiveOrigin: 35,
      transformStyle: 35,
      transformOriginZ: 35,
      animation: 42,
      animationDelay: 42,
      animationDirection: 42,
      animationFillMode: 42,
      animationDuration: 42,
      animationIterationCount: 42,
      animationName: 42,
      animationPlayState: 42,
      animationTimingFunction: 42,
      appearance: 66,
      userSelect: 53,
      fontKerning: 32,
      textEmphasisPosition: 66,
      textEmphasis: 66,
      textEmphasisStyle: 66,
      textEmphasisColor: 66,
      boxDecorationBreak: 66,
      clipPath: 54,
      maskImage: 66,
      maskMode: 66,
      maskRepeat: 66,
      maskPosition: 66,
      maskClip: 66,
      maskOrigin: 66,
      maskSize: 66,
      maskComposite: 66,
      mask: 66,
      maskBorderSource: 66,
      maskBorderMode: 66,
      maskBorderSlice: 66,
      maskBorderWidth: 66,
      maskBorderOutset: 66,
      maskBorderRepeat: 66,
      maskBorder: 66,
      maskType: 66,
      textDecorationStyle: 56,
      textDecorationSkip: 56,
      textDecorationLine: 56,
      textDecorationColor: 56,
      filter: 52,
      fontFeatureSettings: 47,
      breakAfter: 49,
      breakBefore: 49,
      breakInside: 49,
      columnCount: 49,
      columnFill: 49,
      columnGap: 49,
      columnRule: 49,
      columnRuleColor: 49,
      columnRuleStyle: 49,
      columnRuleWidth: 49,
      columns: 49,
      columnSpan: 49,
      columnWidth: 49,
      writingMode: 47
    },
    safari: {
      flex: 8,
      flexBasis: 8,
      flexDirection: 8,
      flexGrow: 8,
      flexFlow: 8,
      flexShrink: 8,
      flexWrap: 8,
      alignContent: 8,
      alignItems: 8,
      alignSelf: 8,
      justifyContent: 8,
      order: 8,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8,
      transformOrigin: 8,
      transformOriginX: 8,
      transformOriginY: 8,
      backfaceVisibility: 8,
      perspective: 8,
      perspectiveOrigin: 8,
      transformStyle: 8,
      transformOriginZ: 8,
      animation: 8,
      animationDelay: 8,
      animationDirection: 8,
      animationFillMode: 8,
      animationDuration: 8,
      animationIterationCount: 8,
      animationName: 8,
      animationPlayState: 8,
      animationTimingFunction: 8,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 9,
      scrollSnapType: 10.1,
      scrollSnapPointsX: 10.1,
      scrollSnapPointsY: 10.1,
      scrollSnapDestination: 10.1,
      scrollSnapCoordinate: 10.1,
      textEmphasisPosition: 7,
      textEmphasis: 7,
      textEmphasisStyle: 7,
      textEmphasisColor: 7,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8,
      breakAfter: 8,
      breakInside: 8,
      regionFragment: 11,
      columnCount: 8,
      columnFill: 8,
      columnGap: 8,
      columnRule: 8,
      columnRuleColor: 8,
      columnRuleStyle: 8,
      columnRuleWidth: 8,
      columns: 8,
      columnSpan: 8,
      columnWidth: 8,
      writingMode: 10.1
    },
    firefox: {
      appearance: 60,
      userSelect: 60,
      boxSizing: 28,
      textAlignLast: 48,
      textDecorationStyle: 35,
      textDecorationSkip: 35,
      textDecorationLine: 35,
      textDecorationColor: 35,
      tabSize: 60,
      hyphens: 42,
      fontFeatureSettings: 33,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    opera: {
      flex: 16,
      flexBasis: 16,
      flexDirection: 16,
      flexGrow: 16,
      flexFlow: 16,
      flexShrink: 16,
      flexWrap: 16,
      alignContent: 16,
      alignItems: 16,
      alignSelf: 16,
      justifyContent: 16,
      order: 16,
      transform: 22,
      transformOrigin: 22,
      transformOriginX: 22,
      transformOriginY: 22,
      backfaceVisibility: 22,
      perspective: 22,
      perspectiveOrigin: 22,
      transformStyle: 22,
      transformOriginZ: 22,
      animation: 29,
      animationDelay: 29,
      animationDirection: 29,
      animationFillMode: 29,
      animationDuration: 29,
      animationIterationCount: 29,
      animationName: 29,
      animationPlayState: 29,
      animationTimingFunction: 29,
      appearance: 50,
      userSelect: 40,
      fontKerning: 19,
      textEmphasisPosition: 50,
      textEmphasis: 50,
      textEmphasisStyle: 50,
      textEmphasisColor: 50,
      boxDecorationBreak: 50,
      clipPath: 41,
      maskImage: 50,
      maskMode: 50,
      maskRepeat: 50,
      maskPosition: 50,
      maskClip: 50,
      maskOrigin: 50,
      maskSize: 50,
      maskComposite: 50,
      mask: 50,
      maskBorderSource: 50,
      maskBorderMode: 50,
      maskBorderSlice: 50,
      maskBorderWidth: 50,
      maskBorderOutset: 50,
      maskBorderRepeat: 50,
      maskBorder: 50,
      maskType: 50,
      textDecorationStyle: 43,
      textDecorationSkip: 43,
      textDecorationLine: 43,
      textDecorationColor: 43,
      filter: 39,
      fontFeatureSettings: 34,
      breakAfter: 36,
      breakBefore: 36,
      breakInside: 36,
      columnCount: 36,
      columnFill: 36,
      columnGap: 36,
      columnRule: 36,
      columnRuleColor: 36,
      columnRuleStyle: 36,
      columnRuleWidth: 36,
      columns: 36,
      columnSpan: 36,
      columnWidth: 36,
      writingMode: 34
    },
    ie: {
      flex: 10,
      flexDirection: 10,
      flexFlow: 10,
      flexWrap: 10,
      transform: 9,
      transformOrigin: 9,
      transformOriginX: 9,
      transformOriginY: 9,
      userSelect: 11,
      wrapFlow: 11,
      wrapThrough: 11,
      wrapMargin: 11,
      scrollSnapType: 11,
      scrollSnapPointsX: 11,
      scrollSnapPointsY: 11,
      scrollSnapDestination: 11,
      scrollSnapCoordinate: 11,
      touchAction: 10,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 11,
      breakAfter: 11,
      breakInside: 11,
      regionFragment: 11,
      gridTemplateColumns: 11,
      gridTemplateRows: 11,
      gridTemplateAreas: 11,
      gridTemplate: 11,
      gridAutoColumns: 11,
      gridAutoRows: 11,
      gridAutoFlow: 11,
      grid: 11,
      gridRowStart: 11,
      gridColumnStart: 11,
      gridRowEnd: 11,
      gridRow: 11,
      gridColumn: 11,
      gridColumnEnd: 11,
      gridColumnGap: 11,
      gridRowGap: 11,
      gridArea: 11,
      gridGap: 11,
      textSizeAdjust: 11,
      writingMode: 11
    },
    edge: {
      userSelect: 17,
      wrapFlow: 17,
      wrapThrough: 17,
      wrapMargin: 17,
      scrollSnapType: 17,
      scrollSnapPointsX: 17,
      scrollSnapPointsY: 17,
      scrollSnapDestination: 17,
      scrollSnapCoordinate: 17,
      hyphens: 17,
      flowInto: 17,
      flowFrom: 17,
      breakBefore: 17,
      breakAfter: 17,
      breakInside: 17,
      regionFragment: 17,
      gridTemplateColumns: 15,
      gridTemplateRows: 15,
      gridTemplateAreas: 15,
      gridTemplate: 15,
      gridAutoColumns: 15,
      gridAutoRows: 15,
      gridAutoFlow: 15,
      grid: 15,
      gridRowStart: 15,
      gridColumnStart: 15,
      gridRowEnd: 15,
      gridRow: 15,
      gridColumn: 15,
      gridColumnEnd: 15,
      gridColumnGap: 15,
      gridRowGap: 15,
      gridArea: 15,
      gridGap: 15
    },
    ios_saf: {
      flex: 8.1,
      flexBasis: 8.1,
      flexDirection: 8.1,
      flexGrow: 8.1,
      flexFlow: 8.1,
      flexShrink: 8.1,
      flexWrap: 8.1,
      alignContent: 8.1,
      alignItems: 8.1,
      alignSelf: 8.1,
      justifyContent: 8.1,
      order: 8.1,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8.1,
      transformOrigin: 8.1,
      transformOriginX: 8.1,
      transformOriginY: 8.1,
      backfaceVisibility: 8.1,
      perspective: 8.1,
      perspectiveOrigin: 8.1,
      transformStyle: 8.1,
      transformOriginZ: 8.1,
      animation: 8.1,
      animationDelay: 8.1,
      animationDirection: 8.1,
      animationFillMode: 8.1,
      animationDuration: 8.1,
      animationIterationCount: 8.1,
      animationName: 8.1,
      animationPlayState: 8.1,
      animationTimingFunction: 8.1,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 11,
      scrollSnapType: 10.3,
      scrollSnapPointsX: 10.3,
      scrollSnapPointsY: 10.3,
      scrollSnapDestination: 10.3,
      scrollSnapCoordinate: 10.3,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textSizeAdjust: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8.1,
      breakAfter: 8.1,
      breakInside: 8.1,
      regionFragment: 11,
      columnCount: 8.1,
      columnFill: 8.1,
      columnGap: 8.1,
      columnRule: 8.1,
      columnRuleColor: 8.1,
      columnRuleStyle: 8.1,
      columnRuleWidth: 8.1,
      columns: 8.1,
      columnSpan: 8.1,
      columnWidth: 8.1,
      writingMode: 10.3
    },
    android: {
      borderImage: 4.2,
      borderImageOutset: 4.2,
      borderImageRepeat: 4.2,
      borderImageSlice: 4.2,
      borderImageSource: 4.2,
      borderImageWidth: 4.2,
      flex: 4.2,
      flexBasis: 4.2,
      flexDirection: 4.2,
      flexGrow: 4.2,
      flexFlow: 4.2,
      flexShrink: 4.2,
      flexWrap: 4.2,
      alignContent: 4.2,
      alignItems: 4.2,
      alignSelf: 4.2,
      justifyContent: 4.2,
      order: 4.2,
      transition: 4.2,
      transitionDelay: 4.2,
      transitionDuration: 4.2,
      transitionProperty: 4.2,
      transitionTimingFunction: 4.2,
      transform: 4.4,
      transformOrigin: 4.4,
      transformOriginX: 4.4,
      transformOriginY: 4.4,
      backfaceVisibility: 4.4,
      perspective: 4.4,
      perspectiveOrigin: 4.4,
      transformStyle: 4.4,
      transformOriginZ: 4.4,
      animation: 4.4,
      animationDelay: 4.4,
      animationDirection: 4.4,
      animationFillMode: 4.4,
      animationDuration: 4.4,
      animationIterationCount: 4.4,
      animationName: 4.4,
      animationPlayState: 4.4,
      animationTimingFunction: 4.4,
      appearance: 62,
      userSelect: 4.4,
      fontKerning: 4.4,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      clipPath: 4.4,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62,
      filter: 4.4,
      fontFeatureSettings: 4.4,
      breakAfter: 4.4,
      breakBefore: 4.4,
      breakInside: 4.4,
      columnCount: 4.4,
      columnFill: 4.4,
      columnGap: 4.4,
      columnRule: 4.4,
      columnRuleColor: 4.4,
      columnRuleStyle: 4.4,
      columnRuleWidth: 4.4,
      columns: 4.4,
      columnSpan: 4.4,
      columnWidth: 4.4,
      writingMode: 4.4
    },
    and_chr: {
      appearance: 62,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62
    },
    and_uc: {
      flex: 11.4,
      flexBasis: 11.4,
      flexDirection: 11.4,
      flexGrow: 11.4,
      flexFlow: 11.4,
      flexShrink: 11.4,
      flexWrap: 11.4,
      alignContent: 11.4,
      alignItems: 11.4,
      alignSelf: 11.4,
      justifyContent: 11.4,
      order: 11.4,
      transform: 11.4,
      transformOrigin: 11.4,
      transformOriginX: 11.4,
      transformOriginY: 11.4,
      backfaceVisibility: 11.4,
      perspective: 11.4,
      perspectiveOrigin: 11.4,
      transformStyle: 11.4,
      transformOriginZ: 11.4,
      animation: 11.4,
      animationDelay: 11.4,
      animationDirection: 11.4,
      animationFillMode: 11.4,
      animationDuration: 11.4,
      animationIterationCount: 11.4,
      animationName: 11.4,
      animationPlayState: 11.4,
      animationTimingFunction: 11.4,
      appearance: 11.4,
      userSelect: 11.4,
      textEmphasisPosition: 11.4,
      textEmphasis: 11.4,
      textEmphasisStyle: 11.4,
      textEmphasisColor: 11.4,
      clipPath: 11.4,
      maskImage: 11.4,
      maskMode: 11.4,
      maskRepeat: 11.4,
      maskPosition: 11.4,
      maskClip: 11.4,
      maskOrigin: 11.4,
      maskSize: 11.4,
      maskComposite: 11.4,
      mask: 11.4,
      maskBorderSource: 11.4,
      maskBorderMode: 11.4,
      maskBorderSlice: 11.4,
      maskBorderWidth: 11.4,
      maskBorderOutset: 11.4,
      maskBorderRepeat: 11.4,
      maskBorder: 11.4,
      maskType: 11.4,
      textSizeAdjust: 11.4,
      filter: 11.4,
      hyphens: 11.4,
      fontFeatureSettings: 11.4,
      breakAfter: 11.4,
      breakBefore: 11.4,
      breakInside: 11.4,
      columnCount: 11.4,
      columnFill: 11.4,
      columnGap: 11.4,
      columnRule: 11.4,
      columnRuleColor: 11.4,
      columnRuleStyle: 11.4,
      columnRuleWidth: 11.4,
      columns: 11.4,
      columnSpan: 11.4,
      columnWidth: 11.4,
      writingMode: 11.4
    },
    op_mini: {}
  }
});

/***/ }),

/***/ "../node_modules/radium/es/prefix-data/static.js":
/*!*******************************************************!*\
  !*** ../node_modules/radium/es/prefix-data/static.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/calc */ "../node_modules/inline-style-prefixer/static/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "../node_modules/inline-style-prefixer/static/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "../node_modules/inline-style-prefixer/static/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "../node_modules/inline-style-prefixer/static/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "../node_modules/inline-style-prefixer/static/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxIE */ "../node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "../node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "../node_modules/inline-style-prefixer/static/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "../node_modules/inline-style-prefixer/static/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "../node_modules/inline-style-prefixer/static/plugins/position.js");
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "../node_modules/inline-style-prefixer/static/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "../node_modules/inline-style-prefixer/static/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];

/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    transform: wms,
    transformOrigin: wms,
    transformOriginX: wms,
    transformOriginY: wms,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    fontKerning: w,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: wm,
    textDecorationSkip: wm,
    textDecorationLine: wm,
    textDecorationColor: wm,
    filter: w,
    fontFeatureSettings: wm,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
    backdropFilter: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    boxSizing: m,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w
  }
});

/***/ }),

/***/ "../node_modules/radium/es/prefixer.js":
/*!*********************************************!*\
  !*** ../node_modules/radium/es/prefixer.js ***!
  \*********************************************/
/*! exports provided: getPrefixedKeyframes, getPrefixedStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedKeyframes", function() { return getPrefixedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedStyle", function() { return getPrefixedStyle; });
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/createPrefixer */ "../node_modules/inline-style-prefixer/static/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/createPrefixer */ "../node_modules/inline-style-prefixer/dynamic/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "../node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefix_data_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-data/static */ "../node_modules/radium/es/prefix-data/static.js");
/* harmony import */ var _prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prefix-data/dynamic */ "../node_modules/radium/es/prefix-data/dynamic.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "../node_modules/radium/es/camel-case-props-to-dash-case.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Based on https://github.com/jsstyles/css-vendor, but without having to
 * convert between different cases all the time.
 *
 * 
 */










var prefixAll = inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_prefix_data_static__WEBPACK_IMPORTED_MODULE_3__["default"]);
var InlineStylePrefixer = inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default()(_prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"], prefixAll);

function transformValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var value = style[key];
    if (Array.isArray(value)) {
      value = value.join(';' + key + ':');
    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
      value = value.toString();
    }

    newStyle[key] = value;
    return newStyle;
  }, {});
}

// Flatten prefixed values that are arrays to strings.
//
// We get prefixed styles back in the form of:
// - `display: "flex"` OR
// - `display: "-webkit-flex"` OR
// - `display: [/* ... */, "-webkit-flex", "flex"]
//
// The last form is problematic for eventual use in the browser and server
// render. More confusingly, we have to do **different** things on the
// browser and server (noted inline below).
//
// https://github.com/FormidableLabs/radium/issues/958
function flattenStyleValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var val = style[key];
    if (Array.isArray(val)) {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        // For the **browser**, when faced with multiple values, we just take
        // the **last** one, which is the original passed in value before
        // prefixing. This _should_ work, because `inline-style-prefixer`
        // we're just passing through what would happen without ISP.

        val = val[val.length - 1].toString();
      } else {
        // For the **server**, we just concatenate things together and convert
        // the style object values into a hacked-up string of like `display:
        // "-webkit-flex;display:flex"` that will SSR render correctly to like
        // `"display:-webkit-flex;display:flex"` but would otherwise be
        // totally invalid values.

        // We convert keys to dash-case only for the serialize values and
        // leave the real key camel-cased so it's as expected to React and
        // other parts of the processing chain.
        val = val.join(';' + Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__["camelCaseToDashCase"])(key) + ':');
      }
    }

    newStyle[key] = val;
    return newStyle;
  }, {});
}

var _hasWarnedAboutUserAgent = false;
var _lastUserAgent = void 0;
var _cachedPrefixer = void 0;

function getPrefixer(userAgent) {
  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

  if (true) {
    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
      /* eslint-disable no-console */
      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
      /* eslint-enable no-console */
      _hasWarnedAboutUserAgent = true;
    }
  }

  if ( false || !_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
    if (actualUserAgent === 'all') {
      _cachedPrefixer = {
        prefix: prefixAll,
        prefixedKeyframes: 'keyframes'
      };
    } else {
      _cachedPrefixer = new InlineStylePrefixer({ userAgent: actualUserAgent });
    }
    _lastUserAgent = actualUserAgent;
  }

  return _cachedPrefixer;
}

function getPrefixedKeyframes(userAgent) {
  return getPrefixer(userAgent).prefixedKeyframes || 'keyframes';
}

// Returns a new style object with vendor prefixes added to property names and
// values.
function getPrefixedStyle(style, userAgent) {
  var styleWithFallbacks = transformValues(style);
  var prefixer = getPrefixer(userAgent);
  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
  var flattenedStyle = flattenStyleValues(prefixedStyle);
  return flattenedStyle;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/radium/es/resolve-styles.js":
/*!***************************************************!*\
  !*** ../node_modules/radium/es/resolve-styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-important-to-each-value */ "../node_modules/radium/es/append-important-to-each-value.js");
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-rule-set-to-string */ "../node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-state */ "../node_modules/radium/es/get-state.js");
/* harmony import */ var _get_state_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-state-key */ "../node_modules/radium/es/get-state-key.js");
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean-state-key */ "../node_modules/radium/es/clean-state-key.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-radium-style-state */ "../node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hash */ "../node_modules/radium/es/hash.js");
/* harmony import */ var _merge_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-styles */ "../node_modules/radium/es/merge-styles.js");
/* harmony import */ var _plugins___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/ */ "../node_modules/radium/es/plugins/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "../node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };















var DEFAULT_CONFIG = {
  plugins: [_plugins___WEBPACK_IMPORTED_MODULE_8__["default"].mergeStyleArray, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveMediaQueries, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveInteractionStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].keyframes, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].visited, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].removeNestedStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].prefix, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps]
};

// Gross
var globalState = {};

// Declare early for recursive helpers.
var _resolveStyles5 = null;

var _shouldResolveStyles = function _shouldResolveStyles(component) {
  return component.type && !component.type._isRadiumEnhanced;
};

var _resolveChildren = function _resolveChildren(_ref) {
  var children = _ref.children,
      component = _ref.component,
      config = _ref.config,
      existingKeyMap = _ref.existingKeyMap,
      extraStateKeyMap = _ref.extraStateKeyMap;

  if (!children) {
    return children;
  }

  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

  if (childrenType === 'string' || childrenType === 'number') {
    // Don't do anything with a single primitive child
    return children;
  }

  if (childrenType === 'function') {
    // Wrap the function, resolving styles on the result
    return function () {
      var result = children.apply(this, arguments);

      if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(result)) {
        var _key = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(result);
        delete extraStateKeyMap[_key];

        var _resolveStyles = _resolveStyles5(component, result, config, existingKeyMap, true, extraStateKeyMap),
            _element = _resolveStyles.element;

        return _element;
      }

      return result;
    };
  }

  if (react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.count(children) === 1 && children.type) {
    // If a React Element is an only child, don't wrap it in an array for
    // React.Children.map() for React.Children.only() compatibility.
    var onlyChild = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.only(children);
    var _key2 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(onlyChild);
    delete extraStateKeyMap[_key2];

    var _resolveStyles2 = _resolveStyles5(component, onlyChild, config, existingKeyMap, true, extraStateKeyMap),
        _element2 = _resolveStyles2.element;

    return _element2;
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(child)) {
      var _key3 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(child);
      delete extraStateKeyMap[_key3];

      var _resolveStyles3 = _resolveStyles5(component, child, config, existingKeyMap, true, extraStateKeyMap),
          _element3 = _resolveStyles3.element;

      return _element3;
    }

    return child;
  });
};

// Recurse over props, just like children
var _resolveProps = function _resolveProps(_ref2) {
  var component = _ref2.component,
      config = _ref2.config,
      existingKeyMap = _ref2.existingKeyMap,
      props = _ref2.props,
      extraStateKeyMap = _ref2.extraStateKeyMap;

  var newProps = props;

  Object.keys(props).forEach(function (prop) {
    // We already recurse over children above
    if (prop === 'children') {
      return;
    }

    var propValue = props[prop];
    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(propValue)) {
      var _key4 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(propValue);
      delete extraStateKeyMap[_key4];
      newProps = _extends({}, newProps);

      var _resolveStyles4 = _resolveStyles5(component, propValue, config, existingKeyMap, true, extraStateKeyMap),
          _element4 = _resolveStyles4.element;

      newProps[prop] = _element4;
    }
  });

  return newProps;
};

var _buildGetKey = function _buildGetKey(_ref3) {
  var componentName = _ref3.componentName,
      existingKeyMap = _ref3.existingKeyMap,
      renderedElement = _ref3.renderedElement;

  // We need a unique key to correlate state changes due to user interaction
  // with the rendered element, so we know to apply the proper interactive
  // styles.
  var originalKey = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(renderedElement);
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_4__["default"])(originalKey);

  var alreadyGotKey = false;
  var getKey = function getKey() {
    if (alreadyGotKey) {
      return key;
    }

    alreadyGotKey = true;

    if (existingKeyMap[key]) {
      var elementName = void 0;
      if (typeof renderedElement.type === 'string') {
        elementName = renderedElement.type;
      } else if (renderedElement.type.constructor) {
        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
      }

      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
    }

    existingKeyMap[key] = true;

    return key;
  };

  return getKey;
};

var _setStyleState = function _setStyleState(component, key, stateKey, value) {
  if (!component._radiumIsMounted) {
    return;
  }

  var existing = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
  var state = { _radiumStyleState: _extends({}, existing) };

  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
  state._radiumStyleState[key][stateKey] = value;

  component._lastRadiumState = state._radiumStyleState;
  component.setState(state);
};

var _runPlugins = function _runPlugins(_ref4) {
  var component = _ref4.component,
      config = _ref4.config,
      existingKeyMap = _ref4.existingKeyMap,
      props = _ref4.props,
      renderedElement = _ref4.renderedElement;

  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
  // no style.
  if (!react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
    return props;
  }

  var newProps = props;

  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

  var componentName = component.constructor.displayName || component.constructor.name;
  var getKey = _buildGetKey({
    renderedElement: renderedElement,
    existingKeyMap: existingKeyMap,
    componentName: componentName
  });
  var getComponentField = function getComponentField(key) {
    return component[key];
  };
  var getGlobalState = function getGlobalState(key) {
    return globalState[key];
  };
  var componentGetState = function componentGetState(stateKey, elementKey) {
    return Object(_get_state__WEBPACK_IMPORTED_MODULE_2__["default"])(component.state, elementKey || getKey(), stateKey);
  };
  var setState = function setState(stateKey, value, elementKey) {
    return _setStyleState(component, elementKey || getKey(), stateKey, value);
  };

  var addCSS = function addCSS(css) {
    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
    if (!styleKeeper) {
      if (__isTestModeEnabled) {
        return {
          remove: function remove() {}
        };
      }

      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
    }

    return styleKeeper.addCSS(css);
  };

  var newStyle = props.style;

  plugins.forEach(function (plugin) {
    var result = plugin({
      ExecutionEnvironment: exenv__WEBPACK_IMPORTED_MODULE_9___default.a,
      addCSS: addCSS,
      appendImportantToEachValue: _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__["default"],
      componentName: componentName,
      config: config,
      cssRuleSetToString: _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"],
      getComponentField: getComponentField,
      getGlobalState: getGlobalState,
      getState: componentGetState,
      hash: _hash__WEBPACK_IMPORTED_MODULE_6__["default"],
      mergeStyles: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["mergeStyles"],
      props: newProps,
      setState: setState,
      isNestedStyle: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["isNestedStyle"],
      style: newStyle
    }) || {};

    newStyle = result.style || newStyle;

    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

    var newComponentFields = result.componentFields || {};
    Object.keys(newComponentFields).forEach(function (fieldName) {
      component[fieldName] = newComponentFields[fieldName];
    });

    var newGlobalState = result.globalState || {};
    Object.keys(newGlobalState).forEach(function (key) {
      globalState[key] = newGlobalState[key];
    });
  });

  if (newStyle !== props.style) {
    newProps = _extends({}, newProps, { style: newStyle });
  }

  return newProps;
};

// Wrapper around React.cloneElement. To avoid processing the same element
// twice, whenever we clone an element add a special prop to make sure we don't
// process this element again.
var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
  // Only add flag if this is a normal DOM element
  if (typeof renderedElement.type === 'string') {
    newProps = _extends({}, newProps, { 'data-radium': true });
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(renderedElement, newProps, newChildren);
};

//
// The nucleus of Radium. resolveStyles is called on the rendered elements
// before they are returned in render. It iterates over the elements and
// children, rewriting props to add event handlers required to capture user
// interactions (e.g. mouse over). It also replaces the style prop because it
// adds in the various interaction styles (e.g. :hover).
//
/* eslint-disable max-params */
_resolveStyles5 = function resolveStyles(component, // ReactComponent, flow+eslint complaining
renderedElement) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;
  var existingKeyMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var shouldCheckBeforeResolve = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var extraStateKeyMap = arguments[5];

  // The extraStateKeyMap is for determining which keys should be erased from
  // the state (i.e. which child components are unmounted and should no longer
  // have a style state).
  if (!extraStateKeyMap) {
    var state = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
    extraStateKeyMap = Object.keys(state).reduce(function (acc, key) {
      // 'main' is the auto-generated key when there is only one element with
      // interactive styles and if a custom key is not assigned. Because of
      // this, it is impossible to know which child is 'main', so we won't
      // count this key when generating our extraStateKeyMap.
      if (key !== 'main') {
        acc[key] = true;
      }
      return acc;
    }, {});
  }

  if (Array.isArray(renderedElement) && !renderedElement.props) {
    var elements = renderedElement.map(function (element) {
      // element is in-use, so remove from the extraStateKeyMap
      if (extraStateKeyMap) {
        var _key5 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
        delete extraStateKeyMap[_key5];
      }

      // this element is an array of elements,
      // so return an array of elements with resolved styles
      return _resolveStyles5(component, element, config, existingKeyMap, shouldCheckBeforeResolve, extraStateKeyMap).element;
    });
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: elements
    };
  }

  // ReactElement
  if (!renderedElement ||
  // Bail if we've already processed this element. This ensures that only the
  // owner of an element processes that element, since the owner's render
  // function will be called first (which will always be the case, since you
  // can't know what else to render until you render the parent component).
  renderedElement.props && renderedElement.props['data-radium'] ||
  // Bail if this element is a radium enhanced element, because if it is,
  // then it will take care of resolving its own styles.
  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
    return { extraStateKeyMap: extraStateKeyMap, element: renderedElement };
  }

  var children = renderedElement.props.children;

  var newChildren = _resolveChildren({
    children: children,
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap
  });

  var newProps = _resolveProps({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap,
    props: renderedElement.props
  });

  newProps = _runPlugins({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: newProps,
    renderedElement: renderedElement
  });

  // If nothing changed, don't bother cloning the element. Might be a bit
  // wasteful, as we add the sentinel to stop double-processing when we clone.
  // Assume benign double-processing is better than unneeded cloning.
  if (newChildren === children && newProps === renderedElement.props) {
    return { extraStateKeyMap: extraStateKeyMap, element: renderedElement };
  }

  var element = _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);

  return { extraStateKeyMap: extraStateKeyMap, element: element };
};
/* eslint-enable max-params */

// Only for use by tests
var __isTestModeEnabled = false;
if (true) {
  _resolveStyles5.__clearStateForTests = function () {
    globalState = {};
  };
  _resolveStyles5.__setTestMode = function (isEnabled) {
    __isTestModeEnabled = isEnabled;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_resolveStyles5);

/***/ }),

/***/ "../node_modules/radium/es/style-keeper.js":
/*!*************************************************!*\
  !*** ../node_modules/radium/es/style-keeper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleKeeper; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleKeeper = function () {
  function StyleKeeper(userAgent) {
    _classCallCheck(this, StyleKeeper);

    this._userAgent = userAgent;
    this._listeners = [];
    this._cssSet = {};
  }

  _createClass(StyleKeeper, [{
    key: 'subscribe',
    value: function subscribe(listener) {
      var _this = this;

      if (this._listeners.indexOf(listener) === -1) {
        this._listeners.push(listener);
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          var listenerIndex = _this._listeners.indexOf(listener);
          if (listenerIndex > -1) {
            _this._listeners.splice(listenerIndex, 1);
          }
        }
      };
    }
  }, {
    key: 'addCSS',
    value: function addCSS(css) {
      var _this2 = this;

      if (!this._cssSet[css]) {
        this._cssSet[css] = true;
        this._emitChange();
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          delete _this2._cssSet[css];
          _this2._emitChange();
        }
      };
    }
  }, {
    key: 'getCSS',
    value: function getCSS() {
      return Object.keys(this._cssSet).join('\n');
    }
  }, {
    key: '_emitChange',
    value: function _emitChange() {
      this._listeners.forEach(function (listener) {
        return listener();
      });
    }
  }]);

  return StyleKeeper;
}();



/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react/cjs/react.development.js":
/*!******************************************************!*\
  !*** ../node_modules/react/cjs/react.development.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.4';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "../node_modules/react/index.js":
/*!**************************************!*\
  !*** ../node_modules/react/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../node_modules/webpack/buildin/amd-define.js":
/*!*****************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./ChipsSrc/CustomChip.js":
/*!********************************!*\
  !*** ./ChipsSrc/CustomChip.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "../node_modules/radium/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CustomChip =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomChip, _Component);

  function CustomChip() {
    _classCallCheck(this, CustomChip);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomChip).apply(this, arguments));
  }

  _createClass(CustomChip, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.props.selected ? _objectSpread({}, styles.container, styles.selected) : styles.container
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: styles.image,
        src: this.props.image
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.text
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.remove,
        onClick: function onClick() {
          return _this.props.onRemove(_this.props.index);
        }
      }, "\xD7"));
    }
  }]);

  return CustomChip;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var styles = {
  selected: {
    background: "#ccc"
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: 32,
    boxSizing: 'border-box',
    color: "#444",
    background: "#e0e0e0",
    margin: "2.5px",
    borderRadius: 16,
    cursor: 'default'
  },
  image: {
    width: 32,
    height: 32,
    overflow: 'hidden',
    borderRadius: 16,
    background: "#888"
  },
  text: {
    fontSize: 13,
    boxSizing: 'border-box',
    padding: '0px 4px 0px 8px'
  },
  remove: {
    textAlign: "center",
    cursor: "pointer",
    fontSize: 18,
    width: 20,
    height: 20,
    color: "#e0e0e0",
    borderRadius: 12,
    background: "#aaa",
    margin: "0 6px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(radium__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomChip));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ib3dzZXIvc3JjL2Jvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9jcmVhdGVQcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvY3Jvc3NGYWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleGJveElFLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9ncmFkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvaW1hZ2VTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9zaXppbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL2NyZWF0ZVByZWZpeGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Jvc3NGYWRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94SUUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9pbWFnZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci91dGlscy9hZGROZXdWYWx1ZXNPbmx5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvZ2V0QnJvd3NlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL3V0aWxzL2dldFByZWZpeGVkVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvdXRpbHMvcHJlZml4VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2FwcGVuZC1weC1pZi1uZWVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvY2FtZWwtY2FzZS1wcm9wcy10by1kYXNoLWNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvY2xlYW4tc3RhdGUta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2NvbXBvbmVudHMvc3R5bGUtcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9jb21wb25lbnRzL3N0eWxlLXNoZWV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2NvbXBvbmVudHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvY3NzLXJ1bGUtc2V0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9lbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9nZXQtcmFkaXVtLXN0eWxlLXN0YXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2dldC1zdGF0ZS1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvZ2V0LXN0YXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL2hhc2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMva2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL21hcC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvbWVyZ2Utc3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvY2hlY2stcHJvcHMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcGx1Z2lucy9rZXlmcmFtZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvbWVyZ2Utc3R5bGUtYXJyYXktcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvbW91c2UtdXAtbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcGx1Z2lucy9wcmVmaXgtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVtb3ZlLW5lc3RlZC1zdHlsZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVzb2x2ZS1pbnRlcmFjdGlvbi1zdHlsZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3BsdWdpbnMvcmVzb2x2ZS1tZWRpYS1xdWVyaWVzLXBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JhZGl1bS9lcy9wbHVnaW5zL3Zpc2l0ZWQtcGx1Z2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3ByZWZpeC1kYXRhL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYWRpdW0vZXMvcHJlZml4LWRhdGEvc3RhdGljLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3Jlc29sdmUtc3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmFkaXVtL2VzL3N0eWxlLWtlZXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ2hpcHNTcmMvQ3VzdG9tQ2hpcC5qcyJdLCJuYW1lcyI6WyJDdXN0b21DaGlwIiwicHJvcHMiLCJzZWxlY3RlZCIsInN0eWxlcyIsImNvbnRhaW5lciIsImltYWdlIiwidGV4dCIsImNoaWxkcmVuIiwicmVtb3ZlIiwib25SZW1vdmUiLCJpbmRleCIsIkNvbXBvbmVudCIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJveFNpemluZyIsImNvbG9yIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwid2lkdGgiLCJvdmVyZmxvdyIsImZvbnRTaXplIiwicGFkZGluZyIsInRleHRBbGlnbiIsIlJhZGl1bSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQTRCO0FBQ2xDLFdBQVcsSUFBeUMsRUFBRSwrRkFBTTtBQUM1RCxPQUFPLEVBQXlCO0FBQ2hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFj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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNsb0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZEO0FBQ1U7QUFDTjtBQUNBO0FBQ0o7QUFDVTtBQUNFO0FBQ0o7QUFDQTtBQUNBO0FBQ0o7QUFDUTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixZQUFZLGdGQUFJLEVBQUUscUZBQVMsRUFBRSxrRkFBTSxFQUFFLGtGQUFNLEVBQUUsZ0ZBQUksRUFBRSxxRkFBUyxFQUFFLHNGQUFVLEVBQUUsb0ZBQVEsRUFBRSxvRkFBUSxFQUFFLG9GQUFRLEVBQUUsbUZBQU0sRUFBRSx1RkFBVTtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFPQUFxTztBQUNyTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsR0FBRztBQUNkO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSUFBMEkseUNBQXlDO0FBQ25MO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsR0FBRztBQUNkLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUdKUSxXQUFPLEVBQUU7QUFITCxHQXRCSztBQTJCWGhCLFFBQU0sRUFBRTtBQUNOaUIsYUFBUyxFQUFFLFFBREw7QUFFTkwsVUFBTSxFQUFFLFNBRkY7QUFHTkcsWUFBUSxFQUFFLEVBSEo7QUFJTkYsU0FBSyxFQUFFLEVBSkQ7QUFLTk4sVUFBTSxFQUFFLEVBTEY7QUFNTkUsU0FBSyxFQUFFLFNBTkQ7QUFPTkUsZ0JBQVksRUFBRSxFQVBSO0FBUU5QLGNBQVUsRUFBRSxNQVJOO0FBU05NLFVBQU0sRUFBRTtBQVRGO0FBM0JHLENBQWI7QUF3Q2VRLHFIQUFNLENBQUMxQixVQUFELENBQXJCLEUiLCJmaWxlIjoid2ViYXBwL3Jlc291cmNlcy9yZWFjdC9DdXN0b21DaGlwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vQ2hpcHNTcmMvQ3VzdG9tQ2hpcC5qc1wiKTtcbiIsIi8qIVxuICogQm93c2VyIC0gYSBicm93c2VyIGRldGVjdG9yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGVkL2Jvd3NlclxuICogTUlUIExpY2Vuc2UgfCAoYykgRHVzdGluIERpYXogMjAxNVxuICovXG5cbiFmdW5jdGlvbiAocm9vdCwgbmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShuYW1lLCBkZWZpbml0aW9uKVxuICBlbHNlIHJvb3RbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0odGhpcywgJ2Jvd3NlcicsIGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgKiBTZWUgdXNlcmFnZW50cy5qcyBmb3IgZXhhbXBsZXMgb2YgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICovXG5cbiAgdmFyIHQgPSB0cnVlXG5cbiAgZnVuY3Rpb24gZGV0ZWN0KHVhKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMV0pIHx8ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlY29uZE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMl0pIHx8ICcnO1xuICAgIH1cblxuICAgIHZhciBpb3NkZXZpY2UgPSBnZXRGaXJzdE1hdGNoKC8oaXBvZHxpcGhvbmV8aXBhZCkvaSkudG9Mb3dlckNhc2UoKVxuICAgICAgLCBsaWtlQW5kcm9pZCA9IC9saWtlIGFuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBhbmRyb2lkID0gIWxpa2VBbmRyb2lkICYmIC9hbmRyb2lkL2kudGVzdCh1YSlcbiAgICAgICwgbmV4dXNNb2JpbGUgPSAvbmV4dXNcXHMqWzAtNl1cXHMqL2kudGVzdCh1YSlcbiAgICAgICwgbmV4dXNUYWJsZXQgPSAhbmV4dXNNb2JpbGUgJiYgL25leHVzXFxzKlswLTldKy9pLnRlc3QodWEpXG4gICAgICAsIGNocm9tZW9zID0gL0NyT1MvLnRlc3QodWEpXG4gICAgICAsIHNpbGsgPSAvc2lsay9pLnRlc3QodWEpXG4gICAgICAsIHNhaWxmaXNoID0gL3NhaWxmaXNoL2kudGVzdCh1YSlcbiAgICAgICwgdGl6ZW4gPSAvdGl6ZW4vaS50ZXN0KHVhKVxuICAgICAgLCB3ZWJvcyA9IC8od2VifGhwdykob3wwKXMvaS50ZXN0KHVhKVxuICAgICAgLCB3aW5kb3dzcGhvbmUgPSAvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpXG4gICAgICAsIHNhbXN1bmdCcm93c2VyID0gL1NhbXN1bmdCcm93c2VyL2kudGVzdCh1YSlcbiAgICAgICwgd2luZG93cyA9ICF3aW5kb3dzcGhvbmUgJiYgL3dpbmRvd3MvaS50ZXN0KHVhKVxuICAgICAgLCBtYWMgPSAhaW9zZGV2aWNlICYmICFzaWxrICYmIC9tYWNpbnRvc2gvaS50ZXN0KHVhKVxuICAgICAgLCBsaW51eCA9ICFhbmRyb2lkICYmICFzYWlsZmlzaCAmJiAhdGl6ZW4gJiYgIXdlYm9zICYmIC9saW51eC9pLnRlc3QodWEpXG4gICAgICAsIGVkZ2VWZXJzaW9uID0gZ2V0U2Vjb25kTWF0Y2goL2VkZyhbZWFdfGlvcylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICAsIHZlcnNpb25JZGVudGlmaWVyID0gZ2V0Rmlyc3RNYXRjaCgvdmVyc2lvblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdGFibGV0ID0gL3RhYmxldC9pLnRlc3QodWEpICYmICEvdGFibGV0IHBjL2kudGVzdCh1YSlcbiAgICAgICwgbW9iaWxlID0gIXRhYmxldCAmJiAvW14tXW1vYmkvaS50ZXN0KHVhKVxuICAgICAgLCB4Ym94ID0gL3hib3gvaS50ZXN0KHVhKVxuICAgICAgLCByZXN1bHRcblxuICAgIGlmICgvb3BlcmEvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gIGFuIG9sZCBPcGVyYVxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnT3BlcmEnXG4gICAgICAsIG9wZXJhOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/Om9wZXJhfG9wcnxvcGlvcylbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9vcHJcXC98b3Bpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgLy8gYSBuZXcgT3BlcmFcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgICAsIG9wZXJhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86b3ByfG9waW9zKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvU2Ftc3VuZ0Jyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2Ftc3VuZyBJbnRlcm5ldCBmb3IgQW5kcm9pZCdcbiAgICAgICAgLCBzYW1zdW5nQnJvd3NlcjogdFxuICAgICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/OlNhbXN1bmdCcm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvV2hhbGUvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTkFWRVIgV2hhbGUgYnJvd3NlcidcbiAgICAgICAgLCB3aGFsZTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OndoYWxlKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9NWkJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTVogQnJvd3NlcidcbiAgICAgICAgLCBtemJyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpNWkJyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2NvYXN0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhIENvYXN0J1xuICAgICAgICAsIGNvYXN0OiB0XG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86Y29hc3QpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9mb2N1cy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdGb2N1cydcbiAgICAgICAgLCBmb2N1czogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmZvY3VzKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC95YWJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnWWFuZGV4IEJyb3dzZXInXG4gICAgICAsIHlhbmRleGJyb3dzZXI6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdWNicm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiAnVUMgQnJvd3NlcidcbiAgICAgICAgLCB1Y2Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL214aW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01heHRob24nXG4gICAgICAgICwgbWF4dGhvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om14aW9zKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9lcGlwaGFueS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdFcGlwaGFueSdcbiAgICAgICAgLCBlcGlwaGFueTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmVwaXBoYW55KVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9wdWZmaW4vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUHVmZmluJ1xuICAgICAgICAsIHB1ZmZpbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnB1ZmZpbilbXFxzXFwvXShcXGQrKD86XFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xlaXBuaXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xlaXBuaXInXG4gICAgICAgICwgc2xlaXBuaXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpzbGVpcG5pcilbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvay1tZWxlb24vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSy1NZWxlb24nXG4gICAgICAgICwga01lbGVvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmstbWVsZW9uKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd3NwaG9uZSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgb3NuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgd2luZG93c3Bob25lOiB0XG4gICAgICB9XG4gICAgICBpZiAoZWRnZVZlcnNpb24pIHtcbiAgICAgICAgcmVzdWx0Lm1zZWRnZSA9IHRcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tc2llID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2llbW9iaWxlXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXNpZXx0cmlkZW50L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJ1xuICAgICAgLCBtc2llOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaHJvbWVvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21lJ1xuICAgICAgLCBvc25hbWU6ICdDaHJvbWUgT1MnXG4gICAgICAsIGNocm9tZW9zOiB0XG4gICAgICAsIGNocm9tZUJvb2s6IHRcbiAgICAgICwgY2hyb21lOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9lZGcoW2VhXXxpb3MpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBFZGdlJ1xuICAgICAgLCBtc2VkZ2U6IHRcbiAgICAgICwgdmVyc2lvbjogZWRnZVZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3ZpdmFsZGkvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnVml2YWxkaSdcbiAgICAgICAgLCB2aXZhbGRpOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvdml2YWxkaVxcLyhcXGQrKFxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2FpbGZpc2gpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhaWxmaXNoJ1xuICAgICAgLCBvc25hbWU6ICdTYWlsZmlzaCBPUydcbiAgICAgICwgc2FpbGZpc2g6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2FpbGZpc2hcXHM/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NlYW1vbmtleVxcLy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTZWFNb25rZXknXG4gICAgICAsIHNlYW1vbmtleTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9zZWFtb25rZXlcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9maXJlZm94fGljZXdlYXNlbHxmeGlvcy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdGaXJlZm94J1xuICAgICAgLCBmaXJlZm94OiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zKVsgXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICAgIGlmICgvXFwoKG1vYmlsZXx0YWJsZXQpO1teXFwpXSpydjpbXFxkXFwuXStcXCkvaS50ZXN0KHVhKSkge1xuICAgICAgICByZXN1bHQuZmlyZWZveG9zID0gdFxuICAgICAgICByZXN1bHQub3NuYW1lID0gJ0ZpcmVmb3ggT1MnXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpbGspIHtcbiAgICAgIHJlc3VsdCA9ICB7XG4gICAgICAgIG5hbWU6ICdBbWF6b24gU2lsaydcbiAgICAgICwgc2lsazogdFxuICAgICAgLCB2ZXJzaW9uIDogZ2V0Rmlyc3RNYXRjaCgvc2lsa1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3BoYW50b20vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUGhhbnRvbUpTJ1xuICAgICAgLCBwaGFudG9tOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3BoYW50b21qc1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NsaW1lcmpzL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NsaW1lckpTJ1xuICAgICAgICAsIHNsaW1lcjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NsaW1lcmpzXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaS50ZXN0KHVhKSB8fCAvcmltXFxzdGFibGV0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JsYWNrQmVycnknXG4gICAgICAsIG9zbmFtZTogJ0JsYWNrQmVycnkgT1MnXG4gICAgICAsIGJsYWNrYmVycnk6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVtcXGRdK1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAod2Vib3MpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1dlYk9TJ1xuICAgICAgLCBvc25hbWU6ICdXZWJPUydcbiAgICAgICwgd2Vib3M6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9vc2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9O1xuICAgICAgL3RvdWNocGFkXFwvL2kudGVzdCh1YSkgJiYgKHJlc3VsdC50b3VjaHBhZCA9IHQpXG4gICAgfVxuICAgIGVsc2UgaWYgKC9iYWRhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JhZGEnXG4gICAgICAsIG9zbmFtZTogJ0JhZGEnXG4gICAgICAsIGJhZGE6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGl6ZW4pIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1RpemVuJ1xuICAgICAgLCBvc25hbWU6ICdUaXplbidcbiAgICAgICwgdGl6ZW46IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL3F1cHppbGxhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1F1cFppbGxhJ1xuICAgICAgICAsIHF1cHppbGxhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9taXVtL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9taXVtJ1xuICAgICAgICAsIGNocm9taXVtOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86Y2hyb21pdW0pW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9tZXxjcmlvc3xjcm1vL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICAgLCBjaHJvbWU6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0FuZHJvaWQnXG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NhZmFyaXxhcHBsZXdlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTYWZhcmknXG4gICAgICAsIHNhZmFyaTogdFxuICAgICAgfVxuICAgICAgaWYgKHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWUgOiBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgPyAnaVBob25lJyA6IGlvc2RldmljZSA9PSAnaXBhZCcgPyAnaVBhZCcgOiAnaVBvZCdcbiAgICAgIH1cbiAgICAgIC8vIFdURjogdmVyc2lvbiBpcyBub3QgcGFydCBvZiB1c2VyIGFnZW50IGluIHdlYiBhcHBzXG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKC9nb29nbGVib3QvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnR29vZ2xlYm90J1xuICAgICAgLCBnb29nbGVib3Q6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZ29vZ2xlYm90XFwvKFxcZCsoXFwuXFxkKykpL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBnZXRGaXJzdE1hdGNoKC9eKC4qKVxcLyguKikgLyksXG4gICAgICAgIHZlcnNpb246IGdldFNlY29uZE1hdGNoKC9eKC4qKVxcLyguKikgLylcbiAgICAgfTtcbiAgIH1cblxuICAgIC8vIHNldCB3ZWJraXQgb3IgZ2Vja28gZmxhZyBmb3IgYnJvd3NlcnMgYmFzZWQgb24gdGhlc2UgZW5naW5lc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAvKGFwcGxlKT93ZWJraXQvaS50ZXN0KHVhKSkge1xuICAgICAgaWYgKC8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIkJsaW5rXCJcbiAgICAgICAgcmVzdWx0LmJsaW5rID0gdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIldlYmtpdFwiXG4gICAgICAgIHJlc3VsdC53ZWJraXQgPSB0XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdC52ZXJzaW9uICYmIHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQub3BlcmEgJiYgL2dlY2tvXFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUgfHwgXCJHZWNrb1wiXG4gICAgICByZXN1bHQuZ2Vja28gPSB0XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uIHx8IGdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgIH1cblxuICAgIC8vIHNldCBPUyBmbGFncyBmb3IgcGxhdGZvcm1zIHRoYXQgaGF2ZSBtdWx0aXBsZSBicm93c2Vyc1xuICAgIGlmICghcmVzdWx0LndpbmRvd3NwaG9uZSAmJiAoYW5kcm9pZCB8fCByZXN1bHQuc2lsaykpIHtcbiAgICAgIHJlc3VsdC5hbmRyb2lkID0gdFxuICAgICAgcmVzdWx0Lm9zbmFtZSA9ICdBbmRyb2lkJ1xuICAgIH0gZWxzZSBpZiAoIXJlc3VsdC53aW5kb3dzcGhvbmUgJiYgaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHRbaW9zZGV2aWNlXSA9IHRcbiAgICAgIHJlc3VsdC5pb3MgPSB0XG4gICAgICByZXN1bHQub3NuYW1lID0gJ2lPUydcbiAgICB9IGVsc2UgaWYgKG1hYykge1xuICAgICAgcmVzdWx0Lm1hYyA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnbWFjT1MnXG4gICAgfSBlbHNlIGlmICh4Ym94KSB7XG4gICAgICByZXN1bHQueGJveCA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnWGJveCdcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3MpIHtcbiAgICAgIHJlc3VsdC53aW5kb3dzID0gdFxuICAgICAgcmVzdWx0Lm9zbmFtZSA9ICdXaW5kb3dzJ1xuICAgIH0gZWxzZSBpZiAobGludXgpIHtcbiAgICAgIHJlc3VsdC5saW51eCA9IHRcbiAgICAgIHJlc3VsdC5vc25hbWUgPSAnTGludXgnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93c1ZlcnNpb24gKHMpIHtcbiAgICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlICdOVCc6IHJldHVybiAnTlQnXG4gICAgICAgIGNhc2UgJ1hQJzogcmV0dXJuICdYUCdcbiAgICAgICAgY2FzZSAnTlQgNS4wJzogcmV0dXJuICcyMDAwJ1xuICAgICAgICBjYXNlICdOVCA1LjEnOiByZXR1cm4gJ1hQJ1xuICAgICAgICBjYXNlICdOVCA1LjInOiByZXR1cm4gJzIwMDMnXG4gICAgICAgIGNhc2UgJ05UIDYuMCc6IHJldHVybiAnVmlzdGEnXG4gICAgICAgIGNhc2UgJ05UIDYuMSc6IHJldHVybiAnNydcbiAgICAgICAgY2FzZSAnTlQgNi4yJzogcmV0dXJuICc4J1xuICAgICAgICBjYXNlICdOVCA2LjMnOiByZXR1cm4gJzguMSdcbiAgICAgICAgY2FzZSAnTlQgMTAuMCc6IHJldHVybiAnMTAnXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPUyB2ZXJzaW9uIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NWZXJzaW9uID0gJyc7XG4gICAgaWYgKHJlc3VsdC53aW5kb3dzKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRXaW5kb3dzVmVyc2lvbihnZXRGaXJzdE1hdGNoKC9XaW5kb3dzICgoTlR8WFApKCBcXGRcXGQ/LlxcZCk/KS9pKSlcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC53aW5kb3dzcGhvbmUpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3dpbmRvd3MgcGhvbmUgKD86b3MpP1xccz8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0Lm1hYykge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvTWFjIE9TIFggKFxcZCsoW19cXC5cXHNdXFxkKykqKS9pKTtcbiAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvbi5yZXBsYWNlKC9bX1xcc10vZywgJy4nKTtcbiAgICB9IGVsc2UgaWYgKGlvc2RldmljZSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2kpO1xuICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uLnJlcGxhY2UoL1tfXFxzXS9nLCAnLicpO1xuICAgIH0gZWxzZSBpZiAoYW5kcm9pZCkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFsgXFwvLV0oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LndlYm9zKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC8oPzp3ZWJ8aHB3KW9zXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5ibGFja2JlcnJ5KSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuYmFkYSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYmFkYVxcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQudGl6ZW4pIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3RpemVuW1xcL1xcc10oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH1cbiAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICByZXN1bHQub3N2ZXJzaW9uID0gb3NWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGRldmljZSB0eXBlIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NNYWpvclZlcnNpb24gPSAhcmVzdWx0LndpbmRvd3MgJiYgb3NWZXJzaW9uLnNwbGl0KCcuJylbMF07XG4gICAgaWYgKFxuICAgICAgICAgdGFibGV0XG4gICAgICB8fCBuZXh1c1RhYmxldFxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGFkJ1xuICAgICAgfHwgKGFuZHJvaWQgJiYgKG9zTWFqb3JWZXJzaW9uID09IDMgfHwgKG9zTWFqb3JWZXJzaW9uID49IDQgJiYgIW1vYmlsZSkpKVxuICAgICAgfHwgcmVzdWx0LnNpbGtcbiAgICApIHtcbiAgICAgIHJlc3VsdC50YWJsZXQgPSB0XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgIG1vYmlsZVxuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcGhvbmUnXG4gICAgICB8fCBpb3NkZXZpY2UgPT0gJ2lwb2QnXG4gICAgICB8fCBhbmRyb2lkXG4gICAgICB8fCBuZXh1c01vYmlsZVxuICAgICAgfHwgcmVzdWx0LmJsYWNrYmVycnlcbiAgICAgIHx8IHJlc3VsdC53ZWJvc1xuICAgICAgfHwgcmVzdWx0LmJhZGFcbiAgICApIHtcbiAgICAgIHJlc3VsdC5tb2JpbGUgPSB0XG4gICAgfVxuXG4gICAgLy8gR3JhZGVkIEJyb3dzZXIgU3VwcG9ydFxuICAgIC8vIGh0dHA6Ly9kZXZlbG9wZXIueWFob28uY29tL3l1aS9hcnRpY2xlcy9nYnNcbiAgICBpZiAocmVzdWx0Lm1zZWRnZSB8fFxuICAgICAgICAocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTApIHx8XG4gICAgICAgIChyZXN1bHQueWFuZGV4YnJvd3NlciAmJiByZXN1bHQudmVyc2lvbiA+PSAxNSkgfHxcblx0XHQgICAgKHJlc3VsdC52aXZhbGRpICYmIHJlc3VsdC52ZXJzaW9uID49IDEuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApIHx8XG4gICAgICAgIChyZXN1bHQuc2Ftc3VuZ0Jyb3dzZXIgJiYgcmVzdWx0LnZlcnNpb24gPj0gNCkgfHxcbiAgICAgICAgKHJlc3VsdC53aGFsZSAmJiBjb21wYXJlVmVyc2lvbnMoW3Jlc3VsdC52ZXJzaW9uLCAnMS4wJ10pID09PSAxKSB8fFxuICAgICAgICAocmVzdWx0Lm16YnJvd3NlciAmJiBjb21wYXJlVmVyc2lvbnMoW3Jlc3VsdC52ZXJzaW9uLCAnNi4wJ10pID09PSAxKSB8fFxuICAgICAgICAocmVzdWx0LmZvY3VzICYmIGNvbXBhcmVWZXJzaW9ucyhbcmVzdWx0LnZlcnNpb24sICcxLjAnXSkgPT09IDEpIHx8XG4gICAgICAgIChyZXN1bHQuZmlyZWZveCAmJiByZXN1bHQudmVyc2lvbiA+PSAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjApIHx8XG4gICAgICAgIChyZXN1bHQuaW9zICYmIHJlc3VsdC5vc3ZlcnNpb24gJiYgcmVzdWx0Lm9zdmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPj0gNikgfHxcbiAgICAgICAgKHJlc3VsdC5ibGFja2JlcnJ5ICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjEpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmEgPSB0O1xuICAgIH1cbiAgICBlbHNlIGlmICgocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPCAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPCAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uIDwgMjAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5zYWZhcmkgJiYgcmVzdWx0LnZlcnNpb24gPCA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uIDwgMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA8IDYpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPCAyMClcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYyA9IHRcbiAgICB9IGVsc2UgcmVzdWx0LnggPSB0XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB2YXIgYm93c2VyID0gZGV0ZWN0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyA6ICcnKVxuXG4gIGJvd3Nlci50ZXN0ID0gZnVuY3Rpb24gKGJyb3dzZXJMaXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2VyTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGJyb3dzZXJJdGVtID0gYnJvd3Nlckxpc3RbaV07XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJJdGVtPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChicm93c2VySXRlbSBpbiBib3dzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZlcnNpb24gcHJlY2lzaW9ucyBjb3VudFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGdldFZlcnNpb25QcmVjaXNpb24oXCIxLjEwLjNcIikgLy8gM1xuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZlcnNpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHZlcnNpb24uc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheTo6bWFwIHBvbHlmaWxsXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZXJhdG9yXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWFwKGFyciwgaXRlcmF0b3IpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGk7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyLCBpdGVyYXRvcik7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZXJhdG9yKGFycltpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBicm93c2VyIHZlcnNpb24gd2VpZ2h0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuOC4yLjEuOTAnXSkgICAgLy8gMVxuICAgKiAgIGNvbXBhcmVWZXJzaW9ucyhbJzEuMDEwLjIuMScsICcxLjA5LjIuMS45MCddKTsgIC8vIDFcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS4xMC4yLjEnXSk7ICAgICAvLyAwXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuMDgwMC4yJ10pOyAgICAgLy8gLTFcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gdmVyc2lvbnMgdmVyc2lvbnMgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvbXBhcmlzb24gcmVzdWx0XG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbnModmVyc2lvbnMpIHtcbiAgICAvLyAxKSBnZXQgY29tbW9uIHByZWNpc2lvbiBmb3IgYm90aCB2ZXJzaW9ucywgZm9yIGV4YW1wbGUgZm9yIFwiMTAuMFwiIGFuZCBcIjlcIiBpdCBzaG91bGQgYmUgMlxuICAgIHZhciBwcmVjaXNpb24gPSBNYXRoLm1heChnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb25zWzBdKSwgZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uc1sxXSkpO1xuICAgIHZhciBjaHVua3MgPSBtYXAodmVyc2lvbnMsIGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICB2YXIgZGVsdGEgPSBwcmVjaXNpb24gLSBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb24pO1xuXG4gICAgICAvLyAyKSBcIjlcIiAtPiBcIjkuMFwiIChmb3IgcHJlY2lzaW9uID0gMilcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgbmV3IEFycmF5KGRlbHRhICsgMSkuam9pbihcIi4wXCIpO1xuXG4gICAgICAvLyAzKSBcIjkuMFwiIC0+IFtcIjAwMDAwMDAwMFwiXCIsIFwiMDAwMDAwMDA5XCJdXG4gICAgICByZXR1cm4gbWFwKHZlcnNpb24uc3BsaXQoXCIuXCIpLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgyMCAtIGNodW5rLmxlbmd0aCkuam9pbihcIjBcIikgKyBjaHVuaztcbiAgICAgIH0pLnJldmVyc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgaW4gcmV2ZXJzZSBvcmRlciBieSByZXZlcnNlZCBjaHVua3MgYXJyYXlcbiAgICB3aGlsZSAoLS1wcmVjaXNpb24gPj0gMCkge1xuICAgICAgLy8gNCkgY29tcGFyZTogXCIwMDAwMDAwMDlcIiA+IFwiMDAwMDAwMDEwXCIgPSBmYWxzZSAoYnV0IFwiOVwiID4gXCIxMFwiID0gdHJ1ZSlcbiAgICAgIGlmIChjaHVua3NbMF1bcHJlY2lzaW9uXSA+IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2h1bmtzWzBdW3ByZWNpc2lvbl0gPT09IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIGlmIChwcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgICAvLyBhbGwgdmVyc2lvbiBjaHVua3MgYXJlIHNhbWVcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYnJvd3NlciBpcyB1bnN1cHBvcnRlZFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGJvd3Nlci5pc1Vuc3VwcG9ydGVkQnJvd3Nlcih7XG4gICAqICAgICBtc2llOiBcIjEwXCIsXG4gICAqICAgICBmaXJlZm94OiBcIjIzXCIsXG4gICAqICAgICBjaHJvbWU6IFwiMjlcIixcbiAgICogICAgIHNhZmFyaTogXCI1LjFcIixcbiAgICogICAgIG9wZXJhOiBcIjE2XCIsXG4gICAqICAgICBwaGFudG9tOiBcIjUzNFwiXG4gICAqICAgfSk7XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNVbnN1cHBvcnRlZEJyb3dzZXIobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgdmFyIF9ib3dzZXIgPSBib3dzZXI7XG5cbiAgICAvLyBtYWtlIHN0cmljdE1vZGUgcGFyYW0gb3B0aW9uYWwgd2l0aCB1YSBwYXJhbSB1c2FnZVxuICAgIGlmICh0eXBlb2Ygc3RyaWN0TW9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVhID0gc3RyaWN0TW9kZTtcbiAgICAgIHN0cmljdE1vZGUgPSB2b2lkKDApO1xuICAgIH1cblxuICAgIGlmIChzdHJpY3RNb2RlID09PSB2b2lkKDApKSB7XG4gICAgICBzdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1YSkge1xuICAgICAgX2Jvd3NlciA9IGRldGVjdCh1YSk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSBcIlwiICsgX2Jvd3Nlci52ZXJzaW9uO1xuICAgIGZvciAodmFyIGJyb3dzZXIgaW4gbWluVmVyc2lvbnMpIHtcbiAgICAgIGlmIChtaW5WZXJzaW9ucy5oYXNPd25Qcm9wZXJ0eShicm93c2VyKSkge1xuICAgICAgICBpZiAoX2Jvd3Nlclticm93c2VyXSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbWluVmVyc2lvbnNbYnJvd3Nlcl0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIgdmVyc2lvbiBpbiB0aGUgbWluVmVyc2lvbiBtYXAgc2hvdWxkIGJlIGEgc3RyaW5nOiAnICsgYnJvd3NlciArICc6ICcgKyBTdHJpbmcobWluVmVyc2lvbnMpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBicm93c2VyIHZlcnNpb24gYW5kIG1pbiBzdXBwb3J0ZWQgdmVyc2lvbi5cbiAgICAgICAgICByZXR1cm4gY29tcGFyZVZlcnNpb25zKFt2ZXJzaW9uLCBtaW5WZXJzaW9uc1ticm93c2VyXV0pIDwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJpY3RNb2RlOyAvLyBub3QgZm91bmRcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBicm93c2VyIGlzIHN1cHBvcnRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2sobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgcmV0dXJuICFpc1Vuc3VwcG9ydGVkQnJvd3NlcihtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpO1xuICB9XG5cbiAgYm93c2VyLmlzVW5zdXBwb3J0ZWRCcm93c2VyID0gaXNVbnN1cHBvcnRlZEJyb3dzZXI7XG4gIGJvd3Nlci5jb21wYXJlVmVyc2lvbnMgPSBjb21wYXJlVmVyc2lvbnM7XG4gIGJvd3Nlci5jaGVjayA9IGNoZWNrO1xuXG4gIC8qXG4gICAqIFNldCBvdXIgZGV0ZWN0IG1ldGhvZCB0byB0aGUgbWFpbiBib3dzZXIgb2JqZWN0IHNvIHdlIGNhblxuICAgKiByZXVzZSBpdCB0byB0ZXN0IG90aGVyIHVzZXIgYWdlbnRzLlxuICAgKiBUaGlzIGlzIG5lZWRlZCB0byBpbXBsZW1lbnQgZnV0dXJlIHRlc3RzLlxuICAgKi9cbiAgYm93c2VyLl9kZXRlY3QgPSBkZXRlY3Q7XG5cbiAgLypcbiAgICogU2V0IG91ciBkZXRlY3QgcHVibGljIG1ldGhvZCB0byB0aGUgbWFpbiBib3dzZXIgb2JqZWN0XG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGltcGxlbWVudCBib3dzZXIgaW4gc2VydmVyIHNpZGVcbiAgICovXG4gIGJvd3Nlci5kZXRlY3QgPSBkZXRlY3Q7XG4gIHJldHVybiBib3dzZXJcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlUHJvcGVydHk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lID0gcmVxdWlyZSgnaHlwaGVuYXRlLXN0eWxlLW5hbWUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGVOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaHlwaGVuYXRlUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuICgwLCBfaHlwaGVuYXRlU3R5bGVOYW1lMi5kZWZhdWx0KShwcm9wZXJ0eSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ByZWZpeGVkVmFsdWU7XG52YXIgcmVnZXggPSAvLXdlYmtpdC18LW1vei18LW1zLS87XG5cbmZ1bmN0aW9uIGlzUHJlZml4ZWRWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiByZWdleC50ZXN0KHZhbHVlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZ1xudmFyIG1zUGF0dGVybiA9IC9ebXMtL1xudmFyIGNhY2hlID0ge31cblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKVxuICByZXR1cm4gKGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gJy0nICsgaE5hbWUgOiBoTmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlU3R5bGVOYW1lXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByZWZpeGVyO1xuXG52YXIgX2dldEJyb3dzZXJJbmZvcm1hdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldEJyb3dzZXJJbmZvcm1hdGlvbicpO1xuXG52YXIgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRCcm93c2VySW5mb3JtYXRpb24pO1xuXG52YXIgX2dldFByZWZpeGVkS2V5ZnJhbWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0UHJlZml4ZWRLZXlmcmFtZXMnKTtcblxudmFyIF9nZXRQcmVmaXhlZEtleWZyYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZEtleWZyYW1lcyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX2FkZE5ld1ZhbHVlc09ubHkgPSByZXF1aXJlKCcuLi91dGlscy9hZGROZXdWYWx1ZXNPbmx5Jyk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGROZXdWYWx1ZXNPbmx5KTtcblxudmFyIF9pc09iamVjdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzT2JqZWN0Jyk7XG5cbnZhciBfaXNPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNPYmplY3QpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcbiAgdmFyIGZhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWFudGUgYSBuZXcgcHJlZml4ZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRvIGdhdGhlciBwcmVmaXggaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIGNhbml1c2UuY29tXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtlZXBVbnByZWZpeGVkIC0ga2VlcHMgdW5wcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQcmVmaXhlcigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeGVyKTtcblxuICAgICAgdmFyIGRlZmF1bHRVc2VyQWdlbnQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMuX3VzZXJBZ2VudCA9IG9wdGlvbnMudXNlckFnZW50IHx8IGRlZmF1bHRVc2VyQWdlbnQ7XG4gICAgICB0aGlzLl9rZWVwVW5wcmVmaXhlZCA9IG9wdGlvbnMua2VlcFVucHJlZml4ZWQgfHwgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl91c2VyQWdlbnQpIHtcbiAgICAgICAgdGhpcy5fYnJvd3NlckluZm8gPSAoMCwgX2dldEJyb3dzZXJJbmZvcm1hdGlvbjIuZGVmYXVsdCkodGhpcy5fdXNlckFnZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2tzIGlmIHRoZSB1c2VyQWdlbnQgd2FzIHJlc29sdmVkIGNvcnJlY3RseVxuICAgICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLmNzc1ByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeGVkS2V5ZnJhbWVzID0gKDAsIF9nZXRQcmVmaXhlZEtleWZyYW1lczIuZGVmYXVsdCkodGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsIHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLCB0aGlzLl9icm93c2VySW5mby5jc3NQcmVmaXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmVmaXhEYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgJiYgcHJlZml4TWFwW3RoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJOYW1lXTtcbiAgICAgIGlmIChwcmVmaXhEYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJlZml4RGF0YSkge1xuICAgICAgICAgIGlmIChwcmVmaXhEYXRhW3Byb3BlcnR5XSA+PSB0aGlzLl9icm93c2VySW5mby5icm93c2VyVmVyc2lvbikge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IE9iamVjdC5rZXlzKHRoaXMuX3JlcXVpcmVzUHJlZml4KS5sZW5ndGggPiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdXNlRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tZXRhRGF0YSA9IHtcbiAgICAgICAgYnJvd3NlclZlcnNpb246IHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgICBicm93c2VyTmFtZTogdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlck5hbWUsXG4gICAgICAgIGNzc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uY3NzUHJlZml4LFxuICAgICAgICBqc1ByZWZpeDogdGhpcy5fYnJvd3NlckluZm8uanNQcmVmaXgsXG4gICAgICAgIGtlZXBVbnByZWZpeGVkOiB0aGlzLl9rZWVwVW5wcmVmaXhlZCxcbiAgICAgICAgcmVxdWlyZXNQcmVmaXg6IHRoaXMuX3JlcXVpcmVzUHJlZml4XG4gICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVmaXhlciwgW3tcbiAgICAgIGtleTogJ3ByZWZpeCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4KHN0eWxlKSB7XG4gICAgICAgIC8vIHVzZSBzdGF0aWMgcHJlZml4ZXIgYXMgZmFsbGJhY2sgaWYgdXNlckFnZW50IGNhbiBub3QgYmUgcmVzb2x2ZWRcbiAgICAgICAgaWYgKHRoaXMuX3VzZUZhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbGxiYWNrKHN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZpeFN0eWxlKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfcHJlZml4U3R5bGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcmVmaXhTdHlsZShzdHlsZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BlcnR5XTtcblxuICAgICAgICAgIC8vIGhhbmRsZSBuZXN0ZWQgb2JqZWN0c1xuICAgICAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHRoaXMucHJlZml4KHZhbHVlKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBhcnJheSB2YWx1ZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gKDAsIF9wcmVmaXhWYWx1ZTIuZGVmYXVsdCkocGx1Z2lucywgcHJvcGVydHksIHZhbHVlW2ldLCBzdHlsZSwgdGhpcy5fbWV0YURhdGEpO1xuICAgICAgICAgICAgICAoMCwgX2FkZE5ld1ZhbHVlc09ubHkyLmRlZmF1bHQpKGNvbWJpbmVkVmFsdWUsIHByb2Nlc3NlZFZhbHVlIHx8IHZhbHVlW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgICAgICAvLyBieSBhbnkgcGx1Z2luIHRvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb25zXG4gICAgICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IGNvbWJpbmVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfcHJvY2Vzc2VkVmFsdWUgPSAoMCwgX3ByZWZpeFZhbHVlMi5kZWZhdWx0KShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCB0aGlzLl9tZXRhRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIG9ubHkgbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCB3YXMgdG91Y2hlZFxuICAgICAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSBfcHJvY2Vzc2VkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyB0byBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVxdWlyZXNQcmVmaXguaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIHN0eWxlW3RoaXMuX2Jyb3dzZXJJbmZvLmpzUHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5fa2VlcFVucHJlZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVbcHJvcGVydHldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICBrZXk6ICdwcmVmaXhBbGwnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrKHN0eWxlcyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFByZWZpeGVyO1xuICB9KCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAxNSB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyNSB8fCBicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgJiYgYnJvd3NlclZlcnNpb24gPCA2LjEgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJyAmJiBicm93c2VyVmVyc2lvbiA8IDcpKSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBjc3NQcmVmaXggKyAnY2FsYygnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Jvc3NGYWRlO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3Jvc3NGYWRlKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2Nyb3NzLWZhZGUoJykgPiAtMSAmJiAoYnJvd3Nlck5hbWUgPT09ICdjaHJvbWUnIHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX2NocicgfHwgKGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknKSAmJiBicm93c2VyVmVyc2lvbiA8IDEwKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlLnJlcGxhY2UoL2Nyb3NzLWZhZGVcXCgvZywgY3NzUHJlZml4ICsgJ2Nyb3NzLWZhZGUoJyksIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBncmFiVmFsdWVzID0ge1xuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuXG52YXIgem9vbVZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gYWRkcyBwcmVmaXhlcyBmb3IgZmlyZWZveCwgY2hyb21lLCBzYWZhcmksIGFuZCBvcGVyYSByZWdhcmRsZXNzIG9mXG4gIC8vIHZlcnNpb24gdW50aWwgYSByZWxpYWJsZSBicm93c2VyIHN1cHBvcnQgaW5mbyBjYW4gYmUgZm91bmRcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNzlcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiBncmFiVmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3Nlck5hbWUgPT09ICdmaXJlZm94JyB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgfHwgYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB6b29tVmFsdWVzW3ZhbHVlXSAmJiAoYnJvd3Nlck5hbWUgPT09ICdmaXJlZm94JyAmJiBicm93c2VyVmVyc2lvbiA8IDI0IHx8IGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDM3IHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyAmJiBicm93c2VyVmVyc2lvbiA8IDkgfHwgYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgJiYgYnJvd3NlclZlcnNpb24gPCAyNCkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsdGVyO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2ZpbHRlcignKSA+IC0xICYmIChicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnIHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyAmJiBicm93c2VyVmVyc2lvbiA8IDkuMSkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZS5yZXBsYWNlKC9maWx0ZXJcXCgvZywgY3NzUHJlZml4ICsgJ2ZpbHRlcignKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSB7XG4gIGZsZXg6IHRydWUsXG4gICdpbmxpbmUtZmxleCc6IHRydWVcbn07XG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlc1t2YWx1ZV0gJiYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyAmJiBicm93c2VyVmVyc2lvbiA8IDI5ICYmIGJyb3dzZXJWZXJzaW9uID4gMjAgfHwgKGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnKSAmJiBicm93c2VyVmVyc2lvbiA8IDkgJiYgYnJvd3NlclZlcnNpb24gPiA2IHx8IGJyb3dzZXJOYW1lID09PSAnb3BlcmEnICYmIChicm93c2VyVmVyc2lvbiA9PT0gMTUgfHwgYnJvd3NlclZlcnNpb24gPT09IDE2KSkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveElFO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgZmxleDogJ2ZsZXhib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWZsZXhib3gnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zRmxleFByZWZlcnJlZFNpemUnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94SUUocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgYnJvd3NlclZlcnNpb24gPSBfcmVmLmJyb3dzZXJWZXJzaW9uLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQsXG4gICAgICByZXF1aXJlc1ByZWZpeCA9IF9yZWYucmVxdWlyZXNQcmVmaXg7XG5cbiAgaWYgKChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmxleCcpID4gLTEpICYmIChicm93c2VyTmFtZSA9PT0gJ2llX21vYicgfHwgYnJvd3Nlck5hbWUgPT09ICdpZScpICYmIGJyb3dzZXJWZXJzaW9uID09PSAxMCkge1xuICAgIGRlbGV0ZSByZXF1aXJlc1ByZWZpeFtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIWtlZXBVbnByZWZpeGVkICYmICFBcnJheS5pc0FycmF5KHN0eWxlW3Byb3BlcnR5XSkpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzUHJlZml4ICsgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hPbGQ7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJyxcbiAgZmxleDogJ2JveCcsXG4gICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtYm94J1xufTtcblxuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcycsXG4gIGZsZXhHcm93OiAnV2Via2l0Qm94RmxleCdcbn07XG5cbnZhciBvdGhlclByb3BzID0gWydhbGlnbkNvbnRlbnQnLCAnYWxpZ25TZWxmJywgJ29yZGVyJywgJ2ZsZXhHcm93JywgJ2ZsZXhTaHJpbmsnLCAnZmxleEJhc2lzJywgJ2ZsZXhEaXJlY3Rpb24nXTtcbnZhciBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoYWx0ZXJuYXRpdmVQcm9wcykuY29uY2F0KG90aGVyUHJvcHMpO1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGJyb3dzZXJOYW1lID0gX3JlZi5icm93c2VyTmFtZSxcbiAgICAgIGJyb3dzZXJWZXJzaW9uID0gX3JlZi5icm93c2VyVmVyc2lvbixcbiAgICAgIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkLFxuICAgICAgcmVxdWlyZXNQcmVmaXggPSBfcmVmLnJlcXVpcmVzUHJlZml4O1xuXG4gIGlmICgocHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSA+IC0xIHx8IHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdmbGV4JykgPiAtMSkgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAyMiB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyMSB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDw9IDYuMSB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZHJvaWQnICYmIGJyb3dzZXJWZXJzaW9uIDwgNC40IHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJykpIHtcbiAgICBkZWxldGUgcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldO1xuXG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCAmJiAhQXJyYXkuaXNBcnJheShzdHlsZVtwcm9wZXJ0eV0pKSB7XG4gICAgICBkZWxldGUgc3R5bGVbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgICBzdHlsZS5XZWJraXRCb3hPcmllbnQgPSAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xKSB7XG4gICAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdub3JtYWwnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiBhbHRlcm5hdGl2ZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgICB9XG4gICAgaWYgKGFsdGVybmF0aXZlUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICBzdHlsZVthbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XV0gPSBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFkaWVudDtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSAvbGluZWFyLWdyYWRpZW50fHJhZGlhbC1ncmFkaWVudHxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50fHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQvZ2k7XG5mdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBicm93c2VyVmVyc2lvbiA9IF9yZWYuYnJvd3NlclZlcnNpb24sXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZXMudGVzdCh2YWx1ZSkgJiYgKGJyb3dzZXJOYW1lID09PSAnZmlyZWZveCcgJiYgYnJvd3NlclZlcnNpb24gPCAxNiB8fCBicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCAyNiB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDwgNyB8fCAoYnJvd3Nlck5hbWUgPT09ICdvcGVyYScgfHwgYnJvd3Nlck5hbWUgPT09ICdvcF9taW5pJykgJiYgYnJvd3NlclZlcnNpb24gPCAxMi4xIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlclZlcnNpb24gPCA0LjQgfHwgYnJvd3Nlck5hbWUgPT09ICdhbmRfdWMnKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlLnJlcGxhY2UodmFsdWVzLCBmdW5jdGlvbiAoZ3JhZCkge1xuICAgICAgcmV0dXJuIGNzc1ByZWZpeCArIGdyYWQ7XG4gICAgfSksIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGltYWdlU2V0O1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaW1hZ2VTZXQocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgYnJvd3Nlck5hbWUgPSBfcmVmLmJyb3dzZXJOYW1lLFxuICAgICAgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignaW1hZ2Utc2V0KCcpID4gLTEgJiYgKGJyb3dzZXJOYW1lID09PSAnY2hyb21lJyB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyB8fCBicm93c2VyTmFtZSA9PT0gJ2FuZF9jaHInIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJyB8fCBicm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnIHx8IGJyb3dzZXJOYW1lID09PSAnc2FmYXJpJykpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZS5yZXBsYWNlKC9pbWFnZS1zZXRcXCgvZywgY3NzUHJlZml4ICsgJ2ltYWdlLXNldCgnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcG9zaXRpb247XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBfcmVmKSB7XG4gIHZhciBicm93c2VyTmFtZSA9IF9yZWYuYnJvd3Nlck5hbWUsXG4gICAgICBjc3NQcmVmaXggPSBfcmVmLmNzc1ByZWZpeCxcbiAgICAgIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knICYmIChicm93c2VyTmFtZSA9PT0gJ3NhZmFyaScgfHwgYnJvd3Nlck5hbWUgPT09ICdpb3Nfc2FmJykpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3NQcmVmaXggKyB2YWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xuXG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG5cbiAgLy8gVE9ETzogY2hyb21lICYgb3BlcmEgc3VwcG9ydCBpdFxufTtmdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgX3JlZikge1xuICB2YXIgY3NzUHJlZml4ID0gX3JlZi5jc3NQcmVmaXgsXG4gICAgICBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gVGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZVxuICAvLyBLZWVwIGFuIGV5ZSBvbiBpdFxuICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzc1ByZWZpeCArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9oeXBoZW5hdGVQcm9wZXJ0eScpO1xuXG52YXIgX2h5cGhlbmF0ZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IHRydWUsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvbjogdHJ1ZSxcbiAgV2Via2l0VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uOiB0cnVlLFxuICBNb3pUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cblxudmFyIHJlcXVpcmVzUHJlZml4RGFzaENhc2VkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIF9yZWYpIHtcbiAgdmFyIGNzc1ByZWZpeCA9IF9yZWYuY3NzUHJlZml4LFxuICAgICAga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkLFxuICAgICAgcmVxdWlyZXNQcmVmaXggPSBfcmVmLnJlcXVpcmVzUHJlZml4O1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgLy8gbWVtb2l6ZSB0aGUgcHJlZml4IGFycmF5IGZvciBsYXRlciB1c2VcbiAgICBpZiAoIXJlcXVpcmVzUHJlZml4RGFzaENhc2VkKSB7XG4gICAgICByZXF1aXJlc1ByZWZpeERhc2hDYXNlZCA9IE9iamVjdC5rZXlzKHJlcXVpcmVzUHJlZml4KS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3ApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgICByZXF1aXJlc1ByZWZpeERhc2hDYXNlZC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihwcm9wKSA+IC0xICYmIHByb3AgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSB2YWwucmVwbGFjZShwcm9wLCBjc3NQcmVmaXggKyBwcm9wKSArIChrZWVwVW5wcmVmaXhlZCA/ICcsJyArIHZhbCA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcmVmaXhlcjtcblxudmFyIF9wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfcHJlZml4UHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcGVydHkpO1xuXG52YXIgX3ByZWZpeFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJlZml4VmFsdWUnKTtcblxudmFyIF9wcmVmaXhWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhWYWx1ZSk7XG5cbnZhciBfYWRkTmV3VmFsdWVzT25seSA9IHJlcXVpcmUoJy4uL3V0aWxzL2FkZE5ld1ZhbHVlc09ubHknKTtcblxudmFyIF9hZGROZXdWYWx1ZXNPbmx5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZE5ld1ZhbHVlc09ubHkpO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNPYmplY3QnKTtcblxudmFyIF9pc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc09iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZWZpeGVyKF9yZWYpIHtcbiAgdmFyIHByZWZpeE1hcCA9IF9yZWYucHJlZml4TWFwLFxuICAgICAgcGx1Z2lucyA9IF9yZWYucGx1Z2lucztcblxuICBmdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzdHlsZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAvLyBoYW5kbGUgbmVzdGVkIG9iamVjdHNcbiAgICAgIGlmICgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICAgICAgLy8gaGFuZGxlIGFycmF5IHZhbHVlc1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZVtpXSwgc3R5bGUsIHByZWZpeE1hcCk7XG4gICAgICAgICAgKDAsIF9hZGROZXdWYWx1ZXNPbmx5Mi5kZWZhdWx0KShjb21iaW5lZFZhbHVlLCBwcm9jZXNzZWRWYWx1ZSB8fCB2YWx1ZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgd2FzIHRvdWNoZWRcbiAgICAgICAgLy8gYnkgYW55IHBsdWdpbiB0byBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uc1xuICAgICAgICBpZiAoY29tYmluZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gY29tYmluZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wcm9jZXNzZWRWYWx1ZSA9ICgwLCBfcHJlZml4VmFsdWUyLmRlZmF1bHQpKHBsdWdpbnMsIHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUsIHByZWZpeE1hcCk7XG5cbiAgICAgICAgLy8gb25seSBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IHdhcyB0b3VjaGVkXG4gICAgICAgIC8vIGJ5IGFueSBwbHVnaW4gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbnNcbiAgICAgICAgaWYgKF9wcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IF9wcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlID0gKDAsIF9wcmVmaXhQcm9wZXJ0eTIuZGVmYXVsdCkocHJlZml4TWFwLCBwcm9wZXJ0eSwgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcmVmaXhBbGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5mdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcm9zc0ZhZGU7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y3Jvc3MtZmFkZVxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGNyb3NzRmFkZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignY3Jvc3MtZmFkZSgnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHByZWZpeGVzLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvY3Jvc3MtZmFkZVxcKC9nLCBwcmVmaXggKyAnY3Jvc3MtZmFkZSgnKTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vyc29yO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlLFxuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmlsdGVyO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtZmlsdGVyLWZ1bmN0aW9uXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJyddO1xuZnVuY3Rpb24gZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdmaWx0ZXIoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ZpbHRlclxcKC9nLCBwcmVmaXggKyAnZmlsdGVyKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xudmFyIHZhbHVlcyA9IHtcbiAgZmxleDogWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtZmxleGJveCcsICctd2Via2l0LWZsZXgnLCAnZmxleCddLFxuICAnaW5saW5lLWZsZXgnOiBbJy13ZWJraXQtaW5saW5lLWJveCcsICctbW96LWlubGluZS1ib3gnLCAnLW1zLWlubGluZS1mbGV4Ym94JywgJy13ZWJraXQtaW5saW5lLWZsZXgnLCAnaW5saW5lLWZsZXgnXVxufTtcblxuZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZXNbdmFsdWVdO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnXG59O1xudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduQ29udGVudDogJ21zRmxleExpbmVQYWNrJyxcbiAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdtc0ZsZXhQYWNrJyxcbiAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICBmbGV4U2hyaW5rOiAnbXNGbGV4TmVnYXRpdmUnLFxuICBmbGV4QmFzaXM6ICdtc0ZsZXhQcmVmZXJyZWRTaXplJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSwgc3R5bGUpIHtcbiAgaWYgKGFsdGVybmF0aXZlUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgc3R5bGVbYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV1dID0gYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJyxcbiAgZmxleEdyb3c6ICdXZWJraXRCb3hGbGV4J1xufTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignY29sdW1uJykgPiAtMSkge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94T3JpZW50ID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEpIHtcbiAgICAgIHN0eWxlLldlYmtpdEJveERpcmVjdGlvbiA9ICdyZXZlcnNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuV2Via2l0Qm94RGlyZWN0aW9uID0gJ25vcm1hbCc7XG4gICAgfVxuICB9XG4gIGlmIChhbHRlcm5hdGl2ZVByb3BzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHN0eWxlW2FsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldXSA9IGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICcnXTtcblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC9naTtcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlcy50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodmFsdWVzLCBmdW5jdGlvbiAoZ3JhZCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgZ3JhZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbWFnZVNldDtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCdjc3MtaW4tanMtdXRpbHMvbGliL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Y3NzLWltYWdlLXNldFxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICcnXTtcbmZ1bmN0aW9uIGltYWdlU2V0KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdpbWFnZS1zZXQoJykgPiAtMSkge1xuICAgIHJldHVybiBwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2ltYWdlLXNldFxcKC9nLCBwcmVmaXggKyAnaW1hZ2Utc2V0KCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwb3NpdGlvbjtcbmZ1bmN0aW9uIHBvc2l0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdwb3NpdGlvbicgJiYgdmFsdWUgPT09ICdzdGlja3knKSB7XG4gICAgcmV0dXJuIFsnLXdlYmtpdC1zdGlja3knLCAnc3RpY2t5J107XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpemluZztcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnJ107XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICBtYXhIZWlnaHQ6IHRydWUsXG4gIG1heFdpZHRoOiB0cnVlLFxuICB3aWR0aDogdHJ1ZSxcbiAgaGVpZ2h0OiB0cnVlLFxuICBjb2x1bW5XaWR0aDogdHJ1ZSxcbiAgbWluV2lkdGg6IHRydWUsXG4gIG1pbkhlaWdodDogdHJ1ZVxufTtcbnZhciB2YWx1ZXMgPSB7XG4gICdtaW4tY29udGVudCc6IHRydWUsXG4gICdtYXgtY29udGVudCc6IHRydWUsXG4gICdmaWxsLWF2YWlsYWJsZSc6IHRydWUsXG4gICdmaXQtY29udGVudCc6IHRydWUsXG4gICdjb250YWluLWZsb2F0cyc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHNpemluZyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJlZml4ZXMubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbjtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJ2Nzcy1pbi1qcy11dGlscy9saWIvaHlwaGVuYXRlUHJvcGVydHknKTtcblxudmFyIF9oeXBoZW5hdGVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVQcm9wZXJ0eSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnY3NzLWluLWpzLXV0aWxzL2xpYi9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvbjogdHJ1ZSxcbiAgTW96VHJhbnNpdGlvblByb3BlcnR5OiB0cnVlXG59O1xuXG5cbnZhciBwcmVmaXhNYXBwaW5nID0ge1xuICBXZWJraXQ6ICctd2Via2l0LScsXG4gIE1vejogJy1tb3otJyxcbiAgbXM6ICctbXMtJ1xufTtcblxuZnVuY3Rpb24gcHJlZml4VmFsdWUodmFsdWUsIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gIGlmICgoMCwgX2lzUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gIHZhciBtdWx0aXBsZVZhbHVlcyA9IHZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtdWx0aXBsZVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBzaW5nbGVWYWx1ZSA9IG11bHRpcGxlVmFsdWVzW2ldO1xuICAgIHZhciB2YWx1ZXMgPSBbc2luZ2xlVmFsdWVdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnR5UHJlZml4TWFwKSB7XG4gICAgICB2YXIgZGFzaENhc2VQcm9wZXJ0eSA9ICgwLCBfaHlwaGVuYXRlUHJvcGVydHkyLmRlZmF1bHQpKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHNpbmdsZVZhbHVlLmluZGV4T2YoZGFzaENhc2VQcm9wZXJ0eSkgPiAtMSAmJiBkYXNoQ2FzZVByb3BlcnR5ICE9PSAnb3JkZXInKSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IHByb3BlcnR5UHJlZml4TWFwW3Byb3BlcnR5XTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIHBMZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGogPCBwTGVuOyArK2opIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgdmFsdWVzLnVuc2hpZnQoc2luZ2xlVmFsdWUucmVwbGFjZShkYXNoQ2FzZVByb3BlcnR5LCBwcmVmaXhNYXBwaW5nW3ByZWZpeGVzW2pdXSArIGRhc2hDYXNlUHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG11bHRpcGxlVmFsdWVzW2ldID0gdmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgcHJvcGVydHlQcmVmaXhNYXApIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlLCBwcm9wZXJ0eVByZWZpeE1hcCk7XG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy1tb3otfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIHdlYmtpdE91dHB1dDtcbiAgICB9XG5cbiAgICB2YXIgbW96T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAhLy13ZWJraXQtfC1tcy0vLnRlc3QodmFsKTtcbiAgICB9KS5qb2luKCcsJyk7XG5cbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignTW96JykgPiAtMSkge1xuICAgICAgcmV0dXJuIG1vek91dHB1dDtcbiAgICB9XG5cbiAgICBzdHlsZVsnV2Via2l0JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHdlYmtpdE91dHB1dDtcbiAgICBzdHlsZVsnTW96JyArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IG1vek91dHB1dDtcbiAgICByZXR1cm4gb3V0cHV0VmFsdWU7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkTmV3VmFsdWVzT25seTtcbmZ1bmN0aW9uIGFkZElmTmV3KGxpc3QsIHZhbHVlKSB7XG4gIGlmIChsaXN0LmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGxpc3QucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3VmFsdWVzT25seShsaXN0LCB2YWx1ZXMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFkZElmTmV3KGxpc3QsIHZhbHVlcyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYXBpdGFsaXplU3RyaW5nO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QnJvd3NlckluZm9ybWF0aW9uO1xuXG52YXIgX2Jvd3NlciA9IHJlcXVpcmUoJ2Jvd3NlcicpO1xuXG52YXIgX2Jvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3dzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJlZml4QnlCcm93c2VyID0ge1xuICBjaHJvbWU6ICdXZWJraXQnLFxuICBzYWZhcmk6ICdXZWJraXQnLFxuICBpb3M6ICdXZWJraXQnLFxuICBhbmRyb2lkOiAnV2Via2l0JyxcbiAgcGhhbnRvbTogJ1dlYmtpdCcsXG4gIG9wZXJhOiAnV2Via2l0JyxcbiAgd2Vib3M6ICdXZWJraXQnLFxuICBibGFja2JlcnJ5OiAnV2Via2l0JyxcbiAgYmFkYTogJ1dlYmtpdCcsXG4gIHRpemVuOiAnV2Via2l0JyxcbiAgY2hyb21pdW06ICdXZWJraXQnLFxuICB2aXZhbGRpOiAnV2Via2l0JyxcbiAgZmlyZWZveDogJ01veicsXG4gIHNlYW1vbmV5OiAnTW96JyxcbiAgc2FpbGZpc2g6ICdNb3onLFxuICBtc2llOiAnbXMnLFxuICBtc2VkZ2U6ICdtcydcbn07XG5cblxudmFyIGJyb3dzZXJCeUNhbkl1c2VBbGlhcyA9IHtcbiAgY2hyb21lOiAnY2hyb21lJyxcbiAgY2hyb21pdW06ICdjaHJvbWUnLFxuICBzYWZhcmk6ICdzYWZhcmknLFxuICBmaXJmb3g6ICdmaXJlZm94JyxcbiAgbXNlZGdlOiAnZWRnZScsXG4gIG9wZXJhOiAnb3BlcmEnLFxuICB2aXZhbGRpOiAnb3BlcmEnLFxuICBtc2llOiAnaWUnXG59O1xuXG5mdW5jdGlvbiBnZXRCcm93c2VyTmFtZShicm93c2VySW5mbykge1xuICBpZiAoYnJvd3NlckluZm8uZmlyZWZveCkge1xuICAgIHJldHVybiAnZmlyZWZveCc7XG4gIH1cblxuICBpZiAoYnJvd3NlckluZm8ubW9iaWxlIHx8IGJyb3dzZXJJbmZvLnRhYmxldCkge1xuICAgIGlmIChicm93c2VySW5mby5pb3MpIHtcbiAgICAgIHJldHVybiAnaW9zX3NhZic7XG4gICAgfSBlbHNlIGlmIChicm93c2VySW5mby5hbmRyb2lkKSB7XG4gICAgICByZXR1cm4gJ2FuZHJvaWQnO1xuICAgIH0gZWxzZSBpZiAoYnJvd3NlckluZm8ub3BlcmEpIHtcbiAgICAgIHJldHVybiAnb3BfbWluaSc7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgYnJvd3NlciBpbiBicm93c2VyQnlDYW5JdXNlQWxpYXMpIHtcbiAgICBpZiAoYnJvd3NlckluZm8uaGFzT3duUHJvcGVydHkoYnJvd3NlcikpIHtcbiAgICAgIHJldHVybiBicm93c2VyQnlDYW5JdXNlQWxpYXNbYnJvd3Nlcl07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVXNlcyBib3dzZXIgdG8gZ2V0IGRlZmF1bHQgYnJvd3NlciBicm93c2VySW5mb3JtYXRpb24gc3VjaCBhcyB2ZXJzaW9uIGFuZCBuYW1lXG4gKiBFdmFsdWF0ZXMgYm93c2VyIGJyb3dzZXJJbmZvIGFuZCBhZGRzIHZlbmRvclByZWZpeCBicm93c2VySW5mb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdGhhdCBnZXRzIGV2YWx1YXRlZFxuICovXG5mdW5jdGlvbiBnZXRCcm93c2VySW5mb3JtYXRpb24odXNlckFnZW50KSB7XG4gIHZhciBicm93c2VySW5mbyA9IF9ib3dzZXIyLmRlZmF1bHQuX2RldGVjdCh1c2VyQWdlbnQpO1xuXG4gIGlmIChicm93c2VySW5mby55YW5kZXhicm93c2VyKSB7XG4gICAgYnJvd3NlckluZm8gPSBfYm93c2VyMi5kZWZhdWx0Ll9kZXRlY3QodXNlckFnZW50LnJlcGxhY2UoL1lhQnJvd3NlclxcL1swLTkuXSovLCAnJykpO1xuICB9XG5cbiAgZm9yICh2YXIgYnJvd3NlciBpbiBwcmVmaXhCeUJyb3dzZXIpIHtcbiAgICBpZiAoYnJvd3NlckluZm8uaGFzT3duUHJvcGVydHkoYnJvd3NlcikpIHtcbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhCeUJyb3dzZXJbYnJvd3Nlcl07XG5cbiAgICAgIGJyb3dzZXJJbmZvLmpzUHJlZml4ID0gcHJlZml4O1xuICAgICAgYnJvd3NlckluZm8uY3NzUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBicm93c2VySW5mby5icm93c2VyTmFtZSA9IGdldEJyb3dzZXJOYW1lKGJyb3dzZXJJbmZvKTtcblxuICAvLyBGb3IgY29yZG92YSBJT1MgOCB0aGUgdmVyc2lvbiBpcyBtaXNzaW5nLCBzZXQgdHJ1bmNhdGVkIG9zdmVyc2lvbiB0byBwcmV2ZW50IE5hTlxuICBpZiAoYnJvd3NlckluZm8udmVyc2lvbikge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gcGFyc2VGbG9hdChicm93c2VySW5mby52ZXJzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICBicm93c2VySW5mby5icm93c2VyVmVyc2lvbiA9IHBhcnNlSW50KHBhcnNlRmxvYXQoYnJvd3NlckluZm8ub3N2ZXJzaW9uKSwgMTApO1xuICB9XG5cbiAgYnJvd3NlckluZm8ub3NWZXJzaW9uID0gcGFyc2VGbG9hdChicm93c2VySW5mby5vc3ZlcnNpb24pO1xuXG4gIC8vIGlPUyBmb3JjZXMgYWxsIGJyb3dzZXJzIHRvIHVzZSBTYWZhcmkgdW5kZXIgdGhlIGhvb2RcbiAgLy8gYXMgdGhlIFNhZmFyaSB2ZXJzaW9uIHNlZW1zIHRvIG1hdGNoIHRoZSBpT1MgdmVyc2lvblxuICAvLyB3ZSBqdXN0IGV4cGxpY2l0ZWx5IHVzZSB0aGUgb3N2ZXJzaW9uIGluc3RlYWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzcyXG4gIGlmIChicm93c2VySW5mby5icm93c2VyTmFtZSA9PT0gJ2lvc19zYWYnICYmIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID4gYnJvd3NlckluZm8ub3NWZXJzaW9uKSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3NlclZlcnNpb24gPSBicm93c2VySW5mby5vc1ZlcnNpb247XG4gIH1cblxuICAvLyBzZXBlcmF0ZSBuYXRpdmUgYW5kcm9pZCBjaHJvbWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzQ1XG4gIGlmIChicm93c2VySW5mby5icm93c2VyTmFtZSA9PT0gJ2FuZHJvaWQnICYmIGJyb3dzZXJJbmZvLmNocm9tZSAmJiBicm93c2VySW5mby5icm93c2VyVmVyc2lvbiA+IDM3KSB7XG4gICAgYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPSAnYW5kX2Nocic7XG4gIH1cblxuICAvLyBGb3IgYW5kcm9pZCA8IDQuNCB3ZSB3YW50IHRvIGNoZWNrIHRoZSBvc3ZlcnNpb25cbiAgLy8gbm90IHRoZSBjaHJvbWUgdmVyc2lvbiwgc2VlIGlzc3VlICMyNlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvMjZcbiAgaWYgKGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlckluZm8ub3NWZXJzaW9uIDwgNSkge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gYnJvd3NlckluZm8ub3NWZXJzaW9uO1xuICB9XG5cbiAgLy8gU2Ftc3VuZyBicm93c2VyIGFyZSBiYXNpY2FsbHkgYnVpbGQgb24gQ2hyb21lID4gNDRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzEwMlxuICBpZiAoYnJvd3NlckluZm8uYnJvd3Nlck5hbWUgPT09ICdhbmRyb2lkJyAmJiBicm93c2VySW5mby5zYW1zdW5nQnJvd3Nlcikge1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJOYW1lID0gJ2FuZF9jaHInO1xuICAgIGJyb3dzZXJJbmZvLmJyb3dzZXJWZXJzaW9uID0gNDQ7XG4gIH1cblxuICByZXR1cm4gYnJvd3NlckluZm87XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRQcmVmaXhlZEtleWZyYW1lcztcbmZ1bmN0aW9uIGdldFByZWZpeGVkS2V5ZnJhbWVzKGJyb3dzZXJOYW1lLCBicm93c2VyVmVyc2lvbiwgY3NzUHJlZml4KSB7XG4gIHZhciBwcmVmaXhlZEtleWZyYW1lcyA9ICdrZXlmcmFtZXMnO1xuXG4gIGlmIChicm93c2VyTmFtZSA9PT0gJ2Nocm9tZScgJiYgYnJvd3NlclZlcnNpb24gPCA0MyB8fCAoYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknIHx8IGJyb3dzZXJOYW1lID09PSAnaW9zX3NhZicpICYmIGJyb3dzZXJWZXJzaW9uIDwgOSB8fCBicm93c2VyTmFtZSA9PT0gJ29wZXJhJyAmJiBicm93c2VyVmVyc2lvbiA8IDMwIHx8IGJyb3dzZXJOYW1lID09PSAnYW5kcm9pZCcgJiYgYnJvd3NlclZlcnNpb24gPD0gNC40IHx8IGJyb3dzZXJOYW1lID09PSAnYW5kX3VjJykge1xuICAgIHJldHVybiBjc3NQcmVmaXggKyBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRLZXlmcmFtZXM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFByZWZpeGVkVmFsdWU7XG5mdW5jdGlvbiBnZXRQcmVmaXhlZFZhbHVlKHByZWZpeGVkVmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCkge1xuICBpZiAoa2VlcFVucHJlZml4ZWQpIHtcbiAgICByZXR1cm4gW3ByZWZpeGVkVmFsdWUsIHZhbHVlXTtcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRWYWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc09iamVjdDtcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFByb3BlcnR5O1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwcmVmaXhQcm9wZXJ0eShwcmVmaXhQcm9wZXJ0aWVzLCBwcm9wZXJ0eSwgc3R5bGUpIHtcbiAgaWYgKHByZWZpeFByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgdmFyIHJlcXVpcmVkUHJlZml4ZXMgPSBwcmVmaXhQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICB2YXIgY2FwaXRhbGl6ZWRQcm9wZXJ0eSA9ICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN0eWxlUHJvcGVydHkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHN0eWxlUHJvcGVydHkgPT09IHByb3BlcnR5KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVxdWlyZWRQcmVmaXhlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIG5ld1N0eWxlW3JlcXVpcmVkUHJlZml4ZXNbal0gKyBjYXBpdGFsaXplZFByb3BlcnR5XSA9IHN0eWxlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbmV3U3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSBzdHlsZVtzdHlsZVByb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0eWxlO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4VmFsdWU7XG5mdW5jdGlvbiBwcmVmaXhWYWx1ZShwbHVnaW5zLCBwcm9wZXJ0eSwgdmFsdWUsIHN0eWxlLCBtZXRhRGF0YSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGx1Z2lucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHBsdWdpbnNbaV0ocHJvcGVydHksIHZhbHVlLCBzdHlsZSwgbWV0YURhdGEpO1xuXG4gICAgLy8gd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBpZiBhIHZhbHVlIGlzIHJldHVybmVkXG4gICAgLy8gYXMgYWxsIHBsdWdpbiBjcml0ZXJpYSBhcmUgdW5pcXVlXG4gICAgaWYgKHByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc2VkVmFsdWU7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiaW1wb3J0IGFwcGVuZFB4SWZOZWVkZWQgZnJvbSAnLi9hcHBlbmQtcHgtaWYtbmVlZGVkJztcbmltcG9ydCBtYXBPYmplY3QgZnJvbSAnLi9tYXAtb2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUoc3R5bGUpIHtcbiAgcmV0dXJuIG1hcE9iamVjdChzdHlsZSwgZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmV0dXJuIGFwcGVuZFB4SWZOZWVkZWQoa2V5LCBzdHlsZVtrZXldKSArICcgIWltcG9ydGFudCc7XG4gIH0pO1xufSIsIlxuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9cbi8vIDEwMmNkMjkxODk5Zjk5NDJhNzZjNDBhMGU3ODkyMGE2ZmU1NDRkYzEvXG4vLyBzcmMvcmVuZGVyZXJzL2RvbS9zaGFyZWQvQ1NTUHJvcGVydHkuanNcbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG5cbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQeElmTmVlZGVkKHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5lZWRzUHhTdWZmaXggPSAhaXNVbml0bGVzc051bWJlcltwcm9wZXJ0eU5hbWVdICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDA7XG4gIHJldHVybiBuZWVkc1B4U3VmZml4ID8gdmFsdWUgKyAncHgnIDogdmFsdWU7XG59IiwidmFyIF9jYW1lbENhc2VSZWdleCA9IC8oW2Etel0pPyhbQS1aXSkvZztcblxudmFyIF9jYW1lbENhc2VSZXBsYWNlciA9IGZ1bmN0aW9uIF9jYW1lbENhc2VSZXBsYWNlcihtYXRjaCwgcDEsIHAyKSB7XG4gIHJldHVybiAocDEgfHwgJycpICsgJy0nICsgcDIudG9Mb3dlckNhc2UoKTtcbn07XG5cbmV4cG9ydCB2YXIgY2FtZWxDYXNlVG9EYXNoQ2FzZSA9IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvRGFzaENhc2Uocykge1xuICByZXR1cm4gcy5yZXBsYWNlKF9jYW1lbENhc2VSZWdleCwgX2NhbWVsQ2FzZVJlcGxhY2VyKTtcbn07XG5cbnZhciBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UgPSBmdW5jdGlvbiBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UocHJlZml4ZWRTdHlsZSkge1xuICAvLyBTaW5jZSBwcmVmaXggaXMgZXhwZWN0ZWQgdG8gd29yayBvbiBpbmxpbmUgc3R5bGUgb2JqZWN0cywgd2UgbXVzdFxuICAvLyB0cmFuc2xhdGUgdGhlIGtleXMgdG8gZGFzaCBjYXNlIGZvciByZW5kZXJpbmcgdG8gQ1NTLlxuICByZXR1cm4gT2JqZWN0LmtleXMocHJlZml4ZWRTdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHZhciBkYXNoQ2FzZUtleSA9IGNhbWVsQ2FzZVRvRGFzaENhc2Uoa2V5KTtcblxuICAgIC8vIEZpeCBJRSB2ZW5kb3IgcHJlZml4XG4gICAgaWYgKC9ebXMtLy50ZXN0KGRhc2hDYXNlS2V5KSkge1xuICAgICAgZGFzaENhc2VLZXkgPSAnLScgKyBkYXNoQ2FzZUtleTtcbiAgICB9XG5cbiAgICByZXN1bHRbZGFzaENhc2VLZXldID0gcHJlZml4ZWRTdHlsZVtrZXldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZTsiLCIvKiBmbG93ICovXG5cbnZhciBjbGVhblN0YXRlS2V5ID0gZnVuY3Rpb24gY2xlYW5TdGF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleSA9PT0gbnVsbCB8fCB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyA/ICdtYWluJyA6IGtleS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYW5TdGF0ZUtleTsiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBFbmhhbmNlciBmcm9tICcuLi9lbmhhbmNlcic7XG5pbXBvcnQgU3R5bGVLZWVwZXIgZnJvbSAnLi4vc3R5bGUta2VlcGVyJztcbmltcG9ydCBTdHlsZVNoZWV0IGZyb20gJy4vc3R5bGUtc2hlZXQnO1xuXG5cbmZ1bmN0aW9uIF9nZXRTdHlsZUtlZXBlcihpbnN0YW5jZSkge1xuICBpZiAoIWluc3RhbmNlLl9yYWRpdW1TdHlsZUtlZXBlcikge1xuICAgIHZhciB1c2VyQWdlbnQgPSBpbnN0YW5jZS5wcm9wcy5yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UucHJvcHMucmFkaXVtQ29uZmlnLnVzZXJBZ2VudCB8fCBpbnN0YW5jZS5jb250ZXh0Ll9yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UuY29udGV4dC5fcmFkaXVtQ29uZmlnLnVzZXJBZ2VudDtcbiAgICBpbnN0YW5jZS5fcmFkaXVtU3R5bGVLZWVwZXIgPSBuZXcgU3R5bGVLZWVwZXIodXNlckFnZW50KTtcbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZS5fcmFkaXVtU3R5bGVLZWVwZXI7XG59XG5cbnZhciBTdHlsZVJvb3QgPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlUm9vdCwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlUm9vdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVSb290KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdHlsZVJvb3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHlsZVJvb3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF9nZXRTdHlsZUtlZXBlcihfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlUm9vdCwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4geyBfcmFkaXVtU3R5bGVLZWVwZXI6IF9nZXRTdHlsZUtlZXBlcih0aGlzKSB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgICAvLyBQYXNzIGRvd24gYWxsIHByb3BzIGV4Y2VwdCBjb25maWcgdG8gdGhlIHJlbmRlcmVkIGRpdi5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHJhZGl1bUNvbmZpZyA9IF9wcm9wcy5yYWRpdW1Db25maWcsXG4gICAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsncmFkaXVtQ29uZmlnJ10pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG90aGVyUHJvcHMsXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVTaGVldCwgbnVsbClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlUm9vdDtcbn0oUHVyZUNvbXBvbmVudCk7XG5cblN0eWxlUm9vdC5jb250ZXh0VHlwZXMgPSB7XG4gIF9yYWRpdW1Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIF9yYWRpdW1TdHlsZUtlZXBlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoU3R5bGVLZWVwZXIpXG59O1xuXG5TdHlsZVJvb3QuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIF9yYWRpdW1TdHlsZUtlZXBlcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoU3R5bGVLZWVwZXIpXG59O1xuXG5TdHlsZVJvb3QgPSBFbmhhbmNlcihTdHlsZVJvb3QpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVJvb3Q7IiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGFzcywgX3RlbXA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTdHlsZUtlZXBlciBmcm9tICcuLi9zdHlsZS1rZWVwZXInO1xuXG52YXIgU3R5bGVTaGVldCA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdHlsZVNoZWV0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdHlsZVNoZWV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3R5bGVTaGVldCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuX29uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5leHRDU1MgPSBfdGhpcy5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlci5nZXRDU1MoKTtcblxuICAgICAgaWYgKG5leHRDU1MgIT09IF90aGlzLl9jc3MpIHtcbiAgICAgICAgaWYgKF90aGlzLl9yb290KSB7XG4gICAgICAgICAgX3RoaXMuX3Jvb3QuaW5uZXJIVE1MID0gbmV4dENTUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJvb3Qgc3R5bGUgb2JqZWN0IGZvdW5kLCBldmVuIGFmdGVyIFN0eWxlU2hlZXQgbW91bnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NzcyA9IG5leHRDU1M7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9jc3MgPSBfdGhpcy5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlci5nZXRDU1MoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlci5zdWJzY3JpYmUodGhpcy5fb25DaGFuZ2UpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5fY3NzIH0sXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX3Jvb3QgPSBjO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oQ29tcG9uZW50KSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bVN0eWxlS2VlcGVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihTdHlsZUtlZXBlcilcbn0sIF90ZW1wKTtcbmV4cG9ydCB7IFN0eWxlU2hlZXQgYXMgZGVmYXVsdCB9OyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGFzcywgX3RlbXA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IGNzc1J1bGVTZXRUb1N0cmluZyBmcm9tICcuLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJztcblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG52YXIgU3R5bGUgPSAoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3R5bGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHlsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlLCBbe1xuICAgIGtleTogJ19idWlsZFN0eWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZFN0eWxlcyhzdHlsZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdXNlckFnZW50ID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWcgJiYgdGhpcy5wcm9wcy5yYWRpdW1Db25maWcudXNlckFnZW50IHx8IHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuX3JhZGl1bUNvbmZpZyAmJiB0aGlzLmNvbnRleHQuX3JhZGl1bUNvbmZpZy51c2VyQWdlbnQ7XG5cbiAgICAgIHZhciBzY29wZVNlbGVjdG9yID0gdGhpcy5wcm9wcy5zY29wZVNlbGVjdG9yO1xuXG4gICAgICB2YXIgcm9vdFJ1bGVzID0gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzZWxlY3Rvcikge1xuICAgICAgICBpZiAoX3R5cGVvZihzdHlsZXNbc2VsZWN0b3JdKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBhY2N1bXVsYXRvcltzZWxlY3Rvcl0gPSBzdHlsZXNbc2VsZWN0b3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfSwge30pO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSBPYmplY3Qua2V5cyhyb290UnVsZXMpLmxlbmd0aCA/IGNzc1J1bGVTZXRUb1N0cmluZyhzY29wZVNlbGVjdG9yIHx8ICcnLCByb290UnVsZXMsIHVzZXJBZ2VudCkgOiAnJztcblxuICAgICAgcmV0dXJuIHJvb3RTdHlsZXMgKyBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBydWxlcyA9IHN0eWxlc1tzZWxlY3Rvcl07XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnbWVkaWFRdWVyaWVzJykge1xuICAgICAgICAgIGFjY3VtdWxhdG9yICs9IF90aGlzMi5fYnVpbGRNZWRpYVF1ZXJ5U3RyaW5nKHJ1bGVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHN0eWxlc1tzZWxlY3Rvcl0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBjb21wbGV0ZVNlbGVjdG9yID0gc2NvcGVTZWxlY3RvciA/IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVTZWxlY3RvciArICcgJyArIHBhcnQudHJpbSgpO1xuICAgICAgICAgIH0pLmpvaW4oJywnKSA6IHNlbGVjdG9yO1xuXG4gICAgICAgICAgYWNjdW11bGF0b3IgKz0gY3NzUnVsZVNldFRvU3RyaW5nKGNvbXBsZXRlU2VsZWN0b3IsIHJ1bGVzLCB1c2VyQWdlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfSwgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19idWlsZE1lZGlhUXVlcnlTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYnVpbGRNZWRpYVF1ZXJ5U3RyaW5nKHN0eWxlc0J5TWVkaWFRdWVyeSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBtZWRpYVF1ZXJ5U3RyaW5nID0gJyc7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlc0J5TWVkaWFRdWVyeSkuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgbWVkaWFRdWVyeVN0cmluZyArPSAnQG1lZGlhICcgKyBxdWVyeSArICd7JyArIF90aGlzMy5fYnVpbGRTdHlsZXMoc3R5bGVzQnlNZWRpYVF1ZXJ5W3F1ZXJ5XSkgKyAnfSc7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1lZGlhUXVlcnlTdHJpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnJ1bGVzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGVzID0gdGhpcy5fYnVpbGRTdHlsZXModGhpcy5wcm9wcy5ydWxlcyk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBzdHlsZXMgfSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGU7XG59KFB1cmVDb21wb25lbnQpLCBfY2xhc3MucHJvcFR5cGVzID0ge1xuICByYWRpdW1Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJ1bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzY29wZVNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICBfcmFkaXVtQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0XG59LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICBzY29wZVNlbGVjdG9yOiAnJ1xufSwgX3RlbXApO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlOyIsImltcG9ydCBhcHBlbmRQeElmTmVlZGVkIGZyb20gJy4vYXBwZW5kLXB4LWlmLW5lZWRlZCc7XG5pbXBvcnQgY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlIGZyb20gJy4vY2FtZWwtY2FzZS1wcm9wcy10by1kYXNoLWNhc2UnO1xuaW1wb3J0IG1hcE9iamVjdCBmcm9tICcuL21hcC1vYmplY3QnO1xuaW1wb3J0IHsgZ2V0UHJlZml4ZWRTdHlsZSB9IGZyb20gJy4vcHJlZml4ZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5ICsgJzogJyArIHN0eWxlW3Byb3BlcnR5XSArICc7JztcbiAgfSkuam9pbignXFxuJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNzc1J1bGVTZXRUb1N0cmluZyhzZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCkge1xuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHJ1bGVzV2l0aFB4ID0gbWFwT2JqZWN0KHJ1bGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiBhcHBlbmRQeElmTmVlZGVkKGtleSwgdmFsdWUpO1xuICB9KTtcbiAgdmFyIHByZWZpeGVkUnVsZXMgPSBnZXRQcmVmaXhlZFN0eWxlKHJ1bGVzV2l0aFB4LCB1c2VyQWdlbnQpO1xuICB2YXIgY3NzUHJlZml4ZWRSdWxlcyA9IGNhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZShwcmVmaXhlZFJ1bGVzKTtcbiAgdmFyIHNlcmlhbGl6ZWRSdWxlcyA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhjc3NQcmVmaXhlZFJ1bGVzKTtcbiAgcmV0dXJuIHNlbGVjdG9yICsgJ3snICsgc2VyaWFsaXplZFJ1bGVzICsgJ30nO1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTdHlsZUtlZXBlciBmcm9tICcuL3N0eWxlLWtlZXBlcic7XG5pbXBvcnQgcmVzb2x2ZVN0eWxlcyBmcm9tICcuL3Jlc29sdmUtc3R5bGVzJztcbmltcG9ydCBnZXRSYWRpdW1TdHlsZVN0YXRlIGZyb20gJy4vZ2V0LXJhZGl1bS1zdHlsZS1zdGF0ZSc7XG5cbnZhciBLRVlTX1RPX0lHTk9SRV9XSEVOX0NPUFlJTkdfUFJPUEVSVElFUyA9IFsnYXJndW1lbnRzJywgJ2NhbGxlZScsICdjYWxsZXInLCAnbGVuZ3RoJywgJ25hbWUnLCAncHJvdG90eXBlJywgJ3R5cGUnXTtcblxudmFyIFJBRElVTV9QUk9UTyA9IHZvaWQgMDtcbnZhciBSQURJVU1fTUVUSE9EUyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gY29weVByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQpIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoS0VZU19UT19JR05PUkVfV0hFTl9DT1BZSU5HX1BST1BFUlRJRVMuaW5kZXhPZihrZXkpIDwgMCAmJiAhdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEhhbmRsZSBzY2VuYXJpb3Mgb2Y6XG4vLyAtIEluaGVyaXQgZnJvbSBgUmVhY3QuQ29tcG9uZW50YCBpbiBhbnkgZmFzaGlvblxuLy8gICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzczOFxuLy8gLSBUaGVyZSdzIGFuIGV4cGxpY2l0IGByZW5kZXJgIGZpZWxkIGRlZmluZWRcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzKGNvbXBvbmVudCkge1xuICB2YXIgcHJvdG8gPSBjb21wb25lbnQucHJvdG90eXBlIHx8IHt9O1xuXG4gIHJldHVybiAhY29tcG9uZW50LmlzUmVhY3RDb21wb25lbnQgJiYgIXByb3RvLmlzUmVhY3RDb21wb25lbnQgJiYgIWNvbXBvbmVudC5yZW5kZXIgJiYgIXByb3RvLnJlbmRlcjtcbn1cblxuLy8gQ2hlY2sgaWYgdmFsdWUgaXMgYSByZWFsIEVTIGNsYXNzIGluIE5hdGl2ZSAvIE5vZGUgY29kZS5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwNzYwMjM2XG5mdW5jdGlvbiBpc05hdGl2ZUNsYXNzKGNvbXBvbmVudCkge1xuICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAvXlxccypjbGFzc1xccysvLnRlc3QoY29tcG9uZW50LnRvU3RyaW5nKCkpO1xufVxuXG4vLyBIYW5kbGUgZXM3IGFycm93IGZ1bmN0aW9ucyBvbiBSZWFjdCBjbGFzcyBtZXRob2QgbmFtZXMgYnkgZGV0ZWN0aW5nXG4vLyBhbmQgdHJhbnNmZXJpbmcgdGhlIGluc3RhbmNlIG1ldGhvZCB0byBvcmlnaW5hbCBjbGFzcyBwcm90b3R5cGUuXG4vLyAoVXNpbmcgYSBjb3B5IG9mIHRoZSBjbGFzcykuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzczOFxuZnVuY3Rpb24gY29weUFycm93RnVuY3MoZW5oYW5jZWRTZWxmLCBDb21wb3NlZENvbXBvbmVudCkge1xuICBSQURJVU1fTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHRoaXNEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlbmhhbmNlZFNlbGYsIG5hbWUpO1xuICAgIHZhciB0aGlzTWV0aG9kID0gKHRoaXNEZXNjIHx8IHt9KS52YWx1ZTtcbiAgICAvLyBPbmx5IGNhcmUgaWYgaGF2ZSBpbnN0YW5jZSBtZXRob2QuXG4gICAgaWYgKCF0aGlzTWV0aG9kKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByYWRpdW1EZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSQURJVU1fUFJPVE8sIG5hbWUpO1xuICAgIHZhciByYWRpdW1Qcm90b01ldGhvZCA9IChyYWRpdW1EZXNjIHx8IHt9KS52YWx1ZTtcbiAgICB2YXIgc3VwZXJQcm90b01ldGhvZCA9IENvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZVtuYW1lXTtcbiAgICAvLyBBbGxvdyB0cmFuc2ZlciB3aGVuOlxuICAgIC8vIDEuIGhhdmUgYW4gaW5zdGFuY2UgbWV0aG9kXG4gICAgLy8gMi4gdGhlIHN1cGVyIGNsYXNzIHByb3RvdHlwZSBkb2Vzbid0IGhhdmUgYW55IG1ldGhvZFxuICAgIC8vIDMuIGl0IGlzIG5vdCBhbHJlYWR5IHRoZSByYWRpdW0gcHJvdG90eXBlJ3NcbiAgICBpZiAoIXN1cGVyUHJvdG9NZXRob2QgJiYgdGhpc01ldGhvZCAhPT0gcmFkaXVtUHJvdG9NZXRob2QpIHtcbiAgICAgIC8vIFRyYW5zZmVyIGR5bmFtaWMgcmVuZGVyIGNvbXBvbmVudCB0byBDb21wb25lbnQgcHJvdG90eXBlIChjb3B5KS5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUsIG5hbWUsIHRoaXNEZXNjKTtcbiAgICAgIC8vIFJlbW92ZSBpbnN0YW5jZSBwcm9wZXJ0eSwgbGVhdmluZyB1cyB0byBoYXZlIGEgY29udHJpdmVkXG4gICAgICAvLyBpbmhlcml0YW5jZSBjaGFpbiBvZiAoMSkgcmFkaXVtLCAoMikgc3VwZXJjbGFzcy5cbiAgICAgIGRlbGV0ZSBlbmhhbmNlZFNlbGZbbmFtZV07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW5oYW5jZWRDb21wb25lbnQob3JpZ0NvbXBvbmVudCwgQ29tcG9zZWRDb21wb25lbnQsIGNvbmZpZykge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgUmFkaXVtRW5oYW5jZXIgPSAoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJhZGl1bUVuaGFuY2VyLCBfQ29tcG9zZWRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmFkaXVtRW5oYW5jZXIoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFkaXVtRW5oYW5jZXIpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFkaXVtRW5oYW5jZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICBfdGhpcy5zdGF0ZSA9IF90aGlzLnN0YXRlIHx8IHt9O1xuICAgICAgX3RoaXMuc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgPSB7fTtcbiAgICAgIF90aGlzLl9yYWRpdW1Jc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgICB2YXIgc2VsZiA9IF90aGlzO1xuXG4gICAgICAvLyBIYW5kbGUgZXM3IGFycm93IGZ1bmN0aW9ucyBvbiBSZWFjdCBjbGFzcyBtZXRob2RcbiAgICAgIGNvcHlBcnJvd0Z1bmNzKHNlbGYsIENvbXBvc2VkQ29tcG9uZW50KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFkaXVtRW5oYW5jZXIsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmIChfZ2V0KFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVW5tb3VudCcsIHRoaXMpKSB7XG4gICAgICAgICAgX2dldChSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFVubW91bnQnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmFkaXVtSXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JhZGl1bU1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMuX3JhZGl1bU1vdXNlVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnlbcXVlcnldLnJlbW92ZSgpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHZhciBzdXBlckNoaWxkQ29udGV4dCA9IF9nZXQoUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlKSwgJ2dldENoaWxkQ29udGV4dCcsIHRoaXMpID8gX2dldChSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpLCAnZ2V0Q2hpbGRDb250ZXh0JywgdGhpcykuY2FsbCh0aGlzKSA6IHt9O1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5yYWRpdW1Db25maWcpIHtcbiAgICAgICAgICByZXR1cm4gc3VwZXJDaGlsZENvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IF9leHRlbmRzKHt9LCBzdXBlckNoaWxkQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmFkaXVtQ29uZmlnKSB7XG4gICAgICAgICAgbmV3Q29udGV4dC5fcmFkaXVtQ29uZmlnID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3Q29udGV4dDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJlbmRlcmVkRWxlbWVudCA9IF9nZXQoUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlKSwgJ3JlbmRlcicsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWcgfHwgdGhpcy5jb250ZXh0Ll9yYWRpdW1Db25maWcgfHwgY29uZmlnO1xuXG4gICAgICAgIGlmIChjb25maWcgJiYgY3VycmVudENvbmZpZyAhPT0gY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjb25maWcsIGN1cnJlbnRDb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG8gdGhlIHN0eWxlIGFuZCBpbnRlcmFjdGlvbiB3b3JrXG5cbiAgICAgICAgdmFyIF9yZXNvbHZlU3R5bGVzID0gcmVzb2x2ZVN0eWxlcyh0aGlzLCByZW5kZXJlZEVsZW1lbnQsIGN1cnJlbnRDb25maWcpLFxuICAgICAgICAgICAgZXh0cmFTdGF0ZUtleU1hcCA9IF9yZXNvbHZlU3R5bGVzLmV4dHJhU3RhdGVLZXlNYXAsXG4gICAgICAgICAgICBlbGVtZW50ID0gX3Jlc29sdmVTdHlsZXMuZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9leHRyYVJhZGl1bVN0YXRlS2V5cyA9IE9iamVjdC5rZXlzKGV4dHJhU3RhdGVLZXlNYXApO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSwgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgICAgICBpZiAoX2dldChSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpLCAnY29tcG9uZW50RGlkVXBkYXRlJywgdGhpcykpIHtcbiAgICAgICAgICBfZ2V0KFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSksICdjb21wb25lbnREaWRVcGRhdGUnLCB0aGlzKS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZXh0cmFSYWRpdW1TdGF0ZUtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciB0cmltbWVkUmFkaXVtU3RhdGUgPSB0aGlzLl9leHRyYVJhZGl1bVN0YXRlS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXRlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBleHRyYVN0YXRlS2V5ID0gc3RhdGVba2V5XSxcbiAgICAgICAgICAgICAgICByZW1haW5pbmdTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW2tleV0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVtYWluaW5nU3RhdGU7XG4gICAgICAgICAgfSwgZ2V0UmFkaXVtU3R5bGVTdGF0ZSh0aGlzKSk7XG5cbiAgICAgICAgICB0aGlzLl9sYXN0UmFkaXVtU3RhdGUgPSB0cmltbWVkUmFkaXVtU3RhdGU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IF9yYWRpdW1TdHlsZVN0YXRlOiB0cmltbWVkUmFkaXVtU3RhdGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUsIG5vLXVudXNlZC12YXJzICovXG5cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmFkaXVtRW5oYW5jZXI7XG4gIH0oQ29tcG9zZWRDb21wb25lbnQpLCBfY2xhc3MuX2lzUmFkaXVtRW5oYW5jZWQgPSB0cnVlLCBfdGVtcCk7XG5cbiAgLy8gTGF6eSBpbmZlciB0aGUgbWV0aG9kIG5hbWVzIG9mIHRoZSBFbmhhbmNlci5cblxuICBSQURJVU1fUFJPVE8gPSBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGU7XG4gIFJBRElVTV9NRVRIT0RTID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoUkFESVVNX1BST1RPKS5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiAhPT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2YgUkFESVVNX1BST1RPW25dID09PSAnZnVuY3Rpb24nO1xuICB9KTtcblxuICAvLyBDbGFzcyBpbmhlcml0YW5jZSB1c2VzIE9iamVjdC5jcmVhdGUgYW5kIGJlY2F1c2Ugb2YgX19wcm90b19fIGlzc3Vlc1xuICAvLyB3aXRoIElFIDwxMCBhbnkgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIHN1cGVyY2xhc3MgYXJlbid0IGluaGVyaXRlZCBhbmRcbiAgLy8gc28gbmVlZCB0byBiZSBtYW51YWxseSBwb3B1bGF0ZWQuXG4gIC8vIFNlZSBodHRwOi8vYmFiZWxqcy5pby9kb2NzL2FkdmFuY2VkL2NhdmVhdHMvI2NsYXNzZXMtMTAtYW5kLWJlbG93LVxuICBjb3B5UHJvcGVydGllcyhvcmlnQ29tcG9uZW50LCBSYWRpdW1FbmhhbmNlcik7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGFsc28gZml4ZXMgUmVhY3QgSG90IExvYWRlciBieSBleHBvc2luZyB0aGUgb3JpZ2luYWwgY29tcG9uZW50cyB0b3BcbiAgICAvLyBsZXZlbCBwcm90b3R5cGUgbWV0aG9kcyBvbiB0aGUgUmFkaXVtIGVuaGFuY2VkIHByb3RvdHlwZSBhcyBkaXNjdXNzZWQgaW5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmFkaXVtL2lzc3Vlcy8yMTkuXG4gICAgY29weVByb3BlcnRpZXMoQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLCBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpO1xuICB9XG5cbiAgLy8gYWRkIFJhZGl1bSBwcm9wVHlwZXMgdG8gZW5oYW5jZWQgY29tcG9uZW50J3MgcHJvcFR5cGVzXG4gIGlmIChSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMgJiYgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzLnN0eWxlKSB7XG4gICAgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIFJhZGl1bUVuaGFuY2VyLnByb3BUeXBlcywge1xuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLm9iamVjdF0pXG4gICAgfSk7XG4gIH1cblxuICAvLyBjb3B5IGRpc3BsYXkgbmFtZSB0byBlbmhhbmNlZCBjb21wb25lbnRcbiAgUmFkaXVtRW5oYW5jZXIuZGlzcGxheU5hbWUgPSBvcmlnQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IG9yaWdDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAvLyBoYW5kbGUgY29udGV4dFxuICBSYWRpdW1FbmhhbmNlci5jb250ZXh0VHlwZXMgPSBfZXh0ZW5kcyh7fSwgUmFkaXVtRW5oYW5jZXIuY29udGV4dFR5cGVzLCB7XG4gICAgX3JhZGl1bUNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBfcmFkaXVtU3R5bGVLZWVwZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKFN0eWxlS2VlcGVyKVxuICB9KTtcblxuICBSYWRpdW1FbmhhbmNlci5jaGlsZENvbnRleHRUeXBlcyA9IF9leHRlbmRzKHt9LCBSYWRpdW1FbmhhbmNlci5jaGlsZENvbnRleHRUeXBlcywge1xuICAgIF9yYWRpdW1Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgX3JhZGl1bVN0eWxlS2VlcGVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihTdHlsZUtlZXBlcilcbiAgfSk7XG5cbiAgcmV0dXJuIFJhZGl1bUVuaGFuY2VyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb3NlZEZyb21TdGF0ZWxlc3NGdW5jKENvbXBvc2VkQ29tcG9uZW50LCBjb21wb25lbnQpIHtcbiAgQ29tcG9zZWRDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb21wb3NlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDb21wb3NlZENvbXBvbmVudCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NlZENvbXBvbmVudCk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29tcG9zZWRDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb3NlZENvbXBvbmVudCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb21wb3NlZENvbXBvbmVudCwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvc2VkQ29tcG9uZW50O1xuICB9KENvbXBvbmVudCk7XG4gIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gY29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5uYW1lO1xuICByZXR1cm4gQ29tcG9zZWRDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvc2VkRnJvbU5hdGl2ZUNsYXNzKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gIENvbXBvc2VkQ29tcG9uZW50ID0gZnVuY3Rpb24gKE9yaWdDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBOZXdDb21wb25lbnQoKSB7XG4gICAgICAvLyBVc2UgUmVmbGVjdC5jb25zdHJ1Y3QgdG8gc2ltdWxhdGUgJ25ldydcbiAgICAgIHZhciBvYmogPSBSZWZsZWN0LmNvbnN0cnVjdChPcmlnQ29tcG9uZW50LCBhcmd1bWVudHMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoTmV3Q29tcG9uZW50LnByb3RvdHlwZSwgT3JpZ0NvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBSZWZsZWN0LnNldFByb3RvdHlwZU9mKE5ld0NvbXBvbmVudCwgT3JpZ0NvbXBvbmVudCk7XG4gICAgcmV0dXJuIE5ld0NvbXBvbmVudDtcbiAgfShDb21wb3NlZENvbXBvbmVudCk7XG4gIHJldHVybiBDb21wb3NlZENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBpZiAodHlwZW9mIGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3JlYXRlRmFjdG9yeUZyb21Db25maWcoY29uZmlnLCBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KTtcbiAgfVxuXG4gIHZhciBvcmlnQ29tcG9uZW50ID0gY29uZmlnT3JDb21wb3NlZENvbXBvbmVudDtcbiAgdmFyIF9Db21wb3NlZENvbXBvbmVudDIgPSBvcmlnQ29tcG9uZW50O1xuXG4gIC8vIFJhZGl1bSBpcyB0cmFuc3BpbGVkIGluIG5wbSwgc28gaXQgaXNuJ3QgcmVhbGx5IHVzaW5nIGVzNiBjbGFzc2VzIGF0XG4gIC8vIHJ1bnRpbWUuICBIb3dldmVyLCB0aGUgdXNlciBvZiBSYWRpdW0gbWlnaHQgYmUuICBJbiB0aGlzIGNhc2Ugd2UgaGF2ZVxuICAvLyB0byBtYWludGFpbiBmb3J3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBuYXRpdmUgZXMgY2xhc3Nlcy5cbiAgaWYgKGlzTmF0aXZlQ2xhc3MoX0NvbXBvc2VkQ29tcG9uZW50MikpIHtcbiAgICBfQ29tcG9zZWRDb21wb25lbnQyID0gY3JlYXRlQ29tcG9zZWRGcm9tTmF0aXZlQ2xhc3MoX0NvbXBvc2VkQ29tcG9uZW50Mik7XG4gIH1cblxuICAvLyBIYW5kbGUgc3RhdGVsZXNzIGNvbXBvbmVudHNcbiAgaWYgKGlzU3RhdGVsZXNzKF9Db21wb3NlZENvbXBvbmVudDIpKSB7XG4gICAgX0NvbXBvc2VkQ29tcG9uZW50MiA9IGNyZWF0ZUNvbXBvc2VkRnJvbVN0YXRlbGVzc0Z1bmMoX0NvbXBvc2VkQ29tcG9uZW50Miwgb3JpZ0NvbXBvbmVudCk7XG4gIH1cblxuICAvLyBTaGFsbG93IGNvcHkgY29tcG9zZWQgaWYgc3RpbGwgb3JpZ2luYWwgKHdlIG1heSBtdXRhdGUgbGF0ZXIpLlxuICBpZiAoX0NvbXBvc2VkQ29tcG9uZW50MiA9PT0gb3JpZ0NvbXBvbmVudCkge1xuICAgIF9Db21wb3NlZENvbXBvbmVudDIgPSBmdW5jdGlvbiAoX0NvbXBvc2VkQ29tcG9uZW50Mykge1xuICAgICAgX2luaGVyaXRzKENvbXBvc2VkQ29tcG9uZW50LCBfQ29tcG9zZWRDb21wb25lbnQzKTtcblxuICAgICAgZnVuY3Rpb24gQ29tcG9zZWRDb21wb25lbnQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NlZENvbXBvbmVudCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb21wb3NlZENvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvc2VkQ29tcG9uZW50KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb21wb3NlZENvbXBvbmVudDtcbiAgICB9KF9Db21wb3NlZENvbXBvbmVudDIpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVuaGFuY2VkQ29tcG9uZW50KG9yaWdDb21wb25lbnQsIF9Db21wb3NlZENvbXBvbmVudDIsIGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlGcm9tQ29uZmlnKGNvbmZpZywgY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCkge1xuICB2YXIgbmV3Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywgY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnT3JDb21wb25lbnQpIHtcbiAgICByZXR1cm4gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb25lbnQsIG5ld0NvbmZpZyk7XG4gIH07XG59IiwidmFyIGdldFJhZGl1bVN0eWxlU3RhdGUgPSBmdW5jdGlvbiBnZXRSYWRpdW1TdHlsZVN0YXRlKGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50Ll9sYXN0UmFkaXVtU3RhdGUgfHwgY29tcG9uZW50LnN0YXRlICYmIGNvbXBvbmVudC5zdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZSB8fCB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhZGl1bVN0eWxlU3RhdGU7IiwidmFyIGdldFN0YXRlS2V5ID0gZnVuY3Rpb24gZ2V0U3RhdGVLZXkocmVuZGVyZWRFbGVtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnJlZiA9PT0gJ3N0cmluZycgPyByZW5kZXJlZEVsZW1lbnQucmVmIDogcmVuZGVyZWRFbGVtZW50LmtleTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN0YXRlS2V5OyIsImltcG9ydCBjbGVhblN0YXRlS2V5IGZyb20gJy4vY2xlYW4tc3RhdGUta2V5JztcblxudmFyIGdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoc3RhdGUsIGVsZW1lbnRLZXksIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBjbGVhblN0YXRlS2V5KGVsZW1lbnRLZXkpO1xuXG4gIHJldHVybiAhIXN0YXRlICYmICEhc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgJiYgISFzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldICYmIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV1bdmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3RhdGU7IiwiXG5cbi8vIGEgc2ltcGxlIGRqYjIgaGFzaCBiYXNlZCBvbiBoYXNoLXN0cmluZzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0aGV3QmFya2VyL2hhc2gtc3RyaW5nL2Jsb2IvbWFzdGVyL3NvdXJjZS9oYXNoLXN0cmluZy5qc1xuLy8gcmV0dXJucyBhIGhleC1lbmNvZGVkIGhhc2hcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc2godGV4dCkge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgaGFzaFZhbHVlID0gNTM4MTtcbiAgdmFyIGluZGV4ID0gdGV4dC5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChpbmRleCkge1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZSAqIDMzIF4gdGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpbmRleCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIChoYXNoVmFsdWUgPj4+IDApLnRvU3RyaW5nKDE2KTtcbn0iLCJpbXBvcnQgRW5oYW5jZXIgZnJvbSAnLi9lbmhhbmNlcic7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuL3BsdWdpbnMnO1xuaW1wb3J0IFN0eWxlIGZyb20gJy4vY29tcG9uZW50cy9zdHlsZSc7XG5pbXBvcnQgU3R5bGVSb290IGZyb20gJy4vY29tcG9uZW50cy9zdHlsZS1yb290JztcbmltcG9ydCBnZXRTdGF0ZSBmcm9tICcuL2dldC1zdGF0ZSc7XG5pbXBvcnQga2V5ZnJhbWVzIGZyb20gJy4va2V5ZnJhbWVzJztcbmltcG9ydCByZXNvbHZlU3R5bGVzIGZyb20gJy4vcmVzb2x2ZS1zdHlsZXMnO1xuXG5mdW5jdGlvbiBSYWRpdW0oQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIEVuaGFuY2VyKENvbXBvc2VkQ29tcG9uZW50KTtcbn1cblxuLy8gTGVnYWN5IG9iamVjdCBzdXBwb3J0LlxuLy9cbi8vIE5vcm1hbGx5IGl0IHdvdWxkIGJlIGRpc2Zhdm9yZWQgdG8gYXR0YWNoIHRoZXNlIHRvIHRoZSBgUmFkaXVtYCBvYmplY3Rcbi8vIGJlY2F1c2UgaXQgZGVmZWF0cyB0cmVlLXNoYWtpbmcsIHVzaW5nIGluc3RlYWQgdGhlIEVTTSBleHBvcnRzLiBCdXQsXG4vLyB0aGUgYFJhZGl1bWAgYEVuaGFuY2VyYCB1c2VzICoqYWxsKiogb2YgdGhlc2UsIHNvIHRoZXJlJ3Mgbm8gZXh0cmEgXCJjb3N0XCJcbi8vIHRvIHRoZW0gYmVpbmcgZXhwbGljaXRseSBvbiB0aGUgYFJhZGl1bWAgb2JqZWN0LlxuUmFkaXVtLlBsdWdpbnMgPSBQbHVnaW5zO1xuUmFkaXVtLlN0eWxlID0gU3R5bGU7XG5SYWRpdW0uU3R5bGVSb290ID0gU3R5bGVSb290O1xuUmFkaXVtLmdldFN0YXRlID0gZ2V0U3RhdGU7XG5SYWRpdW0ua2V5ZnJhbWVzID0ga2V5ZnJhbWVzO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSYWRpdW0uVGVzdE1vZGUgPSB7XG4gICAgY2xlYXJTdGF0ZTogcmVzb2x2ZVN0eWxlcy5fX2NsZWFyU3RhdGVGb3JUZXN0cyxcbiAgICBkaXNhYmxlOiByZXNvbHZlU3R5bGVzLl9fc2V0VGVzdE1vZGUuYmluZChudWxsLCBmYWxzZSksXG4gICAgZW5hYmxlOiByZXNvbHZlU3R5bGVzLl9fc2V0VGVzdE1vZGUuYmluZChudWxsLCB0cnVlKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW07XG5cbi8vIEVTTSByZS1leHBvcnRzXG5leHBvcnQgeyBQbHVnaW5zLCBTdHlsZSwgU3R5bGVSb290LCBnZXRTdGF0ZSwga2V5ZnJhbWVzIH07IiwiaW1wb3J0IGNzc1J1bGVTZXRUb1N0cmluZyBmcm9tICcuL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnO1xuaW1wb3J0IGhhc2ggZnJvbSAnLi9oYXNoJztcbmltcG9ydCB7IGdldFByZWZpeGVkS2V5ZnJhbWVzIH0gZnJvbSAnLi9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleWZyYW1lcyhrZXlmcmFtZVJ1bGVzLCBuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgX19yYWRpdW1LZXlmcmFtZXM6IHRydWUsXG4gICAgX19wcm9jZXNzOiBmdW5jdGlvbiBfX3Byb2Nlc3ModXNlckFnZW50KSB7XG4gICAgICB2YXIga2V5ZnJhbWVzUHJlZml4ZWQgPSBnZXRQcmVmaXhlZEtleWZyYW1lcyh1c2VyQWdlbnQpO1xuICAgICAgdmFyIHJ1bGVzID0gT2JqZWN0LmtleXMoa2V5ZnJhbWVSdWxlcykubWFwKGZ1bmN0aW9uIChwZXJjZW50YWdlKSB7XG4gICAgICAgIHJldHVybiBjc3NSdWxlU2V0VG9TdHJpbmcocGVyY2VudGFnZSwga2V5ZnJhbWVSdWxlc1twZXJjZW50YWdlXSwgdXNlckFnZW50KTtcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAobmFtZSA/IG5hbWUgKyAnLScgOiAnJykgKyAncmFkaXVtLWFuaW1hdGlvbi0nICsgaGFzaChydWxlcyk7XG4gICAgICB2YXIgY3NzID0gJ0AnICsga2V5ZnJhbWVzUHJlZml4ZWQgKyAnICcgKyBhbmltYXRpb25OYW1lICsgJyB7XFxuJyArIHJ1bGVzICsgJ1xcbn1cXG4nO1xuICAgICAgcmV0dXJuIHsgY3NzOiBjc3MsIGFuaW1hdGlvbk5hbWU6IGFuaW1hdGlvbk5hbWUgfTtcbiAgICB9XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgbWFwcGVyKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IG1hcHBlcihvYmplY3Rba2V5XSwga2V5KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOZXN0ZWRTdHlsZSh2YWx1ZSkge1xuICAvLyBEb24ndCBtZXJnZSBvYmplY3RzIG92ZXJyaWRpbmcgdG9TdHJpbmcsIHNpbmNlIHRoZXkgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAvLyB0byBzdHJpbmcgdmFsdWVzLlxuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiB2YWx1ZS50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbn1cblxuLy8gTWVyZ2Ugc3R5bGUgb2JqZWN0cy4gRGVlcCBtZXJnZSBwbGFpbiBvYmplY3QgdmFsdWVzLlxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzKHN0eWxlcykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAodHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHlsZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgc3R5bGUgPSBtZXJnZVN0eWxlcyhzdHlsZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gU2ltcGxlIGNhc2UsIG5vdGhpbmcgbmVzdGVkXG4gICAgICBpZiAoIWlzTmVzdGVkU3R5bGUoc3R5bGVba2V5XSkgfHwgIWlzTmVzdGVkU3R5bGUocmVzdWx0W2tleV0pKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gc3R5bGVba2V5XTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBuZXN0ZWQgbWVkaWEsIGRvbid0IG1lcmdlIHRoZSBuZXN0ZWQgc3R5bGVzLCBhcHBlbmQgYSBzcGFjZSB0byB0aGVcbiAgICAgIC8vIGVuZCAoYmVuaWduIHdoZW4gY29udmVydGVkIHRvIENTUykuIFRoaXMgd2F5IHdlIGRvbid0IGVuZCB1cCBtZXJnaW5nXG4gICAgICAvLyBtZWRpYSBxdWVyaWVzIHRoYXQgYXBwZWFyIGxhdGVyIGluIHRoZSBjaGFpbiB3aXRoIHRob3NlIHRoYXQgYXBwZWFyXG4gICAgICAvLyBlYXJsaWVyLlxuICAgICAgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgICB2YXIgbmV3S2V5ID0ga2V5O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgbmV3S2V5ICs9ICcgJztcbiAgICAgICAgICBpZiAoIXJlc3VsdFtuZXdLZXldKSB7XG4gICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIGFsbCBvdGhlciBuZXN0ZWQgc3R5bGVzIHJlY3Vyc2l2ZWx5XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlU3R5bGVzKFtyZXN1bHRba2V5XSwgc3R5bGVba2V5XV0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jaGVja1Byb3BzID0gZnVuY3Rpb24gY2hlY2tQcm9wcygpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBXYXJuIGlmIHlvdSB1c2UgbG9uZ2hhbmQgYW5kIHNob3J0aGFuZCBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIHN0eWxlXG4gIC8vIG9iamVjdC5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1Nob3J0aGFuZF9wcm9wZXJ0aWVzXG5cbiAgdmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgICBiYWNrZ3JvdW5kOiBbJ2JhY2tncm91bmRBdHRhY2htZW50JywgJ2JhY2tncm91bmRCbGVuZE1vZGUnLCAnYmFja2dyb3VuZENsaXAnLCAnYmFja2dyb3VuZENvbG9yJywgJ2JhY2tncm91bmRJbWFnZScsICdiYWNrZ3JvdW5kT3JpZ2luJywgJ2JhY2tncm91bmRQb3NpdGlvbicsICdiYWNrZ3JvdW5kUG9zaXRpb25YJywgJ2JhY2tncm91bmRQb3NpdGlvblknLCAnYmFja2dyb3VuZFJlcGVhdCcsICdiYWNrZ3JvdW5kUmVwZWF0WCcsICdiYWNrZ3JvdW5kUmVwZWF0WScsICdiYWNrZ3JvdW5kU2l6ZSddLFxuICAgIGJvcmRlcjogWydib3JkZXJCb3R0b20nLCAnYm9yZGVyQm90dG9tQ29sb3InLCAnYm9yZGVyQm90dG9tU3R5bGUnLCAnYm9yZGVyQm90dG9tV2lkdGgnLCAnYm9yZGVyQ29sb3InLCAnYm9yZGVyTGVmdCcsICdib3JkZXJMZWZ0Q29sb3InLCAnYm9yZGVyTGVmdFN0eWxlJywgJ2JvcmRlckxlZnRXaWR0aCcsICdib3JkZXJSaWdodCcsICdib3JkZXJSaWdodENvbG9yJywgJ2JvcmRlclJpZ2h0U3R5bGUnLCAnYm9yZGVyUmlnaHRXaWR0aCcsICdib3JkZXJTdHlsZScsICdib3JkZXJUb3AnLCAnYm9yZGVyVG9wQ29sb3InLCAnYm9yZGVyVG9wU3R5bGUnLCAnYm9yZGVyVG9wV2lkdGgnLCAnYm9yZGVyV2lkdGgnXSxcbiAgICBib3JkZXJJbWFnZTogWydib3JkZXJJbWFnZU91dHNldCcsICdib3JkZXJJbWFnZVJlcGVhdCcsICdib3JkZXJJbWFnZVNsaWNlJywgJ2JvcmRlckltYWdlU291cmNlJywgJ2JvcmRlckltYWdlV2lkdGgnXSxcbiAgICBib3JkZXJSYWRpdXM6IFsnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsICdib3JkZXJUb3BMZWZ0UmFkaXVzJywgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJ10sXG4gICAgZm9udDogWydmb250RmFtaWx5JywgJ2ZvbnRLZXJuaW5nJywgJ2ZvbnRTaXplJywgJ2ZvbnRTdHJldGNoJywgJ2ZvbnRTdHlsZScsICdmb250VmFyaWFudCcsICdmb250VmFyaWFudExpZ2F0dXJlcycsICdmb250V2VpZ2h0JywgJ2xpbmVIZWlnaHQnXSxcbiAgICBsaXN0U3R5bGU6IFsnbGlzdFN0eWxlSW1hZ2UnLCAnbGlzdFN0eWxlUG9zaXRpb24nLCAnbGlzdFN0eWxlVHlwZSddLFxuICAgIG1hcmdpbjogWydtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Ub3AnXSxcbiAgICBwYWRkaW5nOiBbJ3BhZGRpbmdCb3R0b20nLCAncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0JywgJ3BhZGRpbmdUb3AnXSxcbiAgICB0cmFuc2l0aW9uOiBbJ3RyYW5zaXRpb25EZWxheScsICd0cmFuc2l0aW9uRHVyYXRpb24nLCAndHJhbnNpdGlvblByb3BlcnR5JywgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiddXG4gIH07XG5cbiAgX2NoZWNrUHJvcHMgPSBmdW5jdGlvbiBjaGVja1Byb3BzKGNvbmZpZykge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gY29uZmlnLmNvbXBvbmVudE5hbWUsXG4gICAgICAgIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG4gICAgaWYgKCh0eXBlb2Ygc3R5bGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHN0eWxlKSkgIT09ICdvYmplY3QnIHx8ICFzdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzdHlsZUtleXMgPSBPYmplY3Qua2V5cyhzdHlsZSk7XG4gICAgc3R5bGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlS2V5KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNbc3R5bGVLZXldKSAmJiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNbc3R5bGVLZXldLnNvbWUoZnVuY3Rpb24gKHNwKSB7XG4gICAgICAgIHJldHVybiBzdHlsZUtleXMuaW5kZXhPZihzcCkgIT09IC0xO1xuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSYWRpdW06IHByb3BlcnR5IFwiJyArIHN0eWxlS2V5ICsgJ1wiIGluIHN0eWxlIG9iamVjdCcsIHN0eWxlLCAnOiBkbyBub3QgbWl4IGxvbmdoYW5kIGFuZCAnICsgJ3Nob3J0aGFuZCBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIHN0eWxlIG9iamVjdC4gQ2hlY2sgdGhlIHJlbmRlciAnICsgJ21ldGhvZCBvZiAnICsgY29tcG9uZW50TmFtZSArICcuJywgJ1NlZSBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmFkaXVtL2lzc3Vlcy85NSBmb3IgbW9yZSAnICsgJ2luZm9ybWF0aW9uLicpO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIF9jaGVja1Byb3BzKF9leHRlbmRzKHt9LCBjb25maWcsIHsgc3R5bGU6IHN0eWxlW2tdIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9jaGVja1Byb3BzOyIsIlxuXG5pbXBvcnQgY2hlY2tQcm9wc1BsdWdpbiBmcm9tICcuL2NoZWNrLXByb3BzLXBsdWdpbic7XG4vKiBlc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtY29uc3QgKi9cblxuaW1wb3J0IGtleWZyYW1lc1BsdWdpbiBmcm9tICcuL2tleWZyYW1lcy1wbHVnaW4nO1xuaW1wb3J0IG1lcmdlU3R5bGVBcnJheVBsdWdpbiBmcm9tICcuL21lcmdlLXN0eWxlLWFycmF5LXBsdWdpbic7XG5pbXBvcnQgcHJlZml4UGx1Z2luIGZyb20gJy4vcHJlZml4LXBsdWdpbic7XG5pbXBvcnQgcmVtb3ZlTmVzdGVkU3R5bGVzUGx1Z2luIGZyb20gJy4vcmVtb3ZlLW5lc3RlZC1zdHlsZXMtcGx1Z2luJztcbmltcG9ydCByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4gZnJvbSAnLi9yZXNvbHZlLWludGVyYWN0aW9uLXN0eWxlcy1wbHVnaW4nO1xuaW1wb3J0IHJlc29sdmVNZWRpYVF1ZXJpZXNQbHVnaW4gZnJvbSAnLi9yZXNvbHZlLW1lZGlhLXF1ZXJpZXMtcGx1Z2luJztcbmltcG9ydCB2aXNpdGVkUGx1Z2luIGZyb20gJy4vdmlzaXRlZC1wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrUHJvcHM6IGNoZWNrUHJvcHNQbHVnaW4sXG4gIGtleWZyYW1lczoga2V5ZnJhbWVzUGx1Z2luLFxuICBtZXJnZVN0eWxlQXJyYXk6IG1lcmdlU3R5bGVBcnJheVBsdWdpbixcbiAgcHJlZml4OiBwcmVmaXhQbHVnaW4sXG4gIHJlbW92ZU5lc3RlZFN0eWxlczogcmVtb3ZlTmVzdGVkU3R5bGVzUGx1Z2luLFxuICByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM6IHJlc29sdmVJbnRlcmFjdGlvblN0eWxlc1BsdWdpbixcbiAgcmVzb2x2ZU1lZGlhUXVlcmllczogcmVzb2x2ZU1lZGlhUXVlcmllc1BsdWdpbixcbiAgdmlzaXRlZDogdmlzaXRlZFBsdWdpblxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlmcmFtZXNQbHVnaW4oX3JlZiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuKSB7XG4gIHZhciBhZGRDU1MgPSBfcmVmLmFkZENTUyxcbiAgICAgIGNvbmZpZyA9IF9yZWYuY29uZmlnLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciBwcm9jZXNzS2V5ZnJhbWVTdHlsZSA9IGZ1bmN0aW9uIHByb2Nlc3NLZXlmcmFtZVN0eWxlKHZhbHVlKSB7XG4gICAgdmFyIGtleWZyYW1lc1ZhbHVlID0gdmFsdWU7XG5cbiAgICB2YXIgX2tleWZyYW1lc1ZhbHVlJF9fcHJvID0ga2V5ZnJhbWVzVmFsdWUuX19wcm9jZXNzKGNvbmZpZy51c2VyQWdlbnQpLFxuICAgICAgICBhbmltYXRpb25OYW1lID0gX2tleWZyYW1lc1ZhbHVlJF9fcHJvLmFuaW1hdGlvbk5hbWUsXG4gICAgICAgIGNzcyA9IF9rZXlmcmFtZXNWYWx1ZSRfX3Byby5jc3M7XG5cbiAgICBhZGRDU1MoY3NzKTtcbiAgICByZXR1cm4gYW5pbWF0aW9uTmFtZTtcbiAgfTtcblxuICB2YXIgbmV3U3R5bGUgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZUluUHJvZ3Jlc3MsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlW2tleV07XG4gICAgdmFyIGlzS2V5ZnJhbWVBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4gICAgaWYgKGtleSA9PT0gJ2FuaW1hdGlvbk5hbWUnICYmIHZhbHVlICYmICh2YWx1ZS5fX3JhZGl1bUtleWZyYW1lcyB8fCBpc0tleWZyYW1lQXJyYXkpKSB7XG4gICAgICBpZiAoaXNLZXlmcmFtZUFycmF5KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKHByb2Nlc3NLZXlmcmFtZVN0eWxlKS5qb2luKCcsICcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBwcm9jZXNzS2V5ZnJhbWVTdHlsZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3R5bGVJblByb2dyZXNzW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gbmV3U3R5bGVJblByb2dyZXNzO1xuICB9LCB7fSk7XG4gIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xufSIsIlxuXG4vLyBDb252ZW5pZW50IHN5bnRheCBmb3IgbXVsdGlwbGUgc3R5bGVzOiBgc3R5bGU9e1tzdHlsZTEsIHN0eWxlMiwgZXRjXX1gXG4vLyBJZ25vcmVzIG5vbi1vYmplY3RzLCBzbyB5b3UgY2FuIGRvIGB0aGlzLnN0YXRlLmlzQ29vbCAmJiBzdHlsZXMuY29vbGAuXG52YXIgbWVyZ2VTdHlsZUFycmF5UGx1Z2luID0gZnVuY3Rpb24gbWVyZ2VTdHlsZUFycmF5UGx1Z2luKF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIG1lcmdlU3R5bGVzID0gX3JlZi5tZXJnZVN0eWxlcztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgbmV3U3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxlKSA/IG1lcmdlU3R5bGVzKHN0eWxlKSA6IHN0eWxlO1xuICByZXR1cm4geyBzdHlsZTogbmV3U3R5bGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU3R5bGVBcnJheVBsdWdpbjsiLCJ2YXIgX2NhbGxiYWNrcyA9IFtdO1xudmFyIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBfaGFuZGxlTW91c2VVcCgpIHtcbiAgX2NhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xufVxuXG52YXIgc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gIGlmIChfY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgIF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIV9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX2hhbmRsZU1vdXNlVXApO1xuICAgIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGluZGV4ID0gX2NhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIF9jYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKF9jYWxsYmFja3MubGVuZ3RoID09PSAwICYmIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF9oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgX190cmlnZ2VyRm9yVGVzdHM6IF9oYW5kbGVNb3VzZVVwXG59OyIsIlxuXG5pbXBvcnQgeyBnZXRQcmVmaXhlZFN0eWxlIH0gZnJvbSAnLi4vcHJlZml4ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVmaXhQbHVnaW4oX3JlZiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuKSB7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZyxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgbmV3U3R5bGUgPSBnZXRQcmVmaXhlZFN0eWxlKHN0eWxlLCBjb25maWcudXNlckFnZW50KTtcbiAgcmV0dXJuIHsgc3R5bGU6IG5ld1N0eWxlIH07XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU5lc3RlZFN0eWxlcyhfcmVmKSB7XG4gIHZhciBpc05lc3RlZFN0eWxlID0gX3JlZi5pc05lc3RlZFN0eWxlLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBuZXdTdHlsZSA9IE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlSW5Qcm9ncmVzcywga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcbiAgICBpZiAoIWlzTmVzdGVkU3R5bGUodmFsdWUpKSB7XG4gICAgICBuZXdTdHlsZUluUHJvZ3Jlc3Nba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3U3R5bGVJblByb2dyZXNzO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdHlsZTogbmV3U3R5bGVcbiAgfTtcbn0iLCJcblxuaW1wb3J0IE1vdXNlVXBMaXN0ZW5lciBmcm9tICcuL21vdXNlLXVwLWxpc3RlbmVyJztcblxudmFyIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZCA9IGZ1bmN0aW9uIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZChzdHlsZUZpZWxkTmFtZSkge1xuICByZXR1cm4gc3R5bGVGaWVsZE5hbWUgPT09ICc6aG92ZXInIHx8IHN0eWxlRmllbGROYW1lID09PSAnOmFjdGl2ZScgfHwgc3R5bGVGaWVsZE5hbWUgPT09ICc6Zm9jdXMnO1xufTtcblxudmFyIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyA9IGZ1bmN0aW9uIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyhjb25maWcpIHtcbiAgdmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gY29uZmlnLkV4ZWN1dGlvbkVudmlyb25tZW50LFxuICAgICAgZ2V0Q29tcG9uZW50RmllbGQgPSBjb25maWcuZ2V0Q29tcG9uZW50RmllbGQsXG4gICAgICBnZXRTdGF0ZSA9IGNvbmZpZy5nZXRTdGF0ZSxcbiAgICAgIG1lcmdlU3R5bGVzID0gY29uZmlnLm1lcmdlU3R5bGVzLFxuICAgICAgcHJvcHMgPSBjb25maWcucHJvcHMsXG4gICAgICBzZXRTdGF0ZSA9IGNvbmZpZy5zZXRTdGF0ZSxcbiAgICAgIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG5cbiAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHt9O1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAvLyBPbmx5IGFkZCBoYW5kbGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHN0eWxlWyc6aG92ZXInXSkge1xuICAgIC8vIEFsd2F5cyBjYWxsIHRoZSBleGlzdGluZyBoYW5kbGVyIGlmIG9uZSBpcyBhbHJlYWR5IGRlZmluZWQuXG4gICAgLy8gVGhpcyBjb2RlLCBhbmQgdGhlIHZlcnkgc2ltaWxhciBvbmVzIGJlbG93LCBjb3VsZCBiZSBhYnN0cmFjdGVkIGEgYml0XG4gICAgLy8gbW9yZSwgYnV0IGl0IGh1cnRzIHJlYWRhYmlsaXR5IElNTy5cbiAgICB2YXIgZXhpc3RpbmdPbk1vdXNlRW50ZXIgPSBwcm9wcy5vbk1vdXNlRW50ZXI7XG4gICAgbmV3UHJvcHMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Nb3VzZUVudGVyICYmIGV4aXN0aW5nT25Nb3VzZUVudGVyKGUpO1xuICAgICAgc2V0U3RhdGUoJzpob3ZlcicsIHRydWUpO1xuICAgIH07XG5cbiAgICB2YXIgZXhpc3RpbmdPbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmU7XG4gICAgbmV3UHJvcHMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Nb3VzZUxlYXZlICYmIGV4aXN0aW5nT25Nb3VzZUxlYXZlKGUpO1xuICAgICAgc2V0U3RhdGUoJzpob3ZlcicsIGZhbHNlKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHN0eWxlWyc6YWN0aXZlJ10pIHtcbiAgICB2YXIgZXhpc3RpbmdPbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duO1xuICAgIG5ld1Byb3BzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Nb3VzZURvd24gJiYgZXhpc3RpbmdPbk1vdXNlRG93bihlKTtcbiAgICAgIG5ld0NvbXBvbmVudEZpZWxkcy5fbGFzdE1vdXNlRG93biA9IERhdGUubm93KCk7XG4gICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsICd2aWFtb3VzZWRvd24nKTtcbiAgICB9O1xuXG4gICAgdmFyIGV4aXN0aW5nT25LZXlEb3duID0gcHJvcHMub25LZXlEb3duO1xuICAgIG5ld1Byb3BzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBleGlzdGluZ09uS2V5RG93biAmJiBleGlzdGluZ09uS2V5RG93bihlKTtcbiAgICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgJ3ZpYWtleWRvd24nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGV4aXN0aW5nT25LZXlVcCA9IHByb3BzLm9uS2V5VXA7XG4gICAgbmV3UHJvcHMub25LZXlVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBleGlzdGluZ09uS2V5VXAgJiYgZXhpc3RpbmdPbktleVVwKGUpO1xuICAgICAgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmIChzdHlsZVsnOmZvY3VzJ10pIHtcbiAgICB2YXIgZXhpc3RpbmdPbkZvY3VzID0gcHJvcHMub25Gb2N1cztcbiAgICBuZXdQcm9wcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGV4aXN0aW5nT25Gb2N1cyAmJiBleGlzdGluZ09uRm9jdXMoZSk7XG4gICAgICBzZXRTdGF0ZSgnOmZvY3VzJywgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHZhciBleGlzdGluZ09uQmx1ciA9IHByb3BzLm9uQmx1cjtcbiAgICBuZXdQcm9wcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZXhpc3RpbmdPbkJsdXIgJiYgZXhpc3RpbmdPbkJsdXIoZSk7XG4gICAgICBzZXRTdGF0ZSgnOmZvY3VzJywgZmFsc2UpO1xuICAgIH07XG4gIH1cblxuICBpZiAoc3R5bGVbJzphY3RpdmUnXSAmJiAhZ2V0Q29tcG9uZW50RmllbGQoJ19yYWRpdW1Nb3VzZVVwTGlzdGVuZXInKSAmJiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VFdmVudExpc3RlbmVycykge1xuICAgIG5ld0NvbXBvbmVudEZpZWxkcy5fcmFkaXVtTW91c2VVcExpc3RlbmVyID0gTW91c2VVcExpc3RlbmVyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3Qua2V5cyhnZXRDb21wb25lbnRGaWVsZCgnc3RhdGUnKS5fcmFkaXVtU3R5bGVTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgnOmFjdGl2ZScsIGtleSkgPT09ICd2aWFtb3VzZWRvd24nKSB7XG4gICAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCBmYWxzZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNZXJnZSB0aGUgc3R5bGVzIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgZGVmaW5lZFxuICB2YXIgaW50ZXJhY3Rpb25TdHlsZXMgPSBwcm9wcy5kaXNhYmxlZCA/IFtzdHlsZVsnOmRpc2FibGVkJ11dIDogT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkgJiYgZ2V0U3RhdGUobmFtZSk7XG4gIH0pLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBzdHlsZVtuYW1lXTtcbiAgfSk7XG5cbiAgdmFyIG5ld1N0eWxlID0gbWVyZ2VTdHlsZXMoW3N0eWxlXS5jb25jYXQoaW50ZXJhY3Rpb25TdHlsZXMpKTtcblxuICAvLyBSZW1vdmUgaW50ZXJhY3RpdmUgc3R5bGVzXG4gIG5ld1N0eWxlID0gT2JqZWN0LmtleXMobmV3U3R5bGUpLnJlZHVjZShmdW5jdGlvbiAoc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zLCBuYW1lKSB7XG4gICAgaWYgKCFfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkgJiYgbmFtZSAhPT0gJzpkaXNhYmxlZCcpIHtcbiAgICAgIHN0eWxlV2l0aG91dEludGVyYWN0aW9uc1tuYW1lXSA9IG5ld1N0eWxlW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRGaWVsZHM6IG5ld0NvbXBvbmVudEZpZWxkcyxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93aW5kb3dNYXRjaE1lZGlhID0gdm9pZCAwO1xuZnVuY3Rpb24gX2dldFdpbmRvd01hdGNoTWVkaWEoRXhlY3V0aW9uRW52aXJvbm1lbnQpIHtcbiAgaWYgKF93aW5kb3dNYXRjaE1lZGlhID09PSB1bmRlZmluZWQpIHtcbiAgICBfd2luZG93TWF0Y2hNZWRpYSA9ICEhRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICEhd2luZG93ICYmICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgZnVuY3Rpb24gKG1lZGlhUXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5U3RyaW5nKTtcbiAgICB9IHx8IG51bGw7XG4gIH1cbiAgcmV0dXJuIF93aW5kb3dNYXRjaE1lZGlhO1xufVxuXG5mdW5jdGlvbiBfZmlsdGVyT2JqZWN0KG9iaiwgcHJlZGljYXRlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZShvYmpba2V5XSwga2V5KTtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTWVkaWFRdWVyaWVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChzdHlsZVdpdGhvdXRNZWRpYSwga2V5KSB7XG4gICAgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSAhPT0gMCkge1xuICAgICAgc3R5bGVXaXRob3V0TWVkaWFba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBzdHlsZVdpdGhvdXRNZWRpYTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfdG9wTGV2ZWxSdWxlc1RvQ1NTKF9yZWYpIHtcbiAgdmFyIGFkZENTUyA9IF9yZWYuYWRkQ1NTLFxuICAgICAgYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUgPSBfcmVmLmFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlLFxuICAgICAgY3NzUnVsZVNldFRvU3RyaW5nID0gX3JlZi5jc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgICBoYXNoID0gX3JlZi5oYXNoLFxuICAgICAgaXNOZXN0ZWRTdHlsZSA9IF9yZWYuaXNOZXN0ZWRTdHlsZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50O1xuXG4gIHZhciBjbGFzc05hbWUgPSAnJztcbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHRvcExldmVsUnVsZXMgPSBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZShfZmlsdGVyT2JqZWN0KHN0eWxlW3F1ZXJ5XSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gIWlzTmVzdGVkU3R5bGUodmFsdWUpO1xuICAgIH0pKTtcblxuICAgIGlmICghT2JqZWN0LmtleXModG9wTGV2ZWxSdWxlcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVDU1MgPSBjc3NSdWxlU2V0VG9TdHJpbmcoJycsIHRvcExldmVsUnVsZXMsIHVzZXJBZ2VudCk7XG5cbiAgICAvLyBDU1MgY2xhc3NlcyBjYW5ub3Qgc3RhcnQgd2l0aCBhIG51bWJlclxuICAgIHZhciBtZWRpYVF1ZXJ5Q2xhc3NOYW1lID0gJ3JtcS0nICsgaGFzaChxdWVyeSArIHJ1bGVDU1MpO1xuICAgIHZhciBjc3MgPSBxdWVyeSArICd7IC4nICsgbWVkaWFRdWVyeUNsYXNzTmFtZSArIHJ1bGVDU1MgKyAnfSc7XG5cbiAgICBhZGRDU1MoY3NzKTtcblxuICAgIGNsYXNzTmFtZSArPSAoY2xhc3NOYW1lID8gJyAnIDogJycpICsgbWVkaWFRdWVyeUNsYXNzTmFtZTtcbiAgfSk7XG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmVUb01lZGlhUXVlcnkoX3JlZjIpIHtcbiAgdmFyIGxpc3RlbmVyID0gX3JlZjIubGlzdGVuZXIsXG4gICAgICBsaXN0ZW5lcnNCeVF1ZXJ5ID0gX3JlZjIubGlzdGVuZXJzQnlRdWVyeSxcbiAgICAgIG1hdGNoTWVkaWEgPSBfcmVmMi5tYXRjaE1lZGlhLFxuICAgICAgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IF9yZWYyLm1lZGlhUXVlcnlMaXN0c0J5UXVlcnksXG4gICAgICBxdWVyeSA9IF9yZWYyLnF1ZXJ5O1xuXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnQG1lZGlhICcsICcnKTtcblxuICB2YXIgbXFsID0gbWVkaWFRdWVyeUxpc3RzQnlRdWVyeVtxdWVyeV07XG4gIGlmICghbXFsICYmIG1hdGNoTWVkaWEpIHtcbiAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5W3F1ZXJ5XSA9IG1xbCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuICB9XG5cbiAgaWYgKCFsaXN0ZW5lcnNCeVF1ZXJ5IHx8ICFsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSkge1xuICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICBsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSA9IHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG1xbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZU1lZGlhUXVlcmllcyhfcmVmMykge1xuICB2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfcmVmMy5FeGVjdXRpb25FbnZpcm9ubWVudCxcbiAgICAgIGFkZENTUyA9IF9yZWYzLmFkZENTUyxcbiAgICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gX3JlZjMuYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUsXG4gICAgICBjb25maWcgPSBfcmVmMy5jb25maWcsXG4gICAgICBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmMy5jc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgICBnZXRDb21wb25lbnRGaWVsZCA9IF9yZWYzLmdldENvbXBvbmVudEZpZWxkLFxuICAgICAgZ2V0R2xvYmFsU3RhdGUgPSBfcmVmMy5nZXRHbG9iYWxTdGF0ZSxcbiAgICAgIGhhc2ggPSBfcmVmMy5oYXNoLFxuICAgICAgaXNOZXN0ZWRTdHlsZSA9IF9yZWYzLmlzTmVzdGVkU3R5bGUsXG4gICAgICBtZXJnZVN0eWxlcyA9IF9yZWYzLm1lcmdlU3R5bGVzLFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcyxcbiAgICAgIHNldFN0YXRlID0gX3JlZjMuc2V0U3RhdGUsXG4gICAgICBzdHlsZSA9IF9yZWYzLnN0eWxlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBuZXdTdHlsZSA9IF9yZW1vdmVNZWRpYVF1ZXJpZXMoc3R5bGUpO1xuICB2YXIgbWVkaWFRdWVyeUNsYXNzTmFtZXMgPSBfdG9wTGV2ZWxSdWxlc1RvQ1NTKHtcbiAgICBhZGRDU1M6IGFkZENTUyxcbiAgICBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZTogYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUsXG4gICAgY3NzUnVsZVNldFRvU3RyaW5nOiBjc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgaGFzaDogaGFzaCxcbiAgICBpc05lc3RlZFN0eWxlOiBpc05lc3RlZFN0eWxlLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB1c2VyQWdlbnQ6IGNvbmZpZy51c2VyQWdlbnRcbiAgfSk7XG5cbiAgdmFyIG5ld1Byb3BzID0gbWVkaWFRdWVyeUNsYXNzTmFtZXMgPyB7XG4gICAgY2xhc3NOYW1lOiBtZWRpYVF1ZXJ5Q2xhc3NOYW1lcyArIChwcm9wcy5jbGFzc05hbWUgPyAnICcgKyBwcm9wcy5jbGFzc05hbWUgOiAnJylcbiAgfSA6IG51bGw7XG5cbiAgdmFyIG1hdGNoTWVkaWEgPSBjb25maWcubWF0Y2hNZWRpYSB8fCBfZ2V0V2luZG93TWF0Y2hNZWRpYShFeGVjdXRpb25FbnZpcm9ubWVudCk7XG5cbiAgaWYgKCFtYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH07XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzQnlRdWVyeSA9IF9leHRlbmRzKHt9LCBnZXRDb21wb25lbnRGaWVsZCgnX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5JykpO1xuICB2YXIgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IGdldEdsb2JhbFN0YXRlKCdtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5JykgfHwge307XG5cbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIG5lc3RlZFJ1bGVzID0gX2ZpbHRlck9iamVjdChzdHlsZVtxdWVyeV0sIGlzTmVzdGVkU3R5bGUpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhuZXN0ZWRSdWxlcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1xbCA9IF9zdWJzY3JpYmVUb01lZGlhUXVlcnkoe1xuICAgICAgbGlzdGVuZXI6IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICByZXR1cm4gc2V0U3RhdGUocXVlcnksIG1xbC5tYXRjaGVzLCAnX2FsbCcpO1xuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyc0J5UXVlcnk6IGxpc3RlbmVyc0J5UXVlcnksXG4gICAgICBtYXRjaE1lZGlhOiBtYXRjaE1lZGlhLFxuICAgICAgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeTogbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH0pO1xuXG4gICAgLy8gQXBwbHkgbWVkaWEgcXVlcnkgc3RhdGVzXG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICBuZXdTdHlsZSA9IG1lcmdlU3R5bGVzKFtuZXdTdHlsZSwgbmVzdGVkUnVsZXNdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50RmllbGRzOiB7XG4gICAgICBfcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnk6IGxpc3RlbmVyc0J5UXVlcnlcbiAgICB9LFxuICAgIGdsb2JhbFN0YXRlOiB7IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnk6IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnkgfSxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpc2l0ZWQoX3JlZikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1MsXG4gICAgICBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSA9IF9yZWYuYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUsXG4gICAgICBjb25maWcgPSBfcmVmLmNvbmZpZyxcbiAgICAgIGNzc1J1bGVTZXRUb1N0cmluZyA9IF9yZWYuY3NzUnVsZVNldFRvU3RyaW5nLFxuICAgICAgaGFzaCA9IF9yZWYuaGFzaCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcyxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuXG4gIHZhciBuZXdTdHlsZSA9IE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlSW5Qcm9ncmVzcywga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcbiAgICBpZiAoa2V5ID09PSAnOnZpc2l0ZWQnKSB7XG4gICAgICB2YWx1ZSA9IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciBydWxlQ1NTID0gY3NzUnVsZVNldFRvU3RyaW5nKCcnLCB2YWx1ZSwgY29uZmlnLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdmlzaXRlZENsYXNzTmFtZSA9ICdyYWQtJyArIGhhc2gocnVsZUNTUyk7XG4gICAgICB2YXIgY3NzID0gJy4nICsgdmlzaXRlZENsYXNzTmFtZSArICc6dmlzaXRlZCcgKyBydWxlQ1NTO1xuXG4gICAgICBhZGRDU1MoY3NzKTtcbiAgICAgIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyB2aXNpdGVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZUluUHJvZ3Jlc3Nba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdHlsZUluUHJvZ3Jlc3M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiBjbGFzc05hbWUgPT09IHByb3BzLmNsYXNzTmFtZSA/IG51bGwgOiB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jYWxjJztcbmltcG9ydCBjcm9zc0ZhZGUgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9jcm9zc0ZhZGUnO1xuaW1wb3J0IGN1cnNvciBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvZHluYW1pYy9wbHVnaW5zL2N1cnNvcic7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmlsdGVyJztcbmltcG9ydCBmbGV4IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleCc7XG5pbXBvcnQgZmxleGJveElFIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleGJveElFJztcbmltcG9ydCBmbGV4Ym94T2xkIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvZmxleGJveE9sZCc7XG5pbXBvcnQgZ3JhZGllbnQgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9ncmFkaWVudCc7XG5pbXBvcnQgaW1hZ2VTZXQgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9pbWFnZVNldCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL2R5bmFtaWMvcGx1Z2lucy9wb3NpdGlvbic7XG5pbXBvcnQgc2l6aW5nIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvc2l6aW5nJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL3BsdWdpbnMvdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGx1Z2luczogW2NhbGMsIGNyb3NzRmFkZSwgY3Vyc29yLCBmaWx0ZXIsIGZsZXgsIGZsZXhib3hJRSwgZmxleGJveE9sZCwgZ3JhZGllbnQsIGltYWdlU2V0LCBwb3NpdGlvbiwgc2l6aW5nLCB0cmFuc2l0aW9uXSxcbiAgcHJlZml4TWFwOiB7XG4gICAgY2hyb21lOiB7XG4gICAgICB0cmFuc2Zvcm06IDM1LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAzNSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblg6IDM1LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogMzUsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IDM1LFxuICAgICAgcGVyc3BlY3RpdmU6IDM1LFxuICAgICAgcGVyc3BlY3RpdmVPcmlnaW46IDM1LFxuICAgICAgdHJhbnNmb3JtU3R5bGU6IDM1LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWjogMzUsXG4gICAgICBhbmltYXRpb246IDQyLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IDQyLFxuICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiA0MixcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiA0MixcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiA0MixcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiA0MixcbiAgICAgIGFuaW1hdGlvbk5hbWU6IDQyLFxuICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiA0MixcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiA0MixcbiAgICAgIGFwcGVhcmFuY2U6IDY2LFxuICAgICAgdXNlclNlbGVjdDogNTMsXG4gICAgICBmb250S2VybmluZzogMzIsXG4gICAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbjogNjYsXG4gICAgICB0ZXh0RW1waGFzaXM6IDY2LFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDY2LFxuICAgICAgdGV4dEVtcGhhc2lzQ29sb3I6IDY2LFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiA2NixcbiAgICAgIGNsaXBQYXRoOiA1NCxcbiAgICAgIG1hc2tJbWFnZTogNjYsXG4gICAgICBtYXNrTW9kZTogNjYsXG4gICAgICBtYXNrUmVwZWF0OiA2NixcbiAgICAgIG1hc2tQb3NpdGlvbjogNjYsXG4gICAgICBtYXNrQ2xpcDogNjYsXG4gICAgICBtYXNrT3JpZ2luOiA2NixcbiAgICAgIG1hc2tTaXplOiA2NixcbiAgICAgIG1hc2tDb21wb3NpdGU6IDY2LFxuICAgICAgbWFzazogNjYsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiA2NixcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiA2NixcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogNjYsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDY2LFxuICAgICAgbWFza0JvcmRlck91dHNldDogNjYsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiA2NixcbiAgICAgIG1hc2tCb3JkZXI6IDY2LFxuICAgICAgbWFza1R5cGU6IDY2LFxuICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogNTYsXG4gICAgICB0ZXh0RGVjb3JhdGlvblNraXA6IDU2LFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiA1NixcbiAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IDU2LFxuICAgICAgZmlsdGVyOiA1MixcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IDQ3LFxuICAgICAgYnJlYWtBZnRlcjogNDksXG4gICAgICBicmVha0JlZm9yZTogNDksXG4gICAgICBicmVha0luc2lkZTogNDksXG4gICAgICBjb2x1bW5Db3VudDogNDksXG4gICAgICBjb2x1bW5GaWxsOiA0OSxcbiAgICAgIGNvbHVtbkdhcDogNDksXG4gICAgICBjb2x1bW5SdWxlOiA0OSxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogNDksXG4gICAgICBjb2x1bW5SdWxlU3R5bGU6IDQ5LFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiA0OSxcbiAgICAgIGNvbHVtbnM6IDQ5LFxuICAgICAgY29sdW1uU3BhbjogNDksXG4gICAgICBjb2x1bW5XaWR0aDogNDksXG4gICAgICB3cml0aW5nTW9kZTogNDdcbiAgICB9LFxuICAgIHNhZmFyaToge1xuICAgICAgZmxleDogOCxcbiAgICAgIGZsZXhCYXNpczogOCxcbiAgICAgIGZsZXhEaXJlY3Rpb246IDgsXG4gICAgICBmbGV4R3JvdzogOCxcbiAgICAgIGZsZXhGbG93OiA4LFxuICAgICAgZmxleFNocmluazogOCxcbiAgICAgIGZsZXhXcmFwOiA4LFxuICAgICAgYWxpZ25Db250ZW50OiA4LFxuICAgICAgYWxpZ25JdGVtczogOCxcbiAgICAgIGFsaWduU2VsZjogOCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiA4LFxuICAgICAgb3JkZXI6IDgsXG4gICAgICB0cmFuc2l0aW9uOiA2LFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiA2LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA2LFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiA2LFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiA2LFxuICAgICAgdHJhbnNmb3JtOiA4LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiA4LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogOCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblk6IDgsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IDgsXG4gICAgICBwZXJzcGVjdGl2ZTogOCxcbiAgICAgIHBlcnNwZWN0aXZlT3JpZ2luOiA4LFxuICAgICAgdHJhbnNmb3JtU3R5bGU6IDgsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5aOiA4LFxuICAgICAgYW5pbWF0aW9uOiA4LFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IDgsXG4gICAgICBhbmltYXRpb25EaXJlY3Rpb246IDgsXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogOCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiA4LFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDgsXG4gICAgICBhbmltYXRpb25OYW1lOiA4LFxuICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiA4LFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IDgsXG4gICAgICBhcHBlYXJhbmNlOiAxMSxcbiAgICAgIHVzZXJTZWxlY3Q6IDExLFxuICAgICAgYmFja2Ryb3BGaWx0ZXI6IDExLFxuICAgICAgZm9udEtlcm5pbmc6IDksXG4gICAgICBzY3JvbGxTbmFwVHlwZTogMTAuMSxcbiAgICAgIHNjcm9sbFNuYXBQb2ludHNYOiAxMC4xLFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1k6IDEwLjEsXG4gICAgICBzY3JvbGxTbmFwRGVzdGluYXRpb246IDEwLjEsXG4gICAgICBzY3JvbGxTbmFwQ29vcmRpbmF0ZTogMTAuMSxcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiA3LFxuICAgICAgdGV4dEVtcGhhc2lzOiA3LFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDcsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogNyxcbiAgICAgIGJveERlY29yYXRpb25CcmVhazogMTEsXG4gICAgICBjbGlwUGF0aDogMTEsXG4gICAgICBtYXNrSW1hZ2U6IDExLFxuICAgICAgbWFza01vZGU6IDExLFxuICAgICAgbWFza1JlcGVhdDogMTEsXG4gICAgICBtYXNrUG9zaXRpb246IDExLFxuICAgICAgbWFza0NsaXA6IDExLFxuICAgICAgbWFza09yaWdpbjogMTEsXG4gICAgICBtYXNrU2l6ZTogMTEsXG4gICAgICBtYXNrQ29tcG9zaXRlOiAxMSxcbiAgICAgIG1hc2s6IDExLFxuICAgICAgbWFza0JvcmRlclNvdXJjZTogMTEsXG4gICAgICBtYXNrQm9yZGVyTW9kZTogMTEsXG4gICAgICBtYXNrQm9yZGVyU2xpY2U6IDExLFxuICAgICAgbWFza0JvcmRlcldpZHRoOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJPdXRzZXQ6IDExLFxuICAgICAgbWFza0JvcmRlclJlcGVhdDogMTEsXG4gICAgICBtYXNrQm9yZGVyOiAxMSxcbiAgICAgIG1hc2tUeXBlOiAxMSxcbiAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25Ta2lwOiAxMSxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogMTEsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAxMSxcbiAgICAgIHNoYXBlSW1hZ2VUaHJlc2hvbGQ6IDEwLFxuICAgICAgc2hhcGVJbWFnZU1hcmdpbjogMTAsXG4gICAgICBzaGFwZUltYWdlT3V0c2lkZTogMTAsXG4gICAgICBmaWx0ZXI6IDksXG4gICAgICBoeXBoZW5zOiAxMSxcbiAgICAgIGZsb3dJbnRvOiAxMSxcbiAgICAgIGZsb3dGcm9tOiAxMSxcbiAgICAgIGJyZWFrQmVmb3JlOiA4LFxuICAgICAgYnJlYWtBZnRlcjogOCxcbiAgICAgIGJyZWFrSW5zaWRlOiA4LFxuICAgICAgcmVnaW9uRnJhZ21lbnQ6IDExLFxuICAgICAgY29sdW1uQ291bnQ6IDgsXG4gICAgICBjb2x1bW5GaWxsOiA4LFxuICAgICAgY29sdW1uR2FwOiA4LFxuICAgICAgY29sdW1uUnVsZTogOCxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogOCxcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogOCxcbiAgICAgIGNvbHVtblJ1bGVXaWR0aDogOCxcbiAgICAgIGNvbHVtbnM6IDgsXG4gICAgICBjb2x1bW5TcGFuOiA4LFxuICAgICAgY29sdW1uV2lkdGg6IDgsXG4gICAgICB3cml0aW5nTW9kZTogMTAuMVxuICAgIH0sXG4gICAgZmlyZWZveDoge1xuICAgICAgYXBwZWFyYW5jZTogNjAsXG4gICAgICB1c2VyU2VsZWN0OiA2MCxcbiAgICAgIGJveFNpemluZzogMjgsXG4gICAgICB0ZXh0QWxpZ25MYXN0OiA0OCxcbiAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6IDM1LFxuICAgICAgdGV4dERlY29yYXRpb25Ta2lwOiAzNSxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogMzUsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAzNSxcbiAgICAgIHRhYlNpemU6IDYwLFxuICAgICAgaHlwaGVuczogNDIsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzOiAzMyxcbiAgICAgIGJyZWFrQWZ0ZXI6IDUxLFxuICAgICAgYnJlYWtCZWZvcmU6IDUxLFxuICAgICAgYnJlYWtJbnNpZGU6IDUxLFxuICAgICAgY29sdW1uQ291bnQ6IDUxLFxuICAgICAgY29sdW1uRmlsbDogNTEsXG4gICAgICBjb2x1bW5HYXA6IDUxLFxuICAgICAgY29sdW1uUnVsZTogNTEsXG4gICAgICBjb2x1bW5SdWxlQ29sb3I6IDUxLFxuICAgICAgY29sdW1uUnVsZVN0eWxlOiA1MSxcbiAgICAgIGNvbHVtblJ1bGVXaWR0aDogNTEsXG4gICAgICBjb2x1bW5zOiA1MSxcbiAgICAgIGNvbHVtblNwYW46IDUxLFxuICAgICAgY29sdW1uV2lkdGg6IDUxXG4gICAgfSxcbiAgICBvcGVyYToge1xuICAgICAgZmxleDogMTYsXG4gICAgICBmbGV4QmFzaXM6IDE2LFxuICAgICAgZmxleERpcmVjdGlvbjogMTYsXG4gICAgICBmbGV4R3JvdzogMTYsXG4gICAgICBmbGV4RmxvdzogMTYsXG4gICAgICBmbGV4U2hyaW5rOiAxNixcbiAgICAgIGZsZXhXcmFwOiAxNixcbiAgICAgIGFsaWduQ29udGVudDogMTYsXG4gICAgICBhbGlnbkl0ZW1zOiAxNixcbiAgICAgIGFsaWduU2VsZjogMTYsXG4gICAgICBqdXN0aWZ5Q29udGVudDogMTYsXG4gICAgICBvcmRlcjogMTYsXG4gICAgICB0cmFuc2Zvcm06IDIyLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAyMixcbiAgICAgIHRyYW5zZm9ybU9yaWdpblg6IDIyLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWTogMjIsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IDIyLFxuICAgICAgcGVyc3BlY3RpdmU6IDIyLFxuICAgICAgcGVyc3BlY3RpdmVPcmlnaW46IDIyLFxuICAgICAgdHJhbnNmb3JtU3R5bGU6IDIyLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWjogMjIsXG4gICAgICBhbmltYXRpb246IDI5LFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IDI5LFxuICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiAyOSxcbiAgICAgIGFuaW1hdGlvbkZpbGxNb2RlOiAyOSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyOSxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAyOSxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IDI5LFxuICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiAyOSxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAyOSxcbiAgICAgIGFwcGVhcmFuY2U6IDUwLFxuICAgICAgdXNlclNlbGVjdDogNDAsXG4gICAgICBmb250S2VybmluZzogMTksXG4gICAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbjogNTAsXG4gICAgICB0ZXh0RW1waGFzaXM6IDUwLFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDUwLFxuICAgICAgdGV4dEVtcGhhc2lzQ29sb3I6IDUwLFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiA1MCxcbiAgICAgIGNsaXBQYXRoOiA0MSxcbiAgICAgIG1hc2tJbWFnZTogNTAsXG4gICAgICBtYXNrTW9kZTogNTAsXG4gICAgICBtYXNrUmVwZWF0OiA1MCxcbiAgICAgIG1hc2tQb3NpdGlvbjogNTAsXG4gICAgICBtYXNrQ2xpcDogNTAsXG4gICAgICBtYXNrT3JpZ2luOiA1MCxcbiAgICAgIG1hc2tTaXplOiA1MCxcbiAgICAgIG1hc2tDb21wb3NpdGU6IDUwLFxuICAgICAgbWFzazogNTAsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiA1MCxcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiA1MCxcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogNTAsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDUwLFxuICAgICAgbWFza0JvcmRlck91dHNldDogNTAsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiA1MCxcbiAgICAgIG1hc2tCb3JkZXI6IDUwLFxuICAgICAgbWFza1R5cGU6IDUwLFxuICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogNDMsXG4gICAgICB0ZXh0RGVjb3JhdGlvblNraXA6IDQzLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiA0MyxcbiAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IDQzLFxuICAgICAgZmlsdGVyOiAzOSxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IDM0LFxuICAgICAgYnJlYWtBZnRlcjogMzYsXG4gICAgICBicmVha0JlZm9yZTogMzYsXG4gICAgICBicmVha0luc2lkZTogMzYsXG4gICAgICBjb2x1bW5Db3VudDogMzYsXG4gICAgICBjb2x1bW5GaWxsOiAzNixcbiAgICAgIGNvbHVtbkdhcDogMzYsXG4gICAgICBjb2x1bW5SdWxlOiAzNixcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogMzYsXG4gICAgICBjb2x1bW5SdWxlU3R5bGU6IDM2LFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiAzNixcbiAgICAgIGNvbHVtbnM6IDM2LFxuICAgICAgY29sdW1uU3BhbjogMzYsXG4gICAgICBjb2x1bW5XaWR0aDogMzYsXG4gICAgICB3cml0aW5nTW9kZTogMzRcbiAgICB9LFxuICAgIGllOiB7XG4gICAgICBmbGV4OiAxMCxcbiAgICAgIGZsZXhEaXJlY3Rpb246IDEwLFxuICAgICAgZmxleEZsb3c6IDEwLFxuICAgICAgZmxleFdyYXA6IDEwLFxuICAgICAgdHJhbnNmb3JtOiA5LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiA5LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogOSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblk6IDksXG4gICAgICB1c2VyU2VsZWN0OiAxMSxcbiAgICAgIHdyYXBGbG93OiAxMSxcbiAgICAgIHdyYXBUaHJvdWdoOiAxMSxcbiAgICAgIHdyYXBNYXJnaW46IDExLFxuICAgICAgc2Nyb2xsU25hcFR5cGU6IDExLFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1g6IDExLFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1k6IDExLFxuICAgICAgc2Nyb2xsU25hcERlc3RpbmF0aW9uOiAxMSxcbiAgICAgIHNjcm9sbFNuYXBDb29yZGluYXRlOiAxMSxcbiAgICAgIHRvdWNoQWN0aW9uOiAxMCxcbiAgICAgIGh5cGhlbnM6IDExLFxuICAgICAgZmxvd0ludG86IDExLFxuICAgICAgZmxvd0Zyb206IDExLFxuICAgICAgYnJlYWtCZWZvcmU6IDExLFxuICAgICAgYnJlYWtBZnRlcjogMTEsXG4gICAgICBicmVha0luc2lkZTogMTEsXG4gICAgICByZWdpb25GcmFnbWVudDogMTEsXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAxMSxcbiAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IDExLFxuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IDExLFxuICAgICAgZ3JpZFRlbXBsYXRlOiAxMSxcbiAgICAgIGdyaWRBdXRvQ29sdW1uczogMTEsXG4gICAgICBncmlkQXV0b1Jvd3M6IDExLFxuICAgICAgZ3JpZEF1dG9GbG93OiAxMSxcbiAgICAgIGdyaWQ6IDExLFxuICAgICAgZ3JpZFJvd1N0YXJ0OiAxMSxcbiAgICAgIGdyaWRDb2x1bW5TdGFydDogMTEsXG4gICAgICBncmlkUm93RW5kOiAxMSxcbiAgICAgIGdyaWRSb3c6IDExLFxuICAgICAgZ3JpZENvbHVtbjogMTEsXG4gICAgICBncmlkQ29sdW1uRW5kOiAxMSxcbiAgICAgIGdyaWRDb2x1bW5HYXA6IDExLFxuICAgICAgZ3JpZFJvd0dhcDogMTEsXG4gICAgICBncmlkQXJlYTogMTEsXG4gICAgICBncmlkR2FwOiAxMSxcbiAgICAgIHRleHRTaXplQWRqdXN0OiAxMSxcbiAgICAgIHdyaXRpbmdNb2RlOiAxMVxuICAgIH0sXG4gICAgZWRnZToge1xuICAgICAgdXNlclNlbGVjdDogMTcsXG4gICAgICB3cmFwRmxvdzogMTcsXG4gICAgICB3cmFwVGhyb3VnaDogMTcsXG4gICAgICB3cmFwTWFyZ2luOiAxNyxcbiAgICAgIHNjcm9sbFNuYXBUeXBlOiAxNyxcbiAgICAgIHNjcm9sbFNuYXBQb2ludHNYOiAxNyxcbiAgICAgIHNjcm9sbFNuYXBQb2ludHNZOiAxNyxcbiAgICAgIHNjcm9sbFNuYXBEZXN0aW5hdGlvbjogMTcsXG4gICAgICBzY3JvbGxTbmFwQ29vcmRpbmF0ZTogMTcsXG4gICAgICBoeXBoZW5zOiAxNyxcbiAgICAgIGZsb3dJbnRvOiAxNyxcbiAgICAgIGZsb3dGcm9tOiAxNyxcbiAgICAgIGJyZWFrQmVmb3JlOiAxNyxcbiAgICAgIGJyZWFrQWZ0ZXI6IDE3LFxuICAgICAgYnJlYWtJbnNpZGU6IDE3LFxuICAgICAgcmVnaW9uRnJhZ21lbnQ6IDE3LFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogMTUsXG4gICAgICBncmlkVGVtcGxhdGVSb3dzOiAxNSxcbiAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiAxNSxcbiAgICAgIGdyaWRUZW1wbGF0ZTogMTUsXG4gICAgICBncmlkQXV0b0NvbHVtbnM6IDE1LFxuICAgICAgZ3JpZEF1dG9Sb3dzOiAxNSxcbiAgICAgIGdyaWRBdXRvRmxvdzogMTUsXG4gICAgICBncmlkOiAxNSxcbiAgICAgIGdyaWRSb3dTdGFydDogMTUsXG4gICAgICBncmlkQ29sdW1uU3RhcnQ6IDE1LFxuICAgICAgZ3JpZFJvd0VuZDogMTUsXG4gICAgICBncmlkUm93OiAxNSxcbiAgICAgIGdyaWRDb2x1bW46IDE1LFxuICAgICAgZ3JpZENvbHVtbkVuZDogMTUsXG4gICAgICBncmlkQ29sdW1uR2FwOiAxNSxcbiAgICAgIGdyaWRSb3dHYXA6IDE1LFxuICAgICAgZ3JpZEFyZWE6IDE1LFxuICAgICAgZ3JpZEdhcDogMTVcbiAgICB9LFxuICAgIGlvc19zYWY6IHtcbiAgICAgIGZsZXg6IDguMSxcbiAgICAgIGZsZXhCYXNpczogOC4xLFxuICAgICAgZmxleERpcmVjdGlvbjogOC4xLFxuICAgICAgZmxleEdyb3c6IDguMSxcbiAgICAgIGZsZXhGbG93OiA4LjEsXG4gICAgICBmbGV4U2hyaW5rOiA4LjEsXG4gICAgICBmbGV4V3JhcDogOC4xLFxuICAgICAgYWxpZ25Db250ZW50OiA4LjEsXG4gICAgICBhbGlnbkl0ZW1zOiA4LjEsXG4gICAgICBhbGlnblNlbGY6IDguMSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiA4LjEsXG4gICAgICBvcmRlcjogOC4xLFxuICAgICAgdHJhbnNpdGlvbjogNixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogNixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNixcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogNixcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogNixcbiAgICAgIHRyYW5zZm9ybTogOC4xLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiA4LjEsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5YOiA4LjEsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5ZOiA4LjEsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IDguMSxcbiAgICAgIHBlcnNwZWN0aXZlOiA4LjEsXG4gICAgICBwZXJzcGVjdGl2ZU9yaWdpbjogOC4xLFxuICAgICAgdHJhbnNmb3JtU3R5bGU6IDguMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblo6IDguMSxcbiAgICAgIGFuaW1hdGlvbjogOC4xLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IDguMSxcbiAgICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogOC4xLFxuICAgICAgYW5pbWF0aW9uRmlsbE1vZGU6IDguMSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiA4LjEsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogOC4xLFxuICAgICAgYW5pbWF0aW9uTmFtZTogOC4xLFxuICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiA4LjEsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogOC4xLFxuICAgICAgYXBwZWFyYW5jZTogMTEsXG4gICAgICB1c2VyU2VsZWN0OiAxMSxcbiAgICAgIGJhY2tkcm9wRmlsdGVyOiAxMSxcbiAgICAgIGZvbnRLZXJuaW5nOiAxMSxcbiAgICAgIHNjcm9sbFNuYXBUeXBlOiAxMC4zLFxuICAgICAgc2Nyb2xsU25hcFBvaW50c1g6IDEwLjMsXG4gICAgICBzY3JvbGxTbmFwUG9pbnRzWTogMTAuMyxcbiAgICAgIHNjcm9sbFNuYXBEZXN0aW5hdGlvbjogMTAuMyxcbiAgICAgIHNjcm9sbFNuYXBDb29yZGluYXRlOiAxMC4zLFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiAxMSxcbiAgICAgIGNsaXBQYXRoOiAxMSxcbiAgICAgIG1hc2tJbWFnZTogMTEsXG4gICAgICBtYXNrTW9kZTogMTEsXG4gICAgICBtYXNrUmVwZWF0OiAxMSxcbiAgICAgIG1hc2tQb3NpdGlvbjogMTEsXG4gICAgICBtYXNrQ2xpcDogMTEsXG4gICAgICBtYXNrT3JpZ2luOiAxMSxcbiAgICAgIG1hc2tTaXplOiAxMSxcbiAgICAgIG1hc2tDb21wb3NpdGU6IDExLFxuICAgICAgbWFzazogMTEsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiAxMSxcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogMTEsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDExLFxuICAgICAgbWFza0JvcmRlck91dHNldDogMTEsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiAxMSxcbiAgICAgIG1hc2tCb3JkZXI6IDExLFxuICAgICAgbWFza1R5cGU6IDExLFxuICAgICAgdGV4dFNpemVBZGp1c3Q6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogMTEsXG4gICAgICB0ZXh0RGVjb3JhdGlvblNraXA6IDExLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAxMSxcbiAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IDExLFxuICAgICAgc2hhcGVJbWFnZVRocmVzaG9sZDogMTAsXG4gICAgICBzaGFwZUltYWdlTWFyZ2luOiAxMCxcbiAgICAgIHNoYXBlSW1hZ2VPdXRzaWRlOiAxMCxcbiAgICAgIGZpbHRlcjogOSxcbiAgICAgIGh5cGhlbnM6IDExLFxuICAgICAgZmxvd0ludG86IDExLFxuICAgICAgZmxvd0Zyb206IDExLFxuICAgICAgYnJlYWtCZWZvcmU6IDguMSxcbiAgICAgIGJyZWFrQWZ0ZXI6IDguMSxcbiAgICAgIGJyZWFrSW5zaWRlOiA4LjEsXG4gICAgICByZWdpb25GcmFnbWVudDogMTEsXG4gICAgICBjb2x1bW5Db3VudDogOC4xLFxuICAgICAgY29sdW1uRmlsbDogOC4xLFxuICAgICAgY29sdW1uR2FwOiA4LjEsXG4gICAgICBjb2x1bW5SdWxlOiA4LjEsXG4gICAgICBjb2x1bW5SdWxlQ29sb3I6IDguMSxcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogOC4xLFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiA4LjEsXG4gICAgICBjb2x1bW5zOiA4LjEsXG4gICAgICBjb2x1bW5TcGFuOiA4LjEsXG4gICAgICBjb2x1bW5XaWR0aDogOC4xLFxuICAgICAgd3JpdGluZ01vZGU6IDEwLjNcbiAgICB9LFxuICAgIGFuZHJvaWQ6IHtcbiAgICAgIGJvcmRlckltYWdlOiA0LjIsXG4gICAgICBib3JkZXJJbWFnZU91dHNldDogNC4yLFxuICAgICAgYm9yZGVySW1hZ2VSZXBlYXQ6IDQuMixcbiAgICAgIGJvcmRlckltYWdlU2xpY2U6IDQuMixcbiAgICAgIGJvcmRlckltYWdlU291cmNlOiA0LjIsXG4gICAgICBib3JkZXJJbWFnZVdpZHRoOiA0LjIsXG4gICAgICBmbGV4OiA0LjIsXG4gICAgICBmbGV4QmFzaXM6IDQuMixcbiAgICAgIGZsZXhEaXJlY3Rpb246IDQuMixcbiAgICAgIGZsZXhHcm93OiA0LjIsXG4gICAgICBmbGV4RmxvdzogNC4yLFxuICAgICAgZmxleFNocmluazogNC4yLFxuICAgICAgZmxleFdyYXA6IDQuMixcbiAgICAgIGFsaWduQ29udGVudDogNC4yLFxuICAgICAgYWxpZ25JdGVtczogNC4yLFxuICAgICAgYWxpZ25TZWxmOiA0LjIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogNC4yLFxuICAgICAgb3JkZXI6IDQuMixcbiAgICAgIHRyYW5zaXRpb246IDQuMixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogNC4yLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA0LjIsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IDQuMixcbiAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogNC4yLFxuICAgICAgdHJhbnNmb3JtOiA0LjQsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IDQuNCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblg6IDQuNCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblk6IDQuNCxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogNC40LFxuICAgICAgcGVyc3BlY3RpdmU6IDQuNCxcbiAgICAgIHBlcnNwZWN0aXZlT3JpZ2luOiA0LjQsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogNC40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWjogNC40LFxuICAgICAgYW5pbWF0aW9uOiA0LjQsXG4gICAgICBhbmltYXRpb25EZWxheTogNC40LFxuICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiA0LjQsXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogNC40LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDQuNCxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiA0LjQsXG4gICAgICBhbmltYXRpb25OYW1lOiA0LjQsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6IDQuNCxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiA0LjQsXG4gICAgICBhcHBlYXJhbmNlOiA2MixcbiAgICAgIHVzZXJTZWxlY3Q6IDQuNCxcbiAgICAgIGZvbnRLZXJuaW5nOiA0LjQsXG4gICAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbjogNjIsXG4gICAgICB0ZXh0RW1waGFzaXM6IDYyLFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDYyLFxuICAgICAgdGV4dEVtcGhhc2lzQ29sb3I6IDYyLFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiA2MixcbiAgICAgIGNsaXBQYXRoOiA0LjQsXG4gICAgICBtYXNrSW1hZ2U6IDYyLFxuICAgICAgbWFza01vZGU6IDYyLFxuICAgICAgbWFza1JlcGVhdDogNjIsXG4gICAgICBtYXNrUG9zaXRpb246IDYyLFxuICAgICAgbWFza0NsaXA6IDYyLFxuICAgICAgbWFza09yaWdpbjogNjIsXG4gICAgICBtYXNrU2l6ZTogNjIsXG4gICAgICBtYXNrQ29tcG9zaXRlOiA2MixcbiAgICAgIG1hc2s6IDYyLFxuICAgICAgbWFza0JvcmRlclNvdXJjZTogNjIsXG4gICAgICBtYXNrQm9yZGVyTW9kZTogNjIsXG4gICAgICBtYXNrQm9yZGVyU2xpY2U6IDYyLFxuICAgICAgbWFza0JvcmRlcldpZHRoOiA2MixcbiAgICAgIG1hc2tCb3JkZXJPdXRzZXQ6IDYyLFxuICAgICAgbWFza0JvcmRlclJlcGVhdDogNjIsXG4gICAgICBtYXNrQm9yZGVyOiA2MixcbiAgICAgIG1hc2tUeXBlOiA2MixcbiAgICAgIGZpbHRlcjogNC40LFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogNC40LFxuICAgICAgYnJlYWtBZnRlcjogNC40LFxuICAgICAgYnJlYWtCZWZvcmU6IDQuNCxcbiAgICAgIGJyZWFrSW5zaWRlOiA0LjQsXG4gICAgICBjb2x1bW5Db3VudDogNC40LFxuICAgICAgY29sdW1uRmlsbDogNC40LFxuICAgICAgY29sdW1uR2FwOiA0LjQsXG4gICAgICBjb2x1bW5SdWxlOiA0LjQsXG4gICAgICBjb2x1bW5SdWxlQ29sb3I6IDQuNCxcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogNC40LFxuICAgICAgY29sdW1uUnVsZVdpZHRoOiA0LjQsXG4gICAgICBjb2x1bW5zOiA0LjQsXG4gICAgICBjb2x1bW5TcGFuOiA0LjQsXG4gICAgICBjb2x1bW5XaWR0aDogNC40LFxuICAgICAgd3JpdGluZ01vZGU6IDQuNFxuICAgIH0sXG4gICAgYW5kX2Nocjoge1xuICAgICAgYXBwZWFyYW5jZTogNjIsXG4gICAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbjogNjIsXG4gICAgICB0ZXh0RW1waGFzaXM6IDYyLFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDYyLFxuICAgICAgdGV4dEVtcGhhc2lzQ29sb3I6IDYyLFxuICAgICAgYm94RGVjb3JhdGlvbkJyZWFrOiA2MixcbiAgICAgIG1hc2tJbWFnZTogNjIsXG4gICAgICBtYXNrTW9kZTogNjIsXG4gICAgICBtYXNrUmVwZWF0OiA2MixcbiAgICAgIG1hc2tQb3NpdGlvbjogNjIsXG4gICAgICBtYXNrQ2xpcDogNjIsXG4gICAgICBtYXNrT3JpZ2luOiA2MixcbiAgICAgIG1hc2tTaXplOiA2MixcbiAgICAgIG1hc2tDb21wb3NpdGU6IDYyLFxuICAgICAgbWFzazogNjIsXG4gICAgICBtYXNrQm9yZGVyU291cmNlOiA2MixcbiAgICAgIG1hc2tCb3JkZXJNb2RlOiA2MixcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogNjIsXG4gICAgICBtYXNrQm9yZGVyV2lkdGg6IDYyLFxuICAgICAgbWFza0JvcmRlck91dHNldDogNjIsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiA2MixcbiAgICAgIG1hc2tCb3JkZXI6IDYyLFxuICAgICAgbWFza1R5cGU6IDYyXG4gICAgfSxcbiAgICBhbmRfdWM6IHtcbiAgICAgIGZsZXg6IDExLjQsXG4gICAgICBmbGV4QmFzaXM6IDExLjQsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAxMS40LFxuICAgICAgZmxleEdyb3c6IDExLjQsXG4gICAgICBmbGV4RmxvdzogMTEuNCxcbiAgICAgIGZsZXhTaHJpbms6IDExLjQsXG4gICAgICBmbGV4V3JhcDogMTEuNCxcbiAgICAgIGFsaWduQ29udGVudDogMTEuNCxcbiAgICAgIGFsaWduSXRlbXM6IDExLjQsXG4gICAgICBhbGlnblNlbGY6IDExLjQsXG4gICAgICBqdXN0aWZ5Q29udGVudDogMTEuNCxcbiAgICAgIG9yZGVyOiAxMS40LFxuICAgICAgdHJhbnNmb3JtOiAxMS40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAxMS40LFxuICAgICAgdHJhbnNmb3JtT3JpZ2luWDogMTEuNCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpblk6IDExLjQsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6IDExLjQsXG4gICAgICBwZXJzcGVjdGl2ZTogMTEuNCxcbiAgICAgIHBlcnNwZWN0aXZlT3JpZ2luOiAxMS40LFxuICAgICAgdHJhbnNmb3JtU3R5bGU6IDExLjQsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5aOiAxMS40LFxuICAgICAgYW5pbWF0aW9uOiAxMS40LFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IDExLjQsXG4gICAgICBhbmltYXRpb25EaXJlY3Rpb246IDExLjQsXG4gICAgICBhbmltYXRpb25GaWxsTW9kZTogMTEuNCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMS40LFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDExLjQsXG4gICAgICBhbmltYXRpb25OYW1lOiAxMS40LFxuICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiAxMS40LFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IDExLjQsXG4gICAgICBhcHBlYXJhbmNlOiAxMS40LFxuICAgICAgdXNlclNlbGVjdDogMTEuNCxcbiAgICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiAxMS40LFxuICAgICAgdGV4dEVtcGhhc2lzOiAxMS40LFxuICAgICAgdGV4dEVtcGhhc2lzU3R5bGU6IDExLjQsXG4gICAgICB0ZXh0RW1waGFzaXNDb2xvcjogMTEuNCxcbiAgICAgIGNsaXBQYXRoOiAxMS40LFxuICAgICAgbWFza0ltYWdlOiAxMS40LFxuICAgICAgbWFza01vZGU6IDExLjQsXG4gICAgICBtYXNrUmVwZWF0OiAxMS40LFxuICAgICAgbWFza1Bvc2l0aW9uOiAxMS40LFxuICAgICAgbWFza0NsaXA6IDExLjQsXG4gICAgICBtYXNrT3JpZ2luOiAxMS40LFxuICAgICAgbWFza1NpemU6IDExLjQsXG4gICAgICBtYXNrQ29tcG9zaXRlOiAxMS40LFxuICAgICAgbWFzazogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJTb3VyY2U6IDExLjQsXG4gICAgICBtYXNrQm9yZGVyTW9kZTogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJTbGljZTogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJXaWR0aDogMTEuNCxcbiAgICAgIG1hc2tCb3JkZXJPdXRzZXQ6IDExLjQsXG4gICAgICBtYXNrQm9yZGVyUmVwZWF0OiAxMS40LFxuICAgICAgbWFza0JvcmRlcjogMTEuNCxcbiAgICAgIG1hc2tUeXBlOiAxMS40LFxuICAgICAgdGV4dFNpemVBZGp1c3Q6IDExLjQsXG4gICAgICBmaWx0ZXI6IDExLjQsXG4gICAgICBoeXBoZW5zOiAxMS40LFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogMTEuNCxcbiAgICAgIGJyZWFrQWZ0ZXI6IDExLjQsXG4gICAgICBicmVha0JlZm9yZTogMTEuNCxcbiAgICAgIGJyZWFrSW5zaWRlOiAxMS40LFxuICAgICAgY29sdW1uQ291bnQ6IDExLjQsXG4gICAgICBjb2x1bW5GaWxsOiAxMS40LFxuICAgICAgY29sdW1uR2FwOiAxMS40LFxuICAgICAgY29sdW1uUnVsZTogMTEuNCxcbiAgICAgIGNvbHVtblJ1bGVDb2xvcjogMTEuNCxcbiAgICAgIGNvbHVtblJ1bGVTdHlsZTogMTEuNCxcbiAgICAgIGNvbHVtblJ1bGVXaWR0aDogMTEuNCxcbiAgICAgIGNvbHVtbnM6IDExLjQsXG4gICAgICBjb2x1bW5TcGFuOiAxMS40LFxuICAgICAgY29sdW1uV2lkdGg6IDExLjQsXG4gICAgICB3cml0aW5nTW9kZTogMTEuNFxuICAgIH0sXG4gICAgb3BfbWluaToge31cbiAgfVxufTsiLCJpbXBvcnQgY2FsYyBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY2FsYyc7XG5pbXBvcnQgY3Jvc3NGYWRlIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9jcm9zc0ZhZGUnO1xuaW1wb3J0IGN1cnNvciBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvY3Vyc29yJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZpbHRlcic7XG5pbXBvcnQgZmxleCBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvZmxleCc7XG5pbXBvcnQgZmxleGJveElFIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94SUUnO1xuaW1wb3J0IGZsZXhib3hPbGQgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQnO1xuaW1wb3J0IGdyYWRpZW50IGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudCc7XG5pbXBvcnQgaW1hZ2VTZXQgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9wbHVnaW5zL2ltYWdlU2V0JztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvcG9zaXRpb24nO1xuaW1wb3J0IHNpemluZyBmcm9tICdpbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljL3BsdWdpbnMvc2l6aW5nJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uJztcbnZhciB3ID0gWydXZWJraXQnXTtcbnZhciBtID0gWydNb3onXTtcbnZhciBtcyA9IFsnbXMnXTtcbnZhciB3bSA9IFsnV2Via2l0JywgJ01veiddO1xudmFyIHdtcyA9IFsnV2Via2l0JywgJ21zJ107XG52YXIgd21tcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBsdWdpbnM6IFtjYWxjLCBjcm9zc0ZhZGUsIGN1cnNvciwgZmlsdGVyLCBmbGV4LCBmbGV4Ym94SUUsIGZsZXhib3hPbGQsIGdyYWRpZW50LCBpbWFnZVNldCwgcG9zaXRpb24sIHNpemluZywgdHJhbnNpdGlvbl0sXG4gIHByZWZpeE1hcDoge1xuICAgIHRyYW5zZm9ybTogd21zLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogd21zLFxuICAgIHRyYW5zZm9ybU9yaWdpblg6IHdtcyxcbiAgICB0cmFuc2Zvcm1PcmlnaW5ZOiB3bXMsXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5OiB3LFxuICAgIHBlcnNwZWN0aXZlOiB3LFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiB3LFxuICAgIHRyYW5zZm9ybVN0eWxlOiB3LFxuICAgIHRyYW5zZm9ybU9yaWdpblo6IHcsXG4gICAgYW5pbWF0aW9uOiB3LFxuICAgIGFuaW1hdGlvbkRlbGF5OiB3LFxuICAgIGFuaW1hdGlvbkRpcmVjdGlvbjogdyxcbiAgICBhbmltYXRpb25GaWxsTW9kZTogdyxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogdyxcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdyxcbiAgICBhbmltYXRpb25OYW1lOiB3LFxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogdyxcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdyxcbiAgICBhcHBlYXJhbmNlOiB3bSxcbiAgICB1c2VyU2VsZWN0OiB3bW1zLFxuICAgIGZvbnRLZXJuaW5nOiB3LFxuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiB3LFxuICAgIHRleHRFbXBoYXNpczogdyxcbiAgICB0ZXh0RW1waGFzaXNTdHlsZTogdyxcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogdyxcbiAgICBib3hEZWNvcmF0aW9uQnJlYWs6IHcsXG4gICAgY2xpcFBhdGg6IHcsXG4gICAgbWFza0ltYWdlOiB3LFxuICAgIG1hc2tNb2RlOiB3LFxuICAgIG1hc2tSZXBlYXQ6IHcsXG4gICAgbWFza1Bvc2l0aW9uOiB3LFxuICAgIG1hc2tDbGlwOiB3LFxuICAgIG1hc2tPcmlnaW46IHcsXG4gICAgbWFza1NpemU6IHcsXG4gICAgbWFza0NvbXBvc2l0ZTogdyxcbiAgICBtYXNrOiB3LFxuICAgIG1hc2tCb3JkZXJTb3VyY2U6IHcsXG4gICAgbWFza0JvcmRlck1vZGU6IHcsXG4gICAgbWFza0JvcmRlclNsaWNlOiB3LFxuICAgIG1hc2tCb3JkZXJXaWR0aDogdyxcbiAgICBtYXNrQm9yZGVyT3V0c2V0OiB3LFxuICAgIG1hc2tCb3JkZXJSZXBlYXQ6IHcsXG4gICAgbWFza0JvcmRlcjogdyxcbiAgICBtYXNrVHlwZTogdyxcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiB3bSxcbiAgICB0ZXh0RGVjb3JhdGlvblNraXA6IHdtLFxuICAgIHRleHREZWNvcmF0aW9uTGluZTogd20sXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogd20sXG4gICAgZmlsdGVyOiB3LFxuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IHdtLFxuICAgIGJyZWFrQWZ0ZXI6IHdtbXMsXG4gICAgYnJlYWtCZWZvcmU6IHdtbXMsXG4gICAgYnJlYWtJbnNpZGU6IHdtbXMsXG4gICAgY29sdW1uQ291bnQ6IHdtLFxuICAgIGNvbHVtbkZpbGw6IHdtLFxuICAgIGNvbHVtbkdhcDogd20sXG4gICAgY29sdW1uUnVsZTogd20sXG4gICAgY29sdW1uUnVsZUNvbG9yOiB3bSxcbiAgICBjb2x1bW5SdWxlU3R5bGU6IHdtLFxuICAgIGNvbHVtblJ1bGVXaWR0aDogd20sXG4gICAgY29sdW1uczogd20sXG4gICAgY29sdW1uU3Bhbjogd20sXG4gICAgY29sdW1uV2lkdGg6IHdtLFxuICAgIHdyaXRpbmdNb2RlOiB3bXMsXG4gICAgZmxleDogd21zLFxuICAgIGZsZXhCYXNpczogdyxcbiAgICBmbGV4RGlyZWN0aW9uOiB3bXMsXG4gICAgZmxleEdyb3c6IHcsXG4gICAgZmxleEZsb3c6IHdtcyxcbiAgICBmbGV4U2hyaW5rOiB3LFxuICAgIGZsZXhXcmFwOiB3bXMsXG4gICAgYWxpZ25Db250ZW50OiB3LFxuICAgIGFsaWduSXRlbXM6IHcsXG4gICAgYWxpZ25TZWxmOiB3LFxuICAgIGp1c3RpZnlDb250ZW50OiB3LFxuICAgIG9yZGVyOiB3LFxuICAgIHRyYW5zaXRpb25EZWxheTogdyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHcsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB3LFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdyxcbiAgICBiYWNrZHJvcEZpbHRlcjogdyxcbiAgICBzY3JvbGxTbmFwVHlwZTogd21zLFxuICAgIHNjcm9sbFNuYXBQb2ludHNYOiB3bXMsXG4gICAgc2Nyb2xsU25hcFBvaW50c1k6IHdtcyxcbiAgICBzY3JvbGxTbmFwRGVzdGluYXRpb246IHdtcyxcbiAgICBzY3JvbGxTbmFwQ29vcmRpbmF0ZTogd21zLFxuICAgIHNoYXBlSW1hZ2VUaHJlc2hvbGQ6IHcsXG4gICAgc2hhcGVJbWFnZU1hcmdpbjogdyxcbiAgICBzaGFwZUltYWdlT3V0c2lkZTogdyxcbiAgICBoeXBoZW5zOiB3bW1zLFxuICAgIGZsb3dJbnRvOiB3bXMsXG4gICAgZmxvd0Zyb206IHdtcyxcbiAgICByZWdpb25GcmFnbWVudDogd21zLFxuICAgIGJveFNpemluZzogbSxcbiAgICB0ZXh0QWxpZ25MYXN0OiBtLFxuICAgIHRhYlNpemU6IG0sXG4gICAgd3JhcEZsb3c6IG1zLFxuICAgIHdyYXBUaHJvdWdoOiBtcyxcbiAgICB3cmFwTWFyZ2luOiBtcyxcbiAgICB0b3VjaEFjdGlvbjogbXMsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogbXMsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogbXMsXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM6IG1zLFxuICAgIGdyaWRUZW1wbGF0ZTogbXMsXG4gICAgZ3JpZEF1dG9Db2x1bW5zOiBtcyxcbiAgICBncmlkQXV0b1Jvd3M6IG1zLFxuICAgIGdyaWRBdXRvRmxvdzogbXMsXG4gICAgZ3JpZDogbXMsXG4gICAgZ3JpZFJvd1N0YXJ0OiBtcyxcbiAgICBncmlkQ29sdW1uU3RhcnQ6IG1zLFxuICAgIGdyaWRSb3dFbmQ6IG1zLFxuICAgIGdyaWRSb3c6IG1zLFxuICAgIGdyaWRDb2x1bW46IG1zLFxuICAgIGdyaWRDb2x1bW5FbmQ6IG1zLFxuICAgIGdyaWRDb2x1bW5HYXA6IG1zLFxuICAgIGdyaWRSb3dHYXA6IG1zLFxuICAgIGdyaWRBcmVhOiBtcyxcbiAgICBncmlkR2FwOiBtcyxcbiAgICB0ZXh0U2l6ZUFkanVzdDogd21zLFxuICAgIGJvcmRlckltYWdlOiB3LFxuICAgIGJvcmRlckltYWdlT3V0c2V0OiB3LFxuICAgIGJvcmRlckltYWdlUmVwZWF0OiB3LFxuICAgIGJvcmRlckltYWdlU2xpY2U6IHcsXG4gICAgYm9yZGVySW1hZ2VTb3VyY2U6IHcsXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogd1xuICB9XG59OyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyoqXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vanNzdHlsZXMvY3NzLXZlbmRvciwgYnV0IHdpdGhvdXQgaGF2aW5nIHRvXG4gKiBjb252ZXJ0IGJldHdlZW4gZGlmZmVyZW50IGNhc2VzIGFsbCB0aGUgdGltZS5cbiAqXG4gKiBcbiAqL1xuXG5pbXBvcnQgY3JlYXRlU3RhdGljUHJlZml4ZXIgZnJvbSAnaW5saW5lLXN0eWxlLXByZWZpeGVyL3N0YXRpYy9jcmVhdGVQcmVmaXhlcic7XG5pbXBvcnQgY3JlYXRlRHluYW1pY1ByZWZpeGVyIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlci9keW5hbWljL2NyZWF0ZVByZWZpeGVyJztcbmltcG9ydCBFeGVjdXRpb25FbnZpcm9ubWVudCBmcm9tICdleGVudic7XG5cbmltcG9ydCBzdGF0aWNEYXRhIGZyb20gJy4vcHJlZml4LWRhdGEvc3RhdGljJztcbmltcG9ydCBkeW5hbWljRGF0YSBmcm9tICcuL3ByZWZpeC1kYXRhL2R5bmFtaWMnO1xuXG5pbXBvcnQgeyBjYW1lbENhc2VUb0Rhc2hDYXNlIH0gZnJvbSAnLi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZSc7XG5cbnZhciBwcmVmaXhBbGwgPSBjcmVhdGVTdGF0aWNQcmVmaXhlcihzdGF0aWNEYXRhKTtcbnZhciBJbmxpbmVTdHlsZVByZWZpeGVyID0gY3JlYXRlRHluYW1pY1ByZWZpeGVyKGR5bmFtaWNEYXRhLCBwcmVmaXhBbGwpO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1WYWx1ZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCc7JyArIGtleSArICc6Jyk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG5ld1N0eWxlO1xuICB9LCB7fSk7XG59XG5cbi8vIEZsYXR0ZW4gcHJlZml4ZWQgdmFsdWVzIHRoYXQgYXJlIGFycmF5cyB0byBzdHJpbmdzLlxuLy9cbi8vIFdlIGdldCBwcmVmaXhlZCBzdHlsZXMgYmFjayBpbiB0aGUgZm9ybSBvZjpcbi8vIC0gYGRpc3BsYXk6IFwiZmxleFwiYCBPUlxuLy8gLSBgZGlzcGxheTogXCItd2Via2l0LWZsZXhcImAgT1Jcbi8vIC0gYGRpc3BsYXk6IFsvKiAuLi4gKi8sIFwiLXdlYmtpdC1mbGV4XCIsIFwiZmxleFwiXVxuLy9cbi8vIFRoZSBsYXN0IGZvcm0gaXMgcHJvYmxlbWF0aWMgZm9yIGV2ZW50dWFsIHVzZSBpbiB0aGUgYnJvd3NlciBhbmQgc2VydmVyXG4vLyByZW5kZXIuIE1vcmUgY29uZnVzaW5nbHksIHdlIGhhdmUgdG8gZG8gKipkaWZmZXJlbnQqKiB0aGluZ3Mgb24gdGhlXG4vLyBicm93c2VyIGFuZCBzZXJ2ZXIgKG5vdGVkIGlubGluZSBiZWxvdykuXG4vL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS9pc3N1ZXMvOTU4XG5mdW5jdGlvbiBmbGF0dGVuU3R5bGVWYWx1ZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlLCBrZXkpIHtcbiAgICB2YXIgdmFsID0gc3R5bGVba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBpZiAoRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIC8vIEZvciB0aGUgKipicm93c2VyKiosIHdoZW4gZmFjZWQgd2l0aCBtdWx0aXBsZSB2YWx1ZXMsIHdlIGp1c3QgdGFrZVxuICAgICAgICAvLyB0aGUgKipsYXN0Kiogb25lLCB3aGljaCBpcyB0aGUgb3JpZ2luYWwgcGFzc2VkIGluIHZhbHVlIGJlZm9yZVxuICAgICAgICAvLyBwcmVmaXhpbmcuIFRoaXMgX3Nob3VsZF8gd29yaywgYmVjYXVzZSBgaW5saW5lLXN0eWxlLXByZWZpeGVyYFxuICAgICAgICAvLyB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhyb3VnaCB3aGF0IHdvdWxkIGhhcHBlbiB3aXRob3V0IElTUC5cblxuICAgICAgICB2YWwgPSB2YWxbdmFsLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgdGhlICoqc2VydmVyKiosIHdlIGp1c3QgY29uY2F0ZW5hdGUgdGhpbmdzIHRvZ2V0aGVyIGFuZCBjb252ZXJ0XG4gICAgICAgIC8vIHRoZSBzdHlsZSBvYmplY3QgdmFsdWVzIGludG8gYSBoYWNrZWQtdXAgc3RyaW5nIG9mIGxpa2UgYGRpc3BsYXk6XG4gICAgICAgIC8vIFwiLXdlYmtpdC1mbGV4O2Rpc3BsYXk6ZmxleFwiYCB0aGF0IHdpbGwgU1NSIHJlbmRlciBjb3JyZWN0bHkgdG8gbGlrZVxuICAgICAgICAvLyBgXCJkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXhcImAgYnV0IHdvdWxkIG90aGVyd2lzZSBiZVxuICAgICAgICAvLyB0b3RhbGx5IGludmFsaWQgdmFsdWVzLlxuXG4gICAgICAgIC8vIFdlIGNvbnZlcnQga2V5cyB0byBkYXNoLWNhc2Ugb25seSBmb3IgdGhlIHNlcmlhbGl6ZSB2YWx1ZXMgYW5kXG4gICAgICAgIC8vIGxlYXZlIHRoZSByZWFsIGtleSBjYW1lbC1jYXNlZCBzbyBpdCdzIGFzIGV4cGVjdGVkIHRvIFJlYWN0IGFuZFxuICAgICAgICAvLyBvdGhlciBwYXJ0cyBvZiB0aGUgcHJvY2Vzc2luZyBjaGFpbi5cbiAgICAgICAgdmFsID0gdmFsLmpvaW4oJzsnICsgY2FtZWxDYXNlVG9EYXNoQ2FzZShrZXkpICsgJzonKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTdHlsZVtrZXldID0gdmFsO1xuICAgIHJldHVybiBuZXdTdHlsZTtcbiAgfSwge30pO1xufVxuXG52YXIgX2hhc1dhcm5lZEFib3V0VXNlckFnZW50ID0gZmFsc2U7XG52YXIgX2xhc3RVc2VyQWdlbnQgPSB2b2lkIDA7XG52YXIgX2NhY2hlZFByZWZpeGVyID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBnZXRQcmVmaXhlcih1c2VyQWdlbnQpIHtcbiAgdmFyIGFjdHVhbFVzZXJBZ2VudCA9IHVzZXJBZ2VudCB8fCBnbG9iYWwgJiYgZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghYWN0dWFsVXNlckFnZW50ICYmICFfaGFzV2FybmVkQWJvdXRVc2VyQWdlbnQpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGNvbnNvbGUud2FybignUmFkaXVtOiB1c2VyQWdlbnQgc2hvdWxkIGJlIHN1cHBsaWVkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vdHJlZS9tYXN0ZXIvZG9jcy9hcGkjcmFkaXVtICcgKyAnZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIF9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgfHwgIV9jYWNoZWRQcmVmaXhlciB8fCBhY3R1YWxVc2VyQWdlbnQgIT09IF9sYXN0VXNlckFnZW50KSB7XG4gICAgaWYgKGFjdHVhbFVzZXJBZ2VudCA9PT0gJ2FsbCcpIHtcbiAgICAgIF9jYWNoZWRQcmVmaXhlciA9IHtcbiAgICAgICAgcHJlZml4OiBwcmVmaXhBbGwsXG4gICAgICAgIHByZWZpeGVkS2V5ZnJhbWVzOiAna2V5ZnJhbWVzJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NhY2hlZFByZWZpeGVyID0gbmV3IElubGluZVN0eWxlUHJlZml4ZXIoeyB1c2VyQWdlbnQ6IGFjdHVhbFVzZXJBZ2VudCB9KTtcbiAgICB9XG4gICAgX2xhc3RVc2VyQWdlbnQgPSBhY3R1YWxVc2VyQWdlbnQ7XG4gIH1cblxuICByZXR1cm4gX2NhY2hlZFByZWZpeGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlZml4ZWRLZXlmcmFtZXModXNlckFnZW50KSB7XG4gIHJldHVybiBnZXRQcmVmaXhlcih1c2VyQWdlbnQpLnByZWZpeGVkS2V5ZnJhbWVzIHx8ICdrZXlmcmFtZXMnO1xufVxuXG4vLyBSZXR1cm5zIGEgbmV3IHN0eWxlIG9iamVjdCB3aXRoIHZlbmRvciBwcmVmaXhlcyBhZGRlZCB0byBwcm9wZXJ0eSBuYW1lcyBhbmRcbi8vIHZhbHVlcy5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVmaXhlZFN0eWxlKHN0eWxlLCB1c2VyQWdlbnQpIHtcbiAgdmFyIHN0eWxlV2l0aEZhbGxiYWNrcyA9IHRyYW5zZm9ybVZhbHVlcyhzdHlsZSk7XG4gIHZhciBwcmVmaXhlciA9IGdldFByZWZpeGVyKHVzZXJBZ2VudCk7XG4gIHZhciBwcmVmaXhlZFN0eWxlID0gcHJlZml4ZXIucHJlZml4KHN0eWxlV2l0aEZhbGxiYWNrcyk7XG4gIHZhciBmbGF0dGVuZWRTdHlsZSA9IGZsYXR0ZW5TdHlsZVZhbHVlcyhwcmVmaXhlZFN0eWxlKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZFN0eWxlO1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuaW1wb3J0IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlIGZyb20gJy4vYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlJztcblxuaW1wb3J0IGNzc1J1bGVTZXRUb1N0cmluZyBmcm9tICcuL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnO1xuaW1wb3J0IGdldFN0YXRlIGZyb20gJy4vZ2V0LXN0YXRlJztcbmltcG9ydCBnZXRTdGF0ZUtleSBmcm9tICcuL2dldC1zdGF0ZS1rZXknO1xuaW1wb3J0IGNsZWFuU3RhdGVLZXkgZnJvbSAnLi9jbGVhbi1zdGF0ZS1rZXknO1xuaW1wb3J0IGdldFJhZGl1bVN0eWxlU3RhdGUgZnJvbSAnLi9nZXQtcmFkaXVtLXN0eWxlLXN0YXRlJztcbmltcG9ydCBoYXNoIGZyb20gJy4vaGFzaCc7XG5pbXBvcnQgeyBpc05lc3RlZFN0eWxlLCBtZXJnZVN0eWxlcyB9IGZyb20gJy4vbWVyZ2Utc3R5bGVzJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4vcGx1Z2lucy8nO1xuXG5pbXBvcnQgRXhlY3V0aW9uRW52aXJvbm1lbnQgZnJvbSAnZXhlbnYnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIERFRkFVTFRfQ09ORklHID0ge1xuICBwbHVnaW5zOiBbUGx1Z2lucy5tZXJnZVN0eWxlQXJyYXksIFBsdWdpbnMuY2hlY2tQcm9wcywgUGx1Z2lucy5yZXNvbHZlTWVkaWFRdWVyaWVzLCBQbHVnaW5zLnJlc29sdmVJbnRlcmFjdGlvblN0eWxlcywgUGx1Z2lucy5rZXlmcmFtZXMsIFBsdWdpbnMudmlzaXRlZCwgUGx1Z2lucy5yZW1vdmVOZXN0ZWRTdHlsZXMsIFBsdWdpbnMucHJlZml4LCBQbHVnaW5zLmNoZWNrUHJvcHNdXG59O1xuXG4vLyBHcm9zc1xudmFyIGdsb2JhbFN0YXRlID0ge307XG5cbi8vIERlY2xhcmUgZWFybHkgZm9yIHJlY3Vyc2l2ZSBoZWxwZXJzLlxudmFyIF9yZXNvbHZlU3R5bGVzNSA9IG51bGw7XG5cbnZhciBfc2hvdWxkUmVzb2x2ZVN0eWxlcyA9IGZ1bmN0aW9uIF9zaG91bGRSZXNvbHZlU3R5bGVzKGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50LnR5cGUgJiYgIWNvbXBvbmVudC50eXBlLl9pc1JhZGl1bUVuaGFuY2VkO1xufTtcblxudmFyIF9yZXNvbHZlQ2hpbGRyZW4gPSBmdW5jdGlvbiBfcmVzb2x2ZUNoaWxkcmVuKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNvbXBvbmVudCA9IF9yZWYuY29tcG9uZW50LFxuICAgICAgY29uZmlnID0gX3JlZi5jb25maWcsXG4gICAgICBleGlzdGluZ0tleU1hcCA9IF9yZWYuZXhpc3RpbmdLZXlNYXAsXG4gICAgICBleHRyYVN0YXRlS2V5TWFwID0gX3JlZi5leHRyYVN0YXRlS2V5TWFwO1xuXG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgY2hpbGRyZW5UeXBlID0gdHlwZW9mIGNoaWxkcmVuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZHJlbik7XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ3N0cmluZycgfHwgY2hpbGRyZW5UeXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHdpdGggYSBzaW5nbGUgcHJpbWl0aXZlIGNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFdyYXAgdGhlIGZ1bmN0aW9uLCByZXNvbHZpbmcgc3R5bGVzIG9uIHRoZSByZXN1bHRcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGNoaWxkcmVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChyZXN1bHQpKSB7XG4gICAgICAgIHZhciBfa2V5ID0gZ2V0U3RhdGVLZXkocmVzdWx0KTtcbiAgICAgICAgZGVsZXRlIGV4dHJhU3RhdGVLZXlNYXBbX2tleV07XG5cbiAgICAgICAgdmFyIF9yZXNvbHZlU3R5bGVzID0gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgcmVzdWx0LCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlLCBleHRyYVN0YXRlS2V5TWFwKSxcbiAgICAgICAgICAgIF9lbGVtZW50ID0gX3Jlc29sdmVTdHlsZXMuZWxlbWVudDtcblxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgY2hpbGRyZW4udHlwZSkge1xuICAgIC8vIElmIGEgUmVhY3QgRWxlbWVudCBpcyBhbiBvbmx5IGNoaWxkLCBkb24ndCB3cmFwIGl0IGluIGFuIGFycmF5IGZvclxuICAgIC8vIFJlYWN0LkNoaWxkcmVuLm1hcCgpIGZvciBSZWFjdC5DaGlsZHJlbi5vbmx5KCkgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgb25seUNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgdmFyIF9rZXkyID0gZ2V0U3RhdGVLZXkob25seUNoaWxkKTtcbiAgICBkZWxldGUgZXh0cmFTdGF0ZUtleU1hcFtfa2V5Ml07XG5cbiAgICB2YXIgX3Jlc29sdmVTdHlsZXMyID0gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgb25seUNoaWxkLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlLCBleHRyYVN0YXRlS2V5TWFwKSxcbiAgICAgICAgX2VsZW1lbnQyID0gX3Jlc29sdmVTdHlsZXMyLmVsZW1lbnQ7XG5cbiAgICByZXR1cm4gX2VsZW1lbnQyO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgdmFyIF9rZXkzID0gZ2V0U3RhdGVLZXkoY2hpbGQpO1xuICAgICAgZGVsZXRlIGV4dHJhU3RhdGVLZXlNYXBbX2tleTNdO1xuXG4gICAgICB2YXIgX3Jlc29sdmVTdHlsZXMzID0gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgY2hpbGQsIGNvbmZpZywgZXhpc3RpbmdLZXlNYXAsIHRydWUsIGV4dHJhU3RhdGVLZXlNYXApLFxuICAgICAgICAgIF9lbGVtZW50MyA9IF9yZXNvbHZlU3R5bGVzMy5lbGVtZW50O1xuXG4gICAgICByZXR1cm4gX2VsZW1lbnQzO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG59O1xuXG4vLyBSZWN1cnNlIG92ZXIgcHJvcHMsIGp1c3QgbGlrZSBjaGlsZHJlblxudmFyIF9yZXNvbHZlUHJvcHMgPSBmdW5jdGlvbiBfcmVzb2x2ZVByb3BzKF9yZWYyKSB7XG4gIHZhciBjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQsXG4gICAgICBjb25maWcgPSBfcmVmMi5jb25maWcsXG4gICAgICBleGlzdGluZ0tleU1hcCA9IF9yZWYyLmV4aXN0aW5nS2V5TWFwLFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcyxcbiAgICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBfcmVmMi5leHRyYVN0YXRlS2V5TWFwO1xuXG4gIHZhciBuZXdQcm9wcyA9IHByb3BzO1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgLy8gV2UgYWxyZWFkeSByZWN1cnNlIG92ZXIgY2hpbGRyZW4gYWJvdmVcbiAgICBpZiAocHJvcCA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXTtcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgdmFyIF9rZXk0ID0gZ2V0U3RhdGVLZXkocHJvcFZhbHVlKTtcbiAgICAgIGRlbGV0ZSBleHRyYVN0YXRlS2V5TWFwW19rZXk0XTtcbiAgICAgIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzKTtcblxuICAgICAgdmFyIF9yZXNvbHZlU3R5bGVzNCA9IF9yZXNvbHZlU3R5bGVzNShjb21wb25lbnQsIHByb3BWYWx1ZSwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSwgZXh0cmFTdGF0ZUtleU1hcCksXG4gICAgICAgICAgX2VsZW1lbnQ0ID0gX3Jlc29sdmVTdHlsZXM0LmVsZW1lbnQ7XG5cbiAgICAgIG5ld1Byb3BzW3Byb3BdID0gX2VsZW1lbnQ0O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxudmFyIF9idWlsZEdldEtleSA9IGZ1bmN0aW9uIF9idWlsZEdldEtleShfcmVmMykge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IF9yZWYzLmNvbXBvbmVudE5hbWUsXG4gICAgICBleGlzdGluZ0tleU1hcCA9IF9yZWYzLmV4aXN0aW5nS2V5TWFwLFxuICAgICAgcmVuZGVyZWRFbGVtZW50ID0gX3JlZjMucmVuZGVyZWRFbGVtZW50O1xuXG4gIC8vIFdlIG5lZWQgYSB1bmlxdWUga2V5IHRvIGNvcnJlbGF0ZSBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uXG4gIC8vIHdpdGggdGhlIHJlbmRlcmVkIGVsZW1lbnQsIHNvIHdlIGtub3cgdG8gYXBwbHkgdGhlIHByb3BlciBpbnRlcmFjdGl2ZVxuICAvLyBzdHlsZXMuXG4gIHZhciBvcmlnaW5hbEtleSA9IGdldFN0YXRlS2V5KHJlbmRlcmVkRWxlbWVudCk7XG4gIHZhciBrZXkgPSBjbGVhblN0YXRlS2V5KG9yaWdpbmFsS2V5KTtcblxuICB2YXIgYWxyZWFkeUdvdEtleSA9IGZhbHNlO1xuICB2YXIgZ2V0S2V5ID0gZnVuY3Rpb24gZ2V0S2V5KCkge1xuICAgIGlmIChhbHJlYWR5R290S2V5KSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGFscmVhZHlHb3RLZXkgPSB0cnVlO1xuXG4gICAgaWYgKGV4aXN0aW5nS2V5TWFwW2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZSA9IHZvaWQgMDtcbiAgICAgIGlmICh0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnROYW1lID0gcmVuZGVyZWRFbGVtZW50LnR5cGU7XG4gICAgICB9IGVsc2UgaWYgKHJlbmRlcmVkRWxlbWVudC50eXBlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGVsZW1lbnROYW1lID0gcmVuZGVyZWRFbGVtZW50LnR5cGUuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgcmVuZGVyZWRFbGVtZW50LnR5cGUuY29uc3RydWN0b3IubmFtZTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYWRpdW0gcmVxdWlyZXMgZWFjaCBlbGVtZW50IHdpdGggaW50ZXJhY3RpdmUgc3R5bGVzIHRvIGhhdmUgYSB1bmlxdWUgJyArICdrZXksIHNldCB1c2luZyBlaXRoZXIgdGhlIHJlZiBvciBrZXkgcHJvcC4gJyArIChvcmlnaW5hbEtleSA/ICdLZXkgXCInICsgb3JpZ2luYWxLZXkgKyAnXCIgaXMgYSBkdXBsaWNhdGUuJyA6ICdNdWx0aXBsZSBlbGVtZW50cyBoYXZlIG5vIGtleSBzcGVjaWZpZWQuJykgKyAnICcgKyAnQ29tcG9uZW50OiBcIicgKyBjb21wb25lbnROYW1lICsgJ1wiLiAnICsgKGVsZW1lbnROYW1lID8gJ0VsZW1lbnQ6IFwiJyArIGVsZW1lbnROYW1lICsgJ1wiLicgOiAnJykpO1xuICAgIH1cblxuICAgIGV4aXN0aW5nS2V5TWFwW2tleV0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGtleTtcbiAgfTtcblxuICByZXR1cm4gZ2V0S2V5O1xufTtcblxudmFyIF9zZXRTdHlsZVN0YXRlID0gZnVuY3Rpb24gX3NldFN0eWxlU3RhdGUoY29tcG9uZW50LCBrZXksIHN0YXRlS2V5LCB2YWx1ZSkge1xuICBpZiAoIWNvbXBvbmVudC5fcmFkaXVtSXNNb3VudGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGV4aXN0aW5nID0gZ2V0UmFkaXVtU3R5bGVTdGF0ZShjb21wb25lbnQpO1xuICB2YXIgc3RhdGUgPSB7IF9yYWRpdW1TdHlsZVN0YXRlOiBfZXh0ZW5kcyh7fSwgZXhpc3RpbmcpIH07XG5cbiAgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldKTtcbiAgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XVtzdGF0ZUtleV0gPSB2YWx1ZTtcblxuICBjb21wb25lbnQuX2xhc3RSYWRpdW1TdGF0ZSA9IHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlO1xuICBjb21wb25lbnQuc2V0U3RhdGUoc3RhdGUpO1xufTtcblxudmFyIF9ydW5QbHVnaW5zID0gZnVuY3Rpb24gX3J1blBsdWdpbnMoX3JlZjQpIHtcbiAgdmFyIGNvbXBvbmVudCA9IF9yZWY0LmNvbXBvbmVudCxcbiAgICAgIGNvbmZpZyA9IF9yZWY0LmNvbmZpZyxcbiAgICAgIGV4aXN0aW5nS2V5TWFwID0gX3JlZjQuZXhpc3RpbmdLZXlNYXAsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgcmVuZGVyZWRFbGVtZW50ID0gX3JlZjQucmVuZGVyZWRFbGVtZW50O1xuXG4gIC8vIERvbid0IHJ1biBwbHVnaW5zIGlmIHJlbmRlcmVkRWxlbWVudCBpcyBub3QgYSBzaW1wbGUgUmVhY3RET01FbGVtZW50IG9yIGhhc1xuICAvLyBubyBzdHlsZS5cbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChyZW5kZXJlZEVsZW1lbnQpIHx8IHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSAhPT0gJ3N0cmluZycgfHwgIXByb3BzLnN0eWxlKSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0gcHJvcHM7XG5cbiAgdmFyIHBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBERUZBVUxUX0NPTkZJRy5wbHVnaW5zO1xuXG4gIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB2YXIgZ2V0S2V5ID0gX2J1aWxkR2V0S2V5KHtcbiAgICByZW5kZXJlZEVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudCxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZVxuICB9KTtcbiAgdmFyIGdldENvbXBvbmVudEZpZWxkID0gZnVuY3Rpb24gZ2V0Q29tcG9uZW50RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudFtrZXldO1xuICB9O1xuICB2YXIgZ2V0R2xvYmFsU3RhdGUgPSBmdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZShrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGVba2V5XTtcbiAgfTtcbiAgdmFyIGNvbXBvbmVudEdldFN0YXRlID0gZnVuY3Rpb24gY29tcG9uZW50R2V0U3RhdGUoc3RhdGVLZXksIGVsZW1lbnRLZXkpIHtcbiAgICByZXR1cm4gZ2V0U3RhdGUoY29tcG9uZW50LnN0YXRlLCBlbGVtZW50S2V5IHx8IGdldEtleSgpLCBzdGF0ZUtleSk7XG4gIH07XG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlS2V5LCB2YWx1ZSwgZWxlbWVudEtleSkge1xuICAgIHJldHVybiBfc2V0U3R5bGVTdGF0ZShjb21wb25lbnQsIGVsZW1lbnRLZXkgfHwgZ2V0S2V5KCksIHN0YXRlS2V5LCB2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGFkZENTUyA9IGZ1bmN0aW9uIGFkZENTUyhjc3MpIHtcbiAgICB2YXIgc3R5bGVLZWVwZXIgPSBjb21wb25lbnQuX3JhZGl1bVN0eWxlS2VlcGVyIHx8IGNvbXBvbmVudC5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlcjtcbiAgICBpZiAoIXN0eWxlS2VlcGVyKSB7XG4gICAgICBpZiAoX19pc1Rlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyB1c2UgcGx1Z2lucyByZXF1aXJpbmcgYGFkZENTU2AgKGUuZy4ga2V5ZnJhbWVzLCBtZWRpYSBxdWVyaWVzKSwgJyArICdwbGVhc2Ugd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIHRoZSBTdHlsZVJvb3QgY29tcG9uZW50LiBDb21wb25lbnQgJyArICduYW1lOiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVLZWVwZXIuYWRkQ1NTKGNzcyk7XG4gIH07XG5cbiAgdmFyIG5ld1N0eWxlID0gcHJvcHMuc3R5bGU7XG5cbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgcmVzdWx0ID0gcGx1Z2luKHtcbiAgICAgIEV4ZWN1dGlvbkVudmlyb25tZW50OiBFeGVjdXRpb25FbnZpcm9ubWVudCxcbiAgICAgIGFkZENTUzogYWRkQ1NTLFxuICAgICAgYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWU6IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlLFxuICAgICAgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZSxcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY3NzUnVsZVNldFRvU3RyaW5nOiBjc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgICBnZXRDb21wb25lbnRGaWVsZDogZ2V0Q29tcG9uZW50RmllbGQsXG4gICAgICBnZXRHbG9iYWxTdGF0ZTogZ2V0R2xvYmFsU3RhdGUsXG4gICAgICBnZXRTdGF0ZTogY29tcG9uZW50R2V0U3RhdGUsXG4gICAgICBoYXNoOiBoYXNoLFxuICAgICAgbWVyZ2VTdHlsZXM6IG1lcmdlU3R5bGVzLFxuICAgICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgICAgaXNOZXN0ZWRTdHlsZTogaXNOZXN0ZWRTdHlsZSxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH0pIHx8IHt9O1xuXG4gICAgbmV3U3R5bGUgPSByZXN1bHQuc3R5bGUgfHwgbmV3U3R5bGU7XG5cbiAgICBuZXdQcm9wcyA9IHJlc3VsdC5wcm9wcyAmJiBPYmplY3Qua2V5cyhyZXN1bHQucHJvcHMpLmxlbmd0aCA/IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgcmVzdWx0LnByb3BzKSA6IG5ld1Byb3BzO1xuXG4gICAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHJlc3VsdC5jb21wb25lbnRGaWVsZHMgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3Q29tcG9uZW50RmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgIGNvbXBvbmVudFtmaWVsZE5hbWVdID0gbmV3Q29tcG9uZW50RmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfSk7XG5cbiAgICB2YXIgbmV3R2xvYmFsU3RhdGUgPSByZXN1bHQuZ2xvYmFsU3RhdGUgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3R2xvYmFsU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IG5ld0dsb2JhbFN0YXRlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChuZXdTdHlsZSAhPT0gcHJvcHMuc3R5bGUpIHtcbiAgICBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgeyBzdHlsZTogbmV3U3R5bGUgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG4vLyBXcmFwcGVyIGFyb3VuZCBSZWFjdC5jbG9uZUVsZW1lbnQuIFRvIGF2b2lkIHByb2Nlc3NpbmcgdGhlIHNhbWUgZWxlbWVudFxuLy8gdHdpY2UsIHdoZW5ldmVyIHdlIGNsb25lIGFuIGVsZW1lbnQgYWRkIGEgc3BlY2lhbCBwcm9wIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gcHJvY2VzcyB0aGlzIGVsZW1lbnQgYWdhaW4uXG52YXIgX2Nsb25lRWxlbWVudCA9IGZ1bmN0aW9uIF9jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcywgbmV3Q2hpbGRyZW4pIHtcbiAgLy8gT25seSBhZGQgZmxhZyBpZiB0aGlzIGlzIGEgbm9ybWFsIERPTSBlbGVtZW50XG4gIGlmICh0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHsgJ2RhdGEtcmFkaXVtJzogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcywgbmV3Q2hpbGRyZW4pO1xufTtcblxuLy9cbi8vIFRoZSBudWNsZXVzIG9mIFJhZGl1bS4gcmVzb2x2ZVN0eWxlcyBpcyBjYWxsZWQgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnRzXG4vLyBiZWZvcmUgdGhleSBhcmUgcmV0dXJuZWQgaW4gcmVuZGVyLiBJdCBpdGVyYXRlcyBvdmVyIHRoZSBlbGVtZW50cyBhbmRcbi8vIGNoaWxkcmVuLCByZXdyaXRpbmcgcHJvcHMgdG8gYWRkIGV2ZW50IGhhbmRsZXJzIHJlcXVpcmVkIHRvIGNhcHR1cmUgdXNlclxuLy8gaW50ZXJhY3Rpb25zIChlLmcuIG1vdXNlIG92ZXIpLiBJdCBhbHNvIHJlcGxhY2VzIHRoZSBzdHlsZSBwcm9wIGJlY2F1c2UgaXRcbi8vIGFkZHMgaW4gdGhlIHZhcmlvdXMgaW50ZXJhY3Rpb24gc3R5bGVzIChlLmcuIDpob3ZlcikuXG4vL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LXBhcmFtcyAqL1xuX3Jlc29sdmVTdHlsZXM1ID0gZnVuY3Rpb24gcmVzb2x2ZVN0eWxlcyhjb21wb25lbnQsIC8vIFJlYWN0Q29tcG9uZW50LCBmbG93K2VzbGludCBjb21wbGFpbmluZ1xucmVuZGVyZWRFbGVtZW50KSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IERFRkFVTFRfQ09ORklHO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICB2YXIgc2hvdWxkQ2hlY2tCZWZvcmVSZXNvbHZlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcbiAgdmFyIGV4dHJhU3RhdGVLZXlNYXAgPSBhcmd1bWVudHNbNV07XG5cbiAgLy8gVGhlIGV4dHJhU3RhdGVLZXlNYXAgaXMgZm9yIGRldGVybWluaW5nIHdoaWNoIGtleXMgc2hvdWxkIGJlIGVyYXNlZCBmcm9tXG4gIC8vIHRoZSBzdGF0ZSAoaS5lLiB3aGljaCBjaGlsZCBjb21wb25lbnRzIGFyZSB1bm1vdW50ZWQgYW5kIHNob3VsZCBubyBsb25nZXJcbiAgLy8gaGF2ZSBhIHN0eWxlIHN0YXRlKS5cbiAgaWYgKCFleHRyYVN0YXRlS2V5TWFwKSB7XG4gICAgdmFyIHN0YXRlID0gZ2V0UmFkaXVtU3R5bGVTdGF0ZShjb21wb25lbnQpO1xuICAgIGV4dHJhU3RhdGVLZXlNYXAgPSBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgLy8gJ21haW4nIGlzIHRoZSBhdXRvLWdlbmVyYXRlZCBrZXkgd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBlbGVtZW50IHdpdGhcbiAgICAgIC8vIGludGVyYWN0aXZlIHN0eWxlcyBhbmQgaWYgYSBjdXN0b20ga2V5IGlzIG5vdCBhc3NpZ25lZC4gQmVjYXVzZSBvZlxuICAgICAgLy8gdGhpcywgaXQgaXMgaW1wb3NzaWJsZSB0byBrbm93IHdoaWNoIGNoaWxkIGlzICdtYWluJywgc28gd2Ugd29uJ3RcbiAgICAgIC8vIGNvdW50IHRoaXMga2V5IHdoZW4gZ2VuZXJhdGluZyBvdXIgZXh0cmFTdGF0ZUtleU1hcC5cbiAgICAgIGlmIChrZXkgIT09ICdtYWluJykge1xuICAgICAgICBhY2Nba2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlbmRlcmVkRWxlbWVudCkgJiYgIXJlbmRlcmVkRWxlbWVudC5wcm9wcykge1xuICAgIHZhciBlbGVtZW50cyA9IHJlbmRlcmVkRWxlbWVudC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQgaXMgaW4tdXNlLCBzbyByZW1vdmUgZnJvbSB0aGUgZXh0cmFTdGF0ZUtleU1hcFxuICAgICAgaWYgKGV4dHJhU3RhdGVLZXlNYXApIHtcbiAgICAgICAgdmFyIF9rZXk1ID0gZ2V0U3RhdGVLZXkoZWxlbWVudCk7XG4gICAgICAgIGRlbGV0ZSBleHRyYVN0YXRlS2V5TWFwW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzLFxuICAgICAgLy8gc28gcmV0dXJuIGFuIGFycmF5IG9mIGVsZW1lbnRzIHdpdGggcmVzb2x2ZWQgc3R5bGVzXG4gICAgICByZXR1cm4gX3Jlc29sdmVTdHlsZXM1KGNvbXBvbmVudCwgZWxlbWVudCwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgc2hvdWxkQ2hlY2tCZWZvcmVSZXNvbHZlLCBleHRyYVN0YXRlS2V5TWFwKS5lbGVtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBleHRyYVN0YXRlS2V5TWFwOiBleHRyYVN0YXRlS2V5TWFwLFxuICAgICAgZWxlbWVudDogZWxlbWVudHNcbiAgICB9O1xuICB9XG5cbiAgLy8gUmVhY3RFbGVtZW50XG4gIGlmICghcmVuZGVyZWRFbGVtZW50IHx8XG4gIC8vIEJhaWwgaWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhpcyBlbGVtZW50LiBUaGlzIGVuc3VyZXMgdGhhdCBvbmx5IHRoZVxuICAvLyBvd25lciBvZiBhbiBlbGVtZW50IHByb2Nlc3NlcyB0aGF0IGVsZW1lbnQsIHNpbmNlIHRoZSBvd25lcidzIHJlbmRlclxuICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBmaXJzdCAod2hpY2ggd2lsbCBhbHdheXMgYmUgdGhlIGNhc2UsIHNpbmNlIHlvdVxuICAvLyBjYW4ndCBrbm93IHdoYXQgZWxzZSB0byByZW5kZXIgdW50aWwgeW91IHJlbmRlciB0aGUgcGFyZW50IGNvbXBvbmVudCkuXG4gIHJlbmRlcmVkRWxlbWVudC5wcm9wcyAmJiByZW5kZXJlZEVsZW1lbnQucHJvcHNbJ2RhdGEtcmFkaXVtJ10gfHxcbiAgLy8gQmFpbCBpZiB0aGlzIGVsZW1lbnQgaXMgYSByYWRpdW0gZW5oYW5jZWQgZWxlbWVudCwgYmVjYXVzZSBpZiBpdCBpcyxcbiAgLy8gdGhlbiBpdCB3aWxsIHRha2UgY2FyZSBvZiByZXNvbHZpbmcgaXRzIG93biBzdHlsZXMuXG4gIHNob3VsZENoZWNrQmVmb3JlUmVzb2x2ZSAmJiAhX3Nob3VsZFJlc29sdmVTdHlsZXMocmVuZGVyZWRFbGVtZW50KSkge1xuICAgIHJldHVybiB7IGV4dHJhU3RhdGVLZXlNYXA6IGV4dHJhU3RhdGVLZXlNYXAsIGVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudCB9O1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gcmVuZGVyZWRFbGVtZW50LnByb3BzLmNoaWxkcmVuO1xuXG4gIHZhciBuZXdDaGlsZHJlbiA9IF9yZXNvbHZlQ2hpbGRyZW4oe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgZXh0cmFTdGF0ZUtleU1hcDogZXh0cmFTdGF0ZUtleU1hcFxuICB9KTtcblxuICB2YXIgbmV3UHJvcHMgPSBfcmVzb2x2ZVByb3BzKHtcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgZXh0cmFTdGF0ZUtleU1hcDogZXh0cmFTdGF0ZUtleU1hcCxcbiAgICBwcm9wczogcmVuZGVyZWRFbGVtZW50LnByb3BzXG4gIH0pO1xuXG4gIG5ld1Byb3BzID0gX3J1blBsdWdpbnMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgcmVuZGVyZWRFbGVtZW50OiByZW5kZXJlZEVsZW1lbnRcbiAgfSk7XG5cbiAgLy8gSWYgbm90aGluZyBjaGFuZ2VkLCBkb24ndCBib3RoZXIgY2xvbmluZyB0aGUgZWxlbWVudC4gTWlnaHQgYmUgYSBiaXRcbiAgLy8gd2FzdGVmdWwsIGFzIHdlIGFkZCB0aGUgc2VudGluZWwgdG8gc3RvcCBkb3VibGUtcHJvY2Vzc2luZyB3aGVuIHdlIGNsb25lLlxuICAvLyBBc3N1bWUgYmVuaWduIGRvdWJsZS1wcm9jZXNzaW5nIGlzIGJldHRlciB0aGFuIHVubmVlZGVkIGNsb25pbmcuXG4gIGlmIChuZXdDaGlsZHJlbiA9PT0gY2hpbGRyZW4gJiYgbmV3UHJvcHMgPT09IHJlbmRlcmVkRWxlbWVudC5wcm9wcykge1xuICAgIHJldHVybiB7IGV4dHJhU3RhdGVLZXlNYXA6IGV4dHJhU3RhdGVLZXlNYXAsIGVsZW1lbnQ6IHJlbmRlcmVkRWxlbWVudCB9O1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBfY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMgIT09IHJlbmRlcmVkRWxlbWVudC5wcm9wcyA/IG5ld1Byb3BzIDoge30sIG5ld0NoaWxkcmVuKTtcblxuICByZXR1cm4geyBleHRyYVN0YXRlS2V5TWFwOiBleHRyYVN0YXRlS2V5TWFwLCBlbGVtZW50OiBlbGVtZW50IH07XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG5cbi8vIE9ubHkgZm9yIHVzZSBieSB0ZXN0c1xudmFyIF9faXNUZXN0TW9kZUVuYWJsZWQgPSBmYWxzZTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIF9yZXNvbHZlU3R5bGVzNS5fX2NsZWFyU3RhdGVGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBnbG9iYWxTdGF0ZSA9IHt9O1xuICB9O1xuICBfcmVzb2x2ZVN0eWxlczUuX19zZXRUZXN0TW9kZSA9IGZ1bmN0aW9uIChpc0VuYWJsZWQpIHtcbiAgICBfX2lzVGVzdE1vZGVFbmFibGVkID0gaXNFbmFibGVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBfcmVzb2x2ZVN0eWxlczU7IiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0eWxlS2VlcGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZUtlZXBlcih1c2VyQWdlbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVLZWVwZXIpO1xuXG4gICAgdGhpcy5fdXNlckFnZW50ID0gdXNlckFnZW50O1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX2Nzc1NldCA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlS2VlcGVyLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXJJbmRleCA9IF90aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgaWYgKGxpc3RlbmVySW5kZXggPiAtMSkge1xuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZENTUycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENTUyhjc3MpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX2Nzc1NldFtjc3NdKSB7XG4gICAgICAgIHRoaXMuX2Nzc1NldFtjc3NdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXMyLl9jc3NTZXRbY3NzXTtcbiAgICAgICAgICBfdGhpczIuX2VtaXRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDU1MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDU1MoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY3NzU2V0KS5qb2luKCdcXG4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZW1pdENoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lbWl0Q2hhbmdlKCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlS2VlcGVyO1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZUtlZXBlciBhcyBkZWZhdWx0IH07IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjRcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjguNCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpO1xuXG4gICAgICAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHZhciBzb3VyY2VJbmZvID0gJyc7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB2YXIgcGF0aEJlZm9yZVNsYXNoID0gbWF0Y2hbMV07XG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIHNvdXJjZUluZm87XG59O1xuXG52YXIgUmVzb2x2ZWQgPSAxO1xuXG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArICcoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdDb25jdXJyZW50TW9kZSc7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuQ29uc3VtZXInO1xuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG5cbiAgICAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH1cblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHVuZGVmaW5lZCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTtcblxuICAgIC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTtcbiAgICAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIHByb3BzID0ge307XG5cbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7XG4gICAgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nJDEoZmFsc2UsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcCA9IHZvaWQgMDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcblxuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG5cbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgdmFyIHByb3BUeXBlcyA9IHZvaWQgMDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzO1xuICAgICAgICAgIC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIShcbiAgICAgIC8vIERvIG5vdCB3YXJuIGZvciAwIGFyZ3VtZW50cyBiZWNhdXNlIGl0IGNvdWxkIGJlIGR1ZSB0byB1c2FnZSBvZiB0aGUgJ2FyZ3VtZW50cycgb2JqZWN0XG4gICAgICByZW5kZXIubGVuZ3RoID09PSAwIHx8IHJlbmRlci5sZW5ndGggPT09IDIpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgIShyZW5kZXIuZGVmYXVsdFByb3BzID09IG51bGwgJiYgcmVuZGVyLnByb3BUeXBlcyA9PSBudWxsKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/JykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuICAhKGRpc3BhdGNoZXIgIT09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gKGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwpJykgOiB2b2lkIDA7XG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHtcbiAgICAhKHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkKSA/IHdhcm5pbmckMShmYWxzZSwgJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vZmIubWUvcnVsZXMtb2YtaG9va3MnIDogJycpIDogdm9pZCAwO1xuXG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7XG4gICAgICAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9ICcgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gJyArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyAnLic7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgdmFyIHByb3BUeXBlcyA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8XG4gIC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb3BUeXBlcykge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIG5hbWUgfHwgJ1Vua25vd24nKTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGZyYWdtZW50KTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTtcblxuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZyA9IHZvaWQgMDtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9ICc8JyArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArICcgLz4nO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBHYXRoZXIgYWR2YW5jZWQgdGltaW5nIG1ldHJpY3MgZm9yIFByb2ZpbGVyIHN1YnRyZWVzLlxuXG5cbi8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuIC8vIFRPRE86IHRydWU/IEhlcmUgaXQgbWlnaHQganVzdCBiZSBmYWxzZS5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cblxuLy8gUmVhY3QgRmlyZTogcHJldmVudCB0aGUgdmFsdWUgYW5kIGNoZWNrZWQgYXR0cmlidXRlcyBmcm9tIHN5bmNpbmdcbi8vIHdpdGggdGhlaXIgcmVsYXRlZCBET00gcHJvcGVydGllc1xuXG5cbi8vIFRoZXNlIEFQSXMgd2lsbCBubyBsb25nZXIgYmUgXCJ1bnN0YWJsZVwiIGluIHRoZSB1cGNvbWluZyAxNi43IHJlbGVhc2UsXG4vLyBDb250cm9sIHRoaXMgYmVoYXZpb3Igd2l0aCBhIGZsYWcgdG8gc3VwcG9ydCAxNi42IG1pbm9yIHJlbGVhc2VzIGluIHRoZSBtZWFud2hpbGUuXG52YXIgZW5hYmxlU3RhYmxlQ29uY3VycmVudE1vZGVBUElzID0gZmFsc2U7XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcblxuICBjcmVhdGVDb250ZXh0OiBjcmVhdGVDb250ZXh0LFxuICBmb3J3YXJkUmVmOiBmb3J3YXJkUmVmLFxuICBsYXp5OiBsYXp5LFxuICBtZW1vOiBtZW1vLFxuXG4gIHVzZUNhbGxiYWNrOiB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dDogdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0OiB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGU6IHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZURlYnVnVmFsdWU6IHVzZURlYnVnVmFsdWUsXG4gIHVzZUxheW91dEVmZmVjdDogdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vOiB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyOiB1c2VSZWR1Y2VyLFxuICB1c2VSZWY6IHVzZVJlZixcbiAgdXNlU3RhdGU6IHVzZVN0YXRlLFxuXG4gIEZyYWdtZW50OiBSRUFDVF9GUkFHTUVOVF9UWVBFLFxuICBTdHJpY3RNb2RlOiBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFLFxuICBTdXNwZW5zZTogUkVBQ1RfU1VTUEVOU0VfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICB1bnN0YWJsZV9Db25jdXJyZW50TW9kZTogUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUsXG4gIHVuc3RhYmxlX1Byb2ZpbGVyOiBSRUFDVF9QUk9GSUxFUl9UWVBFLFxuXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiBSZWFjdFNoYXJlZEludGVybmFsc1xufTtcblxuLy8gTm90ZTogc29tZSBBUElzIGFyZSBhZGRlZCB3aXRoIGZlYXR1cmUgZmxhZ3MuXG4vLyBNYWtlIHN1cmUgdGhhdCBzdGFibGUgYnVpbGRzIGZvciBvcGVuIHNvdXJjZVxuLy8gZG9uJ3QgbW9kaWZ5IHRoZSBSZWFjdCBvYmplY3QgdG8gYXZvaWQgZGVvcHRzLlxuLy8gQWxzbyBsZXQncyBub3QgZXhwb3NlIHRoZWlyIG5hbWVzIGluIHN0YWJsZSBidWlsZHMuXG5cbmlmIChlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMpIHtcbiAgUmVhY3QuQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbiAgUmVhY3QuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICBSZWFjdC51bnN0YWJsZV9Db25jdXJyZW50TW9kZSA9IHVuZGVmaW5lZDtcbiAgUmVhY3QudW5zdGFibGVfUHJvZmlsZXIgPSB1bmRlZmluZWQ7XG59XG5cblxuXG52YXIgUmVhY3QkMiA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdFxufSk7XG5cbnZhciBSZWFjdCQzID0gKCBSZWFjdCQyICYmIFJlYWN0ICkgfHwgUmVhY3QkMjtcblxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXG4vLyBUaGlzIGlzIGhhY2t5IGJ1dCBtYWtlcyBpdCB3b3JrIHdpdGggYm90aCBSb2xsdXAgYW5kIEplc3QuXG52YXIgcmVhY3QgPSBSZWFjdCQzLmRlZmF1bHQgfHwgUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSc7XG5cbmNsYXNzIEN1c3RvbUNoaXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPyB7Li4uc3R5bGVzLmNvbnRhaW5lciwgLi4uc3R5bGVzLnNlbGVjdGVkfSA6IHN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5pbWFnZX0gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHR9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucmVtb3ZlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uUmVtb3ZlKHRoaXMucHJvcHMuaW5kZXgpfT4mdGltZXM7PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmxldCBzdHlsZXMgPSB7XG4gIHNlbGVjdGVkOiB7XG4gICAgYmFja2dyb3VuZDogXCIjY2NjXCIsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjb2xvcjogXCIjNDQ0XCIsXG4gICAgYmFja2dyb3VuZDogXCIjZTBlMGUwXCIsXG4gICAgbWFyZ2luOiBcIjIuNXB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogMzIsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICBiYWNrZ3JvdW5kOiBcIiM4ODhcIixcbiAgfSxcbiAgdGV4dDoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAnMHB4IDRweCAwcHggOHB4JyxcbiAgfSxcbiAgcmVtb3ZlOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGNvbG9yOiBcIiNlMGUwZTBcIixcbiAgICBib3JkZXJSYWRpdXM6IDEyLFxuICAgIGJhY2tncm91bmQ6IFwiI2FhYVwiLFxuICAgIG1hcmdpbjogXCIwIDZweFwiXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKEN1c3RvbUNoaXApXG4iXSwic291cmNlUm9vdCI6IiJ9