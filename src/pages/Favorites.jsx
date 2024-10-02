import Navbar from "../components/Navbar";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites(){
    return(
        <>
        <Navbar />
        <div className="w-full px-10">
        <h1 className="text-left py-6">My Favorites</h1>
        <div className="max-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full my-10">
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
        </div>
        </div>
        </>
    )
}