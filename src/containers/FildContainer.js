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
        const { objects, put, remove, move, changeSize } = this.props.objStore;
        return (
            <Container className="Editor">
                { objects.map((obj,index) => (
                    <GameObject 
                        x={obj.x}
                        y={obj.y}
                        put={put}
                        remove={remove}
                        move={move}
                        changeSize={changeSize}
                        key={index}
                    />
                ))}
            </Container>
        )
    }
}

export default FildContainer;