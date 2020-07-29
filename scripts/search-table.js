const myFunction = () => {
	// Declare variables
	let input, filter, table, tr, td, i, txtValue
	input = document.querySelector('#search-name')
	filter = input.value.toUpperCase()
	table = document.querySelector('table#status-list')
	tr = table.getElementsByTagName('tr')

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName('td')[0]
		if (td) {
			txtValue = td.textContent || td.innerText
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = ''
			} else {
				tr[i].style.display = 'none'
			}
		}
	}
}

let searchNameInput = document.querySelector('#search-name')
searchNameInput.addEventListener('change', myFunction, false)
searchNameInput.addEventListener('input', myFunction, false)
