// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Maintenance configuration record type
 */
export class MaintenanceConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing MaintenanceConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MaintenanceConfiguration {
        return new MaintenanceConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:maintenance/v20180601preview:MaintenanceConfiguration';

    /**
     * Returns true if the given object is an instance of MaintenanceConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MaintenanceConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MaintenanceConfiguration.__pulumiType;
    }

    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration
     */
    public readonly extensionProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets location of the resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets maintenanceScope of the configuration
     */
    public readonly maintenanceScope!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets namespace of the resource
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets tags of the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MaintenanceConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MaintenanceConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["extensionProperties"] = args ? args.extensionProperties : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maintenanceScope"] = args ? args.maintenanceScope : undefined;
            inputs["namespace"] = args ? args.namespace : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["extensionProperties"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["maintenanceScope"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["namespace"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:maintenance/latest:MaintenanceConfiguration" }, { type: "azure-nextgen:maintenance/v20200401:MaintenanceConfiguration" }, { type: "azure-nextgen:maintenance/v20200701preview:MaintenanceConfiguration" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(MaintenanceConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a MaintenanceConfiguration resource.
 */
export interface MaintenanceConfigurationArgs {
    /**
     * Gets or sets extensionProperties of the maintenanceConfiguration
     */
    readonly extensionProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets location of the resource
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets maintenanceScope of the configuration
     */
    readonly maintenanceScope?: pulumi.Input<string | enums.maintenance.v20180601preview.MaintenanceScope>;
    /**
     * Gets or sets namespace of the resource
     */
    readonly namespace?: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource Identifier
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Gets or sets tags of the resource
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
