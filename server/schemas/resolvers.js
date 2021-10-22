const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },
  },

  Mutation: {
    addItinerary: async(parent, { stops, tripDates, dateCreated }) => {
      return await Itinerary.create({ stops, tripDates, dateCreated });
    },

    updateItinerary: async(parent, { userId, itinerary }) => {
      return User.findOneAndUpdate(
        {_id: userId},
        {
          $addToSet: { itinerary: itinerary },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeItinerary: async(parent, { userId, itinerary }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { itinerary: itinerary }},
        { new: true }
      )
    }, 


  }

};


module.exports = resolvers;
