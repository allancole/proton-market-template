import styled from 'styled-components';
import { Typography } from '../../custom/customization';
import { MaxWidth } from '../../styles/MaxWidth.styled';
import { breakpoint } from '../../styles/Breakpoints';

export const HeaderContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'blue'};
  padding-top: 96px;

${breakpoint.tablet`
    margin-top: 0;
  `}
`;

export const HeaderContent = styled(MaxWidth)<{ imagePlacement: string }>`
  display: flex;
  flex-direction: ${({ imagePlacement }) =>
    imagePlacement === 'right' ? 'row' : 'row-reverse'};
  height: 640px;
  align-items: center;

  ${breakpoint.tablet`
    padding-top: 0;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
  `}
`;

export const TextContainer = styled.div<{ imagePlacement: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ imagePlacement }) =>
    imagePlacement === 'right' ? 'flex-start' : 'flex-end'};
  text-align: ${({ imagePlacement }) =>
    imagePlacement === 'right' ? 'left' : 'right'};
  line-height: 1.78;

  ${breakpoint.tablet`
    text-align: left;
    align-items: flex-start;
  `}
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 100%;
  }

  ${breakpoint.tablet`
    margin-top: 30px;
  `}
`;

export const HighlightText = styled.h3<{
  isShown: boolean;
  type: string;
  color: string;
  typography: Typography;
}>`
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  color: ${(props) => props.color};
  font-family: ${(props) => props.typography[props.type].font};
  font-size: ${(props) => props.typography[props.type].size};
  font-weight: ${(props) => props.typography[props.type].fontWeight};
  margin-bottom: 8px;

  ${breakpoint.mobile`
    font-size: 12px;
  `}
`;

export const HeaderText = styled.h1<{
  type: string;
  color: string;
  typography: Typography;
}>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.typography[props.type].font};
  font-size: ${(props) => props.typography[props.type].size};
  font-weight: ${(props) => props.typography[props.type].fontWeight};
  margin: 0;
  line-height: 1.25;

  ${breakpoint.tablet`
    font-size: 55px;
  `}

  ${breakpoint.mobile`
    font-size: 32px;
  `}
`;

export const SubHeaderText = styled.h2<{
  type: string;
  color: string;
  typography: Typography;
}>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.typography[props.type].font};
  font-size: ${(props) => props.typography[props.type].size};
  font-weight: ${(props) => props.typography[props.type].fontWeight};
  margin-top: 16px;
  max-width: 32ch;

  ${breakpoint.mobile`
    font-size: 14px;
    margin-top: 23px;
  `}
`;

export const ButtonWrapperAnchor = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})`
  ${breakpoint.mobile`
    width: 100%;
  `}
`;

export const Button = styled.button<{
  isShown: boolean;
  backgroundColor: string;
  textFont: string;
  textColor: string;
  typography: Typography;
}>`
  border: 2px solid rgb(0, 0, 0);
  width: auto;
  padding: 0.75rem 1.5rem;
  margin-top: 32px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 800;
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  background-color: ${(props) => props.backgroundColor};
  font-family: ${(props) => props.typography[props.textFont].font};
  color: ${(props) => props.textColor};
`;
