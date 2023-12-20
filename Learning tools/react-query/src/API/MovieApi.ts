import axios from "axios";


const movieApi=axios.create({
    baseURL:"http://localhost:3500"
})

export const getAllMovie=async():Promise<object[]>=>{
    const data=await axios.get("/movies")
    return data.data
}
export const addMovie=async(newMovie:object):Promise<object>=>{
    const data=await axios.post("/movies",newMovie)
    return data.data
}
export const deleteMovie = async (movie: object): Promise<object> => {
    return await movieApi.delete(`/movies/${movie.id}`);
};

export const updateMovie=async(movie:object):Promise<object>=>{
    return await movieApi.patch(`/movies/${movie.id}`)
}
