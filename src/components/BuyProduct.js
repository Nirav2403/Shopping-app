import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { handleCustomerData } from '../actions/custonAction';

const emailValidator =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const BuyProduct = ({ handleCustomerData, ...props }) => {
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

    const [disableBtn, setDisableBtn] = useState({
        nextBtn: true,
        submitBtn: true
    })

    useEffect(() => {
        const fieldValue = Object.values(customerData).map((k)=>{
            if(k===""){
                return true
            }return false
        });
        const errorValue = Object.values(inputValidation).map((k)=>{
            if(k===""){
                return true
            }return false
        })
        console.log(Object.values(inputValidation).includes(""))

        if(fieldValue.slice(0,3).includes(true) || errorValue.includes(false)){
            setDisableBtn({...disableBtn,nextBtn:true})
        }else{
            if(fieldValue.includes(true) ||  errorValue.includes(false)){
                setDisableBtn({...disableBtn,nextBtn:false,submitBtn:true})
                console.log("if",{...disableBtn,nextBtn:false,submitBtn:true})
            }else{
                setDisableBtn({...disableBtn,nextBtn:false,submitBtn:false})
                console.log("else",{...disableBtn,nextBtn:false,submitBtn:false})
            }
        }
    }, [customerData])

    const changeData = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (value === "") {
                setinputValidation({ ...inputValidation, nameErr: "please! fill up the field" });
            } else if (customerData.name.length < 5 ) {
                setinputValidation({ ...inputValidation, nameErr: "name must be upto 5 character" });
            }
            else {
                setinputValidation({ ...inputValidation, nameErr: "" });
            }
        } else if (name === "email") {
            if (value === "") {
                setinputValidation({ ...inputValidation, emailErr: "please! fill up the field" });
            }else if (!emailValidator.test(customerData.email)) {
                setinputValidation({ ...inputValidation, emailErr: "email is not valid" });
            } else {
                setinputValidation({ ...inputValidation, emailErr: "" });
            }
        } else if (name === "moblieNumber") {
            if (value === "") {
                setinputValidation({ ...inputValidation, moblieNumberErr: "please! fill up the field" });
            }else if (isNaN(Number(value))===true) {
                setinputValidation({ ...inputValidation, moblieNumberErr: "number is not valid" });
            } else if (customerData.moblieNumber.length !== 9) {
                setinputValidation({ ...inputValidation, moblieNumberErr: "number must be 10 length"});
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
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="name-select" className="field-container-input" name="name" value={customerData.name} onChange={(e) => changeData(e)} required />
                        <label className="field-container-label" htmlFor="name-select">Name:</label>
                        <span className="validation">{inputValidation.nameErr}</span>
                    </div>
                    <div className="field-container">
                        <input type="email" placeholder="&nbsp;" id="email-select" className="field-container-input" name="email" value={customerData.email} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="email-select">Email-Id:</label>
                        <span className="validation">{inputValidation.emailErr}</span>
                    </div>
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="moblie-select" className="field-container-input" name="moblieNumber" value={customerData.moblieNumber} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="moblie-select">Moblie number:</label>
                        <span className="validation">{inputValidation.moblieNumberErr}</span>
                    </div>
                </div>
                <div className="form-btns">
                    <button type="button" onClick={()=>props.history.push("/add-cart-list")}>Cancel</button>
                    <button className="next-btn" type="submit" disabled={disableBtn.nextBtn}>Next</button>
                </div>
            </div>
        )
    }

    const secondPage = () => {
        return (
            <div className="form-first-page">
                <h6 className="form-title">Address Details</h6>
                <div className="purchaseform-person-field">
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="address-select" className="field-container-input" name="address" value={customerData.address} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="address-select">Address :</label>
                    </div>
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="state-select" className="field-container-input"  name="state" value={customerData.state} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="state-select">State: </label>
                    </div>
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="city-select" className="field-container-input" name="city" value={customerData.city} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="city-select">City: </label>
                    </div>
                    <div className="field-container">
                        <input type="text" placeholder="&nbsp;" id="area-select" className="field-container-input" name="area" value={customerData.area} onChange={(e) => changeData(e)} />
                        <label className="field-container-label" htmlFor="area-select">Area:</label>
                    </div>
                </div>
                <div className="form-btns">
                    <button type="button" onClick={()=>setToggleFormPage(false)} >Back</button>
                    <button className="dataSubmit" type="submit" disabled={disableBtn.submitBtn}>Submit</button>
                </div>
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
                                <i className='fas fa-globe-asia'></i>
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