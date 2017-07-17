class WindowResizeDetector extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.windowResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  windowResizeHandler() {
    console.log('Размер окна был изменен!');
    // ...логика обработки события
  }

  render() {
    return <div>Детектор включен</div>;
  }
}
