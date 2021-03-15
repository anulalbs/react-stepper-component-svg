import React from "react";

const StepperItem = ({ configs, step, index, circleProps, lineProps, labelProps, counterProps, isLastElement, onClickCallback }) => {
    const outerCircleBorderColor = configs.outerCircleBorderColor ? configs.outerCircleBorderColor : '#ccc';
    const innerCircleBorderColor = configs.innerCircleBorderColor ? configs.innerCircleBorderColor : '#ccc';
    const counterTextColor = configs.counterTextColor ? configs.counterTextColor : "#000";
    const labelTextColor = configs.labelTextColor ? configs.labelTextColor : "#000";
    const completedIndicatorColor = configs.completedIndicatorColor ? configs.completedIndicatorColor : "#ccc";
    const completedTextColor = configs.completedTextColor ? configs.completedTextColor : "#ccc";
    const connectorColor = configs.connectorColor ? configs.connectorColor : "#ccc";
    const completedLabelColor = configs.completedLabelColor ? configs.completedLabelColor : "#fff";
    const activeIndicator = configs.activeIndicator ? configs.activeIndicator : "#000";
    return (
        <g style={{cursor: "pointer"}} onClick={()=>onClickCallback(index)}>
            <circle  cx={circleProps.x} cy={circleProps.y} r={circleProps.r1} stroke={index < configs.currentStep ? completedIndicatorColor : index === configs.currentStep ? activeIndicator : outerCircleBorderColor} strokeWidth="1" fill="none" />
            <circle cx={circleProps.x} cy={circleProps.y} r={circleProps.r2} stroke={index < configs.currentStep ? completedIndicatorColor : index === configs.currentStep ? activeIndicator : innerCircleBorderColor} strokeWidth="1" fill={index < configs.currentStep ? completedIndicatorColor : 'none'} />
            {isLastElement && <line x1={lineProps.x1} y1={lineProps.y1} x2={lineProps.x2} y2={lineProps.y2} stroke={index < configs.currentStep ? completedIndicatorColor : connectorColor} strokeWidth="1" />}
            {index < configs.currentStep && <text x={counterProps.x - 2} y={counterProps.y} fill={completedTextColor}>&#10003;</text>}
            {index > configs.currentStep && <text x={counterProps.x} y={counterProps.y} fill={counterTextColor}>{index + 1}</text>}
            {index === configs.currentStep && <text x={counterProps.x} y={counterProps.y} fill={activeIndicator}>{index + 1}</text>}
            <text x={labelProps.x} y={labelProps.y} fill={index < configs.currentStep ? completedLabelColor : index === configs.currentStep ? activeIndicator : labelTextColor}>{step.title}</text>
        </g>
    );
};

export default StepperItem;