const comments = document.querySelectorAll("#main-table-comments tr td:first-child");
const body = document.querySelector('body');


if (comments.length > 0) {
	for (let i = 0; i < comments.length; i++) {
		const comment = comments[i];
		comment.addEventListener("click", function(e) {
			const text = comment.textContent;
			popupOpen(text)
		})
	}
}

const popupCloseIcon = document.querySelector(".popup_close");
popupCloseIcon.addEventListener("click", function(e) {
	popupClose(document.querySelector("#popup"));
	e.preventDefault();
})

function popupClose(popupActive) {
	popupActive.classList.remove('opened');
	body.classList.remove('lock')
	body.style.paddingRight = 0
	popupActive.querySelector(".popup_body").style.marginRight = 0
	}	


function popupOpen(text) {
	lockPaddingValue = window.innerWidth - body.offsetWidth + 'px'
	body.classList.add('lock')
	body.style.paddingRight = lockPaddingValue

	const popup = document.querySelector("#popup");
	const popup_text = document.querySelector(".popup_text");
	popup_text.textContent = text
	document.querySelector(".popup_body").style.marginRight = lockPaddingValue
	popup.classList.add('opened')
	popup.addEventListener("click", function (e) {
		if (!e.target.closest(".popup_content")) {
			popupClose(e.target.closest('#popup'))
		}
	})
}
