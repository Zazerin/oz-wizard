import Head from "next/head";
import Router from "next/router";
import { List, ListItem } from "@material-ui/core";
import BooksStore, { BookDto } from "helpers/BooksStore";

function Books({ books }: { books: BookDto[] }) {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <List>
        {Array.isArray(books) &&
          books.map((b, i) => (
            <ListItem
              button
              onClick={() => Router.push(`/books/${b.id}`)}
              key={b.id}
            >{`${i + 1}:  ${b.title}, ${b.author}`}</ListItem>
          ))}
      </List>
    </>
  );
}

export const getServerSideProps = async () => {
  const books = await BooksStore.getAll();
  return {
    props: {
      books
    }
  };
};

export default Books;
