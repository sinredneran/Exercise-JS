
const Child = (props) => {
    let hello = 'hello from child';

    const handleChangeA = (e) => {
        props.onChangeA(e.target.value);
    }
    props.simplePropChild(hello);
    return (
        <div className="child">
            <h3>Child</h3>

            <p>{props.simpleProp} (props.simpleProp)</p>

            <p>{props.pcFunction()} (props.pcFunction)</p>

            <button onClick={props.onClick}>
                click me {props.count}
            </button> (props.count)
            <br />
            <input type="text" min={0}
                onChange={handleChangeA}
            /> (handleChangeA --- props.changeA)

            <p>{props.onChange} (props.onChange)</p>
            <p>^ should be updated from parent input^</p>
            
        </div>
    );
}

export default Child;