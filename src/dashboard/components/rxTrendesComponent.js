import React from 'react';
import { Col } from 'react-bootstrap';
import TableViewComponent from '../../hoc/tableviewComponent';

const RxTrendsComponent = (props) => {

    let rxTemplate = props.rxData.map(item => {
        return (
            <tr key={item.name}>
                <td colSpan="2">{item.name}</td>
                <td className="previous-label">{Math.floor(item.previous / 1000)} K </td>
                <td>{Math.floor(item.current / 1000)} K </td>
                <td>{(item.current > item.previous) ? <span className="positive-arrow glyphicon glyphicon-arrow-up"></span> : <span className="negative-arrow glyphicon glyphicon-arrow-down"></span>}</td>
                <td className={(item.current > item.previous) ? 'number-positive' : 'number-negitive'}>{(Math.floor(Math.abs(item.previous - item.current)) / 1000 % 100).toFixed(2)} %</td>
            </tr>
        )
    });
    return (
        <Col xs={4} md={4}>
            <TableViewComponent panelTitle={'Rx  Trends'} tableData={rxTemplate} />
        </Col>
    );
}

export default RxTrendsComponent;