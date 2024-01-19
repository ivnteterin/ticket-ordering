import 'tailwindcss/tailwind.css';
import { FormProvider } from '../state';

function MyApp({ Component, pageProps }) {
	return (
		<FormProvider>
			<Component {...pageProps} />
		</FormProvider>
	);
}

export default MyApp;
