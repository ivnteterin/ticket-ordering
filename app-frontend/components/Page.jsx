import { useEffect } from 'react';
import { formSteps } from '../data/formSteps';
import { useRouter } from 'next/router';
import FormContainer from './FormContainer';
import { useFormContext } from '../state';

const Page = ({ pageNr }) => {
	const router = useRouter();

	const { formData, nextStep, updateNextStep, updateFormData, updateSubmit } = useFormContext();

	const handleSubmit = (data) => {
		updateFormData({ ...formData, ...data });
		updateSubmit(false);
		formSteps.length === pageNr
			? router.push('/checkout')
			: (updateNextStep(nextStep + 1), router.push(`/step${nextStep + 1}`));
	};

	const handleReturn = () => {
		updateNextStep(nextStep - 1);
		router.push(`/step${nextStep - 1}`);
	};

	useEffect(() => {
		if (pageNr) updateNextStep(pageNr);
	}, []);

	return (
		<FormContainer
			currentStep={pageNr ? pageNr : nextStep}
			formSteps={formSteps}
			formData={formData}
			onSubmit={handleSubmit}
			onReturn={handleReturn}
		/>
	);
};

export default Page;
