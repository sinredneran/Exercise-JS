import { useState } from 'react';
import Child from './Child'


const Parent = () => {

    let hello = 'hello from parent';
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const [A, setA] = useState('A');
    const [B, setB] = useState('B');

    const increment = (event) => {
        event.preventDefault();
        setCount(count + 1)
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const pFuntion = () => {
        return 'a function from parent';
    }

    const changeA = (value) => {
        setA(value);
    }

    const changeB = (value) => {
        setB(value);
    }

    return (
        <form>
            <div className='parent'>
                <h2>Parent</h2>
                <p>{B} (B with an error)</p>
                <p>Count: {count} (count)</p>
                <p>count should be updated from child</p>
                <textarea type="text" onChange={handleInput} />(handleInput)
                <p>{A} (A)</p>
                <p>^CountInput should be updated from child input^</p>
            <button type="reset">RESET</button>
                <Child
                    simpleProp={hello}

                    pcFunction={pFuntion}

                    onClick={increment}

                    onChange={input}

                    onChangeA={changeA}

                    simplePropChild={changeB}
                />
            </div>
        </form>
    );
}

export default Parent;