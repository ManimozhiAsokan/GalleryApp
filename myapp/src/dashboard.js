import React , {useState , useEffect} from 'react';
import {Link , Switch , Route} from 'react-router-dom';
import ImageList from './imagelist';
import NewImage from './newimage';

const Dashboard = () =>{
   
    return(
        <div className = "container mt-2">
            <div className="row mb-5">
                <div className="col-lg-5 text-white text-center">
                     <h2> <i className="fa fa-camera"></i> My Gallery App</h2>
                     <small> <i className="fa fa-handshake-o"></i> You are Welcome </small>
                </div>
                <div className="col-lg-7 text-end pt-2">
                    <div className="btn-group">
                        <Link className="btn btn-light" to="/dashboard"> 
                          <i className="fa fa-home"></i> Dashboard
                        </Link>
                        <Link className="btn btn-light" to="/dashboard/newimage"> 
                          <i className="fa fa-plus"></i> Add New Image
                        </Link>
                    </div>
                </div>
            </div>
            <switch>
                <Route exact path="/dashboard" component={ImageList}/> 
                <Route exact path="/dashboard/newimage" component={NewImage}/>   
            </switch>
        </div>
    );
}

const Logout = () =>{
    localStorage.clear() // to clean name, userid and all other data from localstorage
    window.location.reload();
}

export default Dashboard;