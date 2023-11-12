import React from 'react'
import jobsData from '../Dataset/jobsData'
import { useParams } from 'react-router-dom'; 
const ProductOwner = () => {
  const {id} = useParams()
  console.log("value elment", id)
  const productOwNer = jobsData.jobsData.find((user) => user.id === parseInt(id));
      console.log(productOwNer)
  return (
    <div className='product-owner'>
      <h1 className='product-header'>{productOwNer.title}</h1>
      <p className='product-paragraph'>{productOwNer.jobDescription}</p>
      <ul className='product-list'>
      <div>
      <li className='product-li'>{productOwNer.location}</li>
      <li className='product-li'>{productOwNer.jobType}</li>
      </div>
      <div>
      <button className='product-button'>Apply For the Job</button>
      </div>
      
      </ul>
      <h3 className='product-responsibility'>{productOwNer.responsibility}</h3>
      
      <ul>
      <li>{productOwNer.responsibility[0]}</li>
      <li>{productOwNer.responsibility[1]}</li>
      <li>{productOwNer.responsibility[2]}</li>
      <li>{productOwNer.responsibility[3]}</li>
      <li>{productOwNer.responsibility[4]}</li>
      <li>{productOwNer.responsibility[5]}</li>
      <li>{productOwNer.responsibility[6]}</li>
      <li>{productOwNer.responsibility[7]}</li>
      <li>{productOwNer.responsibility[8]}</li>
      <li>{productOwNer.responsibility[9]}</li>
      
      </ul>
    </div>
  )
}

export default ProductOwner
