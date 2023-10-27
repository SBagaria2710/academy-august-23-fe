function Movies() {
  return (
    <div>
      <div className="text-2xl my-8 font-bold text-center underline">
        Trending Movies
      </div>
      <div className="mx-[20px] mb-[12px] flex space-x-8">
        <div
          className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300"
          style={{
            backgroundImage:
              "url(https://m.media-amazon.com/images/S/pv-target-images/703c93b8ce2fc77bd7bbed52364161a25f1dc078efab6f5c9fbb2b82d042f89e._UR1920,1080_AGaverage_SX1080_FMwebp_.jpg)",
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300"
          style={{
            backgroundImage:
              "url(https://m.media-amazon.com/images/S/pv-target-images/703c93b8ce2fc77bd7bbed52364161a25f1dc078efab6f5c9fbb2b82d042f89e._UR1920,1080_AGaverage_SX1080_FMwebp_.jpg)",
          }}
        ></div>
        <div
          className="w-[160px] h-[30vh] bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300"
          style={{
            backgroundImage:
              "url(https://m.media-amazon.com/images/S/pv-target-images/703c93b8ce2fc77bd7bbed52364161a25f1dc078efab6f5c9fbb2b82d042f89e._UR1920,1080_AGaverage_SX1080_FMwebp_.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Movies;
