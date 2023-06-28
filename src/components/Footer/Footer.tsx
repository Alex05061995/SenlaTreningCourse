import { styled } from 'styled-components';

const FooterComponent = styled.div`
    height: ${(props) => props.theme.heights.footerHeight};
    background: rgba(0, 0, 0, 0.3);
    font-size: 30px;
    text-align: center;
  
`
const Footer = () => {
  return (
    <FooterComponent>Footer</FooterComponent>
  )
}

export default Footer