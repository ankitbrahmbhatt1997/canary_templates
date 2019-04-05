import styled from "styled-components";

export const RequestContainerStyle = styled.div`
	margin: 75px 50px;
	display: flex;
	flex-wrap: no-wrap;
	justify-content: space-evenly;
	flex: 1;
`;

export const RequestLeftContent = styled.div`
	.profile-box,
	.extra-info {
		padding: 15px 10px;
		border-radius: 5px;

		background: #fff;
		font-size: 14px;
		span {
			display: inline-block;
			color: #a9a9a9;
		}
	}

	.profile-box {
		text-align: center;
		img {
			width: 100px;
			height: 100px;
			border: 1px solid #f5f5f5;
			padding: 5px;
			margin-bottom: 5px;
		}
		span {
			margin-bottom: 25px;
		}
	}

	.extra-info {
		margin-top: 15px;
		span {
			margin-top: 10px;
		}
	}
`;

export const RequestMainContent = styled.div`
	.request-box {
		width: 500px;
		background: #fff;
		padding: 15px;
		margin: 15px 0;
		&:first-child {
			margin-top: 0;
		}
		hr {
			display: block;
			background: #a9a9a9;
			margin: 15px 0;
		}
		p {
			margin-top: 10px;
			color: #a9a9a9;

			b {
				color: green;
			}
		}
	}
`;

export const RequestRightContent = styled.div``;
