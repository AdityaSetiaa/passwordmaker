"use client";


import React, { useState } from 'react';


export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "0123456789".split("");
  const symbols = "!@#$%^&*()_+-=[]|;:,.<>?".split("");
  const emojis = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😍 🥰 😘 😗 😙 😚 😋 😜 🤪 😝 🤑 🤗 🤭 🤫 🤔 🤐 🤨 😐 😑 😶 😏 😒 🙄 😬 😔 😪 🤤 😴 😷 🤒 🤕 🤢 🤮 🤧 😵 🥴 😲 😳 🥺 😭 😱 😖 😣 😞 😓 😩 😢 🤬 😡 😠 🗣️ 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🦄 🐮 🐷 🐸 🐵 🐔 🐧 🐦 🐤 🦆 🦉 🦇 🐺 🐗 🐴 🦒 🦏 🐑 🐐 🐓 🦃 🦜 🐍 🦎 🦈 🐙 🐬 🐳 🐟 🐡 🦀 🦑 🐚 🐌 🦋 🐜 🐝 🐞 🕷 🕸 🦂 🌵 🎄 🌳 🌴 🌱 🌿 ☘ 🍀 🎋 🌺 🌻 🌹 🥀 🌷 🌼 🌸 🌾 🍁 🍂 🍃 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🥑 🧄 🧅 🥔 🥕 🌽 🌶 🫑 🥒".split("");

  
  
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];
  const statesObj = {
    USA: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
      "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
      "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
      "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
      "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
      "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
      "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ],
    India: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
      "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
      "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
      "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
      "Uttarakhand", "West Bengal"
    ],
    Australia: [
      "New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia",
      "Northern Territory", "Australian Capital Territory"
    ],
    Canada: [
      "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
      "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
      "Northwest Territories", "Nunavut", "Yukon"
    ]
  };
  const allStates = Object.values(statesObj).flat();
  const years = Array.from({ length: 2025 - 1980 + 1 }, (_, i) => 1980 + i);

  const checkPassword = () => {
    let hadUpper = false;
    let hadLower = false;
    let hadNum = false;
    let hadSym = false;
    let hadEmo = false;
    let hadCountry = false;
    let hadState = false;
    let hadYears = false;

    for (let i = 0; i < password.length; i++) {
      let ch = password[i];
      if (upperCase.includes(ch)) hadUpper = true;
      if (lowerCase.includes(ch)) hadLower = true;
      if (numbers.includes(ch)) hadNum = true;
      if (symbols.includes(ch)) hadSym = true;
      if (emojis.includes(ch)) hadEmo = true;
    }
    if (countries.some(country => password.includes(country))) hadCountry = true;
    if (allStates.some(state => password.includes(state))) hadState = true;
    if (years.some(year => password.includes(year.toString()))) hadYears = true;

    if (!hadUpper) {
      setMessage("Include an uppercase letter");
      return;
    }
    if (!hadLower) {
      setMessage("Include a lowercase letter");
      return;
    }
    if (!hadNum) {
      setMessage("Include a number");
      return;
    }
    if (!hadSym) {
      setMessage("Include a symbol");
      return;
    }
    if (!hadEmo) {
      setMessage("Include an emoji");
      return;
    }
    if (!hadCountry) {
      setMessage("Include a country name");
      return;
    }
    if (!hadState) {
      setMessage("Include a state name");
      return;
    }
    if (!hadYears) {
      setMessage("Include a year between 1980 and 2025");
      return;
    }
    setMessage("Your password is good");
  };


  return (
    <div id='box'>
      <div id="container" className='px-8 py-4 rounded-[20px] font-medium border-[2px] border-blue-400 border-solid boxS duration-300'>
        <div id="input">
          <input
            className='font-medium border-[1px] border-blue-600 border-solid boxS duration-300'
            type="text"
            placeholder="Enter your text here"
            id='input-val'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id='btn' className=' duration-300' onClick={checkPassword}>Enter</button>
          
          
        </div>
        <div id="output"  className='px-8 py-4 rounded-[20px] font-medium border-[2px] border-transparent border-solid boxS duration-300'>{message}</div>
        
       
       
      </div>
    </div>
  );
}
