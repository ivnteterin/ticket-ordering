const Button = ({ name, clicked }) => {
	const commonBtnCSS = 'mt-8 py-2 px-4 border rounded focus:outline-none';

	const diffBtnCSS =
		name === 'Back'
			? 'bg-white hover:bg-gray-100 text-gray-800 font-semibold border-gray-400 shadow'
			: 'justify-self-end bg-pink-500 hover:bg-pink-700 text-white font-bold border-pink-700';

	return (
		<button
			className={`${commonBtnCSS} ${diffBtnCSS}`}
			data-testid={name === 'Back' ? 'back' : 'submit'}
			onClick={clicked}
		>
			{name}
		</button>
	);
};

export default Button;
