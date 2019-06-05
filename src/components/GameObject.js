import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Rnd } from 'react-rnd';

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${oc.gray[9]};
`

class GameObject extends React.Component {

    state = {
        x: 0,
        y: 0,
        width: 100,
        height: 100
    }

    render() {
        console.log(this.state);
        return (
            <Rnd
                size={{ width: this.state.width, height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                onResize={(e, direction, ref, delta, position) => {
                    this.setState({
                      width: ref.style.width,
                      height: ref.style.height,
                      ...position,
                    });
                }}
                bounds=".Editor"
            >
                <Box className="handle" />
            </Rnd>
        );
    }
}

export default GameObject;