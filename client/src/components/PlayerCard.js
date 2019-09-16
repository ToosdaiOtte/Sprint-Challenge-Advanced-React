import React from 'react';
import { Card } from 'semantic-ui-react';

function PlayerCard(props){

    return(
      <div className="followers">
          <h2>Players: </h2>
        {props.players.map(player => {
            return(
                <Card key={player.id} style={{margin: '0 auto'}} className="card">
                    <Card.Content>                        
                        <Card.Header>{player.name}</Card.Header>
                        <Card.Meta>{player.country}</Card.Meta>
                        Searches: {player.searches}
                    </Card.Content>
                </Card>
            )
        })} 
        </div>
    )
}


export default PlayerCard;