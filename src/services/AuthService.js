import axios from "axios";





const login = async ( {username, password}  ) => {
    try {
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`,{
            username: username,
            password: password,
        });
        console.log(resp.data);
        localStorage.setItem('user', JSON.stringify(resp.data));
        return true;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return false;
    }
};

const signup = async ( {username, password,email,name}  ) => {
    try {
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`,{
            name:name,
            username: username,
            password: password,
            email:email
        });
        console.log(resp.data);
        return true
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return false;
    }
};

const authService ={login,signup}
export default authService;