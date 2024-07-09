import axios from "axios";
import { toast } from "react-toastify";

export const getAllData = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/Employee`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const SaveData = async (data) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_LOCALHOST}/api/Employee`,
      data
    );
    toast.success("Employee Added successfully");

    return res;
  } catch (error) {
    toast.error("Error in saving the data");
    console.log(error);
  }
};

export const Delete = async (id) => {
  try {
    let res = await axios.delete(
      `${process.env.REACT_APP_LOCALHOST}/api/Employee/${id}`
    );
    if (res.status === 200) {
      toast.success("Employee has been deleted");
    }
  } catch (error) {
    toast.error("Failed to delete");
    console.log(error);
  }
};

export const Edit = async (id) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/Employee/${id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const Update = async (editId, data) => {
  try {
    let res = await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/api/Employee/${editId}`,
      data
    );
    toast.success("Employee has been updated");
  } catch (error) {
    toast.error("Update Failed");
    console.log(error);
  }
};
