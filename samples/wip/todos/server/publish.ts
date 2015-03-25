///<reference path="../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/meteor.d.ts" />
///<reference path="../collections.d.ts"/>

// Lists -- {name: String}

// Publish complete set of lists to all clients.
Meteor.publish('lists', function() {
	return Lists.find();
});

// Todos -- {text: String,
//           done: Boolean,
//           tags: [String, ...],
//           list_id: String,
//           timestamp: Number}

// Publish all items for requested list_id.
Meteor.publish('todos', function(list_id:string) {
	check(list_id, String);
	return Todos.find({list_id: list_id});
});

