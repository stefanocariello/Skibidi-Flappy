
export enum ObstacleType {
    Piadina,
    EstathéPeroni,
    PortaBlindata
}

export enum PlayerSkin {
    Default = 'default',
    GattoPardo = 'gattopardo',
    Marzone = 'marzone',
    Capibara = 'capibara',
    GerryScotti = 'gerryscotti',
    Papa = 'papa',
    Berlusconi = 'berlusconi',
    Marracash = 'marracash',
    Shiva = 'shiva',
    TonyEffe = 'tonyeffe',
    SferaEbbasta = 'sferaebbasta',
    GiganteBuono = 'gigantebuono',
    SignoraInGiallo = 'signoraingiallo',
    PippoBaudo = 'pippobaudo',
    Motorino = 'motorino',
    Pizza = 'pizza',
    Caffettiera = 'caffettiera',
    Panda = 'panda',
    CinqueCento = 'cinquecento',
    Totti = 'totti',
    DelPiero = 'delpiero',
    Chiellini = 'chiellini',
    Vespa = 'vespa',
    Colosseo = 'colosseo',
    Gondola = 'gondola',
    Cannolo = 'cannolo',
    ApeCar = 'apecar',
    Amadeus = 'amadeus',
    Fedez = 'fedez',
    ChiaraFerragni = 'ferragni'
}

export interface GameObject {
    x: number;
    y: number;
}

export interface CoinObject extends GameObject {
    id: number;
}

export interface ObstacleObject {
    x: number;
    type: ObstacleType;
    passed: boolean;
    topHeight: number;
    bottomHeight: number;
    gap: number;
}