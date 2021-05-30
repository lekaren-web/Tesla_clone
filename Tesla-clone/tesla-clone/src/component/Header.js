import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
function Header(){
    return (
        <Container>
            <a href ='#'>
                <img src="/images/logo.svg" />
            </a>
            <MenuGroup>
                <div> Model S </div>
                <div> Model X </div>
                <div> Model Y </div>


            </MenuGroup>
            
            <RightMenu>
                <a href="#"> Shop </a>

                <a href="#"> Tesla Account </a>
                <MenuIconContainer>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            {/* <BurgerNav>
            <li> <a href="#"> Model S </a></li>
            <li> <a href="#"> Model X </a> </li>
            <li> <a href="#"> Model Y </a></li>

            </BurgerNav> */}
        </Container>
    )
}

export default Header
const Container = styled.div`
display: flex;
min-height: 60px;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
`

const MenuGroup = styled.div`
display: flex;
text-transform: uppercase;

div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;

a{
    font-weight: 600;
    text-transform: uppercase;
}
`

const MenuIconContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`

// const BurgerNav = styled.div`
// position: fixed;
// width: 300px;
// background: white;
// top: 0;
// right: 0;
// bottom: 0;
// list-style: none;
// li {
//     padding: 15px 0;
//     border-bottom: 1ps solid rgba(0, 0, 0 .2)
// }
// `