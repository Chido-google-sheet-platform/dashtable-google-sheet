import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from "shards-react";


import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

// see documentation for supported input formats
const data = [['attribute', 'attribute2'], ['1', '2'],['3', '4'],['1', '2'],['3', '4']];

class PivotTable extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {

        return (
            <Container fluid className="main-content-container px-4">
                   <PivotTableUI
                data={data}
                onChange={s => this.setState(s)}
                {...this.state}
            />
                        
            </Container>
        );
    }
}

export default PivotTable;
