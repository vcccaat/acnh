
# -*-coding: utf-8 -*
import json
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
		print("抛出异常：", imgUrl)
		print(e)
		return False
	with open(filename, "wb") as f:
		f.write(res.content)
	return True
 
#读取txt数据函数
def download_url_image(out_dir):
	furniture_json = '/Users/sze/Desktop/AnimalCrossingDB/src/data/furnitures.json'
	with open(furniture_json,'r') as f:
		items = json.load(f)

	filename = []
	for item in items.items():
		# print(item)
		for variant in item[1]:
			# print(variant)
			filename.append(variant['file-name'])
			break;
	# print(filename)
	print("length",len(filename))

	url = "https://acnhapi.com/v1/images/furniture/"
	for i in range(0,len(filename)):
		image_url = url + filename[i]
		image_name = filename[i] + ".png"
		try:
			downImg(image_url,out_dir,image_name)
			print('image',i)
		except:
			print("下载失败：",image_url)
			continue

if __name__ == '__main__':
	out_dir="/Users/sze/Desktop/AnimalCrossingDB/public/images/furnitures"
	download_url_image(out_dir)
