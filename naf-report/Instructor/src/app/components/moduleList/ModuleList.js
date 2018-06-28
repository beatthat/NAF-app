import React from 'react';
import PropTypes from 'prop-types';
import ModuleButton from './ModuleButton';

const divStyle = {
	marginLeft: 20
};

export default class ModuleList extends React.Component {

	constructor(props) {
		super(props);
	}



	render() {
		return (
				<div className=" col-md-12 row horiz-model-inside"
					style={{marginBottom: '5px'}}>
					<div style={divStyle}>
						{this.props.modules.map((module) =>
						<ModuleButton key={module.id} index={module._id} name={module.name} 
						selected={module.selected} chooseModule={this.props.chooseModule} />
						)}
					</div>
				</div>

		);
	}

}

ModuleList.propTypes = {
	modules: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			selected: PropTypes.bool
		})
	),
	chooseModule: PropTypes.func
}




