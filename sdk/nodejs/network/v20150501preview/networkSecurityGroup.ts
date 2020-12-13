// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * NetworkSecurityGroup resource
 */
export class NetworkSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkSecurityGroup {
        return new NetworkSecurityGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20150501preview:NetworkSecurityGroup';

    /**
     * Returns true if the given object is an instance of NetworkSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkSecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkSecurityGroup.__pulumiType;
    }

    /**
     * Gets or sets Default security rules of network security group
     */
    public readonly defaultSecurityRules!: pulumi.Output<outputs.network.v20150501preview.SecurityRuleResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets collection of references to Network Interfaces
     */
    public readonly networkInterfaces!: pulumi.Output<outputs.network.v20150501preview.SubResourceResponse[] | undefined>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource guid property of the network security group resource
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets Security rules of network security group
     */
    public readonly securityRules!: pulumi.Output<outputs.network.v20150501preview.SecurityRuleResponse[] | undefined>;
    /**
     * Gets collection of references to subnets
     */
    public readonly subnets!: pulumi.Output<outputs.network.v20150501preview.SubResourceResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.networkSecurityGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'networkSecurityGroupName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["defaultSecurityRules"] = args ? args.defaultSecurityRules : undefined;
            inputs["etag"] = args ? args.etag : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["networkInterfaces"] = args ? args.networkInterfaces : undefined;
            inputs["networkSecurityGroupName"] = args ? args.networkSecurityGroupName : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            inputs["securityRules"] = args ? args.securityRules : undefined;
            inputs["subnets"] = args ? args.subnets : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["defaultSecurityRules"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["networkInterfaces"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceGuid"] = undefined /*out*/;
            inputs["securityRules"] = undefined /*out*/;
            inputs["subnets"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20150615:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20160330:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20160601:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20160901:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20161201:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20170301:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20170601:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20170801:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20170901:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20171001:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20171101:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180101:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180201:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180401:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180601:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180701:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20180801:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20181001:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20181101:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20181201:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190201:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190401:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190601:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190701:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190801:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20190901:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20191101:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20191201:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20200301:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20200401:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20200501:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20200601:NetworkSecurityGroup" }, { type: "azure-nextgen:network/v20200701:NetworkSecurityGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(NetworkSecurityGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupArgs {
    /**
     * Gets or sets Default security rules of network security group
     */
    readonly defaultSecurityRules?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.SecurityRule>[]>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Gets collection of references to Network Interfaces
     */
    readonly networkInterfaces?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.SubResource>[]>;
    /**
     * The name of the network security group.
     */
    readonly networkSecurityGroupName: pulumi.Input<string>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource guid property of the network security group resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Gets or sets Security rules of network security group
     */
    readonly securityRules?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.SecurityRule>[]>;
    /**
     * Gets collection of references to subnets
     */
    readonly subnets?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.SubResource>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
