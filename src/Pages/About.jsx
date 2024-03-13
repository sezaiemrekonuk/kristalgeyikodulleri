import BigHeader from "../Components/Headers/BigHeader";
import Number from "../Loaders/Number";
import NumberSection from "../Components/About/NumberSection";

const About = (props) => {
    return (
        <div className={"flex flex-col items-center justify-center min-h-dvh px-12 lg:px-24 py-24"} id={props.name}>
            <BigHeader>
                Hakkında
            </BigHeader>
            <p className={"mt-4 flex flex-col gap-6"}>
                <p>
                    Hacettepe Üniversitesi, ilk kez 2018 yılında, Hacettepe
                    Üniversitesi öğrencilerinin kullandıkları oylar sonucunda
                    sektördeki en başarılı şirket veya kişileri seçip; bu şirket
                    veya kişileri Hacettepe Üniversitesi öğrencileriyle bir
                    araya getirmek amacıyla "Kristal Geyik Ödülleri"
                    etkinliğini organize etmiştir. 2024 yılında altıncı kez
                    gerçekleşecek olan bu etkinlik yenilikçi, gelişmeye açık
                    ve interaktif olmasından ötürü öğrenciler tarafından
                    büyük bir ilgi görmenin yanı sıra seneler geçtikçe
                    katılımın arttığı başarılı kişiler ve köklü şirket sayısı ile de
                    basında ve Türkiye genelinde de görünürlük açısından
                    ilerleme kaydetmiştir.
                </p>
                <p>
                    Etkinliğin Hacettepe Üniversitesi’nin büyük desteğiyle
                    Öğrenci Temsilciler Konseyi ve Hacettepe
                    Üniversitesi'nin önde gelen 6 büyük öğrenci topluluğu (ACM Hacettepe Öğrenci Topluluğu, Genç
                    Mühendisler Topluluğu, Hacettepe Ekonomi Topluluğu, Hacettepe Endüstri ve Sistem Topluluğu,
                    Hacettepe Kültür Sanat Topluluğu ve Hacettepe Otomotiv Topluluğu) ile
                    iş birliği yapılarak düzenlemesi kararı alınmıştır.
                    Üniversitemizin ve organizasyon komitemizin vizyonları
                    doğrultusunda ülkemizin başarılı kişilerinin ve köklü
                    şirketlerinin katılımı ile büyük önem arz eden "Kristal
                    Geyik Ödülleri" etkinliği Hacettepe Üniversitesi Tunçalp
                    Özgen Kongre ve Kültür Merkezi’nde gerçekleştirilecektir.
                </p>
            </p>
            <NumberSection/>
        </div>
    )
}

export default About;