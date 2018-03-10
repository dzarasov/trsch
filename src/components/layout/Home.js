import React, { Component } from 'react';
import {Zones, Comments, Account} from '../containers';
import {PageHeader} from '../presentation';

class Home extends Component {
	render() {
		return (
			<div className="containers">
					<div>
						<PageHeader />
					</div>
					<div>
						<Zones />
					</div>
					<div className="col-md-12">
						<Comments />
					</div>
			</div>
		)
	}
}

export default Home