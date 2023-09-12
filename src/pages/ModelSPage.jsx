import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection'
import modelSImage from '../assets/model-s.jpg'
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import teslaBlueImage from '../assets/tesla-blue.jpg'
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
];

export default function ModelSPage() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection 
                    header="Model S"
                    description="View inventory"
                    backgroundImage={modelSImage}
                    featureItems={featureItems}
                />
            </section>
            <section className='section'>
                <ImageBackgroundNoText backgroundImage={teslaBlueImage}/>
            </section>
            <section className='section'>
                <ImageGrid 
                    image1={modelSImage}
                    image2={teslaBlueImage}
                    text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
                    text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
                />
            </section>
        </div>
    )
}