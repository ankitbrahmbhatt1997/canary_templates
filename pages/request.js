import LeftSide from "../components/request/left_aside";
import MainContent from "../components/request/main_content";
import RightSide from "../components/request/right_aside";
import { RequestContainerStyle } from "../styles/_index";

const Request = () => (
	<RequestContainerStyle>
		<LeftSide />
		<MainContent />
		<RightSide />
	</RequestContainerStyle>
);

export default Request;
