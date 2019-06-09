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
        const { x, y, width, height, move, resize, select, index } = this.props;

        console.log(this.props)
        return (
            <Rnd
                size={{ width: width, height: height }}
                position={{ x: x, y: y }}
                onDragStart={(e, d) => { select(index) }}
                onDrag={(e, d) => { move({ index, x:d.x, y:d.y }) }}
                onResize={(e, direction, ref, delta, position) => {
                    resize({
                        index: index,
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