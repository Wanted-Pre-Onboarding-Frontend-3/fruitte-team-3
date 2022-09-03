import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => `${gap}px`};
`;

const Span = styled.span`
  color: ${({ color }) => color};
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const Section = styled.section`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '72px')};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : '12px')};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '36px')};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : '12px')};
  line-height: 1.6;
`;

const Text = styled.span`
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

const Paragraph = styled.p`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

const Heading1 = styled.h1`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  font-weight: bold;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

const Image = styled.img`
  animation-duration: 300ms;
  &:hover {
    opacity: 0.7;
  }
`;

export { Flex, Span, Section, Text, Paragraph, Heading1, Image };
