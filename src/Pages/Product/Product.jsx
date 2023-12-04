import { useEffect } from "react";
import { useState } from "react";
import { GiVote } from "react-icons/gi";
import useAxiosPublic from "../../Hook/useAxiosPublic";



const Product = () => {


    const myAxios = useAxiosPublic()
    const [tranding, setTranding] = useState([])

    useEffect(() => {

        myAxios.get('/tranding')
            .then(res => {
                const allData = res.data;
                setTranding(allData)
            })
    }, [myAxios])

    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20
                          py-5">
                {
                    tranding?.map(item => <div key={item?.id}
                    >


                        <div className="card bg-base-300  h-[550px] shadow-xl rounded-lg">

                            <figure className="bg-base-100">
                                <img className=" mt-8 w-full" src={item?.productImage} />
                            </figure>
                            <div className="card-body bg-base-100  rounded-b">
                                <h2 className="card-title">
                                    {item?.productName}

                                </h2>

                                <p>{item?.description?.slice(0, 240)}</p>
                                <div className="card-actions justify-between">
                                    <div className="btn btn-outline btn-success btn-xs"> <GiVote></GiVote>up vote</div>
                                    <div className="btn btn-outline btn-success btn-xs"><GiVote></GiVote>down vote</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Product;