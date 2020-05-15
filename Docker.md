# Docker Learning

- Docker (what, why, how)
- Docker Engine
  - Images
  - Container
  - Network
- Distribution tools
  - Docker Registry
  - Docker Trusted Registry
  - Docker Hub
- Orchestration tools
  - Docker Machine
  - Docker Swarm
  - Docker Compose
- Build

## Linux container

**Concepts in this exercise**
* [Docker engine](#docker-engine)
* [Container & images](#container-images)
* [Image registries and Docker Store](#Dockerhub)
* [Container isolation](#container-isolation)

### Docker

[Docker documents](https://docs.docker.com/)

- What:

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

With Docker, you can manage your infrastructure in the same ways you manage your applications.


**History**
![History](https://s3-ap-southeast-1.amazonaws.com/kipalog.com/m948zq71ec_docker%20history%20in%20one%20image.png)
  - What
  - Why
  - How
### Docker Engine
Docker Engine is a client-server application with these major components:

- A server which is a type of long-running program called a daemon process (the dockerd command).

- A REST API which specifies interfaces that programs can use to talk to the daemon and instruct it what to do.

- A command line interface (CLI) client (the docker command).

![Docker engine](https://docs.docker.com/engine/images/engine-components-flow.png)

    
### Distribution tools
  - Docker Registry
  - Docker Trusted Registry
  - Docker Hub

### Orchestration tools
  - Docker Machine
  - Docker Swarm
  - Docker Compose

### Tools for local environments
  - Docker Toolbox
  - Docker for Mac and Docker for Windows

