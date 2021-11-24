export interface TypeForfaits {
    destination: string;
    villeDepart: string;
    hotel: {
        nom: string;
        coordonnees: string;
        nombreEtoiles: number;
        nombreChambres: number;
        caracteristiques: object;
    };
    dateDepart: Date;
    dateRetour: Date;
    prix: number;
    rabais: number;
    vedette: boolean;
}