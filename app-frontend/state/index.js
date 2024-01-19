import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
	return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({});
	const [nextStep, setNextStep] = useState(1);
	const [submitted, setSubmit] = useState(false);

	const updateFormData = (data) => {
		setFormData(data);
	};

	const updateSubmit = (submit) => {
		setSubmit(submit);
	};

	const updateNextStep = (step) => {
		setNextStep(step);
	};

	return (
		<FormContext.Provider value={{ formData, nextStep, submitted, updateFormData, updateNextStep, updateSubmit }}>
			{children}
		</FormContext.Provider>
	);
};
