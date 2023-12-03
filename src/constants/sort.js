const sortVariants = {
  price: {
    fromHighest: "Highest to Lowest Price",
    fromLowest: "Lowest to Highest Price",
  },

  rating: {
    fromHighest: "Highest Rating",
    fromLowest: "Lowest Rating",
  },

  title: {
    fromAZ: "From A to Z",
    fromZA: "From Z to A",
  },
};

const sortProductTypes = {
  price: "Price",
  rating: "Rating",
  title: "Title",
};

const sortOptions = [
  "Highest to Lowest Price",
  "Lowest to Highest Price",
  "Lowest Rating",
  "Highest Rating",
  "From A to Z",
  "From Z to A",
];

const sortTypeMap = {
  [sortVariants.price.fromHighest]: sortProductTypes.price,
  [sortVariants.price.fromLowest]: sortProductTypes.price,
  [sortVariants.rating.fromHighest]: sortProductTypes.rating,
  [sortVariants.rating.fromLowest]: sortProductTypes.rating,
  [sortVariants.title.fromAZ]: sortProductTypes.title,
  [sortVariants.title.fromZA]: sortProductTypes.title,
};

export { sortVariants, sortTypeMap, sortProductTypes, sortOptions };
