import React from 'react';
import { Grid, Icon, Button, Segment, Image, Menu, Dropdown, Container } from "semantic-ui-react";
import { connect } from 'react-redux';
import { getFlashCard, flipCard, setFlashOption} from '../actions/MenuAction'
import { flashKeys } from '../FlashCards'



class FlashComponent extends React.Component {


     flashCardDisplay = (prop) => {

      return (
        prop ?
      ( <Segment  padded textAlign='center'  compact >
        <Image alt=""  size='medium' src={this.props.flashCard.url}/>
        <p style={{"backgroundColor":"yellow"}}><strong>{this.props.flashCard.back}</strong></p>
        </Segment> )
           :
      (<Segment  size="massive"padded="very" compact >
        {this.props.flashCard.front}
      </Segment>)
      )
    }
      createFlashOptions = (arr) => {
          let i = 0
          return arr.map( el => {
            ++i
            return {key:`${i}`, text:`${el}`, value:`${i}`}
          })
        }

      handleFlashChange = (event) => {

        let flashOpt = event.target.innerText
        this.props.setFlashOption(flashOpt)
      }

      // startFlashCard = (subjectSelected) =>{
      //
      //   subjectSelected
      //   ?
      //     (<Button  className="mini" onClick={()=>this.props.getFlashCard()}>
      //     Start FlashCards
      //     </Button>)
      //   :
      //     null
      // }


render(){

  const startFlashCard = this.props.subjectSelected ?

      (<Button  className="mini" onClick={()=>this.props.getFlashCard()}>
      Start FlashCards
      </Button>)
    :
      null


  let  options = this.createFlashOptions(flashKeys())

  return (

    <div>
      <br/>
      <Grid textAlign="center">

      <div>
      <span>
        Select Flash Card Subject:
        { ' '}
        <Dropdown  inline placeholder="Select Flash Topic" options={options} simple item onChange={this.handleFlashChange} />
      </span>
      </div>
      <br/>
      <Grid.Row>
        {startFlashCard}
      </Grid.Row>

      <br/>

      <div onClick={()=>this.props.flipCard()}>
          {this.flashCardDisplay(this.props.cardClicked)}
      </div>

        <Button icon position='right' className="mini" onClick={()=>this.props.getFlashCard()}>
          <Icon name='right arrow' />
        </Button>

      </Grid>
    </div>
  )
 }
}

const mapStateToProps = (state) => {

  return {
    flashCard: state.flashCard,
    cardClicked: state.cardClicked,
    subjectSelected: state.flashCardOption
  }

}


export default connect( mapStateToProps, { getFlashCard, flipCard, setFlashOption })(FlashComponent);
