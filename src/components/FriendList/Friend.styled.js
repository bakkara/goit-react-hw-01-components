import styled from 'styled-components';

export const FriendWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 200px;
    height: 70px;
    gap: 10px;
    padding: 10px;
`

export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${ props => (props.color === 'true' ? 'green' : 'red')}`

export const FriendAvatar = styled.img`
    border-radius: 5px;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`
export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 700;
`
