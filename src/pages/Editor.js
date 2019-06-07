import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import FildContainer from 'containers/FildContainer';
import SideBarContainer from 'containers/SideBarContainer';

const EditorPage = styled.div`
    display: flex;
    height: 100%;
`

class Editor extends React.Component {
    render(){
        return (
            <EditorPage>
                <FildContainer />
                <SideBarContainer />
            </EditorPage>
        )
    }
}

export default Editor;