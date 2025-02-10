import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import BodySegmentComponent from "@/components/BodySegmentComponent";

export default function ReviewViewsFulfillmentArea() {

    const handleUpload = (file: File) => {
        console.log("Uploaded file:", file);
    };

    const handleLinkClick = () => {
        alert("Image link clicked");
    };

    return (
        <Accordion type="single" collapsible>
            {/* Front View */}
            <AccordionItem value="front-view">
                <AccordionTrigger>Front View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        <BodySegmentComponent
                            title="Front View Left 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                        <BodySegmentComponent
                            title="Front View Right 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                        <BodySegmentComponent
                            title="Front View Left 2"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                        <BodySegmentComponent
                            title="Front View Right 2"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Back View */}
            <AccordionItem value="back-view">
                <AccordionTrigger>Back View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        <BodySegmentComponent
                            title="Back View Left 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                        <BodySegmentComponent
                            title="Back View Right 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Side Views */}
            <AccordionItem value="side-views">
                <AccordionTrigger>Side Views</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        <BodySegmentComponent
                            title="Side View Left 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                        <BodySegmentComponent
                            title="Side View Right 1"
                            description="... and here we can see under arrow 4 a lot of issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Summary View */}
            <AccordionItem value="summary-view">
                <AccordionTrigger>Summary View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        <BodySegmentComponent
                            title="Summary View"
                            description="... and here we can summarize all issues..."
                            imageUrl="https://via.placeholder.com/150"
                            onUpload={handleUpload}
                            onLinkClick={handleLinkClick}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
