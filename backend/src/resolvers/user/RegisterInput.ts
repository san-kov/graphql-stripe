import { InputType, Field } from 'type-graphql'
import { IsEmail, Length } from 'class-validator'
import { UniqueEmail } from './UniqueEmail'

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @UniqueEmail({ message: 'Email is already in use' })
  email: string

  @Field()
  @Length(5, 100)
  password: string
}
