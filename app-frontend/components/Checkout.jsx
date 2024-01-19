import Button from './Button';
import utils from '../utils/utils';

const Checkout = ({ data, onSubmit, onReturn }) => {
	const handleFinalSubmit = () => {
		onSubmit();
	};

	const handleGoBackClick = () => {
		onReturn();
	};

	return (
		<div className='flex justify-between flex-col border border-slate-300 p-10 rounded-2xl shadow-xl '>
			<h1 className='text-4xl my-4 font-bold text-center'>
				Checkout
				<div style={{ width: 50 }} className='mt-4 border-2 px-4 mx-auto border-pink-500'></div>
			</h1>
			<div className='border'>
				{Object.entries(data).map(([field, value]) => (
					<div className='flex border border-slate-100 p-2' key={field}>
						<div className='capitalize w-36 font-bold'>{field}:</div>
						<div className='border-l-2 border-slate-200'></div>
						<div className='ml-2' data-testid={utils.camelcase(field)}>
							{value}
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-between'>
				<Button name='Back' clicked={handleGoBackClick} />
				<Button name='Submit' clicked={handleFinalSubmit} />
			</div>
		</div>
	);
};

export default Checkout;
