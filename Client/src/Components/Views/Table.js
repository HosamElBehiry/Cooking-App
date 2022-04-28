import { useNavigate } from "react-router-dom";
import { useDeleteReciep, useFetchRecieps } from "../../Private/Recieps";
import "../../Sass/Pages/table.scss";
const Table = () => {
  const navigate = useNavigate();
  const { data } = useFetchRecieps();
  const { mutateAsync } = useDeleteReciep();
  return (
    <div className="container">
      <div className="table-content bg-white mt-5 mb-5 box-shadow">
        <div className="border border-bottom-0 d-flex align-items-center justify-content-between p-2">
          <div className="title">
            <h4 className="fw-bold">My Recieps</h4>
          </div>
          <div className="options">
            <button
              className="btn btn-primary fw-bold me-2"
              onClick={() => navigate("/Add")}
            >
              {" "}
              Add New{" "}
            </button>
          </div>
        </div>
        <table className="table-responsive  w-100 text-center">
          <thead>
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Image</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Ingredient</th>
              <th className="border p-3">Recipe</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.data.map((reciep, item) => (
              <tr key={reciep._id}>
                <td className="border p-1 fw-bold">{item + 1}</td>
                <td className="border p-1">
                  <div className="img-container">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${reciep.image}`}
                      alt=""
                    />
                  </div>
                </td>
                <td className="border p-1">{reciep.title}</td>
                <td className="border p-1">{reciep.ingredient}</td>
                <td className="border p-1">{reciep.reciep.slice(0, 25)}</td>
                <td className="border ">
                  <div className="update-delete d-flex align-items-center justify-content-center">
                    <div
                      className="view cursor-pointer me-2"
                      onClick={() => navigate(`Detail/${reciep._id}`)}
                    >
                      <i className="fa-solid fa-eye text-success"></i>
                    </div>
                    <div
                      className="update cursor-pointer me-2"
                      onClick={() => navigate(`/Update/${reciep._id}`)}
                    >
                      <i className="fa-solid fa-pen-to-square text-primary"></i>
                    </div>
                    <div
                      className="trash cursor-pointer"
                      onClick={() => mutateAsync({ id: reciep._id })}
                    >
                      <i className="fa-solid fa-trash text-danger"></i>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
