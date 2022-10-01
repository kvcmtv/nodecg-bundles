'use strict';

module.exports = function (nodecg) {
	nodecg.Replicant('scores', {defaultValue: [
		{
			'name': 'Monarchs',
			'score': 0,
			'main': "#FFFFFF",
			"text": "#000000"
		},
		{
			'name': 'Away',
			'score': 0,
			'main': "#000000",
			"text": "#FFFFFF"
		}
	]});
};
