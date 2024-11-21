
import './Calculator.css';
import { useState } from 'react'

export default function Calculator () {

    const [inputNum, setInputNum] = useState('');


    const handleError = (event) => {
            if(event.target.value  === "=" && inputNum !== '' && inputNum !== 'Error'){
                setInputNum(eval(inputNum))                
            }
            else{
                setInputNum('Error')
            }
    }

    console.log(inputNum);

    return (
    <>
    <div className="calculator"> 
        <div className="topSection"> 
        <h1 className="heading"> React Calculator </h1>
        </div>

        <form >
        <input className="inputNum" type='text' value={inputNum} readOnly/>

        <div className="buttons-layout">
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='7' / >
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='8' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='9' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='+' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='4' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='5' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='6' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='-' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='1' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='2' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='3' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='*' / >   
        <input className="btn" type='button' onClick={e => setInputNum('')} value='C' / >    
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='0' / >    
        <input className="btn" type='button' onClick={handleError} value='=' / >  
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='/' / >   
        <input className="btn" type='button' onClick={e => setInputNum( inputNum + e.target.value)} value='.' / >   
        <input className="btn" type='button' onClick={e => setInputNum( inputNum.slice(0, -1))} value='DEL' / >   
        </div>
        </ form>

    </div>
    </>
    )
}