
export enum CreationType {
    Ballade = 'ballade',
    Etude = 'edute',
    Mazurka = 'mazurka',
    Waltz = 'waltz',
    Prelude = 'prelude',
    Nocturne = 'nocturne',
    Scherzo = 'scherzo',
    Polonaise = 'polonaise',
    Sonata = 'sonata',
    Impromptu = 'impromptu',
    Concerto = 'concerto',
    Other = 'other'
}

export enum CreationDifficulty {
    VeryEasy,
    Easy,
    Medium,
    Hard,
    VeryHard,
}

export enum CreationKey {
    CMajor = 'C major',
    DMajor = 'D major',
    EMajor = 'E major',
    FMajor = 'F major',
    GMajor = 'G major',
    AMajor = 'A major',
    BMajor = 'B major',
    CSharpMajor = 'C sharp major',
    DSharpMajor = 'D sharp major',
    ESharpMajor = 'E sharp major',
    FSharpMajor = 'F sharp major',
    GSharpMajor = 'G sharp major',
    ASharpMajor = 'A sharp major',
    BSharpMajor = 'B sharp major',
    CFlatMajor = 'C flat major',
    DFlatMajor = 'D flat major',
    EFlatMajor = 'E flat major',
    FFlatMajor = 'F flat major',
    GFlatMajor = 'G flat major',
    AFlatMajor = 'A flat major',
    BFlatMajor = 'B flat major',
    CMinor = 'C minor',
    DMinor = 'D minor',
    EMinor = 'E minor',
    FMinor = 'F minor',
    GMinor = 'G minor',
    AMinor = 'A minor',
    BMinor = 'B minor',
    CSharpMinor = 'C sharp minor',
    DSharpMinor = 'D sharp minor',
    ESharpMinor = 'E sharp minor',
    FSharpMinor = 'F sharp minor',
    GSharpMinor = 'G sharp minor',
    ASharpMinor = 'A sharp minor',
    BSharpMinor = 'B sharp minor',
    CFlatMinor = 'C flat minor',
    DFlatMinor = 'D flat minor',
    EFlatMinor = 'E flat minor',
    FFlatMinor = 'F flat minor',
    GFlatMinor = 'G flat minor',
    AFlatMinor = 'A flat minor',
    BFlatMinor = 'B flat minor',
}

export interface Creation {
    id: string;
    name: string;
    opus: number | null;
    number: number | null;
    sheetMusic: number;
    type: CreationType;
    difficulty: CreationDifficulty;
    key: CreationKey;
}