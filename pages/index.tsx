import Link from "next/link";

function Nav() {
  return (
    <ul>
      <li>
        <Link href="/books">
          <a>Books</a>
        </Link>
      </li>
      <li>
        <Link href="/books/add">
          <a>+ Add</a>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
