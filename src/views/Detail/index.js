import { useNavigate, useParams } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { IoIosStar, IoMdStarOutline } from "react-icons/io";
import { useEffect, useState } from "react";
export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();

  console.log("params", params);
  const [model, Setmodel] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => Setmodel(json));
  }, [params.id]);
  //
  const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.round(rating);
    return (
      <div className="flex">
        {[...Array(maxStars)].map((star, index) => (
          <span key={index} className="text-xl">
            {index < filledStars ? <IoIosStar /> : <IoMdStarOutline />}
          </span>
        ))}
      </div>
    );
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <button
          className="border border-gray-300 px-4 py-2 ml-4 mt-4 rounded-full text-2xl hover:bg-slate-50 transition-all duration-300 ease-in-out"
          onClick={() => {
            navigate(-1);
          }}
        >
          <TbArrowBackUp />
        </button>
        <div className="container px-5 py-16 mx-auto">
          <h1 className="text-center text-3xl font-bold mb-10">
            Product Detail
          </h1>
          <div className="lg:w-4/5 mx-auto flex  flex-wrap rounded-lg p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img
              alt={model.title}
              className=" lg:w-1/2 w-full lg:h-80 h-64 object-contain object-center rounded"
              src={model.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {model.title}
              </h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {model.rating ? (
                    <>
                      <StarRating rating={model.rating.rate} />
                      <span className="text-gray-600 ml-3">
                        {model.rating.rate}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  {model.rating ? (
                    <span className="text-gray-600 ml-3">
                      Total Review: {model.rating.count}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <p className="leading-relaxed">{model.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${model.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
