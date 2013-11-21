var Customer = (function () {
	var _Customer		= {},
		_private 	= createPrivateStore("__Customer_priv");

	_Customer.DEFAULT_NAME = "steve";

	_Customer.constructor = function Customer (name, _protected) {
		if (!(this instanceof Customer)) return new Customer();

		// provide optional access to protected members
		if (typeof (_protected) === "object") {
			_protected.setBalance = _setBalance.bind(this);
			_protected.getBalance = _getBalance.bind(this);
		}

		this.name = (typeof (name) === "string") ? name : _Customer.DEFAULT_NAME;

		_private.init(this, {
			creditLimit: 1000,
			balance: 0
		});
	};

	function _increaseBalance (amount) {
		_private(this).balance += (typeof (amount) === "number") ? amount : 1;

		if (_private(this).balance > _private(this).creditLimit) {
			_private(this).balance = _private(this).creditLimit;
		}

		return this;
	}

	function _getIncreasedBalance (amount) {
		_increaseBalance.call(this, amount);
		return _getBalance.call(this);
	}

	function _setBalance(val) {
		_private(this).balance = val;
		return this;
	}

	function _getBalance () {
		return _private(this).balance;
	}

	function _increaseCreditLimit (amount) {
		if (typeof (amount) === "number") {
			_private(this).creditLimit += amount;
		}

		return _private(this).creditLimit;
	}

	_Customer.getIncreasedBalance = _getIncreasedBalance;
	_Customer.increaseCreditLimit = _increaseCreditLimit;

	return classify(_Customer);

})();

var VIPCustomer = (function () {
	var _VIPCustomer	= extendClass(Customer),
		_super		= Customer.prototype,
		_private	= createPrivateStore("_VIPCustomer_priv");

	_VIPCustomer.constructor = function VIPCustomer (age, name) {
		if (!(this instanceof VIPCustomer)) return new VIPCustomer(age, name);
		var _privateStore = {};

		Customer.call(this, name, _privateStore);		/* superclass constructor (add base class
									protected methods to our own private store) */

		_private.init(this, _privateStore);

		this.age = (typeof (age) === "number") ? age : 65;
	}

	// ** Override ** //
	function _getIncreasedBalance (amount) {
		var getBalance = _private(this).getBalance;		// protected method

		var oldBalance = getBalance();
		var newBalance = _super.getIncreasedBalance.call(this, amount);

		if (newBalance !== (oldBalance + amount)) {
			this.increaseCreditLimit(amount);

			// try again
			_super.getIncreasedBalance.call(this, amount);
		}

		return getBalance();
	}

	_VIPCustomer.getIncreasedBalance = _getIncreasedBalance;

	return classify(_VIPCustomer);

})();

