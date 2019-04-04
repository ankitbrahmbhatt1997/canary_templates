import Link from "next/link";
import {
	SignInForm,
	InputStyle,
	ButtonStyle,
	SwitchTab,
	FLX
} from "../styles/_index";

const SignIn = () => (
	<SignInForm>
		<SwitchTab>
			<Link href="signin">
				<a className="active">Sign In</a>
			</Link>
			<Link href="signup">
				<a>Sign Up</a>
			</Link>
		</SwitchTab>
		<div className="form-group">
			<InputStyle placeholder="Your Email" />
		</div>
		<div className="form-group">
			<InputStyle placeholder="Your Password" />
		</div>
		<FLX>
			<div className="form-group">
				<input id="remember" type="checkbox" />
				<label htmlFor="remember"> Remember me</label>
			</div>
			<Link href="#">
				<a>Forgot your password?</a>
			</Link>
		</FLX>
		<ButtonStyle bg="#1ba94c" color="#fff">
			Sign In
		</ButtonStyle>
	</SignInForm>
);

export default SignIn;
