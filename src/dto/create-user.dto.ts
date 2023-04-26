export class CreateUserDTO {
  readonly name: { first: string; last: string };
  readonly nickname: string;
  readonly formOfAddress: string;
  readonly photo: string;
  readonly password: string;
  readonly info: string;
}
