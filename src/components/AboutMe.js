import React, { Component } from 'react';
import { Grid } from 'react-mdl';


class About extends Component {
    render() {
        return (
            <div className="aboutme-body">
                <Grid className="aboutme-grid">
<Cell col={6}>half1</Cell>
<Cell col={6}>half1</Cell>
                </Grid>
            </div>
        )
    }
}

export default About;