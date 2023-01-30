import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  //mudar o null para undefined
  public async findByName(name: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        name,
      },
    });
    return user;
  }

  public async findByID(id: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}

export default UsersRepository;
