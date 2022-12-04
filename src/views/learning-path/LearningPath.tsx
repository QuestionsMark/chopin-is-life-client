import { LearningPath as LearningPathInterface } from "../../types";

import { Section } from "../../components/common/Section";
import { ContentWrapper } from "../../components/layout/ContentWrapper";
import { Main } from "../../components/layout/Main";
import { LearningPathElement } from "./LearningPathElement";
import { List } from "../../components/common/List";
import { Paragraph } from "../../components/common/Paragraph";

export const LearningPath = () => {
    //
    const creation: LearningPathInterface[] = [
        {
            id: '11ebf979-f945-4d53-911e-b18b3aa9ef47',
            title: "Chopin's Competition",
        },
        {
            id: 'd71f0e9c-f66c-4ce4-9701-43615499b00e',
            title: 'Just Learn Some Chopin',
        },
        {
            id: '83eeb77e-00a5-4e27-a75a-e9fd435fcb91',
            title: 'Competitions Master',
        },
        {
            id: '0a48fd33-b414-4785-b121-fcf5297ec9ec',
            title: 'Make Your Technic High Level',
        },
    ];
    //

    const learningPathsList = () => {
        return creation.map(e => <LearningPathElement key={e.id} learningPath={e} />);
    };

    return (
        <ContentWrapper>
            <Main className="learning-path">
                <Section title="Recommended Learning Paths">
                    <List className="learning-path__list">
                        {learningPathsList()}
                    </List>
                </Section>
                <Section title="Best Way To Learn Chopin">
                    <Paragraph end>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet necessitatibus officiis soluta a, debitis repellendus dolorum voluptatum quidem perferendis ut nulla dolore sint. Corporis dignissimos nihil excepturi qui voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ab similique tempore, ea dicta consequatur animi excepturi perspiciatis suscipit soluta mollitia sed dolor corporis! Voluptatibus quos reiciendis aut voluptatem.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eveniet necessitatibus officiis soluta a, debitis repellendus dolorum voluptatum quidem perferendis ut nulla dolore sint. Corporis dignissimos nihil excepturi qui voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ab similique tempore, ea dicta consequatur animi excepturi perspiciatis suscipit soluta mollitia sed dolor corporis! Voluptatibus quos reiciendis aut voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempore natus ducimus sunt quos illum voluptatibus dolore molestias qui nulla modi rerum laudantium aut ipsum magni eum vitae distinctio totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorem asperiores dolores sit? Minus corporis natus, temporibus autem deleniti sunt accusantium itaque error explicabo consectetur hic quibusdam architecto voluptatibus necessitatibus.
                    </Paragraph>
                </Section>
            </Main>
        </ContentWrapper>
    );
};