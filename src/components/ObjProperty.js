import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { observer, inject } from 'mobx-react'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${oc.red[7]};
    width: 100%;
    height: 400px;
`

const H3 = styled.h3`
    margin: 0;
`

const DeleteButton = styled.button`

`

const PropBox = styled.div`
    display: flex;
`



@inject('objStore')
@observer
class ObjProperty extends React.Component {

    delete = (e) => {
        this.props.objStore.remove(this.props.objStore.idx);
    }

    changeName = (e) => {
        this.props.objStore.changeName({
            index: this.props.objStore.idx,
            name: e.target.value
        });
    }

    changeX = (e) => {
        this.props.objStore.changeX({
            index: this.props.objStore.idx,
            x: e.target.value
        });
    }

    changeY = (e) => {
        this.props.objStore.changeY({
            index: this.props.objStore.idx,
            y: e.target.value
        });
    }

    changeWidth = (e) => {
        this.props.objStore.changeWidth({
            index: this.props.objStore.idx,
            width: e.target.value
        });
    }

    changeHeight = (e) => {
        this.props.objStore.changeHeight({
            index: this.props.objStore.idx,
            height: e.target.value
        });
    }
    

    render() {
        const { idx, selectedObj } = this.props.objStore;

        if(selectedObj === null){
            return (<></>)
        }

        return (
            <Component>
                <H3>index:{idx}</H3>
                <PropBox>
                    <H3>name:</H3><input value={selectedObj.name} onChange={this.changeName} />
                </PropBox>
                <PropBox>
                    <H3>x:</H3><input value={selectedObj.x} onChange={this.changeX} />
                </PropBox>
                <PropBox>
                    <H3>y:</H3><input value={selectedObj.y} onChange={this.changeY} />
                </PropBox>
                <PropBox>
                    <H3>width:</H3><input value={selectedObj.width} onChange={this.changeWidth} />
                </PropBox>
                <PropBox>
                    <H3>height:</H3><input value={selectedObj.height} onChange={this.changeHeight} />
                </PropBox>
                <DeleteButton onClick={this.delete}>Delete</DeleteButton>
            </Component>
        );
    }
}

export default ObjProperty;