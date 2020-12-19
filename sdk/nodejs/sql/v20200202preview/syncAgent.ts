// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * An Azure SQL Database sync agent.
 */
export class SyncAgent extends pulumi.CustomResource {
    /**
     * Get an existing SyncAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SyncAgent {
        return new SyncAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sql/v20200202preview:SyncAgent';

    /**
     * Returns true if the given object is an instance of SyncAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyncAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyncAgent.__pulumiType;
    }

    /**
     * Expiration time of the sync agent version.
     */
    public /*out*/ readonly expiryTime!: pulumi.Output<string>;
    /**
     * If the sync agent version is up to date.
     */
    public /*out*/ readonly isUpToDate!: pulumi.Output<boolean>;
    /**
     * Last alive time of the sync agent.
     */
    public /*out*/ readonly lastAliveTime!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the sync agent.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * ARM resource id of the sync database in the sync agent.
     */
    public readonly syncDatabaseId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the sync agent.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a SyncAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.syncAgentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'syncAgentName'");
            }
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["syncAgentName"] = args ? args.syncAgentName : undefined;
            inputs["syncDatabaseId"] = args ? args.syncDatabaseId : undefined;
            inputs["expiryTime"] = undefined /*out*/;
            inputs["isUpToDate"] = undefined /*out*/;
            inputs["lastAliveTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        } else {
            inputs["expiryTime"] = undefined /*out*/;
            inputs["isUpToDate"] = undefined /*out*/;
            inputs["lastAliveTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["syncDatabaseId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:sql/v20150501preview:SyncAgent" }, { type: "azure-nextgen:sql/v20200801preview:SyncAgent" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SyncAgent.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SyncAgent resource.
 */
export interface SyncAgentArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server on which the sync agent is hosted.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The name of the sync agent.
     */
    readonly syncAgentName: pulumi.Input<string>;
    /**
     * ARM resource id of the sync database in the sync agent.
     */
    readonly syncDatabaseId?: pulumi.Input<string>;
}
