/* Knex kütüphanesi kullanarak bir PostgreSQL veritabanına bağlanmayı ve bağlantıyı kontrol etmek için basit bir SQL sorgusu çalıştırmayı sağlayan bir yapı oluşturuyoruz */
import dotenv from 'dotenv';
import Knex from 'knex';

dotenv.config();
const {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE} = process.env;


const knex = Knex({
    /* client: Kullanılacak veritabanı yönetim sistemini belirtir.  */
    client:"postgresql",
    /* connection: Veritabanı bağlantı bilgilerini içerir. Yukarıda alınan çevresel değişkenler kullanılır. */
    connection:{
         host: DB_HOST,
         port: Number(DB_PORT),
         user: DB_USER,
         password:DB_PASSWORD,
         database:DB_DATABASE,
    },
    /* pool: Veritabanı bağlantı havuzunun ayarlarıdır. min en az 2 bağlantı ve max en fazla 10 bağlantı açılmasını belirler. Bu, performans ve kaynak yönetimi açısından önemlidir. */
    pool :{
        min:2,
        max:10,
    }
})
/* knex.raw(...) metodu, Knex kütüphanesini kullanarak ham SQL sorguları çalıştırmanıza olanak tanır. */
/* "SELECT 1" ifadesi, SQL dilinde bir sorgudur. Bu sorgu, veritabanının mevcut olup olmadığını kontrol etmek için sıkça kullanılır. SELECT 1 ifadesi, herhangi bir veri döndürmeden yalnızca "1" değerini seçer. Bu, veritabanı bağlantısının çalışıp çalışmadığını test etmek için kullanılan basit bir sorgudur. */
export const onDatabaseConnect = async ()=>knex.raw("SELECT 1");
export default knex;
