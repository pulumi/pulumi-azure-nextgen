// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The description of the DigitalTwins service.
 */
export class DigitalTwin extends pulumi.CustomResource {
    /**
     * Get an existing DigitalTwin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DigitalTwin {
        return new DigitalTwin(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:digitaltwins/v20201201:DigitalTwin';

    /**
     * Returns true if the given object is an instance of DigitalTwin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DigitalTwin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DigitalTwin.__pulumiType;
    }

    /**
     * Time when DigitalTwinsInstance was created.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Api endpoint to work with DigitalTwinsInstance.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The managed identity for the DigitalTwinsInstance.
     */
    public readonly identity!: pulumi.Output<outputs.digitaltwins.v20201201.DigitalTwinsIdentityResponse | undefined>;
    /**
     * Time when DigitalTwinsInstance was updated.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly privateEndpointConnections!: pulumi.Output<outputs.digitaltwins.v20201201.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public network access for the DigitalTwinsInstance.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DigitalTwin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DigitalTwinArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            inputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["createdTime"] = undefined /*out*/;
            inputs["hostName"] = undefined /*out*/;
            inputs["lastUpdatedTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["createdTime"] = undefined /*out*/;
            inputs["hostName"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["lastUpdatedTime"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["privateEndpointConnections"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicNetworkAccess"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:digitaltwins/latest:DigitalTwin" }, { type: "azure-nextgen:digitaltwins/v20200301preview:DigitalTwin" }, { type: "azure-nextgen:digitaltwins/v20201031:DigitalTwin" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(DigitalTwin.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a DigitalTwin resource.
 */
export interface DigitalTwinArgs {
    /**
     * The managed identity for the DigitalTwinsInstance.
     */
    readonly identity?: pulumi.Input<inputs.digitaltwins.v20201201.DigitalTwinsIdentity>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    readonly privateEndpointConnections?: pulumi.Input<pulumi.Input<inputs.digitaltwins.v20201201.PrivateEndpointConnection>[]>;
    /**
     * Public network access for the DigitalTwinsInstance.
     */
    readonly publicNetworkAccess?: pulumi.Input<string | enums.digitaltwins.v20201201.PublicNetworkAccess>;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
