import React, { Component, PropTypes } from 'react';

class CompanyName extends Component {
	static propTypes = {
		name: PropTypes.string
	}

  render() {
    return (
			<div>
				<span className="home__company-details__title">Company</span>
				<span className="home__company-details__subtitle">{this.props.children}</span>
			</div>
    );
  }
}

export default CompanyName;
