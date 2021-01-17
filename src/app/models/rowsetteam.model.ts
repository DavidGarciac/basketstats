export class Rowsetteam {
    // tslint:disable-next-line: ban-types
    static RowseteamDesdeJson( obj: Object) {
        return new Rowsetteam(
           obj['fga2'],
           obj['pts'],
           obj['val'],
           obj['min'],
           obj['tov'],
           obj['fga3'],
           obj['fgper'],
           obj['fta'],
           obj['pf'],
           obj['blk'],
           obj['ftm'],
           obj['ftpe'],
           obj['fgm2'],
           obj['fgm3'],
           obj['foto'],
           obj['mat'],
           obj['ast'],
           obj['fgm'],
           obj['fg2per'],
           obj['partidos'],
           obj['dreb'],
           obj['fga'],
           obj['stl'],
           obj['nombre_equipo'],
           obj['treb'],
           obj['oreb'],
           obj['dpf'],
           obj['dblk'], 
           obj['fg3per'],
        );
    }

    constructor(
        public fga2: number,
        public pts: number,
        public val: number,
        public min: string,
        public tov: number,
        public fga3: number,
        public fgper: number,
        public fta:  number,
        public pf:  number,
        public blk: number,
        public ftm: number,
        public ftper: number,
        public fgm2: number,
        public fgm3: number,
        public foto: string,
        public mat: number,
        public ast: number,
        public fgm: number,
        public fg2per: number,
        public partidos: number,
        public dreb: number,
        public fga: number,
        public stl: number,
        public nombre_equipo: string,
        public treb: number,
        public oreb: number,
        public dpf: number,
        public dblk: number,
        public fg3per: number,
                ) { }

}

