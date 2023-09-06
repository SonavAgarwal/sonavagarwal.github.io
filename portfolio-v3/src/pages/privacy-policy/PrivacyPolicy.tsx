import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
	return (
		<div className="privacy-policy-page">
			<div className="privacy-policy">
				<h1>Privacy Policy</h1>
				<p>
					This site uses Google Analytics.{" "}
					<a href="https://policies.google.com/technologies/partner-sites">
						How Google uses data on its partners sites.
					</a>
				</p>
				<p>
					This site do not collect your personal information. You can turn off
					cookies at any time through your browser.
				</p>
				<p>
					This site's owner reserves the right to change this policy at any
					time.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
