import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
  return this.prisma.user.findUnique({
    where: { id },
  });
}
  async createUser(data: {
    fullname: string;
    email: string;
    password: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }
  async updateUser(
  id: number,
  data: {
    fullname?: string;
    email?: string;
    password?: string;
  },
) {
  return this.prisma.user.update({
    where: { id },
    data,
  });
}
async deleteUser(id: number) {
  return this.prisma.user.delete({
    where: { id },
  });
}
}