import { useParams, useNavigate } from "react-router-dom";
import { useFetchReciep } from "../../Private/Recieps";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetchReciep(id);
  const navigate = useNavigate();
  return (
    <div className="container mt-5 mb-5 bg-white">
      <div className="detail-parent p-5 text-center ">
        <div className="img-container">
          <img
            style={{ borderRadius: "10px" }}
            src={`${process.env.REACT_APP_API_URL}/${data?.data.data.image}`}
            alt=""
            className="border-radius-5"
          />
        </div>
        <div className="reciep-container">
          <h1 className="fw-bold text-primary">{data?.data.data.title} </h1>
          <h5 className="text-success fw-bold">
            {data?.data.data.ingredient}{" "}
          </h5>
          <p className="text-muted fs-6">{data?.data.data.reciep}</p>
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1, { replace: true })}
        >
          {" "}
          Back{" "}
        </button>
      </div>
    </div>
  );
};

export default Detail;
