import React from 'react';
import { Panel, Table, Badge } from 'react-bootstrap';

const brandsComponent = (props) => {

    const featuredData = props.brandsData.reduce(function (acc, val) {
        if (acc.length === 0 || acc.current_rank > val.current_rank) {
            acc.push(val);
        }
        return acc;
    }, [])


    let featuredTemplate = featuredData.map(item => {
        return (
            <tr className="border-1" key={item.name}>
                <td><p>FEATURED BRAND</p>{item.name}</td>
                <td className="text-right"><Badge>{item.previous_rank} %</Badge></td>
                <td className="text-right">  {(item.current_rank > item.previous_rank) ? <span className="positive-arrow glyphicon glyphicon-arrow-up"></span> : <span className="negative-arrow glyphicon glyphicon-arrow-down"></span> }</td>
                <td  className="text-center"><Badge className={(item.current_rank > item.previous_rank) ? 'badge-positive' : 'badge-negitive'}>{item.current_rank} %</Badge></td>
            </tr>
        )
    });

    const otherBrands = props.brandsData.filter(brand => brand.current_rank !== featuredData[0].current_rank);

    let brandsTemplate = otherBrands.map((item, index) => {
        return (
            <tr key={item.name}>
                {index===0 ? <td> <p >Other Brands</p>  {item.name}</td> : <td> {item.name}</td>}
                <td className="text-right"><Badge>{item.previous_rank} %</Badge></td>
                <td className="text-right">{(item.current_rank > item.previous_rank) ? <span className="positive-arrow glyphicon glyphicon-arrow-up"></span> : <span className="negative-arrow glyphicon glyphicon-arrow-down"></span> }</td>
                <td  className="text-center"><Badge className={(item.current_rank > item.previous_rank) ? 'badge-positive' : 'badge-negitive'}>{item.current_rank} %</Badge></td>
            </tr>
        )
    });
    return (
        <Panel className="brands-container">
                <Table>
                    <thead>
                        <tr>
                            <th className="text-left">GLP- 1 Brands</th>
                            <th colSpan="3" className="text-center">Patient Share</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th className="text-right">P12</th>
                            <th></th>
                            <th className="text-center">R12</th>
                        </tr>
                    </thead>
                    <tbody>
                       {featuredTemplate}
                       {brandsTemplate}
                    </tbody>
                </Table>
           
        </Panel>
    );
}

export default brandsComponent;