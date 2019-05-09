import { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log('PROPS', this.props)
    return null;
  }
}
const mapStateToProps = (state) => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
//calls function connect() then returns another
//function (libraryList);
