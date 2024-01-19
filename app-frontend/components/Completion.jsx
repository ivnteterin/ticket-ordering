import Button from './Button';

const Completion = ({ onSubmit }) => (
	<div className='flex flex-col items-center'>
		<h2 className='text-2xl my-2 font-bold text-center'>Thank you!</h2>
		<p>You will get an email with further instructions.</p>
		<Button name={'Book more'} clicked={onSubmit} />
	</div>
);

export default Completion;
