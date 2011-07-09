// (c) 2011 Łukasz Twarogowski, Axiom Computing, axiomcomputing.pl 




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