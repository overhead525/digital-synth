import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";

const StyledBasicKnobWrapper = styled.div`
  grid-column: span 1;
  position: relative;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;

  user-drag: none;
  user-select: none;
`;

const StyledKnobLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;

  user-drag: none;
  user-select: none;
`;

const StyledKnobGhost = styled.img`
  position: absolute;
  width: 90%;
  z-index: 20;
  opacity: 0.7;
  user-select: none;

  user-drag: none;
  user-select: none;
`;

const StyledKnobBed = styled.img`
  position: absolute;
  width: 90%;
  z-index: 10;

  user-drag: none;
  user-select: none;
`;

const StyledKnobBG = styled.img`
  position: absolute;
  width: 90%;
  z-index: 5;

  user-drag: none;
  user-select: none;
`;

export const BasicKnob = ({
  label = "Label",
  onUpdateFunction = () => {},
  initialAngle = 0,
  stepSize = 30,
}) => {
  const [angle, setAngle] = useState(initialAngle);

  const updateAngle = (e) => {
    const knob = document.getElementById("knob");
    const knobRect = knob.getBoundingClientRect();
    const center = [
      (knobRect.left + knobRect.right) / 2,
      (knobRect.top + knobRect.bottom) / 2,
    ];
    if (e.pageY < center[1]) {
      if (angle < 300) setAngle(angle + stepSize);
      else setAngle(300);
    } else if (e.pageY > center[1]) {
      if (angle > stepSize) setAngle(angle - stepSize);
      else setAngle(0);
    }
  };

  return (
    <div>
      <StyledBasicKnobWrapper id="knob" onClick={(e) => updateAngle(e)}>
        <StyledKnobGhost src="../../assets/ghost-blur.svg" />
        <StyledKnobBed
          src="../../assets/knob-bed.svg"
          style={{ transform: `rotate(${angle}deg)` }}
        />
        <StyledKnobBG src="../../assets/knob-bed-bg.svg" />
      </StyledBasicKnobWrapper>
      <StyledKnobLabel>{label}</StyledKnobLabel>
    </div>
  );
};
