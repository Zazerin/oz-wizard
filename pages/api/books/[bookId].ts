import type { NextApiRequest, NextApiResponse } from "next";
import booksStore from "helpers/BooksStore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  switch (req.method) {
    case "GET":
      const book = await booksStore.getById(req.query.bookId as string);
      if (book) {
        return res.status(200).json(book);
      }
      return res.status(404).end();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
