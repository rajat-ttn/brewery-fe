import React from 'react';
import { PropTypes } from 'prop-types';

// Legends Component
const Legends = ({ legendsValue, legendColorClass }) => (
        <div className="colorInfoWrapper">
            <div className="colorInfo">
                {
                    legendsValue && legendsValue.map((legend, i) => (
                        <span key={i}>
                            <span className={`status-circle ${legendColorClass[i]}`} />
                            <small><strong>{legend}</strong></small>
                        </span>
                    ))
                }
            </div>
        </div>
);

Legends.propTypes = {
    legendsValue: PropTypes.array.isRequired,
    legendColorClass: PropTypes.array.isRequired,
};
export default Legends;