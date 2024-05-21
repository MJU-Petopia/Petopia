import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFeedAsync } from '../modules/Borad';
import BoardAddComponent from '../components/Board/BoardAddComponent';

const AddBoardContainer = ({addFeedAsync}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState([]);

    return (
        <BoardAddComponent title={title} content={content} file={file} setTitle={setTitle} setContent={setContent} setFile={setFile} addFeedAsync={addFeedAsync}/>
    );
};

export default connect(() => ({}),{
    addFeedAsync
})(AddBoardContainer);