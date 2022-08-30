(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/CardRefresh.js
  var import_jquery = __toESM(__require("jquery"));
  var NAME = "CardRefresh";
  var DATA_KEY = "lte.cardrefresh";
  var EVENT_KEY = `.${DATA_KEY}`;
  var JQUERY_NO_CONFLICT = import_jquery.default.fn[NAME];
  var EVENT_LOADED = `loaded${EVENT_KEY}`;
  var EVENT_OVERLAY_ADDED = `overlay.added${EVENT_KEY}`;
  var EVENT_OVERLAY_REMOVED = `overlay.removed${EVENT_KEY}`;
  var CLASS_NAME_CARD = "card";
  var SELECTOR_CARD = `.${CLASS_NAME_CARD}`;
  var SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]';
  var Default = {
    source: "",
    sourceSelector: "",
    params: {},
    trigger: SELECTOR_DATA_REFRESH,
    content: ".card-body",
    loadInContent: true,
    loadOnInit: true,
    loadErrorTemplate: true,
    responseType: "",
    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
    errorTemplate: '<span class="text-danger"></span>',
    onLoadStart() {
    },
    onLoadDone(response) {
      return response;
    },
    onLoadFail(_jqXHR, _textStatus, _errorThrown) {
    }
  };
  var CardRefresh = class {
    constructor(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD).first();
      this._settings = import_jquery.default.extend({}, Default, settings);
      this._overlay = (0, import_jquery.default)(this._settings.overlayTemplate);
      if (element.hasClass(CLASS_NAME_CARD)) {
        this._parent = element;
      }
      if (this._settings.source === "") {
        throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");
      }
    }
    load() {
      this._addOverlay();
      this._settings.onLoadStart.call((0, import_jquery.default)(this));
      import_jquery.default.get(this._settings.source, this._settings.params, (response) => {
        if (this._settings.loadInContent) {
          if (this._settings.sourceSelector !== "") {
            response = (0, import_jquery.default)(response).find(this._settings.sourceSelector).html();
          }
          this._parent.find(this._settings.content).html(response);
        }
        this._settings.onLoadDone.call((0, import_jquery.default)(this), response);
        this._removeOverlay();
      }, this._settings.responseType !== "" && this._settings.responseType).fail((jqXHR, textStatus, errorThrown) => {
        this._removeOverlay();
        if (this._settings.loadErrorTemplate) {
          const msg = (0, import_jquery.default)(this._settings.errorTemplate).text(errorThrown);
          this._parent.find(this._settings.content).empty().append(msg);
        }
        this._settings.onLoadFail.call((0, import_jquery.default)(this), jqXHR, textStatus, errorThrown);
      });
      (0, import_jquery.default)(this._element).trigger(import_jquery.default.Event(EVENT_LOADED));
    }
    _addOverlay() {
      this._parent.append(this._overlay);
      (0, import_jquery.default)(this._element).trigger(import_jquery.default.Event(EVENT_OVERLAY_ADDED));
    }
    _removeOverlay() {
      this._parent.find(this._overlay).remove();
      (0, import_jquery.default)(this._element).trigger(import_jquery.default.Event(EVENT_OVERLAY_REMOVED));
    }
    _init() {
      (0, import_jquery.default)(this).find(this._settings.trigger).on("click", () => {
        this.load();
      });
      if (this._settings.loadOnInit) {
        this.load();
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery.default)(this).data(DATA_KEY);
        const _config = import_jquery.default.extend({}, Default, typeof config === "object" ? config : (0, import_jquery.default)(this).data());
        if (!data) {
          data = new CardRefresh((0, import_jquery.default)(this), _config);
          (0, import_jquery.default)(this).data(DATA_KEY, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery.default)(document).on("click", SELECTOR_DATA_REFRESH, function(event) {
    if (event) {
      event.preventDefault();
    }
    CardRefresh._jQueryInterface.call((0, import_jquery.default)(this), "load");
  });
  (0, import_jquery.default)(() => {
    (0, import_jquery.default)(SELECTOR_DATA_REFRESH).each(function() {
      CardRefresh._jQueryInterface.call((0, import_jquery.default)(this));
    });
  });
  import_jquery.default.fn[NAME] = CardRefresh._jQueryInterface;
  import_jquery.default.fn[NAME].Constructor = CardRefresh;
  import_jquery.default.fn[NAME].noConflict = function() {
    import_jquery.default.fn[NAME] = JQUERY_NO_CONFLICT;
    return CardRefresh._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/CardWidget.js
  var import_jquery2 = __toESM(__require("jquery"));
  var NAME2 = "CardWidget";
  var DATA_KEY2 = "lte.cardwidget";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var JQUERY_NO_CONFLICT2 = import_jquery2.default.fn[NAME2];
  var EVENT_EXPANDED = `expanded${EVENT_KEY2}`;
  var EVENT_COLLAPSED = `collapsed${EVENT_KEY2}`;
  var EVENT_MAXIMIZED = `maximized${EVENT_KEY2}`;
  var EVENT_MINIMIZED = `minimized${EVENT_KEY2}`;
  var EVENT_REMOVED = `removed${EVENT_KEY2}`;
  var CLASS_NAME_CARD2 = "card";
  var CLASS_NAME_COLLAPSED = "collapsed-card";
  var CLASS_NAME_COLLAPSING = "collapsing-card";
  var CLASS_NAME_EXPANDING = "expanding-card";
  var CLASS_NAME_WAS_COLLAPSED = "was-collapsed";
  var CLASS_NAME_MAXIMIZED = "maximized-card";
  var SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]';
  var SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]';
  var SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]';
  var SELECTOR_CARD2 = `.${CLASS_NAME_CARD2}`;
  var SELECTOR_CARD_HEADER = ".card-header";
  var SELECTOR_CARD_BODY = ".card-body";
  var SELECTOR_CARD_FOOTER = ".card-footer";
  var Default2 = {
    animationSpeed: "normal",
    collapseTrigger: SELECTOR_DATA_COLLAPSE,
    removeTrigger: SELECTOR_DATA_REMOVE,
    maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
    collapseIcon: "fa-minus",
    expandIcon: "fa-plus",
    maximizeIcon: "fa-expand",
    minimizeIcon: "fa-compress"
  };
  var CardWidget = class {
    constructor(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD2).first();
      if (element.hasClass(CLASS_NAME_CARD2)) {
        this._parent = element;
      }
      this._settings = import_jquery2.default.extend({}, Default2, settings);
    }
    collapse() {
      this._parent.addClass(CLASS_NAME_COLLAPSING).children(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`).slideUp(this._settings.animationSpeed, () => {
        this._parent.addClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_COLLAPSING);
      });
      this._parent.find(`> ${SELECTOR_CARD_HEADER} ${this._settings.collapseTrigger} .${this._settings.collapseIcon}`).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);
      this._element.trigger(import_jquery2.default.Event(EVENT_COLLAPSED), this._parent);
    }
    expand() {
      this._parent.addClass(CLASS_NAME_EXPANDING).children(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`).slideDown(this._settings.animationSpeed, () => {
        this._parent.removeClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_EXPANDING);
      });
      this._parent.find(`> ${SELECTOR_CARD_HEADER} ${this._settings.collapseTrigger} .${this._settings.expandIcon}`).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);
      this._element.trigger(import_jquery2.default.Event(EVENT_EXPANDED), this._parent);
    }
    remove() {
      this._parent.slideUp();
      this._element.trigger(import_jquery2.default.Event(EVENT_REMOVED), this._parent);
    }
    toggle() {
      if (this._parent.hasClass(CLASS_NAME_COLLAPSED)) {
        this.expand();
        return;
      }
      this.collapse();
    }
    maximize() {
      this._parent.find(`${this._settings.maximizeTrigger} .${this._settings.maximizeIcon}`).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);
      this._parent.css({
        height: this._parent.height(),
        width: this._parent.width(),
        position: "fixed",
        transition: "all .15s"
      }).delay(150).queue(function() {
        const $element = (0, import_jquery2.default)(this);
        $element.addClass(CLASS_NAME_MAXIMIZED);
        (0, import_jquery2.default)("html").addClass(CLASS_NAME_MAXIMIZED);
        if ($element.hasClass(CLASS_NAME_COLLAPSED)) {
          $element.addClass(CLASS_NAME_WAS_COLLAPSED);
        }
        $element.dequeue();
      });
      this._element.trigger(import_jquery2.default.Event(EVENT_MAXIMIZED), this._parent);
    }
    minimize() {
      this._parent.find(`${this._settings.maximizeTrigger} .${this._settings.minimizeIcon}`).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);
      this._parent.css(
        "cssText",
        `height: ${this._parent[0].style.height} !important; width: ${this._parent[0].style.width} !important; transition: all .15s;`
      ).delay(10).queue(function() {
        const $element = (0, import_jquery2.default)(this);
        $element.removeClass(CLASS_NAME_MAXIMIZED);
        (0, import_jquery2.default)("html").removeClass(CLASS_NAME_MAXIMIZED);
        $element.css({
          height: "inherit",
          width: "inherit"
        });
        if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
          $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
        }
        $element.dequeue();
      });
      this._element.trigger(import_jquery2.default.Event(EVENT_MINIMIZED), this._parent);
    }
    toggleMaximize() {
      if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
        this.minimize();
        return;
      }
      this.maximize();
    }
    _init(card) {
      this._parent = card;
      (0, import_jquery2.default)(this).find(this._settings.collapseTrigger).click(() => {
        this.toggle();
      });
      (0, import_jquery2.default)(this).find(this._settings.maximizeTrigger).click(() => {
        this.toggleMaximize();
      });
      (0, import_jquery2.default)(this).find(this._settings.removeTrigger).click(() => {
        this.remove();
      });
    }
    static _jQueryInterface(config) {
      let data = (0, import_jquery2.default)(this).data(DATA_KEY2);
      const _config = import_jquery2.default.extend({}, Default2, (0, import_jquery2.default)(this).data());
      if (!data) {
        data = new CardWidget((0, import_jquery2.default)(this), _config);
        (0, import_jquery2.default)(this).data(DATA_KEY2, typeof config === "string" ? data : config);
      }
      if (typeof config === "string" && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(config)) {
        data[config]();
      } else if (typeof config === "object") {
        data._init((0, import_jquery2.default)(this));
      }
    }
  };
  (0, import_jquery2.default)(document).on("click", SELECTOR_DATA_COLLAPSE, function(event) {
    if (event) {
      event.preventDefault();
    }
    CardWidget._jQueryInterface.call((0, import_jquery2.default)(this), "toggle");
  });
  (0, import_jquery2.default)(document).on("click", SELECTOR_DATA_REMOVE, function(event) {
    if (event) {
      event.preventDefault();
    }
    CardWidget._jQueryInterface.call((0, import_jquery2.default)(this), "remove");
  });
  (0, import_jquery2.default)(document).on("click", SELECTOR_DATA_MAXIMIZE, function(event) {
    if (event) {
      event.preventDefault();
    }
    CardWidget._jQueryInterface.call((0, import_jquery2.default)(this), "toggleMaximize");
  });
  import_jquery2.default.fn[NAME2] = CardWidget._jQueryInterface;
  import_jquery2.default.fn[NAME2].Constructor = CardWidget;
  import_jquery2.default.fn[NAME2].noConflict = function() {
    import_jquery2.default.fn[NAME2] = JQUERY_NO_CONFLICT2;
    return CardWidget._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/ControlSidebar.js
  var import_jquery3 = __toESM(__require("jquery"));
  var NAME3 = "ControlSidebar";
  var DATA_KEY3 = "lte.controlsidebar";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var JQUERY_NO_CONFLICT3 = import_jquery3.default.fn[NAME3];
  var EVENT_COLLAPSED2 = `collapsed${EVENT_KEY3}`;
  var EVENT_COLLAPSED_DONE = `collapsed-done${EVENT_KEY3}`;
  var EVENT_EXPANDED2 = `expanded${EVENT_KEY3}`;
  var SELECTOR_CONTROL_SIDEBAR = ".control-sidebar";
  var SELECTOR_CONTROL_SIDEBAR_CONTENT = ".control-sidebar-content";
  var SELECTOR_DATA_TOGGLE = '[data-widget="control-sidebar"]';
  var SELECTOR_HEADER = ".main-header";
  var SELECTOR_FOOTER = ".main-footer";
  var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = "control-sidebar-animate";
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN = "control-sidebar-open";
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = "control-sidebar-slide-open";
  var CLASS_NAME_LAYOUT_FIXED = "layout-fixed";
  var CLASS_NAME_NAVBAR_FIXED = "layout-navbar-fixed";
  var CLASS_NAME_NAVBAR_SM_FIXED = "layout-sm-navbar-fixed";
  var CLASS_NAME_NAVBAR_MD_FIXED = "layout-md-navbar-fixed";
  var CLASS_NAME_NAVBAR_LG_FIXED = "layout-lg-navbar-fixed";
  var CLASS_NAME_NAVBAR_XL_FIXED = "layout-xl-navbar-fixed";
  var CLASS_NAME_FOOTER_FIXED = "layout-footer-fixed";
  var CLASS_NAME_FOOTER_SM_FIXED = "layout-sm-footer-fixed";
  var CLASS_NAME_FOOTER_MD_FIXED = "layout-md-footer-fixed";
  var CLASS_NAME_FOOTER_LG_FIXED = "layout-lg-footer-fixed";
  var CLASS_NAME_FOOTER_XL_FIXED = "layout-xl-footer-fixed";
  var Default3 = {
    controlsidebarSlide: true,
    scrollbarTheme: "os-theme-light",
    scrollbarAutoHide: "l",
    target: SELECTOR_CONTROL_SIDEBAR,
    animationSpeed: 300
  };
  var ControlSidebar = class {
    constructor(element, config) {
      this._element = element;
      this._config = config;
    }
    collapse() {
      const $body = (0, import_jquery3.default)("body");
      const $html = (0, import_jquery3.default)("html");
      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function() {
          (0, import_jquery3.default)(SELECTOR_CONTROL_SIDEBAR).hide();
          $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          (0, import_jquery3.default)(this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }
      (0, import_jquery3.default)(this._element).trigger(import_jquery3.default.Event(EVENT_COLLAPSED2));
      setTimeout(() => {
        (0, import_jquery3.default)(this._element).trigger(import_jquery3.default.Event(EVENT_COLLAPSED_DONE));
      }, this._config.animationSpeed);
    }
    show(toggle = false) {
      const $body = (0, import_jquery3.default)("body");
      const $html = (0, import_jquery3.default)("html");
      if (toggle) {
        (0, import_jquery3.default)(SELECTOR_CONTROL_SIDEBAR).hide();
      }
      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        (0, import_jquery3.default)(this._config.target).show().delay(10).queue(function() {
          $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function() {
            $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
            (0, import_jquery3.default)(this).dequeue();
          });
          (0, import_jquery3.default)(this).dequeue();
        });
      } else {
        $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }
      this._fixHeight();
      this._fixScrollHeight();
      (0, import_jquery3.default)(this._element).trigger(import_jquery3.default.Event(EVENT_EXPANDED2));
    }
    toggle() {
      const $body = (0, import_jquery3.default)("body");
      const { target } = this._config;
      const notVisible = !(0, import_jquery3.default)(target).is(":visible");
      const shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
      const shouldToggle = notVisible && ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE));
      if (notVisible || shouldToggle) {
        this.show(notVisible);
      } else if (shouldClose) {
        this.collapse();
      }
    }
    _init() {
      const $body = (0, import_jquery3.default)("body");
      const shouldNotHideAll = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
      if (shouldNotHideAll) {
        (0, import_jquery3.default)(SELECTOR_CONTROL_SIDEBAR).not(this._config.target).hide();
        (0, import_jquery3.default)(this._config.target).css("display", "block");
      } else {
        (0, import_jquery3.default)(SELECTOR_CONTROL_SIDEBAR).hide();
      }
      this._fixHeight();
      this._fixScrollHeight();
      (0, import_jquery3.default)(window).resize(() => {
        this._fixHeight();
        this._fixScrollHeight();
      });
      (0, import_jquery3.default)(window).scroll(() => {
        const $body2 = (0, import_jquery3.default)("body");
        const shouldFixHeight = $body2.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body2.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
        if (shouldFixHeight) {
          this._fixScrollHeight();
        }
      });
    }
    _isNavbarFixed() {
      const $body = (0, import_jquery3.default)("body");
      return $body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED);
    }
    _isFooterFixed() {
      const $body = (0, import_jquery3.default)("body");
      return $body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED);
    }
    _fixScrollHeight() {
      const $body = (0, import_jquery3.default)("body");
      const $controlSidebar = (0, import_jquery3.default)(this._config.target);
      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }
      const heights = {
        scroll: (0, import_jquery3.default)(document).height(),
        window: (0, import_jquery3.default)(window).height(),
        header: (0, import_jquery3.default)(SELECTOR_HEADER).outerHeight(),
        footer: (0, import_jquery3.default)(SELECTOR_FOOTER).outerHeight()
      };
      const positions = {
        bottom: Math.abs(heights.window + (0, import_jquery3.default)(window).scrollTop() - heights.scroll),
        top: (0, import_jquery3.default)(window).scrollTop()
      };
      const navbarFixed = this._isNavbarFixed() && (0, import_jquery3.default)(SELECTOR_HEADER).css("position") === "fixed";
      const footerFixed = this._isFooterFixed() && (0, import_jquery3.default)(SELECTOR_FOOTER).css("position") === "fixed";
      const $controlsidebarContent = (0, import_jquery3.default)(`${this._config.target}, ${this._config.target} ${SELECTOR_CONTROL_SIDEBAR_CONTENT}`);
      if (positions.top === 0 && positions.bottom === 0) {
        $controlSidebar.css({
          bottom: heights.footer,
          top: heights.header
        });
        $controlsidebarContent.css("height", heights.window - (heights.header + heights.footer));
      } else if (positions.bottom <= heights.footer) {
        if (footerFixed === false) {
          const top = heights.header - positions.top;
          $controlSidebar.css("bottom", heights.footer - positions.bottom).css("top", top >= 0 ? top : 0);
          $controlsidebarContent.css("height", heights.window - (heights.footer - positions.bottom));
        } else {
          $controlSidebar.css("bottom", heights.footer);
        }
      } else if (positions.top <= heights.header) {
        if (navbarFixed === false) {
          $controlSidebar.css("top", heights.header - positions.top);
          $controlsidebarContent.css("height", heights.window - (heights.header - positions.top));
        } else {
          $controlSidebar.css("top", heights.header);
        }
      } else if (navbarFixed === false) {
        $controlSidebar.css("top", 0);
        $controlsidebarContent.css("height", heights.window);
      } else {
        $controlSidebar.css("top", heights.header);
      }
      if (footerFixed && navbarFixed) {
        $controlsidebarContent.css("height", "100%");
        $controlSidebar.css("height", "");
      } else if (footerFixed || navbarFixed) {
        $controlsidebarContent.css("height", "100%");
        $controlsidebarContent.css("height", "");
      }
    }
    _fixHeight() {
      const $body = (0, import_jquery3.default)("body");
      const $controlSidebar = (0, import_jquery3.default)(`${this._config.target} ${SELECTOR_CONTROL_SIDEBAR_CONTENT}`);
      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        $controlSidebar.attr("style", "");
        return;
      }
      const heights = {
        window: (0, import_jquery3.default)(window).height(),
        header: (0, import_jquery3.default)(SELECTOR_HEADER).outerHeight(),
        footer: (0, import_jquery3.default)(SELECTOR_FOOTER).outerHeight()
      };
      let sidebarHeight = heights.window - heights.header;
      if (this._isFooterFixed() && (0, import_jquery3.default)(SELECTOR_FOOTER).css("position") === "fixed") {
        sidebarHeight = heights.window - heights.header - heights.footer;
      }
      $controlSidebar.css("height", sidebarHeight);
      if (typeof import_jquery3.default.fn.overlayScrollbars !== "undefined") {
        $controlSidebar.overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery3.default)(this).data(DATA_KEY3);
        const _config = import_jquery3.default.extend({}, Default3, typeof config === "object" ? config : (0, import_jquery3.default)(this).data());
        if (!data) {
          data = new ControlSidebar((0, import_jquery3.default)(this), _config);
          (0, import_jquery3.default)(this).data(DATA_KEY3, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery3.default)(document).on("click", SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    ControlSidebar._jQueryInterface.call((0, import_jquery3.default)(this), "toggle");
  });
  (0, import_jquery3.default)(document).ready(() => {
    ControlSidebar._jQueryInterface.call((0, import_jquery3.default)(SELECTOR_DATA_TOGGLE), "_init");
  });
  import_jquery3.default.fn[NAME3] = ControlSidebar._jQueryInterface;
  import_jquery3.default.fn[NAME3].Constructor = ControlSidebar;
  import_jquery3.default.fn[NAME3].noConflict = function() {
    import_jquery3.default.fn[NAME3] = JQUERY_NO_CONFLICT3;
    return ControlSidebar._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/DirectChat.js
  var import_jquery4 = __toESM(__require("jquery"));
  var NAME4 = "DirectChat";
  var DATA_KEY4 = "lte.directchat";
  var EVENT_KEY4 = `.${DATA_KEY4}`;
  var JQUERY_NO_CONFLICT4 = import_jquery4.default.fn[NAME4];
  var EVENT_TOGGLED = `toggled${EVENT_KEY4}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-widget="chat-pane-toggle"]';
  var SELECTOR_DIRECT_CHAT = ".direct-chat";
  var CLASS_NAME_DIRECT_CHAT_OPEN = "direct-chat-contacts-open";
  var DirectChat = class {
    constructor(element) {
      this._element = element;
    }
    toggle() {
      (0, import_jquery4.default)(this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
      (0, import_jquery4.default)(this._element).trigger(import_jquery4.default.Event(EVENT_TOGGLED));
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery4.default)(this).data(DATA_KEY4);
        if (!data) {
          data = new DirectChat((0, import_jquery4.default)(this));
          (0, import_jquery4.default)(this).data(DATA_KEY4, data);
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery4.default)(document).on("click", SELECTOR_DATA_TOGGLE2, function(event) {
    if (event) {
      event.preventDefault();
    }
    DirectChat._jQueryInterface.call((0, import_jquery4.default)(this), "toggle");
  });
  import_jquery4.default.fn[NAME4] = DirectChat._jQueryInterface;
  import_jquery4.default.fn[NAME4].Constructor = DirectChat;
  import_jquery4.default.fn[NAME4].noConflict = function() {
    import_jquery4.default.fn[NAME4] = JQUERY_NO_CONFLICT4;
    return DirectChat._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/Dropdown.js
  var import_jquery5 = __toESM(__require("jquery"));
  var NAME5 = "Dropdown";
  var DATA_KEY5 = "lte.dropdown";
  var JQUERY_NO_CONFLICT5 = import_jquery5.default.fn[NAME5];
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var SELECTOR_DROPDOWN_MENU_ACTIVE = ".dropdown-menu.show";
  var SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]';
  var CLASS_NAME_DROPDOWN_RIGHT = "dropdown-menu-right";
  var CLASS_NAME_DROPDOWN_SUBMENU = "dropdown-submenu";
  var Default4 = {};
  var Dropdown = class {
    constructor(element, config) {
      this._config = config;
      this._element = element;
    }
    toggleSubmenu() {
      this._element.siblings().show().toggleClass("show");
      if (!this._element.next().hasClass("show")) {
        this._element.parents(SELECTOR_DROPDOWN_MENU).first().find(".show").removeClass("show").hide();
      }
      this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", () => {
        (0, import_jquery5.default)(".dropdown-submenu .show").removeClass("show").hide();
      });
    }
    fixPosition() {
      const $element = (0, import_jquery5.default)(SELECTOR_DROPDOWN_MENU_ACTIVE);
      if ($element.length === 0) {
        return;
      }
      if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
        $element.css({
          left: "inherit",
          right: 0
        });
      } else {
        $element.css({
          left: 0,
          right: "inherit"
        });
      }
      const offset = $element.offset();
      const width = $element.width();
      const visiblePart = (0, import_jquery5.default)(window).width() - offset.left;
      if (offset.left < 0) {
        $element.css({
          left: "inherit",
          right: offset.left - 5
        });
      } else if (visiblePart < width) {
        $element.css({
          left: "inherit",
          right: 0
        });
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery5.default)(this).data(DATA_KEY5);
        const _config = import_jquery5.default.extend({}, Default4, typeof config === "object" ? config : (0, import_jquery5.default)(this).data());
        if (!data) {
          data = new Dropdown((0, import_jquery5.default)(this), _config);
          (0, import_jquery5.default)(this).data(DATA_KEY5, data);
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  (0, import_jquery5.default)(`${SELECTOR_DROPDOWN_MENU} ${SELECTOR_DROPDOWN_TOGGLE}`).on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call((0, import_jquery5.default)(this), "toggleSubmenu");
  });
  (0, import_jquery5.default)(`${SELECTOR_NAVBAR} ${SELECTOR_DROPDOWN_TOGGLE}`).on("click", (event) => {
    event.preventDefault();
    if ((0, import_jquery5.default)(event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
      return;
    }
    setTimeout(function() {
      Dropdown._jQueryInterface.call((0, import_jquery5.default)(this), "fixPosition");
    }, 1);
  });
  import_jquery5.default.fn[NAME5] = Dropdown._jQueryInterface;
  import_jquery5.default.fn[NAME5].Constructor = Dropdown;
  import_jquery5.default.fn[NAME5].noConflict = function() {
    import_jquery5.default.fn[NAME5] = JQUERY_NO_CONFLICT5;
    return Dropdown._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/ExpandableTable.js
  var import_jquery6 = __toESM(__require("jquery"));
  var NAME6 = "ExpandableTable";
  var DATA_KEY6 = "lte.expandableTable";
  var EVENT_KEY5 = `.${DATA_KEY6}`;
  var JQUERY_NO_CONFLICT6 = import_jquery6.default.fn[NAME6];
  var EVENT_EXPANDED3 = `expanded${EVENT_KEY5}`;
  var EVENT_COLLAPSED3 = `collapsed${EVENT_KEY5}`;
  var SELECTOR_TABLE = ".expandable-table";
  var SELECTOR_EXPANDABLE_BODY = ".expandable-body";
  var SELECTOR_DATA_TOGGLE3 = '[data-widget="expandable-table"]';
  var SELECTOR_ARIA_ATTR = "aria-expanded";
  var ExpandableTable = class {
    constructor(element) {
      this._element = element;
    }
    _init() {
      (0, import_jquery6.default)(SELECTOR_DATA_TOGGLE3).each((_, $header) => {
        const $type = (0, import_jquery6.default)($header).attr(SELECTOR_ARIA_ATTR);
        const $body = (0, import_jquery6.default)($header).next(SELECTOR_EXPANDABLE_BODY).children().first().children();
        if ($type === "true") {
          $body.show();
        } else if ($type === "false") {
          $body.hide();
          $body.parent().parent().addClass("d-none");
        }
      });
    }
    toggleRow() {
      let $element = this._element;
      if ($element[0].nodeName !== "TR") {
        $element = $element.parent();
        if ($element[0].nodeName !== "TR") {
          $element = $element.parent();
        }
      }
      const time = 500;
      const $type = $element.attr(SELECTOR_ARIA_ATTR);
      const $body = $element.next(SELECTOR_EXPANDABLE_BODY).children().first().children();
      $body.stop();
      if ($type === "true") {
        $body.slideUp(time, () => {
          $element.next(SELECTOR_EXPANDABLE_BODY).addClass("d-none");
        });
        $element.attr(SELECTOR_ARIA_ATTR, "false");
        $element.trigger(import_jquery6.default.Event(EVENT_COLLAPSED3));
      } else if ($type === "false") {
        $element.next(SELECTOR_EXPANDABLE_BODY).removeClass("d-none");
        $body.slideDown(time);
        $element.attr(SELECTOR_ARIA_ATTR, "true");
        $element.trigger(import_jquery6.default.Event(EVENT_EXPANDED3));
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery6.default)(this).data(DATA_KEY6);
        if (!data) {
          data = new ExpandableTable((0, import_jquery6.default)(this));
          (0, import_jquery6.default)(this).data(DATA_KEY6, data);
        }
        if (typeof config === "string" && /init|toggleRow/.test(config)) {
          data[config]();
        }
      });
    }
  };
  (0, import_jquery6.default)(SELECTOR_TABLE).ready(function() {
    ExpandableTable._jQueryInterface.call((0, import_jquery6.default)(this), "_init");
  });
  (0, import_jquery6.default)(document).on("click", SELECTOR_DATA_TOGGLE3, function() {
    ExpandableTable._jQueryInterface.call((0, import_jquery6.default)(this), "toggleRow");
  });
  import_jquery6.default.fn[NAME6] = ExpandableTable._jQueryInterface;
  import_jquery6.default.fn[NAME6].Constructor = ExpandableTable;
  import_jquery6.default.fn[NAME6].noConflict = function() {
    import_jquery6.default.fn[NAME6] = JQUERY_NO_CONFLICT6;
    return ExpandableTable._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/Fullscreen.js
  var import_jquery7 = __toESM(__require("jquery"));
  var NAME7 = "Fullscreen";
  var DATA_KEY7 = "lte.fullscreen";
  var JQUERY_NO_CONFLICT7 = import_jquery7.default.fn[NAME7];
  var SELECTOR_DATA_WIDGET = '[data-widget="fullscreen"]';
  var SELECTOR_ICON = `${SELECTOR_DATA_WIDGET} i`;
  var EVENT_FULLSCREEN_CHANGE = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";
  var Default5 = {
    minimizeIcon: "fa-compress-arrows-alt",
    maximizeIcon: "fa-expand-arrows-alt"
  };
  var Fullscreen = class {
    constructor(_element, _options) {
      this.element = _element;
      this.options = _options;
    }
    toggle() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        this.windowed();
      } else {
        this.fullscreen();
      }
    }
    toggleIcon() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        (0, import_jquery7.default)(SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
      } else {
        (0, import_jquery7.default)(SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
      }
    }
    fullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
    windowed() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery7.default)(this).data(DATA_KEY7);
        const _config = import_jquery7.default.extend({}, Default5, typeof config === "object" ? config : (0, import_jquery7.default)(this).data());
        if (!data) {
          data = new Fullscreen((0, import_jquery7.default)(this), _config);
          (0, import_jquery7.default)(this).data(DATA_KEY7, data);
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  (0, import_jquery7.default)(document).on("click", SELECTOR_DATA_WIDGET, function() {
    Fullscreen._jQueryInterface.call((0, import_jquery7.default)(this), "toggle");
  });
  (0, import_jquery7.default)(document).on(EVENT_FULLSCREEN_CHANGE, () => {
    Fullscreen._jQueryInterface.call((0, import_jquery7.default)(SELECTOR_DATA_WIDGET), "toggleIcon");
  });
  import_jquery7.default.fn[NAME7] = Fullscreen._jQueryInterface;
  import_jquery7.default.fn[NAME7].Constructor = Fullscreen;
  import_jquery7.default.fn[NAME7].noConflict = function() {
    import_jquery7.default.fn[NAME7] = JQUERY_NO_CONFLICT7;
    return Fullscreen._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/IFrame.js
  var import_jquery8 = __toESM(__require("jquery"));
  var NAME8 = "IFrame";
  var DATA_KEY8 = "lte.iframe";
  var JQUERY_NO_CONFLICT8 = import_jquery8.default.fn[NAME8];
  var SELECTOR_DATA_TOGGLE4 = '[data-widget="iframe"]';
  var SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]';
  var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]';
  var SELECTOR_CONTENT_WRAPPER = ".content-wrapper";
  var SELECTOR_CONTENT_IFRAME = `${SELECTOR_CONTENT_WRAPPER} iframe`;
  var SELECTOR_TAB_NAV = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .nav`;
  var SELECTOR_TAB_NAVBAR_NAV = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .navbar-nav`;
  var SELECTOR_TAB_NAVBAR_NAV_ITEM = `${SELECTOR_TAB_NAVBAR_NAV} .nav-item`;
  var SELECTOR_TAB_NAVBAR_NAV_LINK = `${SELECTOR_TAB_NAVBAR_NAV} .nav-link`;
  var SELECTOR_TAB_CONTENT = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .tab-content`;
  var SELECTOR_TAB_EMPTY = `${SELECTOR_TAB_CONTENT} .tab-empty`;
  var SELECTOR_TAB_LOADING = `${SELECTOR_TAB_CONTENT} .tab-loading`;
  var SELECTOR_TAB_PANE = `${SELECTOR_TAB_CONTENT} .tab-pane`;
  var SELECTOR_SIDEBAR_MENU_ITEM = ".main-sidebar .nav-item > a.nav-link";
  var SELECTOR_SIDEBAR_SEARCH_ITEM = ".sidebar-search-results .list-group-item";
  var SELECTOR_HEADER_MENU_ITEM = ".main-header .nav-item a.nav-link";
  var SELECTOR_HEADER_DROPDOWN_ITEM = ".main-header a.dropdown-item";
  var CLASS_NAME_IFRAME_MODE = "iframe-mode";
  var CLASS_NAME_FULLSCREEN_MODE = "iframe-mode-fullscreen";
  var Default6 = {
    onTabClick(item) {
      return item;
    },
    onTabChanged(item) {
      return item;
    },
    onTabCreated(item) {
      return item;
    },
    autoIframeMode: true,
    autoItemActive: true,
    autoShowNewTab: true,
    autoDarkMode: false,
    allowDuplicates: false,
    allowReload: true,
    loadingScreen: true,
    useNavbarItems: true,
    scrollOffset: 40,
    scrollBehaviorSwap: false,
    iconMaximize: "fa-expand",
    iconMinimize: "fa-compress"
  };
  var IFrame = class {
    constructor(element, config) {
      this._config = config;
      this._element = element;
      this._init();
    }
    onTabClick(item) {
      this._config.onTabClick(item);
    }
    onTabChanged(item) {
      this._config.onTabChanged(item);
    }
    onTabCreated(item) {
      this._config.onTabCreated(item);
    }
    createTab(title, link, uniqueName, autoOpen) {
      let tabId = `panel-${uniqueName}`;
      let navId = `tab-${uniqueName}`;
      if (this._config.allowDuplicates) {
        tabId += `-${Math.floor(Math.random() * 1e3)}`;
        navId += `-${Math.floor(Math.random() * 1e3)}`;
      }
      const newNavItem = `<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="${navId}" href="#${tabId}" role="tab" aria-controls="${tabId}" aria-selected="false">${title}</a></li>`;
      (0, import_jquery8.default)(SELECTOR_TAB_NAVBAR_NAV).append(unescape(escape(newNavItem)));
      const newTabItem = `<div class="tab-pane fade" id="${tabId}" role="tabpanel" aria-labelledby="${navId}"><iframe src="${link}"></iframe></div>`;
      (0, import_jquery8.default)(SELECTOR_TAB_CONTENT).append(unescape(escape(newTabItem)));
      if (autoOpen) {
        if (this._config.loadingScreen) {
          const $loadingScreen = (0, import_jquery8.default)(SELECTOR_TAB_LOADING);
          if (!$loadingScreen.is(":animated")) {
            $loadingScreen.fadeIn();
          }
          (0, import_jquery8.default)(`${tabId} iframe`).ready(() => {
            if (typeof this._config.loadingScreen === "number") {
              this.switchTab(`#${navId}`);
              setTimeout(() => {
                $loadingScreen.fadeOut();
              }, this._config.loadingScreen);
            } else {
              this.switchTab(`#${navId}`);
              $loadingScreen.fadeOut();
            }
          });
        } else {
          this.switchTab(`#${navId}`);
        }
      }
      this.onTabCreated((0, import_jquery8.default)(`#${navId}`));
    }
    openTabSidebar(item, autoOpen = this._config.autoShowNewTab) {
      let $item = (0, import_jquery8.default)(item).clone();
      if ($item.attr("href") === void 0) {
        $item = (0, import_jquery8.default)(item).parent("a").clone();
      }
      $item.find(".right, .search-path").remove();
      let title = $item.find("p").text();
      if (title === "") {
        title = $item.text();
      }
      const link = $item.attr("href");
      if (link === "#" || link === "" || link === void 0) {
        return;
      }
      const uniqueName = unescape(link).replace("./", "").replace(/["#&'./:=?[\]]/gi, "-").replace(/(--)/gi, "");
      const navId = `tab-${uniqueName}`;
      if (!this._config.allowDuplicates && (0, import_jquery8.default)(`#${navId}`).length > 0) {
        return this.switchTab(`#${navId}`, this._config.allowReload);
      }
      if (!this._config.allowDuplicates && (0, import_jquery8.default)(`#${navId}`).length === 0 || this._config.allowDuplicates) {
        this.createTab(title, link, uniqueName, autoOpen);
      }
    }
    switchTab(item, reload = false) {
      const $item = (0, import_jquery8.default)(item);
      const tabId = $item.attr("href");
      (0, import_jquery8.default)(SELECTOR_TAB_EMPTY).hide();
      if (reload) {
        const $loadingScreen = (0, import_jquery8.default)(SELECTOR_TAB_LOADING);
        if (this._config.loadingScreen) {
          $loadingScreen.show(0, () => {
            (0, import_jquery8.default)(`${tabId} iframe`).attr("src", (0, import_jquery8.default)(`${tabId} iframe`).attr("src")).ready(() => {
              if (this._config.loadingScreen) {
                if (typeof this._config.loadingScreen === "number") {
                  setTimeout(() => {
                    $loadingScreen.fadeOut();
                  }, this._config.loadingScreen);
                } else {
                  $loadingScreen.fadeOut();
                }
              }
            });
          });
        } else {
          (0, import_jquery8.default)(`${tabId} iframe`).attr("src", (0, import_jquery8.default)(`${tabId} iframe`).attr("src"));
        }
      }
      (0, import_jquery8.default)(`${SELECTOR_TAB_NAVBAR_NAV} .active`).tab("dispose").removeClass("active");
      this._fixHeight();
      $item.tab("show");
      $item.parents("li").addClass("active");
      this.onTabChanged($item);
      if (this._config.autoItemActive) {
        this._setItemActive((0, import_jquery8.default)(`${tabId} iframe`).attr("src"));
      }
    }
    removeActiveTab(type, element) {
      if (type == "all") {
        (0, import_jquery8.default)(SELECTOR_TAB_NAVBAR_NAV_ITEM).remove();
        (0, import_jquery8.default)(SELECTOR_TAB_PANE).remove();
        (0, import_jquery8.default)(SELECTOR_TAB_EMPTY).show();
      } else if (type == "all-other") {
        (0, import_jquery8.default)(`${SELECTOR_TAB_NAVBAR_NAV_ITEM}:not(.active)`).remove();
        (0, import_jquery8.default)(`${SELECTOR_TAB_PANE}:not(.active)`).remove();
      } else if (type == "only-this") {
        const $navClose = (0, import_jquery8.default)(element);
        const $navItem = $navClose.parent(".nav-item");
        const $navItemParent = $navItem.parent();
        const navItemIndex = $navItem.index();
        const tabId = $navClose.siblings(".nav-link").attr("aria-controls");
        $navItem.remove();
        (0, import_jquery8.default)(`#${tabId}`).remove();
        if ((0, import_jquery8.default)(SELECTOR_TAB_CONTENT).children().length == (0, import_jquery8.default)(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).length) {
          (0, import_jquery8.default)(SELECTOR_TAB_EMPTY).show();
        } else {
          const prevNavItemIndex = navItemIndex - 1;
          this.switchTab($navItemParent.children().eq(prevNavItemIndex).find("a.nav-link"));
        }
      } else {
        const $navItem = (0, import_jquery8.default)(`${SELECTOR_TAB_NAVBAR_NAV_ITEM}.active`);
        const $navItemParent = $navItem.parent();
        const navItemIndex = $navItem.index();
        $navItem.remove();
        (0, import_jquery8.default)(`${SELECTOR_TAB_PANE}.active`).remove();
        if ((0, import_jquery8.default)(SELECTOR_TAB_CONTENT).children().length == (0, import_jquery8.default)(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).length) {
          (0, import_jquery8.default)(SELECTOR_TAB_EMPTY).show();
        } else {
          const prevNavItemIndex = navItemIndex - 1;
          this.switchTab($navItemParent.children().eq(prevNavItemIndex).find("a.nav-link"));
        }
      }
    }
    toggleFullscreen() {
      if ((0, import_jquery8.default)("body").hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        (0, import_jquery8.default)(`${SELECTOR_DATA_TOGGLE_FULLSCREEN} i`).removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
        (0, import_jquery8.default)("body").removeClass(CLASS_NAME_FULLSCREEN_MODE);
        (0, import_jquery8.default)(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).height("100%");
        (0, import_jquery8.default)(SELECTOR_CONTENT_WRAPPER).height("100%");
        (0, import_jquery8.default)(SELECTOR_CONTENT_IFRAME).height("100%");
      } else {
        (0, import_jquery8.default)(`${SELECTOR_DATA_TOGGLE_FULLSCREEN} i`).removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
        (0, import_jquery8.default)("body").addClass(CLASS_NAME_FULLSCREEN_MODE);
      }
      (0, import_jquery8.default)(window).trigger("resize");
      this._fixHeight(true);
    }
    _init() {
      const usingDefTab = (0, import_jquery8.default)(SELECTOR_TAB_CONTENT).children().length > 2;
      this._setupListeners();
      this._fixHeight(true);
      if (usingDefTab) {
        const $el = (0, import_jquery8.default)(`${SELECTOR_TAB_PANE}`).first();
        const uniqueName = $el.attr("id").replace("panel-", "");
        const navId = `#tab-${uniqueName}`;
        this.switchTab(navId, true);
      }
    }
    _initFrameElement() {
      if (window.frameElement && this._config.autoIframeMode) {
        const $body = (0, import_jquery8.default)("body");
        $body.addClass(CLASS_NAME_IFRAME_MODE);
        if (this._config.autoDarkMode) {
          $body.addClass("dark-mode");
        }
      }
    }
    _navScroll(offset) {
      const leftPos = (0, import_jquery8.default)(SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
      (0, import_jquery8.default)(SELECTOR_TAB_NAVBAR_NAV).animate({ scrollLeft: leftPos + offset }, 250, "linear");
    }
    _setupListeners() {
      (0, import_jquery8.default)(window).on("resize", () => {
        setTimeout(() => {
          this._fixHeight();
        }, 1);
      });
      if ((0, import_jquery8.default)(SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE)) {
        (0, import_jquery8.default)(document).on("click", `${SELECTOR_SIDEBAR_MENU_ITEM}, ${SELECTOR_SIDEBAR_SEARCH_ITEM}`, (e) => {
          e.preventDefault();
          this.openTabSidebar(e.target);
        });
        if (this._config.useNavbarItems) {
          (0, import_jquery8.default)(document).on("click", `${SELECTOR_HEADER_MENU_ITEM}, ${SELECTOR_HEADER_DROPDOWN_ITEM}`, (e) => {
            e.preventDefault();
            this.openTabSidebar(e.target);
          });
        }
      }
      (0, import_jquery8.default)(document).on("click", SELECTOR_TAB_NAVBAR_NAV_LINK, (e) => {
        e.preventDefault();
        this.onTabClick(e.target);
        this.switchTab(e.target);
      });
      (0, import_jquery8.default)(document).on("click", SELECTOR_TAB_NAVBAR_NAV_LINK, (e) => {
        e.preventDefault();
        this.onTabClick(e.target);
        this.switchTab(e.target);
      });
      (0, import_jquery8.default)(document).on("click", SELECTOR_DATA_TOGGLE_CLOSE, (e) => {
        e.preventDefault();
        let { target } = e;
        if (target.nodeName === "I") {
          target = e.target.offsetParent;
        }
        this.removeActiveTab(target.attributes["data-type"] ? target.attributes["data-type"].nodeValue : null, target);
      });
      (0, import_jquery8.default)(document).on("click", SELECTOR_DATA_TOGGLE_FULLSCREEN, (e) => {
        e.preventDefault();
        this.toggleFullscreen();
      });
      let mousedown = false;
      let mousedownInterval = null;
      (0, import_jquery8.default)(document).on("mousedown", SELECTOR_DATA_TOGGLE_SCROLL_LEFT, (e) => {
        e.preventDefault();
        clearInterval(mousedownInterval);
        let { scrollOffset } = this._config;
        if (!this._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }
        mousedown = true;
        this._navScroll(scrollOffset);
        mousedownInterval = setInterval(() => {
          this._navScroll(scrollOffset);
        }, 250);
      });
      (0, import_jquery8.default)(document).on("mousedown", SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, (e) => {
        e.preventDefault();
        clearInterval(mousedownInterval);
        let { scrollOffset } = this._config;
        if (this._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }
        mousedown = true;
        this._navScroll(scrollOffset);
        mousedownInterval = setInterval(() => {
          this._navScroll(scrollOffset);
        }, 250);
      });
      (0, import_jquery8.default)(document).on("mouseup", () => {
        if (mousedown) {
          mousedown = false;
          clearInterval(mousedownInterval);
          mousedownInterval = null;
        }
      });
    }
    _setItemActive(href) {
      (0, import_jquery8.default)(`${SELECTOR_SIDEBAR_MENU_ITEM}, ${SELECTOR_HEADER_DROPDOWN_ITEM}`).removeClass("active");
      (0, import_jquery8.default)(SELECTOR_HEADER_MENU_ITEM).parent().removeClass("active");
      const $headerMenuItem = (0, import_jquery8.default)(`${SELECTOR_HEADER_MENU_ITEM}[href$="${href}"]`);
      const $headerDropdownItem = (0, import_jquery8.default)(`${SELECTOR_HEADER_DROPDOWN_ITEM}[href$="${href}"]`);
      const $sidebarMenuItem = (0, import_jquery8.default)(`${SELECTOR_SIDEBAR_MENU_ITEM}[href$="${href}"]`);
      $headerMenuItem.each((i, e) => {
        (0, import_jquery8.default)(e).parent().addClass("active");
      });
      $headerDropdownItem.each((i, e) => {
        (0, import_jquery8.default)(e).addClass("active");
      });
      $sidebarMenuItem.each((i, e) => {
        (0, import_jquery8.default)(e).addClass("active");
        (0, import_jquery8.default)(e).parents(".nav-treeview").prevAll(".nav-link").addClass("active");
      });
    }
    _fixHeight(tabEmpty = false) {
      if ((0, import_jquery8.default)("body").hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        const windowHeight = (0, import_jquery8.default)(window).height();
        const navbarHeight = (0, import_jquery8.default)(SELECTOR_TAB_NAV).outerHeight();
        (0, import_jquery8.default)(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}, ${SELECTOR_CONTENT_IFRAME}`).height(windowHeight - navbarHeight);
        (0, import_jquery8.default)(SELECTOR_CONTENT_WRAPPER).height(windowHeight);
      } else {
        const contentWrapperHeight = parseFloat((0, import_jquery8.default)(SELECTOR_CONTENT_WRAPPER).css("height"));
        const navbarHeight = (0, import_jquery8.default)(SELECTOR_TAB_NAV).outerHeight();
        if (tabEmpty == true) {
          setTimeout(() => {
            (0, import_jquery8.default)(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).height(contentWrapperHeight - navbarHeight);
          }, 50);
        } else {
          (0, import_jquery8.default)(SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - navbarHeight);
        }
      }
    }
    static _jQueryInterface(config, name, link, id, reload) {
      if ((0, import_jquery8.default)(SELECTOR_DATA_TOGGLE4).length > 0) {
        let data = (0, import_jquery8.default)(this).data(DATA_KEY8);
        if (!data) {
          data = (0, import_jquery8.default)(this).data();
        }
        const _options = import_jquery8.default.extend({}, Default6, typeof config === "object" ? config : data);
        localStorage.setItem("AdminLTE:IFrame:Options", JSON.stringify(_options));
        const plugin = new IFrame((0, import_jquery8.default)(this), _options);
        window.iFrameInstance = plugin;
        (0, import_jquery8.default)(this).data(DATA_KEY8, typeof config === "object" ? config : { link, name, id, reload, ...data });
        if (typeof config === "string" && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(config)) {
          plugin[config](name, link, id, reload);
        }
      } else {
        window.iFrameInstance = new IFrame((0, import_jquery8.default)(this), JSON.parse(localStorage.getItem("AdminLTE:IFrame:Options")))._initFrameElement();
      }
    }
  };
  (0, import_jquery8.default)(window).on("load", () => {
    IFrame._jQueryInterface.call((0, import_jquery8.default)(SELECTOR_DATA_TOGGLE4));
  });
  import_jquery8.default.fn[NAME8] = IFrame._jQueryInterface;
  import_jquery8.default.fn[NAME8].Constructor = IFrame;
  import_jquery8.default.fn[NAME8].noConflict = function() {
    import_jquery8.default.fn[NAME8] = JQUERY_NO_CONFLICT8;
    return IFrame._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/Layout.js
  var import_jquery9 = __toESM(__require("jquery"));
  var NAME9 = "Layout";
  var DATA_KEY9 = "lte.layout";
  var JQUERY_NO_CONFLICT9 = import_jquery9.default.fn[NAME9];
  var SELECTOR_HEADER2 = ".main-header";
  var SELECTOR_MAIN_SIDEBAR = ".main-sidebar";
  var SELECTOR_SIDEBAR = ".main-sidebar .sidebar";
  var SELECTOR_CONTENT = ".content-wrapper";
  var SELECTOR_CONTROL_SIDEBAR_CONTENT2 = ".control-sidebar-content";
  var SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]';
  var SELECTOR_FOOTER2 = ".main-footer";
  var SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]';
  var SELECTOR_LOGIN_BOX = ".login-box";
  var SELECTOR_REGISTER_BOX = ".register-box";
  var SELECTOR_PRELOADER = ".preloader";
  var CLASS_NAME_SIDEBAR_COLLAPSED = "sidebar-collapse";
  var CLASS_NAME_SIDEBAR_FOCUSED = "sidebar-focused";
  var CLASS_NAME_LAYOUT_FIXED2 = "layout-fixed";
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = "control-sidebar-slide-open";
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN2 = "control-sidebar-open";
  var CLASS_NAME_IFRAME_MODE2 = "iframe-mode";
  var Default7 = {
    scrollbarTheme: "os-theme-light",
    scrollbarAutoHide: "l",
    panelAutoHeight: true,
    panelAutoHeightMode: "min-height",
    preloadDuration: 200,
    loginRegisterAutoHeight: true
  };
  var Layout = class {
    constructor(element, config) {
      this._config = config;
      this._element = element;
    }
    fixLayoutHeight(extra = null) {
      const $body = (0, import_jquery9.default)("body");
      let controlSidebar = 0;
      if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN2) || extra === "control_sidebar") {
        controlSidebar = (0, import_jquery9.default)(SELECTOR_CONTROL_SIDEBAR_CONTENT2).outerHeight();
      }
      const heights = {
        window: (0, import_jquery9.default)(window).height(),
        header: (0, import_jquery9.default)(SELECTOR_HEADER2).length > 0 ? (0, import_jquery9.default)(SELECTOR_HEADER2).outerHeight() : 0,
        footer: (0, import_jquery9.default)(SELECTOR_FOOTER2).length > 0 ? (0, import_jquery9.default)(SELECTOR_FOOTER2).outerHeight() : 0,
        sidebar: (0, import_jquery9.default)(SELECTOR_SIDEBAR).length > 0 ? (0, import_jquery9.default)(SELECTOR_SIDEBAR).height() : 0,
        controlSidebar
      };
      const max = this._max(heights);
      let offset = this._config.panelAutoHeight;
      if (offset === true) {
        offset = 0;
      }
      const $contentSelector = (0, import_jquery9.default)(SELECTOR_CONTENT);
      if (offset !== false) {
        if (max === heights.controlSidebar) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
        } else if (max === heights.window) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
        } else {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
        }
        if (this._isFooterFixed()) {
          $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
        }
      }
      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED2)) {
        return;
      }
      if (typeof import_jquery9.default.fn.overlayScrollbars !== "undefined") {
        (0, import_jquery9.default)(SELECTOR_SIDEBAR).overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      } else {
        (0, import_jquery9.default)(SELECTOR_SIDEBAR).css("overflow-y", "auto");
      }
    }
    fixLoginRegisterHeight() {
      const $body = (0, import_jquery9.default)("body");
      const $selector = (0, import_jquery9.default)(`${SELECTOR_LOGIN_BOX}, ${SELECTOR_REGISTER_BOX}`);
      if ($body.hasClass(CLASS_NAME_IFRAME_MODE2)) {
        $body.css("height", "100%");
        (0, import_jquery9.default)(".wrapper").css("height", "100%");
        (0, import_jquery9.default)("html").css("height", "100%");
      } else if ($selector.length === 0) {
        $body.css("height", "auto");
        (0, import_jquery9.default)("html").css("height", "auto");
      } else {
        const boxHeight = $selector.height();
        if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
          $body.css(this._config.panelAutoHeightMode, boxHeight);
        }
      }
    }
    _init() {
      this.fixLayoutHeight();
      if (this._config.loginRegisterAutoHeight === true) {
        this.fixLoginRegisterHeight();
      } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
        setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
      }
      (0, import_jquery9.default)(SELECTOR_SIDEBAR).on("collapsed.lte.treeview expanded.lte.treeview", () => {
        this.fixLayoutHeight();
      });
      (0, import_jquery9.default)(SELECTOR_MAIN_SIDEBAR).on("mouseenter mouseleave", () => {
        if ((0, import_jquery9.default)("body").hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
          this.fixLayoutHeight();
        }
      });
      (0, import_jquery9.default)(SELECTOR_PUSHMENU_BTN).on("collapsed.lte.pushmenu shown.lte.pushmenu", () => {
        setTimeout(() => {
          this.fixLayoutHeight();
        }, 300);
      });
      (0, import_jquery9.default)(SELECTOR_CONTROL_SIDEBAR_BTN).on("collapsed.lte.controlsidebar", () => {
        this.fixLayoutHeight();
      }).on("expanded.lte.controlsidebar", () => {
        this.fixLayoutHeight("control_sidebar");
      });
      (0, import_jquery9.default)(window).resize(() => {
        this.fixLayoutHeight();
      });
      setTimeout(() => {
        (0, import_jquery9.default)("body.hold-transition").removeClass("hold-transition");
      }, 50);
      setTimeout(() => {
        const $preloader = (0, import_jquery9.default)(SELECTOR_PRELOADER);
        if ($preloader) {
          $preloader.css("height", 0);
          setTimeout(() => {
            $preloader.children().hide();
          }, 200);
        }
      }, this._config.preloadDuration);
    }
    _max(numbers) {
      let max = 0;
      Object.keys(numbers).forEach((key) => {
        if (numbers[key] > max) {
          max = numbers[key];
        }
      });
      return max;
    }
    _isFooterFixed() {
      return (0, import_jquery9.default)(SELECTOR_FOOTER2).css("position") === "fixed";
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery9.default)(this).data(DATA_KEY9);
        const _config = import_jquery9.default.extend({}, Default7, typeof config === "object" ? config : (0, import_jquery9.default)(this).data());
        if (!data) {
          data = new Layout((0, import_jquery9.default)(this), _config);
          (0, import_jquery9.default)(this).data(DATA_KEY9, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery9.default)(window).on("load", () => {
    Layout._jQueryInterface.call((0, import_jquery9.default)("body"));
  });
  (0, import_jquery9.default)(`${SELECTOR_SIDEBAR} a`).on("focusin", () => {
    (0, import_jquery9.default)(SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
  }).on("focusout", () => {
    (0, import_jquery9.default)(SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  import_jquery9.default.fn[NAME9] = Layout._jQueryInterface;
  import_jquery9.default.fn[NAME9].Constructor = Layout;
  import_jquery9.default.fn[NAME9].noConflict = function() {
    import_jquery9.default.fn[NAME9] = JQUERY_NO_CONFLICT9;
    return Layout._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/PushMenu.js
  var import_jquery10 = __toESM(__require("jquery"));
  var NAME10 = "PushMenu";
  var DATA_KEY10 = "lte.pushmenu";
  var EVENT_KEY6 = `.${DATA_KEY10}`;
  var JQUERY_NO_CONFLICT10 = import_jquery10.default.fn[NAME10];
  var EVENT_COLLAPSED4 = `collapsed${EVENT_KEY6}`;
  var EVENT_COLLAPSED_DONE2 = `collapsed-done${EVENT_KEY6}`;
  var EVENT_SHOWN = `shown${EVENT_KEY6}`;
  var SELECTOR_TOGGLE_BUTTON = '[data-widget="pushmenu"]';
  var SELECTOR_BODY = "body";
  var SELECTOR_OVERLAY = "#sidebar-overlay";
  var SELECTOR_WRAPPER = ".wrapper";
  var CLASS_NAME_COLLAPSED2 = "sidebar-collapse";
  var CLASS_NAME_OPEN = "sidebar-open";
  var CLASS_NAME_IS_OPENING = "sidebar-is-opening";
  var CLASS_NAME_CLOSED = "sidebar-closed";
  var Default8 = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true,
    animationSpeed: 300
  };
  var PushMenu = class {
    constructor(element, options) {
      this._element = element;
      this._options = options;
      if ((0, import_jquery10.default)(SELECTOR_OVERLAY).length === 0) {
        this._addOverlay();
      }
      this._init();
    }
    expand() {
      const $bodySelector = (0, import_jquery10.default)(SELECTOR_BODY);
      if (this._options.autoCollapseSize && (0, import_jquery10.default)(window).width() <= this._options.autoCollapseSize) {
        $bodySelector.addClass(CLASS_NAME_OPEN);
      }
      $bodySelector.addClass(CLASS_NAME_IS_OPENING).removeClass(`${CLASS_NAME_COLLAPSED2} ${CLASS_NAME_CLOSED}`).delay(50).queue(function() {
        $bodySelector.removeClass(CLASS_NAME_IS_OPENING);
        (0, import_jquery10.default)(this).dequeue();
      });
      if (this._options.enableRemember) {
        localStorage.setItem(`remember${EVENT_KEY6}`, CLASS_NAME_OPEN);
      }
      (0, import_jquery10.default)(this._element).trigger(import_jquery10.default.Event(EVENT_SHOWN));
    }
    collapse() {
      const $bodySelector = (0, import_jquery10.default)(SELECTOR_BODY);
      if (this._options.autoCollapseSize && (0, import_jquery10.default)(window).width() <= this._options.autoCollapseSize) {
        $bodySelector.removeClass(CLASS_NAME_OPEN).addClass(CLASS_NAME_CLOSED);
      }
      $bodySelector.addClass(CLASS_NAME_COLLAPSED2);
      if (this._options.enableRemember) {
        localStorage.setItem(`remember${EVENT_KEY6}`, CLASS_NAME_COLLAPSED2);
      }
      (0, import_jquery10.default)(this._element).trigger(import_jquery10.default.Event(EVENT_COLLAPSED4));
      setTimeout(() => {
        (0, import_jquery10.default)(this._element).trigger(import_jquery10.default.Event(EVENT_COLLAPSED_DONE2));
      }, this._options.animationSpeed);
    }
    toggle() {
      if ((0, import_jquery10.default)(SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED2)) {
        this.expand();
      } else {
        this.collapse();
      }
    }
    autoCollapse(resize = false) {
      if (!this._options.autoCollapseSize) {
        return;
      }
      const $bodySelector = (0, import_jquery10.default)(SELECTOR_BODY);
      if ((0, import_jquery10.default)(window).width() <= this._options.autoCollapseSize) {
        if (!$bodySelector.hasClass(CLASS_NAME_OPEN)) {
          this.collapse();
        }
      } else if (resize === true) {
        if ($bodySelector.hasClass(CLASS_NAME_OPEN)) {
          $bodySelector.removeClass(CLASS_NAME_OPEN);
        } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
          this.expand();
        }
      }
    }
    remember() {
      if (!this._options.enableRemember) {
        return;
      }
      const $body = (0, import_jquery10.default)("body");
      const toggleState = localStorage.getItem(`remember${EVENT_KEY6}`);
      if (toggleState === CLASS_NAME_COLLAPSED2) {
        if (this._options.noTransitionAfterReload) {
          $body.addClass("hold-transition").addClass(CLASS_NAME_COLLAPSED2).delay(50).queue(function() {
            (0, import_jquery10.default)(this).removeClass("hold-transition");
            (0, import_jquery10.default)(this).dequeue();
          });
        } else {
          $body.addClass(CLASS_NAME_COLLAPSED2);
        }
      } else if (this._options.noTransitionAfterReload) {
        $body.addClass("hold-transition").removeClass(CLASS_NAME_COLLAPSED2).delay(50).queue(function() {
          (0, import_jquery10.default)(this).removeClass("hold-transition");
          (0, import_jquery10.default)(this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_COLLAPSED2);
      }
    }
    _init() {
      this.remember();
      this.autoCollapse();
      (0, import_jquery10.default)(window).resize(() => {
        this.autoCollapse(true);
      });
    }
    _addOverlay() {
      const overlay = (0, import_jquery10.default)("<div />", {
        id: "sidebar-overlay"
      });
      overlay.on("click", () => {
        this.collapse();
      });
      (0, import_jquery10.default)(SELECTOR_WRAPPER).append(overlay);
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery10.default)(this).data(DATA_KEY10);
        const _config = import_jquery10.default.extend({}, Default8, typeof config === "object" ? config : (0, import_jquery10.default)(this).data());
        if (!data) {
          data = new PushMenu((0, import_jquery10.default)(this), _config);
          (0, import_jquery10.default)(this).data(DATA_KEY10, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery10.default)(document).on("click", SELECTOR_TOGGLE_BUTTON, (event) => {
    event.preventDefault();
    let button = event.currentTarget;
    if ((0, import_jquery10.default)(button).data("widget") !== "pushmenu") {
      button = (0, import_jquery10.default)(button).closest(SELECTOR_TOGGLE_BUTTON);
    }
    PushMenu._jQueryInterface.call((0, import_jquery10.default)(button), "toggle");
  });
  (0, import_jquery10.default)(window).on("load", () => {
    PushMenu._jQueryInterface.call((0, import_jquery10.default)(SELECTOR_TOGGLE_BUTTON));
  });
  import_jquery10.default.fn[NAME10] = PushMenu._jQueryInterface;
  import_jquery10.default.fn[NAME10].Constructor = PushMenu;
  import_jquery10.default.fn[NAME10].noConflict = function() {
    import_jquery10.default.fn[NAME10] = JQUERY_NO_CONFLICT10;
    return PushMenu._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/SidebarSearch.js
  var import_jquery11 = __toESM(__require("jquery"));
  var NAME11 = "SidebarSearch";
  var DATA_KEY11 = "lte.sidebar-search";
  var JQUERY_NO_CONFLICT11 = import_jquery11.default.fn[NAME11];
  var CLASS_NAME_OPEN2 = "sidebar-search-open";
  var CLASS_NAME_ICON_SEARCH = "fa-search";
  var CLASS_NAME_ICON_CLOSE = "fa-times";
  var CLASS_NAME_HEADER = "nav-header";
  var CLASS_NAME_SEARCH_RESULTS = "sidebar-search-results";
  var CLASS_NAME_LIST_GROUP = "list-group";
  var SELECTOR_DATA_WIDGET2 = '[data-widget="sidebar-search"]';
  var SELECTOR_SIDEBAR2 = ".main-sidebar .nav-sidebar";
  var SELECTOR_NAV_LINK = ".nav-link";
  var SELECTOR_NAV_TREEVIEW = ".nav-treeview";
  var SELECTOR_SEARCH_INPUT = `${SELECTOR_DATA_WIDGET2} .form-control`;
  var SELECTOR_SEARCH_BUTTON = `${SELECTOR_DATA_WIDGET2} .btn`;
  var SELECTOR_SEARCH_ICON = `${SELECTOR_SEARCH_BUTTON} i`;
  var SELECTOR_SEARCH_LIST_GROUP = `.${CLASS_NAME_LIST_GROUP}`;
  var SELECTOR_SEARCH_RESULTS = `.${CLASS_NAME_SEARCH_RESULTS}`;
  var SELECTOR_SEARCH_RESULTS_GROUP = `${SELECTOR_SEARCH_RESULTS} .${CLASS_NAME_LIST_GROUP}`;
  var Default9 = {
    arrowSign: "->",
    minLength: 3,
    maxResults: 7,
    highlightName: true,
    highlightPath: false,
    highlightClass: "text-light",
    notFoundText: "No element found!"
  };
  var SearchItems = [];
  var SidebarSearch = class {
    constructor(_element, _options) {
      this.element = _element;
      this.options = import_jquery11.default.extend({}, Default9, _options);
      this.items = [];
    }
    _init() {
      if ((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).length === 0) {
        return;
      }
      if ((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).next(SELECTOR_SEARCH_RESULTS).length === 0) {
        (0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).after(
          (0, import_jquery11.default)("<div />", { class: CLASS_NAME_SEARCH_RESULTS })
        );
      }
      if ((0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length === 0) {
        (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS).append(
          (0, import_jquery11.default)("<div />", { class: CLASS_NAME_LIST_GROUP })
        );
      }
      this._addNotFound();
      (0, import_jquery11.default)(SELECTOR_SIDEBAR2).children().each((i, child) => {
        this._parseItem(child);
      });
    }
    search() {
      const searchValue = (0, import_jquery11.default)(SELECTOR_SEARCH_INPUT).val().toLowerCase();
      if (searchValue.length < this.options.minLength) {
        (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).empty();
        this._addNotFound();
        this.close();
        return;
      }
      const searchResults = SearchItems.filter((item) => item.name.toLowerCase().includes(searchValue));
      const endResults = (0, import_jquery11.default)(searchResults.slice(0, this.options.maxResults));
      (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).empty();
      if (endResults.length === 0) {
        this._addNotFound();
      } else {
        endResults.each((i, result) => {
          (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(escape(result.name), encodeURI(result.link), result.path));
        });
      }
      this.open();
    }
    open() {
      (0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).parent().addClass(CLASS_NAME_OPEN2);
      (0, import_jquery11.default)(SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
    }
    close() {
      (0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).parent().removeClass(CLASS_NAME_OPEN2);
      (0, import_jquery11.default)(SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
    }
    toggle() {
      if ((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2).parent().hasClass(CLASS_NAME_OPEN2)) {
        this.close();
      } else {
        this.open();
      }
    }
    _parseItem(item, path = []) {
      if ((0, import_jquery11.default)(item).hasClass(CLASS_NAME_HEADER)) {
        return;
      }
      const itemObject = {};
      const navLink = (0, import_jquery11.default)(item).clone().find(`> ${SELECTOR_NAV_LINK}`);
      const navTreeview = (0, import_jquery11.default)(item).clone().find(`> ${SELECTOR_NAV_TREEVIEW}`);
      const link = navLink.attr("href");
      const name = navLink.find("p").children().remove().end().text();
      itemObject.name = this._trimText(name);
      itemObject.link = link;
      itemObject.path = path;
      if (navTreeview.length === 0) {
        SearchItems.push(itemObject);
      } else {
        const newPath = itemObject.path.concat([itemObject.name]);
        navTreeview.children().each((i, child) => {
          this._parseItem(child, newPath);
        });
      }
    }
    _trimText(text) {
      return (0, import_jquery11.trim)(text.replace(/(\r\n|\n|\r)/gm, " "));
    }
    _renderItem(name, link, path) {
      path = path.join(` ${this.options.arrowSign} `);
      name = unescape(name);
      link = decodeURI(link);
      if (this.options.highlightName || this.options.highlightPath) {
        const searchValue = (0, import_jquery11.default)(SELECTOR_SEARCH_INPUT).val().toLowerCase();
        const regExp = new RegExp(searchValue, "gi");
        if (this.options.highlightName) {
          name = name.replace(
            regExp,
            (str) => {
              return `<strong class="${this.options.highlightClass}">${str}</strong>`;
            }
          );
        }
        if (this.options.highlightPath) {
          path = path.replace(
            regExp,
            (str) => {
              return `<strong class="${this.options.highlightClass}">${str}</strong>`;
            }
          );
        }
      }
      const groupItemElement = (0, import_jquery11.default)("<a/>", {
        href: decodeURIComponent(link),
        class: "list-group-item"
      });
      const searchTitleElement = (0, import_jquery11.default)("<div/>", {
        class: "search-title"
      }).html(name);
      const searchPathElement = (0, import_jquery11.default)("<div/>", {
        class: "search-path"
      }).html(path);
      groupItemElement.append(searchTitleElement).append(searchPathElement);
      return groupItemElement;
    }
    _addNotFound() {
      (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, "#", []));
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery11.default)(this).data(DATA_KEY11);
        const _config = import_jquery11.default.extend({}, Default9, typeof config === "object" ? config : (0, import_jquery11.default)(this).data());
        if (!data) {
          data = new SidebarSearch((0, import_jquery11.default)(this), _config);
          (0, import_jquery11.default)(this).data(DATA_KEY11, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery11.default)(document).on("click", SELECTOR_SEARCH_BUTTON, (event) => {
    event.preventDefault();
    SidebarSearch._jQueryInterface.call((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2), "toggle");
  });
  (0, import_jquery11.default)(document).on("keyup", SELECTOR_SEARCH_INPUT, (event) => {
    if (event.keyCode == 38) {
      event.preventDefault();
      (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
      return;
    }
    if (event.keyCode == 40) {
      event.preventDefault();
      (0, import_jquery11.default)(SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus();
      return;
    }
    setTimeout(() => {
      SidebarSearch._jQueryInterface.call((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2), "search");
    }, 100);
  });
  (0, import_jquery11.default)(document).on("keydown", SELECTOR_SEARCH_RESULTS_GROUP, (event) => {
    const $focused = (0, import_jquery11.default)(":focus");
    if (event.keyCode == 38) {
      event.preventDefault();
      if ($focused.is(":first-child")) {
        $focused.siblings().last().focus();
      } else {
        $focused.prev().focus();
      }
    }
    if (event.keyCode == 40) {
      event.preventDefault();
      if ($focused.is(":last-child")) {
        $focused.siblings().first().focus();
      } else {
        $focused.next().focus();
      }
    }
  });
  (0, import_jquery11.default)(window).on("load", () => {
    SidebarSearch._jQueryInterface.call((0, import_jquery11.default)(SELECTOR_DATA_WIDGET2), "init");
  });
  import_jquery11.default.fn[NAME11] = SidebarSearch._jQueryInterface;
  import_jquery11.default.fn[NAME11].Constructor = SidebarSearch;
  import_jquery11.default.fn[NAME11].noConflict = function() {
    import_jquery11.default.fn[NAME11] = JQUERY_NO_CONFLICT11;
    return SidebarSearch._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/NavbarSearch.js
  var import_jquery12 = __toESM(__require("jquery"));
  var NAME12 = "NavbarSearch";
  var DATA_KEY12 = "lte.navbar-search";
  var JQUERY_NO_CONFLICT12 = import_jquery12.default.fn[NAME12];
  var SELECTOR_TOGGLE_BUTTON2 = '[data-widget="navbar-search"]';
  var SELECTOR_SEARCH_BLOCK = ".navbar-search-block";
  var SELECTOR_SEARCH_INPUT2 = ".form-control";
  var CLASS_NAME_OPEN3 = "navbar-search-open";
  var Default10 = {
    resetOnClose: true,
    target: SELECTOR_SEARCH_BLOCK
  };
  var NavbarSearch = class {
    constructor(_element, _options) {
      this._element = _element;
      this._config = _options;
    }
    open() {
      (0, import_jquery12.default)(this._config.target).css("display", "flex").hide().fadeIn().addClass(CLASS_NAME_OPEN3);
      (0, import_jquery12.default)(`${this._config.target} ${SELECTOR_SEARCH_INPUT2}`).focus();
    }
    close() {
      (0, import_jquery12.default)(this._config.target).fadeOut().removeClass(CLASS_NAME_OPEN3);
      if (this._config.resetOnClose) {
        (0, import_jquery12.default)(`${this._config.target} ${SELECTOR_SEARCH_INPUT2}`).val("");
      }
    }
    toggle() {
      if ((0, import_jquery12.default)(this._config.target).hasClass(CLASS_NAME_OPEN3)) {
        this.close();
      } else {
        this.open();
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery12.default)(this).data(DATA_KEY12);
        const _config = import_jquery12.default.extend({}, Default10, typeof config === "object" ? config : (0, import_jquery12.default)(this).data());
        if (!data) {
          data = new NavbarSearch((0, import_jquery12.default)(this), _config);
          (0, import_jquery12.default)(this).data(DATA_KEY12, data);
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  (0, import_jquery12.default)(document).on("click", SELECTOR_TOGGLE_BUTTON2, (event) => {
    event.preventDefault();
    let button = (0, import_jquery12.default)(event.currentTarget);
    if (button.data("widget") !== "navbar-search") {
      button = button.closest(SELECTOR_TOGGLE_BUTTON2);
    }
    NavbarSearch._jQueryInterface.call(button, "toggle");
  });
  import_jquery12.default.fn[NAME12] = NavbarSearch._jQueryInterface;
  import_jquery12.default.fn[NAME12].Constructor = NavbarSearch;
  import_jquery12.default.fn[NAME12].noConflict = function() {
    import_jquery12.default.fn[NAME12] = JQUERY_NO_CONFLICT12;
    return NavbarSearch._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/Toasts.js
  var import_jquery13 = __toESM(__require("jquery"));
  var NAME13 = "Toasts";
  var DATA_KEY13 = "lte.toasts";
  var EVENT_KEY7 = `.${DATA_KEY13}`;
  var JQUERY_NO_CONFLICT13 = import_jquery13.default.fn[NAME13];
  var EVENT_INIT = `init${EVENT_KEY7}`;
  var EVENT_CREATED = `created${EVENT_KEY7}`;
  var EVENT_REMOVED2 = `removed${EVENT_KEY7}`;
  var SELECTOR_CONTAINER_TOP_RIGHT = "#toastsContainerTopRight";
  var SELECTOR_CONTAINER_TOP_LEFT = "#toastsContainerTopLeft";
  var SELECTOR_CONTAINER_BOTTOM_RIGHT = "#toastsContainerBottomRight";
  var SELECTOR_CONTAINER_BOTTOM_LEFT = "#toastsContainerBottomLeft";
  var CLASS_NAME_TOP_RIGHT = "toasts-top-right";
  var CLASS_NAME_TOP_LEFT = "toasts-top-left";
  var CLASS_NAME_BOTTOM_RIGHT = "toasts-bottom-right";
  var CLASS_NAME_BOTTOM_LEFT = "toasts-bottom-left";
  var POSITION_TOP_RIGHT = "topRight";
  var POSITION_TOP_LEFT = "topLeft";
  var POSITION_BOTTOM_RIGHT = "bottomRight";
  var POSITION_BOTTOM_LEFT = "bottomLeft";
  var Default11 = {
    position: POSITION_TOP_RIGHT,
    fixed: true,
    autohide: false,
    autoremove: true,
    delay: 1e3,
    fade: true,
    icon: null,
    image: null,
    imageAlt: null,
    imageHeight: "25px",
    title: null,
    subtitle: null,
    close: true,
    body: null,
    class: null
  };
  var Toasts = class {
    constructor(element, config) {
      this._config = config;
      this._prepareContainer();
      (0, import_jquery13.default)("body").trigger(import_jquery13.default.Event(EVENT_INIT));
    }
    create() {
      const toast = (0, import_jquery13.default)('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
      toast.data("autohide", this._config.autohide);
      toast.data("animation", this._config.fade);
      if (this._config.class) {
        toast.addClass(this._config.class);
      }
      if (this._config.delay && this._config.delay != 500) {
        toast.data("delay", this._config.delay);
      }
      const toastHeader = (0, import_jquery13.default)('<div class="toast-header">');
      if (this._config.image != null) {
        const toastImage = (0, import_jquery13.default)("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt);
        if (this._config.imageHeight != null) {
          toastImage.height(this._config.imageHeight).width("auto");
        }
        toastHeader.append(toastImage);
      }
      if (this._config.icon != null) {
        toastHeader.append((0, import_jquery13.default)("<i />").addClass("mr-2").addClass(this._config.icon));
      }
      if (this._config.title != null) {
        toastHeader.append((0, import_jquery13.default)("<strong />").addClass("mr-auto").html(this._config.title));
      }
      if (this._config.subtitle != null) {
        toastHeader.append((0, import_jquery13.default)("<small />").html(this._config.subtitle));
      }
      if (this._config.close == true) {
        const toastClose = (0, import_jquery13.default)('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;</span>');
        if (this._config.title == null) {
          toastClose.toggleClass("ml-2 ml-auto");
        }
        toastHeader.append(toastClose);
      }
      toast.append(toastHeader);
      if (this._config.body != null) {
        toast.append((0, import_jquery13.default)('<div class="toast-body" />').html(this._config.body));
      }
      (0, import_jquery13.default)(this._getContainerId()).prepend(toast);
      const $body = (0, import_jquery13.default)("body");
      $body.trigger(import_jquery13.default.Event(EVENT_CREATED));
      toast.toast("show");
      if (this._config.autoremove) {
        toast.on("hidden.bs.toast", function() {
          (0, import_jquery13.default)(this).delay(200).remove();
          $body.trigger(import_jquery13.default.Event(EVENT_REMOVED2));
        });
      }
    }
    _getContainerId() {
      if (this._config.position === POSITION_TOP_RIGHT) {
        return SELECTOR_CONTAINER_TOP_RIGHT;
      }
      if (this._config.position === POSITION_TOP_LEFT) {
        return SELECTOR_CONTAINER_TOP_LEFT;
      }
      if (this._config.position === POSITION_BOTTOM_RIGHT) {
        return SELECTOR_CONTAINER_BOTTOM_RIGHT;
      }
      if (this._config.position === POSITION_BOTTOM_LEFT) {
        return SELECTOR_CONTAINER_BOTTOM_LEFT;
      }
    }
    _prepareContainer() {
      if ((0, import_jquery13.default)(this._getContainerId()).length === 0) {
        const container = (0, import_jquery13.default)("<div />").attr("id", this._getContainerId().replace("#", ""));
        if (this._config.position == POSITION_TOP_RIGHT) {
          container.addClass(CLASS_NAME_TOP_RIGHT);
        } else if (this._config.position == POSITION_TOP_LEFT) {
          container.addClass(CLASS_NAME_TOP_LEFT);
        } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
          container.addClass(CLASS_NAME_BOTTOM_RIGHT);
        } else if (this._config.position == POSITION_BOTTOM_LEFT) {
          container.addClass(CLASS_NAME_BOTTOM_LEFT);
        }
        (0, import_jquery13.default)("body").append(container);
      }
      if (this._config.fixed) {
        (0, import_jquery13.default)(this._getContainerId()).addClass("fixed");
      } else {
        (0, import_jquery13.default)(this._getContainerId()).removeClass("fixed");
      }
    }
    static _jQueryInterface(option, config) {
      return this.each(function() {
        const _options = import_jquery13.default.extend({}, Default11, config);
        const toast = new Toasts((0, import_jquery13.default)(this), _options);
        if (option === "create") {
          toast[option]();
        }
      });
    }
  };
  import_jquery13.default.fn[NAME13] = Toasts._jQueryInterface;
  import_jquery13.default.fn[NAME13].Constructor = Toasts;
  import_jquery13.default.fn[NAME13].noConflict = function() {
    import_jquery13.default.fn[NAME13] = JQUERY_NO_CONFLICT13;
    return Toasts._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/TodoList.js
  var import_jquery14 = __toESM(__require("jquery"));
  var NAME14 = "TodoList";
  var DATA_KEY14 = "lte.todolist";
  var JQUERY_NO_CONFLICT14 = import_jquery14.default.fn[NAME14];
  var SELECTOR_DATA_TOGGLE5 = '[data-widget="todo-list"]';
  var CLASS_NAME_TODO_LIST_DONE = "done";
  var Default12 = {
    onCheck(item) {
      return item;
    },
    onUnCheck(item) {
      return item;
    }
  };
  var TodoList = class {
    constructor(element, config) {
      this._config = config;
      this._element = element;
      this._init();
    }
    toggle(item) {
      item.parents("li").toggleClass(CLASS_NAME_TODO_LIST_DONE);
      if (!(0, import_jquery14.default)(item).prop("checked")) {
        this.unCheck(item);
        return;
      }
      this.check(item);
    }
    check(item) {
      this._config.onCheck(item);
    }
    unCheck(item) {
      this._config.onUnCheck(item);
    }
    _init() {
      const $toggleSelector = this._element;
      $toggleSelector.find("input:checkbox:checked").parents("li").toggleClass(CLASS_NAME_TODO_LIST_DONE);
      $toggleSelector.on("change", "input:checkbox", (event) => {
        this.toggle((0, import_jquery14.default)(event.target));
      });
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery14.default)(this).data(DATA_KEY14);
        const _config = import_jquery14.default.extend({}, Default12, typeof config === "object" ? config : (0, import_jquery14.default)(this).data());
        if (!data) {
          data = new TodoList((0, import_jquery14.default)(this), _config);
          (0, import_jquery14.default)(this).data(DATA_KEY14, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery14.default)(window).on("load", () => {
    TodoList._jQueryInterface.call((0, import_jquery14.default)(SELECTOR_DATA_TOGGLE5));
  });
  import_jquery14.default.fn[NAME14] = TodoList._jQueryInterface;
  import_jquery14.default.fn[NAME14].Constructor = TodoList;
  import_jquery14.default.fn[NAME14].noConflict = function() {
    import_jquery14.default.fn[NAME14] = JQUERY_NO_CONFLICT14;
    return TodoList._jQueryInterface;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!colorlib!h!q/!admin!l!t!e@v3.2.1-0.20220712102124-9510278efd24+incompatible/build/js/Treeview.js
  var import_jquery15 = __toESM(__require("jquery"));
  var NAME15 = "Treeview";
  var DATA_KEY15 = "lte.treeview";
  var EVENT_KEY8 = `.${DATA_KEY15}`;
  var JQUERY_NO_CONFLICT15 = import_jquery15.default.fn[NAME15];
  var EVENT_EXPANDED4 = `expanded${EVENT_KEY8}`;
  var EVENT_COLLAPSED5 = `collapsed${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY8}`;
  var SELECTOR_LI = ".nav-item";
  var SELECTOR_LINK = ".nav-link";
  var SELECTOR_TREEVIEW_MENU = ".nav-treeview";
  var SELECTOR_OPEN = ".menu-open";
  var SELECTOR_DATA_WIDGET3 = '[data-widget="treeview"]';
  var CLASS_NAME_OPEN4 = "menu-open";
  var CLASS_NAME_IS_OPENING2 = "menu-is-opening";
  var CLASS_NAME_SIDEBAR_COLLAPSED2 = "sidebar-collapse";
  var Default13 = {
    trigger: `${SELECTOR_DATA_WIDGET3} ${SELECTOR_LINK}`,
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  };
  var Treeview = class {
    constructor(element, config) {
      this._config = config;
      this._element = element;
    }
    _init() {
      (0, import_jquery15.default)(`${SELECTOR_LI}${SELECTOR_OPEN} ${SELECTOR_TREEVIEW_MENU}${SELECTOR_OPEN}`).css("display", "block");
      this._setupListeners();
    }
    expand(treeviewMenu, parentLi) {
      const expandedEvent = import_jquery15.default.Event(EVENT_EXPANDED4);
      if (this._config.accordion) {
        const openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
        const openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first();
        this.collapse(openTreeview, openMenuLi);
      }
      parentLi.addClass(CLASS_NAME_IS_OPENING2);
      treeviewMenu.stop().slideDown(this._config.animationSpeed, () => {
        parentLi.addClass(CLASS_NAME_OPEN4);
        (0, import_jquery15.default)(this._element).trigger(expandedEvent);
      });
      if (this._config.expandSidebar) {
        this._expandSidebar();
      }
    }
    collapse(treeviewMenu, parentLi) {
      const collapsedEvent = import_jquery15.default.Event(EVENT_COLLAPSED5);
      parentLi.removeClass(`${CLASS_NAME_IS_OPENING2} ${CLASS_NAME_OPEN4}`);
      treeviewMenu.stop().slideUp(this._config.animationSpeed, () => {
        (0, import_jquery15.default)(this._element).trigger(collapsedEvent);
        treeviewMenu.find(`${SELECTOR_OPEN} > ${SELECTOR_TREEVIEW_MENU}`).slideUp();
        treeviewMenu.find(SELECTOR_OPEN).removeClass(`${CLASS_NAME_IS_OPENING2} ${CLASS_NAME_OPEN4}`);
      });
    }
    toggle(event) {
      const $relativeTarget = (0, import_jquery15.default)(event.currentTarget);
      const $parent = $relativeTarget.parent();
      let treeviewMenu = $parent.find(`> ${SELECTOR_TREEVIEW_MENU}`);
      if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
        if (!$parent.is(SELECTOR_LI)) {
          treeviewMenu = $parent.parent().find(`> ${SELECTOR_TREEVIEW_MENU}`);
        }
        if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
          return;
        }
      }
      event.preventDefault();
      const parentLi = $relativeTarget.parents(SELECTOR_LI).first();
      const isOpen = parentLi.hasClass(CLASS_NAME_OPEN4);
      if (isOpen) {
        this.collapse((0, import_jquery15.default)(treeviewMenu), parentLi);
      } else {
        this.expand((0, import_jquery15.default)(treeviewMenu), parentLi);
      }
    }
    _setupListeners() {
      const elementId = this._element.attr("id") !== void 0 ? `#${this._element.attr("id")}` : "";
      (0, import_jquery15.default)(document).on("click", `${elementId}${this._config.trigger}`, (event) => {
        this.toggle(event);
      });
    }
    _expandSidebar() {
      if ((0, import_jquery15.default)("body").hasClass(CLASS_NAME_SIDEBAR_COLLAPSED2)) {
        (0, import_jquery15.default)(this._config.sidebarButtonSelector).PushMenu("expand");
      }
    }
    static _jQueryInterface(config) {
      return this.each(function() {
        let data = (0, import_jquery15.default)(this).data(DATA_KEY15);
        const _config = import_jquery15.default.extend({}, Default13, typeof config === "object" ? config : (0, import_jquery15.default)(this).data());
        if (!data) {
          data = new Treeview((0, import_jquery15.default)(this), _config);
          (0, import_jquery15.default)(this).data(DATA_KEY15, data);
          data._init();
        } else if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        } else if (typeof config === "undefined") {
          data._init();
        }
      });
    }
  };
  (0, import_jquery15.default)(window).on(EVENT_LOAD_DATA_API, () => {
    (0, import_jquery15.default)(SELECTOR_DATA_WIDGET3).each(function() {
      Treeview._jQueryInterface.call((0, import_jquery15.default)(this), "init");
    });
  });
  import_jquery15.default.fn[NAME15] = Treeview._jQueryInterface;
  import_jquery15.default.fn[NAME15].Constructor = Treeview;
  import_jquery15.default.fn[NAME15].noConflict = function() {
    import_jquery15.default.fn[NAME15] = JQUERY_NO_CONFLICT15;
    return Treeview._jQueryInterface;
  };
})();
