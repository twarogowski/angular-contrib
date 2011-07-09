// (c) 2011 Łukasz Twarogowski, Axiom Computing, axiomcomputing.pl 



// autocompletePresets service
// simple service for storing options (presets for different ui:autocomplete instances
// methods:
// get(name) - gets a preset object for a given name
// add(options) - merges current presets with given argument
// add(name, opt1, opt2, ...) - adds a new set of options for a given name. opt_ parameters may be a string 
// (refering to another preset by its name) or an object graph. all opt_ parameters are merged.
angular.service('autocompletePresets', function() {
	var presets = {};
	return {
		add: function(name){
			if(!arguments.length)
				return;
			else if(arguments.length == 1 && angular.isObject(name))
				$.extend(presets, name);
			else if(arguments.length > 1){
				var preset = {}, obj;
				for (var i = 1; i < arguments.length; i++) {
					if(angular.isObject(arguments[i]))
						obj = arguments[i];
					else if(angular.isString(arguments[i]))
						obj = this.get(arguments[i]) || {};
					$.extend(preset, obj);			
					};
				presets[name] = preset;	
			}
		},
		get: function(name){
			if(!name)
				return null;
			return presets[name];	
		}
	};
});