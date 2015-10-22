var http = require("http"),
    objectForEach = require("object-for_each");


objectForEach(http.STATUS_CODES, function(value, key) {
    exports[key] = value;
});
