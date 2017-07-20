import React from 'react';
import OrderView from './OrderView';
import withData from './withData';

const Order = withData(
  OrderView,
  ({ match }) => {
    if(match && match.params.orderId){
      const id = match.params.orderId;
      return `http://netology.getsandbox.com/api/orders/${id}`
    }
  },
  'info'
);
export default Order;
