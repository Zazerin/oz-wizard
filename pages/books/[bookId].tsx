import { GetServerSideProps } from "next";
import Head from "next/head";
import Router from "next/router";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  makeStyles,
  Button
} from "@material-ui/core";
import { BookDto } from "helpers/BooksStore";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

interface BookProps {
  book?: BookDto;
}

function Book({ book }: BookProps) {
  const classes = useStyles();

  if (!book) return "book required!";

  return (
    <>
      <Head>
        <title>{book.title}</title>
      </Head>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h2">{book.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Author: {book.author}
          </Typography>
          <Typography variant="subtitle1">Pages: {book.pages}</Typography>
          <Typography
            className={classes.pos}
            variant="subtitle1"
            color="textSecondary"
          >
            Description:
          </Typography>
          <Typography variant="body2" component="p">
            {book.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={Router.back} size="small">
            Back
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  { book: BookDto | null },
  { bookId: string }
> = async ({ query }) => {
  const { bookId } = query;
  let book = null;

  try {
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`);

    if (res.status === 200) {
      book = (await res.json()) as BookDto;
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      book
    }
  };
};

export default Book;
