import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    // console.log(drawChromeBoiAtCoords(event.clientX, event.clientY))
    drawChromeBoiAtCoords(event.clientX, event.clientY)
    // this is an event handler that refers to onMouseMove in our render
    // get the habit of trying to console.log the appropriate elements/variables to see what is happening
    // in order to have this function working, we imported the drawChromeBoiAtCoords component
    // and invoking this component with the x and y coordinates
    // the clientX and clientY refers to the axis of the canvas
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   handleKeyDown = (event) => {
     if (event.key === 'a') {
       resize('+') 
     } else if (event.key === 's') {
       resize('-')
     }
   }
   // another event handler that changes the size of the chromeboi with a or s (+ or -)
   // resize is a JS built in method that changes the size of the target
   // event.key is aimed towards the keyboard when we press plus or minus

 
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
// before the render did not have onClick and oneKeyDown and in order to have onClick working
// we had to add an arrowFunction in our onClick which invokes the function toggleCycling
// just like we did with the onClick we do the same for onKeyDown but instead of inserting a function
// we insert the event of this.handleKeyDown which is an event handler