/* bu dosyada konseptleri ayırmak için daha gelişmiş sorguları belirteceğiz*/
import knex from "../config/knex";
/* export: Bu anahtar kelime, bu fonksiyonu başka bir dosyadan kullanılabilir hale getirir. Yani, bu dosyayı import eden başka bir dosya, bu fonksiyonu kullanabilir.
const getBooksWithAuthorAndGenre: Bu, getBooksWithAuthorAndGenre adında bir sabit (constant) tanımlandığını gösterir.
async: Bu anahtar kelime, fonksiyonun asenkron olduğunu belirtir. Asenkron fonksiyonlar, await anahtar kelimesini kullanarak asenkron işlemlerin tamamlanmasını bekleyebilir.
const books: Bu, books adında bir değişken tanımlar ve veritabanından gelen kitap verilerini bu değişkene atar.
await knex("books"): knex, bir SQL sorgusu oluşturmak için kullanılan bir kütüphanedir. Burada, books adlı tabloya sorgu gönderiliyor. await, bu sorgunun tamamlanmasını bekler.
join: Bu yöntem, iki tabloyu birleştirir. Burada, books tablosu, authors ve genres tablolarıyla birleştiriliyor.
İlk join: authors tablosunu books tablosuyla birleştiriyor. Birleştirme koşulu, authors.id ve books.author_id sütunlarının eşit olmasıdır.
İkinci join: genres tablosunu books tablosuyla birleştiriyor. Birleştirme koşulu, genres.id ve books.genre_id sütunlarının eşit olmasıdır.
select: Bu yöntem, hangi sütunların sorguya dahil edileceğini belirler.
books.id: Kitapların ID'si.
books.title: Kitapların başlıkları.
authors.name as author: Yazarların isimlerini author olarak adlandırarak alır.
genres.name as genre: Türlerin isimlerini genre olarak adlandırarak alır.
return books; Bu satır, sorgudan dönen kitap verilerini geri döndürür. Fonksiyonu çağıran yer, bu verileri kullanabilir.
*/
export const getBooksWithAuthorAndGenre = async () => {
  const books = await knex("books")
    .join("authors", "authors.id", "books.author_id")
    .join("genres", "genres.id", "books.genre_id")
    .select('books.id','books.title','authors.name as author','genres.name as genre');
    return books;
};

export const getAuthorsWithBooksCount = async ()=>{
    const authors = await knex("authors")
    .join("books","books.author_id","authors.id")
    .select("authors.name" ,knex.raw("count(books.id) as books_count"))
    .groupBy("authors.id")
    //ilk önce en iyi yazarları alıp buna göre sıralamak istiyorum
    .orderBy('books_count','desc')
    return authors;
}
export const getTopAuthorsWithBooksCount = async ()=>{
    const authors = await knex("authors")// 1. Adım: "authors" tablosunu temel olarak al
    .join("books","books.author_id","authors.id")// 2. Adım: "books" tablosu ile birleştir
    .select("authors.name" ,knex.raw("count(books.id) as books_count"))// 3. Adım: Yazar adını ve kitap sayısını seç
    .groupBy("authors.id")// 4. Adım: Her yazar için gruplama ya
    //ilk önce en iyi yazarları alıp buna göre sıralamak istiyorum
    .orderBy('books_count','desc') // 5. Adım: Kitap sayısına göre azalan sırada sıralama yap
    .limit(5)// 6. Adım: En iyi 5 yazarı al
    return authors;// 7. Adım: Sonuçları döndür
}



