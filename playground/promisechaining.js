require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5fbc0e0476a3e8093eb6028b", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count
};


updateAgeAndCount('5fbc0ac347d2be08895caf3c', 2). then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})