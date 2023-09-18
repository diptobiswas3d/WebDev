-- CREATE DATABASE hackerrank_practice;
USE hackerrank_practice;
CREATE TABLE company_1 (
	emp_id INT PRIMARY KEY,
    dept VARCHAR(10),
    salary INT
);

CREATE TABLE triangels_1

INSERT INTO company_1
VALUES (1, 'IT', 24000),
		(2, 'IT', 35500),
        (3, 'HR', 12000),
        (5, 'IT', 65000),
        (7, 'HR', 43000),
        (10, 'IT', 26000),
        (15, 'HR', 34000);
        
SELECT
	dept,
    AVG(salary) AS Avg_salary,
    SUM(salary) AS Total_salary
FROM company_1
GROUP BY dept