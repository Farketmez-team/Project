import axios from "axios";


const getPatients = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/patient/getPatientList?doctorId=${user.id}`,config);
        
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
};

const addPatient = async ({name,
age,
gender},) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/patient/add`,{
            name:name,
            age:age,
            gender:gender,
            doctorId:user.id,
            sessions:[]
        },config);
        
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
}

const removePatient = async ({name},) => {
        const user = JSON.parse(localStorage.getItem('user'))
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.accessToken}` }
            };
            const resp = await axios.post(`${process.env.REACT_APP_API_URL}/patient/delete`,{
                name:name,
                doctorId:user.id,
            },config);
            
            return resp.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
            return null;
        }
    }

const patientService = {getPatients,addPatient,removePatient}
export default patientService;