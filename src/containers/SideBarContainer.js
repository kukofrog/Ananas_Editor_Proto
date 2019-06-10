import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { observer, inject } from 'mobx-react'

import ListObjItem from 'components/ListObjItem';
import ObjProperty from 'components/ObjProperty';

const Container = styled.div`
    height: 100%;
    width: 400px;
    background-color: ${oc.red[5]};
`

const Wrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
`

const ObjList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${oc.red[7]};
    width: 100%;
    height: 400px;
`

const CreateForm = styled.form`
    display: flex;
`

const Input = styled.input`

`

const CreateButton = styled.button`

`

@inject('objStore')
@observer
class SideBarContainer extends React.Component {

    state = {
        objName: ''
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.objName === ''){
            return;
        }

        const newObj = {
            name: this.state.objName,
            x: 0,
            y: 0,
            height: 100,
            width: 100
        }

        this.props.objStore.put(newObj);
        this.setState({
            objName: ''
        });
    }

    selectObj = (index) => {
        this.props.objStore.select(index);
    }

    render(){
        const { objects, get, idx, selectedObj } = this.props.objStore;
        return (
            <Container>
                <Wrapper>
                    <CreateForm onSubmit={this.onSubmit}>
                        <Input name="objName" value={this.state.objName} onChange={this.onChange}/>
                        <CreateButton>new obj</CreateButton>
                    </CreateForm>
                    objList
                    <ObjList>
                        {objects.map((obj,index) => (
                            <ListObjItem 
                                name={obj.name}
                                selectObj={this.selectObj}
                                selected={idx===index?true:false}
                                index={index}
                                key={index}
                            />
                        ))}
                    </ObjList>
                    ObjProperty
                    <ObjProperty />
                </Wrapper>   
            </Container>
        )
    }
}

export default SideBarContainer;