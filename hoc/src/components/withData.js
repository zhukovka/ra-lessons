function withData(Component, endpoint, propName) {
  return class extends React.Component {
    // constructor без изменений
    componentDidMount() {
      fetch(endpoint)
      .then(result => result.json())
      .then(data => this.setState({
        [propName]: data
      }));
    }
    render() {
      const props = {
        [propName]: this.state[propName]
      };
      return <Component {...this.props} {...props} />;
    }
  };
}

export default withData;
