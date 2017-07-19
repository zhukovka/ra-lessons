import React from 'react';
import OrderListView from './OrderListView';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  
  componentDidMount() {
    fetch('http://netology.getsandbox.com/api/orders/')
    .then(result => result.json())
    .then(orders => this.setState({ orders }));
  }

  render() {
    return <OrderListView orders={this.state.orders} />
  }
}
export default OrderList;
