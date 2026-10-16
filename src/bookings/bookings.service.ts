import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async getBookings() {
    return this.prisma.booking.findMany({
      include: {
        user: true,
        route: true,
      },
    });
  }

  async createBooking(data: {
    userId: number;
    routeId: number;
    seatNumber: string;
  }) {
    return this.prisma.booking.create({
      data,
    });
  }

  async getBookingById(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }

  async deleteBooking(id: number) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
  async updateBooking(
  id: number,
  data: {
    seatNumber?: string;
    status?: string;
  },
) {
  return this.prisma.booking.update({
    where: { id },
    data,
  });
}
}