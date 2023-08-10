CREATE TABLE IF NOT EXISTS public.employee
(
    employee_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    job_role character varying(255) COLLATE pg_catalog."default" NOT NULL,
    salary numeric(5,0),
    birth date NOT NULL,
    employee_registration integer NOT NULL,
)