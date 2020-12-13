// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 */
export class AFDCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing AFDCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDCustomDomain {
        return new AFDCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:cdn/latest:AFDCustomDomain';

    /**
     * Returns true if the given object is an instance of AFDCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDCustomDomain.__pulumiType;
    }

    /**
     * Resource reference to the Azure DNS zone
     */
    public readonly azureDnsZone!: pulumi.Output<outputs.cdn.latest.ResourceReferenceResponse | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
     */
    public /*out*/ readonly domainValidationState!: pulumi.Output<string>;
    /**
     * The host name of the domain. Must be a domain name.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.cdn.latest.SystemDataResponse>;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    public readonly tlsSettings!: pulumi.Output<outputs.cdn.latest.AFDDomainHttpsParametersResponse | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Values the customer needs to validate domain ownership
     */
    public /*out*/ readonly validationProperties!: pulumi.Output<outputs.cdn.latest.DomainValidationPropertiesResponse>;

    /**
     * Create a AFDCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.customDomainName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'customDomainName'");
            }
            if ((!args || args.hostName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.profileName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["azureDnsZone"] = args ? args.azureDnsZone : undefined;
            inputs["customDomainName"] = args ? args.customDomainName : undefined;
            inputs["hostName"] = args ? args.hostName : undefined;
            inputs["profileName"] = args ? args.profileName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tlsSettings"] = args ? args.tlsSettings : undefined;
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["domainValidationState"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["validationProperties"] = undefined /*out*/;
        } else {
            inputs["azureDnsZone"] = undefined /*out*/;
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["domainValidationState"] = undefined /*out*/;
            inputs["hostName"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["tlsSettings"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["validationProperties"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:cdn/v20200901:AFDCustomDomain" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(AFDCustomDomain.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDCustomDomain resource.
 */
export interface AFDCustomDomainArgs {
    /**
     * Resource reference to the Azure DNS zone
     */
    readonly azureDnsZone?: pulumi.Input<inputs.cdn.latest.ResourceReference>;
    /**
     * Name of the domain under the profile which is unique globally
     */
    readonly customDomainName: pulumi.Input<string>;
    /**
     * The host name of the domain. Must be a domain name.
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
     */
    readonly tlsSettings?: pulumi.Input<inputs.cdn.latest.AFDDomainHttpsParameters>;
}
