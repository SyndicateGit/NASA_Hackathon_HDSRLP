
# importing the library
import requests
from bs4 import BeautifulSoup

def weather_check(t, s, w):
    results = [
        "Weather conditions look great",
        "A real-life launch would be postponed",
        "It's a bit cold today",
        "Spaceship launches prefer clear skies",
        "Wind conditions or otherwise might make launch more difficult"
    ]
    s = s.strip()
    w = w.strip()
    temp_int = ""
    
    for i in range(len(t)):
        if t[i].isdigit():
            temp_int += t[i]
    
    temp_int = int(temp_int)

    if s == "Sunny" and temp_int >= 20 and w == ".":
        print(results[0])
    else:
        print(results[1])

        if temp_int < 20:
            print(results[2])
        if s != "Sunny":
            print(results[3])
        if w != ".":
            print(results[4])
    
    # results = [
    #     "Weather conditions look great",
    #     "A real-life launch would be postponed",
    #     "\nIt's a bit cold today",
    #     "\nSpaceship launches prefer clear skies",
    #     "\nWind conditions or otherwise might make launch more difficult"
    # ]
    # final = ""
    # temp_check = False
    # temp_int = ""
    
    # for i in range(len(t)):
    #     if t[i].isdigit():
    #         temp_int += t[i]
    # if int(temp_int) >= 15:
    #     temp_check = True
    # sky_check = False
    # if s.strip() == "Sunny":
    #     sky_check = True
    # other_check = False
    # if w.strip() == ".":
    #     other_check = True

    # if t == True and s == True and w == True:
    #     return results[0]
    # else:
    #     final += results[1]
    #     if t == False:
    #         final += results[2]
    #     if w == False:
    #         final += results[3]
    #     if s == False:
    #         final += results[4]
    #     return final


# enter city name

city = input("Which city would you like to check? ")
 
# create url
url = "https://www.google.com/search?q="+"weather"+city
 
# requests instance
html = requests.get(url).content
 
# getting raw data
soup = BeautifulSoup(html, 'html.parser')


# get the temperature
temp = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
 
# this contains time and sky description
str = soup.find('div', attrs={'class': 'BNeawe tAd8D AP7Wnd'}).text
 
# format the data
data = str.split('\n')
time = data[0]
sky = data[1]


# list having all div tags having particular class name
listdiv = soup.findAll('div', attrs={'class': 'BNeawe s3v9rd AP7Wnd'})
 
# particular list with required data
strd = listdiv[5].text
 
# formatting the string
pos = strd.find('Wind')
other_data = strd[pos:]


# printing all the data
print("Temperature is", temp)
print("Time: ", time)
print("Sky Description: ", sky)
print(other_data)

# print(weather_check(temp, sky, other_data))

weather_check(temp, sky, other_data)

