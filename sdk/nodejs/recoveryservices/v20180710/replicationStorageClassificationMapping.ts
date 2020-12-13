// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Storage mapping object.
 */
export class ReplicationStorageClassificationMapping extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationStorageClassificationMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationStorageClassificationMapping {
        return new ReplicationStorageClassificationMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:recoveryservices/v20180710:ReplicationStorageClassificationMapping';

    /**
     * Returns true if the given object is an instance of ReplicationStorageClassificationMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationStorageClassificationMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationStorageClassificationMapping.__pulumiType;
    }

    /**
     * Resource Location
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the storage mapping object.
     */
    public readonly properties!: pulumi.Output<outputs.recoveryservices.v20180710.StorageClassificationMappingPropertiesResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationStorageClassificationMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationStorageClassificationMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.fabricName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.storageClassificationMappingName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storageClassificationMappingName'");
            }
            if ((!args || args.storageClassificationName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storageClassificationName'");
            }
            inputs["fabricName"] = args ? args.fabricName : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["storageClassificationMappingName"] = args ? args.storageClassificationMappingName : undefined;
            inputs["storageClassificationName"] = args ? args.storageClassificationName : undefined;
            inputs["location"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:recoveryservices/latest:ReplicationStorageClassificationMapping" }, { type: "azure-nextgen:recoveryservices/v20160810:ReplicationStorageClassificationMapping" }, { type: "azure-nextgen:recoveryservices/v20180110:ReplicationStorageClassificationMapping" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ReplicationStorageClassificationMapping.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationStorageClassificationMapping resource.
 */
export interface ReplicationStorageClassificationMappingArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: pulumi.Input<string>;
    /**
     * Storage mapping input properties.
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.v20180710.StorageMappingInputProperties>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Storage classification mapping name.
     */
    readonly storageClassificationMappingName: pulumi.Input<string>;
    /**
     * Storage classification name.
     */
    readonly storageClassificationName: pulumi.Input<string>;
}
