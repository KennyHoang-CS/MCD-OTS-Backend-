\echo 'Delete and recreate mcd-ots db?'
\prompt 'Return for yes or ctrl-c to cancel > ' foo 

DROP DATABASE mcd_ots;
CREATE DATABASE mcd_ots; 
\connect mcd_ots

\i mcd-ots-schema.sql
\i mcd-ots-seed.sql 

\echo 'Delete and recreate mcd-ots_test db?'
\prompt 'Return for yes or ctrl-c to cancel > ' foo 

DROP DATABASE mcd_ots_test; 
CREATE DATABASE mcd_ots_test; 
\connect mcd_ots_test 

\i mcd-ots-schema.sql 



