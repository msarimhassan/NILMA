import { toast } from 'react-hot-toast';

const useToast = () => {
  const showSucess = (message) => {
    toast.remove();
    return toast.success(message);
  };
  const showError = (message) => {
    toast.remove();
    return toast.error(message);
  };

  return { showSucess, showError };
};
export default useToast;
