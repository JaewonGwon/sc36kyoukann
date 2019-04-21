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

create table taste_tag (
    tag varchar2(50) primary key,
    tag_image varchar2(3000)
    );
    

insert into taste_tag values
(   
    '문학',
    'https://www.ccny.cuny.edu/sites/default/files/styles/top_slider/public/IMG_3953%5B1%5D_0.JPG?itok=agzqtyEl'
);

insert into taste_tag values
(   
    '과학,기술,컴퓨터',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-teap9eZZORiTqMf6djMR2frBlckkbK9OEfwX1aCXrcHPDmu'
);

insert into taste_tag values
(   
    '장르소설',
    'https://ibukuntaiwo.files.wordpress.com/2014/02/book-genre.jpg'
);

insert into taste_tag values
(   
    '취미,오락,여행,건강',
    'https://s.sachmem.vn/public//images/TA7T1SBT/U1-D-1-1-sfaxrjpmospyzrcn.jpg'
);

insert into taste_tag values
(   
    '철학,사상,종교',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHqJ2rGVcxxIlugVYUgEymdzouS6izKhgDu6Njtrru1cU0ixlKw'
);

insert into taste_tag values
(   
    '자기계발',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eSLh07JZgR6q3H7i1eWR3n79ZWWVAJdkpEeU2tmvmvBngYxS'
);

insert into taste_tag values
(   
    '경제,경영',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-G1mBWb8o4erVony__fkXJTLGuWVdN8RbSTTR7vOxkk_4dHhGPQ'
);

insert into taste_tag values
(   
    '가정,육아,요리',
    'https://tedideas.files.wordpress.com/2018/08/web_ready_gathering_final_kondrich.jpg?w=750'
);

insert into taste_tag values
(   
    '정치,사회,시사',
    'https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150405692/38968874-society-social-media-social-networking-connection-concept.jpg'
);

insert into taste_tag values
(   
    '예술,문화',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKYC-TIaSlJvjZWzHKZ_2wIAI-snyVgSRUE5_SHPQevuSyHveLg'
);

insert into taste_tag values
(   
    '역사,지리',
    'https://www.thoughtco.com/thmb/H1iqHnWHrppoMHOEy4aKEtEJgng=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/171720729-58b9d1473df78c353c38c2b1.jpg'
);

insert into taste_tag values
(   
    '제태크,부동산',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUhi4mz5dCd3VbJULyQk719_eR7iC8NhL68heyXjfnHoeRYBNcg'
);

insert into taste_tag values
(   
    '어학,외국어',
    'https://previews.123rf.com/images/lculig/lculig1409/lculig140900269/31829330-%EC%99%B8%EA%B5%AD%EC%96%B4-%EA%B0%9C%EB%85%90-%EB%8B%A8%EC%96%B4-%EA%B5%AC%EB%A6%84-%EB%B0%B0%EA%B2%BD.jpg'
);






create table reglike(
    rev_num number ,
    id varchar2(100)
);
commit;
