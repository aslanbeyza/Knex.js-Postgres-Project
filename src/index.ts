import { onDatabaseConnect } from "./config/knex";
import { updateBook } from "./Examples/crud";

onDatabaseConnect();

const main = async () => {
  await onDatabaseConnect(); /* limit ve offset değerleri bunlar  terminalinde 2 tane görüncek yani*/

  const book = await updateBook(201, {
    author_id: 405,
    genre_id: 3,
    title: "abc",
    description: "sladklsa",
    price: 34,
  });
  if (book) {
    console.log("KİTAP BAŞARILI BİR ŞEKİLDE GÜNCELLENDİ.", book);
  } else {
    console.log("Kitap güncellenemedi veya bulunamadı.");
  }

  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*   const new_author = await createAuthor({name:"kdfsjlkds", bio:"ksdfjkskjdlfdks"});
   console.log(new_author.id); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */

  /*  const updatedAuthor = await updateAuthor( {
   name:"yazar güncellendi",
   bio:"jdsjhksdj"
  },5);
  console.log("YAZAR BAŞARILI BİR ŞEKİLDE GÜNCELLENDİ.", updatedAuthor); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*   const updatedAuthor = await updateAuthor( {
    name: "Ali",
    bio: "Yeni bio bilgisi", 
  },4);
  console.log("YAZAR BAŞARILI BİR ŞEKİLDE GÜNCELLENDİ.", updatedAuthor); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*  const book =await createBook({title:"ooofff",description:"yazılım secen manyaktır",price:3,author_id:4,genre_id:7});
  console.log("KİTAP BAŞARILI BİR ŞEKİLDE  EKLENDİ.",book); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*  const author =await createAuthor({name:"beyza",bio:"allahın bir kulu",});
  console.log("YAZAR BAŞARILI BİR ŞEKİLDE  EKLENDİ.",author); */
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------- */
  /*   const book =await getAuthorById(10);
  console.log(book); */
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
