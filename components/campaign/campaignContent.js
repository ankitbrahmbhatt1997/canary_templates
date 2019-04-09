import {
	CampaignContentContainer,
	CampaignInfo,
	ButtonStyle
} from "../../styles/_index";

const CampaignContent = () => (
	<CampaignContentContainer>
		<section id="main-content">
			<img src="https://unsplash.it/1000/1000" alt="" />
			<div id="info">
				<span className="line" />
				<span>
					10 ETH <b>collected of 20 ETH</b>
				</span>
				<span>
					52 <b>contributers</b>
				</span>
				<span>
					20 <b>20 days to go</b>
				</span>
				<span>
					0.01 <b>minimum subscription</b>
				</span>
			</div>
		</section>
		<section id="nest-content">
			<nav>
				<a className="active" href="">
					Campaign
				</a>
				<a href="">FAQ</a>
				<a href="">Updates</a>
				<a href="">Comments</a>
			</nav>
			<main className="campaign-about">
				<CampaignInfo>
					<h3>About</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
						dolor ipsum ipsam suscipit, eius fugiat, earum mollitia explicabo
						eveniet distinctio pariatur inventore voluptatum dolorum sint
						soluta unde laboriosam facilis fuga!
					</p>
				</CampaignInfo>
				<form action="" id="contribution">
					<label htmlFor="">Make a contribution</label>
					<div className="input-group">
						<input type="text" />
						<span>ETH</span>
					</div>
					<ButtonStyle style={{ fontWeight: "bold" }} color="#fff" bg="green">
						Contribute
					</ButtonStyle>
				</form>
			</main>
		</section>
	</CampaignContentContainer>
);

export default CampaignContent;
