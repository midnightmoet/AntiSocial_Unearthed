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
  try {
    const { id } = req.params; // get id from request parameters
    const user = await User.findById(id); // find user by id

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    ); // find all friends

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        };
      }
    ); // format friends properly
    res.status(200).json(formattedFriends); // return friends as json data
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // get id from request parameters
    const { firstName, lastName, occupation, location, picturePath } = req.body; // get updated data from request body

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, occupation, location, picturePath },
      { new: true }
    ); // update user in the database
    res.status(200).json(updatedUser); // return updated user
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params; // get id from request 
    const user = await User.findById(id); // find user by id
    const friend = await User.findById(friendId); // find friend by id

    if(user.friends.includes(friendId)){
      user.friends = user.friends.filter(id => id !== friendId); // remove friend
      friend.friends = friend.friends.filter(id => id !== id); // remove user
    } else {
      user.friends.push(friendId); // add friend
      friend.friends.push(id); // add user
    }

    await user.save(); // save user
    await friend.save(); // save friend
    

    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id))
      ); // find all friends
  
      const formattedFriends = friends.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return {
            _id,
            firstName,
            lastName,
            occupation,
            location,
            picturePath,
          };
        }
      ); // format friends properly
        res.status(200).json(formattedFriends); // return friends as json data

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
