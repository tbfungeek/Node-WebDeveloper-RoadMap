#show DATABASES;
#use movies;
#create table if not exists movie(
#	title VARCHAR(100),
#	director VARCHAR(100),
#	year VARCHAR(50),
#	rating VARCHAR(10)
#);
#show TABLES;
#DESCRIBE movie;
#DESCRIBE movie title;
#alter table movie add column genderss VARCHAR(2);
#alter table movie drop column genders;
#alter table movie drop column genderss;
#ESCRIBE movie;
#drop table movie;
#insert into movie (title,director,year,rating,gender) values ("movie4","tbfungeek","2020","1",'M');
#UPDATE movie SET director="haha" WHERE title = 'movie1';
#delete from movie where title='movie3';

#select * from movie;
#SELECT title,director FROM movie where title = "movie3";
#select * from movie order by title desc;
#select * from movie where director like '%haha%';
#select * from movie where director not like '%haha%';
#select * from movie where rating BETWEEN 8 and 10;
#select concat(title," ",year) as name from movie;
#select * from movie;

#https://www.twle.cn/l/yufei/sql/sql-basic-create-index.html
#create index idx_title on movie(title);
#DROP INDEX idx_title on movie;

#create view title_view 
#AS 
#SELECT title from movie; 

#create or replace view title_view 
#AS 
#SELECT title from movie; 

#SHOW FULL TABLES WHERE table_type='VIEW';

#select * from title_view;

#RENAME TABLE title_view TO new_title_view;
#SHOW FULL TABLES WHERE table_type="VIEW";
DROP VIEW IF EXISTS title_view,new_title_view;
SHOW FULL TABLES WHERE table_type="VIEW";


