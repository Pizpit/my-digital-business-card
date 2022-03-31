import React from 'react';

export default function Buttons() {
	return (
		<div className="button-container">
			<button className="btn">
				<img className="btn-icon" src="./images/EmailIcon.png" alt="" />
				<a href="mailto:contactharoldsmith@gmail.com"> Email</a>
			</button>
			<button className="btn">
				<img className="btn-icon" src="./images/LinkedinIcon-small.png" alt="" />
				<a href="https://www.linkedin.com/in/harold-smith-iii-3a24bb235/"> LinkedIn</a>
			</button>
		</div>
	);
}
