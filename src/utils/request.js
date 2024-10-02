import axios from "axios";

const request = axios.create({
    // * TODO: nanti perlu diganti sm api yg kita up pake firebase
    // baseURL: "https://api.p2.slc1.foxhub.space"

    // TODO: SEMENTARA URL NYA PAKE LOCALHOST DULU
    baseURL: "http://localhost:3000"
})

export default request;