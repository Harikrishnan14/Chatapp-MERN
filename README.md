# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation :
   Open a terminal (or command prompt on Windows) and run the following command to ensure Node.js is installed correctly :

   ![image](https://github.com/Harikrishnan14/SocialMediaApp-MERN/assets/105783562/b7fb8b17-c1dd-4035-8a12-4e9ad2b141a0)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install MongoDB :** MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. You can download MongoDB from the official website at https://www.mongodb.com/try/download/community

   Inorder to run MongoDB locally you need to have MongoDB Shell installed on your computer. You can download MongoDB Shell from the official website at https://www.mongodb.com/try/download/shell

   Check MongoDB Installation :
   Open a terminal (or command prompt on Windows) and run the following command to ensure MongoDB is installed correctly :

   ![image](https://github.com/Harikrishnan14/SocialMediaApp-MERN/assets/105783562/03a82297-eafa-4940-ba82-7f0fdd7e4b03)

3. **Install MongoDB Compass :** You can download MongoDB Compass from the official website at https://www.mongodb.com/try/download/compass
 
4. **Create necessary folders, files and fill in the details :**

   1. Navigate to root of the project folder, and create a file named `.env`
   2. Inside the .env file assign your public folders url to "`REACT_APP_PUBLIC_FOLDER`" (we will create this public folder in the upcoming step). Your .env file will look like this :
      
      ![image](https://github.com/Harikrishnan14/SocialMediaApp-MERN/assets/105783562/497daed7-c98e-4015-a57c-a22dd5c4a272)

   3. Now navigate to Backend folder. Inside this Backend folder, create another `.env` file
   4. Inside the .env file, assign the port number to  "`PORT`", assign your MongoDB URI to "`Mongo_URI`" and assign your JWT Secret string to "`JWT_SECRET`". Finally, your .env file will look like this :

      ![image](https://github.com/Harikrishnan14/SocialMediaApp-MERN/assets/105783562/4d40a875-c9c5-4a01-9231-363dff1e3706)
   
   5. Inside the Backend folder create a folder name "`public`". Inside this "public" folder create another folder named "`images`"
   6. Copy the images from the `default images` folder inside the root of the project folder and paste them inside `Backend/public/images`

5. **Install Dependencies :**
   1. Open the terminal (or command prompt on Windows) (or if you are using VS Code, you can use its terminal) from the root folder and run the following command to install all the dependencies needed to run the Frontend of the application :
      ### `npm i`

   2. Open another terminal (or command prompt on Windows) (or if you are using VS Code, you can use its terminal) and run the following command to navigate to the Backend (Server side) of the application :
      ### `cd Backend`
      Then, 
      ### `npm i`
      This will install all the dependencies needed to run the Backend of the application
   3. Open another terminal (or command prompt on Windows) (or if you are using VS Code, you can use its terminal) and run the following command to navigate to the Socket server folder of the application :
       ### `cd Socket`
       Then,
       ### `npm i`
       This will install all the dependencies needed to run the Socket server of the application


# Starting the Application:

1. Open the terminal which you used to install the dependencies for the Frontend and run the following command to start Frontend of the application :
   ### `npm start`
2. Open the other terminal which you used to install the dependencies for the Backend and run the following command to start Frontend of the application :
   ### `node .\index.js`
   [ OR, You can use `nodemon .\index.js`, if nodemon is already installed on your system ]
3. Open the other terminal which you used to install the dependencies for the Socket server and run the following command to start Socket server of the application :
   ### `node .\index.js`
   [ OR, You can use `nodemon .\index.js`, if nodemon is already installed on your system ]
   
4. After these, Go to 'http://localhost:3000'


# Packages Used:

1. **Frontend :**

   1. **Axios :** Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE.
   2. **Redux :** Used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.
   3. **Redux Thunk :** Allows us to write action creators that return a function instead of an action.
   4. **React Router :** For routing purpose. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.
   5. **React Unicons :** They can integrate icons in seconds with just one line of code, saving time and effort.
   6. **Socket.io client :** The clients connect to the server, exchange information, and then disconnect.
   7. **timeago.js** : Used to automatically update date elements with user friendly statements (just now, n seconds ago etc.).
   8. **react-input-emoji :** It is dedicated to enhancing the global user experience, catering to a broad spectrum of users from various linguistic backgrounds.
   9. **Mantine UI :** It provides a large range of user-friendly components that are very easy to implement.

2. **Backend :**

   1. **Express :** Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
   2. **CORS :** Cross-origin resource sharing (CORS) is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized.
   3. **Mongoose :** With Mongoose, creating and managing relationships between data is quick and easy thanks to a strict schema and populate() method. It replaces specific paths, described in the schema with documents from other collections.
   4. **jsonwebtoken :** JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are.
   5. **bcrypt :** It is a cryptographic hash function designed for password hashing and safe storing in the backend of applications in a way that is less susceptible to dictionary-based cyberattacks.
   6. **body-parser :** The body parser middleware is particularly useful in scenarios where you need to process form data or handle JSON payloads in API requests.
   7. **Multer :** Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
   8. **dotenv :** Dotenv files are used to load environment variables from a .env file into the running process. This file may expose sensitive information that could help a malicious user to prepare more advanced attacks.

3. **Socket :**

   1. **Socket.io :** Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. The Socket.IO connection can be established with different low-level transports: HTTP long-polling.