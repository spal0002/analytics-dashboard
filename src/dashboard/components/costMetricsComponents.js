import React from 'react';
import {  Col } from 'react-bootstrap';
import TableViewComponent from '../../hoc/tableviewComponent';

const CostMetricsComponent = (props) => {

    let costTemplate = props.costData.map(item => {
        return (
            <tr key={item.name}>
               <td colSpan="2">{item.name}</td>
                <td className="previous-label">{item.previous }</td>
                <td>{item.current}</td>
                <td>{(item.current > item.previous) ? <span className="positive-arrow glyphicon glyphicon-arrow-up"></span> : <span className="negative-arrow glyphicon glyphicon-arrow-down"></span> }</td>
                <td className={(item.current > item.previous) ? 'number-positive' : 'number-negitive'}>{(Math.abs(item.previous - item.current)).toFixed(2)} %</td>
       </tr>
        )
    });
    return (
        <Col xs={4} md={4}>
            <TableViewComponent panelTitle={'Managed Care Metrics'} tableData={costTemplate} /> 
        </Col>
    );
}

export default CostMetricsComponent;