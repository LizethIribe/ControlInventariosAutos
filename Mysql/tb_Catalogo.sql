CREATE DATABASE IF NOT EXISTS db_ControlInventarios
DEFAULT CHARACTER SET 'utf8mb4'
COLLATE 'utf8mb4_spanish_ci';

USE db_ControlInventarios;

CREATE TABLE tb_Catalogo(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    marca VARCHAR(50),
    logo VARCHAR(300)
);

SELECT * FROM tb_Catalogo;
INSERT INTO tb_Catalogo (nombre,marca, logo) VALUES ('Figo', 'Ford', 'LogoFigo.png');

show global variables like 'PORT';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Gorda300120';
flush privileges;