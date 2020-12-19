// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * An Azure SQL job agent.
 */
export class JobAgent extends pulumi.CustomResource {
    /**
     * Get an existing JobAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobAgent {
        return new JobAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sql/v20200202preview:JobAgent';

    /**
     * Returns true if the given object is an instance of JobAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobAgent.__pulumiType;
    }

    /**
     * Resource ID of the database to store job metadata in.
     */
    public readonly databaseId!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name and tier of the SKU.
     */
    public readonly sku!: pulumi.Output<outputs.sql.v20200202preview.SkuResponse | undefined>;
    /**
     * The state of the job agent.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.databaseId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'databaseId'");
            }
            if ((!args || args.jobAgentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            inputs["databaseId"] = args ? args.databaseId : undefined;
            inputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["databaseId"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:sql/v20170301preview:JobAgent" }, { type: "azure-nextgen:sql/v20200801preview:JobAgent" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(JobAgent.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobAgent resource.
 */
export interface JobAgentArgs {
    /**
     * Resource ID of the database to store job metadata in.
     */
    readonly databaseId: pulumi.Input<string>;
    /**
     * The name of the job agent to be created or updated.
     */
    readonly jobAgentName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The name and tier of the SKU.
     */
    readonly sku?: pulumi.Input<inputs.sql.v20200202preview.Sku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
