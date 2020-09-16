import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Nat Gateway resource.
 */
export declare class NatGateway extends pulumi.CustomResource {
    /**
     * Get an existing NatGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NatGateway;
    /**
     * Returns true if the given object is an instance of NatGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NatGateway;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The idle timeout of the nat gateway.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the NAT gateway resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    readonly publicIpAddresses: pulumi.Output<outputs.network.v20200401.SubResourceResponse[] | undefined>;
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes: pulumi.Output<outputs.network.v20200401.SubResourceResponse[] | undefined>;
    /**
     * The resource GUID property of the NAT gateway resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * The nat gateway SKU.
     */
    readonly sku: pulumi.Output<outputs.network.v20200401.NatGatewaySkuResponse | undefined>;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: pulumi.Output<outputs.network.v20200401.SubResourceResponse[]>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a NatGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NatGateway resource.
 */
export interface NatGatewayArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The idle timeout of the nat gateway.
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the nat gateway.
     */
    readonly natGatewayName: pulumi.Input<string>;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    readonly publicIpAddresses?: pulumi.Input<pulumi.Input<inputs.network.v20200401.SubResource>[]>;
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes?: pulumi.Input<pulumi.Input<inputs.network.v20200401.SubResource>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The nat gateway SKU.
     */
    readonly sku?: pulumi.Input<inputs.network.v20200401.NatGatewaySku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
