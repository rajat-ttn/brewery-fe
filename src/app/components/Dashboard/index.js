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
    //console.log(this.props.beerList, "beerlist----------------------->")
        return (
            <div className="pageLayout">
                <header><h1>The Brewery - Transport Refrigeration Sensors</h1></header>
                <div className="row">
                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer yellowContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 1" className="beerContainerImage"/>
                            <figcaption>
                                Beer 1<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>

                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer blueContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 2"  className="beerContainerImage"/>
                            <figcaption>
                                Beer 2<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>

                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer pinkContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 3"  className="beerContainerImage"/>
                            <figcaption>
                                Beer 3<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>

                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer greenContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 4"  className="beerContainerImage"/>
                            <figcaption>
                                Beer 4<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>
                            <div className="overlay">
                                 <div className="overlayText">4.5</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer orangeContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 5"  className="beerContainerImage"/>
                            <figcaption>
                                Beer 5<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>

                        </div>
                    </div>

                    <div className="col-md-4 commonBoxModel">
                        <div className="beerContainer purpleContainer">
                            <figure>
                             <img src="../images/beer.jpg" alt="Beer 6"  className="beerContainerImage"/>
                            <figcaption>
                                Beer 6<br/>
                                Current Temp<br/>
                                Temp Range
                            </figcaption>
                            </figure>

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