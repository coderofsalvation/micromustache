var MicroMustache = function () {
    var r = {};
    return r._rex = /\{\{(\w+)\}\}/g, r._repFn = function (r) {
        return function (e, n) {
            var t = r[n];
            switch (typeof t) {
                case"string":
                case"number":
                case"boolean":
                    return t;
                case"function":
                    return t(n);
                default:
                    return""
            }
        }
    }, r.render = function (e, n) {
        return"string" != typeof e ? e : (("object" != typeof n || null === n) && (n = {}), e.replace(r._rex, r._repFn(n)))
    }, r.compile = function (e) {
        return function (n) {
            return r.render(e, n)
        }
    }, r
}();