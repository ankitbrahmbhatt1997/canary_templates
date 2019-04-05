import { RequestLeftContent, AnchorButton } from "../../styles/_index";

const LeftAside = () => (
	<RequestLeftContent>
		<div className="profile-box">
			<img src="https://unsplash.it/100/100" alt="" />
			<h2>Ankit Brahmbhatt</h2>
			<span>@ankit001</span>
			<AnchorButton width="80%" display="inline-block">
				Edit Profile
			</AnchorButton>
		</div>
		<div className="extra-info">
			<h2>Etherum Address</h2>
			<span>5d62sdds2d9+sdf6++9f5sd5+</span>
		</div>
	</RequestLeftContent>
);

export default LeftAside;
