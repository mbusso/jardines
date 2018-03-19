import sys
from os import path
sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )

import re
import time
from modules import request
from modules import files


def main():
	jardines = files.readJsonFile("jardines.json")["jardines"]
	info = []
	for jardin in jardines:
		info.append(getAdditionalInfo(jardin))
		time.sleep(5)
	files.save_as_json_2('jardinesInfoDetallada.json', info)


def getAdditionalInfo(jardin):
	jardinInfo = {}
	soup = request.get_content_parsed(jardin["additionalInfo"])
	detalles = parse(soup)
	jardinInfo["url"] = jardin["additionalInfo"]
	jardinInfo["info"] = detalles
	return jardinInfo

def parse(soup):
	info = []
	div = soup.find("div", class_= "descripcion-escuela")
	p = div.find_all("p")
	h3 = div.find_all("h3")
	elements = p + h3
	for element in elements:
		text = element.getText().strip()
		if(text != "" and text[-1:] != ":"):
			info.append(re.sub('\s+', ' ', text))		
	return info[0:len(info) -1]

if __name__ == "__main__":
    main()