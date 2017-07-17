class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rubAmount: 0,
      rate: 57,
    };
  }

  calcUSDsum() {
    return (this.state.rubAmount / this.state.rate).toFixed(4);
  }

  handleAmountChange(event) {
    this.setState({
      rubAmount: event.target.value,
    });
  }

  render() {
    const { rubAmount, rate } = this.state;
    return (
      <div>
        <h3>Конвертер валют:</h3>
        <div>
          Текущий курс: {rate}
        </div>
        <div>
          <span>Сумма в рублях: </span>
          <input
            type="text"
            placeholder="Сумма в рублях"
            onChange={this.handleAmountChange.bind(this)}
            value={rubAmount}
          />
        </div>
        <span>
          Сумма в долларах: {this.calcUSDsum()}
        </span>
      </div>
    );
  }
}
