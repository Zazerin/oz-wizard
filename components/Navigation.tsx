import Link from "next/link";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/books">
          <a>Books</a>
        </Link>
      </li>
      <li>
        <Link href="/books/add">
          <a>Add book</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
