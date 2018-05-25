export interface StrategyCredential {
  clientID: string;
  clientSecret: string;
  callbackUrl: string;
}


/**
 * @description Google Credentials
 * @type {{clientID: string; clientSecret: string; callbackUrl: string}}
 */
export const googleCredentials: StrategyCredential = {
  clientID: "932728984885-cosfc9q93mcspq7n8i31d4pjumqm39rv.apps.googleusercontent.com",
  clientSecret: "G2DWzVM802IlswU2R4Ew-duD",
  callbackUrl: "http://localhost:3000/auth/google/callback"
};