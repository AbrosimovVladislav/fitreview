import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import BodySegmentComponent from "@/components/BodySegmentComponent";

export default function ReviewViewsFulfillmentArea({bodySegments}) {

    const handleUpload = (file: File) => {
        console.log("Uploaded file:", file);
    };

    const handleLinkClick = () => {
        alert("Image link clicked");
    };

    return (
        <Accordion type="multiple" collapsible>
            {/* Front View */}
            <AccordionItem value="front-view">
                <AccordionTrigger>Front View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            bodySegments.filter(segment=> 'FrontView' === segment.segmentGroup)
                                .map(segment =>
                                <BodySegmentComponent
                                    segment={segment}
                                    onUpload={handleUpload}
                                    onLinkClick={handleLinkClick}
                                />
                            )
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Back View */}
            <AccordionItem value="back-view">
                <AccordionTrigger>Back View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            bodySegments.filter(segment=> 'BackView' === segment.segmentGroup)
                                .map(segment =>
                                    <BodySegmentComponent
                                        segment={segment}
                                        onUpload={handleUpload}
                                        onLinkClick={handleLinkClick}
                                    />
                                )
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Side Views */}
            <AccordionItem value="side-view">
                <AccordionTrigger>Side View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            bodySegments.filter(segment=> 'SideView' === segment.segmentGroup)
                                .map(segment =>
                                    <BodySegmentComponent
                                        segment={segment}
                                        onUpload={handleUpload}
                                        onLinkClick={handleLinkClick}
                                    />
                                )
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>

            {/* Summary View */}
            <AccordionItem value="summary-view">
                <AccordionTrigger>Summary View</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            bodySegments.filter(segment=> 'SummaryView' === segment.segmentGroup)
                                .map(segment =>
                                    <BodySegmentComponent
                                        segment={segment}
                                        onUpload={handleUpload}
                                        onLinkClick={handleLinkClick}
                                    />
                                )
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
