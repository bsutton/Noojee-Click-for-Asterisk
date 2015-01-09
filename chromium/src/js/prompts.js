/**
 * Copyright 2012 Brett Sutton
 * (Adapted for Google Chrome by Sven Werlen)
 *
 * This file is part of Noojee Click.
 * 
 * Noojee Click is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the 
 * Free Software Foundation, either version 3 of the License, or (at your 
 * option) any later version.
 * 
 * Noojee Click is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License 
 * for more details.
 * 
 * You should have received a copy of the GNU General Public License along 
 * with Noojee Click. If not, see http://www.gnu.org/licenses/.
 **/

noojeeClick.ns(function() { with (noojeeClick.LIB) {

theApp.prompts =
{

	njAlert: function (msg)
	{
		alert(msg);
	},

	njPrompt: function (msg, defaultValue)
	{
		var result = prompt(msg, defaultValue);
		// input.value is the string user entered
		// result - whether user clicked OK (true) or Cancel

		var OK = true;
		if (result == null)
			OK = false;
		
		return {value: result, OK:OK};
	}

};

}});