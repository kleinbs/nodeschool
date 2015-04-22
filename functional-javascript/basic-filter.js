function getShortMessages(messages) {
  	return messages.map(function(mes){
  		return mes.message;
  	}).filter(function(mes){
  		if(mes.length < 50)
  			return true
  		else
  			return false
  	})
}

module.exports = getShortMessages