
let describe = "Describe a"

export const flashKeys = () => {
  let keys = Object.keys(flashCardInfo)
  return keys
}

 export const flashCardInfo = {
   food: {
      1:{
       front: describe + " Rare steak",
       back:"Cool red center",
       url: "https://www.certifiedangusbeef.com/kitchen/images/doneness/Rare-new.jpg"
       },

      2:{
       front:describe + " Medium-Rare steak",
       back:"Warm red center",
       url: "https://www.certifiedangusbeef.com/kitchen/images/doneness/Medium-Rare-new.jpg"
       },

     3:{
      front:describe + " Medium steak",
      back:"Warm pink center",
      url:"https://www.certifiedangusbeef.com/kitchen/images/doneness/Medium-new.jpg"
      },

     4:{
      front:describe + " Medium-Well steak",
      back:"Slightly pink center",
      url: "https://www.certifiedangusbeef.com/kitchen/images/doneness/Medium-Well-new.jpg"
      },

     5:{
      front:describe + " Medium-Well steak",
      back:"No pink",
      url:"https://www.certifiedangusbeef.com/kitchen/images/doneness/Well-Done-new.jpg"
      }
    },
    beverage:{
      1:{
        front: "Classic Margarita",
        back: "Tequila, Cointreau, Sour Mix",
        url:"https://tikitolteca.com/wp-content/uploads/2015/09/key-lime-best-margaritas-new-orleans-300x200.jpg"
      },
      2:{
        front: "Manhattan",
        back:"Whiskey, Sweet Vermouth, Bitters",
        url:"https://s-media-cache-ak0.pinimg.com/originals/42/b8/73/42b87355947551c85deed6819878c0c8.jpg"
      },
      3:{
        front:"Long Island Iced Tea",
        back:"Vodka, Gin, Rum, Cointreau, Sour Mix, Coke",
        url:"https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/300x200/arnold-palmer-lemonade-iced-tea_44551.jpg"
      },
      4:{
        front:"Moscow Mule",
        back:"Vodka, Ginger Beer, Lime Juice",
        url:"https://cdn.liquor.com/wp-content/uploads/2017/03/07152853/moscow-mule-720x720-recipe.jpg"
      },
      5:{
        front:"Cosmopolitian",
        back:"Vodka, Cointreau, Cranberry Juice, Lime Juice",
        url:"http://1.bp.blogspot.com/_2-kAuwo2OdU/SKUF1kD7jSI/AAAAAAAAAyk/XhhcE3n90yI/s400/cosmopolitan-drink.jpg"
      }

    },
    "food safety":{
      1:{
        front:"What is the FDA Food Code's TEMPERATURE DANGER ZONE?",
        back: "41°F - 135°F",
        url:"http://www.ccbh.net/wp-content/uploads/2016/02/danger.jpg"
      },
      2:{
        front:"Whats the minimum cooked temperature for Poultry?",
        back:"165°F",
        url:"http://clipartstation.com/wp-content/uploads/2017/11/cooked-chicken-clipart-8-300x200.jpg"
      },
      3:{
        front:"Under cooked beef can be the cause of which food poision?",
        back:"Escherichia Coli ( E. Coli)",
        url:"https://media.salon.com/2007/05/the_feds_are_still_looking_for_the_e_coli-300x200.jpg"
      },
      4:{
        front:"What color cutting board should be used for seafood?",
        back: "Blue",
        url:"https://www.chowstatic.com/uploads/8/4/4/833448_15005_schneidbrett_fisch_72_dpi_200px.jpg"
      },
      5:{
        front:"What is the first step to stopping the spread of bacteria?",
        back:"Regular Hand Washing",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnLW58sw4CYhFfRxMyy7JyTizlmqgngJ68zitmasSBasvwq5qzw"
      }
    }
}


// front:"Recommend a Spicy Entree"
// back: state. filter(item=>
// item.flavor === spicy)
