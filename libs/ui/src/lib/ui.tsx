import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui() {
  return (
    <StyledUi data-testid='idid'>
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}
