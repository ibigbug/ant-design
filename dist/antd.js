/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(36);
	
	var antd = {
	  datepicker: __webpack_require__(40),
	  tooltip: __webpack_require__(82),
	  modal: __webpack_require__(108)
	};
	
	module.exports = antd;
	window.antd = antd;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	var Calendar = __webpack_require__(43);
	var DatePicker = Calendar.Picker;
	var GregorianCalendar = __webpack_require__(47);
	var zhCn = __webpack_require__(41);
	var CalendarLocale = __webpack_require__(80);
	var DateTimeFormat = __webpack_require__(45);
	var defaultCalendarValue = new GregorianCalendar(zhCn);
	defaultCalendarValue.setTime(Date.now());
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  getInitialState: function getInitialState() {
	    return {
	      value: ''
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      format: 'yyyy-MM-dd',
	      placeholder: '请选择日期'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var state = {};
	    if (this.props.value) {
	      var value = new GregorianCalendar(zhCn);
	      value.setTime(new Date(this.props.value));
	      state.value = value;
	    }
	    state.disabled = this.props.disabled || function () {};
	    this.setState(state);
	  },
	  handleChange: function handleChange() {
	    var props = this.props;
	    this.props.onSelect(new Date(this.state.value.getTime()));
	  },
	  render: function render() {
	    var calendar = React.createElement(Calendar, {
	      disabledDate: this.state.disabled,
	      locale: CalendarLocale,
	      orient: ['top', 'left'],
	      defaultValue: defaultCalendarValue,
	      showTime: this.props.showTime,
	      showClear: false });
	    return React.createElement(
	      DatePicker,
	      {
	        trigger: React.createElement('span', { className: 'rc-calendar-picker-icon' }),
	        calendar: calendar,
	        formatter: new DateTimeFormat(this.props.format),
	        value: this.state.value,
	        onChange: this.props.onSelect },
	      React.createElement('input', { placeholder: this.props.placeholder, className: 'rc-calendar-picker-input' })
	    );
	  }
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	"use strict";
	
	module.exports = {
	  // in minutes
	  timezoneOffset: 8 * 60,
	  firstDayOfWeek: 1,
	  minimalDaysInFirstWeek: 1
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(44);
	module.exports.Picker = __webpack_require__(77);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _defineProperty(obj, key, value) {
	  return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateTimeFormat = __webpack_require__(45);
	var GregorianCalendar = __webpack_require__(47);
	var rcUtil = __webpack_require__(53);
	var KeyCode = rcUtil.KeyCode;
	var DateTable = __webpack_require__(64);
	var CalendarHeader = __webpack_require__(68);
	var CalendarFooter = __webpack_require__(73);
	var staticPrefixClsFn = __webpack_require__(72);
	
	function noop() {}
	
	function goStartMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(1);
	  this.setState({ value: next });
	}
	
	function goEndMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(next.getActualMaximum(GregorianCalendar.MONTH));
	  this.setState({ value: next });
	}
	
	function goMonth(direction) {
	  var next = this.state.value.clone();
	  next.addMonth(direction);
	  this.setState({ value: next });
	}
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({ value: next });
	}
	
	function goWeek(direction) {
	  var next = this.state.value.clone();
	  next.addWeekOfYear(direction);
	  this.setState({ value: next });
	}
	
	function goDay(direction) {
	  var next = this.state.value.clone();
	  next.addDayOfMonth(direction);
	  this.setState({ value: next });
	}
	
	function onFocus() {
	  if (this._blurTimer) {
	    clearTimeout(this._blurTimer);
	    this._blurTimer = null;
	  } else {
	    this.props.onFocus();
	  }
	}
	
	function onBlur() {
	  var _this = this;
	
	  if (this._blurTimer) {
	    clearTimeout(this._blurTimer);
	  }
	  this._blurTimer = setTimeout(function () {
	    _this.props.onBlur();
	  }, 100);
	}
	
	function chooseToday() {
	  var today = this.state.value.clone();
	  today.setTime(Date.now());
	  this.handleSelect(today);
	}
	
	function handleSelect(current, keyDownEvent) {
	  var props = this.props;
	  this.setState({
	    value: current
	  });
	  if (!keyDownEvent) {
	    props.onSelect(current);
	  }
	}
	
	function clear() {
	  this.props.onClear();
	}
	
	function onMonthPanelSelect(current) {
	  this.setState({
	    value: current
	  });
	}
	
	function handleKeyDown(e) {
	  var keyCode = e.keyCode;
	  // mac
	  var ctrlKey = e.ctrlKey || e.metaKey;
	  switch (keyCode) {
	    case KeyCode.DOWN:
	      goWeek.call(this, 1);
	      e.preventDefault();
	      return true;
	    case KeyCode.UP:
	      goWeek.call(this, -1);
	      e.preventDefault();
	      return true;
	    case KeyCode.LEFT:
	      if (ctrlKey) {
	        this.previousYear();
	      } else {
	        goDay.call(this, -1);
	      }
	      e.preventDefault();
	      return true;
	    case KeyCode.RIGHT:
	      if (ctrlKey) {
	        this.nextYear();
	      } else {
	        goDay.call(this, 1);
	      }
	      e.preventDefault();
	      return true;
	    case KeyCode.HOME:
	      goStartMonth.call(this);
	      e.preventDefault();
	      return true;
	    case KeyCode.END:
	      goEndMonth.call(this);
	      e.preventDefault();
	      return true;
	    case KeyCode.PAGE_DOWN:
	      this.nextMonth();
	      e.preventDefault();
	      return true;
	    case KeyCode.PAGE_UP:
	      this.previousMonth();
	      e.preventDefault();
	      return true;
	    case KeyCode.ENTER:
	      this.props.onSelect(this.state.value);
	      e.preventDefault();
	      return true;
	    default:
	      this.props.onKeyDown(e);
	      return true;
	  }
	}
	
	function getNow() {
	  var value = new GregorianCalendar();
	  value.setTime(Date.now());
	  return value;
	}
	
	function getNowByCurrentStateValue(value) {
	  value = value || getNow();
	  value = value.clone();
	  value.setTime(Date.now());
	  return value;
	}
	
	var Calendar = (function (_React$Component) {
	  function Calendar(props) {
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	    var value = props.value || props.defaultValue || getNow();
	    this.dateFormatter = new DateTimeFormat(props.locale.dateFormat);
	    this.state = {
	      orient: props.orient,
	      prefixCls: props.prefixCls,
	      value: value
	    };
	    // bind methods
	    this.onBlur = onBlur.bind(this);
	    this.onFocus = onFocus.bind(this);
	    this.prefixClsFn = staticPrefixClsFn.bind(this);
	    this.nextMonth = goMonth.bind(this, 1);
	    this.previousMonth = goMonth.bind(this, -1);
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    this.chooseToday = chooseToday.bind(this);
	    this.clear = clear.bind(this);
	    this.handleSelect = handleSelect.bind(this);
	    this.onMonthPanelSelect = onMonthPanelSelect.bind(this);
	    this.handleKeyDown = handleKeyDown.bind(this);
	  }
	
	  _inherits(Calendar, _React$Component);
	
	  _createClass(Calendar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return rcUtil.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var value = nextProps.value;
	      if (value !== undefined) {
	        value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
	        this.setState({
	          value: value
	        });
	      }
	      if (nextProps.orient) {
	        this.setState({
	          orient: nextProps.orient
	        });
	      }
	      if (nextProps.locale !== this.props.locale) {
	        this.dateFormatter = new DateTimeFormat(nextProps.locale.dateFormat);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _className;
	
	      var props = this.props;
	      var locale = props.locale;
	      var state = this.state;
	      var value = state.value;
	      var prefixClsFn = this.prefixClsFn;
	
	      var className = (_className = {}, _defineProperty(_className, prefixClsFn(), 1), _defineProperty(_className, prefixClsFn('week-number'), props.showWeekNumber), _className);
	
	      if (props.className) {
	        className[props.className] = 1;
	      }
	
	      var orient = state.orient;
	      if (orient) {
	        orient.forEach(function (o) {
	          className[prefixClsFn('orient-' + o)] = 1;
	        });
	      }
	
	      return React.createElement('div', { className: rcUtil.classSet(className), style: this.props.style,
	        tabIndex: '0', onFocus: this.onFocus,
	        onBlur: this.onBlur, onKeyDown: this.handleKeyDown }, React.createElement('div', { style: { outline: 'none' } }, React.createElement(CalendarHeader, { locale: locale,
	        onMonthPanelSelect: this.onMonthPanelSelect,
	        previousYear: this.previousYear,
	        previousMonth: this.previousMonth,
	        nextMonth: this.nextMonth,
	        nextYear: this.nextYear,
	        value: value,
	        prefixClsFn: prefixClsFn }), React.createElement('div', { className: prefixClsFn('calendar-body') }, React.createElement(DateTable, {
	        locale: locale,
	        value: value,
	        prefixClsFn: prefixClsFn,
	        dateRender: props.dateRender,
	        onSelect: this.handleSelect,
	        disabledDate: props.disabledDate,
	        showWeekNumber: props.showWeekNumber,
	        dateFormatter: this.dateFormatter })), React.createElement(CalendarFooter, { locale: locale,
	        showClear: props.showClear,
	        prefixClsFn: prefixClsFn,
	        showToday: props.showToday,
	        showTime: props.showTime,
	        value: value,
	        dateFormatter: this.dateFormatter,
	        clear: this.clear,
	        handleSelect: this.handleSelect,
	        chooseToday: this.chooseToday
	      })));
	    }
	  }]);
	
	  return Calendar;
	})(React.Component);
	
	Calendar.propTypes = {
	  value: React.PropTypes.object,
	  defaultValue: React.PropTypes.object,
	  className: React.PropTypes.string,
	  orient: React.PropTypes.arrayOf(React.PropTypes.oneOf(['left', 'top', 'right', 'bottom'])),
	  locale: React.PropTypes.object,
	  showWeekNumber: React.PropTypes.bool,
	  style: React.PropTypes.object,
	  showToday: React.PropTypes.bool,
	  showTime: React.PropTypes.bool,
	  onSelect: React.PropTypes.func,
	  onBlur: React.PropTypes.func
	};
	
	Calendar.defaultProps = {
	  locale: __webpack_require__(76),
	  style: {},
	  prefixCls: 'rc-calendar',
	  onKeyDown: noop,
	  className: '',
	  showToday: true,
	  onSelect: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onClear: noop
	};
	
	module.exports = Calendar;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(46);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * DateTimeFormat for
	 * Inspired by DateTimeFormat from JDK.
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var GregorianCalendar = __webpack_require__(47);
	var enUsLocale = __webpack_require__(52);
	var MAX_VALUE = Number.MAX_VALUE;
	/**
	 * date or time style enum
	 * @enum {Number} Date.Formatter.Style
	 */
	var DateTimeStyle = {
	  /**
	   * full style
	   */
	  FULL: 0,
	  /**
	   * long style
	   */
	  LONG: 1,
	  /**
	   * medium style
	   */
	  MEDIUM: 2,
	  /**
	   * short style
	   */
	  SHORT: 3
	};
	
	/*
	 Letter    Date or Time Component    Presentation    Examples
	 G    Era designator    Text    AD
	 y    Year    Year    1996; 96
	 M    Month in year    Month    July; Jul; 07
	 w    Week in year    Number    27
	 W    Week in month    Number    2
	 D    Day in year    Number    189
	 d    Day in month    Number    10
	 F    Day of week in month    Number    2
	 E    Day in week    Text    Tuesday; Tue
	 a    Am/pm marker    Text    PM
	 H    Hour in day (0-23)    Number    0
	 k    Hour in day (1-24)    Number    24
	 K    Hour in am/pm (0-11)    Number    0
	 h    Hour in am/pm (1-12)    Number    12
	 m    Minute in hour    Number    30
	 s    Second in minute    Number    55
	 S    Millisecond    Number    978
	 x z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
	 Z    Time zone    RFC 822 time zone    -0800
	 */
	
	var patternChars = new Array(GregorianCalendar.DAY_OF_WEEK_IN_MONTH + 2).join('1');
	var ERA = 0;
	var calendarIndexMap = {};
	
	patternChars = patternChars.split('');
	patternChars[ERA] = 'G';
	patternChars[GregorianCalendar.YEAR] = 'y';
	patternChars[GregorianCalendar.MONTH] = 'M';
	patternChars[GregorianCalendar.DAY_OF_MONTH] = 'd';
	patternChars[GregorianCalendar.HOUR_OF_DAY] = 'H';
	patternChars[GregorianCalendar.MINUTES] = 'm';
	patternChars[GregorianCalendar.SECONDS] = 's';
	patternChars[GregorianCalendar.MILLISECONDS] = 'S';
	patternChars[GregorianCalendar.WEEK_OF_YEAR] = 'w';
	patternChars[GregorianCalendar.WEEK_OF_MONTH] = 'W';
	patternChars[GregorianCalendar.DAY_OF_YEAR] = 'D';
	patternChars[GregorianCalendar.DAY_OF_WEEK_IN_MONTH] = 'F';
	
	(function () {
	  for (var index in patternChars) {
	    calendarIndexMap[patternChars[index]] = index;
	  }
	})();
	
	function mix(t, s) {
	  for (var p in s) {
	    t[p] = s[p];
	  }
	}
	
	var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
	var EMPTY = '';
	
	function substitute(str, o, regexp) {
	  if (typeof str !== 'string' || !o) {
	    return str;
	  }
	
	  return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
	    if (match.charAt(0) === '\\') {
	      return match.slice(1);
	    }
	    return o[name] === undefined ? EMPTY : o[name];
	  });
	}
	
	patternChars = patternChars.join('') + 'ahkKZE';
	
	function encode(lastField, count, compiledPattern) {
	  compiledPattern.push({
	    field: lastField,
	    count: count
	  });
	}
	
	function compile(pattern) {
	  var length = pattern.length;
	  var inQuote = false;
	  var compiledPattern = [];
	  var tmpBuffer = null;
	  var count = 0;
	  var lastField = -1;
	
	  for (var i = 0; i < length; i++) {
	    var c = pattern.charAt(i);
	
	    if (c === '\'') {
	      // '' is treated as a single quote regardless of being
	      // in a quoted section.
	      if (i + 1 < length) {
	        c = pattern.charAt(i + 1);
	        if (c === '\'') {
	          i++;
	          if (count !== 0) {
	            encode(lastField, count, compiledPattern);
	            lastField = -1;
	            count = 0;
	          }
	          if (inQuote) {
	            tmpBuffer += c;
	          }
	          continue;
	        }
	      }
	      if (!inQuote) {
	        if (count !== 0) {
	          encode(lastField, count, compiledPattern);
	          lastField = -1;
	          count = 0;
	        }
	        tmpBuffer = '';
	        inQuote = true;
	      } else {
	        compiledPattern.push({
	          text: tmpBuffer
	        });
	        inQuote = false;
	      }
	      continue;
	    }
	    if (inQuote) {
	      tmpBuffer += c;
	      continue;
	    }
	    if (!(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')) {
	      if (count !== 0) {
	        encode(lastField, count, compiledPattern);
	        lastField = -1;
	        count = 0;
	      }
	      compiledPattern.push({
	        text: c
	      });
	      continue;
	    }
	
	    if (patternChars.indexOf(c) === -1) {
	      throw new Error('Illegal pattern character "' + c + '"');
	    }
	
	    if (lastField === -1 || lastField === c) {
	      lastField = c;
	      count++;
	      continue;
	    }
	    encode(lastField, count, compiledPattern);
	    lastField = c;
	    count = 1;
	  }
	
	  if (inQuote) {
	    throw new Error('Unterminated quote');
	  }
	
	  if (count !== 0) {
	    encode(lastField, count, compiledPattern);
	  }
	
	  return compiledPattern;
	}
	
	var zeroDigit = '0';
	
	// TODO zeroDigit localization??
	function zeroPaddingNumber(_x, _x2, _x3, _x4) {
	  var _again = true;
	
	  _function: while (_again) {
	    var value = _x,
	        minDigits = _x2,
	        maxDigits = _x3,
	        buffer = _x4;
	    _again = false;
	
	    // Optimization for 1, 2 and 4 digit numbers. This should
	    // cover most cases of formatting date/time related items.
	    // Note: This optimization code assumes that maxDigits is
	    // either 2 or Integer.MAX_VALUE (maxIntCount in format()).
	    buffer = buffer || [];
	    maxDigits = maxDigits || MAX_VALUE;
	    if (value >= 0) {
	      if (value < 100 && minDigits >= 1 && minDigits <= 2) {
	        if (value < 10 && minDigits === 2) {
	          buffer.push(zeroDigit);
	        }
	        buffer.push(value);
	        return buffer.join('');
	      } else if (value >= 1000 && value < 10000) {
	        if (minDigits === 4) {
	          buffer.push(value);
	          return buffer.join('');
	        }
	        if (minDigits === 2 && maxDigits === 2) {
	          _x = value % 100;
	          _x2 = 2;
	          _x3 = 2;
	          _x4 = buffer;
	          _again = true;
	          continue _function;
	        }
	      }
	    }
	    buffer.push(value + '');
	    return buffer.join('');
	  }
	}
	
	/**
	 *
	 * date time formatter for GregorianCalendar
	 *
	 *      @example
	 *
	 *          var calendar = new GregorianCalendar(2013,9,24);
	 *          // ' to escape
	 *          var formatter = new GregorianCalendarFormat("'today is' ''yyyy/MM/dd a''");
	 *          document.write(formatter.format(calendar));
	 *
	 * @class GregorianCalendarFormat
	 * @param {String} pattern patter string of date formatter
	 *
	 * <table border="1">
	 * <thead valign="bottom">
	 * <tr><th class="head">Letter</th>
	 * <th class="head">Date or Time Component</th>
	 * <th class="head">Presentation</th>
	 * <th class="head">Examples</th>
	 * </tr>
	 * </thead>
	 * <tbody valign="top">
	 * <tr><td>G</td>
	 * <td>Era designator</td>
	 * <td>Text</td>
	 * <td>AD</td>
	 * </tr>
	 * <tr><td>y</td>
	 * <td>Year</td>
	 * <td>Year</td>
	 * <td>1996; 96</td>
	 * </tr>
	 * <tr><td>M</td>
	 * <td>Month in year</td>
	 * <td>Month</td>
	 * <td>July; Jul; 07</td>
	 * </tr>
	 * <tr><td>w</td>
	 * <td>Week in year</td>
	 * <td>Number</td>
	 * <td>27</td>
	 * </tr>
	 * <tr><td>W</td>
	 * <td>Week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>D</td>
	 * <td>Day in year</td>
	 * <td>Number</td>
	 * <td>189</td>
	 * </tr>
	 * <tr><td>d</td>
	 * <td>Day in month</td>
	 * <td>Number</td>
	 * <td>10</td>
	 * </tr>
	 * <tr><td>F</td>
	 * <td>Day of week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>E</td>
	 * <td>Day in week</td>
	 * <td>Text</td>
	 * <td>Tuesday; Tue</td>
	 * </tr>
	 * <tr><td>a</td>
	 * <td>Am/pm marker</td>
	 * <td>Text</td>
	 * <td>PM</td>
	 * </tr>
	 * <tr><td>H</td>
	 *       <td>Hour in day (0-23)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>k</td>
	 *       <td>Hour in day (1-24)</td>
	 * <td>Number</td>
	 * <td>24</td>
	 * </tr>
	 * <tr><td>K</td>
	 * <td>Hour in am/pm (0-11)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>h</td>
	 * <td>Hour in am/pm (1-12)</td>
	 * <td>Number</td>
	 * <td>12</td>
	 * </tr>
	 * <tr><td>m</td>
	 * <td>Minute in hour</td>
	 * <td>Number</td>
	 * <td>30</td>
	 * </tr>
	 * <tr><td>s</td>
	 * <td>Second in minute</td>
	 * <td>Number</td>
	 * <td>55</td>
	 * </tr>
	 * <tr><td>S</td>
	 * <td>Millisecond</td>
	 * <td>Number</td>
	 * <td>978</td>
	 * </tr>
	 * <tr><td>x/z</td>
	 * <td>Time zone</td>
	 * <td>General time zone</td>
	 * <td>Pacific Standard Time; PST; GMT-08:00</td>
	 * </tr>
	 * <tr><td>Z</td>
	 * <td>Time zone</td>
	 * <td>RFC 822 time zone</td>
	 * <td>-0800</td>
	 * </tr>
	 * </tbody>
	 * </table>
	
	 * @param {Object} locale format locale
	 */
	function DateTimeFormat(pattern, locale) {
	  this.locale = locale || enUsLocale;
	  this.originalPattern = pattern;
	  this.pattern = compile(pattern);
	}
	
	function formatField(field, count, locale, calendar) {
	  var current, value;
	  switch (field) {
	    case 'G':
	      value = calendar.getYear() > 0 ? 1 : 0;
	      current = locale.eras[value];
	      break;
	    case 'y':
	      value = calendar.getYear();
	      if (value <= 0) {
	        value = 1 - value;
	      }
	      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
	      break;
	    case 'M':
	      value = calendar.getMonth();
	      if (count >= 4) {
	        current = locale.months[value];
	      } else if (count === 3) {
	        current = locale.shortMonths[value];
	      } else {
	        current = zeroPaddingNumber(value + 1, count);
	      }
	      break;
	    case 'k':
	      current = zeroPaddingNumber(calendar.getHourOfDay() || 24, count);
	      break;
	    case 'E':
	      value = calendar.getDayOfWeek();
	      current = count >= 4 ? locale.weekdays[value] : locale.shortWeekdays[value];
	      break;
	    case 'a':
	      current = locale.ampms[calendar.getHourOfDay() >= 12 ? 1 : 0];
	      break;
	    case 'h':
	      current = zeroPaddingNumber(calendar.getHourOfDay() % 12 || 12, count);
	      break;
	    case 'K':
	      current = zeroPaddingNumber(calendar.getHourOfDay() % 12, count);
	      break;
	    case 'Z':
	      var offset = calendar.getTimezoneOffset();
	      var parts = [offset < 0 ? '-' : '+'];
	      offset = Math.abs(offset);
	      parts.push(zeroPaddingNumber(Math.floor(offset / 60) % 100, 2), zeroPaddingNumber(offset % 60, 2));
	      current = parts.join('');
	      break;
	    default:
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W':
	      var index = calendarIndexMap[field];
	      value = calendar.get(index);
	      current = zeroPaddingNumber(value, count);
	  }
	  return current;
	}
	
	function matchField(dateStr, startIndex, matches) {
	  var matchedLen = -1;
	  var index = -1;
	  var i;
	  var len = matches.length;
	  for (i = 0; i < len; i++) {
	    var m = matches[i];
	    var mLen = m.length;
	    if (mLen > matchedLen && matchPartString(dateStr, startIndex, m, mLen)) {
	      matchedLen = mLen;
	      index = i;
	    }
	  }
	  return index >= 0 ? {
	    value: index,
	    startIndex: startIndex + matchedLen
	  } : null;
	}
	
	function matchPartString(dateStr, startIndex, match, mLen) {
	  for (var i = 0; i < mLen; i++) {
	    if (dateStr.charAt(startIndex + i) !== match.charAt(i)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function getLeadingNumberLen(str) {
	  var i, c;
	  var len = str.length;
	  for (i = 0; i < len; i++) {
	    c = str.charAt(i);
	    if (c < '0' || c > '9') {
	      break;
	    }
	  }
	  return i;
	}
	
	function matchNumber(dateStr, startIndex, count, obeyCount) {
	  var str = dateStr;
	  var n;
	  if (obeyCount) {
	    if (dateStr.length <= startIndex + count) {
	      return null;
	    }
	    str = dateStr.slice(startIndex, startIndex + count);
	    if (!str.match(/^\d+$/)) {
	      throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
	    }
	  } else {
	    str = str.slice(startIndex);
	  }
	  n = parseInt(str, 10);
	  if (isNaN(n)) {
	    throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
	  }
	  return {
	    value: n,
	    startIndex: startIndex + getLeadingNumberLen(str)
	  };
	}
	
	function parseField(calendar, dateStr, startIndex, field, count, obeyCount, tmp) {
	  var match, year, hour;
	  if (dateStr.length <= startIndex) {
	    return startIndex;
	  }
	  var locale = this.locale;
	  switch (field) {
	    case 'G':
	      if (match = matchField(dateStr, startIndex, locale.eras)) {
	        if (calendar.isSetYear()) {
	          if (match.value === 0) {
	            year = calendar.getYear();
	            calendar.setYear(1 - year);
	          }
	        } else {
	          tmp.era = match.value;
	        }
	      }
	      break;
	    case 'y':
	      if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	        year = match.value;
	        if ('era' in tmp) {
	          if (tmp.era === 0) {
	            year = 1 - year;
	          }
	        }
	        calendar.setYear(year);
	      }
	      break;
	    case 'M':
	      var month;
	      if (count >= 3) {
	        if (match = matchField(dateStr, startIndex, locale[count === 3 ? 'shortMonths' : 'months'])) {
	          month = match.value;
	        }
	      } else {
	        if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	          month = match.value - 1;
	        }
	      }
	      if (match) {
	        calendar.setMonth(month);
	      }
	      break;
	    case 'k':
	      if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	        calendar.setHourOfDay(match.value % 24);
	      }
	      break;
	    case 'E':
	      if (match = matchField(dateStr, startIndex, locale[count > 3 ? 'weekdays' : 'shortWeekdays'])) {
	        calendar.setDayOfWeek(match.value);
	      }
	      break;
	    case 'a':
	      if (match = matchField(dateStr, startIndex, locale.ampms)) {
	        if (calendar.isSetHourOfDay()) {
	          if (match.value) {
	            hour = calendar.getHourOfDay();
	            if (hour < 12) {
	              calendar.setHourOfDay((hour + 12) % 24);
	            }
	          }
	        } else {
	          tmp.ampm = match.value;
	        }
	      }
	      break;
	    case 'h':
	      if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	        hour = match.value %= 12;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'K':
	      if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	        hour = match.value;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'Z':
	      var sign = 1;
	      var zoneChar = dateStr.charAt(startIndex);
	      if (zoneChar === '-') {
	        sign = -1;
	        startIndex++;
	      } else if (zoneChar === '+') {
	        startIndex++;
	      } else {
	        break;
	      }
	      if (match = matchNumber.call(this, dateStr, startIndex, 2, true)) {
	        var zoneOffset = match.value * 60;
	        startIndex = match.startIndex;
	        if (match = matchNumber.call(this, dateStr, startIndex, 2, true)) {
	          zoneOffset += match.value;
	        }
	        calendar.setTimezoneOffset(zoneOffset);
	      }
	      break;
	    default:
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W'
	      if (match = matchNumber.call(this, dateStr, startIndex, count, obeyCount)) {
	        var index = calendarIndexMap[field];
	        calendar.set(index, match.value);
	      }
	  }
	  if (match) {
	    startIndex = match.startIndex;
	  }
	  return startIndex;
	}
	
	mix(DateTimeFormat.prototype, {
	  /**
	   * format a GregorianDate instance according to specified pattern
	   * @param {GregorianCalendar} calendar GregorianDate instance
	   * @returns {string} formatted string of GregorianDate instance
	   */
	  format: function format(calendar) {
	    if (!calendar.isGregorianCalendar) {
	      throw new Error('calendar must be type of GregorianCalendar');
	    }
	    var i;
	    var ret = [];
	    var pattern = this.pattern;
	    var len = pattern.length;
	    for (i = 0; i < len; i++) {
	      var comp = pattern[i];
	      if (comp.text) {
	        ret.push(comp.text);
	      } else if ('field' in comp) {
	        ret.push(formatField(comp.field, comp.count, this.locale, calendar));
	      }
	    }
	    return ret.join('');
	  },
	
	  /**
	   * parse a formatted string of GregorianDate instance according to specified pattern
	   * @param {String} dateStr formatted string of GregorianDate
	   * @returns {GregorianCalendar}
	   */
	  parse: function parse(dateStr, calendarLocale) {
	    var calendar = new GregorianCalendar(calendarLocale);
	    var i;
	    var j;
	    var tmp = {};
	    var obeyCount = false;
	    var dateStrLen = dateStr.length;
	    var errorIndex = -1;
	    var startIndex = 0;
	    var oldStartIndex = 0;
	    var pattern = this.pattern;
	    var len = pattern.length;
	
	    loopPattern: {
	      for (i = 0; errorIndex < 0 && i < len; i++) {
	        var comp = pattern[i],
	            text,
	            textLen;
	        oldStartIndex = startIndex;
	        if (text = comp.text) {
	          textLen = text.length;
	          if (textLen + startIndex > dateStrLen) {
	            errorIndex = startIndex;
	          } else {
	            for (j = 0; j < textLen; j++) {
	              if (text.charAt(j) !== dateStr.charAt(j + startIndex)) {
	                errorIndex = startIndex;
	                break loopPattern;
	              }
	            }
	            startIndex += textLen;
	          }
	        } else if ('field' in comp) {
	          obeyCount = false;
	          var nextComp = pattern[i + 1];
	          if (nextComp) {
	            if ('field' in nextComp) {
	              obeyCount = true;
	            } else {
	              var c = nextComp.text.charAt(0);
	              if (c >= '0' && c <= '9') {
	                obeyCount = true;
	              }
	            }
	          }
	          startIndex = parseField.call(this, calendar, dateStr, startIndex, comp.field, comp.count, obeyCount, tmp);
	          if (startIndex === oldStartIndex) {
	            errorIndex = startIndex;
	          }
	        }
	      }
	    }
	
	    if (errorIndex >= 0) {
	      console.error('error when parsing date');
	      console.error(dateStr);
	      console.error(dateStr.slice(0, errorIndex) + '^');
	      return undefined;
	    }
	    return calendar;
	  }
	});
	
	mix(DateTimeFormat, {
	  Style: DateTimeStyle,
	
	  /**
	   * get a formatter instance of short style pattern.
	   * en-us: M/d/yy h:mm a
	   * zh-cn: yy-M-d ah:mm
	   * @param {Object} locale locale object
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getInstance: function getInstance(locale) {
	    return this.getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale);
	  },
	
	  /**
	   * get a formatter instance of specified date style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateInstance: function getDateInstance(dateStyle, locale) {
	    return this.getDateTimeInstance(dateStyle, undefined, locale);
	  },
	
	  /**
	   * get a formatter instance of specified date style and time style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateTimeInstance: function getDateTimeInstance(dateStyle, timeStyle, locale) {
	    locale = locale || enUsLocale;
	    var datePattern = '';
	    if (dateStyle !== undefined) {
	      datePattern = locale.datePatterns[dateStyle];
	    }
	    var timePattern = '';
	    if (timeStyle !== undefined) {
	      timePattern = locale.timePatterns[timeStyle];
	    }
	    var pattern = datePattern;
	    if (timePattern) {
	      if (datePattern) {
	        pattern = substitute(locale.dateTimePattern, {
	          date: datePattern,
	          time: timePattern
	        });
	      } else {
	        pattern = timePattern;
	      }
	    }
	    return new DateTimeFormat(pattern, locale);
	  },
	
	  /**
	   * get a formatter instance of specified time style.
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getTimeInstance: function getTimeInstance(timeStyle, locale) {
	    return this.getDateTimeInstance(undefined, timeStyle, locale);
	  }
	});
	
	module.exports = DateTimeFormat;
	
	DateTimeFormat.version = '@VERSION@';
	
	// gc_format@163.com

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(48);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * GregorianCalendar class
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	'use strict';
	
	var toInt = parseInt;
	var Utils = __webpack_require__(49);
	var defaultLocale = __webpack_require__(51);
	var Const = __webpack_require__(50);
	
	/**
	 * GregorianCalendar class.
	 *
	 * - no arguments:
	 *   Constructs a default GregorianCalendar using the current time
	 *   in the default time zone with the default locale.
	 * - one argument locale:
	 *   Constructs a GregorianCalendar
	 *   based on the current time in the default time zone with the given locale.
	 *
	 * @class Date.Gregorian
	 */
	function GregorianCalendar(locale) {
	  locale = locale || defaultLocale;
	
	  this.locale = locale;
	
	  this.fields = [];
	
	  /**
	   * The currently set time for this date.
	   * @protected
	   * @type Number|undefined
	   */
	  this.time = undefined;
	  /**
	   * The timezoneOffset in minutes used by this date.
	   * @type Number
	   * @protected
	   */
	
	  this.timezoneOffset = locale.timezoneOffset;
	
	  /**
	   * The first day of the week
	   * @type Number
	   * @protected
	   */
	  this.firstDayOfWeek = locale.firstDayOfWeek;
	
	  /**
	   * The number of days required for the first week in a month or year,
	   * with possible values from 1 to 7.
	   * @@protected
	   * @type Number
	   */
	  this.minimalDaysInFirstWeek = locale.minimalDaysInFirstWeek;
	
	  this.fieldsComputed = false;
	}
	
	Utils.mix(GregorianCalendar, Const);
	
	Utils.mix(GregorianCalendar, {
	  Utils: Utils,
	
	  defaultLocale: defaultLocale,
	
	  /**
	   * Determines if the given year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @param {Number} year the given year.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @static
	   * @method
	   */
	  isLeapYear: Utils.isLeapYear,
	
	  /**
	   * Enum indicating year field of date
	   * @type Number
	   */
	  YEAR: 1,
	  /**
	   * Enum indicating month field of date
	   * @type Number
	   */
	  MONTH: 2,
	  /**
	   * Enum indicating the day of the month
	   * @type Number
	   */
	  DAY_OF_MONTH: 3,
	  /**
	   * Enum indicating the hour (24).
	   * @type Number
	   */
	  HOUR_OF_DAY: 4,
	  /**
	   * Enum indicating the minute of the day
	   * @type Number
	   */
	  MINUTES: 5,
	  /**
	   * Enum indicating the second of the day
	   * @type Number
	   */
	  SECONDS: 6,
	  /**
	   * Enum indicating the millisecond of the day
	   * @type Number
	   */
	  MILLISECONDS: 7,
	  /**
	   * Enum indicating the week number within the current year
	   * @type Number
	   */
	  WEEK_OF_YEAR: 8,
	  /**
	   * Enum indicating the week number within the current month
	   * @type Number
	   */
	  WEEK_OF_MONTH: 9,
	
	  /**
	   * Enum indicating the day of the day number within the current year
	   * @type Number
	   */
	  DAY_OF_YEAR: 10,
	  /**
	   * Enum indicating the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK: 11,
	  /**
	   * Enum indicating the day of the ordinal number of the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK_IN_MONTH: 12,
	
	  /**
	   * Enum indicating am
	   * @type Number
	   */
	  AM: 0,
	  /**
	   * Enum indicating pm
	   * @type Number
	   */
	  PM: 1
	});
	
	var fields = ['', 'Year', 'Month', 'DayOfMonth', 'HourOfDay', 'Minutes', 'Seconds', 'Milliseconds', 'WeekOfYear', 'WeekOfMonth', 'DayOfYear', 'DayOfWeek', 'DayOfWeekInMonth'];
	
	var YEAR = GregorianCalendar.YEAR;
	var MONTH = GregorianCalendar.MONTH;
	var DAY_OF_MONTH = GregorianCalendar.DAY_OF_MONTH;
	var HOUR_OF_DAY = GregorianCalendar.HOUR_OF_DAY;
	var MINUTE = GregorianCalendar.MINUTES;
	var SECONDS = GregorianCalendar.SECONDS;
	
	var MILLISECONDS = GregorianCalendar.MILLISECONDS;
	var DAY_OF_WEEK_IN_MONTH = GregorianCalendar.DAY_OF_WEEK_IN_MONTH;
	var DAY_OF_YEAR = GregorianCalendar.DAY_OF_YEAR;
	var DAY_OF_WEEK = GregorianCalendar.DAY_OF_WEEK;
	
	var WEEK_OF_MONTH = GregorianCalendar.WEEK_OF_MONTH;
	var WEEK_OF_YEAR = GregorianCalendar.WEEK_OF_YEAR;
	
	var MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	var LEAP_MONTH_LENGTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	
	var ONE_SECOND = 1000;
	var ONE_MINUTE = 60 * ONE_SECOND;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_WEEK = ONE_DAY * 7;
	
	var EPOCH_OFFSET = 719163; // Fixed date of January 1, 1970 (Gregorian)
	
	var mod = Utils.mod,
	    _isLeapYear = Utils.isLeapYear,
	    floorDivide = Math.floor;
	
	var MIN_VALUES = [undefined, 1, // YEAR
	GregorianCalendar.JANUARY, // MONTH
	1, // DAY_OF_MONTH
	0, // HOUR_OF_DAY
	0, // MINUTE
	0, // SECONDS
	0, // MILLISECONDS
	
	1, // WEEK_OF_YEAR
	undefined, // WEEK_OF_MONTH
	
	1, // DAY_OF_YEAR
	GregorianCalendar.SUNDAY, // DAY_OF_WEEK
	1 // DAY_OF_WEEK_IN_MONTH
	];
	
	var MAX_VALUES = [undefined, 292278994, // YEAR
	GregorianCalendar.DECEMBER, // MONTH
	undefined, // DAY_OF_MONTH
	23, // HOUR_OF_DAY
	59, // MINUTE
	59, // SECONDS
	999, // MILLISECONDS
	undefined, // WEEK_OF_YEAR
	undefined, // WEEK_OF_MONTH
	undefined, // DAY_OF_YEAR
	GregorianCalendar.SATURDAY, // DAY_OF_WEEK
	undefined // DAY_OF_WEEK_IN_MONTH
	];
	
	GregorianCalendar.prototype = {
	  constructor: GregorianCalendar,
	
	  isGregorianCalendar: 1,
	
	  /**
	   * Determines if current year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @method
	   * @member Date.Gregorian
	   */
	  isLeapYear: function isLeapYear() {
	    return _isLeapYear(this.getYear());
	  },
	
	  /**
	   * Return local info for current date instance
	   * @returns {Object}
	   */
	  getLocale: function getLocale() {
	    return this.locale;
	  },
	
	  /**
	   * Returns the minimum value for
	   * the given calendar field of this GregorianCalendar instance.
	   * The minimum value is defined as the smallest value
	   * returned by the get method for any possible time value,
	   * taking into consideration the current values of the getFirstDayOfWeek,
	   * getMinimalDaysInFirstWeek.
	   * @param field the calendar field.
	   * @returns {Number} the minimum value for the given calendar field.
	   */
	  getActualMinimum: function getActualMinimum(field) {
	    if (MIN_VALUES[field] !== undefined) {
	      return MIN_VALUES[field];
	    }
	
	    var fields = this.fields;
	    if (field === WEEK_OF_MONTH) {
	      var cal = this.clone();
	      cal.clear();
	      cal.set(fields[YEAR], fields[MONTH], 1);
	      return cal.get(WEEK_OF_MONTH);
	    }
	
	    throw new Error('minimum value not defined!');
	  },
	
	  /**
	   * Returns the maximum value for the given calendar field
	   * of this GregorianCalendar instance.
	   * The maximum value is defined as the largest value returned
	   * by the get method for any possible time value, taking into consideration
	   * the current values of the getFirstDayOfWeek, getMinimalDaysInFirstWeek methods.
	   * @param field the calendar field.
	   * @returns {Number} the maximum value for the given calendar field.
	   */
	  getActualMaximum: function getActualMaximum(field) {
	    if (MAX_VALUES[field] !== undefined) {
	      return MAX_VALUES[field];
	    }
	    var value,
	        fields = this.fields;
	    switch (field) {
	      case DAY_OF_MONTH:
	        value = getMonthLength(fields[YEAR], fields[MONTH]);
	        break;
	
	      case WEEK_OF_YEAR:
	        var endOfYear = this.clone();
	        endOfYear.clear();
	        endOfYear.set(fields[YEAR], GregorianCalendar.DECEMBER, 31);
	        value = endOfYear.get(WEEK_OF_YEAR);
	        if (value === 1) {
	          value = 52;
	        }
	        break;
	
	      case WEEK_OF_MONTH:
	        var endOfMonth = this.clone();
	        endOfMonth.clear();
	        endOfMonth.set(fields[YEAR], fields[MONTH], getMonthLength(fields[YEAR], fields[MONTH]));
	        value = endOfMonth.get(WEEK_OF_MONTH);
	        break;
	
	      case DAY_OF_YEAR:
	        value = getYearLength(fields[YEAR]);
	        break;
	
	      case DAY_OF_WEEK_IN_MONTH:
	        value = toInt((getMonthLength(fields[YEAR], fields[MONTH]) - 1) / 7) + 1;
	        break;
	    }
	    if (value === undefined) {
	      throw new Error('maximum value not defined!');
	    }
	    return value;
	  },
	
	  /**
	   * Determines if the given calendar field has a value set,
	   * including cases that the value has been set by internal fields calculations
	   * triggered by a get method call.
	   * @param field the calendar field to be cleared.
	   * @returns {boolean} true if the given calendar field has a value set; false otherwise.
	   */
	  isSet: function isSet(field) {
	    return this.fields[field] !== undefined;
	  },
	
	  /**
	   * Converts the time value (millisecond offset from the Epoch)
	   * to calendar field values.
	   * @protected
	   */
	  computeFields: function computeFields() {
	    var time = this.time;
	    var timezoneOffset = this.timezoneOffset * ONE_MINUTE;
	    var fixedDate = toInt(timezoneOffset / ONE_DAY);
	    var timeOfDay = timezoneOffset % ONE_DAY;
	    fixedDate += toInt(time / ONE_DAY);
	    timeOfDay += time % ONE_DAY;
	    if (timeOfDay >= ONE_DAY) {
	      timeOfDay -= ONE_DAY;
	      fixedDate++;
	    } else {
	      while (timeOfDay < 0) {
	        timeOfDay += ONE_DAY;
	        fixedDate--;
	      }
	    }
	
	    fixedDate += EPOCH_OFFSET;
	
	    var date = Utils.getGregorianDateFromFixedDate(fixedDate);
	
	    var year = date.year;
	
	    var fields = this.fields;
	    fields[YEAR] = year;
	    fields[MONTH] = date.month;
	    fields[DAY_OF_MONTH] = date.dayOfMonth;
	    fields[DAY_OF_WEEK] = date.dayOfWeek;
	
	    if (timeOfDay !== 0) {
	      fields[HOUR_OF_DAY] = toInt(timeOfDay / ONE_HOUR);
	      var r = timeOfDay % ONE_HOUR;
	      fields[MINUTE] = toInt(r / ONE_MINUTE);
	      r %= ONE_MINUTE;
	      fields[SECONDS] = toInt(r / ONE_SECOND);
	      fields[MILLISECONDS] = r % ONE_SECOND;
	    } else {
	      fields[HOUR_OF_DAY] = fields[MINUTE] = fields[SECONDS] = fields[MILLISECONDS] = 0;
	    }
	
	    var fixedDateJan1 = Utils.getFixedDate(year, GregorianCalendar.JANUARY, 1);
	    var dayOfYear = fixedDate - fixedDateJan1 + 1;
	    var fixDateMonth1 = fixedDate - date.dayOfMonth + 1;
	
	    fields[DAY_OF_YEAR] = dayOfYear;
	    fields[DAY_OF_WEEK_IN_MONTH] = toInt((date.dayOfMonth - 1) / 7) + 1;
	
	    var weekOfYear = getWeekNumber(this, fixedDateJan1, fixedDate);
	
	    // 本周没有足够的时间在当前年
	    if (weekOfYear === 0) {
	      // If the date belongs to the last week of the
	      // previous year, use the week number of "12/31" of
	      // the "previous" year.
	      var fixedDec31 = fixedDateJan1 - 1;
	      var prevJan1 = fixedDateJan1 - getYearLength(year - 1);
	      weekOfYear = getWeekNumber(this, prevJan1, fixedDec31);
	    } else
	      // 本周是年末最后一周，可能有足够的时间在新的一年
	      if (weekOfYear >= 52) {
	        var nextJan1 = fixedDateJan1 + getYearLength(year);
	        var nextJan1st = getDayOfWeekDateOnOrBefore(nextJan1 + 6, this.firstDayOfWeek);
	        var nDays = nextJan1st - nextJan1;
	        // 本周有足够天数在新的一年
	        if (nDays >= this.minimalDaysInFirstWeek &&
	        // 当天确实在本周，weekOfYear === 53 时是不需要这个判断
	        fixedDate >= nextJan1st - 7) {
	          weekOfYear = 1;
	        }
	      }
	
	    fields[WEEK_OF_YEAR] = weekOfYear;
	    fields[WEEK_OF_MONTH] = getWeekNumber(this, fixDateMonth1, fixedDate);
	
	    this.fieldsComputed = true;
	  },
	
	  /**
	   * Converts calendar field values to the time value
	   * (millisecond offset from the Epoch).
	   * @protected
	   */
	  computeTime: function computeTime() {
	    if (!this.isSet(YEAR)) {
	      throw new Error('year must be set for GregorianCalendar');
	    }
	
	    var fields = this.fields;
	
	    var year = fields[YEAR];
	    var timeOfDay = 0;
	    if (this.isSet(HOUR_OF_DAY)) {
	      timeOfDay += fields[HOUR_OF_DAY];
	    }
	    timeOfDay *= 60;
	    timeOfDay += fields[MINUTE] || 0;
	    timeOfDay *= 60;
	    timeOfDay += fields[SECONDS] || 0;
	    timeOfDay *= 1000;
	    timeOfDay += fields[MILLISECONDS] || 0;
	
	    var fixedDate = 0;
	
	    fields[YEAR] = year;
	
	    fixedDate = fixedDate + this.getFixedDate();
	
	    // millis represents local wall-clock time in milliseconds.
	    var millis = (fixedDate - EPOCH_OFFSET) * ONE_DAY + timeOfDay;
	
	    millis -= this.timezoneOffset * ONE_MINUTE;
	
	    this.time = millis;
	
	    this.computeFields();
	  },
	
	  /**
	   * Fills in any unset fields in the calendar fields. First,
	   * the computeTime() method is called if the time value (millisecond offset from the Epoch)
	   * has not been calculated from calendar field values.
	   * Then, the computeFields() method is called to calculate all calendar field values.
	   * @protected
	   */
	  complete: function complete() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    if (!this.fieldsComputed) {
	      this.computeFields();
	    }
	  },
	
	  getFixedDate: function getFixedDate() {
	
	    var self = this;
	
	    var fields = self.fields;
	
	    var firstDayOfWeekCfg = self.firstDayOfWeek;
	
	    var year = fields[YEAR];
	
	    var month = GregorianCalendar.JANUARY;
	
	    if (self.isSet(MONTH)) {
	      month = fields[MONTH];
	      if (month > GregorianCalendar.DECEMBER) {
	        year += toInt(month / 12);
	        month %= 12;
	      } else if (month < GregorianCalendar.JANUARY) {
	        year += floorDivide(month / 12);
	        month = mod(month, 12);
	      }
	    }
	
	    // Get the fixed date since Jan 1, 1 (Gregorian). We are on
	    // the first day of either `month' or January in 'year'.
	    var fixedDate = Utils.getFixedDate(year, month, 1);
	    var firstDayOfWeek;
	    var dayOfWeek = self.firstDayOfWeek;
	
	    if (self.isSet(DAY_OF_WEEK)) {
	      dayOfWeek = fields[DAY_OF_WEEK];
	    }
	
	    if (self.isSet(MONTH)) {
	      if (self.isSet(DAY_OF_MONTH)) {
	        fixedDate += fields[DAY_OF_MONTH] - 1;
	      } else {
	        if (self.isSet(WEEK_OF_MONTH)) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	
	          // If we have enough days in the first week, then
	          // move to the previous week.
	          if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
	            firstDayOfWeek -= 7;
	          }
	
	          if (dayOfWeek !== firstDayOfWeekCfg) {
	            firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	          }
	
	          fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_MONTH] - 1);
	        } else {
	          var dowim;
	          if (self.isSet(DAY_OF_WEEK_IN_MONTH)) {
	            dowim = fields[DAY_OF_WEEK_IN_MONTH];
	          } else {
	            dowim = 1;
	          }
	          var lastDate = 7 * dowim;
	          if (dowim < 0) {
	            lastDate = getMonthLength(year, month) + 7 * (dowim + 1);
	          }
	          fixedDate = getDayOfWeekDateOnOrBefore(fixedDate + lastDate - 1, dayOfWeek);
	        }
	      }
	    } else {
	      // We are on the first day of the year.
	      if (self.isSet(DAY_OF_YEAR)) {
	        fixedDate += fields[DAY_OF_YEAR] - 1;
	      } else {
	        firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	        // If we have enough days in the first week, then move
	        // to the previous week.
	        if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
	          firstDayOfWeek -= 7;
	        }
	        if (dayOfWeek !== firstDayOfWeekCfg) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	        }
	        fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_YEAR] - 1);
	      }
	    }
	
	    return fixedDate;
	  },
	
	  /**
	   * Returns this Calendar's time value in milliseconds
	   * @member Date.Gregorian
	   * @returns {Number} the current time as UTC milliseconds from the epoch.
	   */
	  getTime: function getTime() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    return this.time;
	  },
	
	  /**
	   * Sets this Calendar's current time from the given long value.
	   * @param time the new time in UTC milliseconds from the epoch.
	   */
	  setTime: function setTime(time) {
	    this.time = time;
	    this.fieldsComputed = false;
	    this.complete();
	  },
	
	  /**
	   * Returns the value of the given calendar field.
	   * @param field the given calendar field.
	   * @returns {Number} the value for the given calendar field.
	   */
	  get: function get(field) {
	    this.complete();
	    return this.fields[field];
	  },
	
	  /**
	   * Returns the year of the given calendar field.
	   * @method getYear
	   * @returns {Number} the year for the given calendar field.
	   */
	
	  /**
	   * Returns the month of the given calendar field.
	   * @method getMonth
	   * @returns {Number} the month for the given calendar field.
	   */
	
	  /**
	   * Returns the day of month of the given calendar field.
	   * @method getDayOfMonth
	   * @returns {Number} the day of month for the given calendar field.
	   */
	
	  /**
	   * Returns the hour of day of the given calendar field.
	   * @method getHourOfDay
	   * @returns {Number} the hour of day for the given calendar field.
	   */
	
	  /**
	   * Returns the minute of the given calendar field.
	   * @method getMinute
	   * @returns {Number} the minute for the given calendar field.
	   */
	
	  /**
	   * Returns the second of the given calendar field.
	   * @method getSecond
	   * @returns {Number} the second for the given calendar field.
	   */
	
	  /**
	   * Returns the millisecond of the given calendar field.
	   * @method getMilliSecond
	   * @returns {Number} the millisecond for the given calendar field.
	   */
	
	  /**
	   * Returns the week of year of the given calendar field.
	   * @method getWeekOfYear
	   * @returns {Number} the week of year for the given calendar field.
	   */
	
	  /**
	   * Returns the week of month of the given calendar field.
	   * @method getWeekOfMonth
	   * @returns {Number} the week of month for the given calendar field.
	   */
	
	  /**
	   * Returns the day of year of the given calendar field.
	   * @method getDayOfYear
	   * @returns {Number} the day of year for the given calendar field.
	   */
	
	  /**
	   * Returns the day of week of the given calendar field.
	   * @method getDayOfWeek
	   * @returns {Number} the day of week for the given calendar field.
	   */
	
	  /**
	   * Returns the day of week in month of the given calendar field.
	   * @method getDayOfWeekInMonth
	   * @returns {Number} the day of week in month for the given calendar field.
	   */
	
	  /**
	   * Sets the given calendar field to the given value.
	   * @param field the given calendar field.
	   * @param v the value to be set for the given calendar field.
	   */
	  set: function set(field, v) {
	    var len = arguments.length;
	    if (len === 2) {
	      this.fields[field] = v;
	    } else if (len < MILLISECONDS + 1) {
	      for (var i = 0; i < len; i++) {
	        this.fields[YEAR + i] = arguments[i];
	      }
	    } else {
	      throw new Error('illegal arguments for GregorianCalendar set');
	    }
	    this.time = undefined;
	  },
	
	  /**
	   * Set the year of the given calendar field.
	   * @method setYear
	   */
	
	  /**
	   * Set the month of the given calendar field.
	   * @method setMonth
	   */
	
	  /**
	   * Set the day of month of the given calendar field.
	   * @method setDayOfMonth
	   */
	
	  /**
	   * Set the hour of day of the given calendar field.
	   * @method setHourOfDay
	   */
	
	  /**
	   * Set the minute of the given calendar field.
	   * @method setMinute
	   */
	
	  /**
	   * Set the second of the given calendar field.
	   * @method setSecond
	   */
	
	  /**
	   * Set the millisecond of the given calendar field.
	   * @method setMilliSecond
	   */
	
	  /**
	   * Set the week of year of the given calendar field.
	   * @method setWeekOfYear
	   */
	
	  /**
	   * Set the week of month of the given calendar field.
	   * @method setWeekOfMonth
	   */
	
	  /**
	   * Set the day of year of the given calendar field.
	   * @method setDayOfYear
	   */
	
	  /**
	   * Set the day of week of the given calendar field.
	   * @method setDayOfWeek
	   */
	
	  /**
	   * Set the day of week in month of the given calendar field.
	   * @method setDayOfWeekInMonth
	   */
	
	  /**
	   * add for specified field based on two rules:
	   *
	   *  - Add rule 1. The value of field after the call minus the value of field before the
	   *  call is amount, modulo any overflow that has occurred in field
	   *  Overflow occurs when a field value exceeds its range and,
	   *  as a result, the next larger field is incremented or
	   *  decremented and the field value is adjusted back into its range.
	   *
	   *  - Add rule 2. If a smaller field is expected to be invariant,
	   *  but it is impossible for it to be equal to its
	   *  prior value because of changes in its minimum or maximum after
	   *  field is changed, then its value is adjusted to be as close
	   *  as possible to its expected value. A smaller field represents a
	   *  smaller unit of time. HOUR_OF_DAY is a smaller field than
	   *  DAY_OF_MONTH. No adjustment is made to smaller fields
	   *  that are not expected to be invariant. The calendar system
	   *  determines what fields are expected to be invariant.
	   *
	   *
	   *      @example
	   *      use('date/gregorian',function(S, GregorianCalendar){
	         *          var d = new GregorianCalendar();
	         *          d.set(2012, GregorianCalendar.JANUARY, 31);
	         *          d.add(Gregorian.MONTH,1);
	         *          // 2012-2-29
	         *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	         *          d.add(Gregorian.MONTH,12);
	         *          // 2013-2-28
	         *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	         *      });
	   *
	   * @param field the calendar field.
	   * @param {Number} amount he amount of date or time to be added to the field.
	   */
	  add: function add(field, amount) {
	    if (!amount) {
	      return;
	    }
	    var self = this;
	    var fields = self.fields;
	    // computer and retrieve original value
	    var value = self.get(field);
	    if (field === YEAR) {
	      value += amount;
	      self.set(YEAR, value);
	      adjustDayOfMonth(self);
	    } else if (field === MONTH) {
	      value += amount;
	      var yearAmount = floorDivide(value / 12);
	      value = mod(value, 12);
	      if (yearAmount) {
	        self.set(YEAR, fields[YEAR] + yearAmount);
	      }
	      self.set(MONTH, value);
	      adjustDayOfMonth(self);
	    } else {
	      switch (field) {
	        case HOUR_OF_DAY:
	          amount *= ONE_HOUR;
	          break;
	        case MINUTE:
	          amount *= ONE_MINUTE;
	          break;
	        case SECONDS:
	          amount *= ONE_SECOND;
	          break;
	        case MILLISECONDS:
	          break;
	        case WEEK_OF_MONTH:
	        case WEEK_OF_YEAR:
	        case DAY_OF_WEEK_IN_MONTH:
	          amount *= ONE_WEEK;
	          break;
	        case DAY_OF_WEEK:
	        case DAY_OF_YEAR:
	        case DAY_OF_MONTH:
	          amount *= ONE_DAY;
	          break;
	        default:
	          throw new Error('illegal field for add');
	      }
	      self.setTime(self.time + amount);
	    }
	  },
	
	  /**
	   * add the year of the given calendar field.
	   * @method addYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the month of the given calendar field.
	   * @method addMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of month of the given calendar field.
	   * @method addDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the hour of day of the given calendar field.
	   * @method addHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the minute of the given calendar field.
	   * @method addMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the second of the given calendar field.
	   * @method addSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the millisecond of the given calendar field.
	   * @method addMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the week of year of the given calendar field.
	   * @method addWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the week of month of the given calendar field.
	   * @method addWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of year of the given calendar field.
	   * @method addDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of week of the given calendar field.
	   * @method addDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of week in month of the given calendar field.
	   * @method addDayOfWeekInMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * Get rolled value for the field
	   * @protected
	   */
	  getRolledValue: function getRolledValue(value, amount, min, max) {
	    var diff = value - min;
	    var range = max - min + 1;
	    amount %= range;
	    return min + (diff + amount + range) % range;
	  },
	
	  /**
	   * Adds a signed amount to the specified calendar field without changing larger fields.
	   * A negative roll amount means to subtract from field without changing
	   * larger fields. If the specified amount is 0, this method performs nothing.
	   *
	   *
	   *
	   *      @example
	   *      var d = new GregorianCalendar();
	   *      d.set(1999, GregorianCalendar.AUGUST, 31);
	   *      // 1999-4-30
	   *      // Tuesday June 1, 1999
	   *      d.set(1999, GregorianCalendar.JUNE, 1);
	   *      d.add(Gregorian.WEEK_OF_MONTH,-1); // === d.add(Gregorian.WEEK_OF_MONTH,
	   *      d.get(Gregorian.WEEK_OF_MONTH));
	   *      // 1999-06-29
	   *
	   *
	   * @param field the calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   */
	  roll: function roll(field, amount) {
	    if (!amount) {
	      return;
	    }
	    var self = this;
	    // computer and retrieve original value
	    var value = self.get(field);
	    var min = self.getActualMinimum(field);
	    var max = self.getActualMaximum(field);
	    value = self.getRolledValue(value, amount, min, max);
	
	    self.set(field, value);
	
	    // consider compute time priority
	    switch (field) {
	      case MONTH:
	        adjustDayOfMonth(self);
	        break;
	      default:
	        // other fields are set already when get
	        self.updateFieldsBySet(field);
	        break;
	    }
	  },
	
	  /**
	   * roll the year of the given calendar field.
	   * @method rollYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the month of the given calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   * @method rollMonth
	   */
	
	  /**
	   * roll the day of month of the given calendar field.
	   * @method rollDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the hour of day of the given calendar field.
	   * @method rollHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the minute of the given calendar field.
	   * @method rollMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the second of the given calendar field.
	   * @method rollSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the millisecond of the given calendar field.
	   * @method rollMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the week of year of the given calendar field.
	   * @method rollWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the week of month of the given calendar field.
	   * @method rollWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the day of year of the given calendar field.
	   * @method rollDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the day of week of the given calendar field.
	   * @method rollDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * remove other priority fields when call getFixedDate
	   * precondition: other fields are all set or computed
	   * @protected
	   */
	  updateFieldsBySet: function updateFieldsBySet(field) {
	    var fields = this.fields;
	    switch (field) {
	      case WEEK_OF_MONTH:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case DAY_OF_YEAR:
	        fields[MONTH] = undefined;
	        break;
	      case DAY_OF_WEEK:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case WEEK_OF_YEAR:
	        fields[DAY_OF_YEAR] = undefined;
	        fields[MONTH] = undefined;
	        break;
	    }
	  },
	
	  /**
	   * get current date instance's timezone offset
	   * @returns {Number}
	   */
	  getTimezoneOffset: function getTimezoneOffset() {
	    return this.timezoneOffset;
	  },
	
	  /**
	   * set current date instance's timezone offset
	   */
	  setTimezoneOffset: function setTimezoneOffset(timezoneOffset) {
	    if (this.timezoneOffset !== timezoneOffset) {
	      this.fieldsComputed = undefined;
	      this.timezoneOffset = timezoneOffset;
	    }
	  },
	
	  /**
	   * set first day of week for current date instance
	   */
	  setFirstDayOfWeek: function setFirstDayOfWeek(firstDayOfWeek) {
	    if (this.firstDayOfWeek !== firstDayOfWeek) {
	      this.firstDayOfWeek = firstDayOfWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /**
	   * Gets what the first day of the week is; e.g., SUNDAY in the U.S., MONDAY in France.
	   * @returns {Number} the first day of the week.
	   */
	  getFirstDayOfWeek: function getFirstDayOfWeek() {
	    return this.firstDayOfWeek;
	  },
	
	  /**
	   * Sets what the minimal days required in the first week of the year are; For example,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * call this method with value 1.
	   * If it must be a full week, use value 7.
	   * @param minimalDaysInFirstWeek the given minimal days required in the first week of the year.
	   */
	  setMinimalDaysInFirstWeek: function setMinimalDaysInFirstWeek(minimalDaysInFirstWeek) {
	    if (this.minimalDaysInFirstWeek !== minimalDaysInFirstWeek) {
	      this.minimalDaysInFirstWeek = minimalDaysInFirstWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /**
	   * Gets what the minimal days required in the first week of the year are; e.g.,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * this method returns 1.
	   * If the minimal days required must be a full week, this method returns 7.
	   * @returns {Number} the minimal days required in the first week of the year.
	   */
	  getMinimalDaysInFirstWeek: function getMinimalDaysInFirstWeek() {
	    return this.minimalDaysInFirstWeek;
	  },
	
	  /**
	   * Returns the number of weeks in the week year
	   * represented by this GregorianCalendar.
	   *
	   * For example, if this GregorianCalendar's date is
	   * December 31, 2008 with the ISO
	   * 8601 compatible setting, this method will return 53 for the
	   * period: December 29, 2008 to January 3, 2010
	   * while getActualMaximum(WEEK_OF_YEAR) will return
	   * 52 for the period: December 31, 2007 to December 28, 2008.
	   *
	   * @return {Number} the number of weeks in the week year.
	   */
	  getWeeksInWeekYear: function getWeeksInWeekYear() {
	    var weekYear = this.getWeekYear();
	    if (weekYear === this.get(YEAR)) {
	      return this.getActualMaximum(WEEK_OF_YEAR);
	    }
	    // Use the 2nd week for calculating the max of WEEK_OF_YEAR
	    var gc = this.clone();
	    gc.clear();
	    gc.setWeekDate(weekYear, 2, this.get(DAY_OF_WEEK));
	    return gc.getActualMaximum(WEEK_OF_YEAR);
	  },
	
	  /**
	   * Returns the week year represented by this GregorianCalendar.
	   * The dates in the weeks between 1 and the
	   * maximum week number of the week year have the same week year value
	   * that may be one year before or after the calendar year value.
	   *
	   * @return {Number} the week year represented by this GregorianCalendar.
	   */
	  getWeekYear: function getWeekYear() {
	    var year = this.get(YEAR); // implicitly  complete
	    var weekOfYear = this.get(WEEK_OF_YEAR);
	    var month = this.get(MONTH);
	    if (month === GregorianCalendar.JANUARY) {
	      if (weekOfYear >= 52) {
	        --year;
	      }
	    } else if (month === GregorianCalendar.DECEMBER) {
	      if (weekOfYear === 1) {
	        ++year;
	      }
	    }
	    return year;
	  },
	  /**
	   * Sets this GregorianCalendar to the date given by the date specifiers - weekYear,
	   * weekOfYear, and dayOfWeek. weekOfYear follows the WEEK_OF_YEAR numbering.
	   * The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.
	   *
	   * @param weekYear    the week year
	   * @param weekOfYear  the week number based on weekYear
	   * @param dayOfWeek   the day of week value
	   */
	  setWeekDate: function setWeekDate(weekYear, weekOfYear, dayOfWeek) {
	    if (dayOfWeek < GregorianCalendar.SUNDAY || dayOfWeek > GregorianCalendar.SATURDAY) {
	      throw new Error('invalid dayOfWeek: ' + dayOfWeek);
	    }
	    var fields = this.fields;
	    // To avoid changing the time of day fields by date
	    // calculations, use a clone with the GMT time zone.
	    var gc = this.clone();
	    gc.clear();
	    gc.setTimezoneOffset(0);
	    gc.set(YEAR, weekYear);
	    gc.set(WEEK_OF_YEAR, 1);
	    gc.set(DAY_OF_WEEK, this.getFirstDayOfWeek());
	    var days = dayOfWeek - this.getFirstDayOfWeek();
	    if (days < 0) {
	      days += 7;
	    }
	    days += 7 * (weekOfYear - 1);
	    if (days !== 0) {
	      gc.add(DAY_OF_YEAR, days);
	    } else {
	      gc.complete();
	    }
	    fields[YEAR] = gc.get(YEAR);
	    fields[MONTH] = gc.get(MONTH);
	    fields[DAY_OF_MONTH] = gc.get(DAY_OF_MONTH);
	    this.complete();
	  },
	  /**
	   * Creates and returns a copy of this object.
	   * @returns {Date.Gregorian}
	   */
	  clone: function clone() {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    var cal = new GregorianCalendar(this.locale);
	    cal.setTimezoneOffset(cal.getTimezoneOffset());
	    cal.setFirstDayOfWeek(cal.getFirstDayOfWeek());
	    cal.setMinimalDaysInFirstWeek(cal.getMinimalDaysInFirstWeek());
	    cal.setTime(this.time);
	    return cal;
	  },
	
	  /**
	   * Compares this GregorianCalendar to the specified Object.
	   * The result is true if and only if the argument is a GregorianCalendar object
	   * that represents the same time value (millisecond offset from the Epoch)
	   * under the same Calendar parameters and Gregorian change date as this object.
	   * @param {Date.Gregorian} obj the object to compare with.
	   * @returns {boolean} true if this object is equal to obj; false otherwise.
	   */
	  equals: function equals(obj) {
	    return this.getTime() === obj.getTime() && this.firstDayOfWeek === obj.firstDayOfWeek && this.timezoneOffset === obj.timezoneOffset && this.minimalDaysInFirstWeek === obj.minimalDaysInFirstWeek;
	  },
	
	  /**
	   * Sets all the calendar field values or specified field and the time value
	   * (millisecond offset from the Epoch) of this Calendar undefined.
	   * This means that isSet() will return false for all the calendar fields,
	   * and the date and time calculations will treat the fields as if they had never been set.
	   * @param [field] the calendar field to be cleared.
	   */
	  clear: function clear(field) {
	    if (field === undefined) {
	      this.field = [];
	    } else {
	      this.fields[field] = undefined;
	    }
	    this.time = undefined;
	    this.fieldsComputed = false;
	  }
	};
	
	var GregorianCalendarProto = GregorianCalendar.prototype;
	
	Utils.each(fields, function (f, index) {
	  if (f) {
	    GregorianCalendarProto['get' + f] = function () {
	      return this.get(index);
	    };
	
	    GregorianCalendarProto['isSet' + f] = function () {
	      return this.isSet(index);
	    };
	
	    GregorianCalendarProto['set' + f] = function (v) {
	      return this.set(index, v);
	    };
	
	    GregorianCalendarProto['add' + f] = function (v) {
	      return this.add(index, v);
	    };
	
	    GregorianCalendarProto['roll' + f] = function (v) {
	      return this.roll(index, v);
	    };
	  }
	});
	
	// ------------------- private start
	
	function adjustDayOfMonth(self) {
	  var fields = self.fields;
	  var year = fields[YEAR];
	  var month = fields[MONTH];
	  var monthLen = getMonthLength(year, month);
	  var dayOfMonth = fields[DAY_OF_MONTH];
	  if (dayOfMonth > monthLen) {
	    self.set(DAY_OF_MONTH, monthLen);
	  }
	}
	
	function getMonthLength(year, month) {
	  return _isLeapYear(year) ? LEAP_MONTH_LENGTH[month] : MONTH_LENGTH[month];
	}
	
	function getYearLength(year) {
	  return _isLeapYear(year) ? 366 : 365;
	}
	
	function getWeekNumber(self, fixedDay1, fixedDate) {
	  var fixedDay1st = getDayOfWeekDateOnOrBefore(fixedDay1 + 6, self.firstDayOfWeek);
	  var nDays = fixedDay1st - fixedDay1;
	  if (nDays >= self.minimalDaysInFirstWeek) {
	    fixedDay1st -= 7;
	  }
	  var normalizedDayOfPeriod = fixedDate - fixedDay1st;
	  return floorDivide(normalizedDayOfPeriod / 7) + 1;
	}
	
	function getDayOfWeekDateOnOrBefore(fixedDate, dayOfWeek) {
	  // 1.1.1 is monday
	  // one week has 7 days
	  return fixedDate - mod(fixedDate - dayOfWeek, 7);
	}
	
	// ------------------- private end
	
	module.exports = GregorianCalendar;
	/*
	 http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html

	 TODO
	 - day saving time
	 - i18n
	 - julian calendar
	 */

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * utils for gregorian date
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var Const = __webpack_require__(50);
	var floor = Math.floor;
	var ACCUMULATED_DAYS_IN_MONTH
	//   1/1 2/1 3/1 4/1 5/1 6/1 7/1 8/1 9/1 10/1 11/1 12/1
	= [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
	    ACCUMULATED_DAYS_IN_MONTH_LEAP
	//   1/1 2/1   3/1   4/1   5/1   6/1   7/1   8/1   9/1
	// 10/1   11/1   12/1
	= [0, 31, 59 + 1, 90 + 1, 120 + 1, 151 + 1, 181 + 1, 212 + 1, 243 + 1, 273 + 1, 304 + 1, 334 + 1],
	    DAYS_OF_YEAR = 365,
	    DAYS_OF_4YEAR = 365 * 4 + 1,
	    DAYS_OF_100YEAR = DAYS_OF_4YEAR * 25 - 1,
	    DAYS_OF_400YEAR = DAYS_OF_100YEAR * 4 + 1;
	
	function getDayOfYear(year, month, dayOfMonth) {
	    return dayOfMonth + (_exports.isLeapYear(year) ? ACCUMULATED_DAYS_IN_MONTH_LEAP[month] : ACCUMULATED_DAYS_IN_MONTH[month]);
	}
	
	function getDayOfWeekFromFixedDate(fixedDate) {
	    // The fixed day 1 (January 1, 1 Gregorian) is Monday.
	    if (fixedDate >= 0) {
	        return fixedDate % 7;
	    }
	    return _exports.mod(fixedDate, 7);
	}
	
	function getGregorianYearFromFixedDate(fixedDate) {
	    var d0;
	    var d1, d2, d3; //, d4;
	    var n400, n100, n4, n1;
	    var year;
	    d0 = fixedDate - 1;
	
	    n400 = floor(d0 / DAYS_OF_400YEAR);
	    d1 = _exports.mod(d0, DAYS_OF_400YEAR);
	    n100 = floor(d1 / DAYS_OF_100YEAR);
	    d2 = _exports.mod(d1, DAYS_OF_100YEAR);
	    n4 = floor(d2 / DAYS_OF_4YEAR);
	    d3 = _exports.mod(d2, DAYS_OF_4YEAR);
	    n1 = floor(d3 / DAYS_OF_YEAR);
	
	    year = 400 * n400 + 100 * n100 + 4 * n4 + n1;
	
	    // ?
	    if (!(n100 === 4 || n1 === 4)) {
	        ++year;
	    }
	
	    return year;
	}
	
	var _exports = module.exports = {
	    each: function each(arr, fn) {
	        for (var i = 0, len = arr.length; i < len; i++) {
	            if (fn(arr[i], i, arr) === false) {
	                break;
	            }
	        }
	    },
	
	    mix: function mix(t, s) {
	        for (var p in s) {
	            t[p] = s[p];
	        }
	    },
	
	    isLeapYear: function isLeapYear(year) {
	        if ((year & 3) !== 0) {
	            return false;
	        }
	        return year % 100 !== 0 || year % 400 === 0;
	    },
	
	    mod: function mod(x, y) {
	        // 负数时不是镜像关系
	        return x - y * floor(x / y);
	    },
	
	    // month: 0 based
	    getFixedDate: function getFixedDate(year, month, dayOfMonth) {
	        var prevYear = year - 1;
	        // 考虑公元前
	        return DAYS_OF_YEAR * prevYear + floor(prevYear / 4) - floor(prevYear / 100) + floor(prevYear / 400) + getDayOfYear(year, month, dayOfMonth);
	    },
	
	    getGregorianDateFromFixedDate: function getGregorianDateFromFixedDate(fixedDate) {
	        var year = getGregorianYearFromFixedDate(fixedDate);
	        var jan1 = _exports.getFixedDate(year, Const.JANUARY, 1);
	        var isLeap = _exports.isLeapYear(year);
	        var ACCUMULATED_DAYS = isLeap ? ACCUMULATED_DAYS_IN_MONTH_LEAP : ACCUMULATED_DAYS_IN_MONTH;
	        var daysDiff = fixedDate - jan1;
	        var month, i;
	
	        for (i = 0; i < ACCUMULATED_DAYS.length; i++) {
	            if (ACCUMULATED_DAYS[i] <= daysDiff) {
	                month = i;
	            } else {
	                break;
	            }
	        }
	
	        var dayOfMonth = fixedDate - jan1 - ACCUMULATED_DAYS[month] + 1;
	        var dayOfWeek = getDayOfWeekFromFixedDate(fixedDate);
	
	        return {
	            year: year,
	            month: month,
	            dayOfMonth: dayOfMonth,
	            dayOfWeek: dayOfWeek,
	            isLeap: isLeap
	        };
	    }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * const for gregorian date
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	module.exports = {
	  /**
	   * Enum indicating sunday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SUNDAY: 0,
	  /**
	   * Enum indicating monday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MONDAY: 1,
	  /**
	   * Enum indicating tuesday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  TUESDAY: 2,
	  /**
	   * Enum indicating wednesday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  WEDNESDAY: 3,
	  /**
	   * Enum indicating thursday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  THURSDAY: 4,
	  /**
	   * Enum indicating friday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  FRIDAY: 5,
	  /**
	   * Enum indicating saturday
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SATURDAY: 6,
	  /**
	   * Enum indicating january
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JANUARY: 0,
	  /**
	   * Enum indicating february
	   * @type Number
	   * @member Date.Gregorian
	   */
	  FEBRUARY: 1,
	  /**
	   * Enum indicating march
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MARCH: 2,
	  /**
	   * Enum indicating april
	   * @type Number
	   * @member Date.Gregorian
	   */
	  APRIL: 3,
	  /**
	   * Enum indicating may
	   * @type Number
	   * @member Date.Gregorian
	   */
	  MAY: 4,
	  /**
	   * Enum indicating june
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JUNE: 5,
	  /**
	   * Enum indicating july
	   * @type Number
	   * @member Date.Gregorian
	   */
	  JULY: 6,
	  /**
	   * Enum indicating august
	   * @type Number
	   * @member Date.Gregorian
	   */
	  AUGUST: 7,
	  /**
	   * Enum indicating september
	   * @type Number
	   * @member Date.Gregorian
	   */
	  SEPTEMBER: 8,
	  /**
	   * Enum indicating october
	   * @type Number
	   * @member Date.Gregorian
	   */
	  OCTOBER: 9,
	  /**
	   * Enum indicating november
	   * @type Number
	   * @member Date.Gregorian
	   */
	  NOVEMBER: 10,
	  /**
	   * Enum indicating december
	   * @type Number
	   * @member Date.Gregorian
	   */
	  DECEMBER: 11
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * en-us locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	"use strict";
	
	module.exports = {
	  // in minutes
	  timezoneOffset: -8 * 60,
	  firstDayOfWeek: 0,
	  minimalDaysInFirstWeek: 1
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * en-us locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	'use strict';
	
	module.exports = {
	  eras: ['BC', 'AD'],
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  shortWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  veryShortWeekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  ampms: ['AM', 'PM'],
	  datePatterns: ['EEEE, MMMM d, yyyy', 'MMMM d, yyyy', 'MMM d, yyyy', 'M/d/yy'],
	  timePatterns: ['h:mm:ss a \'GMT\'Z', 'h:mm:ss a', 'h:mm:ss a', 'h:mm a'],
	  dateTimePattern: '{date} {time}'
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(55),
	  classSet: __webpack_require__(56),
	  joinClasses: __webpack_require__(57),
	  KeyCode: __webpack_require__(58),
	  PureRenderMixin: __webpack_require__(59),
	  shallowEqual: __webpack_require__(54),
	  createChainedFunction: __webpack_require__(60),
	  Dom: {
	    addEventListener: __webpack_require__(61),
	    contains: __webpack_require__(62)
	  },
	  Children: {
	    toArray: __webpack_require__(63)
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	'use strict';
	
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(54);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateTHead = __webpack_require__(65);
	var DateTBody = __webpack_require__(67);
	
	var DateTable = (function (_React$Component) {
	  function DateTable() {
	    _classCallCheck(this, DateTable);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(DateTable, _React$Component);
	
	  _createClass(DateTable, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var prefixClsFn = props.prefixClsFn;
	      return React.createElement('table', { className: prefixClsFn('table'), cellSpacing: '0', role: 'grid' }, React.createElement(DateTHead, props), React.createElement(DateTBody, props));
	    }
	  }]);
	
	  return DateTable;
	})(React.Component);
	
	module.exports = DateTable;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateConstants = __webpack_require__(66);
	
	var DateTHead = (function (_React$Component) {
	  function DateTHead() {
	    _classCallCheck(this, DateTHead);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(DateTHead, _React$Component);
	
	  _createClass(DateTHead, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var value = props.value;
	      var locale = props.locale;
	      var prefixClsFn = props.prefixClsFn;
	      var veryShortWeekdays = [];
	      var weekDays = [];
	      var firstDayOfWeek = value.getFirstDayOfWeek();
	      var showWeekNumberEl;
	
	      for (var i = 0; i < DateConstants.DATE_COL_COUNT; i++) {
	        var index = (firstDayOfWeek + i) % DateConstants.DATE_COL_COUNT;
	        veryShortWeekdays[i] = locale.format.veryShortWeekdays[index];
	        weekDays[i] = locale.format.weekdays[index];
	      }
	
	      if (props.showWeekNumber) {
	        showWeekNumberEl = React.createElement('th', { role: 'columnheader', className: prefixClsFn('column-header', 'week-number-header') }, React.createElement('span', { className: prefixClsFn('column-header-inner') }, 'x'));
	      }
	      var weekDaysEls = weekDays.map(function (day, xindex) {
	        return React.createElement('th', { key: xindex, role: 'columnheader', title: day, className: prefixClsFn('column-header') }, React.createElement('span', { className: prefixClsFn('column-header-inner') }, veryShortWeekdays[xindex]));
	      });
	      return React.createElement('thead', null, React.createElement('tr', { role: 'row' }, showWeekNumberEl, weekDaysEls));
	    }
	  }]);
	
	  return DateTHead;
	})(React.Component);
	
	module.exports = DateTHead;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  DATE_ROW_COUNT: 6,
	  DATE_COL_COUNT: 7
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateConstants = __webpack_require__(66);
	
	function isSameDay(one, two) {
	  return one.getYear() === two.getYear() && one.getMonth() === two.getMonth() && one.getDayOfMonth() === two.getDayOfMonth();
	}
	
	function beforeCurrentMonthYear(current, today) {
	  if (current.getYear() < today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() < today.getMonth();
	}
	
	function afterCurrentMonthYear(current, today) {
	  if (current.getYear() > today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() > today.getMonth();
	}
	
	function getIdFromDate(d) {
	  return 'rc-calendar-' + d.getYear() + '-' + d.getMonth() + '-' + d.getDayOfMonth();
	}
	
	function noop() {}
	
	function handleDayClick(current) {
	  this.props.onSelect(current);
	}
	
	var DateTBody = (function (_React$Component) {
	  function DateTBody() {
	    _classCallCheck(this, DateTBody);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(DateTBody, _React$Component);
	
	  _createClass(DateTBody, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var i, j, current;
	      var dateTable = [];
	      var showWeekNumber = props.showWeekNumber;
	      var value = props.value;
	      var today = value.clone();
	      var prefixClsFn = props.prefixClsFn;
	      var cellClass = prefixClsFn('cell');
	      var weekNumberCellClass = prefixClsFn('week-number-cell');
	      var dateClass = prefixClsFn('date');
	      var dateRender = props.dateRender;
	      var disabledDate = props.disabledDate;
	      var dateFormatter = this.props.dateFormatter;
	      var todayClass = prefixClsFn('today');
	      var selectedClass = prefixClsFn('selected-day');
	      var lastMonthDayClass = prefixClsFn('last-month-cell');
	      var nextMonthDayClass = prefixClsFn('next-month-btn-day');
	      var disabledClass = prefixClsFn('disabled-cell');
	      var firstDisableClass = prefixClsFn('disabled-cell-first-of-row');
	      var lastDisableClass = prefixClsFn('disabled-cell-last-of-row');
	      today.setTime(Date.now());
	      var month1 = value.clone();
	      month1.set(value.getYear(), value.getMonth(), 1);
	      var day = month1.getDayOfWeek();
	      var lastMonthDiffDay = (day + 7 - value.getFirstDayOfWeek()) % 7;
	      // calculate last month
	      var lastMonth1 = month1.clone();
	      lastMonth1.addDayOfMonth(0 - lastMonthDiffDay);
	      var passed = 0;
	      for (i = 0; i < DateConstants.DATE_ROW_COUNT; i++) {
	        for (j = 0; j < DateConstants.DATE_COL_COUNT; j++) {
	          current = lastMonth1;
	          if (passed) {
	            current = current.clone();
	            current.addDayOfMonth(passed);
	          }
	          dateTable.push(current);
	          passed++;
	        }
	      }
	      var tableHtml = [];
	      passed = 0;
	      for (i = 0; i < DateConstants.DATE_ROW_COUNT; i++) {
	        var weekNumberCell;
	        var dateCells = [];
	        if (showWeekNumber) {
	          weekNumberCell = React.createElement('td', { key: dateTable[passed].getWeekOfYear(), role: 'gridcell', className: weekNumberCellClass }, dateTable[passed].getWeekOfYear());
	        }
	        for (j = 0; j < DateConstants.DATE_COL_COUNT; j++) {
	          var next = null;
	          var last = null;
	          current = dateTable[passed];
	          if (j < DateConstants.DATE_COL_COUNT - 1) {
	            next = dateTable[passed + 1];
	          }
	          if (j > 0) {
	            last = dateTable[passed - 1];
	          }
	          var cls = cellClass;
	          var disabled = false;
	          var selected = false;
	
	          if (isSameDay(current, today)) {
	            cls += ' ' + todayClass;
	          }
	          if (isSameDay(current, value)) {
	            cls += ' ' + selectedClass;
	            selected = true;
	          }
	          if (beforeCurrentMonthYear(current, value)) {
	            cls += ' ' + lastMonthDayClass;
	          }
	          if (afterCurrentMonthYear(current, value)) {
	            cls += ' ' + nextMonthDayClass;
	          }
	          if (disabledDate) {
	            if (disabledDate(current, value)) {
	              cls += ' ' + disabledClass;
	              disabled = true;
	
	              if (!last || !disabledDate(last, value)) {
	                cls += ' ' + firstDisableClass;
	              }
	
	              if (!next || !disabledDate(next, value)) {
	                cls += ' ' + lastDisableClass;
	              }
	            }
	          }
	
	          var dateHtml;
	          if (!(dateRender && (dateHtml = dateRender(current, value)))) {
	            dateHtml = React.createElement('span', {
	              key: getIdFromDate(current),
	              className: dateClass,
	              'aria-selected': selected,
	              'aria-disabled': disabled }, current.getDayOfMonth());
	          }
	
	          dateCells.push(React.createElement('td', { key: passed, onClick: disabled ? noop : handleDayClick.bind(this, current), role: 'gridcell',
	            title: dateFormatter.format(current), className: cls }, dateHtml));
	
	          passed++;
	        }
	        tableHtml.push(React.createElement('tr', {
	          key: i,
	          role: 'row' }, weekNumberCell, dateCells));
	      }
	      return React.createElement('tbody', { className: prefixClsFn('tbody') }, tableHtml);
	    }
	  }]);
	
	  return DateTBody;
	})(React.Component);
	
	module.exports = DateTBody;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var MonthPanel = __webpack_require__(69);
	var DateTimeFormat = __webpack_require__(45);
	
	var CalendarHeader = (function (_React$Component) {
	  function CalendarHeader(props) {
	    _classCallCheck(this, CalendarHeader);
	
	    _get(Object.getPrototypeOf(CalendarHeader.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	    this.formatter = new DateTimeFormat(props.locale.monthYearFormat);
	    this.showMonthPanel = this.showMonthPanel.bind(this);
	    this.onMonthPanelSelect = this.onMonthPanelSelect.bind(this);
	  }
	
	  _inherits(CalendarHeader, _React$Component);
	
	  _createClass(CalendarHeader, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.locale !== this.props.locale) {
	        this.formatter = new DateTimeFormat(nextProps.locale.monthYearFormat);
	      }
	    }
	  }, {
	    key: 'showMonthPanel',
	    value: function showMonthPanel() {
	      this.setState({
	        showMonthPanel: 1
	      });
	    }
	  }, {
	    key: 'getMonthYear',
	    value: function getMonthYear() {
	      var locale = this.props.locale;
	      var value = this.props.value;
	      return this.formatter.format(value);
	    }
	  }, {
	    key: 'onMonthPanelSelect',
	    value: function onMonthPanelSelect(value) {
	      this.setState({
	        showMonthPanel: 0
	      });
	      this.props.onMonthPanelSelect(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var prefixClsFn = props.prefixClsFn;
	      var locale = props.locale;
	      var value = props.value;
	      var monthPanel;
	
	      if (this.state.showMonthPanel) {
	        monthPanel = React.createElement(MonthPanel, { locale: locale, value: value, rootPrefixCls: prefixClsFn(), onSelect: this.onMonthPanelSelect });
	      }
	
	      return React.createElement('div', { className: prefixClsFn('header') }, React.createElement('a', { className: prefixClsFn('prev-year-btn'),
	        role: 'button',
	        onClick: props.previousYear,
	        title: locale.previousYear }, '«'), React.createElement('a', { className: prefixClsFn('prev-month-btn'),
	        role: 'button',
	        onClick: props.previousMonth,
	        title: locale.previousMonth }, '‹'), React.createElement('a', { className: prefixClsFn('month-select'),
	        role: 'button',
	        onClick: this.showMonthPanel,
	        title: locale.monthSelect }, React.createElement('span', { className: prefixClsFn('month-select-content') }, this.getMonthYear()), React.createElement('span', { className: prefixClsFn('month-select-arrow') }, 'x')), React.createElement('a', { className: prefixClsFn('next-month-btn'),
	        onClick: props.nextMonth,
	        title: locale.nextMonth }, '›'), React.createElement('a', { className: prefixClsFn('next-year-btn'),
	        onClick: props.nextYear,
	        title: locale.nextYear }, '»'), monthPanel);
	    }
	  }]);
	
	  return CalendarHeader;
	})(React.Component);
	
	module.exports = CalendarHeader;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateTimeFormat = __webpack_require__(45);
	var ROW = 4;
	var COL = 3;
	var cx = __webpack_require__(53).classSet;
	var YearPanel = __webpack_require__(70);
	var staticPrefixClsFn = __webpack_require__(72);
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({
	    value: next
	  });
	}
	
	function showYearPanel() {
	  this.setState({
	    showYearPanel: 1
	  });
	}
	
	function chooseMonth(month) {
	  var next = this.state.value.clone();
	  next.setMonth(month);
	  this.props.onSelect(next);
	}
	
	function onYearPanelSelect(current) {
	  this.setState({
	    value: current,
	    showYearPanel: 0
	  });
	}
	
	var MonthPanel = (function (_React$Component) {
	  function MonthPanel(props) {
	    _classCallCheck(this, MonthPanel);
	
	    _get(Object.getPrototypeOf(MonthPanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: this.props.value,
	      prefixCls: this.props.rootPrefixCls + '-month-panel'
	
	    };
	    // bind methods
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    this.showYearPanel = showYearPanel.bind(this);
	    this.onYearPanelSelect = onYearPanelSelect.bind(this);
	    this.prefixClsFn = staticPrefixClsFn.bind(this);
	  }
	
	  _inherits(MonthPanel, _React$Component);
	
	  _createClass(MonthPanel, [{
	    key: 'getMonths',
	    value: function getMonths() {
	      var props = this.props;
	      var value = this.state.value;
	      var current = value.clone();
	      var locale = props.locale;
	      var monthYearFormat = locale.monthYearFormat;
	      var dateFormatter = new DateTimeFormat(monthYearFormat);
	      var months = [];
	      var shortMonths = locale.format.shortMonths;
	      var index = 0;
	      for (var i = 0; i < ROW; i++) {
	        months[i] = [];
	        for (var j = 0; j < COL; j++) {
	          current.setMonth(index);
	          months[i][j] = {
	            value: index,
	            content: shortMonths[index],
	            title: dateFormatter.format(current)
	          };
	          index++;
	        }
	      }
	
	      return months;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var locale = props.locale;
	      var months = this.getMonths();
	      var year = value.getYear();
	      var currentMonth = value.getMonth();
	      var prefixClsFn = this.prefixClsFn;
	      var monthsEls = months.map(function (month, index) {
	        var tds = month.map(function (m) {
	          var classNameMap = {};
	          classNameMap[prefixClsFn('cell')] = 1;
	          classNameMap[prefixClsFn('selected-cell')] = m.value === currentMonth;
	          return React.createElement('td', { role: 'gridcell',
	            key: m.value,
	            onClick: chooseMonth.bind(_this, m.value),
	            title: m.title,
	            className: cx(classNameMap) }, React.createElement('a', {
	            className: prefixClsFn('month') }, m.content));
	        });
	        return React.createElement('tr', { key: index, role: 'row' }, tds);
	      });
	
	      var yearPanel;
	      if (this.state.showYearPanel) {
	        yearPanel = React.createElement(YearPanel, { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls, onSelect: this.onYearPanelSelect });
	      }
	
	      return React.createElement('div', { className: this.state.prefixCls }, React.createElement('div', null, React.createElement('div', { className: prefixClsFn('header') }, React.createElement('a', { className: prefixClsFn('prev-year-btn'),
	        role: 'button',
	        onClick: this.previousYear,
	        title: locale.previousYear }, '«'), React.createElement('a', { className: prefixClsFn('year-select'),
	        role: 'button',
	        onClick: this.showYearPanel,
	        title: locale.yearSelect }, React.createElement('span', { className: prefixClsFn('year-select-content') }, year), React.createElement('span', { className: prefixClsFn('year-select-arrow') }, 'x')), React.createElement('a', { className: prefixClsFn('next-year-btn'),
	        role: 'button',
	        onClick: this.nextYear,
	        title: locale.nextYear }, '»')), React.createElement('div', { className: prefixClsFn('body') }, React.createElement('table', { className: prefixClsFn('table'), cellSpacing: '0', role: 'grid' }, React.createElement('tbody', { className: prefixClsFn('tbody') }, monthsEls)))), yearPanel);
	    }
	  }]);
	
	  return MonthPanel;
	})(React.Component);
	
	MonthPanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	
	module.exports = MonthPanel;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var ROW = 4;
	var COL = 3;
	var cx = __webpack_require__(53).classSet;
	var DecadePanel = __webpack_require__(71);
	var staticPrefixClsFn = __webpack_require__(72);
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({ value: next });
	}
	
	function chooseYear(year) {
	  var next = this.state.value.clone();
	  next.setYear(year);
	  this.props.onSelect(next);
	}
	
	var YearPanel = (function (_React$Component) {
	  function YearPanel(props) {
	    var _this = this;
	
	    _classCallCheck(this, YearPanel);
	
	    _get(Object.getPrototypeOf(YearPanel.prototype), 'constructor', this).call(this, props);
	    this.prefixClsFn = staticPrefixClsFn.bind(this);
	    this.state = {
	      value: props.value,
	      prefixCls: props.rootPrefixCls + '-year-panel'
	    };
	    this.nextDecade = goYear.bind(this, 10);
	    this.previousDecade = goYear.bind(this, -10);
	    ['showDecadePanel', 'onDecadePanelSelect'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(YearPanel, _React$Component);
	
	  _createClass(YearPanel, [{
	    key: 'showDecadePanel',
	    value: function showDecadePanel() {
	      this.setState({
	        showDecadePanel: 1
	      });
	    }
	  }, {
	    key: 'onDecadePanelSelect',
	    value: function onDecadePanelSelect(current) {
	      this.setState({
	        value: current,
	        showDecadePanel: 0
	      });
	    }
	  }, {
	    key: 'getYears',
	    value: function getYears() {
	      var value = this.state.value;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var previousYear = startYear - 1;
	      var endYear = startYear + 9;
	      var years = [];
	      var index = 0;
	      for (var i = 0; i < ROW; i++) {
	        years[i] = [];
	        for (var j = 0; j < COL; j++) {
	          var year = previousYear + index;
	          var content;
	          if (year < startYear) {
	            content = '';
	          } else if (year > endYear) {
	            content = '';
	          } else {
	
	            content = year + '';
	          }
	          years[i][j] = {
	            content: content,
	            year: year,
	            title: content
	          };
	          index++;
	        }
	      }
	      return years;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var locale = props.locale;
	      var years = this.getYears();
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var endYear = startYear + 9;
	      var prefixClsFn = this.prefixClsFn;
	
	      var yeasEls = years.map(function (row, index) {
	        var tds = row.map(function (y) {
	          var classNameMap = {};
	          classNameMap[prefixClsFn('cell')] = 1;
	          classNameMap[prefixClsFn('selected-cell')] = y.year === currentYear;
	          classNameMap[prefixClsFn('last-decade-cell')] = y.year < startYear;
	          classNameMap[prefixClsFn('next-decade-cell')] = y.year > endYear;
	          var clickHandler;
	          if (y.year < startYear) {
	            clickHandler = _this2.previousDecade;
	          } else if (y.year > endYear) {
	            clickHandler = _this2.nextDecade;
	          } else {
	            clickHandler = chooseYear.bind(_this2, y.year);
	          }
	          return React.createElement('td', { role: 'gridcell',
	            title: y.title,
	            key: y.content,
	            onClick: clickHandler,
	            className: cx(classNameMap)
	          }, React.createElement('a', {
	            className: prefixClsFn('year') }, y.content));
	        });
	        return React.createElement('tr', { key: index, role: 'row' }, tds);
	      });
	
	      var decadePanel;
	      if (this.state.showDecadePanel) {
	        decadePanel = React.createElement(DecadePanel, { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls, onSelect: this.onDecadePanelSelect });
	      }
	
	      return React.createElement('div', { className: this.state.prefixCls }, React.createElement('div', null, React.createElement('div', { className: prefixClsFn('header') }, React.createElement('a', { className: prefixClsFn('prev-decade-btn'),
	        role: 'button',
	        onClick: this.previousDecade,
	        title: locale.previousDecade }, '«'), React.createElement('a', { className: prefixClsFn('decade-select'),
	        role: 'button',
	        onClick: this.showDecadePanel,
	        title: locale.decadeSelect }, React.createElement('span', { className: prefixClsFn('decade-select-content') }, startYear, '-', endYear), React.createElement('span', { className: prefixClsFn('decade-select-arrow') }, 'x')), React.createElement('a', { className: prefixClsFn('next-decade-btn'),
	        role: 'button',
	        onClick: this.nextDecade,
	        title: locale.nextDecade }, '»')), React.createElement('div', { className: prefixClsFn('body') }, React.createElement('table', { className: prefixClsFn('table'), cellSpacing: '0', role: 'grid' }, React.createElement('tbody', { className: prefixClsFn('tbody') }, yeasEls)))), decadePanel);
	    }
	  }]);
	
	  return YearPanel;
	})(React.Component);
	
	YearPanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	
	module.exports = YearPanel;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var ROW = 4;
	var COL = 3;
	var cx = __webpack_require__(53).classSet;
	var staticPrefixClsFn = __webpack_require__(72);
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({
	    value: next
	  });
	}
	
	function chooseDecade(year, e) {
	  var next = this.state.value.clone();
	  next.setYear(year);
	  this.props.onSelect(next);
	  e.preventDefault();
	}
	
	var DecadePanel = (function (_React$Component) {
	  function DecadePanel(props) {
	    _classCallCheck(this, DecadePanel);
	
	    _get(Object.getPrototypeOf(DecadePanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: props.value,
	      prefixCls: props.rootPrefixCls + '-decade-panel'
	    };
	
	    // bind methods
	    this.prefixClsFn = staticPrefixClsFn.bind(this);
	    this.nextCentury = goYear.bind(this, 100);
	    this.previousCentury = goYear.bind(this, -100);
	  }
	
	  _inherits(DecadePanel, _React$Component);
	
	  _createClass(DecadePanel, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.state.value;
	      var locale = this.props.locale;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 100, 10) * 100;
	      var preYear = startYear - 10;
	      var endYear = startYear + 99;
	      var decades = [];
	      var index = 0;
	      var prefixClsFn = this.prefixClsFn;
	
	      for (var i = 0; i < ROW; i++) {
	        decades[i] = [];
	        for (var j = 0; j < COL; j++) {
	          var startDecade = preYear + index * 10;
	          var endDecade = preYear + index * 10 + 9;
	          decades[i][j] = {
	            startDecade: startDecade,
	            endDecade: endDecade
	          };
	          index++;
	        }
	      }
	
	      var decadesEls = decades.map(function (row, decadeIndex) {
	        var tds = row.map(function (d) {
	          var dStartDecade = d.startDecade;
	          var dEndDecade = d.endDecade;
	          var classNameMap = {};
	          classNameMap[prefixClsFn('cell')] = 1;
	          classNameMap[prefixClsFn('selected-cell')] = dStartDecade <= currentYear && currentYear <= dEndDecade;
	          var isLast = dStartDecade < startYear;
	          var isNext = dEndDecade > endYear;
	          classNameMap[prefixClsFn('last-century-cell')] = isLast;
	          classNameMap[prefixClsFn('next-century-cell')] = isNext;
	          var content;
	          var clickHandler;
	          if (isLast) {
	            clickHandler = _this.previousCentury;
	          } else if (isNext) {
	            clickHandler = _this.nextCentury;
	          } else {
	            content = dStartDecade + '-' + dEndDecade;
	            clickHandler = chooseDecade.bind(_this, dStartDecade);
	          }
	          return React.createElement('td', {
	            key: dStartDecade,
	            onClick: clickHandler,
	            role: 'gridcell',
	            className: cx(classNameMap)
	          }, React.createElement('a', {
	            className: prefixClsFn('decade') }, content));
	        });
	        return React.createElement('tr', { key: decadeIndex, role: 'row' }, tds);
	      });
	
	      return React.createElement('div', { className: this.state.prefixCls }, React.createElement('div', { className: prefixClsFn('header') }, React.createElement('a', { className: prefixClsFn('prev-century-btn'),
	        role: 'button',
	        onClick: this.previousCentury,
	        title: locale.previousCentury }, '«'), React.createElement('div', { className: prefixClsFn('century') }, startYear, '-', endYear), React.createElement('a', { className: prefixClsFn('next-century-btn'),
	        role: 'button',
	        onClick: this.nextCentury,
	        title: locale.nextCentury }, '»')), React.createElement('div', { className: prefixClsFn('body') }, React.createElement('table', { className: prefixClsFn('table'), cellSpacing: '0', role: 'grid' }, React.createElement('tbody', { className: prefixClsFn('tbody') }, decadesEls))));
	    }
	  }]);
	
	  return DecadePanel;
	})(React.Component);
	
	DecadePanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	
	module.exports = DecadePanel;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
	  var prefixCls = this.state.prefixCls;
	  if (arguments.length === 0) {
	    return prefixCls;
	  }
	  var args = Array.prototype.slice.call(arguments, 0);
	  return args.map(function (s) {
	    return prefixCls + '-' + s;
	  }).join(' ');
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var Time = __webpack_require__(74);
	
	var CalendarFooter = (function (_React$Component) {
	  function CalendarFooter() {
	    _classCallCheck(this, CalendarFooter);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(CalendarFooter, _React$Component);
	
	  _createClass(CalendarFooter, [{
	    key: 'getTodayTime',
	    value: function getTodayTime() {
	      var value = this.props.value;
	      var today = value.clone();
	      today.setTime(Date.now());
	      return this.props.dateFormatter.format(today);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var value = props.value;
	      var locale = props.locale;
	      var prefixClsFn = props.prefixClsFn;
	      var footerEl;
	      if (props.showToday || props.showTime) {
	        var todayEl;
	        if (props.showToday) {
	          todayEl = React.createElement('a', { className: prefixClsFn('today-btn'),
	            role: 'button',
	            onClick: props.chooseToday,
	            title: this.getTodayTime() }, locale.today);
	        }
	        var clearEl;
	        if (props.showClear) {
	          clearEl = React.createElement('a', { className: prefixClsFn('clear-btn'),
	            role: 'button',
	            onClick: props.clear }, locale.clear);
	        }
	        var footerBtn;
	        if (todayEl || clearEl) {
	          footerBtn = React.createElement('div', { className: prefixClsFn('footer-btn') }, todayEl, ' ', clearEl);
	        }
	        var timeEl;
	        if (props.showTime) {
	          timeEl = React.createElement(Time, { value: value, prefixClsFn: prefixClsFn, locale: locale, onChange: props.handleSelect });
	        }
	        footerEl = React.createElement('div', { className: prefixClsFn('footer') }, timeEl, footerBtn);
	      }
	
	      return footerEl;
	    }
	  }]);
	
	  return CalendarFooter;
	})(React.Component);
	
	module.exports = CalendarFooter;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var rcUtil = __webpack_require__(53);
	var KeyCode = rcUtil.KeyCode;
	var TimePanel = __webpack_require__(75);
	var setHourOfDay = 'setHourOfDay';
	var setMinutes = 'setMinutes';
	var setSeconds = 'setSeconds';
	
	function padding(number) {
	  if (number < 10) {
	    number = '0' + number;
	  }
	  return number;
	}
	
	function loop(value, min, max) {
	  if (value === min - 1) {
	    value = max;
	  } else if (value === max + 1) {
	    value = min;
	  }
	  return value;
	}
	
	function keyDownWrap(method, min, max) {
	  return function (e) {
	    var value = e.target.value;
	    var number = parseInt(value, 10);
	    var keyCode = e.keyCode;
	    var handled;
	    if (keyCode === KeyCode.DOWN) {
	      number++;
	      e.stopPropagation();
	      e.preventDefault();
	      handled = 1;
	    } else if (keyCode === KeyCode.UP) {
	      number--;
	      e.stopPropagation();
	      e.preventDefault();
	      handled = 1;
	    }
	    if (handled) {
	      number = loop(number, min, max);
	      var time = this.props.value.clone();
	      time[method](number);
	      this.props.onChange(time, e);
	    }
	  };
	}
	
	var Time = (function (_React$Component) {
	  function Time(props) {
	    var _this = this;
	
	    _classCallCheck(this, Time);
	
	    _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      showHourPanel: 0,
	      showMinutePanel: 0,
	      showSecondPanel: 0
	    };
	    var events = ['onHourKeyDown', 'onMinuteKeyDown', 'onSecondKeyDown', 'onHourClick', 'onMinuteClick', 'onSecondClick', 'onSelectPanel'];
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(Time, _React$Component);
	
	  _createClass(Time, [{
	    key: 'onSelectPanel',
	    value: function onSelectPanel(value, setter) {
	      var _this2 = this;
	
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 0,
	        showSecondPanel: 0
	      }, function () {
	        // ie9 has broken focus
	        React.findDOMNode(_this2.refs[setter]).focus();
	      });
	      this.props.onChange(value);
	    }
	  }, {
	    key: 'onHourClick',
	    value: function onHourClick() {
	      this.setState({
	        showHourPanel: 1,
	        showMinutePanel: 0,
	        showSecondPanel: 0
	      });
	    }
	  }, {
	    key: 'onMinuteClick',
	    value: function onMinuteClick() {
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 1,
	        showSecondPanel: 0
	      });
	    }
	  }, {
	    key: 'onSecondClick',
	    value: function onSecondClick() {
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 0,
	        showSecondPanel: 1
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return rcUtil.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state;
	      var props = this.props;
	      var prefixClsFn = props.prefixClsFn;
	      var value = props.value;
	      var locale = props.locale;
	      var hour = value.getHourOfDay();
	      var minute = value.getMinutes();
	      var second = value.getSeconds();
	      var panel;
	      var commonProps = {
	        value: value,
	        onSelect: this.onSelectPanel,
	        rootPrefixCls: prefixClsFn()
	      };
	      if (state.showHourPanel) {
	        panel = React.createElement(TimePanel, _extends({ rowCount: 6, colCount: 4, getter: 'getHourOfDay', setter: setHourOfDay,
	          title: locale.hourPanelTitle
	        }, commonProps));
	      } else if (state.showMinutePanel) {
	        panel = React.createElement(TimePanel, _extends({ rowCount: 6, colCount: 10, getter: 'getMinutes', setter: setMinutes,
	          title: locale.minutePanelTitle
	        }, commonProps));
	      } else if (state.showSecondPanel) {
	        panel = React.createElement(TimePanel, _extends({ rowCount: 6, colCount: 10, getter: 'getSeconds', setter: setSeconds,
	          title: locale.secondPanelTitle
	        }, commonProps));
	      }
	      return React.createElement('div', null, React.createElement('input', { className: prefixClsFn('time-input'), title: locale.hourInput,
	        ref: setHourOfDay,
	        readOnly: true, value: padding(hour),
	        onClick: this.onHourClick,
	        onKeyDown: this.onHourKeyDown }), React.createElement('span', null, ' : '), React.createElement('input', { className: prefixClsFn('time-input'), title: locale.minuteInput,
	        ref: setMinutes,
	        readOnly: true, value: padding(minute),
	        onClick: this.onMinuteClick,
	        onKeyDown: this.onMinuteKeyDown }), React.createElement('span', null, ' : '), React.createElement('input', { className: prefixClsFn('time-input'), title: locale.secondInput,
	        ref: setSeconds,
	        readOnly: true, value: padding(second),
	        onClick: this.onSecondClick,
	        onKeyDown: this.onSecondKeyDown }), panel);
	    }
	  }]);
	
	  return Time;
	})(React.Component);
	
	Time.prototype.onHourKeyDown = keyDownWrap('setHourOfDay', 0, 23);
	Time.prototype.onMinuteKeyDown = keyDownWrap('setMinutes', 0, 59);
	Time.prototype.onSecondKeyDown = keyDownWrap('setSeconds', 0, 59);
	
	module.exports = Time;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var cx = __webpack_require__(53).classSet;
	var staticPrefixClsFn = __webpack_require__(72);
	
	function choose(hour, e) {
	  var next = this.state.value.clone();
	  var method = this.props.setter;
	  next[method](hour);
	  this.props.onSelect(next, method);
	  e.preventDefault();
	}
	
	var TimePanel = (function (_React$Component) {
	  function TimePanel(props) {
	    _classCallCheck(this, TimePanel);
	
	    _get(Object.getPrototypeOf(TimePanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: props.value,
	      prefixCls: props.rootPrefixCls + '-time-panel'
	    };
	    this.prefixClsFn = staticPrefixClsFn.bind(this);
	  }
	
	  _inherits(TimePanel, _React$Component);
	
	  _createClass(TimePanel, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.state.value;
	      var props = this.props;
	      var method = props.getter;
	      var currentHour = value[method]();
	      var data = [];
	      var prefixClsFn = this.prefixClsFn;
	      var ROW = props.rowCount;
	      var COL = props.colCount;
	
	      for (var i = 0; i < ROW; i++) {
	        data[i] = [];
	        for (var j = 0; j < COL; j++) {
	          data[i][j] = i * COL + j;
	        }
	      }
	
	      var hoursEls = data.map(function (row, index) {
	        var tds = row.map(function (d) {
	          var classNameMap = {};
	          classNameMap[prefixClsFn('cell')] = 1;
	          classNameMap[prefixClsFn('selected-cell')] = d === currentHour;
	          return React.createElement('td', {
	            key: d,
	            onClick: choose.bind(_this, d),
	            role: 'gridcell',
	            className: cx(classNameMap) }, React.createElement('a', {
	            className: prefixClsFn('time') }, d));
	        });
	        return React.createElement('tr', { key: index, role: 'row' }, tds);
	      });
	
	      return React.createElement('div', { className: this.state.prefixCls }, React.createElement('div', { className: prefixClsFn('header') }, React.createElement('div', { className: prefixClsFn('title') }, props.title)), React.createElement('div', { className: prefixClsFn('body') }, React.createElement('table', { className: prefixClsFn('table'), cellSpacing: '0', role: 'grid' }, React.createElement('tbody', { className: prefixClsFn('tbody') }, hoursEls))));
	    }
	  }]);
	
	  return TimePanel;
	})(React.Component);
	
	TimePanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	
	module.exports = TimePanel;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  today: 'Today',
	  clear: 'Clear',
	  hourPanelTitle: 'Select hour',
	  minutePanelTitle: 'Select minute',
	  secondPanelTitle: 'Select second',
	  monthSelect: 'Choose a month',
	  yearSelect: 'Choose a year',
	  decadeSelect: 'Choose a decade',
	  yearFormat: 'yyyy',
	  dateFormat: 'M/d/yyyy',
	  monthYearFormat: 'MMMM yyyy',
	  previousMonth: 'Previous month (PageUp)',
	  nextMonth: 'Next month (PageDown)',
	  hourInput: 'Last hour(Up), Next hour(Down)',
	  minuteInput: 'Last minute(Up), Next minute(Down)',
	  secondInput: 'Last second(Up), Next second(Down)',
	  previousYear: 'Last year (Control + left)',
	  nextYear: 'Next year (Control + right)',
	  previousDecade: 'Last decade',
	  nextDecade: 'Next decade',
	  previousCentury: 'Last century',
	  nextCentury: 'Next century',
	  format: __webpack_require__(52)
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var DateTimeFormat = __webpack_require__(45);
	var rcUtil = __webpack_require__(53);
	var KeyCode = rcUtil.KeyCode;
	var domAlign = __webpack_require__(78);
	var orientMap = {
	  tl: ['top', 'left'],
	  tr: ['top', 'right'],
	  bl: ['bottom', 'left'],
	  br: ['bottom', 'right']
	};
	
	function getImmutableOrient(orient) {
	  if (orient) {
	    for (var i in orientMap) {
	      var original = orientMap[i];
	      if (original[0] === orient[0] && original[1] === orient[1]) {
	        return original;
	      }
	    }
	  }
	}
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	function getContainerClassName(prefixCls, open) {
	  var ret = [prefixCls + '-container'];
	  if (open) {
	    ret.push(prefixCls + '-container-open');
	  }
	  return ret.join(' ');
	}
	/**
	 * DatePicker = wrap input using Calendar
	 */
	
	var Picker = (function (_React$Component) {
	  function Picker(props) {
	    var _this = this;
	
	    _classCallCheck(this, Picker);
	
	    _get(Object.getPrototypeOf(Picker.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      open: props.open,
	      value: props.value || props.defaultValue
	    };
	    var events = ['handleInputClick', 'handleCalendarBlur', 'handleTriggerClick', 'handleCalendarClear', 'handleCalendarKeyDown', 'handleKeyDown', 'handleCalendarSelect'];
	    // bind methods
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
	    this.saveInputRef = refFn.bind(this, 'inputInstance');
	  }
	
	  _inherits(Picker, _React$Component);
	
	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var value = nextProps.value;
	      if (value !== undefined) {
	        // null special meaning
	        value = value || nextProps.defaultValue || null;
	        this.setState({
	          value: value
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.calendarContainer) {
	        React.unmountComponentAtNode(this.calendarContainer);
	        this.calendarContainer.parentNode.removeChild(this.calendarContainer);
	        this.calendarContainer = null;
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;
	
	      prevState = prevState || {};
	      var prefixCls = this.props.prefixCls;
	      if (this.props.renderCalendarToBody && !this.state.open && prevState.open) {
	        this.getCalendarContainer().className = getContainerClassName(prefixCls);
	      }
	      if (this.state.open && !prevState.open) {
	        if (this.props.renderCalendarToBody) {
	          this.getCalendarContainer().className = getContainerClassName(prefixCls, true);
	          React.render(this.getCalendarElement(), this.getCalendarContainer(), function () {
	            _this2.alignCalendar();
	          });
	        } else {
	          this.alignCalendar();
	        }
	      }
	    }
	  }, {
	    key: 'getCalendarContainer',
	    value: function getCalendarContainer() {
	      if (!this.calendarContainer) {
	        this.calendarContainer = document.createElement('div');
	        document.body.appendChild(this.calendarContainer);
	      }
	      return this.calendarContainer;
	    }
	  }, {
	    key: 'alignCalendar',
	    value: function alignCalendar() {
	      var orient = this.calendarElement.props.orient;
	      var points = ['tl', 'bl'];
	      var offset = [0, 5];
	      if (orient.indexOf('top') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['tl', 'bl'];
	      } else if (orient.indexOf('top') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['tr', 'br'];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['bl', 'tl'];
	        offset = [0, -5];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['br', 'tr'];
	        offset = [0, -5];
	      }
	
	      var align = domAlign(React.findDOMNode(this.calendarInstance), React.findDOMNode(this.inputInstance), {
	        points: points,
	        offset: offset,
	        overflow: {
	          adjustX: 1,
	          adjustY: 1
	        }
	      });
	      points = align.points;
	      var newOrient = orientMap[points[0]];
	      this.calendarInstance.setState({
	        orient: newOrient
	      });
	      React.findDOMNode(this.calendarInstance).focus();
	    }
	  }, {
	    key: 'open',
	    value: function open(callback) {
	      this.setState({
	        open: true
	      }, callback);
	    }
	  }, {
	    key: 'close',
	    value: function close(callback) {
	      this.setState({
	        open: false
	      }, callback);
	    }
	  }, {
	    key: 'handleInputClick',
	    value: function handleInputClick() {
	      this.toggle();
	    }
	  }, {
	    key: 'handleTriggerClick',
	    value: function handleTriggerClick() {
	      this.toggle();
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(callback) {
	      this.setState({
	        open: !this.state.open
	      }, callback);
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      // down
	      if (e.keyCode === KeyCode.DOWN) {
	        e.preventDefault();
	        this.open();
	      }
	    }
	  }, {
	    key: 'handleCalendarKeyDown',
	    value: function handleCalendarKeyDown(e) {
	      var _this3 = this;
	
	      if (e.keyCode === KeyCode.ESC) {
	        e.stopPropagation();
	        this.close(function () {
	          React.findDOMNode(_this3.inputInstance).focus();
	        });
	      }
	    }
	  }, {
	    key: 'handleCalendarSelect',
	    value: function handleCalendarSelect(value) {
	      var _this4 = this;
	
	      this.props.calendar.props.onSelect(value);
	      var currentValue = this.state.value;
	      if (this.props.calendar.props.showTime) {
	        this.setState({
	          value: value
	        });
	      } else {
	        this.setState({
	          value: value,
	          open: false
	        }, function () {
	          React.findDOMNode(_this4.inputInstance).focus();
	        });
	      }
	      if (!currentValue || currentValue.getTime() !== value.getTime()) {
	        this.props.onChange(value);
	      }
	    }
	  }, {
	    key: 'handleCalendarBlur',
	    value: function handleCalendarBlur() {
	      // if invisible, will not trigger blur
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'handleCalendarClear',
	    value: function handleCalendarClear() {
	      var _this5 = this;
	
	      this.props.calendar.props.onClear();
	      this.setState({
	        open: false,
	        value: null
	      }, function () {
	        React.findDOMNode(_this5.inputInstance).focus();
	      });
	      if (this.state.value !== null) {
	        this.props.onChange(null);
	      }
	    }
	  }, {
	    key: 'getCalendarElement',
	    value: function getCalendarElement() {
	      var props = this.props;
	      var calendarInstance = this.calendarInstance;
	      var calendarProp = props.calendar;
	      this.calendarElement = React.cloneElement(calendarProp, {
	        ref: rcUtil.createChainedFunction(calendarProp.props.ref, this.saveCalendarRef),
	        value: this.state.value,
	        // focused: true,
	        orient: calendarInstance && calendarInstance.state.orient || getImmutableOrient(calendarProp.props.orient) || orientMap.tl,
	        onBlur: this.handleCalendarBlur,
	        onKeyDown: this.handleCalendarKeyDown,
	        onSelect: this.handleCalendarSelect,
	        onClear: this.handleCalendarClear
	      });
	      return this.calendarElement;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var renderCalendarToBody = props.renderCalendarToBody;
	      // var input = React.Children.only(props.children); bug 0.13.0
	      /*
	       children: Object
	       .0: (...)
	       get .0: function () {
	       set .0: function (value) {
	       _reactDidWarn: false
	       _reactFragment: Object
	       __proto__: Object
	       */
	      var input = props.children;
	      if (!React.isValidElement(input)) {
	        var children = input;
	        React.Children.forEach(children, function (m) {
	          input = m;
	        });
	      }
	      var state = this.state;
	      var value = state.value;
	      var calendar;
	      if (!renderCalendarToBody) {
	        calendar = state.open ? this.getCalendarElement() : this.calendarElement;
	      }
	      var inputValue = '';
	      if (value) {
	        inputValue = props.formatter.format(value);
	      }
	      input = React.cloneElement(input, {
	        ref: rcUtil.createChainedFunction(input.props.ref, this.saveInputRef),
	        readOnly: true,
	        onClick: this.handleInputClick,
	        value: inputValue,
	        onKeyDown: this.handleKeyDown
	      });
	      var classes = [props.prefixCls];
	      if (state.open) {
	        classes.push(props.prefixCls + '-open');
	      }
	      var trigger = props.trigger;
	      if (trigger) {
	        trigger = React.cloneElement(trigger, {
	          onClick: this.handleTriggerClick,
	          unselectable: true,
	          onMouseDown: prevent
	        });
	      }
	      return React.createElement('span', { className: classes.join(' ') }, [input, calendar, trigger]);
	    }
	  }]);
	
	  return Picker;
	})(React.Component);
	
	function prevent(e) {
	  e.preventDefault();
	}
	
	Picker.propTypes = {
	  onChange: React.PropTypes.func,
	  renderCalendarToBody: React.PropTypes.bool
	};
	
	Picker.defaultProps = {
	  prefixCls: 'rc-calendar-picker',
	  renderCalendarToBody: false,
	  onChange: function onChange() {},
	  formatter: new DateTimeFormat('yyyy-MM-dd')
	};
	
	module.exports = Picker;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var utils = __webpack_require__(79);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0),
	      H = align.charAt(1),
	      w = region.width,
	      h = region.height,
	      x,
	      y;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument,
	      body = doc.body,
	      parent,
	      positionStyle = utils.css(element, 'position'),
	      skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  },
	      el = element,
	      scrollX,
	      scrollY,
	      winSize,
	      doc = element.ownerDocument,
	      win = doc.defaultView || doc.parentWindow,
	      body = doc.body,
	      documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible')) {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = utils.getWindowScrollLeft(win);
	  scrollY = utils.getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: utils.viewportWidth(win),
	    height: utils.viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy, diff, p1, p2;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos),
	      size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset, w, h;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	module.exports = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	// body may have overflow set on it, yet we still get the entire
	// viewport. In some browsers, el.offsetParent may be
	// document.documentElement, so check for that too.

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	    CURRENT_STYLE = 'currentStyle',
	    RUNTIME_STYLE = 'runtimeStyle',
	    LEFT = 'left',
	    PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	        left = style[LEFT],
	        rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	      ret = {},
	      current,
	      key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	    CONTENT_INDEX = -1,
	    PADDING_INDEX = 2,
	    BORDER_INDEX = 1,
	    MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	      style = elem.style,
	      name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0,
	      prop,
	      j,
	      i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*eslint eqeqeq:0*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    //firefox chrome documentElement.scrollHeight< body.scrollHeight
	    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	        doc = win.document,
	        body = doc.body,
	        documentElement = doc.documentElement,
	        documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	  }
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val,
	      args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	    for (i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  today: '今天',
	  clear: '清除',
	  previousMonth: '上个月 (翻页上键)',
	  nextMonth: '下个月 (翻页下键)',
	  monthSelect: '选择月份',
	  yearSelect: '选择年份',
	  decadeSelect: '选择年代',
	  hourInput: '上一小时(上方向键), 下一小时(下方向键)',
	  minuteInput: '上一分钟(上方向键), 下一分钟(下方向键)',
	  secondInput: '上一秒(上方向键), 下一小时(下方向键)',
	  hourPanelTitle: '选择小时',
	  minutePanelTitle: '选择分钟',
	  secondPanelTitle: '选择秒',
	  yearFormat: 'yyyy\'年\'',
	  monthYearFormat: 'yyyy\'年\'M\'月\'',
	  dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
	  previousYear: '上一年 (Control键加左方向键)',
	  nextYear: '下一年 (Control键加右方向键)',
	  previousDecade: '上一年代',
	  nextDecade: '下一年代',
	  previousCentury: '上一世纪',
	  nextCentury: '下一世纪',
	  format: __webpack_require__(81)
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	'use strict';
	
	module.exports = {
	  eras: ['公元前', '公元'],
	  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	  shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	  veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
	  ampms: ['上午', '下午'],
	  /*jshint quotmark: false*/
	  datePatterns: ['yyyy\'年\'M\'月\'d\'日\' EEEE', 'yyyy\'年\'M\'月\'d\'日\'', 'yyyy-M-d', 'yy-M-d'],
	  timePatterns: ['ahh\'时\'mm\'分\'ss\'秒\' \'GMT\'Z', 'ahh\'时\'mm\'分\'ss\'秒\'', 'H:mm:ss', 'ah:mm'],
	  dateTimePattern: '{date} {time}'
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	var Tooltip = __webpack_require__(83);
	__webpack_require__(106);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  getInitialState: function getInitialState() {
	    var state = {};
	    state.placement = this.props.placement;
	    state.title = this.props.title;
	    return state;
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'top'
	    };
	  },
	  render: function render() {
	    return React.createElement(
	      Tooltip,
	      { placement: this.state.placement,
	        trigger: 'hover',
	        overlay: this.state.title },
	      this.props.children
	    );
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(84);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	/**
	 * @author yiminghe@gmail.com
	 */
	var React = __webpack_require__(42);
	var rcUtil = __webpack_require__(85);
	var createChainedFunction = rcUtil.createChainedFunction;
	var domAlign = __webpack_require__(96);
	var Popup = __webpack_require__(98);
	var utils = __webpack_require__(105);
	
	var Tooltip = (function (_React$Component) {
	  function Tooltip(props) {
	    var _this = this;
	
	    _classCallCheck(this, Tooltip);
	
	    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      visible: !!props.defaultVisible
	    };
	    if ('visible' in props) {
	      this.state.visible = !!props.visible;
	    }
	    ['toggle', 'show', 'hide'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(Tooltip, _React$Component);
	
	  _createClass(Tooltip, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('visible' in nextProps) {
	        this.setState({
	          visible: !!nextProps.visible
	        });
	      }
	    }
	  }, {
	    key: 'getTipContainer',
	    value: function getTipContainer() {
	      if (!this.tipContainer) {
	        this.tipContainer = document.createElement('div');
	        document.body.appendChild(this.tipContainer);
	      }
	      return this.tipContainer;
	    }
	  }, {
	    key: 'renderToolTip',
	    value: function renderToolTip(callback) {
	      var props = this.props;
	      var state = this.state;
	      React.render(React.createElement(Popup, { prefixCls: props.prefixCls,
	        visible: state.visible,
	        placement: props.placement,
	        transitionName: props.transitionName }, props.overlay), this.getTipContainer(), function () {
	        callback(this);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      if (this.state.visible) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible(visible) {
	      var _this2 = this;
	
	      this.setState({
	        visible: visible
	      }, function () {
	        _this2.props.onVisibleChange(_this2.state.visible);
	      });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.setVisible(true);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.setVisible(false);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _this3 = this;
	
	      var state = this.state;
	      this.renderToolTip(function (tooltip) {
	        if (state.visible) {
	          var rootNode = React.findDOMNode(_this3);
	          var tipNode = tooltip.getRootNode();
	          var placement = _this3.props.placement;
	          var points;
	          if (placement && placement.points) {
	            var props = _this3.props;
	            var align = domAlign(tipNode, rootNode, placement);
	            tipNode.className = utils.getToolTipClassByPlacement(props.prefixCls, align);
	          } else {
	            points = ['cr', 'cl'];
	            if (placement === 'right') {
	              points = ['cl', 'cr'];
	            } else if (placement === 'top') {
	              points = ['bc', 'tc'];
	            } else if (placement === 'bottom') {
	              points = ['tc', 'bc'];
	            }
	            domAlign(tipNode, rootNode, {
	              points: points
	            });
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var children = props.children;
	      var child = React.Children.only(children);
	      var childProps = child.props || {};
	      var newChildProps = {};
	      var trigger = props.trigger;
	      if (trigger.indexOf('click') !== -1) {
	        newChildProps.onClick = createChainedFunction(this.toggle, childProps.onClick);
	      }
	      if (trigger.indexOf('hover') !== -1) {
	        newChildProps.onMouseEnter = createChainedFunction(this.show, childProps.onMouseEnter);
	        newChildProps.onMouseLeave = createChainedFunction(this.hide, childProps.onMouseLeave);
	      }
	      if (trigger.indexOf('focus') !== -1) {
	        newChildProps.onFocus = createChainedFunction(this.show, childProps.onFocus);
	        newChildProps.onBlur = createChainedFunction(this.hide, childProps.onBlur);
	      }
	      return React.cloneElement(child, newChildProps);
	    }
	  }]);
	
	  return Tooltip;
	})(React.Component);
	
	Tooltip.propTypes = {
	  trigger: React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus'])),
	  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	  onVisibleChange: React.PropTypes.func,
	  overlay: React.PropTypes.node.isRequired
	};
	
	Tooltip.defaultProps = {
	  prefixCls: 'rc-tooltip',
	  onVisibleChange: function onVisibleChange() {},
	  placement: 'right',
	  trigger: ['hover']
	};
	
	module.exports = Tooltip;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(87),
	  classSet: __webpack_require__(88),
	  joinClasses: __webpack_require__(89),
	  KeyCode: __webpack_require__(90),
	  PureRenderMixin: __webpack_require__(91),
	  shallowEqual: __webpack_require__(86),
	  createChainedFunction: __webpack_require__(92),
	  Dom: {
	    addEventListener: __webpack_require__(93),
	    contains: __webpack_require__(94)
	  },
	  Children: {
	    toArray: __webpack_require__(95)
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	'use strict';
	
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(86);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var utils = __webpack_require__(97);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0),
	      H = align.charAt(1),
	      w = region.width,
	      h = region.height,
	      x,
	      y;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument,
	      body = doc.body,
	      parent,
	      positionStyle = utils.css(element, 'position'),
	      skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  },
	      el = element,
	      scrollX,
	      scrollY,
	      winSize,
	      doc = element.ownerDocument,
	      win = doc.defaultView || doc.parentWindow,
	      body = doc.body,
	      documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible')) {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = utils.getWindowScrollLeft(win);
	  scrollY = utils.getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: utils.viewportWidth(win),
	    height: utils.viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy, diff, p1, p2;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos),
	      size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset, w, h;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	module.exports = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	// body may have overflow set on it, yet we still get the entire
	// viewport. In some browsers, el.offsetParent may be
	// document.documentElement, so check for that too.

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	    CURRENT_STYLE = 'currentStyle',
	    RUNTIME_STYLE = 'runtimeStyle',
	    LEFT = 'left',
	    PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	        left = style[LEFT],
	        rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	      ret = {},
	      current,
	      key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	    CONTENT_INDEX = -1,
	    PADDING_INDEX = 2,
	    BORDER_INDEX = 1,
	    MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	      style = elem.style,
	      name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0,
	      prop,
	      j,
	      i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*eslint eqeqeq:0*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    //firefox chrome documentElement.scrollHeight< body.scrollHeight
	    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	        doc = win.document,
	        body = doc.body,
	        documentElement = doc.documentElement,
	        documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	  }
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val,
	      args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	    for (i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	/**
	 * @author yiminghe@gmail.com
	 */
	
	var React = __webpack_require__(42);
	var CSSTransitionGroup = __webpack_require__(99);
	var utils = __webpack_require__(105);
	
	var Popup = (function (_React$Component) {
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Popup, _React$Component);
	
	  _createClass(Popup, [{
	    key: 'getRootNode',
	    value: function getRootNode() {
	      return React.findDOMNode(this.refs.popup);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = utils.getToolTipClassByPlacement(props.prefixCls, props.placement);
	      if (props.className) {
	        className += ' ' + props.className;
	      }
	      var arrowClassName = '' + props.prefixCls + '-arrow';
	      var innerClassname = '' + props.prefixCls + '-inner';
	      var content = props.visible ? [React.createElement('div', { className: className,
	        key: 'popup',
	        ref: 'popup',
	        style: this.style }, React.createElement('div', { className: arrowClassName }), React.createElement('div', { className: innerClassname }, props.children))] : [];
	      if (props.transitionName) {
	        return React.createElement(CSSTransitionGroup, { transitionName: props.transitionName }, content);
	      } else {
	        return content[0] || null;
	      }
	    }
	  }]);
	
	  return Popup;
	})(React.Component);
	
	module.exports = Popup;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(100);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	var ReactTransitionChildMapping = __webpack_require__(101);
	var CSSTransitionGroupChild = __webpack_require__(102);
	
	var CSSTransitionGroup = React.createClass({
	  displayName: 'CSSTransitionGroup',
	
	  protoTypes: {
	    component: React.PropTypes.any,
	    transitionName: React.PropTypes.string.isRequired,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var ret = [];
	    React.Children.forEach(this.props.children, function (c) {
	      ret.push(c);
	    });
	    return {
	      children: ret
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;
	
	    var nextChildMapping = [];
	    var showProp = this.props.showProp;
	    var exclusive = this.props.exclusive;
	
	    React.Children.forEach(nextProps.children, function (c) {
	      nextChildMapping.push(c);
	    });
	
	    // // last props children if exclusive
	    var prevChildMapping = exclusive ? this.props.children : this.state.children;
	
	    var newChildren = ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping);
	
	    if (showProp) {
	      newChildren = newChildren.map(function (c) {
	        if (!c.props[showProp] && ReactTransitionChildMapping.isShownInChildren(prevChildMapping, c, showProp)) {
	          var newProps = {};
	          newProps[showProp] = true;
	          c = React.cloneElement(c, newProps);
	        }
	        return c;
	      });
	    }
	
	    if (exclusive) {
	      // make middle state children invalid
	      // restore to last props children
	      newChildren.forEach(function (c) {
	        _this.stop(c.key);
	      });
	    }
	
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildMapping.forEach(function (c) {
	      var key = c.key;
	      var hasPrev = prevChildMapping && ReactTransitionChildMapping.inChildren(prevChildMapping, c);
	      if (showProp) {
	        if (hasPrev) {
	          var showInPrev = ReactTransitionChildMapping.isShownInChildren(prevChildMapping, c, showProp);
	          var showInNow = c.props[showProp];
	          if (!showInPrev && showInNow && !_this.currentlyTransitioningKeys[key]) {
	            _this.keysToEnter.push(key);
	          }
	        }
	      } else if (!hasPrev && !_this.currentlyTransitioningKeys[key]) {
	        _this.keysToEnter.push(key);
	      }
	    });
	
	    prevChildMapping.forEach(function (c) {
	      var key = c.key;
	      var hasNext = nextChildMapping && ReactTransitionChildMapping.inChildren(nextChildMapping, c);
	      if (showProp) {
	        if (hasNext) {
	          var showInNext = ReactTransitionChildMapping.isShownInChildren(nextChildMapping, c, showProp);
	          var showInNow = c.props[showProp];
	          if (!showInNext && showInNow && !_this.currentlyTransitioningKeys[key]) {
	            _this.keysToLeave.push(key);
	          }
	        }
	      } else if (!hasNext && !_this.currentlyTransitioningKeys[key]) {
	        _this.keysToLeave.push(key);
	      }
	    });
	  },
	
	  performEnter: function performEnter(key) {
	    this.currentlyTransitioningKeys[key] = true;
	    var component = this.refs[key];
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function _handleDoneEntering(key) {
	    //console.log('_handleDoneEntering, ', key);
	    delete this.currentlyTransitioningKeys[key];
	    var currentChildMapping = this.props.children;
	    var showProp = this.props.showProp;
	    if (!currentChildMapping || !showProp && !ReactTransitionChildMapping.inChildrenByKey(currentChildMapping, key) || showProp && !ReactTransitionChildMapping.isShownInChildrenByKey(currentChildMapping, key, showProp)) {
	      // This was removed before it had fully entered. Remove it.
	      //console.log('releave ',key);
	      this.performLeave(key);
	    } else {
	      this.setState({ children: currentChildMapping });
	    }
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyTransitioningKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function _handleDoneLeaving(key) {
	    //console.log('_handleDoneLeaving, ', key);
	    delete this.currentlyTransitioningKeys[key];
	    var showProp = this.props.showProp;
	    var currentChildMapping = this.props.children;
	    if (showProp && currentChildMapping && ReactTransitionChildMapping.isShownInChildrenByKey(currentChildMapping, key, showProp)) {
	      this.performEnter(key);
	    } else if (!showProp && currentChildMapping && ReactTransitionChildMapping.inChildrenByKey(currentChildMapping, key)) {
	      // This entered again before it fully left. Add it again.
	      //console.log('reenter ',key);
	      this.performEnter(key);
	    } else {
	      this.setState({ children: currentChildMapping });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var children = this.state.children.map(function (child) {
	      return React.createElement(CSSTransitionGroupChild, {
	        key: child.key,
	        ref: child.key,
	        name: props.transitionName,
	        enter: props.transitionEnter,
	        leave: props.transitionLeave }, child);
	    });
	    var Component = this.props.component;
	    return React.createElement(Component, this.props, children);
	  }
	});
	module.exports = CSSTransitionGroup;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function inChildren(children, child) {
	  var found = 0;
	  children.forEach(function (c) {
	    if (found) {
	      return;
	    }
	    found = c.key === child.key;
	  });
	  return found;
	}
	
	module.exports = {
	  inChildren: inChildren,
	
	  isShownInChildren: function isShownInChildren(children, child, showProp) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === child.key && c.props[showProp];
	    });
	    return found;
	  },
	
	  inChildrenByKey: function inChildrenByKey(children, key) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === key;
	    });
	    return found;
	  },
	
	  isShownInChildrenByKey: function isShownInChildrenByKey(children, key, showProp) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === key && c.props[showProp];
	    });
	    return found;
	  },
	
	  mergeChildMappings: function mergeChildMappings(prev, next) {
	    var ret = [];
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextChildrenPending = {};
	    var pendingChildren = [];
	    prev.forEach(function (c) {
	      if (inChildren(next, c)) {
	        if (pendingChildren.length) {
	          nextChildrenPending[c.key] = pendingChildren;
	          pendingChildren = [];
	        }
	      } else {
	        pendingChildren.push(c);
	      }
	    });
	
	    next.forEach(function (c) {
	      if (nextChildrenPending.hasOwnProperty(c.key)) {
	        ret = ret.concat(nextChildrenPending[c.key]);
	      }
	      ret.push(c);
	    });
	
	    ret = ret.concat(pendingChildren);
	
	    return ret;
	  }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(42);
	
	var CSSCore = __webpack_require__(103);
	var ReactTransitionEvents = __webpack_require__(104);
	
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	
	    if (this.endListener) {
	      this.endListener();
	    }
	
	    this.endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, _this.endListener);
	      _this.endListener = null;
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    ReactTransitionEvents.addEndEventListener(node, this.endListener);
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	  },
	
	  queueClass: function queueClass(className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  stop: function stop() {
	    //console.log('force stop')
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	      this.classNameQueue.length = 0;
	      this.timeout = null;
	    }
	    if (this.endListener) {
	      this.endListener();
	    }
	  },
	
	  flushClassNameQueue: function flushClassNameQueue() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, this.getDOMNode()));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.classNameQueue = [];
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	var norm = function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, needle) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    needle = needle.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  getToolTipClassByPlacement: function getToolTipClassByPlacement(prefixCls, placement) {
	    if (typeof placement === 'string') {
	      return '' + prefixCls + ' ' + prefixCls + '-placement-' + placement;
	    } else {
	      var offset = placement.offset;
	      var offsetClass;
	      if (offset && offset.length) {
	        offsetClass = '' + prefixCls + '-placement-offset-x-' + offset[0] + ' ' + prefixCls + '-placement-offset-y-' + offset[1];
	      }
	      var points = placement.points;
	      return '' + prefixCls + '\n          ' + offsetClass + '\n          ' + prefixCls + '-placement-points-' + points[0] + '-' + points[1];
	    }
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 107 */,
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	var Dialog = __webpack_require__(109);
	
	function noop() {}
	
	var div;
	
	module.exports = function (props) {
	  props = props || {};
	
	  props.animation = 'zoom';
	  props.maskAnimation = 'fade';
	  props.width = props.width || 500;
	
	  props.onClose = props.onCancel || noop;
	
	  function onCancel() {
	    if (props.onCancel) {
	      props.onCancel();
	    }
	    close();
	  }
	
	  function close() {
	    d.setState({
	      visible: false
	    });
	  }
	
	  function onOk() {
	    var onOk = props.onOk;
	    if (onOk) {
	      onOk(close);
	    } else {
	      close();
	    }
	  }
	
	  var footer = [React.createElement(
	    'button',
	    { type: 'button', className: 'ant-btn-default ant-btn', onClick: onCancel },
	    '取 消'
	  ), React.createElement(
	    'button',
	    { type: 'button', className: 'ant-btn-primary ant-btn', onClick: onOk },
	    '确 定'
	  )];
	  if (!div) {
	    div = document.createElement('div');
	    document.body.appendChild(div);
	  }
	  props.visible = true;
	  props.children = props.content;
	  props.footer = footer;
	  var d;
	  React.render(React.createElement(Dialog, props), div, function () {
	    d = this;
	  });
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(110);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var React = __webpack_require__(42);
	var Dialog = __webpack_require__(111);
	
	function noop() {}
	
	function copy(obj, fields) {
	  var ret = {};
	  fields.forEach(function (f) {
	    if (obj[f] !== undefined) {
	      ret[f] = obj[f];
	    }
	  });
	  return ret;
	}
	
	var DialogWrap = (function (_React$Component) {
	  function DialogWrap(props) {
	    _classCallCheck(this, DialogWrap);
	
	    _get(Object.getPrototypeOf(DialogWrap.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      visible: this.props.visible
	    };
	    this.requestClose = this.requestClose.bind(this);
	  }
	
	  _inherits(DialogWrap, _React$Component);
	
	  _createClass(DialogWrap, [{
	    key: 'getDialogContainer',
	    value: function getDialogContainer() {
	      if (!this.dialogContainer) {
	        this.dialogContainer = document.createElement('div');
	        document.body.appendChild(this.dialogContainer);
	      }
	      return this.dialogContainer;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (this.state.visible !== props.visible) {
	        if (props.visible) {
	          this.show();
	        } else {
	          this.close();
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (!this.state.visible && !nextState.visible) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      if (!this.state.visible) {
	        var props = this.props;
	        this.setState({
	          visible: true
	        }, function () {
	          props.onShow();
	        });
	      }
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      if (this.state.visible) {
	        var props = this.props;
	        this.setState({
	          visible: false
	        }, function () {
	          props.onClose();
	        });
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose() {
	      if (this.props.onBeforeClose(this) !== false) {
	        this.close();
	      }
	    }
	  }, {
	    key: 'renderDialog',
	    value: function renderDialog() {
	      var props = this.props;
	      var dialogProps = copy(props, ['className', 'closable', 'align', 'title', 'footer', 'animation', 'maskAnimation', 'prefixCls', 'style', 'width', 'height', 'zIndex']);
	      var dialogElement = React.createElement(Dialog, _extends({
	        visible: this.state.visible
	      }, dialogProps, {
	        onClose: this.requestClose }), props.children);
	      this.dialogInstance = React.render(dialogElement, this.getDialogContainer());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.componentDidUpdate();
	      if (this.state.visible) {
	        this.props.onShow();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.dialogInstance || this.state.visible) {
	        this.renderDialog();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.dialogContainer) {
	        React.unmountComponentAtNode(this.getDialogContainer());
	      }
	    }
	  }]);
	
	  return DialogWrap;
	})(React.Component);
	
	DialogWrap.defaultProps = {
	  className: '',
	  align: {
	    points: ['tc', 'tc'],
	    offset: [0, 100]
	  },
	  closable: true,
	  prefixCls: 'rc-dialog',
	  visible: false,
	  onBeforeClose: noop,
	  onShow: noop,
	  onClose: noop
	};
	
	module.exports = DialogWrap;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var React = __webpack_require__(42);
	var domAlign = __webpack_require__(112);
	var RcUtil = __webpack_require__(114);
	var Dom = RcUtil.Dom;
	var assign = __webpack_require__(125);
	var anim = __webpack_require__(126);
	
	function prefixClsFn(prefixCls) {
	  var args = Array.prototype.slice.call(arguments, 1);
	  return args.map(function (s) {
	    if (!s) {
	      return prefixCls;
	    }
	    return prefixCls + '-' + s;
	  }).join(' ');
	}
	
	function buffer(fn, ms) {
	  var timer;
	  return function () {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Dialog = React.createClass({
	  displayName: 'Dialog',
	
	  align: function align() {
	    var align = this.props.align;
	    domAlign(React.findDOMNode(this.refs.dialog), align.node || window, align);
	  },
	
	  monitorWindowResize: function monitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.resizeHandler = Dom.addEventListener(window, 'resize', buffer(this.align, 80));
	    }
	  },
	
	  unMonitorWindowResize: function unMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    var dialogDomNode, maskNode;
	    if (props.visible) {
	      this.monitorWindowResize();
	      prevProps = prevProps || {};
	      // first show
	      if (!prevProps.visible) {
	        this.align();
	        dialogDomNode = React.findDOMNode(this.refs.dialog);
	        if (props.animation) {
	          // dialogDomNode.style.visibility = 'hidden';
	          anim(dialogDomNode, prefixClsFn(props.prefixCls, props.animation + '-enter'));
	          // dialogDomNode.style.visibility = '';
	        }
	        if (props.maskAnimation) {
	          maskNode = React.findDOMNode(this.refs.mask);
	          anim(maskNode, prefixClsFn(props.prefixCls, props.maskAnimation + '-enter'));
	        }
	        dialogDomNode.focus();
	      } else if (props.align !== prevProps.align) {
	        this.align();
	      }
	    } else {
	      if (prevProps.visible) {
	        dialogDomNode = React.findDOMNode(this.refs.dialog);
	        if (props.animation) {
	          anim(dialogDomNode, prefixClsFn(props.prefixCls, props.animation + '-leave'));
	        }
	        if (props.maskAnimation) {
	          maskNode = React.findDOMNode(this.refs.mask);
	          anim(maskNode, prefixClsFn(props.prefixCls, props.maskAnimation + '-leave'));
	        }
	      }
	      this.unMonitorWindowResize();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unMonitorWindowResize();
	  },
	
	  render: function render() {
	    var props = this.props;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var className = [prefixClsFn(prefixCls, 'wrap')];
	    var closable = props.closable;
	    if (!visible) {
	      className.push(prefixClsFn(prefixCls, 'wrap-hidden'));
	    }
	    var dest = {};
	    if (props.width !== undefined) {
	      dest.width = props.width;
	    }
	    if (props.height !== undefined) {
	      dest.height = props.height;
	    }
	    if (props.zIndex !== undefined) {
	      dest.zIndex = props.zIndex;
	    }
	
	    var style = assign({}, props.style, dest);
	
	    var maskProps = {};
	    if (closable) {
	      maskProps.onClick = this.props.onClose;
	    }
	    if (style.zIndex) {
	      maskProps.style = { zIndex: style.zIndex };
	    }
	    var footer;
	    if (props.footer) {
	      footer = React.createElement('div', { className: prefixClsFn(prefixCls, 'footer') }, props.footer);
	    }
	    return React.createElement('div', { className: className.join(' ') }, props.mask !== false ? React.createElement('div', _extends({}, maskProps, { className: prefixClsFn(prefixCls, 'mask'), ref: 'mask' })) : null, React.createElement('div', { className: [prefixClsFn(prefixCls, ''), props.className].join(' '), tabIndex: '0', role: 'dialog', ref: 'dialog', style: style }, React.createElement('div', { className: prefixClsFn(prefixCls, 'content') }, React.createElement('div', { className: prefixClsFn(prefixCls, 'header') }, closable ? React.createElement('a', { tabIndex: '0', onClick: this.props.onClose, className: [prefixClsFn(prefixCls, 'close')].join('') }, React.createElement('span', { className: prefixClsFn(prefixCls, 'close-x') }, '×')) : null, React.createElement('div', { className: prefixClsFn(prefixCls, 'title') }, props.title)), React.createElement('div', { className: prefixClsFn(prefixCls, 'body') }, props.children), footer)));
	  }
	});
	
	module.exports = Dialog;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var utils = __webpack_require__(113);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0),
	      H = align.charAt(1),
	      w = region.width,
	      h = region.height,
	      x,
	      y;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument,
	      body = doc.body,
	      parent,
	      positionStyle = utils.css(element, 'position'),
	      skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  },
	      el = element,
	      scrollX,
	      scrollY,
	      winSize,
	      doc = element.ownerDocument,
	      win = doc.defaultView || doc.parentWindow,
	      body = doc.body,
	      documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible')) {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = utils.getWindowScrollLeft(win);
	  scrollY = utils.getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: utils.viewportWidth(win),
	    height: utils.viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy, diff, p1, p2;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos),
	      size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset, w, h;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	module.exports = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	// body may have overflow set on it, yet we still get the entire
	// viewport. In some browsers, el.offsetParent may be
	// document.documentElement, so check for that too.

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	    CURRENT_STYLE = 'currentStyle',
	    RUNTIME_STYLE = 'runtimeStyle',
	    LEFT = 'left',
	    PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	        left = style[LEFT],
	        rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	      ret = {},
	      current,
	      key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	    CONTENT_INDEX = -1,
	    PADDING_INDEX = 2,
	    BORDER_INDEX = 1,
	    MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	      style = elem.style,
	      name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0,
	      prop,
	      j,
	      i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*eslint eqeqeq:0*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    //firefox chrome documentElement.scrollHeight< body.scrollHeight
	    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	        doc = win.document,
	        body = doc.body,
	        documentElement = doc.documentElement,
	        documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	  }
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val,
	      args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	    for (i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(116),
	  classSet: __webpack_require__(117),
	  joinClasses: __webpack_require__(118),
	  KeyCode: __webpack_require__(119),
	  PureRenderMixin: __webpack_require__(120),
	  shallowEqual: __webpack_require__(115),
	  createChainedFunction: __webpack_require__(121),
	  Dom: {
	    addEventListener: __webpack_require__(122),
	    contains: __webpack_require__(123)
	  },
	  Children: {
	    toArray: __webpack_require__(124)
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	'use strict';
	
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(115);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(42);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(127);
	var Css = __webpack_require__(128);
	
	module.exports = function (node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    Css.addClass(node, activeClassName);
	    node.rcAnimTimeout = null;
	  }, 0);
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	var norm = function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, needle) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    needle = needle.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=antd.js.map