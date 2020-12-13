// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * Slot Config names azure resource.
 */
export class WebAppSlotConfigurationNames extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSlotConfigurationNames resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSlotConfigurationNames {
        return new WebAppSlotConfigurationNames(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/v20200601:WebAppSlotConfigurationNames';

    /**
     * Returns true if the given object is an instance of WebAppSlotConfigurationNames.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSlotConfigurationNames {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSlotConfigurationNames.__pulumiType;
    }

    /**
     * List of application settings names.
     */
    public readonly appSettingNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of external Azure storage account identifiers.
     */
    public readonly azureStorageConfigNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of connection string names.
     */
    public readonly connectionStringNames!: pulumi.Output<string[] | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppSlotConfigurationNames resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSlotConfigurationNamesArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["appSettingNames"] = args ? args.appSettingNames : undefined;
            inputs["azureStorageConfigNames"] = args ? args.azureStorageConfigNames : undefined;
            inputs["connectionStringNames"] = args ? args.connectionStringNames : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["appSettingNames"] = undefined /*out*/;
            inputs["azureStorageConfigNames"] = undefined /*out*/;
            inputs["connectionStringNames"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/latest:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20150801:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20160801:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20180201:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20181101:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20190801:WebAppSlotConfigurationNames" }, { type: "azure-nextgen:web/v20200901:WebAppSlotConfigurationNames" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WebAppSlotConfigurationNames.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSlotConfigurationNames resource.
 */
export interface WebAppSlotConfigurationNamesArgs {
    /**
     * List of application settings names.
     */
    readonly appSettingNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of external Azure storage account identifiers.
     */
    readonly azureStorageConfigNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of connection string names.
     */
    readonly connectionStringNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
