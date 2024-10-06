import { onDatabaseConnect } from "./config/knex";
import { getAuthorById } from "./Examples/crud";

onDatabaseConnect();

const main = async () => {
  await onDatabaseConnect(); /* limit ve offset değerleri bunlar  terminalinde 2 tane görüncek yani*/

  const book =await getAuthorById(10);
  console.log(book);




  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */

  /*   const author =await getAuthorById(1);
  console.log(author); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*   const books =await getBooks(2,0);
    console.log(books); */
  /* ------------------------------------------------------------------------------------------------------------------------------------ */

  /* const authors =await getAllAuthors(2,0);  */
  /*   console.log(authors); */
};

main();
