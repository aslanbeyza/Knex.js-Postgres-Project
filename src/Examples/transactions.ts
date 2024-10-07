import knex from "../config/knex";
/* işlemlerle ilgili ama testlerimizde bize yardımcı olacak, diyelim ki */
/* BU SAYFADAN HİÇBİŞEY ANLAMADIMM !!!!!!!!!!!!!!!!!!!! */
export const getLastAuthor = async () => {
  const author = await knex("authors").orderBy("created_at", "desc").first();
  return author;
};
export const createAuthorWithBook = async () => {
  try {
    await knex.transaction(async (trx) => {
      const author =( await trx("authers").insert(
        {
          name: "Transaction author",
          bio: "Transaction author bio",
        },
        "*"
      )
    )[0];
    await trx('books').insert({
        title: "The transaction book",
        author_id:author.id,
        price:1000,
        genre_id:1
    },"*");
    });
    console.log("Yazar ve Kitap oluşturuldu")
  } catch (e) {
    console.log('Transaction sırasında hata meydana geldi',e);
  }
};
