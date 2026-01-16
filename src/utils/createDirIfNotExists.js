import fs from 'node:fs/promises';

export const createDirIfNotExists = async (url) => {
  try {
    await fs.access(url);
  } catch (error) {
    if (error === 'ENOENT') {
      await fs.mkdir(url);
    }
  }
};
