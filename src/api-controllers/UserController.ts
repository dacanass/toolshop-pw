import { APIRequestContext } from "@playwright/test";
import { User } from "../lib/datafactory/userModel";

export class UserController{
  private request: APIRequestContext;
  private readonly endpoint = "/users";

  constructor(request:APIRequestContext){
    this.request = request;
  }

  async register(userData: User){
    const response = await this.request.post(`${this.endpoint}/register`, {
      data: userData,
    })
    return response
  }

  async login(credentials: {email:string, password:string}){
    const response = await this.request.post(`${this.endpoint}/login`, {
      data: credentials,
    })
    return response
  }

}