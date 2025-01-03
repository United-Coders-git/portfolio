import axios from "axios"
import { buildBaseUrl, getEmail } from "../config/config"

export const sendEmail = async (nameEmail, email, message) => {
    try {
        const jsonData = {
            receiver: getEmail(),
            issue: `Correo de ${nameEmail} - ${email}`,
            message: message
        }
        const response = await axios.post(buildBaseUrl(), jsonData);
        return response
    } catch (error) {
        console.log(error)
    }
}