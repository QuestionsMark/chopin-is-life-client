import { Baner } from "../../components/common/Baner/Baner";
import { Paragraph } from "../../components/common/Paragraph";
import { Section } from "../../components/common/Section";

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import { ContentWrapper } from "../../components/layout/ContentWrapper";
import { Main } from "../../components/layout/Main";
import { Aside } from "../../components/layout/Aside";

export const Home = () => {
    return (
        <ContentWrapper withAside>
            <Main className="home">
                <Section noPadding>
                    <Baner
                        slides={[
                            { alt: 'siema', src: img1 },
                            { alt: 'siema2', src: img2 }, 
                            { alt: 'siema2', src: img3, text: "Króciutki opis tak o żeby sprawdzić jak to wszystko bedzie wyglądało na podglądzie. Sprawdzimy czy na telkefonie też łatnie wyświetla, a jak nie, to zrobimy tak żeby dobrze wyświetlało.", title: 'Konkurs Chopinowski 2025!' }
                        ]} 
                        isStatic
                        />
                </Section>
                <Section title="Nowości">
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quia odit optio dolorem delectus, consequuntur nesciunt nisi exercitationem numquam quis quisquam velit ipsa aspernatur, et adipisci molestias. Error, provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas cum sequi fugiat eligendi, iste voluptas corporis. Quos quas quaerat dicta id quam ea ex enim itaque aliquam, inventore quisquam.
                    </Paragraph>
                </Section>
                <Section title="Ostatnie Wydarzenia Społecznościowe">
                    <Paragraph end>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quia odit optio dolorem delectus, consequuntur nesciunt nisi exercitationem numquam quis quisquam velit ipsa aspernatur, et adipisci molestias. Error, provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas cum sequi fugiat eligendi, iste voluptas corporis. Quos quas quaerat dicta id quam ea ex enim itaque aliquam, inventore quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident perspiciatis ex nam odit obcaecati suscipit cum delectus est quas dolor sed libero reiciendis hic iste, a maxime, magni fugit repudiandae.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quia odit optio dolorem delectus, consequuntur nesciunt nisi exercitationem numquam quis quisquam velit ipsa aspernatur, et adipisci molestias. Error, provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas cum sequi fugiat eligendi, iste voluptas corporis. Quos quas quaerat dicta id quam ea ex enim itaque aliquam, inventore quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident perspiciatis ex nam odit obcaecati suscipit cum delectus est quas dolor sed libero reiciendis hic iste, a maxime, magni fugit repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptas, ut maxime cum architecto et veniam quidem nisi ipsum tempore suscipit eos eligendi, veritatis voluptatum, laboriosam molestiae eum ab dolore.
                    </Paragraph>
                </Section>
                <Section title="Ostatnie Wydarzenia Społecznościowe">
                    <Paragraph end>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quia odit optio dolorem delectus, consequuntur nesciunt nisi exercitationem numquam quis quisquam velit ipsa aspernatur, et adipisci molestias. Error, provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas cum sequi fugiat eligendi, iste voluptas corporis. Quos quas quaerat dicta id quam ea ex enim itaque aliquam, inventore quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident perspiciatis ex nam odit obcaecati suscipit cum delectus est quas dolor sed libero reiciendis hic iste, a maxime, magni fugit repudiandae.
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quia odit optio dolorem delectus, consequuntur nesciunt nisi exercitationem numquam quis quisquam velit ipsa aspernatur, et adipisci molestias. Error, provident? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas cum sequi fugiat eligendi, iste voluptas corporis. Quos quas quaerat dicta id quam ea ex enim itaque aliquam, inventore quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident perspiciatis ex nam odit obcaecati suscipit cum delectus est quas dolor sed libero reiciendis hic iste, a maxime, magni fugit repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptas, ut maxime cum architecto et veniam quidem nisi ipsum tempore suscipit eos eligendi, veritatis voluptatum, laboriosam molestiae eum ab dolore.
                    </Paragraph>
                </Section>
            </Main>
            <Aside>
                <Section>
                    {/* <ChopinCompetitionCounter /> */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptas ut, reiciendis, porro cupiditate rem perferendis nihil at dolores molestiae nulla distinctio fuga suscipit tempora. Animi sed exercitationem laborum inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit exercitationem molestiae consectetur quibusdam laudantium sed, aliquid repudiandae a quisquam impedit accusantium eum nemo iste nulla error cum tempora explicabo!
                </Section>
                <Section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, excepturi nesciunt error neque debitis nihil tenetur nam quae impedit repudiandae! Provident voluptatibus omnis veritatis, unde eius tempora ad nemo voluptas?
                </Section>
                <Section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem possimus fuga quia modi, ex sunt earum provident, tempora delectus veniam odio officia facere nisi ratione, mollitia quod unde nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque beatae, doloremque tempore numquam ipsum explicabo minima quos? Reprehenderit quaerat ipsam eius expedita nostrum voluptatibus qui sint quo atque dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quos, vero suscipit dignissimos porro optio animi assumenda. Iste neque, quaerat animi nisi adipisci tenetur ea eveniet assumenda aspernatur libero doloribus.
                </Section>
            </Aside>
        </ContentWrapper>
    );
};