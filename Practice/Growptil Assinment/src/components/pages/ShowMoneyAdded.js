import React from 'react';
import { useNavigate } from 'react-router';
import './showMoneyAdded.css'

const ShowMoneyAdded = (props) => {
    let navigate = useNavigate()

    const gotoHomeHandler = () =>{
        return navigate('/'); 
    }

    const transtion = [
        {
            AccountName: "Current Account",
            BankBalance: "XXXXX",
            transactionamount: 15000,
            transactiondate: "2022-08-12 15:55",

            PaymentType: {
                Id: 1,
                Name: "Bank to Wallet Transfer"
            },

            senderDetails: {
                sender: "Saurabh Sharma",
                bank: "SBI",
                IFSC: "SBIN016095",
                accountno: "xxxxxxxxx5736",
                transactiondate: "2022-08-12 15:55",
            },

            recieverDetails: {
                reciever: "Saurabh Sharma",
                wallet: " Growpital Wallet ",
                referenceno: "DBTR/222201998174",
                transactiondate: "2022-08-12 15:55",
            },


            paymentmethod: "UPI",
            transactionId: "DBTR/222201998174"
        }
    ]
    return (
        <div>
            <div className="box3">
               
                <div className="innerBox">
                <button className='btnAbso' onClick={gotoHomeHandler}>X</button>

                    <p>Money added to wallet<br />from bank your account</p>
                    <h3 style={{fontWeight: 'bold', color: 'white'}}>₹{props.data} <span className='spanIcon' style={{float :'right', color: 'yellow', }}> &#8601;</span> </h3>
                    <p>12 Aug 2022</p>

                    <div className="">
                        <h3 className='tranCompleted'><iconify-icon icon="clarity:success-standard-line" width="40" className="iconShow"></iconify-icon>Transaction Completed</h3>
                        <div className="">
                            {
                                transtion.map((items) => {
                                    return (
                                        <div className='mapDiv'>
                                            <h3 style={{color:'yellow', fontSize: '16px'}}>From</h3>
                                            <h3 className='mapName'>{items.senderDetails.sender}</h3>
                                            <p><i >{items.senderDetails.bank} {items.senderDetails.IFSC} {items.senderDetails.accountno} </i> <br /> <i>{items.senderDetails.transactiondate}</i></p>

                                            <h3 style={{color:'yellow', fontSize: '16px'}}>To</h3>
                                            <h3 className='mapName'>{items.recieverDetails.reciever}</h3>
                                            <p><i>{items.recieverDetails.bank} {items.recieverDetails.wallet} <br /> Ref no. {items.recieverDetails.referenceno} </i> <br /> <i>{items.recieverDetails.transactiondate}</i></p>

                                            <i> <strong>Payment Method: </strong>{items.paymentmethod}</i> <br />

                                            <i> <strong>Transaction ID: </strong>{items.transactionId}</i>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="button2">
                            <button>Help</button>
                            <button style={{backgroundColor: 'black', border: '1px solid gray', color: 'white'}}>Share</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ShowMoneyAdded;