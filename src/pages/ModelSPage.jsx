import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection'
import modelSImage from '../assets/model-s.jpg'

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
        </div>
    )
}