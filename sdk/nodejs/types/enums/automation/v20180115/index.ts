// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ContentSourceType = {
    EmbeddedContent: "embeddedContent",
    Uri: "uri",
} as const;

/**
 * Gets or sets the content source type.
 */
export type ContentSourceType = (typeof ContentSourceType)[keyof typeof ContentSourceType];