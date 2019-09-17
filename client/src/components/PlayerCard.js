import React from 'react';
import { Card } from 'semantic-ui-react';

function PlayerCard(props){

    return(
      <div className="players">
        {props.players.map(player => {
            return(
                <Card data-testId="cardContainer" key={player.id} style={{margin: '0 auto'}} className="card">
                    <Card.Content>                        
                        <Card.Header data-testId="player-name">{player.name}</Card.Header>
                        <Card.Meta test-Id="player-country">{player.country}</Card.Meta>
                        Searches: {player.searches}
                    </Card.Content>
                </Card>
            )
        })} 
        </div>
    )
}


export default PlayerCard;