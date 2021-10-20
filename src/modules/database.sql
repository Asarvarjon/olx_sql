CREATE TABLE users (
    user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL,
    email VARCHAR(40) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    phone VARCHAR(13) NOT NULL
);

CREATE TABLE products (
    product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_name VARCHAR(32) NOT NULL,
    price VARCHAR(32) NOT NULL,   
    phone VARCHAR(13) NOT NULL,
    photos VARCHAR(32) NOT NULL,
    content TEXT NOT NULL,
    category_id UUID NOT NULL REFERENCES categories(category_id),
    user_id UUID NOT NULL REFERENCES users(user_id)
);

CREATE TABLE messages (
    message_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY ,
    message_text TEXT NOT NULL,
    owner_id UUID NOT NULL REFERENCES users(user_id),  
    receiver_id UUID NOT NULL REFERENCES users(user_id), 
    created_at VARCHAR(32) NOT NULL
);

CREATE TABLE user_sessions (
    session_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_agent VARCHAR(190) NOT NULL,
    created_at VARCHAR(120) NOT NULL,
    owner_id UUID NOT NULL REFERENCES users(user_id),
    socket_id VARCHAR(120)
);

CREATE TABLE categories (
    category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_name VARCHAR(32) NOT NULL,
    photo VARCHAR(32) NOT NULL
); 


