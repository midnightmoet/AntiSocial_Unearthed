import User from "../models/user";

// READ
export const getUsers = async (req, res) => {
  try {
    const { id } = req.params; // get id from request parameters
    const user = await User.findById(id); // find user by id
    res.status(200).json(user); // return user as json data
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  const { id } = req.params; // get id from request parameters
  const user = await User.findById(id); // find user by id

  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  ); // find all friends

  const formattedFriends = friends.map(
    ({_id, firstName, lastName, occupation, location, picturePath}) => {
        return {
            _id,
            firstName,
            lastName,
            occupation,
            location,
            picturePath
        }
    }
  ) // format friends properly


};

