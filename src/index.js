var http = require("http"),
    objectForEach = require("@nathanfaucett/object-for_each");


objectForEach(http.STATUS_CODES, function(value, key) {
    exports[key] = value;
});
