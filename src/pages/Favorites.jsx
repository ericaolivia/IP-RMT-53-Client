import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Favorites(){
    return(
        <>
        <Navbar />
        <div className="w-full px-10">
        <h1 className="text-left py-6">My Favorites</h1>
        <div className="max-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full my-10">
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        <Card rounded={true} btnLeft={"See Detail"} btnRight={"Delete"}/>
        </div>
        </div>
        </>
    )
}