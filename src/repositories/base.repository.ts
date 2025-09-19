import { getModelForClass, type ReturnModelType } from "@typegoose/typegoose";
import type { AnyParamConstructor } from "@typegoose/typegoose/lib/types";
import type { FilterQuery, UpdateQuery } from "mongoose";

// Interface que define os métodos do repositório
export interface IBaseRepository<T> {
  create(data: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | null>;
  findOne(filter: FilterQuery<T>): Promise<T | null>;
  find(filter: FilterQuery<T>): Promise<T[]>;
  update(id: string, data: UpdateQuery<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}

// Classe base abstrata que implementa a interface
export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected model: ReturnModelType<AnyParamConstructor<T>>;

  constructor(c: AnyParamConstructor<T>) {
    this.model = getModelForClass(c);
  }

  public async create(data: Partial<T>): Promise<T> {
    const created = await this.model.create(data);
    return created.toObject() as T;
  }

  public async findById(id: string): Promise<T | null> {
    // Adicionamos a asserção de tipo "as Promise<T | null>"
    return this.model.findById(id).lean().exec() as Promise<T | null>;
  }

  public async findOne(filter: FilterQuery<T>): Promise<T | null> {
    // Adicionamos a asserção de tipo
    return this.model.findOne(filter).lean().exec() as Promise<T | null>;
  }

  public async find(filter: FilterQuery<T>): Promise<T[]> {
    // Adicionamos a asserção de tipo
    return this.model.find(filter).lean().exec() as Promise<T[]>;
  }

  public async update(id: string, data: UpdateQuery<T>): Promise<T | null> {
    // Adicionamos a asserção de tipo
    return this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec() as Promise<T | null>;
  }

  public async delete(id: string): Promise<boolean> {
    const result = await this.model
      .deleteOne({ _id: id } as FilterQuery<T>)
      .exec();
    return result.deletedCount === 1;
  }
}
