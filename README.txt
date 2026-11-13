ANNAPURNA SHARINGSPOON

WHAT IS INCLUDED
- One-page website: Home, About, Donate, Contact
- Navbar links scroll to sections on the same page
- Donation amount buttons
- Express.js backend
- MySQL database table for donation pledges

FOLDER STRUCTURE
annapurna-sharing-spoon/
  public/
    assets/
      logo.jpg
      bg3.jpg
      bg2.jpg
      bg.png
    index.html
    style.css
    script.js
  server.js
  schema.sql
  package.json
  .env.example

STEP 1: INSTALL NODE PACKAGES
Open this project folder in VS Code.
Open Terminal and run:
npm install

STEP 2: CREATE THE MYSQL DATABASE
1. Start MySQL using MySQL Workbench or XAMPP.
2. Open schema.sql in MySQL Workbench
3. Run the SQL commands.

STEP 3: SET YOUR DATABASE PASSWORD
1. Make a copy of .env
3. Put your actual MySQL password after DB_PASSWORD=.
   If your local MySQL has no password, leave it blank.
4. Keep .env private. Do not upload it to GitHub.

STEP 4: START THE BACKEND
In the VS Code terminal, run:
npm start

You should see:
Server running at http://localhost:5000

STEP 5: OPEN THE WEBSITE
Open this address in your browser:
http://localhost:5000

