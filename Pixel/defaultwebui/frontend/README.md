#Frontend Project Starter Guide- 
During Developemnt- 
1. Run command "npm i --legacy-peer-deps" in the directory /home/Db50Gw/defaultwebui/frontend to start frontend in development mode.
2. Frontend react server will start at 3000 port.
3. Also in directory - /home/Db50Gw/defaultwebui/frontend/src/constants/    - uncomment the line commented to manage CORS issue.
4. Do your development
5. Reverse the process of line 3.   Now it should be  -> export const apiPrefix =  ""
5. After compeletion run "npm run build" at directory /home/Db50Gw/defaultwebui/frontend
6. older build will be replaced with new build.
7. New changes has been accomodated and you can run your entire application at 8080 port as it was running.
8. Frontend Static files are served in backend nodejs application server with the help of express.static() method. So entire application will start running at 8080. 



