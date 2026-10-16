import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: {
    fullname: string;
    email: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(
      data.password,
      10,
    );

    return this.prisma.user.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        password: hashedPassword,
      },
    });
  }

  async login(
    email: string,
    password: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token:
        await this.jwtService.signAsync(payload),
    };
  }
}
