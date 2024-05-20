CREATE DATABASE banking;

USE banking;

CREATE TABLE accounts (
    id INT PRIMARY KEY,
    account_name VARCHAR(100),
    balance BIGINT
);

INSERT INTO accounts (id, account_name, balance) VALUES (1, 'hariharan', 1000), (2, 'gokul', 2000);

-- Start the transaction
START TRANSACTION;

-- credit from Hariharn
UPDATE accounts
SET balance = balance + 100
WHERE id = 1;

-- Debit to Gokul
UPDATE accounts
SET balance = balance - 100
WHERE id = 2;

-- Commit the transaction
COMMIT;
rollback;


START TRANSACTION;

-- Debit from Account A (ensure balance does not go negative)
UPDATE accounts
SET balance = balance - 1100
WHERE id = 1;

-- Check for negative balance, if any, rollback
IF (SELECT balance FROM accounts WHERE id = 1) < 0 THEN
    ROLLBACK;
ELSE
    -- Credit to Account B
    UPDATE accounts
    SET balance = balance + 1100
    WHERE id = 2;

    -- Commit the transaction
    COMMIT;
END IF;

DELIMITER //

CREATE PROCEDURE TransferAmount(IN from_account INT, IN to_account INT, IN amount BIGINT)
BEGIN
    DECLARE insufficient_funds CONDITION FOR SQLSTATE '45000';

    -- Start the transaction
    START TRANSACTION;

    -- Debit from the source account
    UPDATE accounts
    SET balance = balance - amount
    WHERE id = from_account;

    -- Check for negative balance
    IF (SELECT balance FROM accounts WHERE id = from_account) < 0 THEN
        -- Rollback transaction if funds are insufficient
        ROLLBACK;
        SIGNAL insufficient_funds SET MESSAGE_TEXT = 'Insufficient funds for transfer';
    ELSE
        -- Credit to the destination account
        UPDATE accounts
        SET balance = balance + amount
        WHERE id = to_account;

        -- Commit the transaction
        COMMIT;
    END IF;
END //

DELIMITER ;


CALL TransferAmount(1, 2, 100);  -- Successful transfer
CALL TransferAmount(1, 2, 1100); -- This will trigger a rollback due to insufficient funds

