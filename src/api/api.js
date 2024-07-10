import axios from "axios";
export default axios.create({
    baseURL:'https://api.themoviedb.org/3/discover',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjVlNTU0YjhhZWFjMWI1NGIxZmVmZDBjNGY1YWEyMCIsIm5iZiI6MTcyMDQzMTI5Ny40NTQ5NTUsInN1YiI6IjY2OGJhZjE4ZmQ5MTAwZmJjMjJiNjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ne8wv4ll9NVgYesW_RBN7VdIHrmzEv3cL-EeYtRmq_k'
    }
})