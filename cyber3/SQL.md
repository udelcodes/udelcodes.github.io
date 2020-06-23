# L33k3r Database

![Group of Leeks](https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/7467/image/le3.gallery.jpg?t=1444771075)
## Help is greatly needed!

We have recently come into the possession of a Database created by the L33k3rs. This database contains information
on all of the agents involved in the L33k3er Orginization. Accessing this kind of information would be
a huge win for the Cyber House in their battle against the L33k3ers.

Alice and Bob believe they have found a way to enter this database and they are prepared to brief you
on their knowledge. 

![SQL Injection](https://www.indusface.com/wp-content/uploads/2020/03/how-to-prevent-blind-sql-injection.png)

## SQL Injection

Alice and Bob belive that the database can be breached by a means of SQL Injection. Meaning they have 
found that the L33k3r database uses SQL code, which is a popular language used to 
access and manage information held in a database management system. 

SQL Injection is the idea to convince the application to run SQL code that was not intended, therefore
we can access data the application does not want us to. Basically hacking the application!

![SQL](http://www.unixwiz.net/images/sqlinjection.jpg)

## Unsanitized Input

Alice and Bob have provided us with documentation on SQL Injection which should help us infiltrate the
L33k3rs database.

---
> **A L I C E  &  B O B**


A basic SQL Statement looks like this,

`SELECT first_name
  FROM people
 WHERE last_name = '$INPUT';`
 
Now let us break it down...

- `SELECT first_name` : "first_name is the variable holding information we will be pulling from the database
- `FROM people` : people is an object that holds multiple variables 
- ` WHERE last_name = '$INPUT';` : last_name is what the user will be inputing. 

So based on the above code, the user will enter a last name. If the last name is valid,
the SQL statement will then look for, in the people's object, the first name that correlates with the last name. 

---

This is a basic way to pull information from a database, so most databases that use SQL handels input like the code above. **This is good**,
because we can use it to our advantage.

There are statements in SQL that we can use that trick the computer into thinking differently then the code intends. for example, in
- `WHERE last_name = '$INPUT';`
Do you see the tick marks surrounding `'$INPUT'`

That is to indicate the user's unput, so if we were to input something like
- `Andy Novocin'` with a tick mark at the end, we can trick the computer into thinking that is the end of the users input, so we can add more code!!!

---

Now the more code we are going to add is a line that will tell the computer to print everything that is in the `FROM people` object of the database, or where the SQL code is mainly pulling information from. 

Something as simple as 
- ` OR '1' = '1'` can do this.

Since 1 is always equal to itself, the computer will read the statement as always true for every `last_name` inputed. That means it will 
print all the information! So as long as we input one correct statement, we can make the computer print everything!

---

# John Smith

Alright, hopefully you have an understanding of how SQL code works, and how we can manipulate it to our advantage is it is not properly sanitized. 

The secret message that you uncovered has a name in it, **John Smith**. We believe that is the boss of the L33k3rs, therefore his information must be held in the database. 

Try inputing his name in the database and see what appears. 


