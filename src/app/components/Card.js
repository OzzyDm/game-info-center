import Image from "next/image";

function Card(props) {
  const platforms = props.game.platforms.map((plat) => (
    <p className="text-sm">{plat.platform.name}</p>
  ));

  const genres = props.game.genres.map((gen) => (
    <p className="text-sm">{gen.name}</p>
  ));

  return (
    <div className="border-stone-500 m-5 p-4">
      <img
        className="object-scale-down"
        src={props.game.background_image}
        width={300}
        height={400}
        alt="image is not available"
      ></img>
      <h1 className="font-bold">{props.game.name}</h1>
      <p>Platforms:{platforms}</p>
      <p>Genre(s): {genres}</p>
      <p>Metacitric: {props.game.metacritic}</p>
      <a href="#">Learn More</a>
    </div>
  );
}

export default Card;
