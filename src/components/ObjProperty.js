import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${oc.red[7]};
    width: 100%;
    height: 400px;
`

const H3 = styled.h3``

class ObjProperty extends React.Component {

    render() {
        const { index, selectedObj } = this.props;

        if(selectedObj === undefined){
            return (<></>)
        }

        return (
            <Component>
                <H3>index:{index}</H3>
                <H3>name:{selectedObj.name}</H3>
                <H3>x:{selectedObj.x}</H3>
                <H3>y:{selectedObj.y}</H3>
                <H3>width:{selectedObj.width}</H3>
                <H3>height:{selectedObj.height}</H3>
            </Component>
        );
    }
}

export default ObjProperty;