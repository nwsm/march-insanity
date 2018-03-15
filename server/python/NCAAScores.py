import sys
import requests
import re
import urllib
import urllib2
import xlrd
import re
import os
import fnmatch
import datetime
from bs4 import BeautifulSoup
from lxml import html
import pandas as pd

def main():
    
    outputDataPathLocal = 'C:\\Users\\msedmon\\Desktop'
    outputDataPathRemote = '//apps//python//supplyChain//output_data'
    outputDataPath = outputDataPathLocal
    inputDataPath = outputDataPath
    
    #URL = 'http://www.espn.com/mens-college-basketball/scoreboard/_/date/20180305'
   
    date = str(datetime.datetime.now().date())
    year = date[:4]
    month = date[5:7]
    day = date[8:]
    YYYYMMDD = int(year + month + day)
    
    allMonths = ['01','02','03','04','05','06','07','08','09','10','11','12']
    allDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    columns = ['DATE', 'TeamName1', 'Score1', 'Winner1', 'TeamName2', 'Score2', 'Winner2']
    scores = pd.DataFrame(columns=columns)

    for i in range(0,12):
        scores = scores.append(getMonthScores(allMonths[i], allDays[i], YYYYMMDD), ignore_index=True)
    
    print(scores)
    return scores
    
def getMonthScores(month, numDays, YYYYMMDD):    
    date = ''
    day = ''
    
    columns = ['DATE', 'TeamName1', 'Score1', 'Winner1', 'TeamName2', 'Score2', 'Winner2']
    scores = pd.DataFrame(columns=columns)
    for j in range(1, numDays+1):
        if(j < 10):
            day = '0' + str(j)
        else:
            day = str(j)
        date = '2018' + month + day
        if( int(date) >= YYYYMMDD or int(date) < 20180311 ):
            continue
        else:
            scores = scores.append(getDayScores(date), ignore_index=True)
    return scores;
    
def getDayScores(date):    
    URL = 'http://www.espn.com/mens-college-basketball/scoreboard/_/date/' + str(date)
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'lxml')
    script = soup.find(text = lambda L: L and L.startswith('window.espn.scoreboardData'))   

    list1 = script.split(',')
    list2 = [x.replace('"', '').encode('utf-8') for x in list1]
    
    list3 = []
    for elem in list2:
        if( ':' not in elem): 
            continue
        else:
            list3.append(elem.split(':'))

    columns = ['DATE', 'TeamName1', 'Score1', 'Winner1', 'TeamName2', 'Score2', 'Winner2']
    scores = pd.DataFrame(columns=columns)
    tempScores = []
    
    for i, elem in enumerate(list3):
        if(len(tempScores) == 7):
            scores.loc[0] = tempScores
            tempScores = []
        if(len(tempScores) == 0):
            tempScores.append(date)
        if(elem[0] == 'displayName'):
            tempScores.append(elem[1])
        elif(elem[0] == 'score'):
            tempScores.append(elem[1])
        elif(elem[0] == 'winner'):
            tempScores.append(elem[1])
    return scores;

if __name__ =='__main__' :
    main = main()