import { create } from "zustand";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllMovie,addMovie,updateMovie,deleteMovie } from "./MovieApi";

export const useMovies = create((set) => {
    return {
        allMovies: [],
        setAllMovies: (allMovies) => {
            return set((state) => (state.allMovies = allMovies));
        },
        addMovies:(newMovie)=>{
            return set((state)=>state.allMovies.push(newMovie))
        },
        updateMovie:(updateMovie)=>{
            return set((state)=>{
                state.allMovies.forEach((movie,index)=>{
                    if(movie.id===updateMovie.id){
                        state.allMovies[index]=updateMovie
                    }
                })
            })
        },
        deleteMovie:(movieId)=>{
            return set((state)=>state.allMovies.filter((movie)=>movie.id!==movieId))
        }
    };
});

//query Function
export const useMoviesQuery=()=>{
    return useQuery("movies",getAllMovie)
}

const useAddMovieMutation=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:addMovie,
        onSuccess:()=>{
            queryClient.invalidateQueries("movies")
        }
    })
}

const useUpdateMovieMutation = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateMovie, {
      onSuccess: () => {
        queryClient.invalidateQueries("movies");
      },
    });
};
const useDeleteMovieMutation = () => {
    const queryClient = useQueryClient();
  
    return useMutation(deleteMovie, {
      onSuccess: () => {
        queryClient.invalidateQueries("movies");
      },
    });
}
export const useAllMovieActions = () => {
    return {
      addMovie: useAddMovieMutation(),
      updateMovie: useUpdateMovieMutation(),
      deleteMovie: useDeleteMovieMutation(),
    };
};

