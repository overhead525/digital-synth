import { useState } from "preact/hooks";
import styled from "styled-components";
import { StyledTitle } from "../../Displays/Text";
import { StyledRow } from "../../Layout";
import { MixerChannelControl } from "./mixerChannelControl";

const StyledMixerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1.2fr;

  height: 100%;
`;

const StyledBlockWrapper = styled.div`
  position: relative;

  width: 1rem;
  height: 1rem;
  background-color: rgba(117, 117, 117, 0.4);

  padding: 0.3rem;

  display: grid;
  place-items: center;

  justify-self: end;
  margin-right: 0.75rem;
`;

const StyledBlock = styled.img`
  width: 0.7rem;
  height: 0.7rem;
`;

const StyledBlockTop = styled(StyledBlock)`
  -webkit-box-shadow: 0px 0px 7px 2px rgba(51, 153, 204, 0.9);
  -moz-box-shadow: 0px 0px 7px 2px rgba(51, 153, 204, 0.9);
  box-shadow: 0px 0px 7px 2px rgba(51, 153, 204, 0.9);
`;

export const Mixer = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledMixerWrapper>
      <StyledRow>
        <StyledTitle style={{ gridColumn: "1 / span 1" }}>MIXER</StyledTitle>
        <div style={{ gridColumn: "2 / span 2" }}></div>
        <StyledBlockWrapper>
          {(() => {
            if (active)
              return <StyledBlockTop src="../../../assets/block.svg" />;
            else return <StyledBlock src="../../../assets/block.svg" />;
          })()}
        </StyledBlockWrapper>
      </StyledRow>
      <StyledRow style={{ margin: "0 0.75rem" }}>
        <MixerChannelControl />
        <MixerChannelControl />
        <MixerChannelControl />
        <MixerChannelControl />
      </StyledRow>
      <StyledRow></StyledRow>
    </StyledMixerWrapper>
  );
};
