import React from 'react';
import classnames from 'classnames';

// Use props proxy to pass props into component that is returned
function AppView(props) {
  return (
    <div id="dice-container">
      <AvailableDicePool {...props} />
      <ActiveDicePool {...props} />
    </div>
  );
}

function AvailableDicePool(props) {
  console.log(props);
  return (
    <section id="available-dice-container">
      {[props.availableDice.map((die, index)=>(
        <div className="die" onClick={ () => props.onAddActiveDie(die)} key={index}>
          <img src={die.imagefile} alt={die.name}/><br/>
          <span className="remaining-value">{die.available}</span>
          <span className="remainig-label">Remaining</span>
        </div>
      ))]}
    </section>
  );
}

function ActiveDicePool(props) {

  // function prepareActiveDice() {
  //   console.log(props.activeDice);
  //   let diceContainer = [];
  //   props.activeDice.map((activeDice) => {
  //     let i = 0;
  //     while (i < activeDice.active) {
  //       diceContainer.push(activeDice);
  //       i++;
  //     }    
  //   })
  //   return diceContainer;
  // }

  // checkRollButton = (a) => {
  //   if (a.length > 0) {
  //     return <Button handleClick={ () => DiceActions.roll() } text="Roll Dice" />
  //   }
  // }

  // checkActiveDice = (a) => {
  //   if (a.length > 0){
  //     return (
  //       a.map((dice, i) => 
  //         <div className="die" key={i}>
  //           <img onClick={ () => DiceActions.removeActiveDice(dice) } src={dice.imagefile} alt={dice.name}/>
  //         </div>
  //       )
  //     )
  //   } else {
  //     return <div className="description">You have no active dice</div>
  //   }
  // }  
  
  return (
    <section id="active-dice-containre">
      {[props.activeDice.map((die, index)=>(
        <div className="die" key={index}>
        
        </div>
      ))]}
    </section>
  );
}




// // Creating stateless presentational component using props
// function Main(props) {
//     // Checking to make sure state changes are getting passed down (affirmative)
//     console.log(props);
//     return <button onClick={props.onToggleRolled}>Some Text</button>;
// }

export default AppView;

// Should also create presentational components for header and footer sections
// return (
//   <section id="main">
//     <input
//       checked={areAllComplete ? 'checked' : ''}
//       id="toggle-all"
//       type="checkbox"
//       onChange={props.onToggleAllTodos}
//     />
//     <label htmlFor="toggle-all">
//       Mark all as complete
//     </label>
//     <ul id="todo-list">
//       {[...props.todos.values()].reverse().map(todo => (
//         <TodoItem
//           key={todo.id}
//           editing={props.editing}
//           todo={todo}
//           onDeleteTodo={props.onDeleteTodo}
//           onEditTodo={props.onEditTodo}
//           onStartEditingTodo={props.onStartEditingTodo}
//           onStopEditingTodo={props.onStopEditingTodo}
//           onToggleTodo={props.onToggleTodo}
//         />
//       ))}
//     </ul>
//   </section>
// );