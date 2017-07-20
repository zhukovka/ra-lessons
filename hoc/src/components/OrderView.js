import React from 'react';
import PropTypes from 'prop-types';
const OrderView = ({info})=>{
  if(!info){
    return (<div>Loading data...</div>)
  }
  return (
    <div>
      <p>{info.from}</p>
      <p>{info.to}</p>
      <p>{info.distance}</p>
      <p>{info.price}</p>
    </div>
  );
};
OrderView.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    from: PropTypes.string,
    to: PropTypes.string,
    distance: PropTypes.number,
    price: PropTypes.number
  })
};
export default OrderView;
