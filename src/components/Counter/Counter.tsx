// import { useState } from "react";

import Button from "components/Button/Button";
import { ButtonWrapper, CounterWrapper, ResultContainer } from "./styles";
import type { CounterProps } from "./types";

function Counter({counter, onPlusClick, onMinusClick}: CounterProps) {
  // const [counter, setCounter] = useState<number>(0);

  // const onMinusClick = (): void => {
  //   setCounter((prevState) => prevState - 1);
  // };

  // const onPlusClick = (): void => {
  //   setCounter((prevState) => prevState + 1);
  // };

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" onClick={onMinusClick} isDanger/>
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;