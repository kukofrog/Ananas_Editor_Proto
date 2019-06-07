import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import GameObject from 'components/GameObject';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${oc.gray[2]};
    overflow: auto;
`

class FildContainer extends React.Component {
    render(){
        return (
            <Container className="Editor">
                <GameObject />
            </Container>
        )
    }
}

export default FildContainer;