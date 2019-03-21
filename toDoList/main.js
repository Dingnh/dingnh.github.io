
function saveTask(e){
	var taskName = doucment.getElementById("taskName").value;
	var taskDescription = document.getElementById("taskDescription").value;
	
	var tasks = {
		name:taskName,
		description:taskDescription
	}

	if(localStorage.getItem('tasks')==null){
		var task = []; 
		task.push(tasks);
		localStorage.setItem('task',JSON.stringyfy(task));
	}else{
		var myTask = localStorage.getItem('task',JSON.parse(task)); myTask.push(task);

		localStorage.setItem('task',JSON.stringyfy(myTask));
	}
}

function fetchTask(){
	var task = JSON.parse(localStorage.getItem('task'));

	var taskResult = document.getElementById('taskResult');
	taskResult.innerHTML ="";
	
	
	for(var i=0; i<task.length; i++){

		var name = task[i].name;
		var description = task[i].description;

		taskResult.innerHTML+='<div class="well"><h3>'+name+' '+description+' </h3>'
			'</div>'		
	}
}
document.getElementById('myForm').addEventListener('submit', saveTask);