import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }
  componentDidMount() {
    if(this.props.match && this.props.match.params.orderId){
      const id = this.props.match.params.orderId;
      fetch(`http://netology.getsandbox.com/api/orders/${id}`)
      .then(result => {
        return result.json();
      })
      .then(order => this.setState({ order }));
    }
  }
  render() {
    return <OrderView info={this.state.order} />
  }
}

export default Order;
