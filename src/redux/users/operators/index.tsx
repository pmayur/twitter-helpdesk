import { LoginDTO } from '../../../dtos/user';
import { createUser } from './createUser';
import { login } from './login';
import { logout } from './logout';
export interface IUserOperators {
    login(dto: LoginDTO): void;
    createUser(dto: LoginDTO): void;
    logout(): void;
}

export { login, logout, createUser };
