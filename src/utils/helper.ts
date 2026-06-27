import * as bcrypt from 'bcrypt';

const salt = 10;

export const hashPasswordHelper = async (password: string) => {
  try {
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log('🚀 ~ hashPassword ~ error:', error);
  }
};
