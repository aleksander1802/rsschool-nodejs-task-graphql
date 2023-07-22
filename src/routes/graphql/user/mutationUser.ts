import { User } from '@prisma/client';
import { Context } from '../types/context.js';
import { ChangeUserInput, CreateUserInput } from './inputUser.js';
import { UserType } from './typeUser.js';
import { UUIDType } from '../types/uuid.js';
import { GraphQLObjectType } from 'graphql';

export const UserMutations = {
  createUser: {
    type: UserType as GraphQLObjectType,
    args: { data: { type: CreateUserInput } },
    resolve: async (__: unknown, { data }: { data: User }, { prisma }: Context) =>
      await prisma.user.create({ data }),
  },
  changeUser: {
    type: UserType as GraphQLObjectType,
    args: { id: { type: UUIDType }, data: { type: ChangeUserInput } },
    resolve: async (
      __: unknown,
      { id, data }: { id: string; data: User },
      { prisma }: Context,
    ) => await prisma.user.update({ where: { id }, data }),
  },
};
