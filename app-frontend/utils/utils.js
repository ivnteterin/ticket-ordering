const utils = {
	getType: (field) => (field === 'age' ? 'number' : 'text'),
	capitalise: (str) => str.charAt(0).toUpperCase() + str.slice(1),
	camelcase: (str) => {
		return str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, '');
	},
	errorHandler: function (type, field) {
		let errorMsg = '';
		const fieldCapitalised = this.capitalise(field);
		switch (type) {
			case 'required':
				errorMsg =
					field === 'phone'
						? `${fieldCapitalised} number is a required field `
						: field === 'age'
						? ` ${fieldCapitalised} must be a number`
						: `${fieldCapitalised} is a required field `;

				break;
			case 'pattern':
				errorMsg =
					field === 'email'
						? ` ${fieldCapitalised} should have correct format `
						: ` ${fieldCapitalised} should not contain ${
								field === 'age' || field === 'phone' ? 'letters' : 'numbers'
						  } `;
				break;
			case 'min':
				errorMsg = ` ${fieldCapitalised} should be positive `;
				break;
			default:
				errorMsg = '';
				break;
		}
		return errorMsg;
	},
	getOptions: (field) => {
		let validatorOps = {};
		switch (field) {
			case 'first name':
			case 'last name':
				validatorOps = { required: true, pattern: /^[A-Za-z]+$/i };
				break;
			case 'age':
				validatorOps = { required: true, pattern: /^[0-9]+$/i, min: 0 };
				break;
			case 'email':
				validatorOps = { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i };
				break;
			case 'phone':
				validatorOps = { required: true, pattern: /^\+\d[\d\s]+/ };
				break;

			default:
				validatorOps = { required: true };
				break;
		}
		return validatorOps;
	},
	cleanData: (type, str) => {
		let newStr = '';
		switch (type) {
			case 'email':
				newStr = str.toLowerCase();
				break;
			case 'seat':
				newStr = str.toUpperCase();
				break;
			case 'phone':
				newStr = str.includes('+') ? str : `+${str}`;
				break;
			default:
				newStr = str;
				break;
		}
		return newStr;
	},
};

export default utils;
