import React from 'react';
import './wallet.css';
import { useNavigate,  } from "react-router-dom";


const Wallet = () => {

    let navigate = useNavigate();

    const addMoney = () => {
        return navigate('/addMoney');
    }
    return (
        <div className='center'>

            <div className='green'>
                <p style={{color: 'white', marginRight: '17%'}}>Your Balance</p>

                <iconify-icon icon="carbon:wallet" width="60" height="60" style={{float: 'right', color: 'white'}}></iconify-icon>

                <h1 style={{color: 'white'}}>₹4210.00</h1>
                <div>
                    <button className='btn1' onClick={addMoney}>Add Money</button>
                    <button className='btn2'>Withrdrow</button>
                </div>
            </div>

            <div className="box1">
                <table className='table1'>
                    <tr>
                        <th ><strong style={{fontSize: '18px', color: 'white'}}>Transition</strong></th>
                        <th style={{fontSize: '11px', color: 'yellow'}}>View all</th>
                    </tr>

                    <tr>
                        <th><span className='spanIcon'> &#8601;</span> Youtube Premium</th>
                        <td>-₹3000</td>
                    </tr>

                    <tr>
                        <th> <span className='spanIcon' style={{color: '#37ff37'}}> &#8599;</span>Facebook Ads</th>
                        <td style={{color: '#37ff37'}}> +₹4000</td>
                    </tr>

                    <tr>
                        <th> <span className='spanIcon' style={{color: 'red'}}> &#8603;</span>Facebook Ads</th>
                        <td style={{color: 'red'}}> ₹4000 <span style={{fontSize: '9px'}}>faild</span> </td>
                    </tr>
                    <tr>
                        <th> <span className='spanIcon'> &#8599;</span>Hemant kant malviy Sent Money to Bank</th>
                        <td style={{color: '#37ff37'}}> +₹4000</td>
                    </tr>

                    <tr>
                        <th> <span className='spanIcon' style={{color: 'red'}}> &#8603;</span>Facebook Ads</th>
                        <td style={{color: 'red'}}> ₹4000 <span style={{fontSize: '9px'}}>faild</span></td>
                    </tr>

                    <tr>
                        <th> <span className='spanIcon' style={{color: '#37ff37'}}> &#8599;</span>Facebook Ads</th>
                        <td style={{color: '#37ff37'}}> +₹4000</td>
                    </tr>
                    <tr>
                        <th> <span className='spanIcon'> &#8601;</span>Youtube Premium</th>
                        <td>-₹3000</td>
                    </tr>

                </table>
            </div>

          

        </div>
    )
}

export default Wallet;
