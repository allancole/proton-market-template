import styled from 'styled-components';
import { Typography } from '../../custom/customization';
import { breakpoint } from '../../styles/Breakpoints';
import { MaxWidth } from '../../styles/MaxWidth.styled';

interface ButtonProps {
  backgroundColor: string;
  textFont: string;
  textColor: string;
  typography: Typography;
}

export const NftPageContainer = styled(MaxWidth).attrs({ as: 'main' })<{
  imagePlacement: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ imagePlacement }) =>
    imagePlacement === 'left' ? 'row' : 'row-reverse'};
  padding: 96px 0 0;
  min-height: calc(100vh - 96px);

  ${breakpoint.tablet`
    padding: 96px 2rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 640px;
  `}
`;

export const Button = styled.button<ButtonProps>`
  width: fit-content;
  height: 42px;
  margin-top: 32px;
  padding: 0 3em;
  background-color: ${(props) => props.backgroundColor};
  font-family: ${(props) => props.typography[props.textFont].font};
  color: ${(props) => props.textColor};
  border: none;
  cursor: pointer;

  ${breakpoint.tablet`
    font-size: 14px;
  `}
`;

export const ButtonLink = styled.a<ButtonProps>`
  width: 100%;
  height: 56px;
  margin-top: 32px;
  padding: 0;
  background-color: ${(props) => props.backgroundColor};
  font-family: ${(props) => props.typography[props.textFont].font};
  color: ${(props) => props.textColor};
  border: none;
  cursor: pointer;

  ${breakpoint.tablet`
    font-size: 14px;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p<{
  type: string;
  color: string;
  typography: Typography;
}>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.typography[props.type].font};
  font-size: ${(props) => props.typography[props.type].size};
  font-weight: ${(props) => props.typography[props.type].fontWeight};
  margin-top: 32px;
`;
