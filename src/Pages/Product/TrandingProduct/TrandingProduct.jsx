import { useEffect, useState } from "react";

import { GiVote } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";


const TrandingProduct = () => 
    const [featured, setFeatured] = useState([]);
    const myAxios = useAxiosPublic()
    useEffect(() => {
        myAxios.get('/tranding')
            .then(res => {
                setFeatured(res.data)
            })
    }, [myAxios])

    

    return (
        <div>
            <h3 className="text-5xl text-center py-5 border-b-2 border-gray-400 max-w-md mx-auto">Tranding Item</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5
                          py-5">
                {
                    featured?.slice(0, 6)?.map(item => <div key={item?.id}
                    >
                        

                        <div className="card w-96 bg-base-300  h-[550px] shadow-xl rounded-lg">

                            <figure className="bg-base-100">
                                <img className=" mt-8 w-full h-44" src={item?.productImage} />
                                </figure>
                            <div className="card-body bg-base-100  rounded-b">
                                <h2 className="card-title">
                                {item?.productName}
                                    
                                </h2>
                                
                                <p>{item?.description.slice(0, 240)}</p>
                                <div className="card-actions justify-between">
                                    <div className="btn btn-outline btn-success btn-xs"> <GiVote></GiVote>up vote</div>
                                    <div className="btn btn-outline btn-success btn-xs"><GiVote></GiVote>down vote</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
           <div className="flex my-5">
          <Link to="/product"> <button  className="btn btn-accent">Show All Product</button></Link>
           </div>
        </div>
    );
};

export default TrandingProduct;