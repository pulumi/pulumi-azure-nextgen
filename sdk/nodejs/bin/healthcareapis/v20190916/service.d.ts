import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The description of the service.
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity: pulumi.Output<outputs.healthcareapis.v20190916.ResourceResponseIdentity | undefined>;
    /**
     * The kind of the service.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The common properties of a service.
     */
    readonly properties: pulumi.Output<outputs.healthcareapis.v20190916.ServicesPropertiesResponse>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: pulumi.Input<inputs.healthcareapis.v20190916.ResourceIdentity>;
    /**
     * The kind of the service.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The common properties of a service.
     */
    readonly properties?: pulumi.Input<inputs.healthcareapis.v20190916.ServicesProperties>;
    /**
     * The name of the resource group that contains the service instance.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
