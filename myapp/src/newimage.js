import React , {useState} from 'react';
import axios from 'axios';

const NewImage = () =>{
      const[name , processName] = useState("");
      const[photo , processPhoto] = useState("");
      const[location , processLocation] = useState("");
      const[message , processMessage] = useState("");

      const save = () =>{
         var url = "http://localhost:3003/image";
         var data = {
             "name":name,
             "photo":photo,
             "location":location
         };
         axios.post(url , data).then(response=>{
             processMessage(name + "Save Successfully!")
         })
      }

      return(
          <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 bg-white p-4 rounded">
                  <h3 className="text-center text-primary"> Add Image </h3>
                  <div className="mb-3">
                      <label> Name</label>
                      <input type="text" className="form-control"
                      onChange={obj=>processName(obj.target.value)}/>
                  </div>

                  <div className="mb-3">
                      <label>Photo</label>
                      <input type="text" className="form-control"
                      onChange={obj=>processPhoto(obj.target.value)}/>
                  </div>

                  <div className="mb-3">
                      <label>Location</label>
                      <input type="text" className="form-control"
                      onChange={obj=>processLocation(obj.target.value)}/>
                  </div>

                  <div className="text-center">
                      <button className="btn btn-primary" onClick={save}>Upload</button>
                  </div>
              </div>
              <div className="col-lg-3"></div>
          </div>
      )
    }

export default NewImage;