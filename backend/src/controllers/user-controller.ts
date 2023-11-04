import { Request, Response } from 'express';
import { ICreateUserPayload, ILoginPayload } from '../entities/User';
import { CreateUserUseCase } from '../use-cases/create-user-use-case';
import { PrismaUserRepository } from '../repositories/prisma/prisma-user-repository';
import { LoginUseCase } from '../use-cases/login-use-case';

const userRepository = new PrismaUserRepository();

export class UserController {
  async create(request: Request, response: Response) {
    try {
      const createUserUseCase = new CreateUserUseCase(userRepository);
      const payload: ICreateUserPayload = request.body;
      const user = await createUserUseCase.exec(payload);
      return response.json(user);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
  async login(request: Request, response: Response) {
    try {
      const loginUseCase = new LoginUseCase(userRepository);
      const payload: ILoginPayload = request.body;
      const auth = await loginUseCase.exec(payload);
      return response.json(auth);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
}
