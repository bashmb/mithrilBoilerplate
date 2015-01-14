(function () {

  window.ToDoApp = {}

  ToDoApp.vm = {
  	todos: m.prop([])
  }
  ToDoApp.find = function(id){
  	var todos = ToDoApp.vm.todos()
  	for (var i=0; i < todos.length; i++) {
  		if (todos[i].id === id) return todos[i]
  	}
  }
  ToDoApp.controller = function () {
    var ctrl = {}
    ctrl.updateTodo = function (id, isComplete) {
    	var todo = ToDoApp.find(id)
    	todo.isComplete = isComplete
    	// ...
    }
    ctrl.flip = function () {
    	ToDoApp.vm.todos().forEach(function (todo){
    		todo.isComplete = !todo.isComplete
    	})
    }
    return ctrl
  }

  ToDoApp.view = function (ctrl) {
    return m('.todos', 
  	[ToDoApp.vm.todos().map(toDoView),
  	m('button', { onclick: ctrl.flip }, "flip all")
 ]) 	

  function toDoView (todo) {
  	return m('.todo', [
  		// Checkbox
  		m('input[type=checkbox]', {
  			checked: todo.isComplete,
  			onchange: ctrl.updateTodo.bind(null, todo.id, !todo.isComplete)
  		})
  		// Label
  		// m('label', todo.name)
  		// Bind click action to ctrl

  		])
  	}
	}
})()
