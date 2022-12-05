import axios from "axios";




const update = async ( {name, email}  ) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.put(`${process.env.REACT_APP_API_URL}/user/updateUser`,{
            name: name,
            email: email,
            username:user.username
        },config);
        console.log(resp.data);
        return true;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return false;
    }
};

const userService ={update}
export default userService;