import Shared from "../Shared/Shared";
import { Formik } from "formik";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import { useAddNew } from "../../Private/Recieps";

const Add = () => {
  const { mutateAsync } = useAddNew();
  return (
    <div className="container-fluid">
      <div className="content bg-white mt-5 mb-5 box-shadow">
        <div className="p-3 ">
          <div className="title border-bottom">
            <h5 className="fw-bold text-center">Add You Information</h5>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, onSubmitProps) => {
              mutateAsync(values);
              onSubmitProps.resetForm();
            }}
          >
            {(formik) => <Shared {...{ formik }} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Add;
