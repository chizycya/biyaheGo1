import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe,} from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly bookingsService: BookingsService,
  ) {}

  @Get()
  getBookings() {
    return this.bookingsService.getBookings();
  }

  @Get(':id')
  getBookingById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookingsService.getBookingById(id);
  }

  @Post()
  createBooking(
    @Body()
    body: {
      userId: number;
      routeId: number;
      seatNumber: string;
    },
  ) {
    return this.bookingsService.createBooking(body);
  }

  @Put(':id')
updateBooking(
  @Param('id', ParseIntPipe) id: number,
  @Body()
  body: {
    seatNumber?: string;
    status?: string;
  },
) {
  return this.bookingsService.updateBooking(id, body);
}

  @Delete(':id')
  deleteBooking(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookingsService.deleteBooking(id);
  }
}