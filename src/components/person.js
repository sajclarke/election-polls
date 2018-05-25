import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  updateValue = total => {
    this.setState({ total });
    this.props.updateTotal({
      party: this.props.person.party,
      total: Number(total),
    });
  };

  render() {
    const { person } = this.props;

    return (
      <article className="person">
        <img src={person.image} alt="" className="person__image" />

        <div className="person__config">
          <div className="person__party">{person.party}</div>
          <div className="person__name">{person.name}</div>
        </div>

        <p>
          <strong>TOTAL</strong>:{' '}
          <input
            type="number"
            value={this.state.total}
            onChange={({ target }) => this.updateValue(target.value)}
          />
        </p>
      </article>
    );
  }
}

export default Person;
