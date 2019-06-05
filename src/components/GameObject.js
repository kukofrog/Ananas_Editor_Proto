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
    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        return (
            <Rnd
                default= {{
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }}
            >
                <Box className="handle" />
            </Rnd>
        );
    }
}

export default GameObject;