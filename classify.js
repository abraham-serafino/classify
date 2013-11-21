function classify (o) {
    var _F = function () {};

    if (typeof (o) === "object") {
        if (typeof (o.constructor) === "function") {
            _F = o.constructor;
        }

        _F.prototype = o;
    }

    return _F;
}

function extendClass (c) {
	function _F () {}

	if (typeof (c) === "function") {
		_F.prototype = c.prototype;
	}

	return new _F();
}

function createPrivateStore (functionName) {
	var key = {};

	function _private (o) {
		return o[functionName](key);
	}

	_private.init = function (o, contents) {
		o[functionName] = function (aKey) {
			if (aKey === key) {
				return contents;
			}
		};
	};

	return _private;
}

