import React, {useState} from 'react';
import {useSelector} from "react-redux";


const Questions = () => {
    const lists = useSelector(state => state.questions.data)
    const first = lists[0].question;
    const second = lists[1].question;
    const three = lists[2].question;
    const four = lists[3].question;
    const five = lists[4].question;
    const six = lists[5].question;

    const [value, setValue] = useState({
        first: '',
        second: '',
        three: '',
        four: '',
        five: '',
        six: ''
    });


    function addStorage(name, value) {
        localStorage.setItem(name, JSON.stringify(value))
        setValue(
            {first: '',
                second: '',
                three: '' ,
                four: '',
                five: '',
                six: '' })
    }

    const onClick = e => {
        e.preventDefault();
        addStorage(first,value.first);
        addStorage(second, value.second);
        addStorage(three, value.three);
        addStorage(four, value.four);
        addStorage(five, value.five);
        addStorage(six, value.six);
    }

    return (
        <div>
        {/*<div>*/}
        {/*    {lists.map(list => <div key={list.id}><Question question={list.question}/>*/}
        {/*    </div>)}*/}
            <div>
                <div>{first}</div>
                <input value={value.first} onChange={e => setValue({...value,first: e.target.value})}/>
            </div>
            <div>
                <div>{second}</div>
                <input value={value.second} onChange={e => setValue({...value,second: e.target.value})}/>
            </div>
            <div>
                <div>{three}</div>
                <input value={value.three} onChange={e => setValue({...value,three: e.target.value})}/>
            </div>
            <div>
                <div>{four}</div>
                <input value={value.four} onChange={e => setValue({...value,four: e.target.value})}/>
            </div>
            <div>
                <div>{five}</div>
                <input value={value.five} onChange={e => setValue({...value,five: e.target.value})}/>
            </div>
            <div>
                <div>{six}</div>
                <input value={value.six} onChange={e => setValue({...value,six: e.target.value})}/>
            </div>

            <button onClick={onClick}>Send</button>
        </div>
    );
};

export default Questions;