import { put } from 'services/HttpService';

const updateLastRead = async (
  bookId: number,
  lastRead: number,
): Promise<boolean> => {
  const [data, err] = await put(`/book/${bookId}?lastRead=${lastRead}`);
  return err === undefined;
};

export { updateLastRead };