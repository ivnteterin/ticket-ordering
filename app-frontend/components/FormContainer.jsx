import Head from 'next/head';
import Footer from './Footer';
import Form from './Form';

export default function Page({ currentStep, formSteps, formData, onSubmit, onReturn }) {
	const handleFormStepSubmit = (data) => {
		onSubmit(data);
	};
	const handleGoBackSubmit = () => {
		onReturn();
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Ticket Order Form</title>
				<link rel='icon' href='favicon.ico' />
			</Head>

			<div>
				<Form
					data={formData}
					step={currentStep}
					steps={formSteps.length}
					fields={formSteps[currentStep - 1].fields}
					placeholders={formSteps[currentStep - 1].placeholders}
					onSubmit={handleFormStepSubmit}
					onReturn={handleGoBackSubmit}
				/>
			</div>
			<Footer />
		</div>
	);
}
