
import { useState, useEffect } from "react"

export default function States () {

    const [country, setCountry] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const dropDown = {
        padding: '10px',
        margin: '10px',
    }

    const getCountry = async () => {
        try{
            let res = await fetch(`https://crio-location-selector.onrender.com/countries`);
            const data = await res.json();
            setCountry(data)
        }
        catch(error){
            console.log(error)
        }
        // fetch(`https://crio-location-selector.onrender.com/countries`)
        // .then(response => response.json())
        // .then(data => {
        //     setCountry(data)
        // })
        // .catch(error => console.log(error))
    }

    const getState = () => {

        fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
        .then(response => response.json())
        .then(data => {
            setStates(data)
        })
        .catch(error => console.log(error))
    }

    const getCity = () => {

        fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`)
        .then(response => response.json())
        .then(data => {
            setCities(data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getCountry();
    },[]);

    useEffect(() => {
        if(selectedCountry){
            getState();
        }
    },[selectedCountry]);

    useEffect(() => {
        if(selectedCountry && selectedState){
            getCity();
        }
    }, [selectedCountry, selectedState]);


    return (
        <>
        <div>
            <div> 
            <h1> Select Location </h1>
            </div>
            <div >
                {/* Country */}
                <select style={dropDown} value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} >
                <option value="" disabled >Select Country</option>
                {
                    country.map((item) => 
                    <option key={item} value={item}>{item}</option>
                    )
                }
                </select>
                
                {/* States */}
                <select style={dropDown} value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                <option value="" disabled>Select State</option>
                {
                    states.map((item) => 
                    <option key={item} value={item}>{item}</option>
                    )
                }
                </select>
                
                {/* City */}
                <select style={dropDown} value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="" disabled>Select City</option>
                { selectedState &&
                    cities.map((item) => 
                    <option key={item} value={item}>{item}</option>
                    )
                }
                </select>

            </div>
            { selectedCity && <p> You have selected <span>{selectedCountry}</span>, {selectedState}, {selectedCity} </p> }

        </div>
        </>
    )
}
