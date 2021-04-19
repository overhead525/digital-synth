import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "preact/hooks";

const StyledMixerChannelControlWrapper = styled.div`
  grid-column: span 1;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 0.8fr 1.2fr 5fr;
  place-items: center;
`;

const StyledXButton = styled.img`
  height: 0.8rem;
`;

const StyledKnobWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const StyledKnobBed = styled.img`
  height: 2rem;
  position: absolute;
  z-index: 10;
`;

const StyledKnob = styled.img`
  height: 1.7rem;
  position: absolute;
  z-index: 20;
`;

const StyledSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0.5rem 0;
`;

const StyledSliderBar = styled.div`
  background-color: brown;
  border-radius: 3px;
  width: 0.2rem;
  height: 10rem;
`;

const StyledSliderSlideWrapper = styled.div`
  position: absolute;

  height: auto;
`;

const StyledSliderSlide = styled(motion.img)`
  height: 2rem;
`;

export const MixerChannelControl = () => {
  const dragConstraintElement = useRef(null);

  return (
    <StyledMixerChannelControlWrapper>
      <StyledXButton src="../../../assets/x-button.svg" />
      <StyledKnobWrapper>
        <StyledKnobBed src="../../../assets/knob-bed.svg" />
        <StyledKnob src="../../../assets/vertical-knob.svg" />
      </StyledKnobWrapper>
      <StyledSliderWrapper ref={dragConstraintElement}>
        <StyledSliderBar />
        <StyledSliderSlideWrapper>
          <StyledSliderSlide
            src="../../../assets/slider-off.svg"
            drag="y"
            dragConstraints={{ top: -60, bottom: 60 }}
            dragElastic={false}
            dragMomentum={false}
            onClick={() => console.log("clicked image")}
          />
        </StyledSliderSlideWrapper>
      </StyledSliderWrapper>
    </StyledMixerChannelControlWrapper>
  );
};
