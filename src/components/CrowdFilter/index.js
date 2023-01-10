import React, { useState } from "react";
import CrowdFilterStyle from "./style";

const CrowdFilter = ({ optionData, setOptionData, setStep, setShowPlaces }) => {
  const [optionStep, setOptionStep] = useState(0);

  const handleSelection = (index) => {
    if (optionStep == 0) {
      optionData[optionStep].options[index].isSelected =
        !optionData[optionStep]?.options[index]?.isSelected;
      optionData[optionStep].options.map((value, i) => {
        if (index !== i) {
          value.isSelected = false;
        }
      });
    } else {
      optionData[optionStep].options[index].isSelected =
        !optionData[optionStep]?.options[index]?.isSelected;
    }
    setOptionData([...optionData]);
  };

  const handleSubmit = () => {
    setShowPlaces(true);
    setStep((prev) => prev + 1);
  };

  return (
    <CrowdFilterStyle>
      {optionData[optionStep]?.description && (
        <React.Fragment>
          <div className={"progress-bar" + optionStep}></div>
          <div className="description">
            {optionData[optionStep].description}
            <div className="sub-heading">{optionData[optionStep].heading}</div>
          </div>

          <div className="option-card-wraper">
            {optionData[optionStep].options.map((option, index) => (
              <div
                className={`option-card ${option.isSelected && "active"}`}
                onClick={() => handleSelection(index)}
              >
                <div>
                  <img src={option.image} alt="" />
                  <div>{option.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="button-group">
            <button className="back-btn" onClick={() => setOptionStep((prev) => prev - 1)}>
              Back
            </button>
            <button
              className="next-btn"
              onClick={() => {
                if (
                  optionData[optionStep].options.filter((value) => value.isSelected == true)
                    .length < 1
                ) {
                  alert("Select atleast 1 option to continue");
                } else {
                  if (optionStep == 3) {
                    handleSubmit();
                  } else {
                    setOptionStep((prev) => prev + 1);
                  }
                }
              }}
            >
              Next
            </button>
          </div>
        </React.Fragment>
      )}
    </CrowdFilterStyle>
  );
};

export default CrowdFilter;
