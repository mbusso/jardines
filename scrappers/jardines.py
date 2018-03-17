import sys
from os import path
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )

from modules import request
from modules import files

def main():
	soup = request.get_content_parsed("https://guia-capital-federal.escuelasyjardines.com.ar/guia-jardines-de-infantes-en-capital-federal-belgrano.htm")
	jardines = parse(soup)
	files.save_as_json('jardines.json', jardines)

def parse(soup):
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

if __name__ == "__main__":
    main()

