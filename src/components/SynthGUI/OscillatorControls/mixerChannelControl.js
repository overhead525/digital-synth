import styled from "styled-components";

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

const StyledSliderSlide = styled.img`
  height: 2rem;
`;

export const MixerChannelControl = () => {
  return (
    <StyledMixerChannelControlWrapper>
      <StyledXButton src="../../../assets/x-button.svg" />
      <StyledKnobWrapper>
        <StyledKnobBed src="../../../assets/knob-bed.svg" />
        <StyledKnob src="../../../assets/vertical-knob.svg" />
      </StyledKnobWrapper>
      <StyledSliderWrapper>
        <StyledSliderBar />
        <StyledSliderSlideWrapper>
          <StyledSliderSlide src="../../../assets/slider-off.svg" />
        </StyledSliderSlideWrapper>
      </StyledSliderWrapper>
    </StyledMixerChannelControlWrapper>
  );
};
