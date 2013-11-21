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

function _abstractMethod () {
	throw new Error("Attempted to call an uniplemented abstract method.");
}

function implementInterface (I, c) {
	var methodName = "";

	for (var i = 0, iLen = I.length; i < iLen; i++) {
		methodName = I[i];

		if (typeof (methodName) === "string" && typeof (c.prototype[methodName]) !== "function") {
			throw new Error ("There were unimplemented methods.");
		}
	}
};
