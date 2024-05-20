1.What is Database?
---->A database is an organized collection of data, stored and retrieved digitally from a remote or local computer system.

2.What is SQL?
---->SQL stands for Structured Query Language. It is the standard language for relational database management systems. It is especially useful in handling organized data comprised of entities (variables) and relations between different entities of the data.

3.What is the difference between SQL and MySQL?
---->SQL is a standard language for retrieving and manipulating structured databases. On the contrary. MySQL is a relational database management system, like SQL Server, Oracle or IBM DB2, that is used to manage SQL databases.

4.What is DBMS?
---->DBMS stands for Database Management System. DBMS is a system software responsible for the creation, retrieval, updation, and management of the database.

5.What is RDBMS? How is it different from DBMS?
---->RDBMS stands for Relational Database Management System. The key difference here, compared to DBMS, is that RDBMS stores data in the form of a collection of tables, and relations can be defined between the common fields of these tables.

6.What are Tables and Fields?
---->A table is an organized collection of data stored in the form of rows and columns. Columns can be categorized as vertical and rows as horizontal. The columns in a table are called fields while the rows can be referred to as records
EXAMPLE:
Table: Student Details
Field: ID, Department, email
Records: 1, Atul,IT, atulhx@gmail.com

7.What are Constraints in SQL?
---->Constraints used to specify the rules concerning data in the table. It can be applied for single or multiple fields in an SQL table during the creation of the table or after creating using the ALTER
TABLE command. The constraints are:
* NOT NULL-Restricts NULL value from being inserted into a column.
* CHECK-Verifies that all values in a field satisfy a condition.
* DEFAULT-Automatically assigns a default value if no value has been specified for the field.
* UNIQUE - Ensures unique values unique to be inserted into the field.
* INDEX-Indexes a field providing faster retrieval of records.
* PRIMARY KEY - Uniquely identifies each record in a table. 7. FOREIGN KEY - Ensures referential integrity for a record in another table.

8.What is a Primary Key?
---->The PRIMARY KEY constraint uniquely identifies each row in a table. It must contain UNIQUE values and has an implicit NOT NULL constraint
EXAMPLE:
CREATE TABLE Students (           -- Create table with a single field as primary key 
ID INT NOT NULL
Name VARCHAR(255)
PRIMARY KEY (ID)
);
CREATE TABLE Students (            /* Create table with multiple fields as primary key */
ID INT NOT NULL
LastName VARCHAR(255)
FirstName VARCHAR(255) NOT NULL,
CONSTRAINT PK Student
PRIMARY KEY (ID, FirstName)          -- Composite Key
);

9.What is a UNIQUE constraint?
---->A UNIQUE constraint ensures that all values in a column are different. This provides uniqueness for the column(s) and helps identify each row uniquely. Unlike primary key, there can be multiple unique constraints defined per table.
EXAMPLE:
CREATE TABLE Students (            / Create table with a single field as unique */
ID INT NOT NULL UNIQUE
Name VARCHAR(255)
);
CREATE TABLE Students(            / Create table with multiple fields as unique */
ID INT NOT NULL
LastName VARCHAR(255)
FirstName VARCHAR(255) NOT NULL
CONSTRAINT PK Student
UNIQUE (ID, FirstName)
);

10.What is a Foreign Key?
--->A FOREIGN KEY comprises of single or collection of fields in a table that essentially refers to the PRIMARY KEY in another table. Foreign key constraint ensures referential integrity in the relation between two tables.
EXAMPLE:
CREATE TABLE Students(            / Create table with foreign key - Way 1*/
ID INT NOT NULL
Name VARCHAR(255)
LibraryID INT
PRIMARY KEY (ID)
FOREIGN KEY (Library_ID) REFERENCES Library (LibraryID)
);

11.What are the different subsets of SQL?
--->Data Definition Language (DDL) - It allows you to perform various operations on the database such as CREATE, ALTER, and DELETE objects.
--->Data Manipulation Language(DML) - It allows you to access and manipulate data. It helps you to insert, update, delete and retrieve data from the database.
--->Data Control Language (DCL) - It allows you to control access to the database. Example - Grant, Revoke access permissions.
--->Transaction Control Language (TCL): It is used to deal with the transaction operations in the database. The commands in this category are COMMIT, ROLLBACK, SET TRANSACTION, SAVEPOINT, etc.

