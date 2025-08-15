import { createZodDto } from "nestjs-zod";
import {
  AgencySchema,
  ListerSchema,
  SeekerSchema,
  UserListSchema,
} from "./user.dto";

export class SeekerDto extends createZodDto(SeekerSchema) {}
export class ListerDto extends createZodDto(ListerSchema) {}
export class AgencyDto extends createZodDto(AgencySchema) {}

export class UserListDto extends createZodDto(UserListSchema) {}

export type OnboardingDto = SeekerDto | ListerDto | AgencyDto;
