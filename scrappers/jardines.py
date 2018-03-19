import sys
from os import path
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )

import re
from modules import request
from modules import files

def main():
	data = {}
	soup = request.get_content_parsed("https://guia-capital-federal.escuelasyjardines.com.ar/guia-jardines-de-infantes-en-capital-federal-belgrano.htm")
	paginas = parsePaginator(soup)
	data["jardines"] = parseJardines(soup)
	data["paginas"] = paginas
	for pagina in paginas:
		data["jardines"] = data["jardines"] + parseJardinesPerPage(pagina)
	files.save_as_json_2('jardines.json', data)

def parseJardines(soup):
	jardines = []
	lista = soup.find("ul", class_="lista-indice").find_all("li")
	for child in lista:
		data = {}
		anchor = child.find("a")
		if(anchor):
			data["additionalInfo"] = anchor["href"]
			data["nombre"] = anchor.text
			data["info"] = re.sub('\s+', ' ', child.find("p").text)
			jardines.append(data)
	return jardines

def parseJardinesPerPage(pagina):
	soup = request.get_content_parsed(pagina)
	return parseJardines(soup)

def parsePaginator(soup):
	paginas = []
	anchorPaginas = soup.find("div", class_="paginator").find_all("a")
	for anchorPagina in anchorPaginas:
		paginas.append(anchorPagina["href"])
	return paginas[0: len(paginas) - 1]

if __name__ == "__main__":
    main()

