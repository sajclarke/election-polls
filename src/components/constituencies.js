import React from 'react';
import Constituency from './constituency';
import Person from './person';

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}

class Constituencies extends React.Component {
  state = {
    constituencies: [
      {
        name: 'ST. MICHAEL NORTH EAST',
        persons: [
          {
            name: 'MIA AMOR MOTTLEY',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/MIA-2017-300x300.jpg'),
          },
          {
            name: 'PATRICK TODD',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/PATRICK-TODD-150x150.jpg'),
          },
          {
            name: 'KEMAR STUART',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Kemar-Stuart.jpg'),
          },
          {
            name: 'ENLOU FRERE',
            party: 'bfp',
            score: 0,
          },
        ],
      },
      {
        name: 'ST ANDREW',
        persons: [
          {
            name: 'GEORGE PAYNE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/George-Payne-2017.jpg'),
          },
          {
            name: 'IRENE SANDIFORD-GARNER',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/IRENE-SANDIFORD-GARNER-150x150.jpg'),
          },
          {
            name: 'ROLI ROACHFORD',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/roli Roachford.jpg'),
          },
          {
            name: 'CHERIE POUNDER',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Cherie-Pounder-1.jpg'),
          },
          {
            name: 'STEPHEN POLLARD',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Stephen_Pollard_2018_01.png'),
          },
        ],
      },
      {
        name: 'ST. THOMAS',
        persons: [
          {
            name: 'CYNTHIA FORD',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Cynthia-Forde-2017.jpg'),
          },
          {
            name: 'DR. ROLERICK HINDS',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/Dr-ROLERICK-HINDS-150x150.jpg'),
          },
          {
            name: 'PAULINE CORBIN',
            party: 'sb',
            score: 0,
          },
        ],
      },
      {
        name: 'ST JOSEPH',
        persons: [
          {
            name: 'DALE MARSHALL',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Dale-Marshall-2017.jpg'),
          },
          {
            name: 'DENNIS HOLDER',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DENNIS-HOLDER-150x150.jpg'),
          },
          {
            name: 'JENNIFER HIGHLAND',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Jennifer-Highland-2.jpg'),
          },
          {
            name: 'RANDALL ROUSE',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Randall_Rouse_02.jpg'),
          },
        ],
      },
      {
        name: 'ST GEORGE NORTH',
        persons: [
          {
            name: 'GLINE CLARKE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/GLINE-CLARKE-2017.jpg'),
          },
          {
            name: 'JEPTER INCE',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/JEPTER-INCE-150x150.jpg'),
          },
          {
            name: 'EVERTON HOLLIGAN',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Everton Holligan.jpg'),
          },
          {
            name: 'GRENVILLE PHILLIPS II',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Grenville-Phillips-1.jpg'),
          },
        ],
      },
      {
        name: 'ST GEORGE SOUTH',
        persons: [
          {
            name: 'DWIGHT SUTHERLAND',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Dwight-Sutherland-2017.jpg'),
          },
          {
            name: 'ESTHER SUCKOO',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/ESTHER-SUCKOO-150x150.jpg'),
          },
          {
            name: 'CRAIG HAREWOOD',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Craig Harewood.jpg'),
          },
          {
            name: 'ANDREW BANFIELD',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Andrew-Banfield-1.jpg'),
          },
          {
            name: 'DORIS RAMRATTY BARROW',
            party: 'bim',
            score: 0,
          },
        ],
      },
      {
        name: 'ST JAMES CENTRAL',
        persons: [
          {
            name: 'KERRIE SYMMONDS',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Kerrie-Symmonds-2017.jpg'),
          },
          {
            name: 'GEORGE CONNOLLY',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/GEORGE-CONNOLLY-150x150.jpg'),
          },
          {
            name: 'WENDEL CALLENDER',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Wendell Callender.jpg'),
          },
          {
            name: 'DANIEL CHALBAUD',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Daniel-Chalbaud-1.jpg'),
          },
          {
            name: 'JOSEPH JORDAN',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Joseph_Jordan_2018_01.png'),
          },
          {
            name: 'ERIC MARSHALL',
            party: 'pdc',
            score: 0,
          },
        ],
      },
      {
        name: 'ST JAMES NORTH',
        persons: [
          {
            name: 'EDMUND HINKSON',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Edmond-Hinkson-2017.jpg'),
          },
          {
            name: 'HARRY HUSBANDS',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/HARRY-HUSBANDS-150x150.jpg'),
          },
          {
            name: 'GRAFTON COBHAM',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Grafton Cobham.jpg'),
          },
          {
            name: 'DAVID WALROND',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/David-Walrond.jpg'),
          },
        ],
      },
      {
        name: 'ST JAMES SOUTH',
        persons: [
          {
            name: 'SANDRA HUSBANDS',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Sandra-2017.jpg'),
          },
          {
            name: 'DONVILLE INNISS',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DONVILLE-INNISS-150x150.jpg'),
          },
          {
            name: 'CHRISTAL AUSTIN',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Christal P. Austin.jpg'),
          },
          {
            name: 'JACQUELINE ALLEYNE ',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Jacqueline-Alleyne-Worrell.jpg'),
          },
        ],
      },
      {
        name: 'ST LUCY',
        persons: [
          {
            name: 'PETER PHILIPS',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Peter-Philips-2017.jpg'),
          },
          {
            name: 'DENIS KELLMAN',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DENIS-KELLMAN-150x150.jpg'),
          },
          {
            name: 'WAYNE GRIFFITH',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Wayne Griffith.jpg'),
          },
          {
            name: 'JOHN CARTER',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/John-Carter.jpg'),
          },
          {
            name: 'STEPHEN POLLARD',
            party: 'bim',
            score: 0,
          },
        ],
      },
      {
        name: 'ST PETER',
        persons: [
          {
            name: 'COLIN JORDAN',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Colin-Jordan-2017.jpg'),
          },
          {
            name: 'DAVE CUMBERBATCH',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DAVE-CUMBERBATCH-150x150.jpg'),
          },
          {
            name: 'LYNROY SCANTLEBURY',
            party: 'bim',
            score: 0,
          },
        ],
      },
      {
        name: 'ST JOHN',
        persons: [
          {
            name: 'CHARLES GRIFFITH',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Charles-Griffith-2017.jpg'),
          },
          {
            name: 'GEORGE PILGRIM',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/George-Pilgrim2-150x150.jpg'),
          },
          {
            name: 'HUDSON GRIFFITH',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Hudson Griffith.jpg'),
          },
          {
            name: 'CHERONE MARTINDALE',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Cherone-Martindale-1.jpg'),
          },
          {
            name: 'LEROY MCCLEAN',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Leroy_McClean_2018_03.jpg'),
          },
          {
            name: 'DEREK WENT',
            party: 'bim',
            score: 0,
            image: require('../pictures/CUP Photos/Derek_Went_2018_03.png'),
          },
        ],
      },
      {
        name: 'ST MICHAEL EAST',
        persons: [
          {
            name: 'TREVOR PRESCOD',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Trevor-Prescod-2017.jpg'),
          },
          {
            name: 'NICHOLAS ALLEYNE',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/NICHOLAS-ALLEYNE-150x150.jpg'),
          },
          {
            name: 'PAUL FORTE',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Paul Forte.jpg'),
          },
          {
            name: 'BETTY HOWELL',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Betty-howell.jpg'),
          },
          {
            name: 'IRAMAR ROSIE DAISLEY',
            party: 'ind',
            score: 0,
          },
          {
            name: 'CATHERINE ROSALIE YARDE',
            party: 'bim',
            score: 0,
            image: require('../pictures/CUP Photos/Catherine_Yarde_2018_02.png'),
          },
        ],
      },
      {
        name: 'ST MICHAEL NORTH',
        persons: [
          {
            name: 'RONALD TOPPIN',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Ronald-Toppin-2017.jpg'),
          },
          {
            name: 'KIM TUDOR',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/KIM-TUDOR-150x150.jpg'),
          },
          {
            name: 'MARIA PHILIPS',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Maria Phillips.jpg'),
          },
          {
            name: 'ANGELA GIBBS',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Angela-gibbs-1.jpg'),
          },
          {
            name: 'LESLOYED BISHOP',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Lesloyed_Bishop_01.png'),
          },
          {
            name: 'MARK ADAMSON',
            party: 'pdc',
            score: 0,
            image: require('../pictures/CUP Photos/Mark_Adamson_2018_02.jpg'),
          },
        ],
      },
      {
        name: 'CITY OF BRIDGETOWN',
        persons: [
          {
            name: 'JEFFREY BOSTIC',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Jeffrey-Bostic-2017.jpg'),
          },
          {
            name: 'HENDERSON WILLIAMS',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/HENDERSON-WILLIAMS-150x150.jpg'),
          },
          {
            name: 'LYNETTE EASTMOND',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Lynette Eastmond.jpg'),
          },
          {
            name: 'FALLON BEST',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Fallon-best-1.jpg'),
          },
          {
            name: 'NATALIE HAREWOOD',
            party: 'ind',
            score: 0,
            image: require('../pictures/IND Photos/Natalie_Harewood_2018_02.jpg'),
          },
          {
            name: 'RODNEY NURSE',
            party: 'pcp',
            score: 0,
            image: require('../pictures/CUP Photos/Rodney_Nurse_2008._01.png'),
          },
        ],
      },
      {
        name: 'ST MICHAEL SOUTH EAST',
        persons: [
          {
            name: 'SANTIA BRADSHAW',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Santia-Bradshaw-2017.jpg'),
          },
          {
            name: 'RODNEY GRANT',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/RODNEY-GRANT-150x150.jpg'),
          },
          {
            name: 'VERONICA PRICE',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Veronica Price.jpg'),
          },
          {
            name: 'FRANCINA BOURNE',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Francina-Bourne.jpg'),
          },
        ],
      },
      {
        name: 'ST MICHAEL WEST',
        persons: [
          {
            name: 'JOSEPH ATHERLEY',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Rev-Joseph-Atherley-2017.jpg'),
          },
          {
            name: 'MICHAEL CARRINGTON',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/MICHAEL-CARRINGTON-150x150.jpg'),
          },
          {
            name: 'PATSIE NURSE',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Pastie M. Nurse.jpg'),
          },
          {
            name: 'LANA TOUSSAINT',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/LanaToussaint-2.jpg'),
          },
          {
            name: 'NEIL HOLDER',
            party: 'bim',
            score: 0,
            image: require('../pictures/CUP Photos/Neil_Holder_2018_02.jpg'),
          },
        ],
      },
      {
        name: 'ST MICHAEL CENTRAL',
        persons: [
          {
            name: 'ARTHUR HOLDER',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Arthur-Holder-2017.jpg'),
          },
          {
            name: 'STEVE BLACKETT',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/STEVE-BLACKETT-150x150.jpg'),
          },
          {
            name: 'RICHARD BARROW',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Richard Barrow.jpg'),
          },
          {
            name: 'ROBERT TOUSSAINT',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Robert-toussaint.jpg'),
          },
          {
            name: 'GLENVILLE EVELYN',
            party: 'bim',
            score: 0,
            image: require('../pictures/CUP Photos/Glenville_Evelyn_2018_02.png'),
          },
        ],
      },
      {
        name: 'ST MICHAEL WEST CENTRAL',
        persons: [
          {
            name: 'IAN GOODING - EDGHILL',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Ian-Gooding-Edgehill-2017.jpg'),
          },
          {
            name: 'JAMES PAUL',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/JAMES-PAUL-150x150.jpg'),
          },
          {
            name: 'HARMON LOWE',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Herman Lowe.jpg'),
          },
          {
            name: 'ANGELA EDEY',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Angela-Edey-2-1.jpg'),
          },
          {
            name: 'STEPHEN BELGRAVE',
            party: 'bim',
            score: 0,
            image: require('../pictures/CUP Photos/Stephen_Belgrave_2018_02.png'),
          },
        ],
      },
      {
        name: 'ST MICHAEL SOUTH',
        persons: [
          {
            name: 'KIRK HUMPHREY',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Kirk-Humphrey-2017.jpg'),
          },
          {
            name: 'FREUNDEL STUART',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/FREUNDEL-STUART-150x150.jpg'),
          },
          {
            name: 'SANDRA CORBIN',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Sandra G. Corbin.jpg'),
          },
          {
            name: 'PAUL GIBSON',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Paul-Gibson.jpg'),
          },
          {
            name: 'ALEX MITCHELL',
            party: 'bfp',
            score: 0,
            image: require('../pictures/CUP Photos/Alex_Mitchell_01.jpg'),
          },
        ],
      },
      {
        name: 'ST MICHAEL NORTH WEST',
        persons: [
          {
            name: 'NEIL ROWE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Neil-Rowe-2017.jpg'),
          },
          {
            name: 'CHRIS SINCKLER',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/CHRIS-SINCKLER-150x150.jpg'),
          },
        ],
      },
      {
        name: 'ST MICHAEL SOUTH CENTRAL',
        persons: [
          {
            name: 'MARSHA CADDLE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Marsha-Caddle-2017.jpg'),
          },
          {
            name: 'RICHARD SEALY',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/RICHARD-SEALY-150x150.jpg'),
          },
          {
            name: 'DAVID GILL',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/David Gill.jpg'),
          },
          {
            name: 'ALAN SPRINGER',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Alan-Springer-1.jpg'),
          },
        ],
      },
      {
        name: 'CHRIST CHURCH WEST',
        persons: [
          {
            name: 'WILLIAM DUGUID',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/William-Duguid-2017.jpg'),
          },
          {
            name: 'VERLA DE PEIZA',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/VERLA-DEPEIZA-150x150.jpg'),
          },
          {
            name: 'IRVIN BELGRAVE',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/irvin-Belgrave.jpg'),
          },
        ],
      },
      {
        name: 'CHRIST CHURCH EAST',
        persons: [
          {
            name: 'WILFRED ABRAHAMS',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Wilfred-Abrams-2017.jpg'),
          },
          {
            name: 'DENIS LOWE',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DENIS-LOWE-New-150x150.jpg'),
          },
          {
            name: 'VICTOR KNIGHT',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Victor Knight.jpg'),
          },
          {
            name: 'ANN MARIE WEATHERHEAD',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Annmarie-Weatherhead-2-1.jpg'),
          },
        ],
      },
      {
        name: 'CHRIST CHURCH SOUTH',
        persons: [
          {
            name: 'RALPH THORNE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Ralph-Thorne-2017.jpg'),
          },
          {
            name: 'JOHN BOYCE',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/JOHN-BOYCE-150x150.jpg'),
          },
          {
            name: 'NADJA WILLIS',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Nadja Willis.jpg'),
          },
          {
            name: 'JULIE CHALBAUD',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/julie-Chalbaud.jpg'),
          },
          {
            name: 'STEVE HUNTE',
            party: 'kgb',
            score: 0,
            image: require('../pictures/CUP Photos/Steve_Hunte_2018_01.png'),
          },
        ],
      },
      {
        name: 'CHRIST CHURCH WEST CENTRAL',
        persons: [
          {
            name: 'ADRIAN FORD',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Adrian-Forde-2017.jpg'),
          },
          {
            name: 'STEPHEN LASHLEY',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/STEPHEN-LASHLEY-150x150.jpg'),
          },
          {
            name: 'RIA RILEY',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Ria Riley.jpg'),
          },
          {
            name: 'KENNETH LEWIS',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Kenneth-Lewis.jpg'),
          },
        ],
      },
      {
        name: 'CHRIST CHURCH EAST CENTRAL',
        persons: [
          {
            name: 'RYAN STRAUGHN',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Ryan-Straughan-2017.jpg'),
          },
          {
            name: 'RONALD JONES',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/RONALD-JONES-150x150.jpg'),
          },
          {
            name: 'OGEJI DOTTIN',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Ogeji Dottin.jpg'),
          },
          {
            name: 'SCOTT WEATHERHEAD',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Scorr-weatherhee.jpg'),
          },
        ],
      },
      {
        name: 'ST PHILIP SOUTH',
        persons: [
          {
            name: 'INDAR WEIR',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Indar-Weir-2017.jpg'),
          },
          {
            name: 'ADRIEL BRATHWAITE',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/ADRIEL-BRATHWAITE-150x150.jpg'),
          },
          {
            name: 'BRUCE HENNIS',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Bruce Hennis.jpg'),
          },
          {
            name: 'RONALD LORDE',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/RonaldLorde.jpg'),
          },
          {
            name: 'JOHN SCANTLEBURY',
            party: 'bfp',
            score: 0,
            image: require('../pictures/CUP Photos/John_Scantlebury_01.jpg'),
          },
        ],
      },
      {
        name: 'ST PHILIP WEST',
        persons: [
          {
            name: 'JOHN KING',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/John-King-2017.jpg'),
          },
          {
            name: 'DR. DAVID ESTWICK',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/DR.-DAVID-ESTWICK-150x150.jpg'),
          },
          {
            name: 'LEIGHTON GREENIDGE',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Leighton-Greendige-1.jpg'),
          },
        ],
      },
      {
        name: 'ST PHILIP NORTH',
        persons: [
          {
            name: 'SONIA BROWNE',
            party: 'blp',
            score: 0,
            image: require('../pictures/BLP Photos/Dr-Sonia-Browne-2017.jpg'),
          },
          {
            name: 'MICHAEL LASHLEY',
            party: 'dlp',
            score: 0,
            image: require('../pictures/DLP Photos/MICHAEL-LASHLEY-150x150.jpg'),
          },
          {
            name: 'NIGEL NEWTON',
            party: 'upp',
            score: 0,
            image: require('../pictures/UPP Photos/Nigel Newton.jpg'),
          },
          {
            name: 'ROSALINE CORBIN',
            party: 'sb',
            score: 0,
            image: require('../pictures/SB Photos/Rosaline-Corbin.jpg'),
          },
        ],
      },
    ],
  };

  updateValue = a => {
    const { constituencies } = this.state;

    const updatedConstituences = constituencies.map(b => {
      if (b.name === a.constituency) {
        b.persons.map(z => {
          if (z.party === a.party) {
            return {
              ...z,
              score: a.score,
            };
          }

          return z;
        });
      }

      return b;
    });

    this.setState({
      constituencies: updatedConstituences,
    });

    const allPersons = updatedConstituences.map(a => {
      return a.persons;
    });

    const dlp = flattenDeep(allPersons)
      .filter(a => a.party === 'dlp')
      .reduce((a, b) => a + b.score, 0);
    const blp = flattenDeep(allPersons)
      .filter(a => a.party === 'blp')
      .reduce((a, b) => a + b.score, 0);
    const sb = flattenDeep(allPersons)
      .filter(a => a.party === 'sb')
      .reduce((a, b) => a + b.score, 0);
    const bfp = flattenDeep(allPersons)
      .filter(a => a.party === 'bfp')
      .reduce((a, b) => a + b.score, 0);
    const ind = flattenDeep(allPersons)
      .filter(a => a.party === 'ind')
      .reduce((a, b) => a + b.score, 0);
    const upp = flattenDeep(allPersons)
      .filter(a => a.party === 'upp')
      .reduce((a, b) => a + b.score, 0);
    const bim = flattenDeep(allPersons)
      .filter(a => a.party === 'bim')
      .reduce((a, b) => a + b.score, 0);
    const pdc = flattenDeep(allPersons)
      .filter(a => a.party === 'pdc')
      .reduce((a, b) => a + b.score, 0);
    const pcp = flattenDeep(allPersons)
      .filter(a => a.party === 'pcp')
      .reduce((a, b) => a + b.score, 0);
    const kgb = flattenDeep(allPersons)
      .filter(a => a.party === 'kgb')
      .reduce((a, b) => a + b.score, 0);

    this.props.updateTotal([
      { key: 'blp', score: blp },
      { key: 'dlp', score: dlp },
      { key: 'upp', score: upp },
      { key: 'sb', score: sb },
      { key: 'ind', score: ind },
      { key: 'bim', score: bim },
      { key: 'bfp', score: bfp },
      { key: 'pdc', score: pdc },
      { key: 'pcp', score: pcp },
      { key: 'kgb', score: kgb },
    ]);
  };

  render() {
    return (
      <React.Fragment>
        {this.state.constituencies.map(a => {
          return (
            <Constituency
              persons={a.persons}
              name={a.name}
              updateValue={this.updateValue}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Constituencies;
