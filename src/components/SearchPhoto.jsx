import React from 'react'
import NavBar from './NavBar'

const SearchPhoto = () => {
  return (
    <div>
    <NavBar/>
    <br />
    <center><h1>Search Any Photo</h1>
    <br />
<div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <label htmlFor="" className="form-label">Title</label>
                    <textarea name="" id="" className="form-control"></textarea>

                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
</center>
    </div>
  )
}

export default SearchPhoto