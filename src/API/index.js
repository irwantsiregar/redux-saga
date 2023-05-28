export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((response) =>
    response.json()
  );
};
export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((response) =>
    response.json()
  );
};
export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((response) =>
    response.json()
  );
};
export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((response) =>
    response.json()
  );
};
