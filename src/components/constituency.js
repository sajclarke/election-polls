import React from 'react';

import Person from './person';

class Constituency extends React.Component {
  updatePerson = (person, score) => {
    this.props.updatePerson(this.props.name, person, score);
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
                updatePerson={this.updatePerson}
              />
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default Constituency;
