import { CreateIserDto } from "./create-users.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateUserDto extends PartialType(CreateIserDto){ }