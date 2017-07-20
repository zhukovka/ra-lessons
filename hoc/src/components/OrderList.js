import React from 'react';
import OrderListView from './OrderListView';
import withData from './withData';
const OrderList = withData(
  OrderListView,
  'http://netology.getsandbox.com/api/orders/',
  'orders'
);
export default OrderList;
