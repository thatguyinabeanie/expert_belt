import React from 'react';

import { Grid, Card, Text } from "@nextui-org/react";

import { User, UsersService } from '../../API';

const PlayerInfo = ({ name }: {name?: string}) => {
  return (
    <Grid xs={3}>
      <Card>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {name}
          </Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

const PlayersPage = () => {
  const [players, setPlayers] = React.useState<User[] | null>(null);

  React.useEffect(() => {
    if (players === null) {
      UsersService.usersList().then((res) => setPlayers(res?.results ?? []));
    }

  }, [players]);

  console.log(players);
  return (
    <Grid.Container gap={2} justify="center">
      {
        players?.map(player => (<PlayerInfo key={player.username}  name={player.username} />))
      }
    </Grid.Container>
  )
};

export default PlayersPage;
