import Button from './Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import utils from '../utils/utils';

const Form = ({ data, step, fields, placeholders, onSubmit, onReturn }) => {
	// Get data from parent

	const [formData, setFormData] = useState({ ...data });

	// React Hook Form
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	// Handle form submit
	const handleButtonClick = (dataFromForm) => {
		onSubmit({ ...dataFromForm });
	};

	// Handle go back button
	const handleGoBackClick = () => {
		onReturn();
	};

	// Handle input change
	function handleChange(e) {
		//modify the state of the form data on input change
		setFormData({ ...formData, [e.target.id]: utils.cleanData(e.target.id, e.target.value) });
	}

	return (
		<div
			className='flex justify-between flex-col border border-slate-300 p-10 rounded-2xl shadow-xl'
			style={{ minHeight: 450 }}
		>
			<div>
				<h1 className='text-4xl my-4 font-bold text-center' data-testid={'title'}>
					Step <span className='font-thin'>{step}</span>
					<div style={{ width: 50 }} className='mt-4 border-2 px-4 mx-auto border-pink-500'></div>
				</h1>
				<div className='mt-8'>
					<form id={`form-${step}`} className='flex mb-6 flex-col space-y-2 items-center'>
						{fields.map((field, id) => (
							<div key={`outer-${id}`} className='flex flex-col'>
								<div key={id} className='flex justify-center' style={{ minWidth: 300 }}>
									<input
										className='ml-4 border-black border-b border-slate-200'
										placeholder={placeholders[id]}
										data-testid={utils.camelcase(field)}
										id={field}
										type={utils.getType(field)}
										onInput={handleChange}
										value={formData[field]}
										{...register(field, utils.getOptions(field))}
									/>
								</div>
								<div className='text-center'>
									<small className='text-red-500 text-xs italic'>
										{utils.errorHandler(errors[field]?.type, field)}
									</small>
								</div>
							</div>
						))}
					</form>
					<div className='flex justify-between'>
						{step > 1 ? <Button name='Back' clicked={handleGoBackClick} /> : <div></div>}
						<Button name='Submit' clicked={handleSubmit(handleButtonClick)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
