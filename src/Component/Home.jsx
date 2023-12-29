import React, { useState } from "react";
import './Home.css';
import Img from "./Img";
import bgimg from '../assets/unsplash_M-4lFg1Xfag.png';
import Populor from "./Populor";
import axios from "axios";


export default function Home() {
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [donorCountry, setDonorCountry] = useState('India');
    const [contactNumber, setContactNumber] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
    const [amount, setAmount] = useState('');
    const [cause, setCause] = useState('');

    // Validation error state variables
    const [donorNameError, setDonorNameError] = useState('');
    const [donorEmailError, setDonorEmailError] = useState('');
    const [contactNumberError, setContactNumberError] = useState('');
    const [amountError, setAmountError] = useState('');

    const [showPopup, setShowPopup] = useState(false);

    const handleSetAmount = (newAmount) => {
        setAmount(newAmount); 
    };
    const countryCodes = [
        "+91", "+355", "+213", "+376", "+244", "+1-268", "+54", "+374", "+61", "+43",
        "+994", "+1-242", "+973", "+880", "+1-246", "+375", "+32", "+501", "+229", "+975",
        "+591", "+387", "+267", "+55", "+673", "+359", "+226", "+257", "+238", "+855",
        "+237", "+1", "+236", "+235", "+56", "+86", "+57", "+269", "+242", "+506",
        "+225", "+385", "+53", "+357", "+420", "+45", "+253", "+1-767", "+1-809", "+593",
        "+20", "+503", "+240", "+291", "+372", "+251", "+679", "+358", "+33", "+241",
        "+995", "+49", "+233", "+30", "+1-473", "+502", "+224", "+245", "+592", "+509",
        "+504", "+36", "+354", "+91", "+62", "+98", "+964", "+353", "+972", "+39", "+1-876",
        "+81", "+962", "+7", "+254", "+686", "+850", "+82", "+383", "+965", "+996", "+856",
        "+371", "+961", "+266", "+231", "+218", "+423", "+370", "+352", "+389", "+261",
        "+265", "+60", "+960", "+223", "+356", "+692", "+222", "+230", "+52", "+691", "+373",
        "+377", "+976", "+382", "+212", "+258", "+95", "+264", "+674", "+977", "+31", "+64",
        "+505", "+227", "+234", "+47", "+968", "+92", "+680", "+970", "+507", "+675", "+595",
        "+51", "+63", "+48", "+351", "+974", "+40", "+7", "+250", "+1-869", "+1-758", "+1-784",
        "+685", "+378", "+239", "+966", "+221", "+381", "+248", "+232", "+65", "+421", "+386",
        "+677", "+252", "+27", "+211", "+34", "+94", "+249", "+597", "+46", "+41", "+963", "+886",
        "+992", "+255", "+66", "+670", "+228", "+676", "+1-868", "+216", "+90", "+993", "+688",
        "+256", "+380", "+971", "+44", "+1", "+598", "+998", "+678", "+39", "+58", "+84", "+967",
        "+260", "+263"
    ];
    const countries = [
        "India","Afghanistan","Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire",
        "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
        "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
        "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
        "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    const handleSubmit = async () => {
       
        setDonorNameError('');
        setDonorEmailError('');
        setContactNumberError('');
        setAmountError('');
        if (!donorName.trim()) {
            setDonorNameError("Please enter Donor Name.");
            return;
          }
          const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
          const minLength = 3;
          const maxLength = 30;
          if (!nameRegex.test(donorName)) {
            setDonorNameError("Please enter a valid Donor Name with letters only.");
            return;
          }
          if (donorName.length < minLength || donorName.length > maxLength) {
            setDonorNameError(`Please enter a Donor Name between ${minLength} and ${maxLength} characters.`);
            return;
          }

        if (donorEmail.length > 0) {
            const isValiddonorEmail = String(donorEmail).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (isValiddonorEmail) {
                console.log('Valid email:', donorEmail);
            } else {
                setDonorEmailError('Please enter a valid email');
                return;
            }
        } else {
            setDonorEmailError('Please enter an email');
            return;
        }
        if (!/^\d{10}$/.test(contactNumber)) {
            setContactNumberError("Please enter a valid 10-digit Contact Number.");
            return;
        }
        if (amount < 1) {
            setAmountError("Please enter a valid amount");
            return;
        }
        displayRazor();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/savedonation', {
                donor_name: donorName,
                donor_email_id: donorEmail,
                donor_mobile_number: selectedCountryCode + contactNumber,
                donor_amount: amount,
                donor_country: donorCountry,
                donor_cause: cause,
            });
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
        
    };
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };
    const displayRazor = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Failed to load Razorpay script');
            return;
        }
        const options = {
            key: 'rzp_test_ZbswjwREDVAIV9',
            amount: (amount) * 100,
            currency: 'INR',
            name: { donorName },
            description: "payment",
            handler: function (response) {
                setShowPopup(true);
            },
            prefill: {
                name: { donorName },
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className="continer-head">
            <div className="head-home" style={{ backgroundImage: `url(${bgimg})` }}>
                <div className="home-main">
                    <div className="img-bg">
                        <Img />
                    </div>
                    <div className="main">
                        <div className="section">
                            <div className="main-head">
                                <h2>Donation</h2>
                            </div>
                            <div className="donor-info">
                                <div className="donor-name">
                                    <label>Donor Name <span className="mandatory">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Enter Donor Name"
                                        value={donorName}
                                        onChange={(e) => setDonorName(e.target.value)}
                                        required
                                        id="donor-name-id"
                                    />
                                    {donorNameError && <span className="error-message">{donorNameError}</span>}
                                </div>
                                <div className="donor-email">
                                    <label>Donor Email id <span className="mandatory">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="Enter Donor Email id"
                                        value={donorEmail}
                                        onChange={(e) => setDonorEmail(e.target.value)}
                                        required
                                        id="donor-email-id"
                                    />
                                    {donorEmailError && <span className="error-message">{donorEmailError}</span>}
                                </div>
                                <div className="donor-country">
                                    <label>Donor Country</label>
                                    <div className="country-input-container">
                                        <select
                                            value={donorCountry}
                                            onChange={(e) => setDonorCountry(e.target.value)}
                                            id="donor-country-id"
                                        >
                                            <option value="" disabled>Select a country</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="donor-contact">
                                    <label>Contact Number <span className="mandatory">*</span></label>
                                    <div className="contact-input-container">
                                        <select
                                            value={selectedCountryCode}
                                            onChange={(e) => setSelectedCountryCode(e.target.value)}
                                        >
                                            {countryCodes.map((code, index) => (
                                                <option key={index} value={code}>
                                                    {code}
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="Number"
                                            placeholder="Enter Donor Mobile"
                                            value={contactNumber}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                            id="donor-Mobile-id"
                                        />
                                    </div>
                                    {contactNumberError && <span className="error-message">{contactNumberError}</span>}
                                </div>
                                <div className="donor-Amount">
                                    <input />
                                    <label>Donor Amount <span className="mandatory">*</span></label>
                                    <input
                                        type="Number"
                                        placeholder="0"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                        id="donor-Amount-id"
                                    />
                                    {amountError && <span className="error-message">{amountError}</span>}
                                </div>
                                <div className="donor-cause">
                                    <label>Donor Cause</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Donation Cause"
                                        value={cause}
                                        onChange={(e) => setCause(e.target.value)}
                                        required
                                        id="donor-cause-id"
                                    />
                                </div>
                            </div>
                            <div className="submit-button">
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Populor onSetAmount={handleSetAmount} />
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3 className="popup-text">Thank you for donating, {donorName}!</h3>
                        <img
                            src="https://png.pngtree.com/png-clipart/20230122/original/pngtree-thank-you-cartoon-style-png-image_8927116.png"
                            alt="pic"
                            className="popup-image"
                        />
                        <div className="popup-btn">
                            <button onClick={closePopup}>Close</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
