Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;
  return function (args) {
    if (!(args instanceof Array)) {
      args = [args];
    }
    self.apply(target, args);
  };
};
	<script src="bind_polyfill.js"></script>
	<script src="classlist_polyfill.js"></script>
	<script src="animframe_polyfill.js"></script>
	<script src="keyboard_input_manager.js"></script>
	<script src="html_actuator.js"></script>
	<script src="grid.js"></script>
	<script src="tile.js"></script>
	<script src="local_storage_manager.js"></script>
	<script src="game_manager.js"></script>
	<script src="application.js"></script>