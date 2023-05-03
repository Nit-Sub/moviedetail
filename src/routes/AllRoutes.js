import { Route, Routes } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MovieDetail />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="movies/popular" element={<MovieList />} />
                <Route path="movies/top" element={<MovieList />} />
                <Route path="movies/upcoming" element={<MovieList />} />
                <Route path="search" element={<Search />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>    </>
    )
}

export default AllRoutes