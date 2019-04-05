import { RequestMainContent, AnchorButton } from "../../styles/_index";

const MainContent = () => (
	<RequestMainContent>
		<div className="request-box">
			<h4>For Buying Books</h4>
			<p>
				Request of Amount 0.01 ETH to the Etherum Address{" "}
				<b>d6s5d46s4d654sd654v656v654d54</b>
			</p>
			<hr />
			<AnchorButton display="block" width="50%" radius="5px">
				Approve
			</AnchorButton>
		</div>
		<div className="request-box">
			<h4>For School Uniforms</h4>
			<p>
				Amount : <b>0.05 ETH</b>
			</p>
			<p>
				To : <b>0ssac6as62a626+a65a6d2sa</b>
			</p>
			<hr />
			<AnchorButton display="block" width="50%" radius="5px">
				Approve
			</AnchorButton>
		</div>
	</RequestMainContent>
);

export default MainContent;
