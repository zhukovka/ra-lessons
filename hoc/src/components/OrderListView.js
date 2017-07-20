import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
const OrderListView = (props)=>{
  const renderTH = ()=>{
    return (
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Distance (km)</th>
          <th>Price (£)</th>
        </tr>
      </thead>
    );
  }
  return (
    <div>
      <table>
        {renderTH()}
        <tbody>
          {props.orders && props.orders.map((order)=>{
            return (
              <tr key={order.id}>
                <td><Link to={`/orders/${order.id}`}>{order.from}</Link></td>
                <td>{order.to}</td>
                <td>{order.distance}</td>
                <td>{order.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
OrderListView.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    from: PropTypes.string,
    to: PropTypes.string,
    distance: PropTypes.number,
    price: PropTypes.number
  }))
};
export default OrderListView;
