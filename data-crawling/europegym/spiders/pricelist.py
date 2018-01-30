# -*- coding: utf-8 -*-
import scrapy


class PricelistSpider(scrapy.Spider):
    name = 'pricelist'
    allowed_domains = ['europegym.ru']
    start_urls = ['https://www.europegym.ru/centers/prices/{0}.html'.format(i) for i in range(23)]

    def parse(self, response):
        print('\n\n\n'.join(map(str, response.css(".price_roub").xpath("./div/text()"))))

