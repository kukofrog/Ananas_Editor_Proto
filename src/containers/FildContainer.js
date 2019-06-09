import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { observer, inject } from 'mobx-react'

import GameObject from 'components/GameObject';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${oc.gray[2]};
    overflow: auto;
`

@inject('objStore')
@observer
class FildContainer extends React.Component {
    render(){
        const { objects, move, resize, select } = this.props.objStore;
        return (
            <Container className="Editor">
                { objects.map((obj,index) => (
                    <GameObject 
                        x={obj.x}
                        y={obj.y}
                        width={obj.width}
                        height={obj.height}
                        move={move}
                        resize={resize}
                        select={select}
                        index={index}
                        key={index}
                    />
                ))}
            </Container>
        )
    }
}

export default FildContainer;