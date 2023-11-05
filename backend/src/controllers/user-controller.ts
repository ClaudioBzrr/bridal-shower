import { Request, Response } from 'express';
import {
  ICreateAdminPayload,
  ICreateUserPayload,
  ILoginPayload,
} from '../entities/User';
import { CreateUserUseCase } from '../use-cases/create-user-use-case';
import { PrismaUserRepository } from '../repositories/prisma/prisma-user-repository';
import { LoginUseCase } from '../use-cases/login-use-case';
import { ConfirmAmountPresenceUseCase } from '../use-cases/confirm-amount-presence-use-case';
import { IConfirmPeopeAmountPresencePayload } from '../entities/Item';
import { CreateAdminUseCase } from '../use-cases/create-admin-use-case';

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
  async confirmPresence(request: Request, response: Response) {
    try {
      const confirmAmountPresenceUseCase = new ConfirmAmountPresenceUseCase(
        userRepository,
      );
      const payload: IConfirmPeopeAmountPresencePayload = request.body;
      await confirmAmountPresenceUseCase.execute(payload);
      return response.json('Quantidade atualizada com');
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
  async createAdmin(request: Request, response: Response) {
    try {
      const createAdminUseCase = new CreateAdminUseCase(userRepository);
      const payload: ICreateAdminPayload = request.body;
      const admin = await createAdminUseCase.exec(payload);
      return response.json(admin);
    } catch (err) {
      return response.status(404).json(String(err));
    }
  }
}
