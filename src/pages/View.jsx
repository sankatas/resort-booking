import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'

const View = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.npoint.io/f70631b3b42c65d46cc1');
      const data = await response.json();
      setResorts(data.resorts);
    }
    fetchData();
  }, []);

  console.log(resorts, 'resorts')


  return (
    <div style={{border: '5px solid red', display: 'flex', flexWrap: 'wrap', flexDirection: "row", columnGap: '10px', marginTop: '100px', marginBottom: 'auto', height: "100%"}}>
      {
        resorts.length && resorts.map((resort) => {
          return (
            <>
            <ProductCard info={resort} />
            </>
          )
        })
      }
    </div>
  )
}

export default View