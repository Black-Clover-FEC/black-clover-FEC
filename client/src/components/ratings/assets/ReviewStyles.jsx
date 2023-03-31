import styled from 'styled-components';
import StyleLib from '../../../assets/Stylesheet.jsx';

const ReviewStyles = {
  meter: styled.meter`
  height: 1.3em;
  width: 100%;
  ::-webkit-meter-bar {
    background: none;
    border-radius: 0;
    border: none;
    background: #D5D5D5;
  }

  ::-webkit-meter-optimum-value	{
    background-color: #E7A66C;
  }
  `,

  meterDiv: styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  &:hover {
    animation: ${StyleLib.popOut} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  `,

  starsLink: styled(StyleLib.linkButton)`
  width: 4rem;
  `,

  countLink: styled(StyleLib.linkButton)`
  width: 2rem;
  `,

  avgRating: styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 6em;
  text-align: left;
  color: #E7A66C;
  text-transform: none;
  padding-bottom: 1em;
  `,

  gridContainer: styled.section`
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 2em
  `,

  gridCol1: styled.aside`
  grid-column: 1;
  `,

  gridCol2: styled.section`
  grid-column: 2;
  padding-top: 3em;
  `,

  slideGauge: styled.div`
  // padding: 0.5em 0 0.5em 0;
  padding: 0.5em;
  cursor: default;
  `,

  slideGaugeBG: styled.div`
  background-color: #D5D5D5;
  height: 0.7em;
  width: 100%;
  position: relative;
  `,

  slideGaugeIndicator: styled.span.attrs(props => ({
    left: props.left || '0'
  }))`
  color: black;
  position: absolute;
  left: ${props => props.left}%;
  bottom: 40%;
  transform: translateX(-50%);
  `,

  factorsGrid: styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em
  `,

  factorsGridCol1: styled.span`
  grid-column: 1;
  display: flex;
  justify-content: start;
  `,

  factorsGridCol2: styled.span`
  grid-column: 2;
  display: flex;
  justify-content: center;
  `,

  factorsGridCol3: styled.span`
  grid-column: 3;
  display: flex;
  justify-content: end;
  `,

}

export default ReviewStyles;