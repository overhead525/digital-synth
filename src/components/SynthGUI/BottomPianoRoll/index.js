import styled from "styled-components";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

const StyledBottomPianoRoll = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(189, 196, 188, 1) 0%,
    rgba(202, 207, 201, 0.6143499636182599) 44%,
    rgba(189, 196, 188, 1) 100%
  );

  display: flex;

  justify-content: space-around;
  align-items: center;
`;

const StyledPianoWrapper = styled.div`
  align-self: flex-end;
  padding-bottom: 4px;
`;

const StyledTemporarySpacer = styled.div`
  width: 37rem;
`;

export const BottomPianoRoll = () => {
  const firstNote = MidiNumbers.fromNote("c1");
  const lastNote = MidiNumbers.fromNote("c6");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <StyledBottomPianoRoll>
      <StyledTemporarySpacer>Bruh</StyledTemporarySpacer>
      <StyledPianoWrapper>
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={(midiNumber) => {
            console.log(midiNumber);
          }}
          stopNote={(midiNumber) => {
            console.log(midiNumber);
          }}
          width={700}
          keyboardShortcuts={keyboardShortcuts}
        />
      </StyledPianoWrapper>
    </StyledBottomPianoRoll>
  );
};
