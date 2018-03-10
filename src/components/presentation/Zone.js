import React, { Component } from 'react';
import styles from './styles.js';

class Zone extends Component {
	onSelectTitle(event) {
		event.preventDefault();
		this.props.select(this.props.index);
	}

	render() {
		const title = (this.props.isSelected) ? <h4 href="#">{this.props.currentZone.name}</h4> : <h4 href="#">{this.props.currentZone.name}</h4>
		const zipCode = this.props.currentZone.zipCodes.map(zip => {
			return zip + ' ';
		})

		return (
			<div className="glyphicon glyphicon">
				<div className="detail" onClick={this.onSelectTitle.bind(this)} style={style.header}>
					{title}
				</div>
			</div>
		)

		// return (
		// 	<div style={style.container}>
		// 		<h2 className="detail" onClick={this.onSelectTitle.bind(this)} style={style.header}>
		// 			{title}
		// 		</h2>
		// 	</div>
		// )
	}
}
const style = styles.zone;


export default Zone
