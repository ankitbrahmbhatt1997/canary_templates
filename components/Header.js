import Link from "next/link";
import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => (
	<HeaderStyle>
		<Link href="#">
			<a className="logo">CrowdCoin</a>
		</Link>
		<div className="navigation">
			<Link href="signin">
				<a>Log In</a>
			</Link>
			<Link href="signup">
				<a className="box">Sign Up</a>
			</Link>
		</div>
	</HeaderStyle>
);

export default Header;
