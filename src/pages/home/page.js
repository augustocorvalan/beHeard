import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import App from "../../common/components/App";

class HomePage extends React.Component {
	render() {

		return (
			<App>
				<h1>Welcome to Redux Shell</h1>
			</App>
		);
	}
};

function mapStateToProps(state) {
	return {
		//map state to props here
	}
}

export default connect(mapStateToProps)(HomePage);