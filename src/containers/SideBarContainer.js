import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
    height: 100%;
    width: 400px;
    background-color: ${oc.red[5]};
`

class SideBarContainer extends React.Component {
    render(){
        return (
            <Container>
                SideBar
            </Container>
        )
    }
}

export default SideBarContainer;