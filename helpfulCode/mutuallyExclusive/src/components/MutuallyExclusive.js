const MutuallyExclusive = () => {

    let allBtn = document.getElementsByClassName('btn');

    function A(elem) {
        let currElem = elem.target;

        currElem.style.background = 'green';

        function elemOfRemStyl(arrElem) {
            return arrElem !== currElem;
        }

        let newArr = Object.values(allBtn).filter(elemOfRemStyl);
        for (let i = 0; i < newArr.length; i++) {
            newArr[i].style.background = 'red';
        }
    }
    return (
        <>
            <button className='btn btn-1' onClick={A}>1</button>
            <button className='btn btn-2' onClick={A}>2</button>
            <button className='btn btn-3' onClick={A}>3</button>
            <button className='btn btn-4' onClick={A}>4</button>
            <button className='btn btn-5' onClick={A}>5</button> 
        </>
    );
}

export default MutuallyExclusive;