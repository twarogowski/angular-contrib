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



// for testing only: shows in a bound datepicker a year ahead from given date 
angular.formatter('nextYear', {
	parse: function(value){
		var v = new Date(value.valueOf());
		v.setYear(v.getFullYear()-1);
		return v;
	},
	format: function(value){
		var v = new Date(value.valueOf());
		v.setYear(v.getFullYear()+1);
		return v;
	}
});

// for testing only: displays in a bound datepicker a date with a specified amount of months added to it
angular.formatter('addDate', {
	parse: function(value, years, months, days){
		var v = new Date(value.getFullYear() - parseFloat(years || 0), value.getMonth() - parseFloat(months || 0), value.getDate() - parseFloat(days || 0));
		return v
	},
	format: function(value, years, months, days){
		var v = new Date(value.getFullYear() + parseFloat(years || 0), value.getMonth() + parseFloat(months || 0), value.getDate() + parseFloat(days || 0));
		return v
	}
});

angular.formatter('addNumber', {
	parse: function(value, number){
		return value + number;
	},
	format: function(value, number){
		return value - number;
	}
});

angular.formatter('emblem', {
	parse: function(value, symbol){
		return value == (symbol || '');
	},
	format: function(value, symbol){
		return value ? symbol : '';
	}
});

angular.formatter('not', {
	parse: function(value){
		return !(value || false);
	},
	format: function(value){
		return !(value || false);
	}
});