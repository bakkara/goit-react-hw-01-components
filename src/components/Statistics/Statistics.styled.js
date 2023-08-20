import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatSection = styled.section`
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`
export const Title = styled.h2`
    padding: 20px;
    text-align: center;
`

export const StatList = styled.ul`
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    background-color: #f7f7f7;
`
export const StatItem = styled.li`
    padding: 15px;
    background-color: ${getRandomHexColor};
    width: 100%;
`
