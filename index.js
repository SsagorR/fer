var id = '#dollar1';
var idColor = '#dollar';

$('#dollar, #euro, #pound, #rubl').on('click', function(){
	$(id).fadeOut('fast');
	$(idColor).css('color', 'black');
	idColor = this;
	id = "#" + this.id + 1;
	$(this).css('color','rgb(230, 230, 230)');
	$(id).fadeIn('fast');
});
