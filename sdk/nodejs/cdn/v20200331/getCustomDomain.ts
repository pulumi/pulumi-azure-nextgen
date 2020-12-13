// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getCustomDomain(args: GetCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:cdn/v20200331:getCustomDomain", {
        "customDomainName": args.customDomainName,
        "endpointName": args.endpointName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomDomainArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    readonly customDomainName: string;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: string;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 */
export interface GetCustomDomainResult {
    /**
     * Provisioning status of Custom Https of the custom domain.
     */
    readonly customHttpsProvisioningState: string;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
     */
    readonly customHttpsProvisioningSubstate: string;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    readonly hostName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status of the custom domain.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the custom domain.
     */
    readonly resourceState: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
     */
    readonly validationData?: string;
}
