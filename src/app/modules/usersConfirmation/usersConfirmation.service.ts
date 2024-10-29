import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UsersConfirmation } from './schema/usersConfirmation.schema';
import { Model } from 'mongoose';
import { gerarCodigo } from './utils/generateCode'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(UsersConfirmation.name)
    private productRepository: Model<UsersConfirmation>
  ) {}

  public create(createProductDto: CreateProductDto) {
    const createProduct = new this.productRepository({
      confirmationCode: gerarCodigo(),
      ...createProductDto
    })

    return createProduct.save();
  }

  findOne(email: string) {
    return this.productRepository.findOne({
      email
    }).exec();
  }

  remove(id: string) {
    return this.productRepository.findByIdAndDelete(id);;
  }
}
