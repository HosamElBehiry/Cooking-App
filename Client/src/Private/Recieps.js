import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../Utils/axios-utils";
import { toast } from "react-toastify";

const makeFormDate = (values) => {
  const formData = new FormData();
  formData.append("image", values.image);
  formData.append("title", values.title);
  formData.append("reciep", values.reciep);
  formData.append("ingredient", values.ingredient);
  return formData;
};

const fetchRecieps = async () => {
  return await request({ url: `/reciep` });
};

export const useFetchRecieps = () => {
  return useQuery("recieps", fetchRecieps);
};

const fetchReciep = async ({ queryKey }) => {
  return await request({ url: `/reciep/${queryKey[1]}` });
};

export const useFetchReciep = (id) => {
  return useQuery(["reciep", id], fetchReciep);
};

const addNew = async (values) => {
  return await request({
    url: "/reciep",
    method: "POST",
    data: makeFormDate(values),
  });
};

export const useAddNew = () => {
  const queryClient = useQueryClient();
  return useMutation(addNew, {
    onSuccess: () => {
      queryClient.invalidateQueries(["recieps"]);
      toast.success("Added Successfully ");
    },
  });
};

const deleteById = async (values) => {
  return await request({ url: `/reciep/${values.id}`, method: "DELETE" });
};

export const useDeleteReciep = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["recieps"]);
      toast.success("Deleted Successfully ");
    },
  });
};

const updateById = async (values) => {
  const { id } = values;
  return await request({
    url: `/reciep/${id}`,
    method: "PUT",
    data: makeFormDate(values),
  });
};

export const useUpdateReciep = () => {
  const queryClient = useQueryClient();
  return useMutation(updateById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["recieps"]);
      toast.success("Updated Successfully ");
    },
  });
};
