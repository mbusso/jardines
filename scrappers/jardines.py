import sys
from os import path
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )

from modules import request
from modules import files

def main():
	soup = request.get_content_parsed("https://guia-capital-federal.escuelasyjardines.com.ar/guia-jardines-de-infantes-en-capital-federal-belgrano.htm")
	jardines = parseJardines(soup)
	paginas = parsePaginator(soup)
	data = {}
	data["jardines"] = jardines
	data["paginas"] = paginas
	files.save_as_json('jardines.json', data)

def parseJardines(soup):
	jardines = []
	lista = soup.find("ul", class_="lista-indice").find_all("li")
	for child in lista:
		data = {}
		anchor = child.find("a")
		if(anchor):
			data["additionalInfo"] = anchor["href"]
			data["nombre"] = anchor.text
			data["info"] = child.find("p").text #clean
			jardines.append(data)
	return jardines

def parsePaginator(soup):
	paginas = []
	anchorPaginas = soup.find("div", class_="paginator").find_all("a")
	for anchorPagina in anchorPaginas:
		paginas.append(anchorPagina["href"])
	return paginas[0: len(paginas) - 1]

if __name__ == "__main__":
    main()

