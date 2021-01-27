// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Represents a ApplicationGroup definition.
 */
export class ApplicationGroup extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGroup {
        return new ApplicationGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:desktopvirtualization/v20191210preview:ApplicationGroup';

    /**
     * Returns true if the given object is an instance of ApplicationGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationGroup.__pulumiType;
    }

    /**
     * Resource Type of ApplicationGroup.
     */
    public readonly applicationGroupType!: pulumi.Output<string>;
    /**
     * Description of ApplicationGroup.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Friendly name of ApplicationGroup.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    public readonly hostPoolArmPath!: pulumi.Output<string>;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Workspace arm path of ApplicationGroup.
     */
    public /*out*/ readonly workspaceArmPath!: pulumi.Output<string>;

    /**
     * Create a ApplicationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.applicationGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'applicationGroupName'");
            }
            if ((!args || args.applicationGroupType === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'applicationGroupType'");
            }
            if ((!args || args.hostPoolArmPath === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'hostPoolArmPath'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["applicationGroupName"] = args ? args.applicationGroupName : undefined;
            inputs["applicationGroupType"] = args ? args.applicationGroupType : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["friendlyName"] = args ? args.friendlyName : undefined;
            inputs["hostPoolArmPath"] = args ? args.hostPoolArmPath : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["workspaceArmPath"] = undefined /*out*/;
        } else {
            inputs["applicationGroupType"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["friendlyName"] = undefined /*out*/;
            inputs["hostPoolArmPath"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["workspaceArmPath"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:desktopvirtualization/v20190123preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20190924preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20200921preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20201019preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20201102preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20201110preview:ApplicationGroup" }, { type: "azure-nextgen:desktopvirtualization/v20210114preview:ApplicationGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ApplicationGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationGroup resource.
 */
export interface ApplicationGroupArgs {
    /**
     * The name of the application group
     */
    readonly applicationGroupName: pulumi.Input<string>;
    /**
     * Resource Type of ApplicationGroup.
     */
    readonly applicationGroupType: pulumi.Input<string | enums.desktopvirtualization.v20191210preview.ApplicationGroupType>;
    /**
     * Description of ApplicationGroup.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Friendly name of ApplicationGroup.
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    readonly hostPoolArmPath: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
