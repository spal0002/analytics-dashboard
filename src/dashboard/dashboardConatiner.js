import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionBuilder from "../actions/index";
import BrandsComponent from './components/brandComponent';
import QuickMarketComponent from './components/quickMarketComponent';
import MixTrendsComponent from './components/mixTrendsComponent';
import RxTrendsComponent from './components/rxTrendesComponent';
import CostMetricsComponent from './components/costMetricsComponents';
import MapComponent from './components/mapComponent';



class DashboardComponent extends Component {

    state = {
        brands: [],
        dashboardData: []
    }

    componentDidMount() {
        this.props.loadAllDashboardData()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dashboardData: nextProps.dashboardData, brands: nextProps.brands
        })
    }

    render() {
        return (
            <div className="dashboard-container">
                <Row>
                    <Col xs={6} md={6}>
                        <p className="margin-0">Market Dashboard - GLP -1</p>
                        <Breadcrumb> Home / Market</Breadcrumb>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className="pull-right"  >
                            <p className="margin-0">P12: Proir 12 months</p>
                            <p>R12: Recent 12 months</p>
                        </div>
                    </Col>
                </Row>
                {this.state.dashboardData.patients ? <QuickMarketComponent quickData={this.state.dashboardData.quick} /> : null}
                <Col xs={6} md={6}>
                    <BrandsComponent brandsData={this.state.brands} />
                </Col>
                <Col xs={6} md={6}>
                    <MapComponent />
                </Col>

                <Row className="trends-container">
                    {this.state.dashboardData.patients ? <MixTrendsComponent patientsData={this.state.dashboardData.patients} /> : null}
                    {this.state.dashboardData.rx ? <RxTrendsComponent rxData={this.state.dashboardData.rx} /> : null}
                    {this.state.dashboardData.cost ? <CostMetricsComponent costData={this.state.dashboardData.cost} /> : null}
                </Row>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        dashboardData: state.dashboardData.dashboard,
        brands: state.dashboardData.brands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllDashboardData: () => dispatch(actionBuilder.loadDashboard())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
