import styled from 'styled-components';
import { ReactComponent as PictureIcon } from './../img/icon-picture.svg';

export default function CanvasPlaceholder() {
  return (
    <Root>
      <StyledPictureIcon />
      <PlaceholderHeading>Перетащите сюда</PlaceholderHeading>
      <PlaceholderDescription>
        любой элемент из левой панели
      </PlaceholderDescription>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPictureIcon = styled(PictureIcon)`
  width: 20px;
  height: 20px;
  margin-bottom: 12px;
`;

const PlaceholderHeading = styled.b`
  margin-bottom: 4px;

  font-weight: 500;
  color: var(--color-accent);
`;

const PlaceholderDescription = styled.p`
  width: 115px;
  margin: 0;

  font-size: 0.75;
  color: #6b7280;
  text-align: center;
`;
