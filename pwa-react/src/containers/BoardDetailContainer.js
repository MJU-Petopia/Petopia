import React, { useState } from 'react';
import BoardDetailComponent from '../components/Board/BoardDetailComponent';

const BoardDetailContainer = () => {

    const [comment, setComment] = useState('');
    const [overlay, setOverlay] = useState(false);


    return (
        <BoardDetailComponent 
            comment={comment} 
            setComment={setComment}
            overlay={overlay}
            setOverlay={setOverlay}
        />
    );
};

export default BoardDetailContainer;