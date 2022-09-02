import { ConnectionProvider } from './ConnectionProvider';

export class LoginService extends ConnectionProvider {
  constructor() {
    super({
      externalApiUrl: `${process.env.APPSETTING_SM_AUTH_API_ENDPOINT}`,
      prefix: 'auth',
    });
  }

  public async login(
    email: string,
    password: string,
    persitSession: number,
  ): Promise<string> {
    const response = await this.connection.post('/token', {
      email,
      password,
      persitSession,
    });
    return response.data.token;
  }
}
