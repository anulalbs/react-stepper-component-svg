import React from 'react';
import StepperItem from "./StepperItem";

const Stepper = ({stepperData , onClickCallback}) => {
    
  const viewBoxWidth = ((stepperData.steps.length - 1) * 196) + 62;
  const steppers = () => {
      let x = 22;
      let y = 22;
      const r1 = 17;
      const r2 = 14;
      let x1 = 39;
      let y1 = 22;
      let x2 = 201;
      let y2 = 22;
      let countX1 = 17;
      let countY1 = 28;
      let labelX1 = 2;
      let labelY1 = 60;
      const configs = Object.fromEntries(Object.entries(stepperData).filter(k => k[0] !== 'steps'));
      return stepperData.steps.map((item, i) => {
          const isLastElement = i === (stepperData.steps.length - 1) ? false : true;
          const incrementer = i === 0 ? 0 : 196;
          x += incrementer;
          x1 += incrementer;
          x2 += incrementer;
          countX1 += incrementer;
          labelX1 += incrementer;
          const circleProps = {
              x, y, r1, r2
          };
          const lineProps = {
              x1, y1, x2, y2
          };
          const counterProps = {
              x: countX1,
              y: countY1
          };
          const labelProps = {
              x: labelX1,
              y: labelY1
          };
          return <StepperItem key={Math.random(1, 999999)} configs={configs} isLastElement={isLastElement} circleProps={circleProps} counterProps={counterProps} labelProps={labelProps} lineProps={lineProps} step={item} index={i} onClickCallback={onClickCallback}/>
      });
  };

  return (
      <svg viewBox={`0 0 ${viewBoxWidth} 65`}>
          {steppers()}

 Sorry, your browser does not support inline SVG.
      </svg>

  );
};

export default Stepper;
