import { Card, Button } from "antd";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster: "https://link-to-poster.jpg",
    showtimes: ["10:00", "13:00", "16:30", "20:00"]
  },
  {
    id: 2,
    title: "Deadpool 3",
    poster: "https://link-to-poster2.jpg",
    showtimes: ["11:00", "14:00", "18:00", "21:30"]
  }
];

const LichChieu = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {movies.map((movie) => (
        <Card key={movie.id} className="shadow-lg p-3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-60 object-cover"
          />
          <h3>{movie.title}</h3>
          <div className="showtimes">
            {movie.showtimes.map((time) => (
              <Button key={time}>{time}</Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LichChieu;
