import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Component = styled.div`
    width: 100%;
    margin: 3px;
    background-color: ${oc.gray[1]};
`

class ListObjItem extends React.Component {

    onClick = () => {
        this.props.selectObj(this.props.index);
    }

    render() {
        const { name } = this.props;
        return (
            <Component onClick={this.onClick}>
                {name}
            </Component>
        );
    }
}

export default ListObjItem;