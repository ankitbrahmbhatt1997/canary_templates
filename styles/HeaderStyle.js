import styled from "styled-components";

export const HeaderStyle = styled.header`
	padding: 25px 35px;
	max-height: 75px;
	display: flex;
	align-items: center;
	background: #fff;
	justify-content: space-between;
	border-bottom: 1px solid #f5f5f5;
	.logo {
		font-size: 1.7em;
		font-weight: 800;
		color: rgba(0, 0, 0, 0.7);
	}
	.navigation {
		a {
			margin: 0 15px;
			color: #222;
			&.box {
				border: 1px solid #222;
				padding: 5px 10px;
			}
		}
	}
`;
