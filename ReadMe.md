npm init -y     package jsonu kuralım
npx tsc --init   tsconfigi kuralım 
npx eslint --init 
npm install -D typescript ts-node @types/node nodemon 
npm install -g typescript ts-node  nodemon 
npm install pg knex dotenv 
nodemon .\src\index.ts
knex init -x ts  knexfile.ts dosyasını olusturdu 
npm install -g knex 
knex migrate:make  first_migration -x ts 
 knex migrate:latest
 knex migrate:latest: Bu komut, veritabanınızı en güncel hale getiren migration dosyalarını çalıştırır. Knex, migration dosyalarının hangilerinin daha önce çalıştırıldığını knex_migrations tablosunda takip eder ve sadece çalıştırılmamış olanları uygular.
Knex, bir migration işlemi sırasında aynı anda birden fazla migration'ın çalışmasını önlemek için knex_migrations_lock tablosunda bir kilit (lock) kontrolü yapar. Bu kilidin açık olup olmadığını kontrol ediyor.
Knex, veritabanınızda knex_migrations tablosunu kontrol ederek daha önce hangi migration dosyalarının çalıştırıldığını kontrol ediyor.
Yeni bir migration işlemi başlatılıyor ve tüm işlemler trx2 adında bir transaction içinde yürütülüyor. Bu, eğer bir hata olursa tüm işlemlerin geri alınmasını sağlıyor.
Knex aşağıdaki işlemleri sırasıyla gerçekleştiriyor:
authors Tablosu Oluşturuluyor:
genres Tablosu Oluşturuluyor:
genres.name Sütunu İçin Benzersizlik Kısıtlaması ve İndeks Oluşturuluyor:
books Tablosu Oluşturuluyor:
books.title Sütunu İçin Benzersizlik Kısıtlaması ve İndeks Oluşturuluyor:
books.author_id İçin Foreign Key Oluşturuluyor:
books.genre_id İçin Foreign Key Oluşturuluyor:
Knex, çalıştırılan migration dosyasını knex_migrations tablosuna kaydediyor. Böylece bu migration’ın daha sonra tekrar çalıştırılmaması sağlanıyor.
Eğer tüm işlemler başarılı olmuşsa, COMMIT ile transaction tamamlanıyor ve veritabanına yapılan değişiklikler kalıcı hale geliyor.
olusturlan tablolar postgredede gorunmekte image.png
knex migrate:rollback
npm install @faker-js/faker Sahte kitapları veritabanımıza eklemede kullandık bunuu 
knex seed:make genres_seed -x ts 


