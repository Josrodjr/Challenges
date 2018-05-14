drop table if exists Usuario;
create table Usuario(
	id_usuario serial not null,
	nombre_usuario varchar(25),
	contrasena varchar(15),
	correo_electronico varchar (30),
	PRIMARY KEY (id_usuario)
);

drop table if exists Amigos;
create table Amigos(
	id_relacion serial not null,
	id_usuario1 integer,
	id_usuario2 integer,
	fecha_amistad date,
	primary key (id_relacion),
	foreign key (id_usuario1) references Usuario(id_usuario),
	foreign key (id_usuario2) references Usuario(id_usuario)
);

drop table if exists Tarea;
create table Tarea(
	id_tarea serial not null,
	id_usuario integer,
	nombre_tarea varchar(20),
	fecha_finaliza date,
	realizado boolean,
	primary key (id_tarea),
	foreign key (id_usuario) references Usuario(id_usuario)
);

drop table if exists Leaderboard;
create table Leaderboard(
	id_board serial not null,
	id_usuario integer,
	puntos integer,
	primary key(id_board),
	foreign key (id_usuario) references Usuario(id_usuario)
);

drop table if exists Mensajes;
create table Mensajes(
	id_mensaje serial not null,
	emisor_id integer,
	receptor_id integer,
	mensaje varchar(140),
	fecha_enviado date,
	primary key (id_mensaje),
	foreign key (emisor_id) references Usuario(id_usuario),
	foreign key (receptor_id) references Usuario(id_usuario)
);