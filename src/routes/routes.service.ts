import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) {}

  async getRoutes() {
    return this.prisma.route.findMany();
  }

  async createRoute(data: {
  origin: string;
  destination: string;
  fare: number;
  status: string;
  operator: string;
  vehicle: string;
  departure: string;
  arrival: string;
  seats: number;
}) {
  return this.prisma.route.create({
    data,
  });
}
  async getRouteById(id: number) {
  return this.prisma.route.findUnique({
    where: { id },
  });
}

async updateRoute(
  id: number,
  data: {
    origin?: string;
    destination?: string;
    fare?: number;
  },
) {
  return this.prisma.route.update({
    where: { id },
    data,
  });
}

async deleteRoute(id: number) {
  return this.prisma.route.delete({
    where: { id },
  });
}
}