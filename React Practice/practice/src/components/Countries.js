import { useEffect, useState } from "react"


export default function Countries(){

    const [input, setInput] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const getCountryData = () => {
            fetch('https://xcountries-backend.azurewebsites.net/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setFilteredCountries(data)
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getCountryData();
    },[])

    const handleSearch = (e) => {
        let searchedInput = e.target.value.toLowerCase();
        setInput(searchedInput);
        let filteredData = countries.filter((country) => country.name.toLowerCase().includes(input))
        setFilteredCountries(filteredData)
    }

    const container = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const cardStyle = {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    }

    const imageCard = {
        width: '100px',
        height: '100px',
    }

    const searchStyle = {
        height: '20px',
        width: '250px',
        padding: '10px',
        margin: '20px',
        border: '1px solid grey',
        borderRadius: '25px',
        fontSize: '15px',
    }

    return(
        <>
        <div>
            <input type="text" value={input} onChange={handleSearch} style={searchStyle} placeholder="Search countries..." />
            <div style={container}>
            {
                filteredCountries.map((data, index) => 
                <div style={cardStyle} key={index}>
                
                    <img src={data.flag} alt={`${data.name} Flag PNG`} style={imageCard}/>
                
                    <div>
                        <p style={{ fontSize:'20px', fontWeight: 'medium', }}>{data.name}</p>
                    </div>
                </div>
                )
            }
            </div>
        </div>
        </>
    )

}
