# VR-Api Sivu

Sovellus jolla voi VR:n API:a käyttämällä hakea saapuvat ja lähtevät junat aseman mukaan. 
Sovellus on tehty Semantic UI-frameworkia ja jQuery-kirjastoa käyttäen. 
Lähdekoodissa on CDN-linkit ulkoisiin kirjastoihin, joten mitään erillisiä ohjelmistoja ei tarvitse asentaa. 


**HUOM!HUOM!**

Sovellus ei ole toiminnoiltaa täysin valmis. Siinä on kuitenkin puutteellisesti toimiva hakuominaisuus.
Jos haluaa hakea saapuvia ja lähteviä junia, hakukenttään tulee kirjoittaa aseman lyhennekoodi. 
Esim. Tampereelle tulevat/lähtevät junat saa kirjoitamalla hakukenttään --> TPE -ja paina enter.
Junat näkyy aseman lyhenteiden mukaan ja saapumisaikana on "placeholderina" JSON tiedostosta otettu
ensimmäisen pysäkin aika (eli ei oikea aika joka tulisi olla haetun aseman mukaan).


## Puuttuvat toiminnallisuudet
- Haku aseman nimellä (nyt aseman lyhennekoodilla)
- Lähtö ja pääteasemien esittäminen asemien nimillä
- Aseman saapumisaika
- Junien filtteröiminen ( nyt listautuu myös tavarajunat)
- Taulukon esittäminen dynaamisemmin (nyt uusi haku lisää taulukkoon soluja päivittämisen sijaan)


