import BigHeader from "../Components/Headers/BigHeader";
import Number from "../Loaders/Number";
import NumberSection from "../Components/About/NumberSection";

const About = (props) => {
    return (
        <div className={"flex flex-col items-center justify-center min-h-dvh px-24"} id={props.name}>
            <BigHeader>
                Hakkında
            </BigHeader>
            <p className={"mt-4"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolor dolorem eius esse, et
                exercitationem facere iusto labore molestiae non pariatur placeat quae quia quo ratione rerum sed
                temporibus, voluptatum! Asperiores aspernatur assumenda at atque beatae corporis culpa debitis delectus
                enim eos fuga fugit ipsa ipsam iusto laudantium, magnam maiores modi necessitatibus non omnis
                praesentium quia quibusdam quod rem repellat sed ut vitae! Exercitationem facilis illo ipsum.
                Accusantium, animi consectetur dolor eveniet excepturi nam obcaecati, quibusdam quod ratione recusandae
                sint tempora voluptates voluptatum. Amet corporis delectus dicta, ea eaque eos, expedita hic inventore
                labore non perspiciatis placeat reprehenderit sapiente, vero voluptatum. Aliquam culpa delectus, dolor
                ducimus, eaque fuga maxime mollitia nesciunt nisi obcaecati placeat quia repellat repellendus soluta
                sunt vel vitae voluptas. Ad amet atque dignissimos dolore dolorem dolores dolorum exercitationem
                expedita fuga fugit illum ipsa iste laboriosam laudantium libero magni minima non nulla, odit omnis
                optio pariatur quam quasi recusandae repudiandae sed, suscipit tempora. Amet consequatur culpa dolore et
                illum, iste possimus quas sapiente vel voluptate. Adipisci aliquam autem eaque fugit molestias nobis
                obcaecati officiis pariatur. Facere fugiat maiores minima natus optio sint tempore! Adipisci commodi
                cum, earum fugiat illo iste nihil possimus praesentium qui quia quo saepe sequi?
            </p>
            <NumberSection/>
        </div>
    )
}

export default About;