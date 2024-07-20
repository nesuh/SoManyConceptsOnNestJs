import { Controller,Get,Post,Patch,Delete,Body,Param, Query,ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateIserDto} from './dto/create-users.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Controller('users')
export class UsersController {
constructor(private readonly usersService:UsersService){}
    //route for usign crud operation
    @Get()
    findAll(@Query('role') role?: 'Engineer' | 'Admin' | 'Intern' ){
return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.usersService.findOne(id);
    }
    @Post()
    create(@Body() user:{name:string,email:string,role:'ADMIN'| 'ENINEER'|'INTERN'}){
        return this.usersService.create(user);
    }
    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body() userUpdate:{name?:string,
        email?:string,role?:'ADMIN'| 'ENINEER'|'INTERN'
    }){
       // return userUpdate or if we include the id
       return this.usersService.update(id,userUpdate)

    }
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number){
        return this.usersService.delete(id)
    }
}
