// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Attestation service response message.
 */
export class AttestationProvider extends pulumi.CustomResource {
    /**
     * Get an existing AttestationProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttestationProvider {
        return new AttestationProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:attestation/latest:AttestationProvider';

    /**
     * Returns true if the given object is an instance of AttestationProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AttestationProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AttestationProvider.__pulumiType;
    }

    /**
     * Gets the uri of attestation service
     */
    public /*out*/ readonly attestUri!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Status of attestation service.
     */
    public /*out*/ readonly status!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.attestation.latest.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Trust model for the attestation service instance.
     */
    public /*out*/ readonly trustModel!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AttestationProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttestationProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.properties === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.providerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'providerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["providerName"] = args ? args.providerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["attestUri"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["trustModel"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["attestUri"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["trustModel"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:attestation/v20180901preview:AttestationProvider" }, { type: "azure-nextgen:attestation/v20201001:AttestationProvider" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(AttestationProvider.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a AttestationProvider resource.
 */
export interface AttestationProviderArgs {
    /**
     * The supported Azure location where the attestation service instance should be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Properties of the attestation service instance
     */
    readonly properties: pulumi.Input<inputs.attestation.latest.AttestationServiceCreationSpecificParams>;
    /**
     * Name of the attestation service instance.
     */
    readonly providerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the attestation service instance.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
