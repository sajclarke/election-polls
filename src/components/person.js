import React from 'react';

class Person extends React.Component {
  updatePerson = score => {
    this.props.updatePerson(this.props.person, Number(score));
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
            value={person.score}
            onChange={({ target }) => this.updatePerson(target.value)}
          />
        </p>
      </article>
    );
  }
}

export default Person;
