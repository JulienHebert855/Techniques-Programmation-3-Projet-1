import { TypeForfaits } from './TypeForfaits';

export const TABLEAUFORFAITS: TypeForfaits[] = [
    {
        destination: 'Québec',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Hôtel Travelodge',
            coordonnees: '3125 Bd Hochelaga, Québec, QC G1W 2P9',
            nombreEtoiles: 3,
            nombreChambres: 2,
            caracteristiques: ['Wi-Fi gratuit', ' Déjeuner', ' Stationnement gratuit',],
        },
        dateDepart: new Date('2021-01-01'),
        dateRetour: new Date('2021-01-04'),
        prix: 109,
        rabais: 99,
        vedette: false,
    },
    {
        destination: 'Montréal',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Hôtel Bonaventure',
            coordonnees: '900 Rue De La Gauchetière O, Montréal, QC H5A 1E4',
            nombreEtoiles: 4,
            nombreChambres: 2,
            caracteristiques: ['Excellente piscine', ' Proche des transports en commun', ' Bien situé',],
        },
        dateDepart: new Date('2021-04-12'),
        dateRetour: new Date('2021-04-18'),
        prix: 189,
        rabais: 149,
        vedette: false,
    },
    {
        destination: 'Halifax',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Hampton Inn by Hilton Halifax Downtown',
            coordonnees: '1960 Brunswick St, Halifax, NS B3J 2G7',
            nombreEtoiles: 3,
            nombreChambres: 2,
            caracteristiques: ['Petit déjeuner gratuit', ' Bien situé',],
        },
        dateDepart: new Date('2021-03-06'),
        dateRetour: new Date('2021-03-09'),
        prix: 102,
        rabais: 89,
        vedette: true,
    },
    {
        destination: 'Moncton',
        villeDepart: 'Halifax',
        hotel: {
            nom: 'Hilton Garden Inn Moncton Downtown',
            coordonnees: '40 Highfield St, Moncton, NB E1C 5N3',
            nombreEtoiles: 3,
            nombreChambres: 2,
            caracteristiques: ['Piscine', ' Proche des transports en commun', ' Superbes chambres',],
        },
        dateDepart: new Date('2021-02-22'),
        dateRetour: new Date('2021-02-28'),
        prix: 96,
        rabais: 90,
        vedette: false,
    },
    {
        destination: 'St John\'s',
        villeDepart: 'Moncton',
        hotel: {
            nom: 'Days Inn by Wyndham Saint John',
            coordonnees: '175 City Rd, Saint John, NB E2L 3M9',
            nombreEtoiles: 2,
            nombreChambres: 1,
            caracteristiques: ['Piscine', ' Parking gratuit', ' Excellent petit-déjeuner',],
        },
        dateDepart: new Date('2021-06-12'),
        dateRetour: new Date('2021-06-15'),
        prix: 105,
        rabais: 85,
        vedette: true,
    },
    {
        destination: 'Fredericton',
        villeDepart: 'Halifax',
        hotel: {
            nom: 'Delta Hotels by Marriott Fredericton',
            coordonnees: '225 Woodstock Rd, Fredericton, NB E3B 2H8',
            nombreEtoiles: 4,
            nombreChambres: 2,
            caracteristiques: ['Spa', ' Bien situé', ' Excellent service',],
        },
        dateDepart: new Date('2021-07-30'),
        dateRetour: new Date('2021-08-01'),
        prix: 152,
        rabais: 122,
        vedette: false,
    },
]