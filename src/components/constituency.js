import React from 'react';

import Person from './person';

class Constituency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: props.persons,
    };
  }

  updateTotal = ({ party, total }) => {
    const { persons } = this.state;

    const updatedPersons = persons.map(a => {
      if (a.party === party) {
        a.score = total;
      }

      return a;
    });

    this.setState({
      persons: updatedPersons,
    });

    this.props.updateValue(
      updatedPersons.map(a => ({
        party: a.party,
        score: a.score,
        constituency: this.props.name,
      }))
    );
  };

  render() {
    return (
      <article className="constituency">
        <header className="constituency__header">{this.props.name}</header>

        <div className="constituency__content">
          <div className="persons">
            {this.props.persons.map(a => (
              <Person
                className="person"
                person={a}
                updateTotal={this.updateTotal}
              />
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default Constituency;
