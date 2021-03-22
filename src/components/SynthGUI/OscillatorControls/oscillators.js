import styled from "styled-components";
import { BasicKnob } from "../../Knobs/BasicKnob";
import { OscillatorSelector } from "./oscillatorSelector";
import { soundPresetSelector } from "../../../features/soundPreset/soundPresetSlice";
import { useSelector } from "react-redux";
import { convert2Frequency } from "./_constant";
import { TuningControl } from "./tuningControl";

const StyledOscillatorWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr 2fr 1fr;

  height: 100%;
`;

const StyledOscillatorRow = styled.div`
  background-color: white;
  border: 1px solid blue;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const StyledTitle = styled.div`
  letter-spacing: 3px;
  font-weight: 600;
`;

const StyledLabel = styled.div`
  font-weight: 400;
`;

export const Oscillators = () => {
  const soundPreset = useSelector(soundPresetSelector);

  const renderKnobs = (
    knobsObject = {
      damping: 0.5,
      frequency: null,
      keyTracking: 0.5,
      glissando: 1,
    }
  ) => {
    const angleConversion = (value) => {
      if (0 <= value && value <= 1) return value * 10;
      return value + 30;
    };

    const determineStepSize = (key) => {
      if (key === "frequency") return 300 / 50;
      else return 300 / 10;
    };

    const components = Object.entries(knobsObject).map((pair) => {
      return (
        <BasicKnob
          label={pair[0]}
          initialAngle={angleConversion(pair[1])}
          stepSize={determineStepSize(pair[0])}
        />
      );
    });
    // while (components.length < 4) components.push(<BlankKnobBed />)
    return components;
  };

  return (
    <StyledOscillatorWrapper>
      <StyledOscillatorRow>
        <StyledTitle>OSC1</StyledTitle>
        <OscillatorSelector />
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        {renderKnobs(soundPreset.settings.oscillators["1"].knobs)}
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        <StyledLabel>Tuning</StyledLabel>
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        <StyledTitle>OSC2</StyledTitle>
        <OscillatorSelector />
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        {renderKnobs(soundPreset.settings.oscillators["2"].knobs)}
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        <StyledLabel>Tuning</StyledLabel>
        <TuningControl />
      </StyledOscillatorRow>
    </StyledOscillatorWrapper>
  );
};
