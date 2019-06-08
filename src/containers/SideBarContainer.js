import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { observer, inject } from 'mobx-react'

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

const ObjProperty = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${oc.red[7]};
    width: 100%;
    height: 400px;
`

const CreateButton = styled.button`
`

@inject('objStore')
@observer
class SideBarContainer extends React.Component {
    render(){
        return (
            <Container>
                <Wrapper>
                    objList
                    <ObjList>

                    </ObjList>
                    ObjProperty
                    <ObjProperty>

                    </ObjProperty>
                </Wrapper>   
            </Container>
        )
    }
}

export default SideBarContainer;