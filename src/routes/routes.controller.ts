import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  getRoutes() {
    return this.routesService.getRoutes();
  }
  @Get(':id')
getRouteById(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.routesService.getRouteById(id);
}

@Put(':id')
updateRoute(
  @Param('id', ParseIntPipe) id: number,
  @Body()
  body: {
    origin?: string;
    destination?: string;
    fare?: number;
  },
) {
  return this.routesService.updateRoute(id, body);
}

@Delete(':id')
deleteRoute(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.routesService.deleteRoute(id);
}

  @Post()
  createRoute(
   @Body()
body: {
  origin: string;
  destination: string;
  fare: number;
  status: string;
  operator: string;
  vehicle: string;
  departure: string;
  arrival: string;
  seats: number;
},
  ) {
    return this.routesService.createRoute(body);
  }
}