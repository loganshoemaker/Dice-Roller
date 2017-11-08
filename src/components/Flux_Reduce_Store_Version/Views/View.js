import React from 'react';
import classnames from 'classnames';

// Use props proxy to pass props into component that is returned
function AppView(props) {
  return (
    <div>
      <Main {...props} />
    </div>
  );
}

// Creating stateless presentational component using props
function Main(props) {
    // Checking to make sure state changes are getting passed down (affirmative)
    console.log(props);
    return <button onClick={props.onToggleRolled}>Some Text</button>;
}

export default AppView;

// Should also create presentational components for header and footer sections
// // function Header() {
// //   return null;
// // }
