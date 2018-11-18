
import React from 'react';
import { connect } from  'react-redux';
import { Card, Icon, Button, Grid , Segment, Header, Image } from 'semantic-ui-react';

const RecomendationComponent = (props) => {

//

  const displayRecommendations = (prop) => {
    if ( prop ){

      return (
        <div>
          <Card >
            <Image src={prop.attributes.url} size="mediumCard"/>
            <Header>{prop.attributes.name}</Header>
            
            {prop.attributes.description}
          </Card>

        </div>)
    }
  }

  return(
    <div>

        {displayRecommendations(props.recItem)}

    </div>
  )
}




// const mapStateToProps = (state) => {
//
//   return {
//
//     filteredItems:state.filteredItems
//   }
// }


export default  RecomendationComponent
