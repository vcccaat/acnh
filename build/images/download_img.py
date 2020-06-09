# -*-coding: utf-8 -*

import requests
import os
 
def downImg(imgUrl, dirpath, imgName):
	filename = os.path.join(dirpath, imgName)
	try:
		res = requests.get(imgUrl,timeout=15)
		if str(res.status_code)[0] == "4":
			print(str(res.status_code), ":" , imgUrl)
			return False
	except Exception as e:
		print("Detect anomaly：", imgUrl)
		print(e)
		return False
	with open(filename, "wb") as f:
		f.write(res.content)
	return True
 
def download_url_image():
	numberOfImage = {'fish':80,'bugs':80,'villagers':392}
	categories = ['fish','bugs','villagers']
	for category in categories:
		out_dir="./"+category 
		url = "https://acnhapi.com/v1/images/"+category
		for i in range(1,numberOfImage[category]+1):
			image_url = url + str(i)
			image_name = str(i) + ".png"
			try:
				downImg(image_url,out_dir,image_name)
				print('Image',i)
			except:
				print("Download failed：",image_url)
				continue

if __name__ == '__main__':
	download_url_image()
