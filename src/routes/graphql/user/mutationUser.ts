import { User } from '@prisma/client';
import { Context } from '../types/context.js';
import { ChangeUserInput, CreateUserInput } from './inputUser.js';
import { UserType } from './typeUser.js';
import { UUIDType } from '../types/uuid.js';

export const UserMutations = {
  createUser: {
    type: UserType,
    args: { data: { type: CreateUserInput } },
    resolve: async (__: unknown, { data }: { data: User }, { prisma }: Context) =>
      await prisma.user.create({ data }),
  },
  changeUser: {
    type: UserType,
    args: { id: { type: UUIDType }, data: { type: ChangeUserInput } },
    resolve: async (
      __: unknown,
      { id, data }: { id: string; data: User },
      { prisma }: Context,
    ) => await prisma.user.update({ where: { id }, data }),
  },
};
