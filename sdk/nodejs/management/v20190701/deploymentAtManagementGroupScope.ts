// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Deployment information.
 */
export class DeploymentAtManagementGroupScope extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentAtManagementGroupScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentAtManagementGroupScope {
        return new DeploymentAtManagementGroupScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:management/v20190701:DeploymentAtManagementGroupScope';

    /**
     * Returns true if the given object is an instance of DeploymentAtManagementGroupScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentAtManagementGroupScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentAtManagementGroupScope.__pulumiType;
    }

    /**
     * the location of the deployment.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the deployment.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Deployment properties.
     */
    public readonly properties!: pulumi.Output<outputs.management.v20190701.DeploymentPropertiesExtendedResponse>;
    /**
     * The type of the deployment.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeploymentAtManagementGroupScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentAtManagementGroupScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.deploymentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deploymentName'");
            }
            if ((!args || args.groupId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.properties === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'properties'");
            }
            inputs["deploymentName"] = args ? args.deploymentName : undefined;
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:management/latest:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20190501:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20190510:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20190801:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20191001:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20200601:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20200801:DeploymentAtManagementGroupScope" }, { type: "azure-nextgen:management/v20201001:DeploymentAtManagementGroupScope" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(DeploymentAtManagementGroupScope.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentAtManagementGroupScope resource.
 */
export interface DeploymentAtManagementGroupScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: pulumi.Input<string>;
    /**
     * The management group ID.
     */
    readonly groupId: pulumi.Input<string>;
    /**
     * The location to store the deployment data.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The deployment properties.
     */
    readonly properties: pulumi.Input<inputs.management.v20190701.DeploymentProperties>;
}
