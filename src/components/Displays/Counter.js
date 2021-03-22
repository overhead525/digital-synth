export const Counter = ({
  initialSigFigs = 1,
  updateFunction = () => {},
  count = 0,
  gridPosition,
}) => {
  return (
    <div
      style={{ textAlign: "center", gridColumn: `${gridPosition} / span 1` }}
    >
      {count}
    </div>
  );
};
