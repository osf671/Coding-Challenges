import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class PlaygroundsService {

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
    }
}
    //     private data = [
    //         { "id": 1, "first_name": "Boot", "last_name": "Wellum", "email": "bwellum0@virginia.edu", "gender": "Male", "ip_address": "142.149.233.48" },
    //         { "id": 2, "first_name": "Boonie", "last_name": "Klosa", "email": "bklosa1@oakley.com", "gender": "Male", "ip_address": "236.140.121.240" },
    //         { "id": 3, "first_name": "Eberto", "last_name": "McClosh", "email": "emcclosh2@sphinn.com", "gender": "Male", "ip_address": "143.232.230.39" },
    //         { "id": 4, "first_name": "Boony", "last_name": "Gerraty", "email": "bgerraty3@linkedin.com", "gender": "Male", "ip_address": "182.28.232.201" },
    //         { "id": 5, "first_name": "Jania", "last_name": "Rash", "email": "jrash4@oaic.gov.au", "gender": "Female", "ip_address": "205.158.125.67" },
    //         { "id": 6, "first_name": "Victor", "last_name": "Duckett", "email": "vduckett5@ask.com", "gender": "Male", "ip_address": "48.117.98.172" },
    //         { "id": 7, "first_name": "Andrus", "last_name": "Spear", "email": "aspear6@sciencedirect.com", "gender": "Male", "ip_address": "42.52.34.70" },
    //         { "id": 8, "first_name": "Tonye", "last_name": "Careswell", "email": "tcareswell7@mit.edu", "gender": "Female", "ip_address": "140.183.243.106" },
    //         { "id": 9, "first_name": "Trescha", "last_name": "Swaite", "email": "tswaite8@mac.com", "gender": "Female", "ip_address": "216.228.217.129" },
    //         { "id": 10, "first_name": "Shellie", "last_name": "Anscott", "email": "sanscott9@unblog.fr", "gender": "Female", "ip_address": "17.211.150.143" },
    //         { "id": 11, "first_name": "Archer", "last_name": "Nesbeth", "email": "anesbetha@ning.com", "gender": "Male", "ip_address": "238.28.7.136" },
    //         { "id": 12, "first_name": "Shandie", "last_name": "Bunning", "email": "sbunningb@amazon.com", "gender": "Female", "ip_address": "148.226.224.171" },
    //         { "id": 13, "first_name": "Michail", "last_name": "Boldry", "email": "mboldryc@usa.gov", "gender": "Male", "ip_address": "135.41.59.236" },
    //         { "id": 14, "first_name": "Haslett", "last_name": "McAtamney", "email": "hmcatamneyd@angelfire.com", "gender": "Male", "ip_address": "24.48.80.215" },
    //         { "id": 15, "first_name": "Rubi", "last_name": "Vanyatin", "email": "rvanyatine@sakura.ne.jp", "gender": "Female", "ip_address": "186.144.54.155" },
    //         { "id": 16, "first_name": "Daile", "last_name": "Whiteoak", "email": "dwhiteoakf@redcross.org", "gender": "Female", "ip_address": "140.62.21.141" },
    //         { "id": 17, "first_name": "Adda", "last_name": "Lightoller", "email": "alightollerg@sourceforge.net", "gender": "Female", "ip_address": "144.209.54.83" },
    //         { "id": 18, "first_name": "Bride", "last_name": "Birchenhead", "email": "bbirchenheadh@wp.com", "gender": "Female", "ip_address": "157.26.59.84" },
    //         { "id": 19, "first_name": "Desmond", "last_name": "Tacker", "email": "dtackeri@360.cn", "gender": "Male", "ip_address": "100.209.104.244" },
    //         { "id": 20, "first_name": "Lou", "last_name": "Realph", "email": "lrealphj@homestead.com", "gender": "Male", "ip_address": "138.237.174.86" },
    //         { "id": 21, "first_name": "Bard", "last_name": "Guesford", "email": "bguesfordk@gnu.org", "gender": "Male", "ip_address": "103.50.9.139" },
    //         { "id": 22, "first_name": "Kanya", "last_name": "Lude", "email": "kludel@paginegialle.it", "gender": "Female", "ip_address": "138.83.32.180" },
    //         { "id": 23, "first_name": "Lorine", "last_name": "Marushak", "email": "lmarushakm@dailymotion.com", "gender": "Female", "ip_address": "129.108.197.91" },
    //         { "id": 24, "first_name": "Bail", "last_name": "Dearsley", "email": "bdearsleyn@youku.com", "gender": "Male", "ip_address": "247.149.181.90" },
    //         { "id": 25, "first_name": "Estrella", "last_name": "Cortese", "email": "ecorteseo@telegraph.co.uk", "gender": "Female", "ip_address": "183.231.152.249" },
    //         { "id": 26, "first_name": "Dalila", "last_name": "Hugh", "email": "dhughp@salon.com", "gender": "Female", "ip_address": "111.16.210.127" },
    //         { "id": 27, "first_name": "Lothario", "last_name": "Spadoni", "email": "lspadoniq@geocities.com", "gender": "Male", "ip_address": "52.160.143.219" },
    //         { "id": 28, "first_name": "Trenton", "last_name": "Schankelborg", "email": "tschankelborgr@altervista.org", "gender": "Male", "ip_address": "13.115.73.44" },
    //         { "id": 29, "first_name": "Shae", "last_name": "Jacobsohn", "email": "sjacobsohns@wiley.com", "gender": "Male", "ip_address": "177.89.175.98" },
    //         { "id": 30, "first_name": "Haroun", "last_name": "Bracco", "email": "hbraccot@flavors.me", "gender": "Male", "ip_address": "227.134.219.52" },
    //         { "id": 31, "first_name": "Farleigh", "last_name": "Mountain", "email": "fmountainu@baidu.com", "gender": "Male", "ip_address": "201.227.70.143" },
    //         { "id": 32, "first_name": "Les", "last_name": "Nickolls", "email": "lnickollsv@mapquest.com", "gender": "Male", "ip_address": "231.131.209.193" },
    //         { "id": 33, "first_name": "Rosana", "last_name": "Hothersall", "email": "rhothersallw@msn.com", "gender": "Female", "ip_address": "74.16.206.76" },
    //         { "id": 34, "first_name": "Aubree", "last_name": "Jumonet", "email": "ajumonetx@gov.uk", "gender": "Female", "ip_address": "229.99.232.152" },
    //         { "id": 35, "first_name": "Cully", "last_name": "Mc Carrick", "email": "cmccarricky@twitpic.com", "gender": "Male", "ip_address": "56.112.200.100" },
    //         { "id": 36, "first_name": "Gothart", "last_name": "Fancutt", "email": "gfancuttz@biblegateway.com", "gender": "Male", "ip_address": "181.1.61.98" },
    //         { "id": 37, "first_name": "Ruthi", "last_name": "Hurring", "email": "rhurring10@army.mil", "gender": "Female", "ip_address": "255.99.10.138" },
    //         { "id": 38, "first_name": "Caryl", "last_name": "Petow", "email": "cpetow11@blinklist.com", "gender": "Male", "ip_address": "186.44.44.86" },
    //         { "id": 39, "first_name": "Jerald", "last_name": "Iohananof", "email": "jiohananof12@a8.net", "gender": "Male", "ip_address": "145.81.119.72" },
    //         { "id": 40, "first_name": "Grannie", "last_name": "Tallboy", "email": "gtallboy13@youku.com", "gender": "Male", "ip_address": "175.6.181.45" },
    //         { "id": 41, "first_name": "Josy", "last_name": "Carff", "email": "jcarff14@oaic.gov.au", "gender": "Female", "ip_address": "211.108.81.251" },
    //         { "id": 42, "first_name": "Rich", "last_name": "Riddeough", "email": "rriddeough15@surveymonkey.com", "gender": "Male", "ip_address": "95.35.194.99" },
    //         { "id": 43, "first_name": "Cody", "last_name": "Trammel", "email": "ctrammel16@berkeley.edu", "gender": "Female", "ip_address": "102.35.128.219" },
    //         { "id": 44, "first_name": "Theresina", "last_name": "Rountree", "email": "trountree17@aol.com", "gender": "Female", "ip_address": "129.96.223.205" },
    //         { "id": 45, "first_name": "Eldon", "last_name": "Fewless", "email": "efewless18@livejournal.com", "gender": "Male", "ip_address": "101.241.218.175" },
    //         { "id": 46, "first_name": "Melvin", "last_name": "MacLeod", "email": "mmacleod19@1688.com", "gender": "Male", "ip_address": "99.215.146.225" },
    //         { "id": 47, "first_name": "Randall", "last_name": "Giampietro", "email": "rgiampietro1a@blogtalkradio.com", "gender": "Male", "ip_address": "10.111.248.97" },
    //         { "id": 48, "first_name": "Birdie", "last_name": "Edmans", "email": "bedmans1b@elegantthemes.com", "gender": "Female", "ip_address": "24.125.50.38" },
    //         { "id": 49, "first_name": "Aksel", "last_name": "Methingam", "email": "amethingam1c@youku.com", "gender": "Male", "ip_address": "73.249.33.70" },
    //         { "id": 50, "first_name": "Allix", "last_name": "Fust", "email": "afust1d@ted.com", "gender": "Female", "ip_address": "86.74.39.155" },
    //         { "id": 51, "first_name": "Kirstin", "last_name": "Tommeo", "email": "ktommeo1e@over-blog.com", "gender": "Female", "ip_address": "86.138.57.18" },
    //         { "id": 52, "first_name": "Jenn", "last_name": "Simmonds", "email": "jsimmonds1f@elegantthemes.com", "gender": "Female", "ip_address": "4.91.30.50" },
    //         { "id": 53, "first_name": "Jandy", "last_name": "Henaughan", "email": "jhenaughan1g@youtu.be", "gender": "Female", "ip_address": "147.154.152.74" },
    //         { "id": 54, "first_name": "Leicester", "last_name": "Sumsion", "email": "lsumsion1h@mac.com", "gender": "Male", "ip_address": "28.216.234.21" },
    //         { "id": 55, "first_name": "Adam", "last_name": "Disley", "email": "adisley1i@gmpg.org", "gender": "Male", "ip_address": "138.245.219.24" },
    //         { "id": 56, "first_name": "Hakim", "last_name": "Hynde", "email": "hhynde1j@examiner.com", "gender": "Male", "ip_address": "163.217.203.144" },
    //         { "id": 57, "first_name": "Karry", "last_name": "Tresise", "email": "ktresise1k@hatena.ne.jp", "gender": "Female", "ip_address": "17.92.71.98" },
    //         { "id": 58, "first_name": "Jackie", "last_name": "Zecchi", "email": "jzecchi1l@godaddy.com", "gender": "Female", "ip_address": "133.130.32.78" },
    //         { "id": 59, "first_name": "Yoshi", "last_name": "Starten", "email": "ystarten1m@alexa.com", "gender": "Female", "ip_address": "228.43.99.251" },
    //         { "id": 60, "first_name": "Teresita", "last_name": "Truelove", "email": "ttruelove1n@friendfeed.com", "gender": "Female", "ip_address": "194.111.210.9" },
    //         { "id": 61, "first_name": "Ramsay", "last_name": "Wynrahame", "email": "rwynrahame1o@mtv.com", "gender": "Male", "ip_address": "146.20.90.127" },
    //         { "id": 62, "first_name": "Hannie", "last_name": "Moultrie", "email": "hmoultrie1p@usatoday.com", "gender": "Female", "ip_address": "232.208.128.42" },
    //         { "id": 63, "first_name": "Charlene", "last_name": "McGlue", "email": "cmcglue1q@java.com", "gender": "Female", "ip_address": "196.181.181.121" },
    //         { "id": 64, "first_name": "Carson", "last_name": "Grinter", "email": "cgrinter1r@aboutads.info", "gender": "Male", "ip_address": "147.104.162.221" },
    //         { "id": 65, "first_name": "Camel", "last_name": "Funnell", "email": "cfunnell1s@pbs.org", "gender": "Female", "ip_address": "209.135.224.145" },
    //         { "id": 66, "first_name": "Dian", "last_name": "Barosch", "email": "dbarosch1t@twitpic.com", "gender": "Female", "ip_address": "199.29.3.187" },
    //         { "id": 67, "first_name": "Alana", "last_name": "Lett", "email": "alett1u@google.cn", "gender": "Female", "ip_address": "92.95.174.15" },
    //         { "id": 68, "first_name": "Thoma", "last_name": "Baggiani", "email": "tbaggiani1v@artisteer.com", "gender": "Male", "ip_address": "141.156.96.43" },
    //         { "id": 69, "first_name": "Cicely", "last_name": "Le Provest", "email": "cleprovest1w@answers.com", "gender": "Female", "ip_address": "54.50.39.250" },
    //         { "id": 70, "first_name": "Caddric", "last_name": "Ebbrell", "email": "cebbrell1x@spiegel.de", "gender": "Male", "ip_address": "97.123.83.147" },
    //         { "id": 71, "first_name": "Corri", "last_name": "Aldrich", "email": "caldrich1y@sourceforge.net", "gender": "Female", "ip_address": "50.37.71.164" },
    //         { "id": 72, "first_name": "Erastus", "last_name": "Claus", "email": "eclaus1z@facebook.com", "gender": "Male", "ip_address": "157.104.168.11" },
    //         { "id": 73, "first_name": "Jenda", "last_name": "Jacobsen", "email": "jjacobsen20@businessinsider.com", "gender": "Female", "ip_address": "60.139.31.233" },
    //         { "id": 74, "first_name": "Horatia", "last_name": "Poel", "email": "hpoel21@admin.ch", "gender": "Female", "ip_address": "62.0.184.227" },
    //         { "id": 75, "first_name": "Keeley", "last_name": "Pobjay", "email": "kpobjay22@nhs.uk", "gender": "Female", "ip_address": "82.9.107.237" },
    //         { "id": 76, "first_name": "Oralee", "last_name": "Blodg", "email": "oblodg23@e-recht24.de", "gender": "Female", "ip_address": "244.86.214.140" },
    //         { "id": 77, "first_name": "Griswold", "last_name": "De Cruze", "email": "gdecruze24@huffingtonpost.com", "gender": "Male", "ip_address": "197.197.88.122" },
    //         { "id": 78, "first_name": "Cristabel", "last_name": "Janodet", "email": "cjanodet25@epa.gov", "gender": "Female", "ip_address": "80.14.133.8" },
    //         { "id": 79, "first_name": "Jocelin", "last_name": "Crenage", "email": "jcrenage26@usda.gov", "gender": "Female", "ip_address": "219.70.203.72" },
    //         { "id": 80, "first_name": "Rurik", "last_name": "Minico", "email": "rminico27@cdbaby.com", "gender": "Male", "ip_address": "33.124.221.146" },
    //         { "id": 81, "first_name": "Jaquelyn", "last_name": "Surgenor", "email": "jsurgenor28@geocities.jp", "gender": "Female", "ip_address": "254.166.118.200" },
    //         { "id": 82, "first_name": "Arleyne", "last_name": "Hallows", "email": "ahallows29@hp.com", "gender": "Female", "ip_address": "93.147.87.51" },
    //         { "id": 83, "first_name": "Nicholas", "last_name": "Kleinsmuntz", "email": "nkleinsmuntz2a@csmonitor.com", "gender": "Male", "ip_address": "27.135.159.167" },
    //         { "id": 84, "first_name": "Victoir", "last_name": "Crosen", "email": "vcrosen2b@reverbnation.com", "gender": "Male", "ip_address": "198.183.227.231" },
    //         { "id": 85, "first_name": "Griswold", "last_name": "Beswetherick", "email": "gbeswetherick2c@ycombinator.com", "gender": "Male", "ip_address": "212.96.220.231" },
    //         { "id": 86, "first_name": "Lion", "last_name": "Chatan", "email": "lchatan2d@homestead.com", "gender": "Male", "ip_address": "204.193.59.80" },
    //         { "id": 87, "first_name": "Eva", "last_name": "Amburgy", "email": "eamburgy2e@umn.edu", "gender": "Female", "ip_address": "251.250.135.253" },
    //         { "id": 88, "first_name": "Duncan", "last_name": "Bilsborrow", "email": "dbilsborrow2f@craigslist.org", "gender": "Male", "ip_address": "254.36.203.0" },
    //         { "id": 89, "first_name": "Ronald", "last_name": "Flieg", "email": "rflieg2g@craigslist.org", "gender": "Male", "ip_address": "14.15.114.100" },
    //         { "id": 90, "first_name": "Aurlie", "last_name": "O' Flaherty", "email": "aoflaherty2h@si.edu", "gender": "Female", "ip_address": "243.161.8.159" },
    //         { "id": 91, "first_name": "Conrade", "last_name": "MacDermott", "email": "cmacdermott2i@nps.gov", "gender": "Male", "ip_address": "164.168.117.247" },
    //         { "id": 92, "first_name": "Jordan", "last_name": "Hordle", "email": "jhordle2j@squarespace.com", "gender": "Male", "ip_address": "4.119.249.117" },
    //         { "id": 93, "first_name": "Marylin", "last_name": "Cheng", "email": "mcheng2k@berkeley.edu", "gender": "Female", "ip_address": "159.131.34.30" },
    //         { "id": 94, "first_name": "Ange", "last_name": "Tabor", "email": "atabor2l@surveymonkey.com", "gender": "Female", "ip_address": "209.187.227.18" },
    //         { "id": 95, "first_name": "Francklyn", "last_name": "Stollmeyer", "email": "fstollmeyer2m@examiner.com", "gender": "Male", "ip_address": "56.38.229.115" },
    //         { "id": 96, "first_name": "Nessa", "last_name": "Willerson", "email": "nwillerson2n@friendfeed.com", "gender": "Female", "ip_address": "79.203.203.105" },
    //         { "id": 97, "first_name": "Alex", "last_name": "Sultan", "email": "asultan2o@go.com", "gender": "Female", "ip_address": "202.189.5.217" },
    //         { "id": 98, "first_name": "Ivonne", "last_name": "Campbell", "email": "icampbell2p@odnoklassniki.ru", "gender": "Female", "ip_address": "164.104.243.94" },
    //         { "id": 99, "first_name": "Ashlin", "last_name": "Poinsett", "email": "apoinsett2q@ow.ly", "gender": "Male", "ip_address": "150.168.118.205" },
    //         { "id": 100, "first_name": "Lura", "last_name": "Valenta", "email": "lvalenta2r@a8.net", "gender": "Female", "ip_address": "76.22.8.35" },
    //     ];
    //     getPlaygrounds() {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 // let random = Math.random();
    //                 // console.log(random)
    //                 // if (random > 0.5) {
    //                 resolve(this.data);
    //                 // } else {
    //                 //     reject("This is wrong!")
    //                 // }
    //             }, 1000)
    //         })
    //     }
