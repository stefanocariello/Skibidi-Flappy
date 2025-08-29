
import { 
    EagleIcon, GattoPardoIcon, MarzoneIcon, CapibaraIcon, GerryScottiIcon, PapaIcon, 
    BerlusconiIcon, MarracashIcon, ShivaIcon, TonyEffeIcon, SferaEbbastaIcon, GiganteBuonoIcon, 
    SignoraInGialloIcon, PippoBaudoIcon, MotorinoIcon, PizzaIcon, CaffettieraIcon, PandaIcon, 
    CinqueCentoIcon, TottiIcon, DelPieroIcon, ChielliniIcon, VespaIcon, ColosseoIcon, GondolaIcon, 
    CannoloIcon, ApeCarIcon, AmadeusIcon, FedezIcon, ChiaraFerragniIcon 
} from './components/IconComponents';
import { PlayerSkin } from './types';

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 1024;

export const PLAYER_WIDTH = 80;
export const PLAYER_HEIGHT = 80;
export const PLAYER_START_X = GAME_WIDTH / 4;
export const PLAYER_START_Y = GAME_HEIGHT / 3;

export const GRAVITY = 0.45; // Reduced for a less frantic feel
export const JUMP_STRENGTH = -8;
export const GROUND_BUFFER = 300; // Invisible buffer at the bottom, increased as requested

export const OBSTACLE_WIDTH = 120;
export const OBSTACLE_GAP = 180; // Increased for a more forgiving gameplay
export const OBSTACLE_SPEED = -4.5; // Reduced to make obstacles slower
export const OBSTACLE_SPAWN_RATE = 100; // in game frames, increased for more time between obstacles
export const MIN_OBSTACLE_HEIGHT = 80; // Min height for top/bottom obstacles, reduced for more variance

// --- COINS ---
export const COIN_SIZE = 40;
export const COIN_SPAWN_RATE = 13; // How often (in frames) we attempt to spawn a coin. Tripled frequency from 60.
export const COIN_CHANCE = 0.5; // The probability of spawning a coin at each attempt


// --- SKINS ---
export const SKINS = [
    {
        id: PlayerSkin.Default,
        name: 'Aquila Standard',
        component: EagleIcon,
        price: 0,
    },
    {
        id: PlayerSkin.GattoPardo,
        name: 'Gatto Pardo',
        component: GattoPardoIcon,
        price: 50,
    },
    {
        id: PlayerSkin.Marzone,
        name: 'Agente Marzone',
        component: MarzoneIcon,
        price: 100,
    },
    { id: PlayerSkin.Capibara, name: 'Capibara', component: CapibaraIcon, price: 150, },
    { id: PlayerSkin.Pizza, name: 'Pizza', component: PizzaIcon, price: 200, },
    { id: PlayerSkin.Caffettiera, name: 'Caffettiera', component: CaffettieraIcon, price: 250, },
    { id: PlayerSkin.Cannolo, name: 'Cannolo', component: CannoloIcon, price: 300, },
    { id: PlayerSkin.Motorino, name: 'Motorino', component: MotorinoIcon, price: 350, },
    { id: PlayerSkin.Panda, name: 'Panda', component: PandaIcon, price: 400, },
    { id: PlayerSkin.ApeCar, name: 'Ape Car', component: ApeCarIcon, price: 450, },
    { id: PlayerSkin.CinqueCento, name: '500', component: CinqueCentoIcon, price: 500, },
    { id: PlayerSkin.Vespa, name: 'Vespa', component: VespaIcon, price: 600, },
    { id: PlayerSkin.Totti, name: 'Totti', component: TottiIcon, price: 700, },
    { id: PlayerSkin.DelPiero, name: 'Del Piero', component: DelPieroIcon, price: 800, },
    { id: PlayerSkin.Chiellini, name: 'Chiellini', component: ChielliniIcon, price: 900, },
    { id: PlayerSkin.Gondola, name: 'Gondola', component: GondolaIcon, price: 1000, },
    { id: PlayerSkin.Colosseo, name: 'Colosseo', component: ColosseoIcon, price: 1200, },
    { id: PlayerSkin.GerryScotti, name: 'Gerry Scotti', component: GerryScottiIcon, price: 1500, },
    { id: PlayerSkin.SignoraInGiallo, name: 'Signora in Giallo', component: SignoraInGialloIcon, price: 1800, },
    { id: PlayerSkin.PippoBaudo, name: 'Pippo Baudo', component: PippoBaudoIcon, price: 2100, },
    { id: PlayerSkin.Amadeus, name: 'Amadeus', component: AmadeusIcon, price: 2500, },
    { id: PlayerSkin.GiganteBuono, name: 'Gigante Buono', component: GiganteBuonoIcon, price: 3000, },
    { id: PlayerSkin.Papa, name: 'Il Papa', component: PapaIcon, price: 3500, },
    { id: PlayerSkin.Berlusconi, name: 'Berlusconi', component: BerlusconiIcon, price: 4000, },
    { id: PlayerSkin.Marracash, name: 'Marracash', component: MarracashIcon, price: 5000, },
    { id: PlayerSkin.Shiva, name: 'Shiva', component: ShivaIcon, price: 6000, },
    { id: PlayerSkin.TonyEffe, name: 'Tony Effe', component: TonyEffeIcon, price: 7000, },
    { id: PlayerSkin.SferaEbbasta, name: 'Sfera Ebbasta', component: SferaEbbastaIcon, price: 8000, },
    { id: PlayerSkin.Fedez, name: 'Fedez', component: FedezIcon, price: 9000, },
    { id: PlayerSkin.ChiaraFerragni, name: 'Chiara Ferragni', component: ChiaraFerragniIcon, price: 10000, }
];


// --- AUDIO ---
// Audio has been removed to prevent playback errors.