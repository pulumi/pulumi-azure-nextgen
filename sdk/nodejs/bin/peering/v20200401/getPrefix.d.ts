import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrefix(args: GetPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixResult>;
export interface GetPrefixArgs {
    /**
     * The properties to be expanded.
     */
    readonly expand?: string;
    /**
     * The name of the peering service.
     */
    readonly peeringServiceName: string;
    /**
     * The name of the prefix.
     */
    readonly prefixName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The peering service prefix class.
 */
export interface GetPrefixResult {
    /**
     * The error message for validation state
     */
    readonly errorMessage: string;
    /**
     * The list of events for peering service prefix
     */
    readonly events: outputs.peering.v20200401.PeeringServicePrefixEventResponse[];
    /**
     * The prefix learned type
     */
    readonly learnedType: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The peering service prefix key
     */
    readonly peeringServicePrefixKey?: string;
    /**
     * The prefix from which your traffic originates.
     */
    readonly prefix?: string;
    /**
     * The prefix validation state
     */
    readonly prefixValidationState: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
