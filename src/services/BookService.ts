import { patch, put } from 'services/HttpService';

const updateLastRead = async (
  bookId: number,
  lastRead: number,
): Promise<boolean> => {
  const [data, err] = await put(`/book/${bookId}?lastRead=${lastRead}`);
  return err === undefined;
};

const invokePatchRequestWhichUpdatesLastInteraction = async (bookId: number): Promise<void> => {
  const [data, err] = await patch(`/book/${bookId}`);
};

export { updateLastRead, invokePatchRequestWhichUpdatesLastInteraction };