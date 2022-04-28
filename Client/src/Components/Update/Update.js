import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetchReciep, useUpdateReciep } from "../../Private/Recieps";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import Shared from "../Shared/Shared";

const Update = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchReciep(id);
  const { mutateAsync } = useUpdateReciep();
  if (isLoading) {
    return <></>;
  } else {
    const oldData = {
      id: data?.data.data._id,
      image: data?.data.data.image,
      title: data?.data.data.title,
      reciep: data?.data.data.reciep,
      ingredient: data?.data.data.ingredient,
    };
    return (
      <div className="container-fluid">
        <div className="content bg-white mt-5 mb-5 box-shadow">
          <div className="p-3 ">
            <div className="title border-bottom">
              <h5 className="fw-bold text-center">Update You Information</h5>
            </div>
            <Formik
              initialValues={oldData || initialValues}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={(values) => mutateAsync(values)}
            >
              {(formik) => <Shared {...{ formik }} />}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
};

export default Update;
