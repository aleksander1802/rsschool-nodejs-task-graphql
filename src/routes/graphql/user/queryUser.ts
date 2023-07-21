import { GraphQLList, GraphQLNonNull } from 'graphql';
import { UserType } from './typeUser.js';
import { Context } from '../types/common.js';
import { User } from '../types/user.js';
import { UUIDType } from '../types/uuid.js';

export const UserQueries = {
  user: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(UUIDType) },
    },
    resolve: async ({ prisma }: Context, args: User) => {
      const user = await prisma.user.findUnique({ where: { id: args.id } });
      return user;
    },
  },

  users: {
    type: new GraphQLList(UserType),
    resolve: async ({ prisma }: Context) => {
      const users = await prisma.user.findMany();
      return users;
    },
  },
};
