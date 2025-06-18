ARG NODE_VERSION
FROM node:${NODE_VERSION}

# RUN npm install pm2@latest -g

# # # # # # # # # # # # # # # # # # # # # # #

WORKDIR /home/app/

CMD /bin/bash -i /home/app/entrypoint.sh
