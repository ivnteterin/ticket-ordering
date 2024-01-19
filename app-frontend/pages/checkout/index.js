import Head from 'next/head';
import Footer from '../../components/Footer';
import Checkout from '../../components/Checkout';
import { useFormContext } from '../../state';
import { useRouter } from 'next/router';
import Completion from '../../components/Completion';

const Page = () => {
	const router = useRouter();
	const { formData, nextStep, updateSubmit, updateNextStep, updateFormData, submitted } = useFormContext();

	const handleSubmit = () => {
		updateSubmit(true);
	};

	const handleReturn = () => {
		router.push(`/step${nextStep}`);
	};

	const handleFinalSubmit = () => {
		router.push(`/`);
		updateNextStep(1);
		updateFormData({});
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Checkout</title>
			</Head>

			<div>
				{' '}
				{submitted ? (
					<Completion onSubmit={handleFinalSubmit} />
				) : (
					<Checkout data={formData} onSubmit={handleSubmit} onReturn={handleReturn} />
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Page;
