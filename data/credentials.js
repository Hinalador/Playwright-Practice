// Usamos process.env ya que se carga mediante dotenv desde playwright.config.js
export const credentials = {
    standardUser: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
    lockedUser: 'locked_out_user',
};
