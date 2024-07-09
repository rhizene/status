import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";

const captionOptions = {
    descriptionTextAlign: "center"
};

export default function LightboxButton({images}){
    const [open, setOpen] = React.useState(false);

    return <>
        <em className="text-button" onClick={() => setOpen(true)}>
            images
        </em>
        <Lightbox plugins={[Captions]} captions={captionOptions} open={open} close={() => setOpen(false)} slides={[...images]} />
    </>
    
}
