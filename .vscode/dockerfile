FROM ubuntu

#sysyem packages
RUN apt -y update && \
    apt -y install \
     net-tools \
     procps

# APP packages 
RUN echo "Hello K8S Academy !" > test &&  echo "I told you !" > told

COPY file .\
ENTRYPOINT [ "cat" , "./test " ]
