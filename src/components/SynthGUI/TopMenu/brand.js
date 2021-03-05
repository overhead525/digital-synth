import styled from 'styled-components';

const StyledBrandImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export const Brand = () => {
  return (
    <StyledBrandImage src="../../../assets/factory-brand-logo.png" alt="Brand" />
  )
}