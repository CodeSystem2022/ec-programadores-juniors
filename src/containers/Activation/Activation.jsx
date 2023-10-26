import { useEffect } from "react";
import FullWidthLayout from "../../layouts/FullWidthLayout"
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { toast } from "sonner";

const Activation = () => {

    const { uid, token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        Axios.post(`${import.meta.env.VITE_APP_HOST}/api/users/activation/`, { uid, token })
            .then(response => {
                console.log(response.data);
                toast.success('Activación completada');
            }).catch(error => {
                console.log(error.response.data);
            }).finally(() => {
               navigate('/login');
               console.log('pass')
            })
    }, [])
    return (
        <FullWidthLayout>
<<<<<<< HEAD
            <h1 className="activate">Activando...</h1>
=======
           <h1 className="activate">Activando...</h1>
>>>>>>> 3935dbe02f87c1c5b70a6594becf1b78b8b0d715
        </FullWidthLayout>
    )
}

export default Activation