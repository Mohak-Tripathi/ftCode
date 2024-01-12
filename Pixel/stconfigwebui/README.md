#Frontend Project Starter Guide- 
During Developemnt- 
1. Inside /home/Db50Gw/stconfigwebui/frontend folder, run "npm i" to install all dependencies. 
2. After that run npm start, frontend will start running at 3000 port. 
3. After developemnt, run "npm run build" to create build of frontend folder. 
4. You need to take the build folder which was being created in frontend directory and serve it in public directory of backend folder. Location - "/home/Db50Gw/stconfigwebui/backend/public/"


#Backend Project Starter Guide- 
1. Just run "npm i", to install dependencies. 
2. Run "npm start", backend will start running at 5000 port. 
3. As frontend static files are already located in public folder as build, they will be served to backend nodejs application server at 5000 as well. 
4. So your whole web application will run at 5000 port. 
