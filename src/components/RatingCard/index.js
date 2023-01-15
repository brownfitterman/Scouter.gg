import React, { useState } from "react";
import RatingCardStyle from "./style";
import fireIcon from "../../assets/images/pubs.svg";
import Loader from "../Loader.js";
import packed from "../../assets/images/100.svg";
import Busy from "../../assets/images/80.svg";
import Calm from "../../assets/images/50.svg";
import Dead from "../../assets/images/25.svg";
import Busiest from "../../assets/images/packed.svg";
import MostReviewed from "../../assets/images/MostReviewed.svg";
import TopRated from "../../assets/images/TopRated.svg";
import Nearest from "../../assets/images/Nearest.svg";

const RatingCard = ({ places, setStep, setSortOption, isLoading, sortOption }) => {
  const [showOptions, setShowOptions] = useState(false);
  let date = new Date();
  let day = date.toString().split(" ")[0];
  let time = date.toString().split(" ")[4].split(":");
  let hour = time[0];

  const status = (num) => {
    if (num >= 0 && num <= 25) {
      return "Dead";
    } else if (num > 25 && num <= 50) {
      return "Calm";
    } else if (num > 50 && num <= 80) {
      return "Busy";
    } else if (num > 80 && num < 100) {
      return "Packed";
    }
  };

  const statusCard = (num) => {
    if (num == 0) {
      return "Zero";
    } else if (num > 0 && num <= 25) {
      return "Dead";
    } else if (num > 25 && num <= 50) {
      return "Calm";
    } else if (num > 50 && num <= 80) {
      return "Busy";
    } else if (num > 80 && num < 100) {
      return "Packed";
    }
  };

  return (
    <RatingCardStyle path={packed}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="wrapper">
            <div className="acton-strip">
              <p>
                Hand-picked places for you <span>Nearby</span>
              </p>
              <div className="button-group">
                <span className="sort-btn" onClick={() => setShowOptions((prevData) => !prevData)}>
                  {sortOption}
                </span>{" "}
                <span onClick={() => setStep(3)}>Reset</span>
              </div>
              {showOptions && (
                <div className="sorting-block">
                  <h3>Sort by</h3>
                  <div className="sorting-btns">
                    <div
                      className={sortOption === "Busiest" ? "active" : ""}
                      onClick={() => setSortOption("Busiest")}
                    >
                      <img src={Busiest} alt="" /> Busiest
                    </div>
                    <div
                      className={sortOption === "Distance" ? "active" : ""}
                      onClick={() => setSortOption("Distance")}
                    >
                      <img src={Nearest} alt="" />
                      Nearest
                    </div>
                    <div
                      className={sortOption === "MostReviewed" ? "active" : ""}
                      onClick={() => setSortOption("MostReviewed")}
                    >
                      <img src={MostReviewed} alt="" />
                      Most Reviewed
                    </div>
                    <div
                      className={sortOption === "TopRate" ? "active" : ""}
                      onClick={() => setSortOption("TopRate")}
                    >
                      <img src={TopRated} alt="" />
                      Top Rated
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="rating-card-wrapper">
            {places?.map((place, index) => (
              <div className="rating-cards">
                <div className="rating-meter">
                  <span
                    className={
                      "packed-status " + statusCard(place[`BusyHours${day}`].split(",")[hour - 1])
                    }
                  >
                    <span>{`${place[`BusyHours${day}`].split(",")[hour - 1]}%`}</span>
                  </span>
                  <span className="status">
                    {status(place[`BusyHours${day}`].split(",")[hour - 1])}
                  </span>
                </div>
                <div className="rating-info">
                  <h2>{place.PlaceName}</h2>
                  <div className="rating-star">
                    {Array(Math.floor(place.Rating))
                      .fill()
                      .map((v, i) => (
                        <i class="fa fa-star active" aria-hidden="true"></i>
                      ))}
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span className="review-counts">{`(${place.Rating_n} ${
                      place.Rating_n > 10 ? "Reviews" : "Review"
                    })`}</span>
                  </div>
                  <div className="location">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    {place.Address.split(",")[0]},{place.Address.split(",")[1]},
                    <br />
                    {place.Address.split(",")[2]}
                  </div>
                  <div className="venue-distance">
                    <div>
                      <span className="bars">{place.PlaceType}</span>
                      <span className="bar-distance">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        {place.distance.toFixed(1)} miles
                      </span>
                    </div>
                    <div className="cardId">#0{index + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </RatingCardStyle>
  );
};

export default RatingCard;
