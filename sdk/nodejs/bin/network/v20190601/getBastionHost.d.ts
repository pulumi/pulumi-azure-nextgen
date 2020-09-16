import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBastionHost(args: GetBastionHostArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionHostResult>;
export interface GetBastionHostArgs {
    /**
     * The name of the Bastion Host.
     */
    readonly bastionHostName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Bastion Host resource.
 */
export interface GetBastionHostResult {
    /**
     * FQDN for the endpoint on which bastion host is accessible.
     */
    readonly dnsName?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * IP configuration of the Bastion Host resource.
     */
    readonly ipConfigurations?: outputs.network.v20190601.BastionHostIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
