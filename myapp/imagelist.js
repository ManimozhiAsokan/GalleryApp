import React , {useState , useEffect} from 'react';
import axios from 'axios';

const ImageList = () =>{

const[image , updateImage] = useState([]);
const[message , updateMessage] = useState("");

const getImage = () => {
    axios.get("http://localhost:3003/image")
    .then(response=>{
        updateImage(response.data.reverse());
    })
}

useEffect(()=>{
    getImage();
}, [true])

const deleteImage = (pid) =>{
    var url="http://localhost:3003/image/"+pid;
    axios.delete(url).then(response=>{
        updateMessage("Image Deleted Successfully");
        getImage();
    })
}
    
  return(
        <>
        <div className="row">
            <div className="col-lg-12">
               <div className="bg-white p-4 rounded">
                  <h3 className="text-center">Image List</h3>
                  <p className="text-center text-danger">{message}</p>
                  <table className="table table-striped">
                    <thead>
                        <tr className="bg-light text-primary">
                            <th> Id </th>
                            <th> Photographer Name </th>
                            <th> Photo  </th>
                            <th> Location </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            image.map((imginfo , index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{imginfo.id}</td>
                                        <td>{imginfo.name}</td>
                                        <td>{imginfo.photo}</td>
                                        <td>{imginfo.location}</td>
                                        <td>
                                            <img src={imginfo.photo} height="70" width="70"/>
                                        </td>
                                        <td>
                                           <button className="btn btn-danger" 
                                           onClick={deleteImage.bind(this, imginfo.id)}>
                                               <i className="fa fa-trash"></i>
                                           </button> 
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                  </table>
               </div> 
            </div>
        </div>
        </>
    )
}

export default ImageList;