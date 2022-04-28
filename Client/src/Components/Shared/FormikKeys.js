import * as Yup from "yup";

export const initialValues = {
  image: "",
  title: "",
  reciep: "",
  ingredient: "",
};

export const validationSchema = Yup.object({
  image: Yup.string().required("Required !"),
  title: Yup.string().required("Required !"),
  reciep: Yup.string().required("Required !"),
  ingredient: Yup.string().required("Required !"),
});
