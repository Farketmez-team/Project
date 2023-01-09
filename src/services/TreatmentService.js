import axios from "axios";

const getAudioNotes = async (patientID) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/voicenote/getWithPatient/?patientId=${patientID}`,config);
        
        //console.log(resp.data)
        return resp.data;

    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
}

const addTreatments = async (treatments) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/treatment/bulkAdd`,treatments,config);
        
        console.log(resp)
        return resp.data;

    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
}

const getTreatments = async (sessionId,patientid) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}` }
        };
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/treatment/listWithSession?sessionId=${sessionId}`,config);//todo patientid
        console.log("data",resp.data)
        //console.log(resp)
        return resp.data
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
}

const uploadAudioNote = async ({session,patient,mediaUrl}) => {
    let recordingBlob = await getBase64FromUrl(mediaUrl);
    recordingBlob = recordingBlob.slice(22);
    console.log(recordingBlob);
    const user = JSON.parse(localStorage.getItem('user'))
    try {
        
        const config = {
            headers: { Authorization: `Bearer ${user.accessToken}`}
        };

        const resp = await axios.post(`${process.env.REACT_APP_API_URL}/voicenote/add/?sessionId=${session}&patientId=${patient}`,{file:recordingBlob},config);
        
        return resp;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return null;
    }
}

const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data)
      };
    });
  };

const treatmentService ={getAudioNotes,uploadAudioNote,addTreatments,getTreatments}
export default treatmentService;