create table users (
    id serial primary key,
    name varchar(100),
    email varchar(200),
    password varchar(500)
);

create table items(
    id serial primary key,
    title varchar(200),
    description varchar(200),
    photo varchar(200),
    claimed varchar(20),
    price varchar(200),
    user_id integer references users(id)
);

create table comments(
    id serial primary key,
    user_id integer references users(id),
    item_id integer references items,
    comment varchar(300)
);
