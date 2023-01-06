import { useState } from "react";
import { Collection, Creation as CreationInterface, CreationKey, CreationType, Difficulty as DifficultyInterface } from "../../types";
import { FilterSection } from "../../components/common/FilterSection";
import { Form } from "../../components/common/Form";
import { List } from "../../components/common/List";
import { Search } from "../../components/common/search/Search";
import { Section } from "../../components/common/Section";
import { Checkbox } from "../../components/form-elements/Checkbox";
import { Aside } from "../../components/layout/Aside";
import { ContentWrapper } from "../../components/layout/ContentWrapper";
import { Main } from "../../components/layout/Main";
import { CreationElement } from "./CreationElement";
import { Label } from "../../components/form-elements/Label";
import { Difficulty } from "../../components/common/Difficulty";

//
interface CreationForm {
    types: CreationType[];
    opuses: (number | null)[];
    difficulty: DifficultyInterface;
    toDo: boolean;
    keys: CreationKey[];
}
//

export const Creation = () => {
    //
    const creation: CreationInterface[] = [
        {
            id: '550045d1-57e5-411d-b41c-d2b77ce9ef8e',
            name: 'Mazurka in A minor',
            number: 4,
            opus: 17,
            sheetMusic: 1,
            type: CreationType.Mazurka,
            difficulty: 3,
            key: CreationKey.AMinor,
        },
        {
            id: 'e6142da0-f331-48cd-ad1d-ebb0778904cd',
            name: 'Etude in C minor',
            number: 12,
            opus: 25,
            sheetMusic: 1,
            type: CreationType.Etude,
            difficulty: 4,
            key: CreationKey.CMinor,
        },
        {
            id: 'e4b20592-b8b6-462a-a6dd-e9a0b6d01974',
            name: 'Etude in C sharp minor',
            number: 4,
            opus: 10,
            sheetMusic: 3,
            type: CreationType.Etude,
            difficulty: 5,
            key: CreationKey.CSharpMinor
        },
        {
            id: 'ee21dd59-b4ea-4700-8bcd-9a84f193f041',
            name: 'Etude in C major',
            number: 1,
            opus: 10,
            sheetMusic: 1,
            type: CreationType.Etude,
            difficulty: 3,
            key: CreationKey.CMajor,
        },
        {
            id: '9cc7ea31-d20f-4699-b335-1f137cbeddc2',
            name: 'Ballade in G minor',
            number: null,
            opus: 23,
            sheetMusic: 2,
            type: CreationType.Ballade,
            difficulty: 4,
            key: CreationKey.GMinor,
        },
    ];

    const creationTypes: CreationType[] = [CreationType.Ballade, CreationType.Concerto, CreationType.Etude, CreationType.Impromptu, CreationType.Mazurka, CreationType.Nocturne, CreationType.Polonaise, CreationType.Prelude, CreationType.Scherzo, CreationType.Sonata, CreationType.Waltz];

    const keys = [CreationKey.AFlatMajor, CreationKey.AFlatMinor, CreationKey.AMajor, CreationKey.AMinor, CreationKey.ASharpMajor, CreationKey.ASharpMinor, CreationKey.BFlatMajor, CreationKey.BFlatMinor, CreationKey.BMajor, CreationKey.BMinor, CreationKey.BSharpMajor, CreationKey.BSharpMinor, CreationKey.CFlatMajor, CreationKey.CFlatMinor, CreationKey.CMajor, CreationKey.CMinor, CreationKey.CSharpMajor, CreationKey.CSharpMinor, CreationKey.DFlatMajor, CreationKey.DFlatMinor, CreationKey.DMajor, CreationKey.DMinor, CreationKey.DSharpMajor, CreationKey.DSharpMinor, CreationKey.EFlatMajor, CreationKey.EFlatMinor, CreationKey.EMajor, CreationKey.EMinor, CreationKey.ESharpMajor, CreationKey.ESharpMinor, CreationKey.FFlatMajor, CreationKey.FFlatMinor, CreationKey.FMajor, CreationKey.FMinor, CreationKey.FSharpMajor, CreationKey.FSharpMinor, CreationKey.GFlatMajor, CreationKey.GFlatMinor, CreationKey.GMajor, CreationKey.GMinor, CreationKey.GSharpMajor, CreationKey.GSharpMinor];
    //

    const [form, setForm] = useState<CreationForm>({
        types: [],
        opuses: [],
        difficulty: null,
        toDo: false,
        keys: [],
    });

    const handleSubmit = async () => {
        console.log('Wysyłam...');
    };

    const handleCreationTypesChoosedChange = (type: CreationType) => {
        const isAlreadyChecked = form.types.findIndex(t => t === type) !== -1;
        setForm(state => ({
            ...state,
            types: isAlreadyChecked ? state.types.filter(t => t !== type) : [...state.types, type],
        }));
    };
    const handleOpusesChoosedChange = (opus: number | null) => {
        const isAlreadyChecked = form.opuses.findIndex(o => o === opus) !== -1;
        setForm(state => ({
            ...state,
            opuses: isAlreadyChecked ? state.opuses.filter(o => o !== opus) : [...state.opuses, opus],
        }));
    };
    const handleDifficultyChange = (range: [number, number] | null) => {
        setForm(state => ({ ...state, difficulty: range }));
    };
    const handleCreationKeysChoosedCHange = (key: CreationKey) => {
        const isAlreadyChecked = form.keys.findIndex(k => k === key) !== -1;
        setForm(state => ({
            ...state,
            keys: isAlreadyChecked ? state.keys.filter(k => k !== key) : [...state.keys, key],
        }));
    };

    const creationTypesList = () => {
        return creationTypes.map(e => (
            <Label key={e} value={e} onClick={() => handleCreationTypesChoosedChange(e)}>
                <Checkbox checked={form.types.includes(e)} />
            </Label>
        ));
    };

    const opusesList = () => {
        const opuses: (number | null)[] = [];
        for (let i = 0; i < 74; i++) {
            opuses.push(i);
        }
        opuses.push(null);
        return opuses.map((o, i) => (
            <Label key={String(i)} value={o ?? 'no opus'} onClick={() => handleOpusesChoosedChange(o)}>
                <Checkbox checked={form.opuses.includes(o)} />
            </Label>
        ))
    };

    const keysList = () => {
        return keys.map(k => (
            <Label key={k} value={k} onClick={() => handleCreationKeysChoosedCHange(k)}>
                <Checkbox checked={form.keys.includes(k)}/>
            </Label>
        ))
    };

    const creationList = () => {
        return creation.map(e => <CreationElement key={e.id} creation={e} />);
    };

    return (
        <ContentWrapper withAside>
            <Aside>
                <Section>
                    <Form
                        errors={null}
                        handleSubmit={handleSubmit}
                    >
                        <FilterSection title="Creation Types">
                            {creationTypesList()}
                        </FilterSection>
                        <FilterSection title="Opus">
                            {opusesList()}
                        </FilterSection>
                        <FilterSection>
                            {/* TO DO */}
                            <Difficulty handleChange={handleDifficultyChange} value={form.difficulty}/>
                        </FilterSection>
                        <FilterSection title="ToDo">
                            <Label value="in plans" onClick={() => setForm(state => ({ ...state, toDo: !state.toDo }))}>
                                <Checkbox checked={form.toDo} />
                            </Label>
                        </FilterSection>
                        <FilterSection title="Keys">
                            {keysList()}
                        </FilterSection>
                    </Form>
                </Section>
            </Aside>
            <Main className="creation">
                <Section>
                    <Search
                        collection={Collection.Creation}
                        className="creation__search"
                        placeholder="search"
                        center
                    />
                    <List className="creation__list">
                        {creationList()}
                    </List>
                </Section>
            </Main>
        </ContentWrapper>
    );
};