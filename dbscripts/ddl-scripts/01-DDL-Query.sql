-- Table: public.genreTypes

-- DROP TABLE public."genreTypes";

CREATE TABLE public."genreTypes"
(
    "genreId" integer NOT NULL DEFAULT nextval('"genreTypes_genreId_seq"'::regclass),
    type character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "isActive" boolean NOT NULL,
    "createdAt" date NOT NULL,
    "createdBy" character(20) COLLATE pg_catalog."default" NOT NULL,
    "updatedAt" date,
    "updatedBy" character(1) COLLATE pg_catalog."default",
    CONSTRAINT "genreTypes_pkey" PRIMARY KEY ("genreId")
)

TABLESPACE pg_default;

ALTER TABLE public."genreTypes"
    OWNER to postgres;

-- Table: public.moviecomments

-- DROP TABLE public.moviecomments;

CREATE TABLE public.moviecomments
(
    "commentId" integer NOT NULL DEFAULT nextval('"moviecomments_commentId_seq"'::regclass),
    "userId" integer NOT NULL,
    "movieId" integer NOT NULL,
    comments character varying(250) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date NOT NULL,
    CONSTRAINT moviecomments_pkey PRIMARY KEY ("commentId")
)

TABLESPACE pg_default;

ALTER TABLE public.moviecomments
    OWNER to postgres;

-- Table: public.movies

-- DROP TABLE public.movies;

CREATE TABLE public.movies
(
    "movieId" integer NOT NULL DEFAULT nextval('"movies_movieId_seq"'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    genre integer NOT NULL,
    "releaseDate" character varying COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date NOT NULL,
    "createdBy" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "updatedAt" date,
    "updatedBy" character varying COLLATE pg_catalog."default",
    "upVote" integer,
    "downVote" integer,
    CONSTRAINT movies_pkey PRIMARY KEY ("movieId"),
    CONSTRAINT "FK_movies_movieId_genreType_Id" FOREIGN KEY (genre)
        REFERENCES public."genreTypes" ("genreId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.movies
    OWNER to postgres;

-- Table: public.userSettings

-- DROP TABLE public."userSettings";

CREATE TABLE public."userSettings"
(
    "settingId" integer NOT NULL DEFAULT nextval('"userSettings_settingId_seq"'::regclass),
    "userId" integer NOT NULL,
    "genreId" integer NOT NULL,
    "createdBy" character(20) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedBy" character(20) COLLATE pg_catalog."default",
    "updatedAt" date,
    CONSTRAINT "userSettings_pkey" PRIMARY KEY ("settingId")
)

TABLESPACE pg_default;

ALTER TABLE public."userSettings"
    OWNER to postgres;

-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    "userId" integer NOT NULL DEFAULT nextval('"users_userId_seq"'::regclass),
    "userName" character varying COLLATE pg_catalog."default" NOT NULL,
    "userEmail" character varying COLLATE pg_catalog."default" NOT NULL,
    "isActive" boolean,
    "createdAt" date NOT NULL,
    "createdBy" character(20) COLLATE pg_catalog."default" NOT NULL,
    "updatedAt" date,
    "updatedBy" character(1) COLLATE pg_catalog."default",
    password character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY ("userId")
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;