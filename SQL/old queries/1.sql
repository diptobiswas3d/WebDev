-- Use a Database
USE sql_store;
USE sql_invoicing;

SELECT *
FROM order_items
WHERE unit_price * quantity > 30 AND order_id = 6;

SELECT *
FROM Products
WHERE quantity_in_stock IN (49,38,72);

SELECT *
FROM Customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';

SELECT *
FROM Customers
WHERE address LIKE '%AVENUE%' OR address LIKE '%TRAIL%';

SELECT *
FROM Customers
WHERE phone LIKE '%9';

SELECT *
FROM Customers
WHERE first_name IN ('ELKA','AMBUR');

SELECT *
FROM Customers
WHERE last_name REGEXP 'EY$|ON$';

SELECT *
FROM Customers
WHERE last_name REGEXP '^MY|SE';

SELECT *
FROM Customers
WHERE last_name REGEXP 'B[RU]';

SELECT *
FROM order_items
WHERE order_id = 2
ORDER BY quantity * unit_price DESC;

SELECT *
FROM Customers
ORDER BY points DESC
LIMIT 3;

SELECT order_id, oi.product_id, name, quantity, oi.unit_price
FROM order_items oi
JOIN products p
	ON oi.product_id = p.product_id;

-- Joining Multiple Tables
SELECT
	payment_id,
    p.client_id,
    c.name AS client_name,
    invoice_id,
    date,
    amount,
    payment_method,
    pm.name AS payment_method_name
FROM payments p
JOIN payment_methods pm
	ON p.payment_method = pm.payment_method_id
JOIN clients c
	ON p.client_id = c.client_id;

SELECT
	p.product_id,
    p.name,
    oi.quantity
FROM products p
LEFT JOIN order_items oi
	ON p.product_id = oi.product_id
ORDER BY p.product_id;

SELECT
    order_date,
    order_id,
    first_name,
    sh.name AS shipper,
    os.name AS status
FROM orders o
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id
LEFT JOIN order_statuses os
	ON o.status = os.order_status_id
LEFT JOIN customers c
	ON o.customer_id = c.customer_id
ORDER BY status;

SELECT
	date,
    c.name AS client,
    amount,
    pm.name AS name
FROM clients c
JOIN payments p
	USING (client_id)
LEFT JOIN payment_methods pm
	ON p.payment_method = pm.payment_method_id
ORDER BY date;

SELECT
	customer_id,
    first_name,
    points,
    'Bronze' AS type
FROM customers
WHERE points < 2000
UNION
SELECT
	customer_id,
    first_name,
    points,
    'Silver'
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT
	customer_id,
    first_name,
    points,
    'Gold'
FROM customers
WHERE points > 3000
ORDER BY first_name;

INSERT INTO products (name,quantity_in_stock,unit_price)
VALUES ('product 1', 55, 5.5),
		('product 2', 58, 6.5),
        ('product 3', 32, 7.5)