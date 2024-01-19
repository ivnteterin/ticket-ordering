import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormContext } from '../state';

const IndexPage = () => {
	const router = useRouter();
	const { nextStep } = useFormContext();

	useEffect(() => {
		router.push(`/step${nextStep}`);
	}, []);

	return;
};

export default IndexPage;
