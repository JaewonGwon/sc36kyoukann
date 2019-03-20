drop table member;

create table member (
    id varchar2(50),
    pw varchar2(50),
    email varchar2(50),
    name varchar2(30),
    display_name varchar2(50),
    gender varchar2(4),
    address varchar2(100),
    phone varchar2(13),
    point number

);

insert into member(id,pw) values ('tt','tt');

commit;