import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Trash, TrashDocument } from './schema/trash.schema';
import { CreateTrashDto } from './dtos/createTrash.dto';

@Injectable()
export class TrashesService {
    constructor( @InjectModel(Trash.name) private trashModel: Model<TrashDocument> ) {};

    async create(createTrashDto: CreateTrashDto): Promise<Trash> {
        const createdTrash = new this.trashModel(createTrashDto);
        return createdTrash.save();
    };

    async findAll(): Promise<Trash[]> {
        return this.trashModel.find();
    };
    async delete(id: string): Promise<Trash> {
        return this.trashModel.findOneAndDelete({ _id: id });
    };

    async findOne(id: string): Promise<Trash> {
        return this.trashModel.findOne({ _id: id });
    };

    async updateName(id: string, name: string): Promise<Trash> {
        const updated = this.trashModel.findByIdAndUpdate({ _id: id}, { name });
        return (await updated).save();
    };
};
