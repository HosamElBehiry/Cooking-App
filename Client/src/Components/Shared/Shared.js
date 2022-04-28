import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, ErrorMessage, Field } from "formik";
const Shared = ({ formik }) => {
  const [img, setImg] = useState(
    formik.values.image
      ? `${process.env.REACT_APP_API_URL}/${formik.values.image}`
      : "/Images/blank.png"
  );
  const imgRef = useRef(null);
  const navigate = useNavigate();
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Form className="p-2 mt-4">
      <div className="input-container m-auto mb-3 w-50 d-flex align-items-center justify-content-between">
        <label className="fw-bold" htmlFor="">
          Image
        </label>
        <div
          className="img-container border p-1 position-relative"
          style={{
            marginRight: "50%",
            transform: "translateX(50%)",
            borderRadius: "50%",
          }}
        >
          <img
            src={img}
            alt=""
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <i
            className="fa-solid fa-camera position-absolute top-0 text-muted cursor-pointer"
            style={{ right: "2px", zIndex: "5" }}
            onClick={() => imgRef.current.click()}
          ></i>
        </div>
        <input
          type="file"
          className="d-none"
          name="image"
          ref={imgRef}
          onChange={(e) => {
            handleImage(e);
            formik.setFieldValue("image", e.target.files[0]);
          }}
        />
      </div>
      <div className="err-container text-center mb-3">
        <ErrorMessage name="image" />
      </div>
      <div className="input-container m-auto mb-3 w-50 d-flex align-items-center justify-content-between">
        <label className="fw-bold">Title</label>
        <Field type="text" className="w-75 outline-0 border p-1" name="title" />
      </div>
      <div className="err-container text-center mb-3">
        <ErrorMessage name="title" />
      </div>
      <div className="input-container m-auto mb-3 w-50 d-flex align-items-center justify-content-between">
        <label className="fw-bold" htmlFor="">
          Ingredient
        </label>
        <Field
          className="w-75 outline-0 border p-1"
          type="text"
          name="ingredient"
        />
      </div>
      <div className="err-container text-center mb-3">
        <ErrorMessage name="ingredient" />
      </div>
      <div className="input-container m-auto mb-3 w-50 d-flex align-items-center justify-content-between">
        <label className="fw-bold" htmlFor="">
          Recipe
        </label>
        <Field
          as="textarea"
          className="w-75 outline-0 border p-1"
          type="text"
          name="reciep"
        />
      </div>
      <div className="err-container text-center mb-3">
        <ErrorMessage name="reciep" />
      </div>
      <div className="input-submit-container mb-3 d-flex align-items-center justify-content-center">
        <div className="buttons">
          <button className="btn btn-primary me-2" type="submit">
            Save Changes
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => navigate(-1, { replace: true })}
          >
            Back
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Shared;
