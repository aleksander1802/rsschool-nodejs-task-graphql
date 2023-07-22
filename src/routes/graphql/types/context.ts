import { PrismaClient, User } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
  dataUsers?: UserSub[];
}

export interface UserSubType {
  subscriberId: string;
  authorId: string;
}

export interface UserSub extends User {
  userSubscribedTo?: UserSubType[];
  subscribedToUser?: UserSubType[];
}
