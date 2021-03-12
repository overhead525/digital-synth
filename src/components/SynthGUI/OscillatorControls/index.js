import styled from "styled-components";

const StyledOscillatorControls = styled.section`
  background-color: yellow;
  position: relative;
`;

const StyledContent = styled.div`
  background-color: white;

  position: absolute;

  display: grid;
  grid-template-columns: 1fr 1fr 1.75fr 0.2fr;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0.75rem 0;
`;

export const OscillatorControls = () => {
  return (
    <StyledOscillatorControls>
      <StyledContent>
        <div style={{ backgroundColor: "blue" }}>Content</div>
        <div style={{ backgroundColor: "red" }}>Content</div>
        <div style={{ backgroundColor: "green" }}>Content</div>
        <div style={{ backgroundColor: "purple" }}>Content</div>
      </StyledContent>
    </StyledOscillatorControls>
  );
};
