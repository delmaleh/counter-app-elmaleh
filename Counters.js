import { Component } from "react";
import Counter from "./Counter";
import { v4 as uuidv4 } from 'uuid';

export class Counters extends Component {
    constructor() {
    super();
    this.state = [
    
    { id:uuidv4(),value:3},
    { id:uuidv4(),value:0},
    { id:uuidv4(),value:1},
    { id:uuidv4(),value:0},
    { id:uuidv4(),value:2},
    ];
    
    
}

render () {
  return(
      this.state.map((count)=> (
      <Counter key={count.id} value={count.value}></Counter>

      ))
  )
}
}
export default Counters;