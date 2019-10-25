/**
 * Cluster
 * - 병렬 처리를 위한 모듈이다.
 * - 작업 단위를 worker라고 한다.
 * - cluster 모듈 생성 후 fork 메서드를 호출하면 worker 하나가 생성되며
 *   필요한만큼 worker를 생성해 병렬처리를 하면 된다.
 * - 보통 cpu 코어 수 만큼 worker를 발생시켜 병렬처리 한다.
 */

 var cluster = require('cluster');

 // Round Robin 방식으로 스케줄링하겠다.
 cluster.schedualingPolicy = cluster.SCHED_RR;
 
//마스터가 아니면 worker로써 시분할 방식으로 처리된다.(마스터는 병렬처리)
 if(cluster.isMaster == true) {
     // 3개의 작업을 병렬처리.
     cluster.fork();
     cluster.fork();
     cluster.fork();

     // 클러스터에 대해 online이 발생하면 함수(수행할 내용) 실행
     // pid : 각각의 worker를 구분할 수 있는 값
     cluster.on('online', function(worker){
         for(var i = 0; i < 10; i++) {
             console.log(worker.process.pid, "동작");
         }
     });
 }