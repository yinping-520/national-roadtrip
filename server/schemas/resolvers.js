const { AuthenticationError } = require('apollo-server-express');
const { User, Itinerary, Park } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    parks: async () => {
      return Park.find()
    },

    park: async (parent, { parkId }) => {
      return Park.findOne({ _id: parkId })
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

    addItinerary: async (parent, { ids }, context) => {
      console.log(ids, context.user);
      // if (context.user) {
        return User.findOneAndUpdate(
          { _id: '617836192ea25a280a495b63' },
          {
            $addToSet: { itinerary: ids },
          },
          {
            new: true,
            runValidators: true,
          }
        )
      // };
    },

    deleteItinerary: async (parent, { itinerary }, context) => {
      return User.findOneAndUpdate(
        { _id: '617836192ea25a280a495b63' },
        { $pull: { itinerary: itinerary } },
        { new: true }
      )
    },
  }

}
module.exports = resolvers;
