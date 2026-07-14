import React from 'react'
import Navigation from './Navigation'


const AddTeam = () => {
  return (
    <div>
        <Navigation/>

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">team id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">team name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">team leader name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">leader email</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">leader phone</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">college name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">number of members</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">project title</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">problem statement stack</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">technology stack</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">mentor name</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">registration date</label>
                          <input type="text" className="form-control" />
                    </div>

                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">table/station number</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTeam