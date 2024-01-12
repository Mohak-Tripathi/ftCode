## DBEDGE Application README
Welcome to the DBEDGE application! This README provides essential information for developers, contributors, and users to understand, contribute to, and deploy the application.


# Introduction
DBEDGE is a powerful application designed for internal monitoring and analytics of IOT devices. This repository encompasses both frontend and backend components.


# Development
2.1 Backend
The backend of the application is built using Nodejs/ Express. Follow the steps below to set up your development environment:
   # Navigate to the frontend directory:
   ```cd /home/Db50Gw/DBEDGE/client/backend/```

   # Install dependencies:    
   ```npm i```
    It will download necessary Node.js modules and frontend dependencies:

   # Start the development server:
   ```npm start```

The development server will run on 8080 port.

2.2. Frontend
The frontend of the application is built using React. Follow the steps below to set up your development environment:
   # Navigate to the frontend directory:
   ```cd /home/Db50Gw/DBEDGE/client/frontend/```

   # Install dependencies:    
   ```npm i```
    It will download necessary Node.js modules and frontend dependencies:

   # Start the development server:
   ```npm start```

The development server will run on 3000 port.
You can now start your frontend development. Any changes made to the source code will automatically trigger hot-reloading for a seamless development experience.

  # Deployment (Build)

    ```cd /home/Db50Gw/DBEDGE/client/frontend/```
    ```npm run build```
This will generate a production-ready build in the /home/Db50Gw/DBEDGE/client/frontend/build/ directory.

  # Note-
 Older build will be replaced with new build.  In backend/app.js,  i have served the frontend/build. So you do not need to do anything until or unless you are modifying any path. 
 New changes has been accomodated and you can run your entire application at 8080 port as it running.

# Optional Clenup - 

After a successful build, you can choose to delete the node_modules directory to save space:
```rm -rf /home/Db50Gw/DBEDGE/client/frontend/node_modules```
Deleting the node_modules folder after the build is optional, as it is no longer needed once the frontend is built.



# Conclusion
You have now successfully set up your development environment, made changes to the frontend, and deployed those changes to the production environment. Following these steps will ensure a smooth and efficient frontend development process for the DBEDGE application.
