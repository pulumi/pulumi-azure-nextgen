// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * EnterpriseKnowledgeGraph resource definition
 */
export class EnterpriseKnowledgeGraph extends pulumi.CustomResource {
    /**
     * Get an existing EnterpriseKnowledgeGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EnterpriseKnowledgeGraph {
        return new EnterpriseKnowledgeGraph(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:enterpriseknowledgegraph/v20181203:EnterpriseKnowledgeGraph';

    /**
     * Returns true if the given object is an instance of EnterpriseKnowledgeGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnterpriseKnowledgeGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnterpriseKnowledgeGraph.__pulumiType;
    }

    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of properties specific to EnterpriseKnowledgeGraph resource
     */
    public readonly properties!: pulumi.Output<outputs.enterpriseknowledgegraph.v20181203.EnterpriseKnowledgeGraphPropertiesResponse>;
    /**
     * Gets or sets the SKU of the resource.
     */
    public readonly sku!: pulumi.Output<outputs.enterpriseknowledgegraph.v20181203.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EnterpriseKnowledgeGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterpriseKnowledgeGraphArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:enterpriseknowledgegraph/latest:EnterpriseKnowledgeGraph" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(EnterpriseKnowledgeGraph.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a EnterpriseKnowledgeGraph resource.
 */
export interface EnterpriseKnowledgeGraphArgs {
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The set of properties specific to EnterpriseKnowledgeGraph resource
     */
    readonly properties?: pulumi.Input<inputs.enterpriseknowledgegraph.v20181203.EnterpriseKnowledgeGraphProperties>;
    /**
     * The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the EnterpriseKnowledgeGraph resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.enterpriseknowledgegraph.v20181203.Sku>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
