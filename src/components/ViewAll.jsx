import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
      (response) => {
        changeData(response.data)

      }
    ).catch()

  }
  useEffect(
    () => {fetchData()}, []
  )
return (
  <div>


    <NavBar />
    <br />
    <center><h1>View photos</h1></center>
    <br />

    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">

            {
              data.map(
                (value, index) => {
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <div class="card">
                      <img src={value.thumbnailUrl} height="150px" class="card-img-top" alt="..."></img>
                      <div class="card-body">
                        <h5 class="card-title">Album Id : {value.albumId}</h5>
                        <p class="card-text">Id : {value.id}<br />
                          Title : {value.title}</p>
                        <a href={value.url} class="btn btn-primary">View Image</a>
                      </div>
                    </div>

                  </div>
                }
              )
            }



          </div>
        </div>
      </div>
    </div>

  </div>
)
}

export default ViewAll