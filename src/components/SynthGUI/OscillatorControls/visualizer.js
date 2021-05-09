import { useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const StyledVisualizer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
`;

const StyledVisualizerContentWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Visualizer = () => {
  const checkVariants = {
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 },
  };

  const [isChecked, setIsChecked] = useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <StyledVisualizer>
      <StyledVisualizerContentWrapper
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="150"
      >
        <motion.path
          d="M10 80  C 40 10, 65 10, 95 80 S 150 150, 180 80"
          fill="transparent"
          strokeWidth="20"
          stroke="#A0D"
          animate={true}
          strokeLinecap="round"
          transition={{
            repeat: Infinity,
            type: "tween",
            duration: 1.5,
            repeatType: "loop",
            from: 0.1,
          }}
          variants={checkVariants}
          style={{
            pathLength: pathLength,
            opacity: opacity,
          }}
        />
      </StyledVisualizerContentWrapper>
    </StyledVisualizer>
  );
};
