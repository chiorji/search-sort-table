const sortTable = tableToSort => {
  tableToSort = document.querySelector('table#status-list')
	let rows
	let shouldSwitch
	let switching = true
	let rowAbove
	let rowBelow

	// loop till no switching done
	while (switching) {
		// Start by saying: no switching is done:
		switching = false
		rows = tableToSort.rows

		// loop through table rows excluding headers
		for (var i = 1; i < rows.length - 1; i++) {
			// Don't switch yet
			shouldSwitch = false

			//  get elements to switch places
			// first from the current row
			// second from the next row
			rowAbove = rows[i].getElementsByTagName('TD')[0]
			rowBelow = rows[i + 1].getElementsByTagName('TD')[0]

			// Compare their text context
			if (
				rowAbove.innerHTML.toLowerCase() > rowBelow.innerHTML.toLowerCase()
			) {
				// If true, switch and break loop
				shouldSwitch = true
				break
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
			switching = true
		}
	}
}

let sortButton = document.querySelector('#sort-list')
let domTable = document.querySelector('table#status-list')
sortButton.addEventListener('click', sortTable, false)
