-- CREATE DATABASE leetcode_practice;
USE leetcode_practice;

CREATE TABLE person_1 (
	id INT PRIMARY KEY,
    email VARCHAR(50)
);

CREATE TABLE tree_1 (
	id INT,
    p_id INT
);

INSERT INTO tree_1
VALUES (1, NULL), (2, 1), (3, 1), (4, 2), (5, 2), (6, 5);

INSERT INTO person_1
VALUES (4, 'john@example.com');
        
SELECT *
FROM person_1 p11
JOIN person_1 p12
	USING (email)
WHERE p11.email = p12.email AND p11.id > p12.id;

CREATE TABLE employees_1 (
	employee_id INT,
    name VARCHAR(20)
);

INSERT INTO employees_1
VALUES (2, 'Krew'), (4, 'Haven'), (5, 'Kristian');

CREATE TABLE salaries_1 (
	employee_id INT,
    salary INT
);

INSERT INTO salaries_1
VALUES (5, 76071), (1, 22517), (4, 63539);

SELECT *
FROM employees_1;

SELECT *
FROM salaries_1;

SELECT employee_id
FROM (
	SELECT
		e1.employee_id,
        name,
        salary
	FROM employees_1 e1
	LEFT JOIN salaries_1 s1
		USING(employee_id)
	UNION
	SELECT
		s2.employee_id,
        name,
        salary
	FROM salaries_1 s2
	LEFT JOIN employees_1 e2
		USING(employee_id)
) AS emp_table
WHERE name IS NULL
	OR salary IS NULL
ORDER BY employee_id;

CREATE TABLE products (
	product_id INT PRIMARY KEY,
    store1 INT,
    store2 INT,
    store3 INT
);

INSERT INTO products_1
VALUES (0, 95, 100, 105),
		(1, 70, NULL, 80);
        
ALTER TABLE products
RENAME TO products_1;

TRUNCATE products_1;

SELECT *
FROM products_1;

SELECT
    product_id,
    'store2' AS store,
    store2 AS price
FROM Products_1
WHERE store2 IS NOT NULL;

SELECT *
FROM person_1
GROUP BY email;

SELECT
    id,
    (
		CASE
			WHEN p_id IS NULL THEN 'root'
            WHEN id IN (
				SELECT DISTINCT p_id
				FROM tree_1
				WHERE p_id IS NOT NULL
            ) THEN 'inner'
            ELSE 'leaf'
            END
    ) AS TYPE
FROM tree_1;

SELECT *
FROM tree_1;

SELECT DISTINCT p_id
FROM tree_1
WHERE p_id IS NOT NULL;

CREATE TABLE visits_1 (
	visit_id INT PRIMARY KEY,
    customer_id INT
);

CREATE TABLE transactions_1 (
	transaction_id INT PRIMARY KEY,
    visit_id INT,
    amount INT
);

INSERT INTO visits_1
VALUES (1, 23), (2, 9), (4, 30), (5, 54), (6, 96), (7, 54), (8, 54);

INSERT INTO transactions_1
VALUES (2, 5, 310),
		(3, 5, 300),
		(9, 5, 200),
        (12, 1, 910),
        (13, 2, 970);

SELECT *
FROM visits_1;

SELECT *
FROM transactions_1;

SELECT
	customer_id,
    COUNT(customer_id) AS count_no_trans
FROM visits_1 v
LEFT JOIN transactions_1 t
	USING (visit_id)
WHERE transaction_id IS NULL
GROUP BY customer_id
ORDER BY visit_id;

CREATE TABLE orders_1 (
	order_no INT PRIMARY KEY,
    customer_no INT
);

INSERT INTO orders_1
VALUES (1,1), (2,2), (3,3), (4,3);


SELECT *
FROM orders_1
WHERE order_no = (
	SELECT MAX(order_no)
    FROM orders_1
);

SELECT *
FROM person_1;

DELETE FROM person_1
WHERE id NOT IN (
	SELECT *
    FROM (
		SELECT MIN(id)
		FROM person_1
		GROUP BY email
    ) AS p
);


