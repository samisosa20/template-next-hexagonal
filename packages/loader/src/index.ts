import { AuthApiAdapter, AuthUseCase } from "architecture/features/auth";

namespace AppLoader {
  const authenticationAdapter = new AuthApiAdapter();

  const authentication = new AuthUseCase(authenticationAdapter);

  /**
   * Return the authentication use case
   * @returns {AuthUseCase} The authentication use case
   */
  export function authUseCase() {
    return authentication;
  }

}

export { AppLoader };
