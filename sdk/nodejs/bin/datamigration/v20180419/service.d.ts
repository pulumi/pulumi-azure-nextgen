import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Database Migration Service resource
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
     * HTTP strong entity tag value. Ignored if submitted
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource's provisioning state
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    readonly publicKey: pulumi.Output<string | undefined>;
    /**
     * Service SKU
     */
    readonly sku: pulumi.Output<outputs.datamigration.v20180419.ServiceSkuResponse | undefined>;
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
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    readonly virtualSubnetId: pulumi.Output<string>;
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
     * HTTP strong entity tag value. Ignored if submitted
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    readonly publicKey?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Service SKU
     */
    readonly sku?: pulumi.Input<inputs.datamigration.v20180419.ServiceSku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    readonly virtualSubnetId: pulumi.Input<string>;
}
