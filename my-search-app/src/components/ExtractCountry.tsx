import React, {useEffect, useState} from "react";


export default function(name: String) {

    const [country, setCountry]  = useState<Array<string>>([]);

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("http://localhost:8001/");
          res.json().then(res => setCountry(res));
    
        }
        fetchData(); 
        
      }, []);

    return(
        <div>
            //bruke redux som interface til å hente ut det objekter der "Country or region" === name

        </div>
    )
}