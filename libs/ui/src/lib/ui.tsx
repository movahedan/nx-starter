import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui() {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}
