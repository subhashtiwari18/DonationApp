import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


export default function NavBar() {
    return (
        <div>
            <div className="navbar-main">
                <div className="navbar-element">
                    <ul className="all-home">
                        <li className="home">
                            <Link id='home-id' to="/">Home</Link>
                            <FontAwesomeIcon icon={faHouse} />                    </li>
                        <li className="nav-donorlist">
                            <Link id='donor-id' to='/DonorList'>DonorList</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}


// const countryCodes = [
//     "+93", "+355", "+213", "+376", "+244", "+1-268", "+54", "+374", "+61", "+43",
//     "+994", "+1-242", "+973", "+880", "+1-246", "+375", "+32", "+501", "+229", "+975",
//     "+591", "+387", "+267", "+55", "+673", "+359", "+226", "+257", "+238", "+855",
//     "+237", "+1", "+236", "+235", "+56", "+86", "+57", "+269", "+242", "+506",
//     "+225", "+385", "+53", "+357", "+420", "+45", "+253", "+1-767", "+1-809", "+593",
//     "+20", "+503", "+240", "+291", "+372", "+251", "+679", "+358", "+33", "+241",
//     "+995", "+49", "+233", "+30", "+1-473", "+502", "+224", "+245", "+592", "+509",
//     "+504", "+36", "+354", "+91", "+62", "+98", "+964", "+353", "+972", "+39", "+1-876",
//     "+81", "+962", "+7", "+254", "+686", "+850", "+82", "+383", "+965", "+996", "+856",
//     "+371", "+961", "+266", "+231", "+218", "+423", "+370", "+352", "+389", "+261",
//     "+265", "+60", "+960", "+223", "+356", "+692", "+222", "+230", "+52", "+691", "+373",
//     "+377", "+976", "+382", "+212", "+258", "+95", "+264", "+674", "+977", "+31", "+64",
//     "+505", "+227", "+234", "+47", "+968", "+92", "+680", "+970", "+507", "+675", "+595",
//     "+51", "+63", "+48", "+351", "+974", "+40", "+7", "+250", "+1-869", "+1-758", "+1-784",
//     "+685", "+378", "+239", "+966", "+221", "+381", "+248", "+232", "+65", "+421", "+386",
//     "+677", "+252", "+27", "+211", "+34", "+94", "+249", "+597", "+46", "+41", "+963", "+886",
//     "+992", "+255", "+66", "+670", "+228", "+676", "+1-868", "+216", "+90", "+993", "+688",
//     "+256", "+380", "+971", "+44", "+1", "+598", "+998", "+678", "+39", "+58", "+84", "+967",
//     "+260", "+263"
// ];


// const countries = [
//     "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
//     "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
//     "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
//     "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire",
//     "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
//     "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
//     "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
//     "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
//     "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
//     "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
//     "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
//     "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
//     "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
//     "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
//     "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
//     "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
//     "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
//     "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
//     "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
// ];