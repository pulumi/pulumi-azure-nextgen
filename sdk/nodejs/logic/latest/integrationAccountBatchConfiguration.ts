// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The batch configuration resource definition.
 * Latest API Version: 2019-05-01.
 */
export class IntegrationAccountBatchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountBatchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountBatchConfiguration {
        return new IntegrationAccountBatchConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:logic/latest:IntegrationAccountBatchConfiguration';

    /**
     * Returns true if the given object is an instance of IntegrationAccountBatchConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccountBatchConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccountBatchConfiguration.__pulumiType;
    }

    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The batch configuration properties.
     */
    public readonly properties!: pulumi.Output<outputs.logic.latest.BatchConfigurationPropertiesResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationAccountBatchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountBatchConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.batchConfigurationName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'batchConfigurationName'");
            }
            if ((!args || args.integrationAccountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.properties === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["batchConfigurationName"] = args ? args.batchConfigurationName : undefined;
            inputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:logic/v20160601:IntegrationAccountBatchConfiguration" }, { type: "azure-nextgen:logic/v20180701preview:IntegrationAccountBatchConfiguration" }, { type: "azure-nextgen:logic/v20190501:IntegrationAccountBatchConfiguration" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(IntegrationAccountBatchConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccountBatchConfiguration resource.
 */
export interface IntegrationAccountBatchConfigurationArgs {
    /**
     * The batch configuration name.
     */
    readonly batchConfigurationName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The batch configuration properties.
     */
    readonly properties: pulumi.Input<inputs.logic.latest.BatchConfigurationProperties>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
