import { User } from '../model/user.entity';
export declare class UsersService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
}
