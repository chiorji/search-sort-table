const generateAndSeedHtmlTableHead = (table, headerText) => {
	let thead = table.createTHead()
	thead.classList.add('thead-light')
	let row = thead.insertRow()

	for (let data of headerText) {
		let th = document.createElement('th')
		let text = document.createTextNode(data)
		th.appendChild(text)
		row.appendChild(th)
	}
}

const generateTableBodyText = (table, bodyText) => {
	let tbody = table.createTBody()
	var i = 0
	for (let elem of bodyText) {
		let row = tbody.insertRow()
		row.classList.add(bodyText[i].status.toLowerCase())

		for (let key in elem) {
			let cell = row.insertCell()
			let text = document.createTextNode(elem[key])
			cell.appendChild(text)
		}
		i++
	}
}

let tableList = document.querySelector('table#status-list')
generateAndSeedHtmlTableHead(tableList, ['Name', 'Output', 'Status'])
generateTableBodyText(tableList, list)
