import React from 'react';
import 'react-bootstrap';
import { Grid,  Col } from 'react-bootstrap';
import HeaderComponent from '../header/headerComponent';
import FooterComponent from '../footer/footerComponent';
import Aux from '../hoc/aux';
import DashboardComponent from '../dashboard/dashboardConatiner';

const home = (props) => {

    return (
        <Aux>
            <Grid fluid={true}>
                <HeaderComponent />
                <Col className="main-content" xs={12} md={12}>
                     <DashboardComponent />
                </Col>
                <FooterComponent />
            </Grid>
        </Aux>
    )
}


export default home;
