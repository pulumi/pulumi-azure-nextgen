// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const DeadLetterEndPointType = {
    StorageBlob: "StorageBlob",
} as const;

/**
 * Type of the endpoint for the dead letter destination
 */
export type DeadLetterEndPointType = (typeof DeadLetterEndPointType)[keyof typeof DeadLetterEndPointType];

export const EndpointType = {
    WebHook: "WebHook",
    EventHub: "EventHub",
    StorageQueue: "StorageQueue",
    HybridConnection: "HybridConnection",
} as const;

/**
 * Type of the endpoint for the event subscription destination
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];