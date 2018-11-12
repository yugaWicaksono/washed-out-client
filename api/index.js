import _ from "lodash";
import users from "./users";

const contains = ({ name }, query) => {
  const { first, last } = name;
  if (first.includes(query) || last.includes(query)) {
    return true;
  }

  return false;
};

export const getUsers = (limit = 30, query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(users, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(users, user => {
        return contains(user, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default getUsers;