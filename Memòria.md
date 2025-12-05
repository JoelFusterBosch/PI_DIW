# Redisseny d'un servei de l'ajuntament
## Index
- [1.Introducció de la memòria](#introducció-de-la-memòria)
- [2.Tecnologies utilitzades](#tecnologies-utilitzades)
    * [2.1.HTML](#html)
    * [2.2.CSS](#css)
    * [2.3.JavaScript](#javascript)
    * [2.4 VSCode](#vscode)
    * [2.5 Github](#github)
- [3.Apartats a redissenyar i implementació](#apartats-a-redissenyar-i-implementació)
    * [3.1.Apartats del formulari a emplenar](#apartats-del-formulari-a-emplenar)
    * [3.2.Reserves disponibles](#reserves-disponibles)
- [Bibliografia](#bibliografia)
##  Introducció de la memòria
Este projecte tracta de redissenyar un apartat de la pàgina web d'un ajuntament fictici anomenat **VillaBlanca**, en el cas del nostre grup conformat per Ivan Atienza Moya i Joel Fuster Bosch, redissenyarem l'apartat de reserva d’equipaments municipals.
## Tecnologies utilitzades
### HTML
<p align= "center">
    <img src="./imatges/Memòria/logos/HTML.png" alt="HTML" width="300"/>
 </p>
<p align="center"><em>Fig 1: Logo de HTML</em></p> 

HTML, també conegut com **HyperText Markup Language** és un llenguatge de marques que dona forma a les pàgines web i és molt utilitzat al voltant del mon, originat en 1991, per `Tim Berners-Lee` descriu 18 elements que 13 d'ells continuarien en HTML4, però no formalment reconeguda fins a mitjans de 1993.

HTML és un llenguatge de marcat que possibilita definir l'estructura del nostre document mitjançant etiquetes. Este llenguatge oferix una gran adaptabilitat, una estructuració lògica i és fàcil d'interpretar tant per humans com per màquines.

En este projecte l'hem utlitzat perque ens facilita la creació del contingut de la pàgina web, encara que de forma estàtica.

### CSS
<p align= "center">
    <img src="./imatges/Memòria/logos/CSS.png" alt="CSS" width="300"/>
 </p>
<p align="center"><em>Fig 2: Logo de CSS</em></p> 

CSS, també conegut com **Cascading Style Sheets** és un llenguatge de fulls d'estil utilitzat per descriure la semàntica de presentació (l'aspecte i format) d'un document escrit en un llenguatge de marques. La seva aplicació més comuna és dissenyar pàgines web escrites en HTML i XHTML, però el llenguatge també pot ser aplicat a qualsevol classe de document XML, incloent-hi SVG i XUL. 

CSS va ser proposat per primera vegada per `Håkon Wium Lie` el 10 d'octubre de 1994.​ Al mateix temps, Lie treballava amb Tim `Berners-Lee` en el CERN.​ Molts altres llenguatges de fulls d'estils van ser propossats al mateix temps, i les discussions en les llistes de correu públiques dins del W3C van donar lloc a la primera Recomanació **CSS** pel **W3C** (CSS1)​ en 1996. En particular, la proposta de `Bert Bos` va ser influent; ell va ser el coautor de CSS1 i és reconegut com el cocreador de CSS.

Hem usat CSS per a donar-li estil al HTML i per a poder ocultar els camps especifics del formulari, aprofundirem 

### JavaScript
<p align= "center">
    <img src="./imatges/Memòria/logos/JavaScript.png" alt="JavaScript" width="300"/>
 </p>
<p align="center"><em>Fig 3: Logo de JavaScript</em></p> 
JavaScript (abreujat comunment JS) és un llenguatge de programació interpretat, dialecte de l'estàndard ECMAScript. Es definix com orientat a objectes,​ basat en prototips, imperatiu, feblement tipat i dinàmic.

JavaScript va ser desenvolupat originalment per `Brendan Eich` de **Netscape** amb el nom de `Mocha`, el qual va ser canviat de nom posteriorment a `LiveScript`, per a finalment quedar com JavaScript. El canvi de nom va coincidir aproximadament amb el moment que **Netscape** va afegir compatibilitat amb la tecnologia `Java` en el seu navegador web `Netscape Navigator` en la versió 2002 al desembre de 1995. La denominació va produir confusió, fent l'efecte que el llenguatge és una prolongació de `Java`, i va ser considerada per molts com una estratègia de màrqueting de Netscape per a obtindre prestigi i innovar en l'àmbit dels nous llenguatges de programació web.

Hem utilitzat JavaScript per a donar-li dinamisme a la pàgina web de HTML per a transformarla d'una web estàtica a una web dinàmica, junt amb controladors per a habilitar/deshabilitar camps especifics en el formulari com per a reiniciar les dades.

### VSCode
<p align= "center">
    <img src="./imatges/Memòria/logos/VSCode.png" alt="VSCode" width="300"/>
 </p>
<p align="center"><em>Fig 4: Logo de VSCode</em></p> 

Visual Studio Code llançat el 18 de novembre de 2015 és un editor de text pla desenvolupat per Microsoft de codi obert basat en Electron, un framework que s’ulitza per a implementar Chronium i NodeJS com a aplicacions d’escriptori, que s’executa en el motor de disseny Blink.

Hem usat VSCode degut a que és el IDE que més utilitzem per a la resta de mòduls, degut a que com és de codi obert i té moltissimes extensions utils per a facilitar la programació, implementació, depuració i altres eines per a la realització d'aquest projecte, com per exemple les llibreries de Git, així que ens ha ajudat molt per al control de versions Github, i programari del projecte.
**Utilització del grup**

### GitHub
<p align= "center">
    <img src="./imatges/Memòria/logos/Github.png" alt="VSCode" width="300"/>
 </p>
<p align="center"><em>Fig 5: Logo de Github</em></p>

Github, publicat en 2008 i desenvolupat amb Ruby on Rails és una forja (plataforma de desenvolupament col·laboratiu) per a allotjar projectes utlitzant el sistema de control de versions de Git. S’usa principalment per a la creació de codi font de programes d’ordinador.

**Utilització del grup**
Hem usat GitHub com a repositori public perquè qualsevolpersona puga veure el codi font del projecte, descarregar-lo o clonar-lo, junt amb que el grup pot anar posant la seua part del treball en la seua rama i després fusionar-lo amb facilitat

## Anàlisis de les possibles solucions
> [!Important]
    > En el projecte sols hem fet el frontend per la part del disseny de la aplicació, el qual era el objectiu usant les tecnologies de HTML i CSS pur, sense ningun framework, degut a que era una activitat del mòdul `Projecte Intermodular` de redissenyar una part de la pàgina d'un ajuntament, i sols és parlara del frontend degut a que eixe és el objectiu del projecte.
Com a possibles tecnologies que és podrien emprar per a la ressolució d'este projecte pot ser una bona opció podria ser usar frameworks com `Vue` per al frontend, que seria molt bona opció per a desenvolupar el frontend, però per a efectes pràctics del assignat en el mòdul de `Projecte Intermodular` ens conformarem amb una mescla de HTML, CSS i JavaScript pur, però igualment anem a fer una comparativa entre Vue i HTML, CSS i JavaScript pur:
### Vue vs HTML+CSS+JavaScript
#### Avantatges
| Avantatges HTML+CSS+JS         | Avantatges Vue                 |
|:-------------------------------|:-------------------------------|
| Molt simple                    | Components                     |
| Control total del DOM          | Reactivitat automàtica         |
| Sense dependències             | Escalabilitat                  |
| Molt lleuger                   | Eines modernes (CLI, Devtools) |

#### Desventatges

| Desavantatges HTML+CSS+JS      | Desavantatges Vue              |
|:-------------------------------|:-------------------------------|
| Difícil d'escalar              | Més complex al principi        |
| Actualització manual del DOM   | Major consum de recursos       |
| Arquitectura a càrrec del dev  | Corba d'aprenentatge més alta  |
      
### Apartats a redissenyar i implementació
Com bé hem dit en la introducció anem a redissenyar l'apartat de reserva d'equipament municipal, per a aconseguir este objectiu anem a crear un formulari per a que l'usuari vaja introduïnt les dades personals, la data i hora de reserva i el tipus d'equipament.

### Apartats del formulari a emplenar

El usuari final haura de posar en un formulari el següent:
- Nom
- Cognoms
- Adreça electrònica
- Número de telèfon
- Data i hora de reserva
- Tipus de equipament
- Comentaris

### Reserves disponibles

En l'aplicació web és podran reservar els següents equipaments municipals:

- Piscina
- Biblioteca
- Camp de futbol
- Saló d'actes
- Gimnas
- Pista de padel
- Pista de tenis
- Aula de cultura
- Casa de la música

### Implementació da la aplicació web
Com be hem dit al principi usarem HTML, CSS, i JavaScript per a desenvolupar la aplcació web, usarem les tecnologies per al següent:

- HTML: L'esquelet de l'aplcació encarregat de mostrar el contingut en forma de pàgina web estàtica
- CSS: L'encarregat de aplicar l'estil de la aplicació web i encarregat de ocultar els camps específics
- JavaScript: JavaScript serà l'encarregat de transformar el contingut estàtic del HTML a un contingut d'una web dinàmica (ocultant i apareguent camps del formulari quan corresponga)

Ja explicat quin paper fara cada tecnologia ja es hora de explicar com implementar-la i com resulta
#### Aplicació web:HTML
Primerament començem en el HTML, aquest ens facilitara el contingut visible per a la web però sense la funconaltat de JavaScript ni la aparença del CSS, primerament crearem el fitxer html, quan el creem, farem la seüent combnació `Mayus+1`(Per a crear el signe d'exclamació) i quan estiga el signe d'exclamació apretarem `Tab` i generara el següent:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
Ja amb una part del HTML ara generarem un formulari amb la etiqueta `form` de la següent forma junt amb un camp per al text:
```html
<form>
    <fieldset>
        <legend>Formulari</legend>
        <label for="nom">Nom:</label>
        <input type="text" id="nom" name="nom"><br>
    </fieldset>
</form>
```
Ja amb un formulari molt bàsic implementarem els camps de la següent forma:
- Nom -> `text`
- Cognoms -> `text`
- Adreça electrònica -> `email`
- Número de telèfon -> `tel`
- Data de reserva -> `date`
- Hora de reserva -> `time`
- Tipus de equipament -> `select`
- Comentaris -> `textarea`
Ho podem conseguir de la següent forma:
```html
<form>
    <fieldset>
        <!--Camp del nom-->
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" required placeholder="Escriu el teu nom"><br><br>
        <!--Camp del cognom-->
        <label for="cognoms">Cognoms</label>
        <input type="text" id="cognoms" name="cognoms" required placeholder="Escriu el teu cognom"><br><br>
        <!--Camp del correu-->
        <label for="correu">Correu</label>
        <input type="email" id="correu" name="correu" required placeholder="Escriu el teu correu"><br><br>
        <!--Camp del telefon-->
        <label for="telefon">Telefon</label>
        <input type="tel" id="telefon" name="telefon" required placeholder="Escriu el teu telefon"><br><br>
        <!--Camp del nombre de persones-->
        <label for="nombre">Numero de persones</label>
        <input type="number" id="nombre" name="nombre" required placeholder="Escriu el numero de persones"><br><br>
        <!--Camp de la data de reserva-->
        <label for="data">Data de reserva</label>
        <input type="date" id="data" name="data" required placeholder="Escriu la data de reserva"><br><br>
        <!--Camp de l'hora de reserva-->
        <label for="hora">Hora de reserva</label>
        <input type="time" id="hora" name="hora" required placeholder="Escriu l'hora de reserva"><br><br>
    </fieldset>
</form>
```
Per últim el camp del tipus d'equipament ens agradaria parlar apart, perquè allí dins estaran farem una llista en la qual n'hi han camps ocults, però com no estem ni en el CSS ni en el JavaScript encara que triem el camp `Piscina` és mostraran tots perque no ho podem modificar per a ocultar els camps sense les tecnologies abans esmentades, així que de moment deixem que es vegen tots els camps, ja parlarem com ocultar-los en el JavaScript.
Per últim el peu de pàgina podrem posar el contingut per a les xarxes socials i informació de la pàgina, sols en que sapigau que per a implementar el peu de pàgina heu de usar la etiqueta `footer` i sobre les matges de usar la etiqueta `img` amb la subetiqueta `src` per a posar la ruta `RELATIVA` de la imatge.
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nom de la pàgina</title>
</head>
<body>
    <p>Contingut del cos</p>
</body>
<footer>
    <p>Contingut del peu de pàgina</p>
    <img src="./ruta/imatge.png">
</footer>
```
Ja amb tota la informació necessaria del HTML es deuria de vore així:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva de serveis municipals</title>
</head>
<body>
    <header>
        <img src="./img/ayuntamiento villablanca.png">
        <h2 class="reserva">Reserva el teu equipament</h2>
    </header>
    <h2>Formulari de registre</h2>
    <form id="formularireserva">
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" required placeholder="Escriu el teu nom"><br><br>
        <label for="cognoms">Cognoms</label>
        <input type="text" id="cognoms" name="cognoms" required placeholder="Escriu el teu cognom"><br><br>
        <label for="correu">Correu</label>
        <input type="email" id="correu" name="correu" required placeholder="Escriu el teu correu"><br><br>
        <label for="telefon">Telefon</label>
        <input type="tel" id="telefon" name="telefon" required placeholder="Escriu el teu telefon"><br><br>
        <label for="nombre">Numero de persones</label>
        <input type="number" id="nombre" name="nombre" required placeholder="Escriu el numero de persones"><br><br>
        <label for="data">Data de reserva</label>
        <input type="date" id="data" name="data" required placeholder="Escriu la data de reserva"><br><br>
        <label for="hora">Hora de reserva</label>
        <input type="time" id="hora" name="hora" required placeholder="Escriu l'hora de reserva"><br><br>
        <label for="equipament">Tria un equipament</label>
        <select id="equipament" name="equipament" onChange="mostrarCamps()" required>
            <!-- Opció per defecte que no activa els camps ocults-->
            <option value="" disabled selected hidden>Selecciona una opció</option>
            <!-- Opcions que activen els seus camps ocults respectius-->
            <option value="Piscina">Piscina</option>
            <option value="Biblioteca">Biblioteca</option>
            <option value="Camp de futbol">Camp de futbol</option>
            <option value="Salo d'actes">Salo d'actes</option>
            <option value="Gimnas">Gimnas</option>
            <option value="Pista de padel">Pista de padel</option>
            <option value="Pista de tenis">Pista de tenis</option>
            <option value="Aula de cultura">Aula de cultura</option>
            <option value="Casa de la musica">Casa de la musica</option>
            </select><br><br>
            <!-- Camps ocults de la piscina-->
            <div id="piscina" class="ocult">
                <label for="pis_1">Camps de piscina</label><br>
                <input type="text" id="pis_1" name="pis_1" required placeholder="Camps de piscina"><br>
            </div>
            <!-- Camps ocults de la biblioteca-->
            <div id="biblioteca" class="ocult">
                <label for="bib_1">Camps de biblioteca</label><br>
                <input type="text" id="bib_1" name="bib_1" required placeholder="Camps de biblioteca"><br>
            </div>
            <!-- Camps ocults del camp de futbol-->
            <div id="futbol" class="ocult">
                <label for="fut_1">Camps de camp de futbol</label><br>
                <input type="text" id="fut_1" name="fut_1" required placeholder="Camps de camp de futbol"><br>
            </div>
            <!-- Camps ocults del saló d'actes-->
            <div id="actes" class="ocult">
                <label for="bib_1">Camps de actes</label><br>
                <input type="text" id="act_1" name="act_1" required placeholder="Camps de actes"><br>
            </div>
            <!-- Camps ocults del gimnas-->
            <div id="gimnas" class="ocult">
                <label for="gim_1">Camps de gimnas</label><br>
                <input type="text" id="gim_1" name="gim_1" required placeholder="Camps de gimnas"><br>
            </div>
            <!-- Camps ocults de la pista de padel-->
            <div id="padel" class="ocult">
                <label for="pad_1">Camps de pista de padel</label><br>
                <input type="text" id="pad_1" name="pad_1" required placeholder="Camps de pista de padel"><br>
            </div>
            <!-- Camps ocults de la pista de tenis-->
            <div id="tenis" class="ocult">
                <label for="ten_1">Camps de pista de tenis</label><br>
                <input type="text" id="ten_1" name="ten_1" required placeholder="Camps de pista de tenis"><br>
            </div>
            <!-- Camps ocults de la aula de la cultura-->
            <div id="cultura" class="ocult">
                <label for="cul_1">Camps de aula de cultura</label><br>
                <input type="text" id="cul_1" name="cul_1" required placeholder="Camps de aula de cultura"><br>
            </div>
            <!-- Camps ocults de la casa de la música-->
            <div id="musica" class="ocult">
                <label for="mus_1">Camps de casa de la musica</label><br>
                <input type="text" id="mus_1" name="mus_1" required placeholder="Camps de casa de la musica"><br>
            </div>
        <label for="comentaris">Comentaris</label><br><br>
        <textarea rows="20" cols="50">Escriu els teus comentaris</textarea><br><br>
        <button class="boto" type="submit"value="Enviar">Enviar</button>
        <input class="reset"type="reset" value="Reset">
    </form>
</body>
<footer>
    <div class="peupagina">
        <h3>Ajuntament de Villablanca</h3>
        <p>Direcció: Avinguda del Riu 7, Villablanca</p>
        <p>Telèfon: 675890231</p>
        <p>Email: ajuntamentvillablanca@gmail.com</p>
        <p>Horari: Dilluns a Divendres: 08:00/15:00</p>
        <nav>
            <ul>
                <li>Avís Legal</li>
                <li>Política de cookies</li>
                <li>Política de privacitat</li><br>
                <img class="social"src="./img/facebook.png" alt="Facebook">
                <img class="social"src="./img/x.png" alt="Twitter">
                <img class="social"src="./img/insta.png" alt="Instagram">
            </ul>
        </nav>
        <h2>Desenvolupat per Iván Atienza Moya i Joel Fuster Bosch</h2>
        <h2>Tots els drets reservats 2025</h2>
    </div>
</footer>
</html>
```
I l'aplicació es deuria de vore així:
<p align= "center">
    <img src="./imatges/Memòria/Resultats/Resultat HTML.png" alt="HTML" width="300"/>
 </p>
<p align="center"><em>Fig 7: Resultat del fitxer HTML</em></p> 

Encara que no és veu presentable no us preocupeu perque quan li agreguem CSS i JavaScript el resultat és veura molt millor.

#### Aplicació web:CSS

#### Aplicació web:JavaScript

#### Aplicació web completa

# Bibliografia
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Github](https://github.com/)