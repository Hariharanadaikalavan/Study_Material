show databases;

create database StoredProcedure;

use StoredProcedure;
-- Creating Emp table 
CREATE TABLE emp (
  empno decimal(4,0) NOT NULL,
  ename varchar(10) default NULL,
  job varchar(9) default NULL,
  mgr decimal(4,0) default NULL,
  hiredate date default NULL,
  sal decimal(7,2) default NULL,
  comm decimal(7,2) default NULL,
  deptno decimal(2,0) default NULL
);
-- Populating The Values into emp table
INSERT INTO emp VALUES ('7369','SMITH','CLERK','7902','1980-12-17','800.00',NULL,'20');
INSERT INTO emp VALUES ('7499','ALLEN','SALESMAN','7698','1981-02-20','1600.00','300.00','30');
INSERT INTO emp VALUES ('7521','WARD','SALESMAN','7698','1981-02-22','1250.00','500.00','30');
INSERT INTO emp VALUES ('7566','JONES','MANAGER','7839','1981-04-02','2975.00',NULL,'20');
INSERT INTO emp VALUES ('7654','MARTIN','SALESMAN','7698','1981-09-28','1250.00','1400.00','30');
INSERT INTO emp VALUES ('7698','BLAKE','MANAGER','7839','1981-05-01','2850.00',NULL,'30');
INSERT INTO emp VALUES ('7782','CLARK','MANAGER','7839','1981-06-09','2450.00',NULL,'10');
INSERT INTO emp VALUES ('7788','SCOTT','ANALYST','7566','1982-12-09','3000.00',NULL,'20');
INSERT INTO emp VALUES ('7839','KING','PRESIDENT',NULL,'1981-11-17','5000.00',NULL,'10');
INSERT INTO emp VALUES ('7844','TURNER','SALESMAN','7698','1981-09-08','1500.00','0.00','30');
INSERT INTO emp VALUES ('7876','ADAMS','CLERK','7788','1983-01-12','1100.00',NULL,'20');
INSERT INTO emp VALUES ('7900','JAMES','CLERK','7698','1981-12-03','950.00',NULL,'30');
INSERT INTO emp VALUES ('7902','FORD','ANALYST','7566','1981-12-03','3000.00',NULL,'20');
INSERT INTO emp VALUES ('7934','MILLER','CLERK','7782','1982-01-23','1300.00',NULL,'10');

select * from emp;

select * from emp                 -- Using Between Operator we are fleching the sal between the 1200 to 1700 
where sal between 1200 and 1700;

DELIMITER //                      -- 1.Creating Procedure for salary between them using input parameter
CREATE PROCEDURE Pr_Salary (IN countone INT, IN countertwo INT)
BEGIN
    SELECT * FROM emp
    WHERE sal BETWEEN countone AND countertwo;
END//
DELIMITER ;
--
CALL Pr_Salary(1200, 1600);  -- More than one input parameter we have to go for this
call Pr_Salary(@countone=1200 , @countertwo=1600)

DELIMITER //                          -- 2. Creating Procedure for how many is beign repeated using Out Parameter
CREATE PROCEDURE SP_Job_total (IN V_job VARCHAR(25), OUT total INT)
BEGIN
    SELECT COUNT(job)
    INTO total
    FROM emp
    WHERE job = V_job;
END //
DELIMITER ;

CALL SP_Job_total('president', @total);    -- Now, We are Calling the Stored Procedure for Further Action 
SELECT @total as JobTotal;

