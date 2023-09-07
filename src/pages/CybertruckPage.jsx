import ImageBackgroundSection from "../components/ImageBackgroundSection/ImageBackgroundSection";
import cybertruckImage from '../assets/cybertruck.jpg'

const featureItems = [
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
];

export default function CyberTruck() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection
                    header="Cybertruck"
                    description="View invertory"
                    backgroundImage={cybertruckImage}
                    featureItems={featureItems}
                />
            </section>
        </div>
    )
}