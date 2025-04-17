'use strict';

import { useRef } from 'react';

import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Canvas() {
  let canvasRef = useRef(null);

  // TODO: colour selection
  // TODO: adjusting pen size
  // TODO: prolly add icons for the buttons instead of text
  // TODO: make prettier and other css shit
  return (<div className="canvas">
    <ReactSketchCanvas
      ref={canvasRef}
      strokeWidth={4}
      strokeColor="red"
    />
    <button onClick={() => canvasRef.current.eraseMode(false)}>pen</button>
    <button onClick={() => canvasRef.current.eraseMode(true)}>eraser</button>
    <button onClick={() => canvasRef.current.undo()}>undo</button>
    <button onClick={() => canvasRef.current.redo()}>redo</button>
  </div>);
}
