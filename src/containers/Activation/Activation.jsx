import { useEffect } from "react";
import FullWidthLayout from "../../layouts/FullWidthLayout"
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { toast } from "sonner";

const Activation = () => {

    const { uuid, token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        Axios.post(`${import.meta.env.VITE_APP_HOST}/api/users/activation/`, { uuid, token })
            .then(response => {
                console.log(response.data);
                toast.success('Activación completada');
            }).catch(error => {
                console.log(error.response.data);
            }).finally(() => {
                navigate('/login');
            })
    }, [])
    return (
        <FullWidthLayout>
            <h1 className="activate">Activando...</h1>
        </FullWidthLayout>
    )
}

export default Activation