12.What are the set operators in SQL?
--->We use the set operators to merge data from one or more tables of the same kind. Although the set operators are like SQL joins, there is a significant distinction.
* UNION: It combines two or more results from multiple SELECT queries into a single result set. It has a default feature to remove the duplicate rows from the tables. The following syntax illustrates the Union operator:
SELECT columns FROM tablel UNION SELECT columns FROM table 2;
* UNION ALL: This operator is similar to the Union operator, but it does not remove the duplicate rows from the output of the SELECT statements. The following syntax illustrates the UNION ALL operator:
SELECT columns FROM tablel UNION ALL SELECT columns FROM table 2:
* INTERSECT: This operator returns the common records from two or more SELECT statements. It always retrieves unique records and arranges them in ascending order by default. Here, the number of columns and data types should be the same. The following syntax illustrates the INTERSECT operator:
SELECT columns FROM table1 INTERSECT SELECT columns FROM table 2;
* MINUS: This operator returns the records from the first query, which is not found in the second query. It does not return duplicate values. The following syntax illustrates the MINUS operator:
SELECT columns FROM table1 MINUS SELECT columns FROM table2;

13.What are SQL comments?
--->Comments explanations or annotations in SQL queries that are readable by programmers. It's used to make SQL statements easier to understand for humans. During the parsing of SQL code, it will be ignored. Comments can be written on a single line or across several lines.
→Single Line Comments: It starts with two consecutive hyphens (--). → Multi-line Comments: it starts with /* and ends with */ CODING BUGS NOTES GALLERY

14. USING LIMIT:
--->select salary from employee order by salary desc limit n-1,1;
EXAMPLE:
select salary from employee order by salary desc limit 2,1-3 highest salary
select salary from employee order by salary desc limit 1,1; -2 highest salary
select salary from employee order by salary desc limit 0,1; - nth highest salary

15. USING LIMIT OFFSET
--->select salary from employee order by salary limit 1 offset n-1;
EXAMPLE:
select salary from employee order by salary limit 1 offset 2;
To Find 3th highest salary

16.USING DISTINCT:
--->select salary from employee el
where(n-1)=(
select count(distint(e2.salary)) fromemployee e2 where e2.salary > el.salary);
nth highest salary we get here

17.What is the SELECT statement?
---> SELECT operator are use to select data from database.
The data return are stored in a result table called as result-set
Select is Data manipulation language (DML) command
EXAMPLE:
select from emp;

18.What are some common clauses used with SELECT query in SQL?
--->The following are some frequent SQL clauses used in conjunction with a SELECT query:
*WHERE clause: In SQL, the WHERE clause is used to filter records that are required depending on certain criteria.
*ORDER BY clause: The ORDER BY clause in SQL is used to sort data ascending (ASC) or descending (DESC) order depending on specified field(s) (DESC).
*GROUP BY clause: GROUP BY clause in SQL is used to group entries with identical data and may be used with aggregation methods to obtain summarised database results.
HAVING clause in SQL is used to filter records in combination with the GROUP BY clause. It is different from WHERE, since the WHERE clause cannot filter aggregated records.

19.What is a Join? List its different types.
--->The SQL Join clause is used to combine records (rows) from two or more tables in a SQL database based on a related column between the two.
There are four different types of JOINs in SQL:
* (INNER) JOIN: Retrieves records that have matching values in both tables involved in the join. This is the widely used join for queries.
SELECT *FROM Table A INNER JOIN Table_B on Table_A.id = Table_B.id
EXAMPLE:
SELECT *FROM emp INNER JOIN student on emp.id = student.sid
* LEFT (OUTER) JOIN: Retrieves all the records/rows from the left and the matched records/rows from the right table.
EXAMPLE
Select from emp left outer join student on emp.id-student.sid;
* RIGHT (OUTER) JOIN: Retrieves all the records/rows from the right and the matched records/rows from the left table.
EXAMPLE:
select from emp right outer join student on emp.id-student.sid;
* FULL (OUTER) JOIN: Retrieves all the records where there is a match in either the left or right table.

20.What is a Self-Join?
--->A self-join is a type of join that can be used to connect two tables. As a result, it is a unary relationship. Each row of the table is attached to itself and all other rows of the same table in a self-join.

21.What is a Cross-Join?
--->Cross join can be defined as a cartesian product of the two tables included in the join. The table after join contains the same number of rows as in the cross-product of the number of rows in the two tables. If a WHERE clause is used in cross join then the query will work like an INNER JOIN.
EXAMPLE:
SELECT stu.name, sub.subject FROM students AS stu CROSS JOIN subjects AS sub;

