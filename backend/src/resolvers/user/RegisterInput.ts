import { InputType, Field } from 'type-graphql'
import { IsEmail } from 'class-validator'
import { UniqueEmail } from './UniqueEmail'

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @UniqueEmail({ message: 'Email is already in use' })
  email: string

  @Field()
  password: string
}
