import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VirtualRouter Resource.
 */
export declare class VirtualRouter extends pulumi.CustomResource {
    /**
     * Get an existing VirtualRouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualRouter;
    /**
     * Returns true if the given object is an instance of VirtualRouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualRouter;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    readonly hostedGateway: pulumi.Output<outputs.network.v20191201.SubResourceResponse | undefined>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    readonly hostedSubnet: pulumi.Output<outputs.network.v20191201.SubResourceResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of references to VirtualRouterPeerings.
     */
    readonly peerings: pulumi.Output<outputs.network.v20191201.SubResourceResponse[]>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * VirtualRouter ASN.
     */
    readonly virtualRouterAsn: pulumi.Output<number | undefined>;
    /**
     * VirtualRouter IPs.
     */
    readonly virtualRouterIps: pulumi.Output<string[] | undefined>;
    /**
     * Create a VirtualRouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualRouterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualRouter resource.
 */
export interface VirtualRouterArgs {
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    readonly hostedGateway?: pulumi.Input<inputs.network.v20191201.SubResource>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    readonly hostedSubnet?: pulumi.Input<inputs.network.v20191201.SubResource>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * VirtualRouter ASN.
     */
    readonly virtualRouterAsn?: pulumi.Input<number>;
    /**
     * VirtualRouter IPs.
     */
    readonly virtualRouterIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Virtual Router.
     */
    readonly virtualRouterName: pulumi.Input<string>;
}
