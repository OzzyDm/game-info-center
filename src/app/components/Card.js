import Image from "next/image";
import Link from "next/link";

function Card(props) {
  console.log(props);
  return (
    <div>
      <Image
        src={props.game.background_image}
        width={500}
        height={300}
        alt="image is not available"
      ></Image>
      <h1>{props.game.name}</h1>
      <p>
        {props.game.platforms.map((plat) => (
          <p>{plat.platform.name}</p>
        ))}
      </p>
    </div>
  );
}

export default Card;
