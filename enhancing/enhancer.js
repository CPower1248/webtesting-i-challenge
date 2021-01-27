module.exports = {
  success,
  fail,
  repair,
  get,
};

// {
//   name: "item_name",
//   enhancement: 0-20,
//   durability: 0-100
// }

function success(item) {
  item.enhancement < 20 ? item.enhancement += 1 : ""
  return { ...item };
}

function fail(item) {
  item.enhancement < 15 ? item.durability -= 5 : item.durability -= 10
  item.enhancement > 15 ? item.enhancement -= 1 : ""
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
