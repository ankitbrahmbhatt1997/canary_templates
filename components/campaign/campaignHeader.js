import { CampaignHeaderContainer } from "../../styles/_index";

const CampaignHeader = () => (
	<CampaignHeaderContainer>
		<div className="user-meta">
			<img src="https://unsplash.it/150/150" alt="" />
			<span>By Ankit Brahimbhatt</span>
			<b>3 Created</b>
		</div>
		<div className="agenda">
			<h2>Proper Education For Children</h2>
			<p>
				This campaign is started by us in hope to provide foods for the kids...
			</p>
		</div>
	</CampaignHeaderContainer>
);

export default CampaignHeader;
