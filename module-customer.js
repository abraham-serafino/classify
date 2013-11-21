function Customer (name, _protected) {
	if (!(this instanceof Customer)) return new Customer();

	var _this		= this,
		creditLimit	= 1000,
		balance		= 0;

	function _increaseBalance (amount) {
		balance += (typeof (amount) === "number") ? amount : 1;

		if (balance > creditLimit) {
			balance = creditLimit;
		}

		return _this;
	}

	function _getIncreasedBalance (amount) {
		_increaseBalance(amount);
		return _getBalance();
	}

	function _setBalance(val) {
		balance = val;
		return _this;
	}

	function _getBalance () {
		return balance;
	}

	function _increaseCreditLimit (amount) {
		if (typeof (amount) === "number") {
			creditLimit += amount;
		}

		return creditLimit;
	}

	this.name = (typeof (name) === "string") ? name : Customer.DEFAULT_NAME;

	// provide optional access to protected members
	if (typeof (_protected) === "object") {
		_protected.setBalance = _setBalance.bind(this);
		_protected.getBalance = _getBalance.bind(this);
	}

	this.getIncreasedBalance = _getIncreasedBalance;
	this.increaseCreditLimit = _increaseCreditLimit;
}

Customer.DEFAULT_NAME = "steve";

function VIPCustomer (age, name) {
	if (!(this instanceof VIPCustomer)) return new VIPCustomer(age, name);

	var _super	= {},
		_this	= this;

	Customer.call(this, name, _super);		/* superclass constructor */

	_super.getIncreasedBalance = this.getIncreasedBalance;

	function _getIncreasedBalance (amount) {
		var oldBalance = _super.getBalance();
		var newBalance = _super.getIncreasedBalance(amount);

		if (newBalance !== (oldBalance + amount)) {
			this.increaseCreditLimit(amount);

			// try again
			_super.getIncreasedBalance(amount);
		}

		return _super.getBalance();
	}

	this.age = (typeof (age) === "number") ? age : 65;

	this.getIncreasedBalance = _getIncreasedBalance;
};

VIPCustomer.prototype = Object.create(Customer.prototype);
VIPCustomer.prototype.constructor = VIPCustomer;

