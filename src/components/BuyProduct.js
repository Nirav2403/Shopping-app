import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCustomerData } from '../actions/custonAction';
import darkImage from '../style/dark-theme.webp';

const emailValidator =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const BuyProduct = ({ handleCustomerData, ...props }) => {
    console.log(props);
    const [toggleFormPage, setToggleFormPage] = useState(false)
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
        setToggleFormPage(!toggleFormPage)
        e.preventDefault();
        if (toggleFormPage) {
            console.log(toggleFormPage)
            handleCustomerData(customerData);
            setCustomerData({
                ...customerData,
                name: "",
                email: "",
                moblieNumber: "",
            })
            props.history.push("/order");
        }
    }

    const firstPage = () => {
        return (
            <div className="form-first-page">
                <h6 className="form-title">Person Details</h6>
                <div className="purchaseform-person-field">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="name" value={customerData.name} onChange={(e) => changeData(e)} required />
                    <span className="validation">{inputValidation.nameErr}</span>
                    <label>Email-Id:</label>
                    <input type="email" placeholder="Email" name="email" value={customerData.email} onChange={(e) => changeData(e)} />
                    <span className="validation">{inputValidation.emailErr}</span>
                    <label>Moblie number:</label>
                    <input type="text" placeholder="Moblie No." name="moblieNumber" value={customerData.moblieNumber} onChange={(e) => changeData(e)} />
                    <span className="validation">{inputValidation.moblieNumberErr}</span>
                </div>
                <button type="submit">Next</button>
            </div>
        )
    }

    const secondPage = () => {
        return (
            <div className="form-first-page">
                <h6 className="form-title">Address Details</h6>
                <div className="purchaseform-person-field">
                    <label>Address :</label>
                    <input type="text" placeholder="Address" name="address" value={customerData.address} onChange={(e) => changeData(e)} />
                    <label>State: </label>
                    <input type="text" placeholder="State" name="state" value={customerData.state} onChange={(e) => changeData(e)} />
                    <label>City: </label>
                    <input type="text" placeholder="City" name="city" value={customerData.city} onChange={(e) => changeData(e)} />
                    <label>Area:</label>
                    <input type="text" placeholder="Area" name="area" value={customerData.area} onChange={(e) => changeData(e)} />
                </div>
                <button className="dataSubmit" type="submit">Submit</button>
            </div>
        )
    }

    return (
        <>
            <div className="form-main-container">
                <div className="form-layout">
                    <div className="form-section">
                        <h3>Customer Details</h3>
                        <form onSubmit={handleSubmit}>
                            {toggleFormPage ? secondPage() : firstPage()}
                        </form>
                    </div>
                    <div className="extra-description-section">
                        <h6>Contact Information</h6>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <div className="other-information">
                            <div className="address-information">
                                <i className="fa fa-map-marker"></i>
                                <div><strong>Address:</strong><span>108, West 21th street, Suite 721, New York Ny 10016</span></div>
                            </div>
                            <div className="address-information">
                                <i className="fas fa-phone-alt"></i>
                                <div><strong>Phone:</strong><span>+12 559 221476</span></div>
                            </div>
                            <div className="address-information">
                                <i className="fas fa-paper-plane"></i>
                                <div><strong>Gmail:</strong><span>info@amazon.com</span></div>
                            </div>
                            <div className="address-information">
                                <i class='fas fa-globe-asia'></i>
                                <div><strong>Website:</strong><span>amazon.com</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(null, { handleCustomerData })(BuyProduct);