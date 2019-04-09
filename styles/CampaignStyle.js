import styled from "styled-components";

export const CampaignContainer = styled.div`
	width: 900px;
	background: #fff;
	margin: 55px auto;
	padding: 15px;
`;
export const CampaignHeaderContainer = styled.div`
	display: flex;
	.user-meta {
		img {
			width: 105px;
			height: 75px;
			border: 1px solid #dcdcdc;
			padding: 3px;
		}
		span,
		b {
			font-size: 14px;
			display: block;
		}
		span {
			color: #a9a9a9;
		}
	}
	.agenda {
		margin-left: 55px;
		h2 {
			margin-bottom: 15px;
		}
		p {
			width: 90%;
			color: #a9a9a9;
		}
	}
`;

export const CampaignContentContainer = styled.div`
	margin-top: 25px;
	#main-content {
		display: flex;
		img {
			flex-basis: 550px;
			height: 300px;
		}
		#info {
			margin-left: 25px;
			padding-top: 10px;
			color: #a9a9a9;
			.line {
				width: 100%;
				height: 5px;
				background: green;
			}
			span {
				display: block;
				margin-bottom: 15px;
				> b {
					display: block;
				}
			}
		}
	}
	#nest-content {
		nav {
			margin-top: 25px;
			border-top: 1px solid #dcdcdc;
			border-bottom: 1px solid #dcdcdc;
			a {
				display: inline-block;
				padding: 15px;
				color: #222;
				margin: 0 5px;
				&.active {
					font-weight: bold;
					border-bottom: 5px solid green;
				}
			}
		}
	}
	.campaign-about {
		display: flex;
		justify-content: space-evenly;
		form {
			flex-basis: 300px;
			margin-top: 25px;
			align-self: center;
			border: 1px solid #dcdcdc;
			padding: 10px;
			label {
				display: block;
				text-align: center;
				padding: 10px;
			}
			.input-group {
				position: relative;
				margin-bottom: 10px;
				input {
					width: 100%;
					padding: 10px;
					padding-right: 55px;
					border: 1px solid #dcdcdc;
					&:focus {
						outline: none;
					}
				}
				span {
					position: absolute;
					background: #dcdcdc;
					top: 0;
					right: 0;
					height: 100%;
					padding: 10px;
				}
			}
		}
	}
`;

export const CampaignInfo = styled.div`
	margin: 25px 15px;
	color: #a9a9a9;
	flex-basis: 500px;
	h3 {
		margin-bottom: 15px;
	}
`;
