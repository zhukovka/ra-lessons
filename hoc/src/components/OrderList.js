import React from 'react';
import OrderListView from './OrderListView';
import withData from './withData';
const OrderList = withData(
  'http://netology.getsandbox.com/api/orders/',
  'orders'
)(OrderListView);
export default OrderList;
