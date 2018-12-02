import React from 'react';
import { Panel, Table } from 'react-bootstrap';

const TableViewComponent = (props) => {
    return (
            <Panel>
                <Panel.Title >
                  {props.panelTitle}
                </Panel.Title>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan="2"></th>
                            <th className="previous-label">P12</th>
                            <th>R12</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{props.tableData}</tbody>
                </Table>
            </Panel>
    );
}

export default TableViewComponent;