const filteringModalElement = document.getElementById('filtering-modal-el');

$('.close-filtering-modal').click(closeModalHandler);
$('.show-filtering-modal').click(showModalHandler);

function closeModalHandler() {
	$(filteringModalElement).hide();
}

function showModalHandler() {
	$(filteringModalElement).show();
}
