import React, {
	PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
	AnimatedView,
	StatsCard,
	EarningGraph,
	Notifications,
	WorkProgress,
	ClassTestLog,
	ModuleList,
	RequirementsWrapper,
} from '../../components';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import '../../style/chartist.css';
import HeatMap from 'react-heatmap-grid';
import $ from 'jquery';
import Collapsible from 'react-collapsible';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const graphLabelName = {
  'marginLeft' : '22px',
  'fontWeight' : 'bold',
  'fontSize' : '1.05em'
}
const graphLabelResults = {
  'marginLeft': '42%',
  'fontWeight': 'bold',
  'fontSize': '1.05em'
}

class MostRecentWrapper extends React.Component {

	constructor(props) {
		super(props);
		let topics = props.topics;
		let labels = topics.map(ele => {
			return ele.label;
		});
		let leftSeries = topics.map(ele => {
			return -ele.fail;
		});
		let rightSeries = topics.map(ele => {
			return ele.pass;
		});
		let series = [leftSeries, rightSeries];
		this.state = {
			key: 1,
			heatData:null,
			data: {labels: labels, series: series},
			options : {
				seriesBarDistance: 0,
				reverseData: true,
				horizontalBars: true,
				axisX: {
				 offset: 70,
				 onlyInteger: true,
				labelInterpolationFnc: function(value) {
					return Math.abs(value) ;
					}
				},
				height: '350px'
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		let topics = nextProps.topics;
		let labels = topics.map(ele => {
			return ele.label;
		});
		let leftSeries = topics.map(ele => {
			return -ele.fail;
		});
		let rightSeries = topics.map(ele => {
			return ele.pass;
		});
		let series = [leftSeries, rightSeries];
		this.setState({
			data: {labels: labels, series: series}
		});
	}

	render() {
		return (
			<div>
					<div
						className="row"
						style={{marginBottom: '5px'}}>
					
						<h2 className="testhistory-title">Most Recent Test Results:</h2>
						<div className="col-md-2 topcard-left">
						 <div className="sm-st-info"><div>Class Name</div><span className="testname">{this.props.results.className}</span></div>
						</div>
						<div className="col-md-3 topcard">
							<div className="sm-st-info"><div>Test Name</div><span className="right-align-2">{this.props.results.testName}</span></div>
						</div>
						<div className="col-md-1 topcard">
							 <div className="sm-st-info"><div>Date Completed</div><span className="right-align-3">
							 {moment(this.props.results.dateCompleted).format('MM/DD/YYYY')}
							 </span></div>
						</div>
						<div className="col-md-1 topcard">
							 <div className="sm-st-info"><div># Finished</div><span className="right-align-4">{this.props.results.finished}</span></div>
						</div>
							 <div className="col-md-1 topcard">
							 <div className="sm-st-info"><div># Incomplete</div><span className="right-align-5">{this.props.results.inComplete}</span></div>
						</div>
							 <div className="col-md-1 topcard">
							 <div className="sm-st-info"><div># Not Start</div><span className="right-align-6">{this.props.results.notStart}</span></div>
						</div>
							 <div className="col-md-1 topcard">
							 <div className="sm-st-info"><div>Average %</div><span className="right-align-7">{this.props.results.average}</span></div>
						</div>
							 <div className="col-md-1 topcard-right">
							 <div className="sm-st-info"><div>Pass %</div><span className="right-align-8">{this.props.results.pass}</span></div>
						</div>
					</div>

					<div className="row">
					<Collapsible open trigger={<div className='collapsible-icon-second'><div className='bycollapse-title'><i className='fa fa-caret-right-collpase'></i>Pass/Fail by Topics</div> </div>}>
		              	<div style={{marginTop: '40px', marginBottom: '30px'}}>
		              		<span style={graphLabelName} > Name </span>
          					<span style={graphLabelResults} >Pass/Fail </span>
						</div>
						<div className="col-md-10 horizontalbar-div">
						 <ChartistGraph className={'ct-octave'} data={this.state.data} options={this.state.options} type={'Bar'} redraw={'true'} responsive={'true'}/>
					 
					
						</div>
					</Collapsible>     
					</div>

					<div className="row collapsible-row">
						<div className="col-md-12">
							<Collapsible trigger={<span className='collapsible-icon'><i className='fa fa-caret-right-collpase'></i>Trainee</span>}>
							<div className="collapsible-paragraph">
								 <WorkProgress trainees={this.props.trainees} />
							</div>
							</Collapsible>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
							<RequirementsWrapper byTopics={this.props.byTopics} byTrainee={this.props.byTrainee}/>
						</div>     
					</div>
			</div>
		);

	}
}

MostRecentWrapper.propTypes = {
	results: PropTypes.object,
	topics: PropTypes.array,
	trainees: PropTypes.array,
	byTopics: PropTypes.array,
	byTrainee: PropTypes.array
};

export default MostRecentWrapper;
