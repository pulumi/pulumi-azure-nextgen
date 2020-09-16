import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a Shared Private Link Resource managed by the Azure Cognitive Search service.
 */
export declare class SharedPrivateLinkResource extends pulumi.CustomResource {
    /**
     * Get an existing SharedPrivateLinkResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SharedPrivateLinkResource;
    /**
     * Returns true if the given object is an instance of SharedPrivateLinkResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SharedPrivateLinkResource;
    /**
     * The name of the shared private link resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
     */
    readonly properties: pulumi.Output<outputs.search.v20200313.SharedPrivateLinkResourcePropertiesResponse>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SharedPrivateLinkResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedPrivateLinkResourceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SharedPrivateLinkResource resource.
 */
export interface SharedPrivateLinkResourceArgs {
    /**
     * Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
     */
    readonly properties?: pulumi.Input<inputs.search.v20200313.SharedPrivateLinkResourceProperties>;
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    readonly searchServiceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
     */
    readonly sharedPrivateLinkResourceName: pulumi.Input<string>;
}
