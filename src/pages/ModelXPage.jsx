import modelXImage from '../assets/model-x.jpg'
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection'

const featureItems = [
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
    {title: '2.3s 0-60', description:'fast'},
];

export default function ModelXPage() {
    return (
        <div className="container">
            <section className="section">
                <ImageBackgroundSection 
                    header="Model X"
                    description="View inventory"
                    backgroundImage={modelXImage}
                    featureItems={featureItems}
                />
            </section>
        </div>
    )
}