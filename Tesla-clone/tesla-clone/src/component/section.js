import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
        <Container >
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttongroup>
            <LeftButton>{props.leftbuttontxt}</LeftButton>
            <RightButton>{props.rightbuttontxt}</RightButton>
            </Buttongroup>
            <DownArrow src="/images/down-arrow.svg" />

        </Container>
    )
}

export default Section

//rfce fast way to create a react component

const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url('/images/model-x.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
flex-grow: 1;
`

const Buttongroup = styled.div`
display: flex;
margin: 30px;
`

const LeftButton = styled.div`
background-color: rgba(26, 24, 31, 0.8);
height: 40px;
width: 256px;
border-radius: 100px;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 12px;
opacity: 0.85;
margin: 8px;
cursor: pointer;
`

const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 4s;

`