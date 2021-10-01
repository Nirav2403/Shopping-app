import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCustomerData } from '../actions/custonAction';
import { Link } from 'react-router-dom';

const emailValidator =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const BuyProduct = ({ handleCustomerData, ...props }) => {
    console.log(props);
    const [customerData, setCustomerData] = useState({
        name: "",
        email: "",
        moblieNumber: "",
        state: "",
        city: "",
        area: "",
        address: ""
    })

    const [inputValidation, setinputValidation] = useState({
        nameErr: "",
        emailErr: "",
        moblieNumberErr: "",
        stateErr: "",
        cityErr: "",
        areaErr: "",
        addressErr: ""
    })

    const changeData = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (!customerData.name.length === "") {
                setinputValidation({ ...inputValidation, nameErr: "please! fill up the field" });
            } else if (customerData.name.length < 5 && customerData.name.value !== null) {
                setinputValidation({ ...inputValidation, nameErr: "name must be upto 5 character" });
            }
            else {
                setinputValidation({ ...inputValidation, nameErr: "" });
            }
        } else if (name === "email") {
            if (!emailValidator.test(customerData.email)) {
                setinputValidation({ ...inputValidation, emailErr: "email is not valid" });
            } else {
                setinputValidation({ ...inputValidation, emailErr: "" });
            }
        } else if (name === "moblieNumber") {
            if (typeof (customerData.moblieNumber) !== "number" && customerData.moblieNumber === null) {
                setinputValidation({ ...inputValidation, moblieNumberErr: "number is not valid" });
            } else if (customerData.moblieNumber.length !== 9) {
                setinputValidation({ ...inputValidation, moblieNumberErr: "number must be 10 length" });
            } else {
                setinputValidation({ ...inputValidation, moblieNumberErr: "" });
            }
        }
        setCustomerData({ ...customerData, [name]: value });
    }

    const handleSubmit = (e) => {
        console.log(props);
        console.log(customerData)
        e.preventDefault();
        handleCustomerData(customerData);
        setCustomerData({
            ...customerData,
            name: "",
            email: "",
            moblieNumber: "",
        })
        props.history.push("/order")
    }

    return (
        <>
            <div className="form-main-container">
                <div className="purchaseform-container">
                    <div className="purchaseform-user-title"><h1>Customer Detail</h1></div>
                    <form onSubmit={handleSubmit}>
                            <h6 className="form-title">Person Details</h6>
                        <div className="purchaseform-person-field">
                            <label>Name:</label>
                            <input type="text" placeholder="Enter your name" name="name" value={customerData.name} onChange={(e) => changeData(e)} required />
                            <span className="validation">{inputValidation.nameErr}</span>
                            <label>Email-Id:</label>
                            <input type="email" placeholder="Enter your email" name="email" value={customerData.email} onChange={(e) => changeData(e)} />
                            <span className="validation">{inputValidation.emailErr}</span>
                            <label>Moblie number:</label>
                            <input type="text" placeholder="Enter your moblie number" name="moblieNumber" value={customerData.moblieNumber} onChange={(e) => changeData(e)} />
                            <span className="validation">{inputValidation.moblieNumberErr}</span>
                        </div>
                            <h6 className="form-title">Address Details</h6>
                        <div className="purchase-address-field">
                            <label>State: </label>
                            <input type="text" placeholder="Enter your name" name="state" value={customerData.state} onChange={(e) => changeData(e)} />
                            <label>City: </label>
                            <input type="text" placeholder="Enter your name" name="city" value={customerData.city} onChange={(e) => changeData(e)} />
                            <label>Area:</label>
                            <input type="text" placeholder="Enter your name" name="area" value={customerData.area} onChange={(e) => changeData(e)} />
                            <label>Address :</label>
                            <textarea type="text" placeholder="Enter your address" name="address" value={customerData.address} onChange={(e) => changeData(e)} />
                        </div>
                        <button className="dataSubmit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default connect(null, { handleCustomerData })(BuyProduct);