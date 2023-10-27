create database notes
create table note(
    note_id int IDENTITY(1,1) PRIMARY KEY,
    note_title VARCHAR (250),
    note_body VARCHAR(250),
    note_time DATETIME DEFAULT CURRENT_TIMESTAMP
)

select * from note
insert into note (note_title,note_body) values ('skip','i will skip')