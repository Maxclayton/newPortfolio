import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img
                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>
                        <p>HTML/CSS | Bootstrap | React | React Native | NodeJS | Express | Mongo </p>
                        <div className="social-links">

                            {/* LinkedIn */ }
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                        {/* Github */ }
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                        {/* LinkedIn */ }
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                        {/* LinkedIn */ }
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;