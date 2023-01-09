import React, { useState } from "react";
import CollectionInformationStyle from "./style";
import axios from "axios";

const CollectionInformation = ({ setShowModel }) => {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      StoredProcedureName: "ADD_CONTACT_FORM",
      ...form,
    };
    console.log("body=======>>>", body);
    axios
      .post(
        "https://scouterextraction001.azurewebsites.net/api/v1/Mobile/ProcessOperationRequest",
        body
      )
      .then((res) => {
        if (res?.data?.success) {
          setShowModel(true);
        }
      });
  };

  return (
    <CollectionInformationStyle>
      <div className="description">
        My systems indicate that we haven’t expanded to your area. This could be an opportunity to
        help us, help others. Ping us with a message below and we will add places in your area.
      </div>
      <div className="infoform">
        <div className="form-group">
          <div className="label">
            Name <small>*</small>
          </div>
          <input name="Params1" onChange={handleChange} type="text" />
        </div>
        <div className="form-group">
          <div className="label">
            Instagram <small>*</small>
          </div>
          <input name="Params2" onChange={handleChange} type="text" />
        </div>
        <div className="form-group">
          <div className="label">Message</div>
          <input name="Params3" onChange={handleChange} type="textarea" />
        </div>
        <button onClick={(e) => handleSubmit(e)} className="cta">
          Send
        </button>
      </div>
    </CollectionInformationStyle>
  );
};

export default CollectionInformation;
