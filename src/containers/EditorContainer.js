import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${oc.gray[2]};
`

class EditorContainer extends React.Component {
    render(){
        return (
            <Container>
                Editor
            </Container>
        )
    }
}

export default EditorContainer;