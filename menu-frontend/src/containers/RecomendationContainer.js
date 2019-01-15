import React from 'react';
import { connect } from 'react-redux';
import { options } from '../SeedInfo'
import { Dropdown, Grid } from 'semantic-ui-react';
import { addRecomendation, removeRecomendation } from '../actions/MenuAction';
import RecomendationComponent from '../components/RecomendationComponent';



class RecomendationContainer extends React.Component {

    state = {
      filterOptions:{},

    }

  handleOnChange = (event, data)=> {
    let clickedItemsArr = data.value
    let dataItemsArr = data.options
    let lastClickedItem = clickedItemsArr[clickedItemsArr.length-1]
    let keys  = Object.keys(this.state.filterOptions)


    if (event.target.className === 'delete icon'){
      let newFilterOptions = {}

      keys.forEach( key => {
         if (clickedItemsArr.includes(key)){
           newFilterOptions[key] = this.state.filterOptions[key]
         }
      })
      this.setState({
        filterOptions: newFilterOptions
      })

      let removables = Object.entries(newFilterOptions)
      // console.log(removables);
      this.props.removeRecomendation(removables)
      return
    }

      if (lastClickedItem) {
       let sortItemObj = dataItemsArr.filter( item => {
         return item.value === lastClickedItem
       })
       let sortObj = {[sortItemObj[0].value]:{
           matchValue:sortItemObj[0].value,
           sortValue:sortItemObj[0].searchinput
       }}
       this.setState({
         ...this.state,
           filterOptions:{...this.state.filterOptions,...sortObj}
       })

       let recommendOptions = Object.entries(sortObj)
       this.props.addRecomendation(recommendOptions)
     }

     return
  }

    addRecommend = () => {
      let recommendOptions = Object.entries(this.state.filterOptions)
      // let originalMenu = this.props.originalMenu
      this.props.addRecomendation(recommendOptions)
      // let reccsArr =[]
      //   for (let i = 0; i < recoArr.length; i++){
      //     let matchValue = recoArr[i][1].matchValue
      //     let filterValue = recoArr[i][1].sortValue
      //     reccsArr.push(<RecomendationComponent items={recoArr[i]}/>)
      //   }
      //
      //   return reccsArr

    }


  createRecommendation = (arr) => {

    return  arr.map( item => {

        return  (
              <div>

                <Grid.Column>
                  <RecomendationComponent  recItem={item}/>
                 </Grid.Column>
                 <br/>
              </div>
            )
      })
  }





  render() {
    let recommendArr = this.props.filteredItems[0]

    let optionArr

    if (recommendArr){
      optionArr = this.createRecommendation(recommendArr)
    }

    return(
      <div >

        <div>
         Enter in guest request to find menu items that meets their needs
        </div>
        <br/>
              <Dropdown placeholder='Search by Guest Recommendation' fluid multiple search selection options={options} onChange={this.handleOnChange}/>
        <br/>
          <br/>

        <div>
          <Grid  centered columns={4} >

                {optionArr}

          </Grid>
        </div>

      </div>
    )
  }

}


const mapStateToProps = (state) => {

  return {
    originalMenu:state.menu,
    filteredItems:state.filteredItems
  }
}


export default connect(mapStateToProps,{ addRecomendation, removeRecomendation })(RecomendationContainer);
