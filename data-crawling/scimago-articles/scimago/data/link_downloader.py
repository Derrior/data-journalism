import os

link_format = 'http://www.scimagojr.com/countryrank.php?&{0}&year={1}&out={2}'
topics = {
    "molecular": "category=1311",
    "genetics": "category=1312",
    "physiology": "category=1314",
    "psychology": "area=3200"
}
years = range(2007, 2017)
out_format = "xls"


for i in topics.keys():
    os.system("mkdir -p " + i)
for i in topics.items():
    for j in years:
        os.system("wget '" + link_format.format(i[1], j, out_format) +
        "' -O ./{0}/{1}.{2}".format(i[0], j, out_format))


