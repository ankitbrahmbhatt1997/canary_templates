import { CampaignContainer } from "../styles/_index";
import CampaignHeader from "../components/campaign/campaignHeader";
import CampaignContent from "../components/campaign/campaignContent";

const Campaign = () => (
	<CampaignContainer>
		<CampaignHeader />
		<CampaignContent />
	</CampaignContainer>
);

export default Campaign;
