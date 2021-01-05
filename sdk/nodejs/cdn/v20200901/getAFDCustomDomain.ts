// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAFDCustomDomain(args: GetAFDCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDCustomDomainResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:cdn/v20200901:getAFDCustomDomain", {
        "customDomainName": args.customDomainName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDCustomDomainArgs {
    /**
     * Name of the domain under the profile which is unique globally.
     */
    readonly customDomainName: string;
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
export interface GetAFDCustomDomainResult {
    /**
     * Resource reference to the Azure DNS zone
     */
    readonly azureDnsZone?: outputs.cdn.v20200901.ResourceReferenceResponse;
    readonly deploymentStatus: string;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
     */
    readonly domainValidationState: string;
    /**
     * The host name of the domain. Must be a domain name.
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
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: outputs.cdn.v20200901.SystemDataResponse;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    readonly tlsSettings?: outputs.cdn.v20200901.AFDDomainHttpsParametersResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Values the customer needs to validate domain ownership
     */
    readonly validationProperties: outputs.cdn.v20200901.DomainValidationPropertiesResponse;
}