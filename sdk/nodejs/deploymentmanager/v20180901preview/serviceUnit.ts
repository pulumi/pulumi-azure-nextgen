// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Represents the response of a service unit resource.
 */
export class ServiceUnit extends pulumi.CustomResource {
    /**
     * Get an existing ServiceUnit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceUnit {
        return new ServiceUnit(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:deploymentmanager/v20180901preview:ServiceUnit';

    /**
     * Returns true if the given object is an instance of ServiceUnit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceUnit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceUnit.__pulumiType;
    }

    /**
     * The artifacts for the service unit.
     */
    public readonly artifacts!: pulumi.Output<outputs.deploymentmanager.v20180901preview.ServiceUnitArtifactsResponse | undefined>;
    /**
     * Describes the type of ARM deployment to be performed on the resource.
     */
    public readonly deploymentMode!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
     */
    public readonly targetResourceGroup!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServiceUnit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceUnitArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.deploymentMode === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deploymentMode'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.serviceTopologyName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceTopologyName'");
            }
            if ((!args || args.serviceUnitName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceUnitName'");
            }
            if ((!args || args.targetResourceGroup === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'targetResourceGroup'");
            }
            inputs["artifacts"] = args ? args.artifacts : undefined;
            inputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceName"] = args ? args.serviceName : undefined;
            inputs["serviceTopologyName"] = args ? args.serviceTopologyName : undefined;
            inputs["serviceUnitName"] = args ? args.serviceUnitName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetResourceGroup"] = args ? args.targetResourceGroup : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["artifacts"] = undefined /*out*/;
            inputs["deploymentMode"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["targetResourceGroup"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:deploymentmanager/v20191101preview:ServiceUnit" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServiceUnit.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServiceUnit resource.
 */
export interface ServiceUnitArgs {
    /**
     * The artifacts for the service unit.
     */
    readonly artifacts?: pulumi.Input<inputs.deploymentmanager.v20180901preview.ServiceUnitArtifacts>;
    /**
     * Describes the type of ARM deployment to be performed on the resource.
     */
    readonly deploymentMode: pulumi.Input<enums.deploymentmanager.v20180901preview.DeploymentMode>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * The name of the service topology .
     */
    readonly serviceTopologyName: pulumi.Input<string>;
    /**
     * The name of the service unit resource.
     */
    readonly serviceUnitName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
     */
    readonly targetResourceGroup: pulumi.Input<string>;
}
