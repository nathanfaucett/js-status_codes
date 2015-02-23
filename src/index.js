var forEach = require("for_each"),
    http = require("http");


forEach(http.STATUS_CODES, function(value, key) {
    exports[key] = value;
});
