// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const EndpointType = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    ServiceBus: "ServiceBus",
} as const;

/**
 * The type of Digital Twins endpoint
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];