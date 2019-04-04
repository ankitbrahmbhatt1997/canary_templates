import Link from "next/link";
import {
	SignInForm,
	InputStyle,
	ButtonStyle,
	SwitchTab,
	FLX
} from "../styles/_index";

const SignUp = ({ query }) => (
	<SignInForm>
		<SwitchTab>
			<Link href="signin">
				<a>Log In</a>
			</Link>
			<Link href="signup">
				<a className="active">Sign Up</a>
			</Link>
		</SwitchTab>
		<div className="form-group">
			<InputStyle placeholder="Fullname" />
		</div>
		<div className="form-group">
			<InputStyle placeholder="Your Email" />
		</div>
		<div className="form-group">
			<InputStyle placeholder="Your Password" />
		</div>
		<ButtonStyle bg="#1ba94c" color="#fff">
			Sign Up
		</ButtonStyle>
	</SignInForm>
);

export default SignUp;
