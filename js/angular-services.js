/**
 * The MIT License
 *
 * Copyright (c) 2011 Łukasz Twarogowski, Axiom Computing, axiomcomputing.pl 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



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