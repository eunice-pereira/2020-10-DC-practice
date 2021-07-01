import React from 'react';

const WizardList = (props) => {
	return (
		<div>
			<ul>
				{props.wizards.map((w) => (
					<li
						key={w.name}
						onClick={(e) => {
							console.log(w.name);
							props.chooseWizard(w);
						}}
					>
						{w.name}: {w.occupation} - {w.house}
					</li>
				))}
			</ul>
		</div>
	);
};

export default WizardList;
