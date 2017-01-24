define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Rest Client Item management';
      config.map([{ route: '', moduleId: 'app/item-list', title: 'Item List' }, { route: 'item/:id', moduleId: 'app/item-details', name: 'itemDetails' }, { route: 'app-info', moduleId: 'app/app-info', name: 'appInfo' }]);

      this.router = router;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('app/app-info',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AppInfo = exports.AppInfo = function AppInfo() {
    _classCallCheck(this, AppInfo);

    this.message = "Aurelia Client.";
  };
});
define('app/item-details',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ItemDetails = exports.ItemDetails = function ItemDetails() {
    _classCallCheck(this, ItemDetails);

    this.message = "Aurelia Client.";
  };
});
define('app/item-list',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Items = exports.Items = function Items() {
    _classCallCheck(this, Items);

    this.message = "Items list message";
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><nav role=\"navigation\"><div><a href=\"#\"><span>Contacts</span> </a><span>|</span> <a href=\"#/app-info\"><span>App Info</span></a></div></nav><div class=\"container\"><router-view></router-view></div></template>"; });
define('text!css/aurelia-client.css', ['module'], function(module) { module.exports = ""; });
define('text!app/app-info.html', ['module'], function(module) { module.exports = "<template>Info message: ${message} Connect to server</template>"; });
define('text!app/item-details.html', ['module'], function(module) { module.exports = "<template>Item details</template>"; });
define('text!app/item-list.html', ['module'], function(module) { module.exports = "<template>Item list. ${message} will be implemented.</template>"; });
//# sourceMappingURL=app-bundle.js.map