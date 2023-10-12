import { toast } from "react-toastify";

export const notifySuccess = () => toast.success("Success");

export const notifyError = () => toast.error("Error");