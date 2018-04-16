
import React from 'react';
import { connect } from  'react-redux';
import { Card, Icon, Button, Grid } from 'semantic-ui-react';

const RecomendationComponent = (props) => {

//

  const displayRecommendations = (prop) => {
    if ( prop ){

      return (
        <div>
            <Card
              image = {prop.attributes.url}
              header = {prop.attributes.name}
              description = {prop.attributes.description}
             />
        </div>)
    }
  }

  return(
    <div>
      <div>

            {displayRecommendations(props.recItem)}

      </div>
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
