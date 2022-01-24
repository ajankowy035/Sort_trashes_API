import { Controller, Body, Post, Get, Patch, Delete, Param, NotFoundException } from '@nestjs/common';
import { CreateTrashDto } from './dtos/createTrash.dto';
import { TrashesService } from './trashes.service';

@Controller('trashes')
export class TrashesController {
    constructor(private trashesService: TrashesService) {}

    @Get()
    findAll() {
        return this.trashesService.findAll();
    }

    @Post('/new')
    create(@Body() body: CreateTrashDto) {
        return this.trashesService.create(body); 
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        const trash = this.trashesService.delete(id);
        if(!trash) {
            throw new NotFoundException('trash not found');
        };
        return trash;
    };


    @Get('/:id')
    findOne(@Param('id') id: string) {
        const trash = this.trashesService.findOne(id);
        if(!trash) {
            throw new NotFoundException('trash not found');
        };
        return trash;
    };

    @Patch()
    updateName (@Body() body: { id: string, name: string }) {
        const { id, name } = body;
        return this.trashesService.updateName(id, name);
    }
}
