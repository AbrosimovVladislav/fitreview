"use client";

import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TooltipProvider} from "@radix-ui/react-tooltip";

export default function ClientProviders({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();

    return (
        <TooltipProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </TooltipProvider>
    );
}
