var RetiredForagerBee = function() {
	ForagerBee.call(this);
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.constructor = RetiredForagerBee;
