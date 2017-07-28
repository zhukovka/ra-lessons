import React, {Component} from 'react';
const withFetcher = ({url, collName}) => WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [collName]: []
    };
  }
  componentWillMount() {
    if (typeof url === 'function') {
      url = url(this.props);
    }
    const params = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    fetch(url, params)
    .then(response => response.json())
    .then(result => this.setState({ [collName]: result }));
  }
  render() {
    return (
      <WrappedComponent
        {...this.props}
        {...this.state} />
    );
  }
};
export default withFetcher;
