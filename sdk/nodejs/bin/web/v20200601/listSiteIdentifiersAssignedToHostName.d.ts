import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listSiteIdentifiersAssignedToHostName(args?: ListSiteIdentifiersAssignedToHostNameArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteIdentifiersAssignedToHostNameResult>;
export interface ListSiteIdentifiersAssignedToHostNameArgs {
    /**
     * Name of the object.
     */
    readonly name?: string;
}
/**
 * Collection of identifiers.
 */
export interface ListSiteIdentifiersAssignedToHostNameResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: outputs.web.v20200601.IdentifierResponse[];
}
