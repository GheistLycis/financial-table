import BaseDTO from "../interfaces/BaseDTO";

export default interface UserDTO extends BaseDTO {
  name: string
  password?: string
}