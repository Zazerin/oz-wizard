import type { NextApiRequest, NextApiResponse } from 'next'
import booksStore from 'helpers/BooksStore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  switch (req.method) {
    case 'GET':
      const books = await booksStore.getAll();
      return res.status(200).json(books);
    case 'POST':
      const book = await booksStore.create(JSON.parse(req.body));
      return res.status(201).json(book);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
