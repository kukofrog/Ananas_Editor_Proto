import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Component = styled.div`
    width: 100%;
    margin: 3px;
    background-color: ${oc.gray[1]};
`

class ListObjItem extends React.Component {
    render() {
        const {name, selected} = this.props;
        return (
            <Component>
                {name}
            </Component>
        );
    }
}

export default ListObjItem;