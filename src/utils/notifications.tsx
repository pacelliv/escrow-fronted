import toast from "react-hot-toast"

export const notifyWait = (message: string) =>
    toast.loading(message, { position: "top-right", duration: 5000 })
    
export const notifySuccess = (message: string) =>
    toast.success(message, { position: "top-right", duration: 5000 })