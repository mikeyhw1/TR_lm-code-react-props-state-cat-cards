interface PetImageProps {
    petItem: {
        image: string;
        altText: string;
        licenceType: string;
        licenceUrl: string;
        attributionName?: string;
        attributionUrl?: string;
    };
}

const PetImage: React.FC<PetImageProps> = ({ petItem }) => {
    const { image, altText, licenceType, licenceUrl, attributionName, attributionUrl } = petItem;
    return (
        <>
            <img className="card__image" src={image} alt={altText} />
            <p className="card__text__small">
                Image licenced under <a href={licenceUrl}>{licenceType}</a>
                {attributionName && (
                    <>
                        &nbsp;by <a href={attributionUrl}>{attributionName}</a>
                    </>
                )}
            </p>
        </>
    );
};

export default PetImage;
