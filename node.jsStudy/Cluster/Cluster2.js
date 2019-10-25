/**
 * 
 * 클러스터의 동작이 각각 다를경우 여러개의 모듈을 생성하여
 * 각각 Round Robin 방식으로 스케쥴링해주고 
 * function을 달리하면 된다.
 */

var cluster1 = require('cluster');
cluster1.schedualingPolicy = cluster1.SCHED_RR;

var cluster2 = require('cluster');
cluster2.schedualingPolicy = cluster2.SCHED_RR;

var cluster3 = require('cluster');
cluster3.schedualingPolicy = cluster3.SCHED_RR;

if(cluster1.isMaster == true) {
	
	cluster1.fork();
	cluster2.fork();
	cluster3.fork();
	
	cluster1.on('online', function(worker){
		for(var i = 0; i < 2; i++) {
			console.log(worker.process.pid, "동작1");
		}
	});
	
	cluster2.on('online', function(worker){
		for(var i = 0; i < 2; i++) {
			console.log(worker.process.pid, '동작2');
		}
	})
}
