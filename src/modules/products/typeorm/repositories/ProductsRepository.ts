import { EntityRepository, Repository } from "typeorm";
import Produtc from "../entities/Product";

@EntityRepository(Produtc)
export class ProductRepository extends Repository<Produtc> {
  //mudar o null para undefined
  public async findByName(name: string): Promise<Produtc | null> {
    const product = this.findOne({ where: { name } });
    return product;
  }
}
