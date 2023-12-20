import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { useEffect, useState } from 'react';

function BasicExample() {

  const [ data,setData ] = useState([]);


  const getDataProduct = async()=>{
    try {
      let response = await axios.get("http://localhost:5000/api/get");
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log(response.data);
    }
  }

  useEffect(()=>{
    getDataProduct();
  },[])

  return (
    <>

    {
      data.map((items)=>{
        return(
          <div>
            <Card style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Title>{items.price}</Card.Title>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    }
    </>
  );
}

export default BasicExample;