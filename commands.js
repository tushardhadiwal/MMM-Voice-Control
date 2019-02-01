
function CommandManager(scope) {

	scope.registerCommand('list', function() {
		scope.sendNotification("SHOW_ALERT", {
			title: "",
			message: scope.readableCommands.commands.join("</p><p>"),
			timer: scope.config.listOfCommandsNotificationTime
		});
	});

	scope.registerCommand('sleep', function() {
		MM.getModules().enumerate(function(module) {
			module.hide(1000);
		});
	});

	scope.registerCommand('wake_up', function() {
		MM.getModules().enumerate(function(module) {
			module.show(1000);
		});
	});

	// scope.registerCommand('show_crowd_count', function() {
	// 	scope.sendNotification("HIDE_HEATMAP");
	// 	scope.sendNotification("SHOW_CROWD_COUNT");
	// });

	// scope.registerCommand('hide_crowd_count', function() {
	// 	scope.sendNotification("HIDE_CROWD_COUNT");
	// });

	// scope.registerCommand('show_heatmap', function() {
	// 	scope.sendNotification("HIDE_CROWD_COUNT");
	// 	scope.sendNotification("SHOW_HEATMAP");
	// });

	// scope.registerCommand('hide_heatmap', function() {
	// 	scope.sendNotification("HIDE_HEATMAP");
	// });

	// scope.registerCommand('show_nextcam', function() {
	// 	scope.sendNotification("SHOW_NEXT");
	// });

	// scope.registerCommand('show_section', function(num) {
	// 	scope.sendNotification("SHOW_SECTION", {pay: num});
	// });

	// scope.registerCommand('show_camera', function(cam) {
	// 	scope.sendNotification("SHOW_CAM", {pay: cam});
	// });

	scope.registerCommand('show_scam', function(cam) {
		scope.sendNotification("SHOW_CAM", {pay: cam});
	});
}
