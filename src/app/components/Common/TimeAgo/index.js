import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

class TimeAgo extends Component {
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
        };
    }
    tick = () => {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }

    componentDidMount () {
        this.interval = setInterval(this.tick, 30000);
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        const { beerContentDetail, beerList } = this.props;
        let lastTimeUpdated = '';
        beerList.filter(({ containerId,lastUpdatedTime }) => {
            if (beerContentDetail.containerId === containerId) {
                lastTimeUpdated = lastUpdatedTime;
            }
        });
        const lastTime = moment(lastTimeUpdated).fromNow();
        return (
            <small className="italic">
                Last updated: {lastTime}
            </small>
        );
    }
}

TimeAgo.propTypes = {
    beerList: PropTypes.array.isRequired,
    beerContentDetail: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return  ({
        beerList: state.beerList,
    })
};

export default connect(mapStateToProps, null)(TimeAgo);
