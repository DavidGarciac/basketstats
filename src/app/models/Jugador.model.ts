import { EquipoInfo } from './Equipo.model';

export class JugadorInfo {

    static jugadorDesdeJson( obj: Object) {
        return new JugadorInfo(
                obj['id'],
                obj['first_name'],
                obj['last_name'],
                obj['position'],
                obj['height_feet'],
                obj['height_inches'],
                obj['weight_pounds'],
        );
    }
    constructor(public id: number,
                public first_name: string,
                public last_name: string,
                public position: string,
                public height_feet: number,
                public height_inches: number,
                public weight_pounds: number,
                // public team: EquipoInfo,
                ) { }
}