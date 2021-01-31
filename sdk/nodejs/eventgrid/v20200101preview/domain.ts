// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * EventGrid Domain
 */
export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:eventgrid/v20200101preview:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    /**
     * Endpoint for the domain.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the domain.
     */
    public readonly inputSchema!: pulumi.Output<string | undefined>;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    public readonly inputSchemaMapping!: pulumi.Output<outputs.eventgrid.v20200101preview.JsonInputSchemaMappingResponse | undefined>;
    /**
     * Location of the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metric resource id for the domain.
     */
    public /*out*/ readonly metricResourceId!: pulumi.Output<string>;
    /**
     * Name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the domain.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Tags of the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.domainName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["domainName"] = args ? args.domainName : undefined;
            inputs["inputSchema"] = (args ? args.inputSchema : undefined) || "EventGridSchema";
            inputs["inputSchemaMapping"] = args ? args.inputSchemaMapping : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["endpoint"] = undefined /*out*/;
            inputs["metricResourceId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["endpoint"] = undefined /*out*/;
            inputs["inputSchema"] = undefined /*out*/;
            inputs["inputSchemaMapping"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["metricResourceId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:eventgrid/latest:Domain" }, { type: "azure-nextgen:eventgrid/v20180915preview:Domain" }, { type: "azure-nextgen:eventgrid/v20190201preview:Domain" }, { type: "azure-nextgen:eventgrid/v20190601:Domain" }, { type: "azure-nextgen:eventgrid/v20200401preview:Domain" }, { type: "azure-nextgen:eventgrid/v20200601:Domain" }, { type: "azure-nextgen:eventgrid/v20201015preview:Domain" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Domain.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * Name of the domain
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the domain.
     */
    readonly inputSchema?: pulumi.Input<string | enums.eventgrid.v20200101preview.InputSchema>;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    readonly inputSchemaMapping?: pulumi.Input<inputs.eventgrid.v20200101preview.JsonInputSchemaMapping>;
    /**
     * Location of the resource
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
