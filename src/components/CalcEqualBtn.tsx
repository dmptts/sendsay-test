import styled from 'styled-components';
import CalcButton from './CalcButton';

export default function EqualButton() {
  return (
    <Root>
      <StyledEqualButton>=</StyledEqualButton>
    </Root>
  );
}

const Root = styled.div`
  width: 240px;
  padding: 4px;

  background-color: var(--color-default-white);
`;

const StyledEqualButton = styled(CalcButton)`
  width: 100%;
  height: 64px;
  color: white;

  background-color: var(--color-accent);
  border: none;

  &:hover {
    color: var(--color-default-black);

    background-color: var(--color-default-white);
    border: 1px solid #e2e3e5;
  }

  &:active {
    color: var(--color-default-black);

    background-color: var(--color-default-white);
    border: 2px solid var(--color-accent);
  }
`;
