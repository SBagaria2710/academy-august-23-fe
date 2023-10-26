function Header() {
  return (
    <div className="flex border space-x-8 justify-between items-center py-2 px-2">
      <div className="flex space-x-4">
        <div>Movies</div>
        <div>Watchlist</div>
      </div>
      <input placeholder="Search" />
    </div>
  );
}

export default Header;