22.What is an Index?
An index refers to a performance tuning method of allowing faster retrieval of records from the table. An index creates an entry for each value and hence it will be faster to retrieve data.

23.Explain different types of index in SQL.
--->There are three types of index in SQL namely:
* Unique Index: This index does not allow the field to have duplicate values if the column is unique indexed. If a primary key is defined, a unique index can be applied automatically.
* Clustered index: This index reorders the physical order of the table and searches based on the basis of key values. Each table can only have one clustered index.
* Non-Clustered Index: Non-Clustered Index does not alter the physical order of the table and maintains a logical order of the data. Each table can have many nonclustered indexes.

24.What is the difference between DROP and TRUNCATE commands?
--->DROP command removes a table and it cannot be rolled back from the database whereas TRUNCATE command removes all the rows from the table.

25.How many Aggregate functions are available in SQL?
--->SQL provides seven (7) aggregate functions, which are given below:
* AVG(): returns the average value from specified columns.
* COUNT(): returns the number of table rows, including rows with null values.
* MAX(): returns the largest value among the group.
* MIN(): returns the smallest value among the group.
* SUM(): returns the total summed values(non-null) of the specified column.
* FIRST(): returns the first value of an expression.
* LAST(): returns the last value of an expression.

26.Explain String function in SQL?
* length()-select length('Amit');
* upper() select upper('amit');
* lower()-select lower('AmIT');
* replace()-select replace('Amit Mahto', 'Mahto', 'Welcome'); Output: Amit Welcome

27.What is the ACID property in a database?
--->ACID stands for Atomicity, Consistency, Isolation, Durability. It is used to ensure that the data transactions are processed reliably in a database system.
* Atomicity: This property ensures that the transaction is completed in all-or-nothing way.
* Consistency: This ensures that updates made to the database is valid and follows rules and restrictions.
* Isolation: This property ensures integrity of transaction that visible to all other transactions.
* Durability: This property ensures that the committed.

28.What is an ALIAS command?
--->ALIAS command in SQL is the name that can be given to any table or a column. This alias name can be referred in WHERE clause to identify a particular table or a column.
EXAMPLE:
select id as empid from emp;
here empidis temprory name given to a column name id

29.What is a View?
--->A view is a virtual table which consists of a subset of data contained in a table. Since views are not present, it takes less space to store. View can have data of one depends on the relationship. more tables combined and it

30.What are Views used for?
--->A view refers to a logical snapshot based on a table or another view. It is used for the following
reasons:
* Restricting access to data.
* Making complex queries simple.
* Ensuring data independence.
* Providing different views of same data.

31.What is the difference between DELETE and TRUNCATE statements?
--->Delete command is used to delete a row in a Truncate is used to delete all the rows table. from a table.
--->You can rollback data after using delete You cannot rollback data. statement.

32.What do you mean by "Trigger" in SQL?
--->Trigger in SQL is are a special type of stored procedures that are defined to execute automatically in place or after data modifications. It allows you to execute a batch of code when an insert, update or any other query is executed against a specific table.

33.What are the different types of a subquery?
--->There are two types of subquery namely, Correlated and Non-Correlated.
* Correlated subquery: These are queries which select the data from a table referenced in the outer query. It is not considered as an independent query as it refers to another table and refers the column in a table.
* Non-Correlated subquery: This query is an independent query where the output of subquery is substituted in the main query.

34.What is the main difference between 'BETWEEN' and 'IN' condition operators?
--->BETWEEN operator is used to display rows based on a range of values in a row whereas the IN condition operator is used to check for values contained in a specific set of values.
Example of BETWEEN:
SELECT FROM Students where ROLL NO BETWEEN 10 AND 50;
Example of IN:
SELECT FROM students where ROLL_NO IN (8,15,25);

35.Why are SQL functions used?
* To perform some calculations on the data
* To modify individual data items
* To manipulate the output
* To format dates and numbers
* To convert the data types.

36.What is the difference between 'HAVING' CLAUSE and a 'WHERE' CLAUSE?
-->WHERE CLAUSE
* It can be used without GROUP BY CLAUSE
* It selects a row before grouping
* It cannot contain aggregate functions
--->HAVING CLAUSE
* It cannot be used without GROUP BY CLAUSE
* It selects a row after grouping
* It can contain aggregate functions
