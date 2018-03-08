import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../css/bootstrap.css';
import { fetchBeerList } from './async.action';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){

        const { fetchBeerList } = this.props;
        fetchBeerList();
    }
    
    render() {
    console.log(this.props.beerList, "beerlist----------------------->")
        return (
            <div className="pageLayout">
                <header><h1>The Brewery - Transport Refrigeration Sensors</h1></header>
                <div className="row">
                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                <h3 className="beertype">KingFisher</h3>
                                <span className="currentTemp">34</span>
                                <span className="tmpLabel">Current Temp</span>
                                <span className="rangeTemp">20-40</span>
                                <span className="tmpLabel">Temp Range</span>

                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer">
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    beerList: state.beerList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);