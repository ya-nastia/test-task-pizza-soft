import { toast } from "react-toastify";

export const notifySuccess = () => toast.success("Success");

export const notifyError = (message: string) => toast.error(message || "Error");