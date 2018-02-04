# -*- coding: utf-8 -*-
import scrapy


class MolecularAndGeneticsSpider(scrapy.Spider):
    name = 'molecular_and-genetics'
    allowed_domains = ['scimagojr.com']
    start_urls = ['http://www.scimagojr.com/countryrank.php?area=1300&year={0}&out=xls'.format(i) for i in
            range(2007, 2017)]

    def parse(self, response):
        pass
