const chocolates = [
  {
    name: "Milk Chocolate",
    brand: "Hershey's",
    flavor: "Sweet",
    weight: "100g",
    price: 2.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_UO75t1qp8ZmIri1KO_0OoHnWp6Y0MiB2g&usqp=CAU",
    interestingFact:
      "Milk chocolate is one of the most popular types of chocolate in the world.",
    ingredients: [
      "Milk",
      "Sugar",
      "Cocoa Butter",
      "Chocolate Liquor",
      "Lecithin",
      "Vanilla Extract",
    ],
  },
  {
    name: "Dark Chocolate",
    brand: "Lindt",
    flavor: "Bittersweet",
    weight: "85g",
    price: 3.49,
    imageUrl:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/08/dark-chocolate-1200x628-facebook-1200x628.jpg",
    interestingFact:
      "Dark chocolate is known for its rich cocoa flavor and lower sugar content.",
    ingredients: [
      "Chocolate",
      "Cocoa Butter",
      "Sugar",
      "Soy Lecithin",
      "Vanilla",
    ],
  },
  {
    name: "White Chocolate",
    brand: "Ghirardelli",
    flavor: "Creamy",
    weight: "120g",
    price: 4.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dG_6JV84fzJB2yqmw3a_w2rDv8y2abPVww&usqp=CAU",
    interestingFact:
      "White chocolate doesn't contain cocoa solids, which gives it a creamy, ivory color.",
    ingredients: ["Sugar", "Cocoa Butter", "Milk", "Lecithin", "Vanilla"],
  },
  {
    name: "Caramel-filled Chocolate",
    brand: "Cadbury",
    flavor: "Sweet and Gooey",
    weight: "150g",
    price: 5.79,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dG_6JV84fzJB2yqmw3a_w2rDv8y2abPVww&usqp=CAU",
    interestingFact:
      "Caramel-filled chocolates are a delightful combination of sweet caramel and chocolate.",
    ingredients: [
      "Sugar",
      "Glucose Syrup",
      "Cocoa Mass",
      "Palm Fat",
      "Cocoa Butter",
      "Skim Milk Powder",
    ],
  },
  {
    name: "Hazelnut Chocolate",
    brand: "Ferrero Rocher",
    flavor: "Nutty",
    weight: "200g",
    price: 6.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dG_6JV84fzJB2yqmw3a_w2rDv8y2abPVww&usqp=CAU",
    interestingFact:
      "Ferrero Rocher chocolates are famous for their hazelnut filling and gold foil wrapping.",
    ingredients: [
      "Milk Chocolate",
      "Hazelnuts",
      "Sugar",
      "Palm Oil",
      "Wheat Flour",
      "Cocoa Powder",
    ],
  },
  {
    name: "Almond Chocolate",
    brand: "Ghirardelli",
    flavor: "Nutty",
    weight: "150g",
    price: 4.49,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Almond chocolate combines the richness of chocolate with the crunch of almonds.",
    ingredients: [
      "Sugar",
      "Cocoa Butter",
      "Almonds",
      "Milk",
      "Lecithin",
      "Vanilla",
    ],
  },
  {
    name: "Raspberry Dark Chocolate",
    brand: "Godiva",
    flavor: "Tangy and Bittersweet",
    weight: "75g",
    price: 5.99,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Raspberry dark chocolate offers a delightful blend of tartness and bittersweet cocoa.",
    ingredients: [
      "Chocolate",
      "Sugar",
      "Cocoa Butter",
      "Raspberry",
      "Soy Lecithin",
      "Vanilla",
    ],
  },
  {
    name: "Mint Chocolate",
    brand: "Nestle",
    flavor: "Cool and Refreshing",
    weight: "100g",
    price: 3.29,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Mint chocolate provides a refreshing taste with a hint of minty coolness.",
    ingredients: [
      "Sugar",
      "Cocoa Butter",
      "Milk",
      "Mint Flavoring",
      "Vanilla",
      "Lecithin",
    ],
  },
  {
    name: "Chili Dark Chocolate",
    brand: "Lindt",
    flavor: "Spicy and Bittersweet",
    weight: "90g",
    price: 4.79,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Chili dark chocolate combines the heat of chili with the richness of dark cocoa.",
    ingredients: [
      "Chocolate",
      "Cocoa Butter",
      "Sugar",
      "Chili Pepper",
      "Soy Lecithin",
      "Vanilla",
    ],
  },
  {
    name: "Orange Chocolate",
    brand: "Toblerone",
    flavor: "Citrusy and Sweet",
    weight: "110g",
    price: 3.99,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Orange chocolate offers a zesty citrus flavor combined with the sweetness of chocolate.",
    ingredients: [
      "Sugar",
      "Cocoa Butter",
      "Cocoa Mass",
      "Orange Oil",
      "Lecithin",
    ],
  },
  {
    name: "Coconut Chocolate",
    brand: "Bounty",
    flavor: "Tropical and Sweet",
    weight: "80g",
    price: 2.49,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Coconut chocolate features a tropical twist with the taste of coconut and chocolate.",
    ingredients: [
      "Sugar",
      "Desiccated Coconut",
      "Glucose Syrup",
      "Cocoa Mass",
      "Cocoa Butter",
    ],
  },
  {
    name: "Peanut Butter Chocolate",
    brand: "Reese's",
    flavor: "Nutty and Salty",
    weight: "120g",
    price: 4.29,
    imageUrl:
      "https://beamingbaker.com/wp-content/uploads/2018/03/IGT1-3-Ingredient-Chocolate-Almond-Bark-Recipe-Vegan-Gluten-Free-Paleo-Dairy-Free-1.jpg",
    interestingFact:
      "Peanut butter chocolate combines the creaminess of peanut butter with the sweetness of chocolate.",
    ingredients: [
      "Milk Chocolate",
      "Peanuts",
      "Sugar",
      "Dextrose",
      "Salt",
      "TBHQ and Citric Acid",
    ],
  },
];
export default chocolates;
