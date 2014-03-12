from scrapy.spider import Spider
from scrapy.selector import Selector
from liftScrape.items import liftItem
import string
from scrapy.http import Request

def getAllPossibleURLS():
    results = []
    base = 'http://www.bodybuilding.com/exercises/list/index/selected/'
    for letter in string.lowercase:
        results.append(base + letter)
    return results
 
def containsAttr(a):
    typeArr = ["Type", "Main Muscle Worked", "Equipment", "Mechanics Type", "Level", "Sport", "Force"]
    for item in typeArr:
        if item in a:
            return True
    return False

class LiftSpider(Spider):
    name = "body"
    def __init__(self, category=None, *args, **kwargs):
        super(Spider, self).__init__(*args, **kwargs)
        self.name = "body"
        self.allowed_domains = ["bodybuilding.com"]
        self.start_urls = ['http://www.bodybuilding.com/exercises/list/index/selected/a',
        'http://www.bodybuilding.com/exercises/list/index/selected/b',
        'http://www.bodybuilding.com/exercises/list/index/selected/c',
        'http://www.bodybuilding.com/exercises/list/index/selected/d',
        'http://www.bodybuilding.com/exercises/list/index/selected/e',
        'http://www.bodybuilding.com/exercises/list/index/selected/f',
        'http://www.bodybuilding.com/exercises/list/index/selected/g',
        'http://www.bodybuilding.com/exercises/list/index/selected/h',
        'http://www.bodybuilding.com/exercises/list/index/selected/i',
        'http://www.bodybuilding.com/exercises/list/index/selected/j',
        'http://www.bodybuilding.com/exercises/list/index/selected/k',
        'http://www.bodybuilding.com/exercises/list/index/selected/l',
        'http://www.bodybuilding.com/exercises/list/index/selected/m',
        'http://www.bodybuilding.com/exercises/list/index/selected/n',
        'http://www.bodybuilding.com/exercises/list/index/selected/o',
        'http://www.bodybuilding.com/exercises/list/index/selected/p',
        'http://www.bodybuilding.com/exercises/list/index/selected/q',
        'http://www.bodybuilding.com/exercises/list/index/selected/r',
        'http://www.bodybuilding.com/exercises/list/index/selected/s',
        'http://www.bodybuilding.com/exercises/list/index/selected/t',
        'http://www.bodybuilding.com/exercises/list/index/selected/u',
        'http://www.bodybuilding.com/exercises/list/index/selected/v',
        'http://www.bodybuilding.com/exercises/list/index/selected/w',
        'http://www.bodybuilding.com/exercises/list/index/selected/x',
        'http://www.bodybuilding.com/exercises/list/index/selected/y',
        'http://www.bodybuilding.com/exercises/list/index/selected/z',
        'http://www.bodybuilding.com/exercises/list/index/selected/#'
        ]

    def parse(self, response):
        sel = Selector(response)
        if 'selected' in str(response):
            sites = sel.css('h3 a::attr(href)')
            arr = []
            for site in sites:
                arr.append(str(site.extract()))

            temp = []
            for x in arr:
                if "http" in x:
                    temp.append(x)
            arr = temp

            for url in arr:
                yield Request(url, callback=self.parse)
        else:
            titles = sel.xpath('//h1/text()');       #css('div(contains(text))')
            # print titles
            attrStr = ""
           
            for title in titles:
                temp = title.extract()
                if containsAttr(temp):
                    attrStr = temp
                item = liftItem()
                name  = temp;

            # attributes = sel.xpath('//div[@id= "exerciseDetails"]/*/*/text()');  
            # i = 0
            # pictures = sel.xpath('//div[@class = "exercisePhotos"]//img/@src');
            # descriptions = sel.xpath('//div[@class = "guideContent"]/*/*/text()');
            # for attr in attributes:
            #     print "\nattr[" + i + "] = "
            #     print attr
            #     print "\n"
            #     i+=1
            
            item['name'] = str(titles.extract()[0].strip())
            # item['excerciseType'] = str(attributes.extract()[0].strip()) 
            # item['mainMuscle'] = str(attributes.extract()[1].strip()) #str(attributes)#str(response)[2]
            # item['pictureOne'] = str(pictures.extract()[0].strip())
            # item['pictureTwo'] = str(pictures.extract()[2].strip())
            # item['description'] = str(descriptions.extract()[0].strip());
            
            # print item['name'];
            yield item
#With advice and help from Addison