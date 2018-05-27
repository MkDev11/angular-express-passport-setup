import { Strategy } from "../../shared/interfaces/-index";


/**
 * @description Google Credentials
 * @type {{clientID: string; clientSecret: string; callbackUrl: string}}
 */
export const googleCredentials: Strategy = {
  clientID    : process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl : process.env.GOOGLE_CALLBACK_URL
};