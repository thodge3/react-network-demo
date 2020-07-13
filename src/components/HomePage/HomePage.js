import React, { useContext, useEffect } from 'react';
// import { csv } from 'd3';
// import data from '../data/hero-network.csv';
import { AppContext } from '../../app/AppProvider';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Chart1 from '../Charts/Chart1/Chart1';
import Chart2 from '../Charts/Chart2/Chart2';
import Chart3 from '../Charts/Chart3/Chart3';
import Chart4 from '../Charts/Chart4/Chart4';


function HomePage() {

    const { startDate } = useContext(AppContext);

    return (
        <Container fluid>
            <Row>
                <Col lg={true}>
                    <Chart1 />
                    <Chart2 />
                </Col>
                <Col lg={true}>
                    <Chart3 />
                    <Chart4 />
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage;