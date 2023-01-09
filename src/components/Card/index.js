import React, { useState } from "react";
import CardStyle from "./style";
import Oops from "../../assets/images/oops.svg";

const Card = ({ data, setStep, step, setLocation }) => {
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const onLocation = (pos) => {
    setLocation(pos.coords);
    // setLocation({
    //   latitude: 33.753746,
    //   longitude: -84.38633,
    // });
    setLoader(false);
    setStep((prev) => prev + 1);
  };

  const onError = (error) => {
    setIsError(true);
  };

  const onClickHandler = () => {
    if (step == 2) {
      setLoader(true);
      navigator.geolocation.getCurrentPosition(onLocation, onError);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <CardStyle>
      {isError ? (
        <>
          <div className="card-content">
            Oops I need your location to begin searching for relevant hotspots
          </div>
          <div className="card-icon">
            <img src={Oops} alt="" />
          </div>
          <div
            className="cta"
            onClick={() => {
              setIsError(false);
              setStep(1);
            }}
          >
            Start Again
          </div>
        </>
      ) : (
        <>
          <div className="card-content">{data.question}</div>
          <div className="card-icon">
            <img src={data.image} alt="" />
          </div>
          <div className="cta" onClick={onClickHandler}>
            {loader ? "Getting Location" : data.catTitle}
          </div>
        </>
      )}
    </CardStyle>
  );
};

export default Card;
