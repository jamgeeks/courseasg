# run config file first
# DB svc -> reference DB Pod
# App svc -> reference App Pod
# `kubectl get ep -nbggns` -> bggapp - 3 endpoints, bggdb - 1 endpoint
# when using ClusterIP, have to use port forwarding to access the webpage
  `kubectl get all -nbggns -owide` -> retrieve cluster IP, retrieve svc port
  cluster IP:target port -> access application
# when using NodePort, it creates a port on each node and exposes them to public
  `kubectl get nodes -nbggns -owide` -> retrieve node external IP
  `kubectl get all -nbggns -owide` -> retrieve svc port
  external IP:target port -> access application
# when using LoadBalancer, it creates a LB with IP address and exposes it to public
  `kubectl get all -nbggns -owide` -> retrieve external IP/ via digital ocean dashboard
  `kubectl get all -nbggns -owide` -> retrieve svc port
  external IP:target port -> access application
  *if svc port is 80 do not need to append port number
# use following to check liveness or readiness of pod
  `kubectl describe pod_name`