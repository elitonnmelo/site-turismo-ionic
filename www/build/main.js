webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SOBRE O RIO\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/cristo-redentor--bracos-abertos_6864_1024x768.jpg">\n      </ion-avatar>\n      <h1>Rio de Janeiro</h1>\n    </ion-item>\n  \n    <img src="https://papeldeparede.gratis/wp-content/uploads/2018/08/rio-de-janeiro-divulga%C3%A7%C3%A3o.jpg?Download-iOS">\n  \n    <ion-card-content>\n      <p>\n        A cidade do Rio de Janeiro, considerada uma das mais belas do mundo, é a capital do estado do Rio de Janeiro, na região \n        Sudeste do Brasil. Todos os anos, suas belas praias atraem muitos turistas de outras partes do país e do exterior. No Carnaval, milhares de \n        visitantes assistem aos desfiles das escolas de samba cariocas. Quem nasce na cidade do Rio de Janeiro é carioca.\n      </p>\n    </ion-card-content>\n  \n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/cristo-redentor--bracos-abertos_6864_1024x768.jpg">\n      </ion-avatar>\n      <h1>Locais de interesse</h1>\n    </ion-item>\n  \n    <img src="https://cdn.britannica.com/s:575x450/84/94384-004-0FB9DED5.jpg">\n  \n    <ion-card-content>\n      <p>\n        O Rio de Janeiro, também conhecido por Rio, é rico em belezas naturais e em tradições culturais. \n        No Rio se originou o samba e é onde acontece uma das maiores celebrações do Carnaval.\n        Há muito que ver na cidade. Os pontos que atraem mais turistas são o Cristo Redentor e o Pão de Açúcar.\n        Uma imensa estátua do Cristo Redentor encontra-se no topo do morro do Corcovado, de onde se tem uma vista magnífica da cidade. Sobe-se até lá por um trem panorâmico. O Cristo Redentor fica no Parque Nacional da Tijuca, que abriga a floresta da Tijuca — a maior floresta urbana do mundo. Na Tijuca, \n        há vários pontos de interesse, como rios, cachoeiras, lagos, mirantes, trilhas e animais que vivem livremente na mata.\n        Outro lugar muito visitado é o Pão de Açúcar. Para chegar ao topo do morro, toma-se um teleférico conhecido como bondinho. \n        Do alto, é possível admirar a bela paisagem carioca de um ângulo diferente daquele do Corcovado.\n        Entre as praias, Copacabana, Ipanema, Leblon e Barra da Tijuca são as mais procuradas. Copacabana e Ipanema são famosas internacionalmente. A cidade também tem muitas atrações culturais, como museus, teatros, cinemas, espetáculos de música, além dos ensaios das escolas de samba. O Maracanã, principal estádio de futebol da cidade, é o maior do Brasil. Foi construído para a Copa do Mundo de 1950, realizada no Brasil.\n      </p>\n    </ion-card-content>\n  \n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/cristo-redentor--bracos-abertos_6864_1024x768.jpg">\n      </ion-avatar>\n      <h1>Economia</h1>\n    </ion-item>\n  \n    <img src="https://cdn.britannica.com/s:575x450/75/189675-004-6B8E1AA8.jpg">\n  \n    <ion-card-content>\n      <p>\n        O turismo é a principal atividade econômica do Rio. O comércio e os serviços também ocupam lugar de destaque na economia.\n        A cidade é também um importante centro industrial, com ênfase nos setores têxtil e de confecções, siderúrgico, farmacêutico e alimentício. \n        A produção artística é importante, com destaques em todas as áreas: música, cinema, teatro, literatura e artes plásticas.\n      </p>\n    </ion-card-content>\n  \n  </ion-card>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/cristo-redentor--bracos-abertos_6864_1024x768.jpg">\n      </ion-avatar>\n      <h1>Historia</h1>\n    </ion-item>\n  \n    <img src="https://cdn.britannica.com/s:575x450/45/161245-004-4FF61134.jpg">\n  \n    <ion-card-content>\n      <p>\n        Quando os portugueses chegaram ao Brasil, no século XVI, \n        o território da atual cidade do Rio de Janeiro era povoado por indígenas de várias etnias.\n        Ao ver a baía da Guanabara, os portugueses pensaram estar diante da foz de um grande rio. Como era o mês de janeiro, escolheram para o lugar o nome de Rio de Janeiro.\n        Em 1555, em busca do pau-brasil, os franceses invadiram o Rio e fundaram uma colônia: a França Antártica. Eles dominaram \n        toda a baía da Guanabara e foram expulsos apenas em 1567. Em meio às lutas contra os franceses, Estácio de Sá fundou a cidade do Rio de Janeiro, em 1565.\n        O povoamento português se intensificou a partir dessa época. No século XVIII, era pelo porto do Rio de Janeiro que os \n        portugueses transportavam o ouro e outros minérios extraídos na região de Minas Gerais. Em 1763, a capital do Brasil foi transferida de Salvador para o Rio de Janeiro.\n        Com a chegada da corte portuguesa, em 1808, a cidade tornou-se capital do Reino Unido de Portugal, Brasil e Algarves, \n        transformando-se rapidamente. Foram criados o Banco do Brasil, a Biblioteca Nacional, o Jardim Botânico, a Academia Militar e a Academia de Belas-Artes. Dom João VI autorizou o funcionamento de gráficas e a impressão de livros e jornais, proibidos até então. Mais tarde, em 1837, foi fundado no Rio de Janeiro o primeiro colégio público, o Pedro II. Até então, todos os colégios brasileiros eram de padres. Naquela época, o ensino era só para alunos do sexo masculino. O ensino para mulheres só teve início no Brasil no final do \n        século XIX e no início do XX, com a fundação de colégios de freiras. Só em 1926 as meninas tiveram acesso ao Colégio Pedro II.\n        Com a independência do país, em 1822, o Rio de Janeiro passou a ser a capital do Império do Brasil. Em 1834, o território \n        da província do Rio de Janeiro foi dividido em dois: a cidade do Rio, como Município Neutro da Corte, continuou como capital do Império, enquanto Vila Real da Praia Grande (Niterói) tornou-se capital da província do Rio de Janeiro.\n        Em 1889, com a proclamação da República, o Rio tornou-se o Distrito Federal — território que contém a cidade que é a capital do país. Em 1960, com a transferência da capital do Brasil para Brasília, a cidade do Rio de Janeiro deixou de constituir o Distrito Federal e passou a ser o estado \n        da Guanabara. Na verdade, tratava-se de uma cidade-estado, pois o estado tinha apenas um município, que era a sua capital: o Rio de Janeiro.\n        Em 1975, os estados da Guanabara e do Rio de Janeiro se fundiram em um único estado, como o nome de Rio de Janeiro. Niterói deixou de ser capital de estado, e a cidade do Rio de Janeiro ficou sendo a capital do estado de mesmo nome. \n        O Rio tem 6.323.037 habitantes e é sede de uma região metropolitana com dezoito municípios e 11.670.349 habitantes (censo de 2010).\n      </p>\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nome = "";
        this.email = "";
        this.mensagem = "";
    }
    ContactPage.prototype.enviar = function () {
        console.log(this.nome);
        console.log(this.email);
        console.log(this.mensagem);
        this.showAlert();
    };
    ContactPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'AVISO',
            subTitle: 'Seu feedback foi enviado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      CONTATO\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>NOME</ion-label>\n      <ion-input type="text" [(ngModel)]="nome"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>E-MAIL</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>MENSAGEM</ion-label>\n      <ion-input type="text" [(ngModel)]="mensagem"></ion-input>\n    </ion-item>\n    <button ion-button block (click)="enviar()">ENVIAR</button>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>LOCAIS FAVORITOS</ion-title>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/cristo-redentor--bracos-abertos_6864_1024x768.jpg">\n      </ion-avatar>\n      <h1>Rio de Janeiro</h1>\n      <h2>Cristo Redentor</h2>\n    </ion-item>\n  \n    <img src="https://c4.wallpaperflare.com/wallpaper/148/690/461/statue-christ-the-savior-rio-de-janeiro-cristo-redentor-wallpaper-preview.jpg">\n  \n    <ion-card-content>\n      <p>\n        Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros \n        acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil. \n        Em 2007 foi eleito informalmente como uma das sete maravilhas do mundo moderno. Em 2012 a UNESCO \n        considerou o Cristo Redentor como parte da paisagem do Rio de Janeiro incluída na lista de Patrimônios da Humanidade.\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="logo-instagram"></ion-icon>\n          <a href="https://www.instagram.com/explore/tags/cristoredentor/" target="_blank"><div>saiba mais</div></a>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="pin"></ion-icon>\n          <a href="https://www.google.com/maps/place/Cristo+Redentor/@-22.951916,-43.2104872,15z/data=!4m5!3m4!1s0x0:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872" target="_blank"><div>Abrir localização</div></a>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.segueviagem.com.br/wp-content/uploads/2016/05/Copacabana-e-Leme-Rio-de-Janeiro-shutterstock_1504221245.jpg">\n      </ion-avatar>\n      <h1>Rio de Janeiro</h1>\n      <h2>Praia de Copacabana</h2>\n    </ion-item>\n  \n    <img src="https://photo620x400.mnstatic.com/77d2558a5cb5f05e0d73e89f9c2774dc/praia-de-copacabana-.jpg">\n  \n    <ion-card-content>\n      <p>\n        Copacabana é um bairro situado na Zona Sul do município do Rio de Janeiro, no Brasil. É considerado um dos bairros \n        mais famosos e prestigiados do Brasil e um dos mais conhecidos do mundo. Tem o apelido \n        de Princesinha do Mar e Coração da Zona Sul. Faz limites com os bairros da Lagoa, Ipanema, Botafogo, Leme e Humaitá.\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="logo-instagram"></ion-icon>\n          <a href="https://www.instagram.com/minhacopacabana/?hl=pt-br" target="_blank"><div>saiba mais</div></a>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="pin"></ion-icon>\n          <a href="https://www.google.com/maps/place/Praia+de+Copacabana/@-22.975629,-43.1907708,15z/data=!3m1!4b1!4m5!3m4!1s0x9bd54579a5956b:0xa102deeaffcb3e3!8m2!3d-22.9738729!4d-43.18531" target="_blank"><div>Abrir localização</div></a>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card> \n  \n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://www.gov.br/turismo/pt-br/centrais-de-conteudo/01-04-2016-rio-embratur-jpg">\n      </ion-avatar>\n      <h1>Rio de Janeiro</h1>\n      <h2>Paisagem do Rio</h2>\n    </ion-item>\n  \n    <img src="https://conexaoplaneta.com.br/wp-content/uploads/2019/01/unesco-declara-rio-de-janeiro-capital-mundial-arquitetura-8-conexao-planeta.jpg">\n  \n    <ion-card-content>\n      <p>\n        O Rio de Janeiro herdou de seu passado uma forte vocação cultural. Na Literatura do Brasil, efetivamente, aos primeiros decênios do século XVIII, quando da instalação das "academias" e "associações" com finalidades eruditas, a cidade - como centro colonial mais expressivo - testemunhou, desde então, a gênese e consolidação de diversas escolas e movimentos.\n        Escritores como Machado de Assis, Olavo Bilac, Carlos Drummond de Andrade, Clarice Lispector, Guimarães Rosa, \n        Cecília Meireles, Graciliano Ramos, Nélida Piñon - entre outros - conduziram parte significativa de suas carreiras no Rio de Janeiro. A Academia Brasileira de Letras (ABL), fundada em 1896, segundo o modelo da Academia Francesa, teve, em sua concepção, a atuação de Medeiros e Albuquerque, Lúcio de Mendonça e Machado de Assis.\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="logo-instagram"></ion-icon>\n          <a href="https://www.instagram.com/explore/tags/cristoredentor/" target="_blank"><div>saiba mais</div></a>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="pin"></ion-icon>\n          <a href="https://www.google.com/maps/place/Rio+de+Janeiro,+RJ/@-22.9132525,-43.7261799,10z/data=!3m1!4b1!4m5!3m4!1s0x9bde559108a05b:0x50dc426c672fd24e!8m2!3d-22.9068467!4d-43.1728965" target="_blank"><div>Abrir localização</div></a>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\meuprojetoabas\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map