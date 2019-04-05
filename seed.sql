insert into users
    (name, email, password)
values
    ('Banana', 'banana@gmail.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OvmY8JC.vlZAXVSCUMxzwnDYKzmBsIty'),
    ('Stevie Cool', 'coolBot@yahoo.com', '$2a$10$Eg2fJeOgL2JV6xwL8cL45OM9CAOqTEVsRH5TCKBpLHtAr4ewSvpqO'),
    ('Potato Head', 'iH8myLife@spud.gov', '$2a$10$Eg2fJeOgL2JV6xwL8cL45O9M8I3BvQYTopFWfv5jGjPfkw/AAv4tG')
;

insert into items
    (title, description, photo, claimed, price, user_id)
values
    ('A beautiful banana peel', 'Nice, ripe, thick, and yellow', '/is/in/this/folder.png', 'available', 'free', 1),
    ('Angry Eyes', 'Perfect for any occasion you need to look displeased.', '/is/in/this/folder/too.png', 'available', 'free', 3)
;

insert into comments
    (user_id, item_id, comment)
VALUES
    (2, 2, 'Tricked my wife into leaving me, she thought I hated her parents at dinner. Would buy Angry Eyes again.'),
    (2, 1, 'Described as yellow, arrived bruised & black before I could even use it.')
;


-- Banana = BananaPeel
-- Stevie = CoolGuy420
-- Potato Head = StarchProblems