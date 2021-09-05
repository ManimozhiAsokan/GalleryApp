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
        <div className="row">
            <div className="col-lg-12 ">
               <div className="bg-white p-4 rounded">
                  <h3 className="text-center"></h3>
                  <p className="text-center text-danger">{message}</p>
                    
                        {
                            image.map((imginfo , index)=>{
                                return(

                                    <div class="container" key={index}>
                                    <div class="row">
                                      <div class="col-lg">
                                      <img src={imginfo.photo} className="rounded" height="120"/>
                                      <p>{imginfo.name}</p>
                                      <p>{imginfo.location}</p>

                                     <button className="btn btn-danger" 
                                           onClick={deleteImage.bind(this, imginfo.id)}>
                                               <i className="fa fa-trash"></i>
                                           </button> 
                                      </div>
                                     <div class="col mt-3">
                                    <img src={imginfo.photo} className="rounded" height="120"/>
                                      <p>{imginfo.name}</p>
                                     <p>{imginfo.location}</p>

                                     <button className="btn btn-danger" 
                                           onClick={deleteImage.bind(this, imginfo.id)}>
                                               <i className="fa fa-trash"></i>
                                           </button> 
                                    </div> 
                                   <div class="col mt-3">
                                    <img src={imginfo.photo} className="rounded" height="120"/>
                                      <p>{imginfo.name}</p>
                                     <p>{imginfo.location}</p>

                                     <button className="btn btn-danger" 
                                           onClick={deleteImage.bind(this, imginfo.id)}>
                                               <i className="fa fa-trash"></i>
                                           </button> 
                                    </div> 
                                    <div class="col mt-3">
                                    <img src={imginfo.photo} className="rounded" height="120"/>
                                      <p>{imginfo.name}</p>
                                     <p>{imginfo.location}</p>

                                     <button className="btn btn-danger float-right" 
                                           onClick={deleteImage.bind(this, imginfo.id)}>
                                               <i className="fa fa-trash"></i>
                                           </button> 
                                    </div> 
                                    </div>
                                  </div>
                                      

                                    
                                    // <div className="container">
                                    //     <div className="row" key={index}>
                                    //     <div className="col-lg-6 mb-3 bg-white p-3 rounded">
                                        
    
                                    //         <img src={imginfo.photo} className="rounded" height="120"/>
                                    //         <p>{imginfo.name}</p>
                                    //         <p>{imginfo.location}</p>
                                    //     </div>

                                    //     <div>
                                    //        <button className="btn btn-danger" 
                                    //        onClick={deleteImage.bind(this, imginfo.id)}>
                                    //            <i className="fa fa-trash"></i>
                                    //        </button> 
                                    //     </div>
                                       
                                    // </div>
                                    // </div>
                                    // </div>   
                                )
                            })
                        }
               </div> 
            </div>
        </div>
    )
}

export default ImageList;