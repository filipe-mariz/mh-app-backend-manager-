import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UsersConfirmation } from './schema/usersConfirmation.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(UsersConfirmation.name)
    private productRepository: Model<UsersConfirmation>
  ) {}

  public create(createProductDto: CreateProductDto) {
    const createProduct = new this.productRepository(createProductDto)
    return createProduct.save();
  }

  findOne(id: string) {
    return this.productRepository.findById(id).exec();
  }

  remove(id: string) {
    return this.productRepository.findByIdAndDelete(id);;
  }
}
