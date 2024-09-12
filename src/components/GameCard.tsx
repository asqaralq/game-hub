
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image,} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreCritics from "./ScoreCritics";
import getCroppedImage from "../services/image_url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
    <Card >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
        <ScoreCritics score = {game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
    </>
    
  );
};

export default GameCard;
