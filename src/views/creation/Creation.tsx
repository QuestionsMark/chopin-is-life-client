import { FilterSection } from "../../components/common/FilterSection";
import { List } from "../../components/common/List";
import { Search } from "../../components/common/search/Search";
import { Section } from "../../components/common/Section";
import { Aside } from "../../components/layout/Aside";
import { ContentWrapper } from "../../components/layout/ContentWrapper";
import { Main } from "../../components/layout/Main";
import { Collection, Creation as CreationInterface } from "../../types";
import { CreationElement } from "./CreationElement";

export const Creation = () => {
    //
    const creation: CreationInterface[] = [
        {
            id: '550045d1-57e5-411d-b41c-d2b77ce9ef8e',
            name: 'Mazurka in A minor',
            number: 4,
            opus: 17,
            sheetMusic: 1,
        },
        {
            id: 'e6142da0-f331-48cd-ad1d-ebb0778904cd',
            name: 'Etude in C minor',
            number: 12,
            opus: 25,
            sheetMusic: 1,
        },
        {
            id: 'e4b20592-b8b6-462a-a6dd-e9a0b6d01974',
            name: 'Etude in C sharp minor',
            number: 4,
            opus: 10,
            sheetMusic: 3,
        },
        {
            id: 'ee21dd59-b4ea-4700-8bcd-9a84f193f041',
            name: 'Etude in C major',
            number: 1,
            opus: 10,
            sheetMusic: 1,
        },
        {
            id: '9cc7ea31-d20f-4699-b335-1f137cbeddc2',
            name: 'Ballade in G minor',
            number: null,
            opus: 23,
            sheetMusic: 2,
        },
    ];
    //
    const creationList = () => {
        return creation.map(e => <CreationElement key={e.id} creation={e} />);
    };

    return (
        <ContentWrapper withAside>
            <Aside>
                <Section>
                    <FilterSection>
                        Twórczość - checkbox
                    </FilterSection>
                    <FilterSection>
                        Opus - checkbox
                    </FilterSection>
                    <FilterSection>
                        Poziom Trudności - zakres?
                    </FilterSection>
                    <FilterSection>
                        W ToDo - checkbox
                    </FilterSection>
                    <FilterSection>
                        Tonacja - checkbox
                    </FilterSection>
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