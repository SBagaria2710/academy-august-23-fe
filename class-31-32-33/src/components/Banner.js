function Banner() {
  return (
    <div className="h-[20vh] md:h-[60vh] bg-center flex items-end bg-cover" style={{
      backgroundImage: "url(https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9c2d5089c2932f6e704e639cd334975f2e4ed028e5d5ef947cfbefc21d614f56._RI_TTW_SX1920_FMwebp_.jpg)"
    }}>
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full">Aspirants</div>
    </div>
  );
}

export default Banner;
