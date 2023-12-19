import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { message } from "antd";
import { GetMovieById } from "../../apicalls/movies";
import moment from "moment";

function TheatresForMovie() {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [date, setDate] = useState(null);
  const queryDate = new URLSearchParams(location.search).get("date");

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetMovieById(params.id);
      if (response.success) {
        setMovie(response.data);
      } else {
        message.error("Movie Not Found");
        navigate("/");
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error("Movie Not Found");
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movie);

  return (
    <div>
      {movie?._id && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl uppercase">
                {movie.title} ({movie.language})
              </h1>
              <h1 className="text-md">
                Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
              </h1>
              <h1 className="text-md">Genre : {movie.genre}</h1>
            </div>

            <div className="mr-3">
              <h1 className="text-md ">Select Date</h1>
              <input
                type="date"
                min={moment().format("YYYY-MM-DD")}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  navigate(`/movie/${params.id}?date=${e.target.value}`);
                }}
              />
            </div>
          </div>
          <hr />
          <div>
            <h1>Theatre Listings!!!</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default TheatresForMovie;
