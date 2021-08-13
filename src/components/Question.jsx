import React, {useEffect, useState} from 'react';

const Question = ({first,second}) => {
    const [value, setValue] = useState('');


    const onChange = e => {
        setValue(e.target.value)

    }

    return (
        <div>
            <div>{first}</div>

            <input value={value} onChange={onChange} placeholder='введите ответ'/>

        </div>


    );
};

export default Question;