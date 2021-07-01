import './index.css';
import { useState } from 'react';
import WizardForm from './components/WizardForm';
import WizardList from './components/WizardList';

function App() {
	const [wizards, setWizards] = useState([]);
	const [wizardToEdit, setWizardToEdit] = useState({});

	const chooseWizard = (wizard) => {
		console.log(`App sees ${wizard.name}`);
		setWizardToEdit(wizard);
	};

	const onSubmit = (wizard) => {
		const newWizardArray = [...wizards, wizard];
		setWizards(newWizardArray);
	};

	return (
		<div className="container">
			<WizardForm
				title="Wizard Form"
				onSubmit={onSubmit}
				wizard={wizardToEdit}
			/>
			<WizardList wizards={wizards} chooseWizard={chooseWizard} />
		</div>
	);
}

export default App;
