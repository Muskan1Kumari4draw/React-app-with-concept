import React from "react";
import "./style.css";
const Calculator = () => {
  return (
    <> <div class="calculator">
      <div class="calculator__output">0</div>
      <div class="calculator__keys">
        <button class="calculator__key calculator__key--operator">+</button>
        <button class="calculator__key calculator__key--operator">-</button>
        <button class="calculator__key calculator__key--operator">&times;</button>
        <button class="calculator__key calculator__key--operator">÷</button>
        <button class="calculator__key">7</button>
        <button class="calculator__key">8</button>
        <button class="calculator__key">9</button>
        <button class="calculator__key">4</button>
        <button class="calculator__key">5</button>
        <button class="calculator__key">6</button>
        <button class="calculator__key">1</button>
        <button class="calculator__key">2</button>
        <button class="calculator__key">3</button>
        <button class="calculator__key">0</button>
        <button class="calculator__key">.</button>
        <button class="calculator__key">AC</button>
        <button class="calculator__key calculator__key--enter">=</button>
      </div>
    </div> </>
  );
}
export default Calculator;
