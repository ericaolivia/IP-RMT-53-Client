import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import error from "../utils/error";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, updateProfile } from "../app/slices/profileSlice";
import axios from "../utils/request";

export default function Profile() {
  const dispatch = useDispatch();
  const { id, name, imageUrl, loading, error } = useSelector(
    (state) => state.profile
  );
  const [newName, setNewName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    setNewName(name);
    setNewImageUrl(imageUrl);
  }, [name, imageUrl]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "put",
        url: `/profile/${id}`,
        data: {
          name: newName,
          imageUrl: newImageUrl,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      console.log(`/profile/${id}`);
      console.log(response.data);

      dispatch(
        updateProfile({
          name: response.data.name,
          imageUrl: response.data.imageUrl,
        })
      );

      console.log("Profile updated successfully:");
    } catch (err) {
      console.log(err);
      error(err.response?.data?.message || err.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-4 py-6">
        <h1 className="text-center pt-4 pb-10">My Profile</h1>
        <div className="justify-center items-center flex mb-10">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60f1a490a90ed8713c41c36c/1629223610791-LCBJG5451DRKX4WOB4SP/37-design-powers-url-structure.jpeg"
            alt=""
            className="rounded-full size-40 object-cover"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm">
          {" "}
          {/* Smaller form size */}
          <label className="input input-error input-bordered flex items-center m-2 gap-4">
            Name
            <input
              type="text"
              className="grow"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
          </label>
          <label className="input input-error input-bordered flex items-center m-2 gap-4">
            Image Url
            <input
              type="text"
              className="grow"
              value={newImageUrl}
              onChange={(e) => {
                setNewImageUrl(e.target.value);
              }}
            />
          </label>
          <button className="btn btn-warning m-2">Update</button>
        </form>
      </div>
    </>
  );
}
