import React from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import BodySegmentComponent from "@/components/BodySegmentComponent";
import {IAdminBodySegmentDto} from "@/interface/interfaces";

interface ReviewViewsFulfillmentAreaProps {
    bodySegments: IAdminBodySegmentDto[];
    reviewId: number;
}

export default function ReviewViewsFulfillmentArea({bodySegments, reviewId}: ReviewViewsFulfillmentAreaProps) {

    const viewTypes = [
        {key: "front-view", label: "Front View", segmentGroup: "FrontView"},
        {key: "back-view", label: "Back View", segmentGroup: "BackView"},
        {key: "side-view", label: "Side View", segmentGroup: "SideView"},
        {key: "summary-view", label: "Summary View", segmentGroup: "SummaryView"}
    ];

    return (
        <Accordion type="multiple">
            {viewTypes.map(({key, label, segmentGroup}) => (
                <AccordionItem key={key} value={key}>
                    <AccordionTrigger>{label}</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-4">
                            {bodySegments
                                .filter(segment => segment.segmentGroup === segmentGroup)
                                .map(segment => (
                                    <BodySegmentComponent key={segment.id} reviewId={reviewId} segment={segment}/>
                                ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
