
import { Dropdown } from 'semantic-ui-react';

export const options = [
{key:"cat",  component:Dropdown.Header, icon: 'food', content: 'Category'},
{ key: 'appetizer', text: 'Appetizer', value: 'appetizer', searchinput:"category", },
{ key: 'entree', text: 'Entree', value: 'entree', searchinput:"category" },
{ key: 'dessert', text: 'Dessert', value:'dessert',searchinput:"category"  },
{ key: 'side_order', text: 'Side Order', value:'side_order',searchinput:"category"  },
{ key: 'add_on', text: 'Add On', value:'add_on',searchinput:"category"  },

{key:"pro",  component:Dropdown.Header, icon: 'food', content: 'Main Protien'},

{ key: 'poultry', text: 'Poultry', value: 'poultry', searchinput:"protien" },
{ key: 'beef', text: 'Beef', value:'beef', searchinput:"protien"  },
{ key: 'vegetarian', text: 'Vegetarian', value: 'vegetarian', searchinput:"protien" },
{ key: 'pork', text: 'Pork', value: 'pork', searchinput:"protien" },
{ key: 'seafood', text: 'Seafood', value:'seafood', searchinput:"protien"  },
{ key: 'lamb', text: 'Lamb', value: 'lamb', searchinput:"protien" },

{key:"fla",  component:Dropdown.Header, icon: 'food', content: 'Flavor Profile'},

{ key: 'sweet', text: 'Sweet', value:'sweet', searchinput:"flavor"  },
{ key: 'spicy', text: 'Spicy', value: 'spicy', searchinput:"flavor" },
{ key: 'savory', text: 'Savory', value: 'savory', searchinput:"flavor" },
{ key: 'mild', text: 'Mild', value: 'mild', searchinput:"flavor" },
{ key: 'tart', text: 'Tart', value: 'tart', searchinput:"flavor" },
{ key: 'umani', text: 'Umani', value:'umani', searchinput:"flavor"  },

{key:"all",  component:Dropdown.Header, icon: 'asterisk', content: 'Allergen'},

{ key: 'egg', text: 'Egg Allergy', value:'egg', searchinput:"allergens"  },
{ key: 'fish', text: 'Fish Allergy', value:'fish', searchinput:"allergens"  },
{ key: 'diary', text: 'Diary Allergy', value:'diary', searchinput:"allergens"  },
{ key: 'shellfish', text: 'Shellfish Allergy', value:'shellfish', searchinput:"allergens"  },
{ key: 'gluten', text: 'Gluten Allergy', value:'gluten', searchinput:"allergens"  },
{ key: 'soy', text: 'Soy Allergen', value:'soy', searchinput:"allergens"  },
{ key: 'nut', text: 'Nut Allergy', value: 'nut', searchinput:"allergens" }

]
