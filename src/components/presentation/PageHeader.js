import React, { Component } from 'react';
import style from './styles';

class PageHeader extends Component {

	render() {
		return (
			<div>
			<header className="text-center">
				<div className="containerz">
			        <h1 style={style.pageHead}>Trucking Schools</h1>
			        <hr className="" />
			        <h2 style={style.pageHead}className="">Find Trucking School Next To Your Home</h2>
				</div>
			</header>
			</div>
		)
	}
}


export default PageHeader
