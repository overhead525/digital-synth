import { useEffect, useRef, useState } from "preact/hooks";
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
}) => {
  const rotationTarget = useRef(null);

  const [angle, setAngle] = useState(initialAngle);

  const updateAngle = (e) => {
    e.preventDefault();

    const eventOptions = {
      wheel: () => {
        if (angle + e.deltaY <= 300 && angle + e.deltaY >= 0) {
          setAngle(angle + e.deltaY);
          rotationTarget.current.style.transform = `rotate(${angle}deg)`;
        }
      },
    };

    eventOptions[e.nativeEvent.type]();
  };

  return (
    <div>
      <StyledBasicKnobWrapper
        id="knob"
        onWheel={(e) => {
          updateAngle(e);
        }}
      >
        <StyledKnobGhost src="../../assets/ghost-blur.svg" />
        <StyledKnobBed ref={rotationTarget} src="../../assets/knob-bed.svg" />
        <StyledKnobBG src="../../assets/knob-bed-bg.svg" />
      </StyledBasicKnobWrapper>
      <StyledKnobLabel>{label}</StyledKnobLabel>
    </div>
  );
};
