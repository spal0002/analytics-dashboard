import React from 'react';
import { Row, Jumbotron,Col } from 'react-bootstrap';

const QuickMarketComponent = (props) => {
    let quickTemplate = props.quickData.map(item => {
        return (
            <Col key={item.name} xs={3} md={3}>
            <Jumbotron className={item.name}>
            <span> {item.name} </span>
            <div className="quick-items">
                <span className="pull-left"> {Math.floor(item.previous % 1000000 % 10) } M</span>   /  <span className="current-item"> { Math.floor(item.current % 1000000 % 10) } M </span>
                {(item.current > item.previous) ? <span className="positive-arrow glyphicon glyphicon-arrow-up"></span> : <span className="negative-arrow glyphicon glyphicon-arrow-down"></span> }<span className=""> {Math.floor(Math.abs(item.previous - item.current) /100 % 10) } % </span></div>
            <div className="sub-title"> <span className="pull-left"> PI2 </span>   <span className="pull-right">RI2</span> </div>
            </Jumbotron>
            </Col>

        )
    });
    return (
        <Row className="quick-container">
            {quickTemplate}
        </Row>
    );
}

export default QuickMarketComponent;