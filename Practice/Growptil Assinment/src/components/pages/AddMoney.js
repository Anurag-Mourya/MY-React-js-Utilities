import React, { useState } from 'react'
import Wallet from './Wallet';
import './wallet.css';
import './addMoney.css';
import ShowMoneyAdded from './ShowMoneyAdded';
import './showMoneyAdded.css'

const AddMoney = () => {
    const [money, setMoney] = useState(true);
    const [clickMoney, setClickMoney] = useState(false)

    const [color, setColor] = useState(false);

    const submitMoneyHandler = () => {
        setClickMoney(true);
        setColor(true)

    }
    return (
        <>
            {
                color === false ? <>
                    <div className="box2">
                        <h3 className='addMoney'>Add Money</h3>
                        <input type="number" name="" id="" placeholder='Enter Amount to added' onChange={(e) => setMoney(e.target.value)} value={money} /><br />
                        <button>5000</button>
                        <button>5000</button>
                        <button>5000</button>
                        <button style={{backgroundColor: 'green', color: 'white'}}>5000</button>

                        <div className="sentMoney">
                            
                            <h5><iconify-icon icon="fluent:building-bank-28-regular" width="50" height="50" style={{color: 'yellow'}}></iconify-icon>
                            
                            <span className='toBank'>Sent Money To Bank</span></h5>
                            
                            <span style={{color: '#b7a8a8;'}}>RTGS/NEFT/IMPS?</span> 
                        </div>
                        <div className="continue"><button onClick={submitMoneyHandler}>Continue</button></div>

                        {
                            clickMoney === true ? <ShowMoneyAdded data={money} /> : <h4 className='moneyNot'>*Money is not added Yet</h4>
                        }
                    </div>
                    <Wallet />
                </> : <>
                    <div className="box2">
                        
                        <div style={{ filter: 'blur(4px)' }}>
                            <h3>Add Money</h3>
                            <input type="number" name="" id="" placeholder='Enter Amount to added' onChange={(e) => setMoney(e.target.value)} value={money} /><br />
                            <button>5000</button>
                            <button>5000</button>
                            <button>5000</button>
                            <button>5000</button>

                            <div className="">
                                <h3>Sent Money To Bank</h3>
                            </div>
                            <div className=""><button onClick={submitMoneyHandler}>Continue</button></div>
                            {/* <ShowMoneyAdded data={clickMoney === true ? <h4 className='box3'>{money}</h4> : <h4>Money is not added</h4>}/> */}
                        </div>

                        {
                            clickMoney === true ? <ShowMoneyAdded data={money} /> : <h4 >money is not added</h4>
                        }
                    </div>
                    <div style={{ filter: 'blur(4px)' }}>
                    <Wallet />
                    </div>
                   
                </>
            }

        </>
    )
}

export default AddMoney;