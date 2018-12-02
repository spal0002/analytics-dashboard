

import React from 'react';
import { Panel, Image, } from 'react-bootstrap';
import mapImage from '../../assets/images/map.png';

const MapComponent = (props) => {
    return (
        <Panel>
            <Panel.Title >
                GLP-1 Patient Distribution (Total Mapped 16M)
         </Panel.Title>
            <Panel.Body>
                <Image src={mapImage} thumbnail />
            </Panel.Body>
        </Panel>
    );
}

export default MapComponent;